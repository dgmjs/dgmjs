/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import { Editor, Handler } from "../editor";
import { fileOpen } from "browser-fs-access";
import { Document, Image } from "../shapes";
import { geometry } from "..";

/**
 * Image Factory Handler
 */
export class ImageFactoryHandler extends Handler {
  computeProperSize(editor: Editor, image: Image): number[] {
    const rect = editor.getBoundingRect();
    const sw = geometry.width(rect) * 0.7;
    const sh = geometry.height(rect) * 0.7;
    const w = image.imageWidth;
    const h = image.imageHeight;
    if (w > sw || h > sh) {
      const ratio = Math.min(sw / w, sh / h);
      return [w * ratio, h * ratio];
    }
    return [w, h];
  }

  onActivate(editor: Editor): void {
    const asyncFn = async () => {
      try {
        const file = await fileOpen([
          {
            description: "Image files",
            mimeTypes: ["image/png", "image/jpeg", "image/svg+xml"],
            extensions: [".png", ".jpeg", ".jpg", ".svg"],
            multiple: false,
          },
        ]);
        const center = editor.getCenter();
        const shape = await editor.factory.createImage(file, [center, center]);
        const doc = editor.doc as Document;
        const size = this.computeProperSize(editor, shape);
        editor.transform.startTransaction("create");
        editor.transform.addShape(shape, doc);
        editor.transform.resize(shape, size[0], size[1]);
        editor.transform.move(shape, -size[0] / 2, -size[1] / 2);
        editor.transform.resolveAllConstraints(doc, editor.canvas);
        editor.transform.endTransaction();
        editor.factory.triggerCreate(shape);
      } catch (err) {
        // user cancelled
      }
    };
    asyncFn();
  }
}
