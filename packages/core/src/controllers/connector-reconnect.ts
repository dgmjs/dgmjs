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
import { RouteType, Shape, Line, Connector, Document } from "../shapes";
import {
  Controller,
  Controller2,
  Editor,
  Manipulator,
  manipulatorManager,
} from "../editor";
import { Cursor } from "../graphics/const";
import { lcs2ccs, ccs2lcs, angleInCCS } from "../graphics/utils";
import * as guide from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { findConnectionPoint, findControlPoint } from "./utils";

/**
 * Reconnect Controller
 */
export class ConnectorReconnectController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * Ghost polygon
   */
  ghost: number[][];

  end: Shape | null;
  connectionPoint: number[] | null;
  connectionPointIndex: number;

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.snap = new Snap();
    this.ghost = [];
    this.end = null;
    this.connectionPoint = null;
    this.connectionPointIndex = -1;
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

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    const ctrlp = findControlPoint(editor, shape as Line, this.dragStartPoint);
    let newPath = geometry.pathCopy((shape as Line).path);
    const isHead = ctrlp > 0;
    let i1 = isHead ? ctrlp - 1 : ctrlp + 1;
    let i2 = ctrlp;
    let seg = ctrlp === 0 ? 0 : ctrlp - 1;
    let isHorz = geometry.isHorz(newPath[seg], newPath[seg + 1]);
    // obtain a connection point
    let point = [newPath[i2][0] + this.dx, newPath[i2][1] + this.dy];
    let [end, cp, cpIndex] = findConnectionPoint(
      editor,
      shape as Connector,
      point
    );
    this.end = end;
    this.connectionPoint = cp;
    this.connectionPointIndex = cpIndex;
    if (cp) {
      this.dx = cp[0] - newPath[i2][0];
      this.dy = cp[1] - newPath[i2][1];
    }
    // update path
    if ((shape as Connector).routeType === RouteType.RECTILINEAR) {
      if (isHorz) {
        newPath[i1][1] += this.dy;
      } else {
        newPath[i1][0] += this.dx;
      }
      newPath[i2][0] += this.dx;
      newPath[i2][1] += this.dy;
    } else {
      newPath[i2][0] += this.dx;
      newPath[i2][1] += this.dy;
    }
    // update ghost
    this.ghost = newPath;
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Connector) {
    const cp = findControlPoint(editor, shape, this.dragStartPoint);
    const isHead = cp > 0;
    const newEnd = this.connectionPoint ? this.end : null;
    // transform shape
    const tr = editor.transform;
    const diagram = editor.doc as Document;
    tr.startTransaction("reconnect");
    tr.setPath(shape, this.ghost);
    tr.atomicAssignRef(shape, isHead ? "head" : "tail", newEnd);
    tr.atomicAssign(
      shape,
      isHead ? "headCP" : "tailCP",
      this.connectionPointIndex
    );
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
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
    // draw ghost
    guide.drawPolylineInLCS(
      canvas,
      shape,
      this.ghost,
      (shape as Line).lineType,
      geometry.isClosed(this.ghost)
    );
    // draw connection hovering
    if (this.end && this.end !== shape && this.end.connectable) {
      // draw shape hovering
      const manipulator = manipulatorManager.get(this.end.type);
      if (manipulator) manipulator.drawHovering(editor, this.end, e);
      // draw connection points (cross-mark)
      guide.drawConnectionPoints(canvas, this.end);
      // draw connection point hovering
      if (this.connectionPoint) {
        guide.drawConnectionPointHovering(
          canvas,
          this.end,
          this.connectionPoint,
          this.connectionPointIndex
        );
      }
    }
    // draw snap
    this.snap.draw(editor, shape, this.ghost);
  }
}

/**
 * Reconnect Controller
 */
export class ConnectorReconnectController2 extends Controller2 {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * Ghost polygon
   */
  ghost: number[][];

  controlPoint: number;

  /**
   * current control path
   */
  controlPath: number[][];

  end: Shape | null;
  connectionPoint: number[] | null;
  connectionPointIndex: number;

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.snap = new Snap();
    this.ghost = [];
    this.controlPoint = -1;
    this.controlPath = [];

    this.end = null;
    this.connectionPoint = null;
    this.connectionPointIndex = -1;
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
    newPath[this.controlPoint][0] += this.accumulatedDX;
    newPath[this.controlPoint][1] += this.accumulatedDY;
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
    // const canvas = editor.canvas;
    // // draw ghost
    // guide.drawPolylineInLCS(
    //   canvas,
    //   shape,
    //   this.ghost,
    //   (shape as Line).lineType,
    //   geometry.isClosed(this.ghost)
    // );
    // // draw connection hovering
    // if (this.end && this.end !== shape && this.end.connectable) {
    //   // draw shape hovering
    //   const manipulator = manipulatorManager.get(this.end.type);
    //   if (manipulator) manipulator.drawHovering(editor, this.end, e);
    //   // draw connection points (cross-mark)
    //   guide.drawConnectionPoints(canvas, this.end);
    //   // draw connection point hovering
    //   if (this.connectionPoint) {
    //     guide.drawConnectionPointHovering(
    //       canvas,
    //       this.end,
    //       this.connectionPoint,
    //       this.connectionPointIndex
    //     );
    //   }
    // }
    // // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
