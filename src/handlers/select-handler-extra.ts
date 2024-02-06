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

import { CanvasPointerEvent } from "../graphics/graphics";
import { Box } from "../shapes";
import { Editor } from "../editor";
import { Mouse } from "../graphics/const";
import { findConnectionPoint } from "../controllers/utils";
import { SelectHandler, SelectHandlerExtraBehavior } from "./select-handler";
import { ConnectorFactoryHandler } from "./connector-handler";

/**
 * SelectHandler's extra behavior for creating connectors between boxes.
 */
export class SelectHandlerConnectorExtraBehavior extends SelectHandlerExtraBehavior {
  onConnection: boolean;
  connectorHandler: ConnectorFactoryHandler;

  constructor() {
    super();
    this.onConnection = false;
    this.connectorHandler = new ConnectorFactoryHandler(
      "connector-extra-behavior"
    );
  }

  /**
   * Test whether pointer is on outline or connection points of any shapes that
   * 1. instanceof Box
   * 2. connectable
   * 3. not selected
   * 4. pointer is near outline or connection points
   * 5. pointer is not inside of (작은 도형의 경우 선택이 어려워지므로)
   * 6. there is no other shape at the pointer
   */
  isPointerOnConnection(
    selectHandler: SelectHandler,
    editor: Editor,
    e: CanvasPointerEvent
  ) {
    const canvas = editor.canvas;
    const p = canvas.globalCoordTransformRev([e.x, e.y]);
    const [end, cp] = findConnectionPoint(editor, null, p);
    const shape = selectHandler.getShapeAt(editor, e);
    return (
      selectHandler.activeManipulator === null &&
      !selectHandler.dragging &&
      !shape &&
      end instanceof Box &&
      end.connectable &&
      !end.containsPoint(canvas, p) &&
      cp &&
      !editor.state.selections.isSelected(end)
    );
  }

  pointerDown(
    selectHandler: SelectHandler,
    editor: Editor,
    e: CanvasPointerEvent
  ): boolean {
    if (e.button === Mouse.BUTTON1) {
      if (this.isPointerOnConnection(selectHandler, editor, e)) {
        this.onConnection = true;
        // 모바일에서는 pointerMove 발생하지 않으므로, pointerMove 한번 호출해준다.
        this.connectorHandler.pointerMove(editor, e);
        this.connectorHandler.pointerDown(editor, e);
        return true;
      }
    }
    return false;
  }

  pointerMove(
    selectHandler: SelectHandler,
    editor: Editor,
    e: CanvasPointerEvent
  ): boolean {
    // connectable hovering
    if (this.onConnection) {
      this.connectorHandler.pointerMove(editor, e);
      return true;
    }
    if (this.isPointerOnConnection(selectHandler, editor, e)) {
      this.connectorHandler.pointerMove(editor, e);
      return true;
    }
    return false;
  }

  pointerUp(
    selectHandler: SelectHandler,
    editor: Editor,
    e: CanvasPointerEvent
  ): boolean {
    if (this.onConnection) {
      this.connectorHandler.pointerUp(editor, e);
      this.onConnection = false;
      return true;
    }
    this.onConnection = false;
    return false;
  }

  keyDown(
    selectHandler: SelectHandler,
    editor: Editor,
    e: KeyboardEvent
  ): boolean {
    if (e.key === "Escape") {
      this.onConnection = false;
      this.connectorHandler.initialize();
      editor.repaint();
    }
    return false;
  }
}
