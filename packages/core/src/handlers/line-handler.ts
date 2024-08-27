import { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Line, Shape } from "../shapes";
import { Editor, Handler } from "../editor";
import { Mouse, MAGNET_THRESHOLD, Cursor } from "../graphics/const";
import { addShape, resolveAllConstraints, setPath } from "../macro";
import { ActionKind } from "../core";

/**
 * Line Factory Handler
 */
export class LineFactoryHandler extends Handler {
  dragging: boolean = false;
  dragStartPoint: number[] = [-1, -1];
  dragPoint: number[] = [-1, -1];
  points: number[][] = [];
  closed: boolean = false;
  draggingMoved: boolean = false;
  multiPointMode: boolean = false;
  shape: Line | null = null;

  reset() {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.points = [];
    this.closed = false;
    this.draggingMoved = false;
    this.multiPointMode = false;
    this.shape = null;
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
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
    const page = editor.getCurrentPage();
    if (page && this.shape) {
      const newPath = [...this.points, this.dragPoint];
      editor.transform.transact((tx) => {
        setPath(tx, this.shape!, newPath);
        resolveAllConstraints(tx, page, editor.canvas);
      });
    }
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
          const p = canvas.globalCoordTransformRev([e.x, e.y]);
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
    }
    editor.repaint();
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
    editor.setCursor(Cursor.CROSSHAIR);
  }

  onDeactivate(editor: Editor): void {
    this.reset();
    editor.setCursor(Cursor.DEFAULT);
  }
}
