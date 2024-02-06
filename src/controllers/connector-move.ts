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
import { Shape, Line, Movable, Diagram, Connector } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import { Snap } from "../manipulators/snap";
import * as geometry from "../graphics/geometry";
import * as guide from "../utils/guide";
import { Cursor } from "../graphics/const";

/**
 * ConnectorMove Controller
 */
export class ConnectorMoveController extends Controller {
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
      editor.state.selections.size() === 1 &&
      editor.state.selections.isSelected(shape) &&
      shape instanceof Connector
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
    this.ghost = geometry.pathCopy((shape as Line).path);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    // apply movable property
    let targetShape: Shape | null = shape;
    if (targetShape.movable === Movable.PARENT)
      targetShape = targetShape.findParent(
        (s) => (s as Shape).movable !== Movable.PARENT
      ) as Shape;
    if (!targetShape || targetShape instanceof Diagram) return;
    if (
      targetShape.movable === Movable.VERT ||
      targetShape.movable === Movable.NONE
    )
      this.dx = 0;
    if (
      targetShape.movable === Movable.HORZ ||
      targetShape.movable === Movable.NONE
    )
      this.dy = 0;

    // snap ghost
    let bx = geometry.boundingRect(this.ghost);
    let cp = geometry.center(bx);
    let bxm = [
      [bx[0][0] + this.dx, bx[0][1] + this.dy],
      [bx[1][0] + this.dx, bx[1][1] + this.dy],
    ];
    let xs = [bx[0][0] + this.dx, bx[1][0] + this.dx, cp[0] + this.dx];
    let ys = [bx[0][1] + this.dy, bx[1][1] + this.dy, cp[1] + this.dy];
    this.snap.init();
    this.snap.toGap(editor, targetShape, bxm);
    this.snap.toOutline(editor, targetShape, xs, ys);
    this.snap.toGrid(editor, [bx[0][0] + this.dx, bx[0][1] + this.dy]);
    this.snap.apply(this);

    // update ghost
    this.ghost = (shape as Line).path.map((p) => [
      p[0] + this.dx,
      p[1] + this.dy,
    ]);
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Shape) {
    // apply movable property
    let targetShape: Shape | null = shape;
    if (targetShape.movable === Movable.PARENT)
      targetShape = targetShape.findParent(
        (s) => (s as Shape).movable !== Movable.PARENT
      ) as Shape;
    if (!targetShape || targetShape instanceof Diagram) return;
    const canvas = editor.canvas;
    const diagram = editor.state.diagram as Diagram;
    let p1 = targetShape.localCoordTransform(
      canvas,
      this.dragStartPoint,
      false
    );
    let p2 = targetShape.localCoordTransform(canvas, this.dragPoint, false);
    let dx = p2[0] - p1[0];
    let dy = p2[1] - p1[1];
    if (
      targetShape.movable === Movable.VERT ||
      targetShape.movable === Movable.NONE
    )
      dx = 0;
    if (
      targetShape.movable === Movable.HORZ ||
      targetShape.movable === Movable.NONE
    )
      dy = 0;
    const newPath = (shape as Line).path.map((p) => [p[0] + dx, p[1] + dy]);

    // transform shape
    if (dx !== 0 || dy !== 0) {
      const tr = editor.state.transform;
      tr.startTransaction("repath");
      tr.setPath(shape, newPath);
      tr.atomicAssignRef(shape, "head", null);
      tr.atomicAssignRef(shape, "tail", null);
      tr.resolveAllConstraints(diagram, canvas);
      tr.endTransaction();
    }
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    super.drawDragging(editor, shape, e);
    const canvas = editor.canvas;
    // draw ghost
    guide.drawPolylineInLCS(
      canvas,
      shape,
      this.ghost,
      (shape as Line).lineType,
      geometry.isClosed(this.ghost)
    );
    // draw snap
    this.snap.draw(editor, shape, this.ghost);
  }
}
