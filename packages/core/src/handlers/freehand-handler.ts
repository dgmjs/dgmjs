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
import { Mouse, MAGNET_THRESHOLD, Cursor } from "../graphics/const";
import { Line } from "../shapes";
import simplifyPath from "simplify-path";

/**
 * Freehand Factory Handler
 */
export class FreehandFactoryHandler extends Handler {
  dragging: boolean = false;
  dragStartPoint: number[] = [-1, -1];
  dragPoint: number[] = [-1, -1];
  draggingPoints: number[][] = [];
  closed: boolean = false;
  shape: Line | null = null;

  reset(): void {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.draggingPoints = [];
    this.closed = false;
    this.shape = null;
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.currentPage;
    if (page) {
      this.draggingPoints.push(this.dragStartPoint);
      this.shape = editor.factory.createFreehand(this.draggingPoints, false);
      editor.transform.startTransaction("create");
      editor.transform.addShape(this.shape, page);
    }
  }

  update(editor: Editor, e: CanvasPointerEvent): void {
    const page = editor.currentPage;
    this.draggingPoints.push(this.dragPoint);
    this.closed =
      geometry.distance(
        this.draggingPoints[0],
        this.draggingPoints[this.draggingPoints.length - 1]
      ) <= MAGNET_THRESHOLD;
    const newPath = simplifyPath(this.draggingPoints, 5);
    if (this.closed) {
      newPath[newPath.length - 1] = geometry.copy(newPath[0]);
    }
    if (page && this.shape) {
      editor.transform.setPath(this.shape, newPath);
      editor.transform.resolveAllConstraints(page, editor.canvas);
    }
  }

  finalize(editor: Editor, e: CanvasPointerEvent): void {
    if (this.shape) {
      const MIN_SIZE = 2;
      if (geometry.pathLength(this.draggingPoints) < MIN_SIZE) {
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
    }
  }

  /**
   * pointerMove
   * @override
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    if (this.dragging) {
      const canvas = editor.canvas;
      this.dragPoint = canvas.globalCoordTransformRev([e.x, e.y]);
      this.update(editor, e);
      editor.repaint();
    } else {
      editor.repaint();
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
      this.reset();
      this.done(editor);
    }
  }

  keyDown(editor: Editor, e: KeyboardEvent): boolean {
    if (e.key === "Escape" && this.dragging) {
      editor.transform.cancelTransaction();
      editor.repaint();
      this.reset();
      this.done(editor);
    }
    return false;
  }

  onActivate(editor: Editor): void {
    editor.setCursor(Cursor.CROSSHAIR);
  }

  onDeactivate(editor: Editor): void {
    editor.setCursor(Cursor.DEFAULT);
  }
}
