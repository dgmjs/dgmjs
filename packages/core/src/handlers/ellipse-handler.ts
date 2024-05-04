import * as geometry from "../graphics/geometry";
import { Editor, Handler } from "../editor";
import { CanvasPointerEvent } from "../graphics/graphics";
import { Ellipse, Shape } from "../shapes";
import { Cursor, Mouse } from "../graphics/const";
import { addShape, resolveAllConstraints } from "../macro";

/**
 * Ellipse Factory Handler
 */
export class EllipseFactoryHandler extends Handler {
  dragging: boolean = false;
  dragStartPoint: number[] = [-1, -1];
  dragPoint: number[] = [-1, -1];
  shape: Ellipse | null = null;

  reset(): void {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.shape = null;
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.currentPage;
    if (page) {
      this.shape = editor.factory.createEllipse([
        this.dragStartPoint,
        this.dragPoint,
      ]);
      editor.transform.startAction("create");
      editor.transform.transact((tx) => {
        addShape(tx, this.shape!, page);
      });
    }
  }

  update(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.currentPage;
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
    editor.repaint();
    if (this.dragging) {
      const canvas = editor.canvas;
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.update(editor, e);
      editor.repaint();
      this.drawDragging(editor, e);
    } else {
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
      this.done(editor);
    }
  }

  keyDown(editor: Editor, e: KeyboardEvent): boolean {
    if (e.key === "Escape" && this.dragging) {
      editor.transform.cancelAction();
      editor.repaint();
      this.reset();
      this.done(editor);
    }
    return false;
  }

  onActivate(editor: Editor): void {
    editor.setCursor(Cursor.CROSSHAIR);
  }

  onDeactivate(editor: Editor): void {
    editor.setCursor(Cursor.DEFAULT);
  }

  drawHovering(editor: Editor, e: CanvasPointerEvent) {}

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
  }
}
