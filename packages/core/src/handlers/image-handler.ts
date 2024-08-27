import { Editor, Handler } from "../editor";
import { fileOpen } from "browser-fs-access";
import { addShape, resolveAllConstraints } from "../macro";
import { ActionKind } from "../core";

/**
 * Image Factory Handler
 */
export class ImageFactoryHandler extends Handler {
  onActivate(editor: Editor): void {
    const asyncFn = async () => {
      try {
        const page = editor.getCurrentPage();
        if (page) {
          const file = await fileOpen([
            {
              description: "Image files",
              mimeTypes: [
                "image/png",
                "image/jpeg",
                "image/svg+xml",
                "image/webp",
              ],
              extensions: [".png", ".jpeg", ".jpg", ".svg", ".webp"],
              multiple: false,
            },
          ]);
          const center = editor.getCenter();
          const shape = await editor.factory.createImage(file, center);
          editor.transform.startAction(ActionKind.INSERT);
          editor.transform.transact((tx) => {
            addShape(tx, shape, page);
            resolveAllConstraints(tx, page, editor.canvas);
          });
          editor.transform.endAction();
          editor.factory.triggerCreate(shape);
          this.complete(editor);
        }
      } catch (err) {
        // user cancelled
        this.complete(editor);
      }
    };
    asyncFn();
  }
}
