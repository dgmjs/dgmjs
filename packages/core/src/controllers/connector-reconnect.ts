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

import type { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Line, Connector, Document } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { Cursor } from "../graphics/const";
import { lcs2ccs, ccs2lcs, angleInCCS } from "../graphics/utils";
import * as guide from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { findConnectionPoint, findControlPoint } from "./utils";

/**
 * Connector Reconnect Controller
 */
export class ConnectorReconnectController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * control point
   */
  controlPoint: number;

  /**
   * current control path
   */
  controlPath: number[][];

  // end: Shape | null;
  // connectionPoint: number[] | null;
  // connectionPointIndex: number;

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.snap = new Snap();
    this.controlPoint = -1;
    this.controlPath = [];

    // this.end = null;
    // this.connectionPoint = null;
    // this.connectionPointIndex = -1;
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return (
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape instanceof Connector
    );
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (this.dragging) return true;
    const p = ccs2lcs(editor.canvas, shape, [e.x, e.y]);
    const idx = findControlPoint(editor, shape as Line, p);
    return idx === 0 || idx === (shape as Line).path.length - 1;
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

  initialize(editor: Editor, shape: Shape): void {
    this.controlPoint = findControlPoint(
      editor,
      shape as Line,
      this.dragStartPoint
    );
    this.controlPath = geometry.pathCopy((shape as Line).path);
    editor.transform.startTransaction("reconnect");
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    // update the path
    let newPath = geometry.pathCopy(this.controlPath);
    newPath[this.controlPoint][0] += this.dx;
    newPath[this.controlPoint][1] += this.dy;
    const isHead = this.controlPoint > 0;

    let [end, cp, cpIndex] = findConnectionPoint(
      editor,
      shape as Connector,
      newPath[this.controlPoint]
    );
    const newEnd = cp ? end : null;

    // transform shape
    const tr = editor.transform;
    const diagram = editor.doc as Document;
    tr.setPath(shape, newPath);
    tr.atomicAssignRef(shape, isHead ? "head" : "tail", newEnd);
    tr.atomicAssign(shape, isHead ? "headCP" : "tailCP", cpIndex);
    tr.resolveAllConstraints(diagram, editor.canvas);
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Connector) {
    editor.transform.endTransaction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    if (!this.dragging) {
      const canvas = editor.canvas;
      const path = (shape as Connector).path;
      const angle = angleInCCS(canvas, shape);
      const p1 = lcs2ccs(canvas, shape, path[0]);
      const p2 = lcs2ccs(canvas, shape, path[path.length - 1]);
      const hasTail = (shape as Connector).tail instanceof Shape;
      const hasHead = (shape as Connector).head instanceof Shape;
      const tp = (shape as Connector).tailCP > -1 ? 6 : 5;
      const hp = (shape as Connector).headCP > -1 ? 6 : 5;
      guide.drawControlPoint(canvas, p1, hasTail ? tp : 1, angle);
      guide.drawControlPoint(canvas, p2, hasHead ? hp : 1, angle);
    }
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    // draw connection hovering
    const isHead = this.controlPoint > 0;
    const end = isHead ? (shape as Connector).head : (shape as Connector).tail;
    const endPoint = (shape as Connector).path[this.controlPoint];
    const cxpIndex = isHead
      ? (shape as Connector).headCP
      : (shape as Connector).tailCP;
    const cxp = end?.getConnectionPoints()[cxpIndex];
    if (end && end !== shape && end.connectable) {
      // draw shape hovering
      const manipulator = manipulatorManager.get(end.type);
      if (manipulator) manipulator.drawHovering(editor, end, e);
      // draw connection points (cross-mark)
      guide.drawConnectionPoints(canvas, end);
      // draw connection point hovering
      if (cxp) {
        const cxpCCS = lcs2ccs(canvas, end, cxp);
        guide.drawControlPoint(canvas, cxpCCS, 6);
      } else {
        guide.drawControlPoint(canvas, lcs2ccs(canvas, shape, endPoint), 5);
      }
    }
    // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
