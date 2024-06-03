/*
 * Copyright (c) 2023 MKLabs. All rights reserved.
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

import { type EditorOptions } from "./editor";
import {
  SelectHandler,
  HandHandler,
  RectangleFactoryHandler,
  EllipseFactoryHandler,
  TextFactoryHandler,
  ConnectorFactoryHandler,
  LineFactoryHandler,
  FreehandFactoryHandler,
  HighlighterFactoryHandler,
  ImageFactoryHandler,
  EmbedFactoryHandler,
} from "./handlers";
import { FrameFactoryHandler } from "./handlers/frame-handler";

export function basicSetup(
  options?: Partial<EditorOptions>
): Partial<EditorOptions> {
  return {
    handlers: [
      new SelectHandler("Select"),
      new HandHandler("Hand", { defaultLock: true }),
      new RectangleFactoryHandler("Rectangle", { defaultLock: false }),
      new EllipseFactoryHandler("Ellipse", { defaultLock: false }),
      new TextFactoryHandler("Text", { defaultLock: false }),
      new ConnectorFactoryHandler("Connector", { defaultLock: false }),
      new LineFactoryHandler("Line", { defaultLock: false }),
      new FreehandFactoryHandler("Freehand", { defaultLock: true }),
      new HighlighterFactoryHandler("Highlighter", { defaultLock: true }),
      new ImageFactoryHandler("Image", { defaultLock: false }),
      new FrameFactoryHandler("Frame", { defaultLock: false }),
      new EmbedFactoryHandler("Embed", { defaultLock: false }),
    ],
    defaultHandlerId: "Select",
    keymap: {
      "mod-z": (editor) => editor.actions.undo(),
      "mod-y": (editor) => editor.actions.redo(),
      "mod-x": (editor) => editor.actions.cut(),
      "mod-c": (editor) => editor.actions.copy(),
      "mod-d": (editor) => editor.actions.duplicate(),
      "mod-v": (editor) => editor.actions.paste(),
      delete: (editor) => editor.actions.remove(),
      "mod-a": (editor) => editor.selection.selectAll(),
      "mod-[": (editor) => editor.actions.bringForward(),
      "mod-]": (editor) => editor.actions.sendBackward(),
      "mod-alt-[": (editor) => editor.actions.bringToFront(),
      "mod-alt-]": (editor) => editor.actions.sendToBack(),
      "mod-g": (editor) => editor.actions.group(),
      "mod-shift-g": (editor) => editor.actions.ungroup(),
      up: (editor) => editor.actions.move(0, -editor.getGridSize()[1]),
      down: (editor) => editor.actions.move(0, editor.getGridSize()[1]),
      left: (editor) => editor.actions.move(-editor.getGridSize()[0], 0),
      right: (editor) => editor.actions.move(editor.getGridSize()[0], 0),
      "mod-'": (editor) => editor.setShowGrid(!editor.getShowGrid()),
      "mod-=": (editor) => editor.zoom(editor.getScale() + 0.1),
      "mod-plus": (editor) => editor.zoom(editor.getScale() + 0.1),
      "mod-minus": (editor) => editor.zoom(editor.getScale() - 0.1),
      "mod-0": (editor) => editor.zoom(1),
      "mod-9": (editor) => editor.fitToScreen(),
      "mod-up": (editor) => editor.scroll(0, -editor.getGridSize()[1]),
      "mod-down": (editor) => editor.scroll(0, editor.getGridSize()[1]),
      "mod-left": (editor) => editor.scroll(-editor.getGridSize()[0], 0),
      "mod-right": (editor) => editor.scroll(editor.getGridSize()[0], 0),
    },
    keymapEventTarget: null,
    allowAutoScroll: true,
    allowCreateTextOnCanvas: true,
    allowCreateTextOnConnector: true,
    ...(options ?? {}),
  };
}
