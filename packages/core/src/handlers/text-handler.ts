import * as geometry from "../graphics/geometry";
import { Editor, Handler } from "../editor";
import { CanvasPointerEvent } from "../graphics/graphics";
import { Cursor, Mouse } from "../graphics/const";
import { Text } from "../shapes";

/**
 * Text Factory Handler
 */
export class TextFactoryHandler extends Handler {
  shape: Text | null = null;

  reset(): void {
    this.shape = null;
  }

  /**
   * pointerDown
   * @override
   */
  pointerDown(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1) {
      const canvas = editor.canvas;
      const p = canvas.globalCoordTransformRev([e.x, e.y]);
      const r = geometry.normalizeRect([p, geometry.copy(p)]);
      this.shape = editor.factory.createText(r);
      editor.actions.insert(this.shape);
      editor.factory.triggerCreate(this.shape);
      this.complete(editor);
    }
  }

  onActivate(editor: Editor): void {
    editor.setCursor(Cursor.CROSSHAIR);
  }

  onDeactivate(editor: Editor): void {
    editor.setCursor(Cursor.DEFAULT);
  }
}
