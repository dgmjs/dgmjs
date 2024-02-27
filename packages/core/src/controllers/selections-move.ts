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
import { Shape, Document } from "../shapes";
import {
  Controller,
  Controller2,
  Editor,
  Manipulator,
  manipulatorManager,
} from "../editor";
import { Color, Cursor } from "../graphics/const";
import { Snap } from "../manipulators/snap";
import { drawPolylineInLCS } from "../utils/guide";
import { lcs2ccs } from "../graphics/utils";

/**
 * SelectionsMoveController
 */
export class SelectionsMoveController extends Controller {
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
    return editor.selection.size() > 1;
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (this.dragging) return true;
    if (shape instanceof Document) {
      const canvas = editor.canvas;
      const p = canvas.globalCoordTransformRev([e.x, e.y]);
      for (let s of editor.selection.getShapes()) {
        if (s.visible && s.enable && s.containsPoint(canvas, p)) return true;
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
    return [Cursor.MOVE, 0];
  }

  initialize(editor: Editor, shape: Shape): void {
    this.ghost = editor.selection.getEnclosure(editor.canvas);
  }

  /**
   * Update ghost
   * @param shape (is a diagram in group manipulator)
   */
  update(editor: Editor, shape: Shape) {
    let ghost = editor.selection.getEnclosure(editor.canvas);
    // snap ghost
    let bx = geometry.boundingRect(ghost);
    let xs = [bx[0][0] + this.dx, bx[1][0] + this.dx];
    let ys = [bx[0][1] + this.dy, bx[1][1] + this.dy];
    this.snap.init();
    this.snap.toOutline(editor, shape, xs, ys);
    this.snap.toGrid(editor, [bx[0][0] + this.dx, bx[0][1] + this.dy]);
    this.snap.apply(this);
    // update ghost
    ghost = ghost.map((p) => [p[0] + this.dx, p[1] + this.dy]);
    this.ghost = ghost;
  }

  /**
   * Finalize shape by ghost
   * @param shape (is a diagram in group manipulator)
   */
  finalize(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    let dp = shape.localCoordTransform(canvas, this.dragPoint, false);
    const selections = editor.selection.getShapes();
    const diagram = editor.doc as Document;

    // determine container
    // (container shouldn't be itself of a descendant of target)
    let container = editor.doc?.getShapeAt(canvas, dp, selections);
    const r = selections.find((sh) => sh.find((s) => s.id === container?.id));
    if (r) container = null;
    if (!(container && selections.every((s) => container?.canContain(s))))
      container = editor.doc;

    const tr = editor.transform;
    tr.startTransaction("move");
    tr.moveShapes(diagram, selections, this.dx, this.dy, container);
    tr.resolveAllConstraints(diagram, canvas);
    tr.endTransaction();
  }

  /**
   * Draw ghost for the selected shapes
   * @param shape (is a diagram in group manipulator)
   */
  draw(editor: Editor, shape: Shape) {
    if (shape instanceof Document) {
      const canvas = editor.canvas;
      let ghostCCS = editor.selection
        .getEnclosure(editor.canvas)
        .map((p) => lcs2ccs(canvas, shape, p));
      canvas.storeState();
      canvas.strokeColor = Color.SELECTION;
      canvas.strokeWidth = canvas.px * 1.5;
      canvas.strokePattern = [];
      canvas.roughness = 0;
      canvas.alpha = 1;
      canvas.polyline(ghostCCS);
      editor.selection.getShapes().forEach((s) => {
        const shapeGhostCSS = s
          .getEnclosure()
          .map((p) => lcs2ccs(canvas, s, p));
        canvas.polyline(shapeGhostCSS);
      });
      canvas.restoreState();
    }
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    // draw ghost
    drawPolylineInLCS(canvas, shape, this.ghost);
    // hovering containable
    const dp = shape.localCoordTransform(canvas, this.dragPoint, true);
    const selections = editor.selection.getShapes();
    const container = editor.doc?.getShapeAt(canvas, dp, selections);
    if (
      container &&
      container !== shape &&
      container.containable &&
      selections.every((s) => container?.canContain(s))
    ) {
      const manipulator = manipulatorManager.get(container.type);
      if (manipulator) manipulator.drawHovering(editor, container, e);
    }
    // draw snap
    this.snap.draw(editor, shape, this.ghost);
  }
}

/**
 * SelectionsMoveController2
 */
export class SelectionsMoveController2 extends Controller2 {
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
    return editor.selection.size() > 1;
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (this.dragging) return true;
    if (shape instanceof Document) {
      const canvas = editor.canvas;
      const p = canvas.globalCoordTransformRev([e.x, e.y]);
      for (let s of editor.selection.getShapes()) {
        if (s.visible && s.enable && s.containsPoint(canvas, p)) return true;
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
    return [Cursor.MOVE, 0];
  }

  initialize(editor: Editor, shape: Shape): void {
    // this.ghost = editor.selection.getEnclosure(editor.canvas);
    editor.transform.startTransaction("move");
  }

  /**
   * Update ghost
   * @param shape (is a diagram in group manipulator)
   */
  update(editor: Editor, shape: Shape) {
    let ghost = editor.selection.getEnclosure(editor.canvas);
    // update ghost
    ghost = ghost.map((p) => [p[0] + this.dx, p[1] + this.dy]);
    this.ghost = ghost;

    const canvas = editor.canvas;
    let dp = shape.localCoordTransform(canvas, this.dragPoint, false);
    const selections = editor.selection.getShapes();
    const diagram = editor.doc as Document;

    // determine container
    // (container shouldn't be itself of a descendant of target)
    let container = editor.doc?.getShapeAt(canvas, dp, selections);
    const r = selections.find((sh) => sh.find((s) => s.id === container?.id));
    if (r) container = null;
    if (!(container && selections.every((s) => container?.canContain(s))))
      container = editor.doc;

    const tr = editor.transform;
    tr.moveShapes(diagram, selections, this.dx, this.dy, container);
    tr.resolveAllConstraints(diagram, canvas);
  }

  /**
   * Finalize shape by ghost
   * @param shape (is a diagram in group manipulator)
   */
  finalize(editor: Editor, shape: Shape) {
    // const canvas = editor.canvas;
    // let dp = shape.localCoordTransform(canvas, this.dragPoint, false);
    // const selections = editor.selection.getShapes();
    // const diagram = editor.doc as Document;

    // // determine container
    // // (container shouldn't be itself of a descendant of target)
    // let container = editor.doc?.getShapeAt(canvas, dp, selections);
    // const r = selections.find((sh) => sh.find((s) => s.id === container?.id));
    // if (r) container = null;
    // if (!(container && selections.every((s) => container?.canContain(s))))
    //   container = editor.doc;

    // const tr = editor.transform;
    // tr.startTransaction("move");
    // tr.moveShapes(diagram, selections, this.dx, this.dy, container);
    // tr.resolveAllConstraints(diagram, canvas);
    // tr.endTransaction();
    editor.transform.endTransaction();
  }

  /**
   * Draw ghost for the selected shapes
   * @param shape (is a diagram in group manipulator)
   */
  draw(editor: Editor, shape: Shape) {
    if (shape instanceof Document) {
      const canvas = editor.canvas;
      let ghostCCS = editor.selection
        .getEnclosure(editor.canvas)
        .map((p) => lcs2ccs(canvas, shape, p));
      canvas.storeState();
      canvas.strokeColor = Color.SELECTION;
      canvas.strokeWidth = canvas.px * 1.5;
      canvas.strokePattern = [];
      canvas.roughness = 0;
      canvas.alpha = 1;
      canvas.polyline(ghostCCS);
      editor.selection.getShapes().forEach((s) => {
        const shapeGhostCSS = s
          .getEnclosure()
          .map((p) => lcs2ccs(canvas, s, p));
        canvas.polyline(shapeGhostCSS);
      });
      canvas.restoreState();
    }
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    // draw ghost
    drawPolylineInLCS(canvas, shape, this.ghost);
    // hovering containable
    const dp = shape.localCoordTransform(canvas, this.dragPoint, true);
    const selections = editor.selection.getShapes();
    const container = editor.doc?.getShapeAt(canvas, dp, selections);
    if (
      container &&
      container !== shape &&
      container.containable &&
      selections.every((s) => container?.canContain(s))
    ) {
      const manipulator = manipulatorManager.get(container.type);
      if (manipulator) manipulator.drawHovering(editor, container, e);
    }
    // draw snap
    this.snap.draw(editor, shape, this.ghost);
  }
}
