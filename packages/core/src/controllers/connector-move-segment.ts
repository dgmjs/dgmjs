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
import { RouteType, Shape, Connector, Line, Diagram } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import { Cursor, LINE_SELECTION_THRESHOLD } from "../graphics/const";
import { lcs2ccs, ccs2lcs, angleInCCS } from "../graphics/utils";
import * as guide from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { findSegmentControlPoint, fitPathInCSS } from "./utils";
import { magnetSegment, adjustRectilinearRoute } from "../utils/route-utils";

/**
 * MoveSegment Controller
 */
export class ConnectorMoveSegmentController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * Ghost polygon
   */
  ghost: number[][];

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.snap = new Snap();
    this.ghost = [];
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return (
      editor.selections.size() === 1 &&
      editor.selections.isSelected(shape) &&
      shape instanceof Connector &&
      shape.routeType === RouteType.RECTILINEAR
    );
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (this.dragging) return true;
    const p = ccs2lcs(editor.canvas, shape, [e.x, e.y]);
    const segment = findSegmentControlPoint(editor, shape as Line, p, false);
    return segment >= 0;
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
    const canvas = editor.canvas;
    const p = ccs2lcs(canvas, shape, [e.x, e.y]);
    const path = (shape as Line).path;
    const segment = findSegmentControlPoint(editor, shape as Line, p, false);
    if (segment > -1) {
      let angle = angleInCCS(canvas, shape);
      if (!geometry.isHorz(path[segment], path[segment + 1])) angle += 90;
      angle = geometry.normalizeAngle(Math.round(angle));
      return [Cursor.RESIZE, angle];
    } else {
      return [Cursor.DEFAULT, 0];
    }
  }

  initialize(editor: Editor, shape: Shape): void {
    this.ghost = geometry.pathCopy((shape as Line).path);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Connector) {
    let newPath = geometry.pathCopy(shape.path);
    // find the dragging segment
    let segment = findSegmentControlPoint(
      editor,
      shape as Line,
      this.dragStartPoint,
      false
    );
    let isHorz = geometry.isHorz(newPath[segment], newPath[segment + 1]);
    const p1 = newPath[segment];
    const p2 = newPath[segment + 1];
    // snap path
    let p = isHorz ? [0, p1[1] + this.dy] : [p1[0] + this.dx, 0];
    let xs = isHorz ? [] : [p[0]];
    let ys = isHorz ? [p[1]] : [];
    this.snap.init();
    this.snap.toPath(editor, shape, xs, ys);
    this.snap.toGrid(editor, p);
    this.snap.apply(this);
    // update the ghost
    if (isHorz) {
      p1[1] += this.dy;
      p2[1] += this.dy;
    } else {
      p1[0] += this.dx;
      p2[0] += this.dx;
    }
    // magnet the segment to other segments
    newPath = magnetSegment(newPath, segment);
    // update ghost
    this.ghost = adjustRectilinearRoute(
      newPath,
      shape.head,
      shape.headCP,
      shape.tail,
      shape.tailCP
    );
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
    const tr = editor.transform;
    const diagram = editor.diagram as Diagram;
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
    // draw path dotted line
    const path = (shape as Line).path;
    let pathCCS = path.map((p) => lcs2ccs(canvas, shape, p));
    guide.drawDottedPolyline(canvas, pathCCS);
    // draw control points
    if (path.length > 1) {
      const angle = angleInCCS(canvas, shape);
      for (let i = 0; i < path.length - 1; i++) {
        const p1 = path[i];
        const p2 = path[i + 1];
        const mid = geometry.mid(p1, p2);
        const midCCS = lcs2ccs(canvas, shape, mid);
        guide.drawControlPoint(canvas, midCCS, 0, angle);
      }
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
    // draw snap
    this.snap.draw(editor, shape, this.ghost);
  }
}
