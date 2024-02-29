import * as geometry from "../graphics/geometry";
import { Editor } from "../editor";
import { CanvasPointerEvent } from "../graphics/graphics";
import { Document, Rectangle, Shape } from "../shapes";
import { FactoryHandler } from "./factory-handler";

/**
 * Rectangle Factory Handler
 */
export class RectangleFactoryHandler extends FactoryHandler {
  shape: Rectangle | null;

  constructor(id: string) {
    super(id);
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
}
