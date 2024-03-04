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
import { Shape, Line, Movable, Document, Connector } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import { Snap } from "../manipulators/snap";
import * as geometry from "../graphics/geometry";
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
  controlPath: number[][];

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.snap = new Snap();
    this.controlPath = [];
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return (
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape.movable !== Movable.NONE &&
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
    this.controlPath = geometry.pathCopy((shape as Line).path);
    editor.transform.startTransaction("repath");
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
    if (!targetShape || targetShape instanceof Document) return;
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

    // update ghost
    let newPath = this.controlPath.map((p) => [p[0] + this.dx, p[1] + this.dy]);

    // apply movable property
    const canvas = editor.canvas;
    const doc = editor.doc as Document;

    // transform shape
    if (this.dx !== 0 || this.dy !== 0) {
      const tr = editor.transform;
      tr.setPath(shape, newPath);
      tr.atomicAssignRef(shape, "head", null);
      tr.atomicAssignRef(shape, "tail", null);
      tr.resolveAllConstraints(doc, canvas);
    }
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Shape) {
    editor.transform.endTransaction();
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    // super.drawDragging(editor, shape, e);
    // const canvas = editor.canvas;
    // // draw ghost
    // guide.drawPolylineInLCS(
    //   canvas,
    //   shape,
    //   this.ghost,
    //   (shape as Line).lineType,
    //   geometry.isClosed(this.ghost)
    // );
    // // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
