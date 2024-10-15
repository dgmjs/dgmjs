import * as geometry from "../graphics/geometry";
import { Editor, Handler } from "../editor";
import { CanvasPointerEvent } from "../graphics/graphics";
import { Cursor, Mouse } from "../graphics/const";
import { Rectangle, Shape } from "../shapes";
import { addShape, resolveAllConstraints } from "../macro";
import { ActionKind } from "../core";
import { DraggingSnapper } from "../manipulators/snapper";

/**
 * Rectangle Factory Handler
 */
export class RectangleFactoryHandler extends Handler {
  dragging: boolean = false;
  dragStartPoint: number[] = [-1, -1];
  dragPoint: number[] = [-1, -1];
  shape: Rectangle | null = null;

  // gridSnapper: GridSnapper
  draggingSnapper: DraggingSnapper = new DraggingSnapper();

  reset(): void {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.shape = null;
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.getCurrentPage();
    if (page) {
      // create shape
      this.shape = editor.factory.createRectangle([
        this.dragStartPoint,
        this.dragPoint,
      ]);
      editor.transform.startAction(ActionKind.INSERT);
      editor.transform.transact((tx) => {
        addShape(tx, this.shape!, page);
      });
    }
  }

  update(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.getCurrentPage();
    if (page && this.shape) {
      const rect = geometry.normalizeRect([
        this.dragStartPoint,
        this.dragPoint,
      ]);
      editor.transform.transact((tx) => {
        tx.assign(this.shape!, "left", rect[0][0]);
        tx.assign(this.shape!, "top", rect[0][1]);
        tx.assign(this.shape!, "width", geometry.width(rect));
        tx.assign(this.shape!, "height", geometry.height(rect));
        resolveAllConstraints(tx, page, editor.canvas);
      });
    }
  }

  finalize(editor: Editor, e: CanvasPointerEvent): void {
    const MIN_SIZE = 2;
    if (this.shape) {
      if (this.shape?.width < MIN_SIZE && this.shape?.height < MIN_SIZE) {
        editor.transform.cancelAction();
      } else {
        editor.transform.endAction();
        editor.factory.triggerCreate(this.shape as Shape);
      }
    }
  }

  /**
   * pointerDown
   * @override
   */
  pointerDown(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1) {
      const canvas = editor.canvas;
      this.dragging = true;
      this.dragStartPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.dragPoint = geometry.copy(this.dragStartPoint);
      this.initialize(editor, e);
      editor.repaint();
      this.drawDragging(editor, e);
    }
  }

  /**
   * pointerMove
   * @override
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    if (this.dragging) {
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);

      // update snapping
      const snapped = this.draggingSnapper.snap(editor, [this.dragPoint]);
      if (snapped) {
        const [dx, dy] = snapped;
        this.dragPoint = [this.dragPoint[0] + dx, this.dragPoint[1] + dy];
        this.draggingSnapper.guidePoints = [
          this.dragStartPoint,
          [this.dragPoint[0], this.dragStartPoint[1]],
          [this.dragStartPoint[0], this.dragPoint[1]],
          this.dragPoint,
        ];
      }

      this.update(editor, e);
      editor.repaint();
      this.drawDragging(editor, e);
    } else {
      // update snapping
      const p = canvas.globalCoordTransformRev([e.x, e.y]);
      const snap = this.draggingSnapper.snap(editor, [p]);
      if (snap) {
        // console.log("snapped", snap);
        this.draggingSnapper.guidePoints = [[p[0] + snap[0], p[1] + snap[1]]];
      }
      // console.log(this.draggingSnapper.pointsToSnap[0]);

      editor.repaint();
      this.drawHovering(editor, e);
    }
  }

  /**
   * pointerUp
   * @override
   */
  pointerUp(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1 && this.dragging) {
      this.finalize(editor, e);
      editor.repaint();
      this.reset();
      this.complete(editor);
    }
  }

  keyDown(editor: Editor, e: KeyboardEvent): boolean {
    if (e.key === "Escape" && this.dragging) {
      editor.transform.cancelAction();
      editor.repaint();
      this.reset();
      this.complete(editor);
    }
    return false;
  }

  onActivate(editor: Editor): void {
    editor.setCursor(Cursor.CROSSHAIR);

    // initialize snapping
    this.draggingSnapper.setReferencePoints(editor, []);
  }

  onDeactivate(editor: Editor): void {
    editor.setCursor(Cursor.DEFAULT);
  }

  drawHovering(editor: Editor, e: CanvasPointerEvent) {
    this.draggingSnapper.draw(editor);
  }

  drawDragging(editor: Editor, e: CanvasPointerEvent) {
    // const canvas = editor.canvas;
    // const p1 = canvas.globalCoordTransform(this.dragStartPoint);
    // const p2 = canvas.globalCoordTransform(this.dragPoint);
    // const rect = geometry.normalizeRect([p1, p2]);
    // canvas.strokeColor = Color.SELECTION;
    // canvas.strokeWidth = canvas.px;
    // canvas.strokePattern = [];
    // canvas.roughness = 0;
    // canvas.alpha = 1;
    // canvas.strokeRect(rect[0][0], rect[0][1], rect[1][0], rect[1][1]);

    this.draggingSnapper.draw(editor);
  }
}
