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
import { Shape, Box, Movable } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import { Cursor, MAGNET_THRESHOLD } from "../graphics/const";
import { ccs2lcs, lcs2ccs } from "../graphics/utils";
import * as guide from "../utils/guide";
import { Snap } from "../manipulators/snap";
import type { CanvasPointerEvent } from "../graphics/graphics";
import { resolveAllConstraints } from "../macro";

/**
 * BoxMoveAnchorPositionController
 */
export class BoxMoveAnchorPositionController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * Ghost polygon
   */
  ghost: number[][];

  /**
   * anchor position
   */
  anchorPosition: number;

  /**
   * anchor point
   */
  anchorPoint: number[];

  /**
   * Is the anchor point out of the path
   */
  outOfPath: boolean;

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.snap = new Snap();
    this.ghost = [];
    this.anchorPosition = 0.5;
    this.anchorPoint = [-1, -1];
    this.outOfPath = false;
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return (
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape instanceof Box &&
      shape.movable !== Movable.NONE &&
      shape.anchored
    );
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    const canvas = editor.canvas;
    const p = [e.x, e.y];
    const anchorPoint = geometry.getPointOnPath(
      (shape.parent as Shape).getOutline(),
      (shape as Box).anchorPosition
    );
    const anchorPointCCS = lcs2ccs(canvas, shape.parent as Shape, anchorPoint);
    return guide.inControlPoint(canvas, p, anchorPointCCS);
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
    this.ghost = shape.getEnclosure();
    this.anchorPosition = (shape as Box).anchorPosition;
    this.anchorPoint = geometry.getPointOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      (shape as Box).anchorPosition
    );
    this.outOfPath = false;

    editor.transform.startAction("move-anchor");
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    let newEnclosure = shape.getEnclosure();
    const dragCCS = lcs2ccs(canvas, shape, this.dragPoint);
    const dragLCS = ccs2lcs(canvas, shape.parent as Shape, dragCCS);
    const outline = (shape.parent as Shape).getOutline();
    const anchorPoint = geometry.findNearestOnPath(
      dragLCS,
      outline,
      MAGNET_THRESHOLD
    );
    if (
      anchorPoint &&
      geometry.distance(anchorPoint, dragLCS) <= MAGNET_THRESHOLD
    ) {
      this.anchorPosition = geometry.getPositionOnPath(outline, anchorPoint);
      this.anchorPoint = anchorPoint;
      this.outOfPath = false;
    } else {
      // set to original position if drag point is too far from the path
      this.anchorPosition = (shape as Box).anchorPosition;
      this.anchorPoint = geometry.getPointOnPath(
        outline,
        (shape as Box).anchorPosition
      );
      this.outOfPath = true;
    }
    // update ghost
    this.ghost = newEnclosure.map((p) => [
      p[0] + this.dxStep,
      p[1] + this.dyStep,
    ]);

    // transform shape
    editor.transform.transact((tx) => {
      const page = editor.getCurrentPage()!;
      tx.assign(shape, "anchorPosition", this.anchorPosition);
      resolveAllConstraints(tx, page, canvas);
    });
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
  draw(editor: Editor, shape: Box) {
    const canvas = editor.canvas;
    const anchorPoint = geometry.getPointOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      shape.anchorPosition
    );
    const anchorPointCCS = lcs2ccs(
      canvas,
      (shape.parent as Shape) ?? shape,
      anchorPoint
    );
    guide.drawControlPoint(canvas, anchorPointCCS, 5);
  }

  /**
   * Draw ghost while dragging
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    super.drawDragging(editor, shape, e);
    const canvas = editor.canvas;
    // draw ghost
    const ghost = shape.getEnclosure();
    guide.drawPolylineInLCS(canvas, shape, ghost);
    // drag anchor point
    if (!this.outOfPath) {
      const center = geometry.mid(ghost[0], ghost[2]);
      const centerCCS = lcs2ccs(canvas, shape, center);
      const anchorPointCCS = lcs2ccs(
        canvas,
        (shape.parent as Shape) ?? shape,
        this.anchorPoint
      );
      guide.drawDottedLine(canvas, centerCCS, anchorPointCCS);
      guide.drawControlPoint(canvas, anchorPointCCS, 5);
    }
    // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
