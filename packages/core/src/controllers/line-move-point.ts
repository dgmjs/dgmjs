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
import { Shape, Line, Document } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import {
  Cursor,
  LINE_STRATIFY_ANGLE_THRESHOLD,
  MAGNET_THRESHOLD,
} from "../graphics/const";
import { lcs2ccs, ccs2lcs } from "../graphics/utils";
import * as guide from "../utils/guide";
import * as geometry from "../graphics/geometry";
import { Snap } from "../manipulators/snap";
import { findControlPoint } from "./utils";
import { reducePath } from "../utils/route-utils";

/**
 * MovePoint Controller
 */
export class LineMovePointController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * except head-end and tail-end points
   */
  exceptEndPoints: boolean;

  /**
   * current control point
   */
  controlPoint: number;

  /**
   * current control path
   */
  controlPath: number[][];

  constructor(manipulator: Manipulator, exceptEndPoints: boolean = false) {
    super(manipulator);
    this.snap = new Snap();
    this.exceptEndPoints = exceptEndPoints;
    this.controlPoint = 0;
    this.controlPath = [];
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    let value =
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape instanceof Line &&
      shape.pathEditable;
    return value;
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (this.dragging) return true;
    const p = ccs2lcs(editor.canvas, shape, [e.x, e.y]);
    const idx = findControlPoint(editor, shape as Line, p);
    return this.exceptEndPoints
      ? idx > 0 && idx < (shape as Line).path.length - 1
      : idx >= 0;
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
    editor.transform.startTransaction("repath");
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    let newPath = geometry.pathCopy(this.controlPath);

    // update the path
    newPath[this.controlPoint][0] += this.dx;
    newPath[this.controlPoint][1] += this.dy;

    // magnet first point to last point
    if (
      this.controlPoint === 0 &&
      geometry.distance(newPath[0], newPath[newPath.length - 1]) <
        MAGNET_THRESHOLD
    ) {
      newPath[0][0] = newPath[newPath.length - 1][0];
      newPath[0][1] = newPath[newPath.length - 1][1];
    }

    // magnet last point to first point
    if (
      this.controlPoint === newPath.length - 1 &&
      geometry.distance(newPath[0], newPath[newPath.length - 1]) <
        MAGNET_THRESHOLD
    ) {
      newPath[newPath.length - 1][0] = newPath[0][0];
      newPath[newPath.length - 1][1] = newPath[0][1];
    }

    // update ghost by simplified routing
    newPath = reducePath(newPath, LINE_STRATIFY_ANGLE_THRESHOLD);

    // transform shape
    const canvas = editor.canvas;
    const doc = editor.doc as Document;
    const tr = editor.transform;
    tr.setPath(shape, newPath);
    tr.resolveAllConstraints(doc, canvas);
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Line) {
    editor.transform.endTransaction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const path = (shape as Line).path;
    // draw control points
    const startPoint = this.exceptEndPoints ? 1 : 0;
    const endPoint = this.exceptEndPoints ? path.length - 2 : path.length - 1;
    if (endPoint >= startPoint) {
      for (let i = startPoint; i <= endPoint; i++) {
        const p = lcs2ccs(canvas, shape, path[i]);
        guide.drawControlPoint(canvas, p, 1);
      }
    }
    // draw filled junction control point if closed polygon
    if ((shape as Line).isClosed()) {
      const p = lcs2ccs(canvas, shape, path[0]);
      guide.drawControlPoint(canvas, p, 5);
    }
  }

  /**
   * Draw ghost while dragging
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {
    // super.drawDragging(editor, shape, e);
    // const canvas = editor.canvas;
    // const path = this.ghost;
    // // draw ghost
    // guide.drawPolylineInLCS(
    //   canvas,
    //   shape,
    //   this.ghost,
    //   (shape as Line).lineType,
    //   geometry.isClosed(this.ghost)
    // );
    // let pathCCS = path.map((p) => lcs2ccs(canvas, shape, p));
    // guide.drawDottedPolyline(canvas, pathCCS);
    // // draw control points
    // const startPoint = this.exceptEndPoints ? 1 : 0;
    // const endPoint = this.exceptEndPoints ? path.length - 2 : path.length - 1;
    // if (endPoint >= startPoint) {
    //   for (let i = startPoint; i <= endPoint; i++) {
    //     const p = lcs2ccs(canvas, shape, path[i]);
    //     guide.drawControlPoint(canvas, p, 1);
    //   }
    // }
    // // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
