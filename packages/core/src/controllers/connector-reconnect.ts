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
import { Shape, Connector, Document } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { Cursor } from "../graphics/const";
import { lcs2ccs } from "../graphics/utils";
import * as guide from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { findConnectionAnchor } from "./utils";

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

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.snap = new Snap();
    this.controlPoint = -1;
    this.controlPath = [];
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
    if (shape instanceof Connector) {
      const p = [e.x, e.y];
      const tpCCS = lcs2ccs(editor.canvas, shape, shape.getTailAnchorPoint());
      const hpCCS = lcs2ccs(editor.canvas, shape, shape.getHeadAnchorPoint());
      if (
        guide.inControlPoint(editor.canvas, p, tpCCS) ||
        guide.inControlPoint(editor.canvas, p, hpCCS)
      ) {
        return true;
      }
    }
    return false;
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
    if (shape instanceof Connector) {
      const tpCCS = lcs2ccs(editor.canvas, shape, shape.getTailAnchorPoint());
      const hpCCS = lcs2ccs(editor.canvas, shape, shape.getHeadAnchorPoint());
      if (guide.inControlPoint(editor.canvas, this.dragStartPointCCS, hpCCS))
        this.controlPoint = shape.path.length - 1;
      if (guide.inControlPoint(editor.canvas, this.dragStartPointCCS, tpCCS))
        this.controlPoint = 0;
      this.controlPath = geometry.pathCopy(shape.path);
    }
    editor.transform.startTransaction("reconnect");
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    // find an end and anchor
    const [newEnd, anchor] = findConnectionAnchor(
      editor,
      shape as Connector,
      this.dragPoint
    );
    // update the path
    let newPath = geometry.pathCopy(this.controlPath);
    if (!newEnd) {
      newPath[this.controlPoint] = this.dragPoint;
    }
    const isHead = this.controlPoint > 0;
    // transform shape
    const tr = editor.transform;
    const doc = editor.doc as Document;
    tr.setPath(shape, newPath);
    tr.atomicAssignRef(shape, isHead ? "head" : "tail", newEnd);
    tr.atomicAssign(shape, isHead ? "headAnchor" : "tailAnchor", anchor);
    tr.resolveAllConstraints(doc, editor.canvas);
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
    if (shape instanceof Connector) {
      const canvas = editor.canvas;
      const tailAnchorPoint = shape.getTailAnchorPoint();
      const headAnchorPoint = shape.getHeadAnchorPoint();
      const p1 = lcs2ccs(canvas, shape, tailAnchorPoint);
      const p2 = lcs2ccs(canvas, shape, headAnchorPoint);
      const pathCCS = shape.path.map((p) => lcs2ccs(canvas, shape, p));
      guide.drawDottedLine(canvas, p1, pathCCS[0]);
      guide.drawDottedLine(canvas, p2, pathCCS[pathCCS.length - 1]);
      guide.drawControlPoint(canvas, p1, shape.tail ? 5 : 1);
      guide.drawControlPoint(canvas, p2, shape.head ? 5 : 1);
    }
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    this.draw(editor, shape);
    if (shape instanceof Connector) {
      const isHead = this.controlPoint > 0;
      if (!isHead && shape.tail && shape.tail.connectable) {
        const manipulator = manipulatorManager.get(shape.tail.type);
        if (manipulator) manipulator.drawHovering(editor, shape.tail, e);
      }
      if (isHead && shape.head && shape.head.connectable) {
        const manipulator = manipulatorManager.get(shape.head.type);
        if (manipulator) manipulator.drawHovering(editor, shape.head, e);
      }
    }
    // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
