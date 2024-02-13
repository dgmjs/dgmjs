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
  SelectHandlerConnectorExtraBehavior,
  HandHandler,
  RectangleFactoryHandler,
  EllipseFactoryHandler,
  TextFactoryHandler,
  ConnectorFactoryHandler,
  LineFactoryHandler,
  FreehandFactoryHandler,
  ImageFactoryHandler,
} from "./handlers";
import { PlainTextInplaceEditor } from "./inplace-editors/plain-text-editor";

export function basicSetup(options?: EditorOptions): EditorOptions {
  return {
    handlers: [
      new SelectHandler("Select", [new SelectHandlerConnectorExtraBehavior()]),
      new HandHandler("Hand"),
      new RectangleFactoryHandler("Rectangle"),
      new EllipseFactoryHandler("Ellipse"),
      new TextFactoryHandler("Text"),
      new ConnectorFactoryHandler("Connector"),
      new LineFactoryHandler("Line"),
      new FreehandFactoryHandler("Freehand"),
      new ImageFactoryHandler("Image"),
    ],
    keymap: {
      "mod-z": (editor) => editor.actions.undo(),
      "mod-y": (editor) => editor.actions.redo(),
      "mod-x": (editor) => editor.actions.cut(),
      "mod-c": (editor) => editor.actions.copy(),
      "mod-d": (editor) => editor.actions.duplicate(),
      "mod-v": (editor) => editor.actions.paste(),
      delete: (editor) => editor.actions.delete_(),
      "mod-a": (editor) => editor.state.selections.selectAll(),
      "mod-[": (editor) => editor.actions.bringForward(),
      "mod-]": (editor) => editor.actions.sendBackward(),
      "mod-alt-[": (editor) => editor.actions.bringToFront(),
      "mod-alt-]": (editor) => editor.actions.sendToBack(),
      "mod-g": (editor) => editor.actions.group(),
      "mod-shift-g": (editor) => editor.actions.ungroup(),
      up: (editor) => editor.actions.move(0, -editor.gridSize[1]),
      down: (editor) => editor.actions.move(0, editor.gridSize[1]),
      left: (editor) => editor.actions.move(-editor.gridSize[0], 0),
      right: (editor) => editor.actions.move(editor.gridSize[0], 0),
      "mod-'": (editor) => editor.setShowGrid(!editor.showGrid),
      "mod-=": (editor) => editor.zoom(editor.getScale() + 0.1),
      "mod-plus": (editor) => editor.zoom(editor.getScale() + 0.1),
      "mod-minus": (editor) => editor.zoom(editor.getScale() - 0.1),
      "mod-0": (editor) => editor.zoom(1),
      "mod-9": (editor) => editor.fitToScreen(),
      "mod-up": (editor) => editor.scroll(0, -editor.gridSize[1]),
      "mod-down": (editor) => editor.scroll(0, editor.gridSize[1]),
      "mod-left": (editor) => editor.scroll(-editor.gridSize[0], 0),
      "mod-right": (editor) => editor.scroll(editor.gridSize[0], 0),
    },
    inplaceEditors: [new PlainTextInplaceEditor()],
    ...(options ?? {}),
  };
}
