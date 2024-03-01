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
import { Connector, Document, Shape } from "../shapes";
import { Editor, Handler, manipulatorManager } from "../editor";
import { Cursor, Mouse } from "../graphics/const";
import { findConnectionPoint } from "../controllers/utils";
import * as guide from "../utils/guide";

/**
 * Connector Factory Handler
 */
export class ConnectorFactoryHandler extends Handler {
  dragging: boolean;
  dragStartPoint: number[];
  dragPoint: number[];
  tailEnd: Shape | null;
  tailCP: number[] | null;
  tailCPIndex: number;
  headEnd: Shape | null;
  headCP: number[] | null;
  headCPIndex: number;
  shape: Connector | null;

  constructor(id: string) {
    super(id);
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.tailEnd = null;
    this.tailCP = null;
    this.tailCPIndex = -1;
    this.headEnd = null;
    this.headCP = null;
    this.headCPIndex = -1;
    this.shape = null;
  }

  reset(): void {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.tailEnd = null;
    this.tailCP = null;
    this.tailCPIndex = -1;
    this.headEnd = null;
    this.headCP = null;
    this.headCPIndex = -1;
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
    const [end, cp, cpIndex] = findConnectionPoint(
      editor,
      null,
      this.dragStartPoint
    );
    this.tailEnd = end;
    this.tailCP = cp;
    this.tailCPIndex = cpIndex;
    this.shape = editor.factory.createConnector(
      this.tailEnd,
      this.tailCPIndex,
      this.headEnd,
      this.headCPIndex,
      [this.dragStartPoint, this.dragPoint]
    );
    const doc = editor.doc as Document;
    editor.transform.startTransaction("create");
    editor.transform.addShape(this.shape, doc);
  }

  update(editor: Editor, e: CanvasPointerEvent): void {
    if (this.tailEnd) {
      this.tailCP = (this.shape as Connector).path[0];
    }
    const [end, cp, cpIndex] = findConnectionPoint(
      editor,
      this.shape,
      this.dragPoint
    );
    this.headEnd = cp ? end : null;
    this.headCP = cp;
    this.headCPIndex = cpIndex;
    const newPath = geometry.pathCopy((this.shape as Connector).path);
    newPath[1] = this.headCP ?? geometry.copy(this.dragPoint);
    editor.transform.setPath(this.shape as Shape, newPath);
    editor.transform.atomicAssignRef(this.shape as Shape, "head", this.headEnd);
    editor.transform.atomicAssign(
      this.shape as Shape,
      "headCP",
      this.headCPIndex
    );
    editor.transform.resolveAllConstraints(
      editor.doc as Document,
      editor.canvas
    );

    // update connection points
    if (this.tailEnd) {
      this.tailCP = (this.shape as Connector).path[0];
    }
    if (this.headEnd) {
      this.headCP = (this.shape as Connector).path[1];
    }
  }

  finalize(editor: Editor, e: CanvasPointerEvent): void {
    const MIN_SIZE = 2;
    if (this.shape) {
      if (geometry.pathLength((this.shape as Connector).path) < MIN_SIZE) {
        editor.transform.cancelTransaction();
      } else {
        editor.transform.endTransaction();
        editor.factory.triggerCreate(this.shape);
      }
    }
  }

  /**
   * pointerDown
   * @override
   */
  pointerDown(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1) {
      const canvas = editor.canvas;
      this.dragging = true;
      this.dragStartPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.dragPoint = geometry.copy(this.dragStartPoint);
      this.initialize(editor, e);
      editor.repaint();
      this.drawDragging(editor, e);
    }
  }

  /**
   * pointerMove
   * @override
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    if (this.dragging) {
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.update(editor, e);
      editor.repaint();
      this.drawDragging(editor, e);
    } else {
      const p = canvas.globalCoordTransformRev([e.x, e.y]);
      const [end, cp, cpIndex] = findConnectionPoint(editor, null, p);
      this.tailEnd = end;
      this.tailCP = cp;
      this.tailCPIndex = cpIndex;
      editor.repaint();
      this.drawHovering(editor, e);
    }
  }

  /**
   * pointerUp
   * @override
   */
  pointerUp(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1 && this.dragging) {
      this.finalize(editor, e);
      editor.repaint();
      this.dragging = false;
      this.dragStartPoint = [-1, -1];
      this.dragPoint = [-1, -1];
      this.tailEnd = null;
      this.tailCP = null;
      this.tailCPIndex = -1;
      this.headEnd = null;
      this.headCP = null;
      this.headCPIndex = -1;
    }
  }

  onActivate(editor: Editor): void {
    editor.setCursor(Cursor.CROSSHAIR);
  }

  onDeactivate(editor: Editor): void {
    editor.setCursor(Cursor.DEFAULT);
  }

  drawTailConnectionHovering(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    if (this.tailEnd && this.tailEnd.connectable) {
      // draw shape hovering
      const manipulator = manipulatorManager.get(this.tailEnd.type);
      if (manipulator) manipulator.drawHovering(editor, this.tailEnd, e);
      // draw connection points (cross-mark)
      guide.drawConnectionPointMarks(canvas, this.tailEnd);
      // draw connection point hovering
      if (this.tailCP) {
        guide.drawConnectionPointHovering(
          canvas,
          this.tailEnd,
          this.tailCP,
          this.tailCPIndex
        );
      }
    }
  }

  drawHeadConnectionHovering(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    if (this.headEnd && this.headEnd.connectable) {
      // draw shape hovering
      const manipulator = manipulatorManager.get(this.headEnd.type);
      if (manipulator) manipulator.drawHovering(editor, this.headEnd, e);
      // draw connection points (cross-mark)
      guide.drawConnectionPointMarks(canvas, this.headEnd);
      // draw connection point hovering
      if (this.headCP) {
        guide.drawConnectionPointHovering(
          canvas,
          this.headEnd,
          this.headCP,
          this.headCPIndex
        );
      }
    }
  }

  drawHovering(editor: Editor, e: CanvasPointerEvent) {
    this.drawTailConnectionHovering(editor, e);
  }

  drawDragging(editor: Editor, e: CanvasPointerEvent) {
    this.drawTailConnectionHovering(editor, e);
    this.drawHeadConnectionHovering(editor, e);
  }
}
