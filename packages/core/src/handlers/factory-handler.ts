import * as geometry from "../graphics/geometry";
import { Editor, Handler } from "../editor";
import { CanvasPointerEvent } from "../graphics/graphics";
import { Cursor, Mouse } from "../graphics/const";
import { Document, Shape } from "../shapes";

/**
 * Factory Handler
 */
export abstract class FactoryHandler extends Handler {
  dragging: boolean;
  dragStartPoint: number[];
  dragPoint: number[];
  shape: Shape | null;

  constructor(id: string) {
    super(id);
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.shape = null;
  }

  abstract initialize(editor: Editor, e: CanvasPointerEvent): void;

  abstract update(editor: Editor, e: CanvasPointerEvent): void;

  abstract finalize(editor: Editor, e: CanvasPointerEvent): void;

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
