import { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Line, Shape } from "../shapes";
import { Editor, Handler } from "../editor";
import { Mouse, MAGNET_THRESHOLD, Cursor } from "../graphics/const";
import { addShape, resolveAllConstraints, setPath } from "../macro";
import { ActionKind } from "../core";
import { HandlerSnapper } from "../manipulators/snapper";

/**
 * Line Factory Handler
 */
export class LineFactoryHandler extends Handler {
  points: number[][] = [];
  closed: boolean = false;
  draggingMoved: boolean = false;
  multiPointMode: boolean = false;
  shape: Line | null = null;
  snapper: HandlerSnapper = new HandlerSnapper(false, true);

  reset() {
    super.reset();
    this.points = [];
    this.closed = false;
    this.draggingMoved = false;
    this.multiPointMode = false;
    this.shape = null;
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
    // snap drag start point
    const snapped = this.snapper.snap(editor, this.dragStartPoint);
    if (snapped) {
      const [dx, dy] = snapped;
      this.dragStartPoint = [
        this.dragStartPoint[0] + dx,
        this.dragStartPoint[1] + dy,
      ];
    }

    // create shape
    const page = editor.getCurrentPage();
    if (page) {
      this.points = [this.dragStartPoint];
      this.shape = editor.factory.createLine(this.points, false);
      editor.transform.startAction(ActionKind.INSERT);
      editor.transform.transact((tx) => {
        addShape(tx, this.shape!, page);
      });
    }
  }

  update(editor: Editor, e: CanvasPointerEvent): void {
    // snap drag point
    const snapped = this.snapper.snap(editor, this.dragPoint);
    if (snapped) {
      const [dx, dy] = snapped;
      this.dragPoint = [this.dragPoint[0] + dx, this.dragPoint[1] + dy];
      this.snapper.guidePoints = [
        this.dragStartPoint,
        [this.dragPoint[0], this.dragStartPoint[1]],
        [this.dragStartPoint[0], this.dragPoint[1]],
        this.dragPoint,
      ];
    }

    // update shape
    const page = editor.getCurrentPage();
    if (page && this.shape) {
      const newPath = [...this.points, this.dragPoint];
      editor.transform.transact((tx) => {
        setPath(tx, this.shape!, newPath);
        resolveAllConstraints(tx, page, editor.canvas);
      });
    }
  }

  updateHovering(editor: Editor, e: CanvasPointerEvent): void {
    // snap hovering point
    const p = editor.canvas.globalCoordTransformRev([e.x, e.y]);
    this.snapper.snap(editor, p);
  }

  finalize(editor: Editor, e?: CanvasPointerEvent): void {
    const page = editor.getCurrentPage();
    if (page && this.shape) {
      if (geometry.pathLength(this.shape.path) < 2) {
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
      if (this.multiPointMode) {
        if (this.closed) {
          this.finalize(editor, e);
          this.reset();
          this.complete(editor);
        } else {
          // snap intermediate point
          const p = canvas.globalCoordTransformRev([e.x, e.y]);
          const snapped = this.snapper.snap(editor, p);
          if (snapped) {
            p[0] += snapped[0];
            p[1] += snapped[1];
          }
          this.points.push(p);
        }
      } else {
        this.dragging = true;
        this.dragStartPoint = canvas.globalCoordTransformRev([e.x, e.y]);
        this.dragPoint = geometry.copy(this.dragStartPoint);
        this.points.push(this.dragPoint);
        this.initialize(editor, e);
      }
      editor.repaint();
    }
  }

  /**
   * pointerMove
   * @override
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    if (this.dragging) {
      const canvas = editor.canvas;
      this.draggingMoved = true;
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.closed =
        this.points.length > 2 &&
        geometry.distance(this.points[0], this.dragPoint) <= MAGNET_THRESHOLD;
      if (this.closed) {
        this.dragPoint = geometry.copy(this.points[0]);
      }
      this.update(editor, e);
      editor.repaint();
      this.drawDragging(editor, e);
    } else {
      this.updateHovering(editor, e);
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
      if (!this.draggingMoved) this.multiPointMode = true;
      if (!this.multiPointMode) {
        this.points.push(geometry.copy(this.dragPoint));
        this.finalize(editor, e);
        this.reset();
        this.complete(editor);
        editor.repaint();
      }
    }
  }

  keyDown(editor: Editor, e: KeyboardEvent): boolean {
    if (e.key === "Escape" && this.dragging) {
      const page = editor.getCurrentPage();
      if (page && this.shape) {
        editor.transform.transact((tx) => {
          setPath(tx, this.shape!, structuredClone(this.points));
          resolveAllConstraints(tx, page, editor.canvas);
        });
        this.shape.update(editor.canvas);
      }
      this.finalize(editor);
      editor.repaint();
      this.reset();
      this.complete(editor);
    }
    return false;
  }

  onActivate(editor: Editor): void {
    this.reset();
    this.snapper.setReferences(editor, []);
    editor.setCursor(Cursor.CROSSHAIR);
  }

  onDeactivate(editor: Editor): void {
    this.reset();
    editor.setCursor(Cursor.DEFAULT);
  }

  onActionPerformed(editor: Editor): void {
    this.snapper.setReferences(editor, []);
  }

  drawHovering(editor: Editor, e: CanvasPointerEvent) {
    this.snapper.draw(editor);
  }

  drawDragging(editor: Editor, e: CanvasPointerEvent) {
    this.snapper.draw(editor);
  }
}
