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
import { lcs2ccs } from "../graphics/utils";
import * as guide from "../utils/guide";
import { Snap } from "../manipulators/snap";
import type { CanvasPointerEvent } from "../graphics/graphics";
import { Cursor } from "../graphics/const";
import { moveAnchor, resolveAllConstraints } from "../macro";

/**
 * BoxMoveAnchoredController
 */
export class BoxMoveAnchoredController extends Controller {
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
      shape.movable !== Movable.NONE &&
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
    editor.transform.startAction("move-anchor");
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const anchorPoint = geometry.getPointOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      (shape as Box).anchorPosition
    );
    const shapeCenter = shape.getCenter();
    shapeCenter[0] += this.dxStep;
    shapeCenter[1] += this.dyStep;
    const angle = geometry.angle(anchorPoint, shapeCenter);
    const length = geometry.distance(shapeCenter, anchorPoint);
    // transform shape
    editor.transform.transact((tx) => {
      const page = editor.currentPage!;
      moveAnchor(tx, shape as Box, angle, length);
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
    const enclosure = shape.getEnclosure();
    const center = geometry.mid(enclosure[0], enclosure[2]);
    const centerCCS = lcs2ccs(canvas, shape, center);
    const anchorPoint = geometry.getPointOnPath(
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
    const ghost = shape.getEnclosure();
    const center = geometry.mid(ghost[0], ghost[2]);
    const centerCCS = lcs2ccs(canvas, shape, center);
    const anchorPoint = geometry.getPointOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      (shape as Box).anchorPosition
    );
    const anchorPointCCS = lcs2ccs(
      canvas,
      (shape.parent as Shape) ?? shape,
      anchorPoint
    );
    guide.drawPolylineInLCS(canvas, shape, ghost);
    guide.drawDottedLine(canvas, centerCCS, anchorPointCCS);
    // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
