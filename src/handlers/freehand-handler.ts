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
import { Editor, Handler } from "../editor";
import { Mouse, Color, MAGNET_THRESHOLD, Cursor } from "../graphics/const";
import * as guide from "../utils/guide";

/**
 * Freehand Factory Handler
 */
export class FreehandFactoryHandler extends Handler {
  dragging: boolean;
  dragStartPoint: number[];
  dragPoint: number[];
  draggingPoints: number[][];
  closed: boolean;

  constructor(id: string) {
    super(id);
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.draggingPoints = [];
    this.closed = false;
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
      this.draggingPoints.push(this.dragStartPoint);
    }
  }

  /**
   * pointerMove
   * @override
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    editor.repaint();
    if (this.dragging) {
      const canvas = editor.canvas;
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.draggingPoints.push(this.dragPoint);
      this.closed =
        geometry.distance(
          this.draggingPoints[0],
          this.draggingPoints[this.draggingPoints.length - 1]
        ) <= MAGNET_THRESHOLD;
      this.drawDragging(editor, e);
    } else {
      this.drawHovering(editor, e);
    }
  }

  /**
   * pointerUp
   * @override
   */
  pointerUp(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1 && this.dragging) {
      if (this.draggingPoints.length > 1) {
        editor.factory.createFreehand(this.draggingPoints, this.closed);
      }
      this.dragging = false;
      this.dragStartPoint = [-1, -1];
      this.draggingPoints = [];
    }
  }

  onActivate(editor: Editor): void {
    editor.setCursor(Cursor.CROSSHAIR);
  }

  onDeactivate(editor: Editor): void {
    editor.setCursor(Cursor.DEFAULT);
  }

  drawHovering(editor: Editor, e: CanvasPointerEvent) {}

  drawDragging(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    const ps = this.draggingPoints.map((p) => canvas.globalCoordTransform(p));
    canvas.strokeColor = Color.SELECTION;
    canvas.strokeWidth = canvas.px;
    canvas.strokePattern = [];
    canvas.roughness = 0;
    canvas.alpha = 1;
    canvas.polyline(ps);
    if (this.closed) {
      guide.drawControlPoint(canvas, ps[0], 5);
    }
  }
}
