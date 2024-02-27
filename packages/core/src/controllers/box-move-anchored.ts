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

import * as geometry from "../graphics/geometry";
import { Shape, Box, Document } from "../shapes";
import { Controller, Controller2, Editor, Manipulator } from "../editor";
import { lcs2ccs } from "../graphics/utils";
import * as guide from "../utils/guide";
import { Snap } from "../manipulators/snap";
import type { CanvasPointerEvent } from "../graphics/graphics";
import { Cursor } from "../graphics/const";

/**
 * BoxMoveAnchoredController
 */
export class BoxMoveAnchoredController extends Controller {
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
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape instanceof Box &&
      shape.anchored
    );
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
    return [Cursor.MOVE, 0];
  }

  initialize(editor: Editor, shape: Shape): void {
    this.ghost = shape.getEnclosure();
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    let newEnclosure = shape.getEnclosure(); // this.manipulator.getGhost(editor, shape, true);
    // snap new enclosure
    let bx = geometry.boundingRect(newEnclosure);
    let cp = geometry.center(bx);
    let xs = [bx[0][0] + this.dx, bx[1][0] + this.dx, cp[0] + this.dx];
    let ys = [bx[0][1] + this.dy, bx[1][1] + this.dy, cp[1] + this.dy];
    this.snap.init();
    this.snap.toOutline(editor, shape, xs, ys);
    this.snap.toGrid(editor, [bx[0][0] + this.dx, bx[0][1] + this.dy]);
    this.snap.apply(this);
    // update ghost
    this.ghost = newEnclosure.map((p) => [p[0] + this.dx, p[1] + this.dy]);
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box) {
    const canvas = editor.canvas;
    let p1 = shape.localCoordTransform(canvas, this.dragStartPoint, false);
    let p2 = shape.localCoordTransform(canvas, this.dragPoint, false);
    let dx = p2[0] - p1[0];
    let dy = p2[1] - p1[1];
    const anchorPoint = geometry.positionOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      shape.anchorPosition
    );
    const shapeCenter = shape.getCenter();
    shapeCenter[0] += dx;
    shapeCenter[1] += dy;
    const angle = geometry.angle(anchorPoint, shapeCenter);
    const length = Math.round(geometry.distance(shapeCenter, anchorPoint));
    // transform shape
    const tr = editor.transform;
    const diagram = editor.doc as Document;
    tr.startTransaction("move-anchor");
    tr.moveAnchor(shape, angle, length);
    tr.resolveAllConstraints(diagram, canvas);
    tr.endTransaction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Box) {
    const canvas = editor.canvas;
    const enclosure = shape.getEnclosure();
    const center = geometry.mid(enclosure[0], enclosure[2]);
    const centerCCS = lcs2ccs(canvas, shape, center);
    const anchorPoint = geometry.positionOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      shape.anchorPosition
    );
    const anchorPointCCS = lcs2ccs(
      canvas,
      (shape.parent as Shape) ?? shape,
      anchorPoint
    );
    guide.drawPolylineInLCS(canvas, shape, enclosure);
    guide.drawDottedLine(canvas, centerCCS, anchorPointCCS);
  }

  /**
   * Draw ghost while dragging
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    super.drawDragging(editor, shape, e);
    const canvas = editor.canvas;
    // draw ghost
    const center = geometry.mid(this.ghost[0], this.ghost[2]);
    const centerCCS = lcs2ccs(canvas, shape, center);
    const anchorPoint = geometry.positionOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      (shape as Box).anchorPosition
    );
    const anchorPointCCS = lcs2ccs(
      canvas,
      (shape.parent as Shape) ?? shape,
      anchorPoint
    );
    guide.drawPolylineInLCS(canvas, shape, this.ghost);
    guide.drawDottedLine(canvas, centerCCS, anchorPointCCS);
    // draw snap
    this.snap.draw(editor, shape, this.ghost);
  }
}

/**
 * BoxMoveAnchoredController2
 */
export class BoxMoveAnchoredController2 extends Controller2 {
  /**
   * Snap support for controller
   */
  snap: Snap;

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.snap = new Snap();
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return (
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape instanceof Box &&
      shape.anchored
    );
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
    return [Cursor.MOVE, 0];
  }

  initialize(editor: Editor, shape: Shape): void {
    // this.ghost = shape.getEnclosure();
    editor.transform.startTransaction("move-anchor");
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const anchorPoint = geometry.positionOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      (shape as Box).anchorPosition
    );
    const shapeCenter = shape.getCenter();
    shapeCenter[0] += this.dx;
    shapeCenter[1] += this.dy;
    const angle = geometry.angle(anchorPoint, shapeCenter);
    const length = geometry.distance(shapeCenter, anchorPoint);
    // transform shape
    const tr = editor.transform;
    const diagram = editor.doc as Document;
    tr.moveAnchor(shape as Box, angle, length);
    tr.resolveAllConstraints(diagram, canvas);
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box) {
    editor.transform.endTransaction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Box) {
    const canvas = editor.canvas;
    const enclosure = shape.getEnclosure();
    const center = geometry.mid(enclosure[0], enclosure[2]);
    const centerCCS = lcs2ccs(canvas, shape, center);
    const anchorPoint = geometry.positionOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      shape.anchorPosition
    );
    const anchorPointCCS = lcs2ccs(
      canvas,
      (shape.parent as Shape) ?? shape,
      anchorPoint
    );
    guide.drawPolylineInLCS(canvas, shape, enclosure);
    guide.drawDottedLine(canvas, centerCCS, anchorPointCCS);
  }
}
