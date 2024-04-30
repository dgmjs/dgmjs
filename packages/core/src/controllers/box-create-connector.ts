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

import type { Canvas, CanvasPointerEvent } from "../graphics/graphics";
import { Shape, Box, Connector } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import {
  Cursor,
  CONTROL_POINT_APOTHEM,
  ControllerPosition,
} from "../graphics/const";
import { lcs2ccs } from "../graphics/utils";
import * as guide from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { findConnectionAnchor, getControllerPosition } from "./utils";
import { addShape, resolveAllConstraints, setLinePath } from "../mutates";

interface BoxCreateConnectorControllerOptions {
  position: string;
  distance: number;
}

/**
 * Box Create Connector Controller
 */
export class BoxCreateConnectorController extends Controller {
  /**
   * Options of the controller
   */
  options: BoxCreateConnectorControllerOptions;

  /**
   * connector to be created
   */
  connector: Connector | null;

  /**
   * Snap support for controller
   */
  snap: Snap;

  constructor(
    manipulator: Manipulator,
    options?: Partial<BoxCreateConnectorControllerOptions>
  ) {
    super(manipulator);
    this.snap = new Snap();
    this.connector = null;
    this.options = {
      position: ControllerPosition.BOTTOM,
      distance: CONTROL_POINT_APOTHEM * 4,
      ...options,
    };
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    let value =
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape.connectable;
    return value;
  }

  /**
   * Get coord of the control point in CCS
   */
  getControlPoint(canvas: Canvas, shape: Shape): number[] {
    return getControllerPosition(
      canvas,
      shape,
      this.options.position,
      this.options.distance
    );
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    const canvas = editor.canvas;
    const p = [e.x, e.y];
    const cpCCS = lcs2ccs(canvas, shape, this.getControlPoint(canvas, shape));
    return guide.inControlPoint(canvas, p, cpCCS, 0);
  }

  /**
   * Returns mouse cursor for the controller
   * @returns cursor [type, angle]
   */
  mouseCursor(
    editor: Editor,
    shape: Shape,
    e: CanvasPointerEvent
  ): [string, number] {
    return [Cursor.POINTER, 0];
  }

  /**
   * Initialize ghost
   */
  initialize(editor: Editor, shape: Shape): void {
    this.connector = editor.factory.createConnector(
      shape,
      [0.5, 0.5],
      null,
      [0.5, 0.5],
      [this.dragStartPointGCS, this.dragPointGCS]
    );
    const page = editor.currentPage!;
    editor.transform.startAction("create");
    editor.transform.transact((tx) => {
      addShape(tx, this.connector!, page);
      resolveAllConstraints(tx, page, editor.canvas);
    });
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    if (this.connector) {
      // find an end and anchor
      const [newEnd, anchor] = findConnectionAnchor(
        editor,
        this.connector,
        this.dragPointGCS
      );
      editor.transform.transact((tx) => {
        const page = editor.currentPage!;
        setLinePath(tx, this.connector!, [
          this.dragStartPointGCS,
          this.dragPointGCS,
        ]);
        tx.assignRef(this.connector!, "head", newEnd);
        tx.assign(this.connector!, "headAnchor", anchor);
        resolveAllConstraints(tx, page, editor.canvas);
      });
    }
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box) {
    editor.transform.endAction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const cpCCS = lcs2ccs(canvas, shape, this.getControlPoint(canvas, shape));
    guide.drawControlPoint(
      canvas,
      cpCCS,
      guide.ControlPointType.FILLED_CIRCLE,
      0
    );
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    if (this.connector) {
      const canvas = editor.canvas;
      const tailAnchorPoint = this.connector.getTailAnchorPoint();
      const headAnchorPoint = this.connector.getHeadAnchorPoint();
      const tp = lcs2ccs(canvas, shape, tailAnchorPoint);
      const hp = lcs2ccs(canvas, this.connector, headAnchorPoint);
      const pathCCS = this.connector.path.map((p) =>
        lcs2ccs(canvas, this.connector!, p)
      );
      guide.drawDottedLine(canvas, tp, pathCCS[0]);
      guide.drawDottedLine(canvas, hp, pathCCS[pathCCS.length - 1]);
      guide.drawControlPoint(canvas, tp, this.connector.tail ? 5 : 1);
      guide.drawControlPoint(canvas, hp, this.connector.head ? 5 : 1);
    }
  }
}
