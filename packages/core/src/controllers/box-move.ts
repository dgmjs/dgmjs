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

import { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Box, Diagram, Movable, Line } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { drawPolylineInLCS } from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { CONTROL_POINT_APOTHEM, Cursor } from "../graphics/const";

/**
 * Move Controller
 */
export class BoxMoveController extends Controller {
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
    let value =
      editor.selections.size() === 1 &&
      editor.selections.isSelected(shape) &&
      !(shape as Box).anchored;
    return value;
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
    this.ghost = shape
      .getEnclosure()
      .map((p) => [p[0] + this.dx, p[1] + this.dy]);
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Shape) {
    let targetShape: Shape | null = shape;
    if (targetShape.movable === Movable.PARENT)
      targetShape = targetShape.findParent(
        (s) => (s as Shape).movable !== Movable.PARENT
      ) as Shape;
    if (!targetShape || targetShape instanceof Diagram) return;
    const canvas = editor.canvas;
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

    // determine container
    // (container shouldn't be itself of a descendant of target)
    let container = editor.diagram?.getShapeAt(canvas, p2, [shape]);
    const r = targetShape.find((s) => s.id === container?.id);
    if (r) container = null;
    if (!(container && container.canContain(targetShape)))
      container = editor.diagram;

    // transform shapes
    const tr = editor.transform;
    const diagram = editor.diagram as Diagram;
    tr.startTransaction("move");
    tr.moveShapes(diagram, [targetShape], dx, dy, container);
    tr.resolveAllConstraints(diagram, canvas);
    tr.endTransaction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape): void {
    const canvas = editor.canvas;
    // draw enclosure (don't draw if shape is a single line or path editable)
    if (
      !(
        shape instanceof Line &&
        (shape.path.length === 2 || shape.pathEditable)
      )
    ) {
      // const enclosure = geometry.rectToPolygon(
      //   geometry.expandRect(
      //     shape.getBoundingRect(),
      //     (CONTROL_POINT_APOTHEM * canvas.px) / 2
      //   )
      // );
      drawPolylineInLCS(canvas, shape, shape.getEnclosure());
    }
  }

  /**
   * Draw ghost while dragging
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    super.drawDragging(editor, shape, e);
    const canvas = editor.canvas;
    // draw ghost
    drawPolylineInLCS(canvas, shape, this.ghost);
    // hovering containable
    const dp = shape.localCoordTransform(canvas, this.dragPoint, true);
    const container = editor.diagram?.getShapeAt(canvas, dp, [shape]);
    if (container && container !== shape && container.canContain(shape)) {
      const manipulator = manipulatorManager.get(container.type);
      if (manipulator) manipulator.drawHovering(editor, container, e);
    }
    // draw snap
    this.snap.draw(editor, shape, this.ghost);
  }
}
