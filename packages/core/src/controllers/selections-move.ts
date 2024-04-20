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
import { Shape, Page } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { Color, Cursor } from "../graphics/const";
import { Snap } from "../manipulators/snap";
import { lcs2ccs } from "../graphics/utils";
import { moveShapes, resolveAllConstraints } from "../mutates";

/**
 * SelectionsMoveController
 */
export class SelectionsMoveController extends Controller {
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
    return editor.selection.size() > 1;
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (shape instanceof Page) {
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
    editor.history.startAction("move");
  }

  /**
   * Update
   * @param shape (is a page in group manipulator)
   */
  update(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const selections = editor.selection.getShapes();

    // determine container
    // (container shouldn't be itself of a descendant of target)
    let container = editor.currentPage?.getShapeAt(
      canvas,
      this.dragPointGCS,
      selections
    );
    const r = selections.find((sh) => sh.find((s) => s.id === container?.id));
    if (r) container = null;
    if (!(container && selections.every((s) => container?.canContain(s))))
      container = editor.currentPage;

    // move shapes
    editor.store.transact((tx) => {
      const page = editor.currentPage!;
      moveShapes(
        tx,
        page,
        selections,
        this.dxStepGCS,
        this.dyStepGCS,
        container
      );
      resolveAllConstraints(tx, page, canvas);
    });
  }

  /**
   * Finalize shape by ghost
   * @param shape (is a page in group manipulator)
   */
  finalize(editor: Editor, shape: Shape) {
    editor.history.endAction();
  }

  /**
   * Draw ghost for the selected shapes
   * @param shape (is a page in group manipulator)
   */
  draw(editor: Editor, shape: Shape) {
    if (shape instanceof Page) {
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
    const selections = editor.selection.getShapes();
    const container = editor.currentPage?.getShapeAt(
      canvas,
      this.dragPointGCS,
      selections
    );
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
    // this.snap.draw(editor, shape, this.ghost);
  }
}
