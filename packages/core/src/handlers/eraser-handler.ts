import { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Editor, Handler } from "../editor";
import { Mouse, Cursor } from "../graphics/const";
import { deleteShapes, resolveAllConstraints } from "../macro";
import { Shape } from "../shapes";

/**
 * Eraser Handler
 */
export class EraserHandler extends Handler {
  dragging: boolean = false;
  dragStartPoint: number[] = [-1, -1];
  dragPoint: number[] = [-1, -1];
  dx: number = 0;
  dy: number = 0;
  deletingShapes: Shape[] = [];

  reset(): void {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.dx = 0;
    this.dy = 0;
    this.deletingShapes = [];
  }

  addToDeletingShapes(editor: Editor, point: number[]) {
    const page = editor.getCurrentPage();
    if (page) {
      const shape = page.getShapeAt(editor.canvas, point);
      if (shape && !this.deletingShapes.includes(shape)) {
        editor.transform.transact((tx) => {
          tx.assign(shape, "opacity", shape.opacity * 0.15);
          resolveAllConstraints(tx, page, editor.canvas);
        });
        this.deletingShapes.push(shape);
      }
    }
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
    editor.transform.startAction("erase");
    this.addToDeletingShapes(editor, this.dragStartPoint);
  }

  update(editor: Editor, e: CanvasPointerEvent): void {
    this.addToDeletingShapes(editor, this.dragPoint);
  }

  finalize(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.getCurrentPage();
    if (page) {
      editor.transform.transact((tx) => {
        deleteShapes(tx, page, this.deletingShapes);
        resolveAllConstraints(tx, page, editor.canvas);
      });
    }
    editor.transform.endAction();
  }

  /**
   * handle pointer down event
   */
  pointerDown(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1) {
      const canvas = editor.canvas;
      this.dragging = true;
      this.dragStartPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.dragPoint = geometry.copy(this.dragStartPoint);
      this.dx = 0;
      this.dy = 0;
      this.initialize(editor, e);
    }
  }

  /**
   * handle pointer move event
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    editor.repaint();
    if (this.dragging) {
      const canvas = editor.canvas;
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.dx = this.dragPoint[0] - this.dragStartPoint[0];
      this.dy = this.dragPoint[1] - this.dragStartPoint[1];
      this.update(editor, e);
    }
  }

  /**
   * handle pointer up event
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
  }

  onDeactivate(editor: Editor): void {
    editor.setCursor(Cursor.DEFAULT);
  }
}
