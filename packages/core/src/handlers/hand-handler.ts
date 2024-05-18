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
import { Mouse, Cursor } from "../graphics/const";

/**
 * Hand Handler
 */
export class HandHandler extends Handler {
  dragging: boolean = false;
  dragStartPoint: number[] = [-1, -1];
  dragPoint: number[] = [-1, -1];
  dx: number = 0;
  dy: number = 0;

  reset(): void {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.dx = 0;
    this.dy = 0;
  }

  /**
   * handle pointer down event
   */
  pointerDown(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1) {
      editor.setCursor(Cursor.GRABBING);
      const canvas = editor.canvas;
      this.dragging = true;
      this.dragStartPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.dragPoint = geometry.copy(this.dragStartPoint);
      this.dx = 0;
      this.dy = 0;
    }
  }

  /**
   * handle pointer move event
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    editor.repaint();
    if (this.dragging) {
      const canvas = editor.canvas;
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.dx = this.dragPoint[0] - this.dragStartPoint[0];
      this.dy = this.dragPoint[1] - this.dragStartPoint[1];
      editor.moveOrigin(this.dx, this.dy);
    }
  }

  /**
   * handle pointer up event
   */
  pointerUp(editor: Editor, e: CanvasPointerEvent) {
    if (e.button === Mouse.BUTTON1 && this.dragging) {
      editor.setCursor(Cursor.GRAB);
      this.reset();
      this.complete(editor);
    }
  }

  onActivate(editor: Editor): void {
    editor.setCursor(Cursor.GRAB);
  }

  onDeactivate(editor: Editor): void {
    editor.setCursor(Cursor.DEFAULT);
  }
}
