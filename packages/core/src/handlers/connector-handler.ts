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
import { Shape } from "../shapes";
import { Editor, Handler, manipulatorManager } from "../editor";
import { Color, Cursor, Mouse, SHAPE_MIN_SIZE } from "../graphics/const";
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
  }

  initialize(): void {
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
      this.drawDragging(editor, e);
    }
  }

  /**
   * pointerMove
   * @override
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    editor.repaint();
    const canvas = editor.canvas;
    const p = canvas.globalCoordTransformRev([e.x, e.y]);
    if (this.dragging) {
      const [end, cp, cpIndex] = findConnectionPoint(editor, null, p);
      this.headEnd = end;
      this.headCP = cp;
      this.headCPIndex = cpIndex;
      this.dragPoint = p;
      this.drawDragging(editor, e);
    } else {
      const [end, cp, cpIndex] = findConnectionPoint(editor, null, p);
      this.tailEnd = end;
      this.tailCP = cp;
      this.tailCPIndex = cpIndex;
      this.drawHovering(editor, e);
    }
  }

  /**
   * pointerUp
   * @override
   */
  pointerUp(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1 && this.dragging) {
      if (
        geometry.distance(this.dragStartPoint, this.dragPoint) > SHAPE_MIN_SIZE
      ) {
        editor.factory.createConnector(
          this.tailEnd,
          this.tailCPIndex,
          this.headEnd,
          this.headCPIndex,
          [this.dragStartPoint, this.dragPoint]
        );
      }
      this.initialize();
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
      guide.drawConnectionPoints(canvas, this.tailEnd);
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
      guide.drawConnectionPoints(canvas, this.headEnd);
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
    if (editor.doc) {
      this.drawTailConnectionHovering(editor, e);
    }
  }

  drawDragging(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    const p1 = canvas.globalCoordTransform(
      this.tailCP ? this.tailCP : this.dragStartPoint
    );
    const p2 = canvas.globalCoordTransform(
      this.headCP ? this.headCP : this.dragPoint
    );
    canvas.strokeColor = Color.SELECTION;
    canvas.strokeWidth = canvas.px;
    canvas.strokePattern = [];
    canvas.roughness = 0;
    canvas.alpha = 1;
    canvas.line(p1[0], p1[1], p2[0], p2[1]);
    this.drawTailConnectionHovering(editor, e);
    this.drawHeadConnectionHovering(editor, e);
  }
}
