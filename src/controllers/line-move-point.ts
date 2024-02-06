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
import { Shape, Line, Connector, RouteType, Diagram } from "../shapes";
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
import { findControlPoint, fitPathInCSS } from "./utils";
import { reduceObliquePath } from "../utils/route-utils";

/**
 * MovePoint Controller
 */
export class LineMovePointController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * Ghost polygon
   */
  ghost: number[][];

  /**
   * except head-end and tail-end points
   */
  exceptEndPoints: boolean;

  constructor(manipulator: Manipulator, exceptEndPoints: boolean = false) {
    super(manipulator);
    this.snap = new Snap();
    this.ghost = [];
    this.exceptEndPoints = exceptEndPoints;
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    let value =
      editor.state.selections.size() === 1 &&
      editor.state.selections.isSelected(shape) &&
      shape instanceof Line &&
      shape.pathEditable;
    if (shape instanceof Connector && shape.routeType === RouteType.RECTILINEAR)
      value = false;
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
      ? idx > 0 && idx < this.ghost.length - 1
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
    this.ghost = geometry.pathCopy((shape as Line).path);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    const cp = findControlPoint(editor, shape as Line, this.dragStartPoint);
    let newPath = geometry.pathCopy((shape as Line).path);

    // snap ghost
    let p = [newPath[cp][0] + this.dx, newPath[cp][1] + this.dy];
    this.snap.init();
    this.snap.toPath(editor, shape as Line, [p[0]], [p[1]]);
    this.snap.toGrid(editor, p);
    this.snap.apply(this);

    // update the ghost
    newPath[cp][0] += this.dx;
    newPath[cp][1] += this.dy;

    // magnet first point to last point
    if (
      cp === 0 &&
      geometry.distance(newPath[0], newPath[newPath.length - 1]) <
        MAGNET_THRESHOLD
    ) {
      newPath[0][0] = newPath[newPath.length - 1][0];
      newPath[0][1] = newPath[newPath.length - 1][1];
    }

    // magnet last point to first point
    if (
      cp === newPath.length - 1 &&
      geometry.distance(newPath[0], newPath[newPath.length - 1]) <
        MAGNET_THRESHOLD
    ) {
      newPath[newPath.length - 1][0] = newPath[0][0];
      newPath[newPath.length - 1][1] = newPath[0][1];
    }

    // update ghost by simplified routing
    this.ghost = reduceObliquePath(newPath, LINE_STRATIFY_ANGLE_THRESHOLD);
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Line) {
    const canvas = editor.canvas;
    const ghostCCS = this.ghost.map((p) => lcs2ccs(canvas, shape, p));

    // find best-fit [dx, dy]
    const delta = fitPathInCSS(canvas, shape, this.ghost, ghostCCS);
    const newPath = this.ghost.map((p) => [p[0] + delta[0], p[1] + delta[1]]);

    // transform shape
    const diagram = editor.state.diagram as Diagram;
    const tr = editor.state.transform;
    tr.startTransaction("repath");
    tr.setPath(shape, newPath);
    tr.resolveAllConstraints(diagram, canvas);
    tr.endTransaction();
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
    super.drawDragging(editor, shape, e);
    const canvas = editor.canvas;
    const path = this.ghost;
    // draw ghost
    guide.drawPolylineInLCS(
      canvas,
      shape,
      this.ghost,
      (shape as Line).lineType,
      geometry.isClosed(this.ghost)
    );
    let pathCCS = path.map((p) => lcs2ccs(canvas, shape, p));
    guide.drawDottedPolyline(canvas, pathCCS);
    // draw control points
    const startPoint = this.exceptEndPoints ? 1 : 0;
    const endPoint = this.exceptEndPoints ? path.length - 2 : path.length - 1;
    if (endPoint >= startPoint) {
      for (let i = startPoint; i <= endPoint; i++) {
        const p = lcs2ccs(canvas, shape, path[i]);
        guide.drawControlPoint(canvas, p, 1);
      }
    }
    // draw snap
    this.snap.draw(editor, shape, this.ghost);
  }
}
