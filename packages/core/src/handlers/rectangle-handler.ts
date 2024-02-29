import * as geometry from "../graphics/geometry";
import { Editor, Handler } from "../editor";
import { CanvasPointerEvent } from "../graphics/graphics";
import { Cursor, Mouse } from "../graphics/const";
import { Document, Rectangle, Shape } from "../shapes";

/**
 * Rectangle Factory Handler
 */
export class RectangleFactoryHandler extends Handler {
  dragging: boolean;
  dragStartPoint: number[];
  dragPoint: number[];
  shape: Rectangle | null;

  constructor(id: string) {
    super(id);
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.shape = null;
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
    this.shape = editor.factory.createRectangle([
      this.dragStartPoint,
      this.dragPoint,
    ]);
    const doc = editor.doc as Document;
    editor.transform.startTransaction("create");
    editor.transform.addShape(this.shape, doc);
  }

  update(editor: Editor, e: CanvasPointerEvent): void {
    if (this.shape) {
      const rect = geometry.normalizeRect([
        this.dragStartPoint,
        this.dragPoint,
      ]);
      editor.transform.atomicAssign(this.shape, "left", rect[0][0]);
      editor.transform.atomicAssign(this.shape, "top", rect[0][1]);
      editor.transform.atomicAssign(this.shape, "width", geometry.width(rect));
      editor.transform.atomicAssign(
        this.shape,
        "height",
        geometry.height(rect)
      );
      editor.transform.resolveAllConstraints(
        editor.doc as Document,
        editor.canvas
      );
    }
  }

  finalize(editor: Editor, e: CanvasPointerEvent): void {
    editor.transform.endTransaction();
    editor.factory.triggerCreate(this.shape as Shape);
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
      this.drawDragging(editor, e);
      this.initialize(editor, e);
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
      this.drawDragging(editor, e);
      this.update(editor, e);
    } else {
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
      this.dragging = false;
      this.dragStartPoint = [-1, -1];
    }
  }

  keyDown(editor: Editor, e: KeyboardEvent): boolean {
    if (e.key === "Escape" && this.dragging) {
      editor.transform.cancelTransaction();
      this.dragging = false;
      editor.repaint();
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
