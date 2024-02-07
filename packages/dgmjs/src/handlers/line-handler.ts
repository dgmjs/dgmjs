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
import { Editor, Handler } from "../editor";
import { Mouse, Color, MAGNET_THRESHOLD, Cursor } from "../graphics/const";
import * as guide from "../utils/guide";

/**
 * Line Factory Handler
 */
export class LineFactoryHandler extends Handler {
  dragging: boolean;
  dragStartPoint: number[];
  dragPoint: number[];
  points: number[][];
  closed: boolean;
  draggingMoved: boolean;

  constructor(id: string) {
    super(id);
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.points = [];
    this.closed = false;
    this.draggingMoved = false;
  }

  init() {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.points = [];
    this.closed = false;
    this.draggingMoved = false;
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
      this.points.push(this.dragPoint);
      this.drawDragging(editor, e);
      if (this.closed) {
        this.doCreate(editor);
      }
    }
  }

  /**
   * pointerMove
   * @override
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    editor.repaint();
    if (this.dragging || this.points.length > 0) {
      const canvas = editor.canvas;
      this.draggingMoved = true;
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.closed =
        this.points.length > 2 &&
        geometry.distance(this.points[0], this.dragPoint) <= MAGNET_THRESHOLD;
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
      if (this.points.length < 2 && this.draggingMoved) {
        this.points.push(geometry.copy(this.dragPoint));
        this.doCreate(editor);
      } else {
        // this.onPointClicked(editor);
      }
      this.dragging = false;
      this.draggingMoved = false;
      this.dragStartPoint = [-1, -1];
    }
  }

  onActivate(editor: Editor): void {
    this.init();
    editor.setCursor(Cursor.CROSSHAIR);
  }

  onDeactivate(editor: Editor): void {
    if (this.points.length > 1) {
      this.doCreate(editor);
    }
    this.init();
    editor.setCursor(Cursor.DEFAULT);
  }

  doCreate(editor: Editor) {
    const path = geometry.pathCopy(this.points);
    const closed = this.closed;
    this.init();
    editor.factory.createLine(path, closed);
  }

  drawHovering(editor: Editor, e: CanvasPointerEvent): void {}

  drawDragging(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    const ps = this.points.map((p) => canvas.globalCoordTransform(p));
    canvas.strokeColor = Color.SELECTION;
    canvas.strokeWidth = canvas.px;
    canvas.strokePattern = [];
    canvas.roughness = 0;
    canvas.alpha = 1;
    canvas.polyline([...ps, canvas.globalCoordTransform(this.dragPoint)]);
    for (let p of ps) {
      guide.drawControlPoint(canvas, p, 1);
    }
    if (this.closed) {
      guide.drawControlPoint(canvas, ps[0], 5);
    }
  }
}
