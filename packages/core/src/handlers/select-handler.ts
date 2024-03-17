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
import { Editor, Handler, HandlerOptions, manipulatorManager } from "../editor";
import { Mouse, Color, Cursor } from "../graphics/const";
import * as guide from "../utils/guide";

/**
 * Select Handler
 */
export class SelectHandler extends Handler {
  dragging: boolean = false;
  dragStartPoint: number[] = [-1, -1];

  reset(): void {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
  }

  /**
   * Returns a shape (with manipulator area) located at the position e.
   */
  getShapeAt(editor: Editor, e: CanvasPointerEvent): Shape | null {
    const canvas = editor.canvas;
    if (editor.currentPage) {
      let p = canvas.globalCoordTransformRev([e.x, e.y]);
      // find in selected shapes' manipulators
      for (let s of editor.selection.getShapes()) {
        const manipulator = manipulatorManager.get(s.type);
        if (manipulator && manipulator.mouseIn(editor, s, e)) {
          return s;
        }
      }
      // find in document
      return editor.currentPage.getShapeAt(canvas, p);
    }
    return null;
  }

  /**
   * handle pointer down event
   */
  pointerDown(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    if (e.button === Mouse.BUTTON1) {
      const shape = this.getShapeAt(editor, e);
      if (shape) {
        // single selection
        if (e.shiftDown) {
          if (editor.selection.isSelected(shape)) {
            editor.selection.deselect([shape]);
          } else {
            editor.selection.selectAdditional([shape]);
          }
        } else {
          if (!editor.selection.isSelected(shape)) {
            editor.selection.select([shape]);
          }
        }
      } else {
        // area selection
        editor.selection.deselectAll();
        this.dragging = true;
        this.dragStartPoint = canvas.globalCoordTransformRev([e.x, e.y]);
        editor.triggerDragStart(null, this.dragStartPoint);
      }
    }

    // delegates to manipulators
    editor.repaint(false); // do not draw selections
    let cursor: [string, number] = [Cursor.DEFAULT, 0];
    if (editor.currentPage) {
      if (editor.selection.size() > 1) {
        const manipulator = manipulatorManager.get("selections");
        if (manipulator) {
          manipulator.pointerDown(editor, editor.currentPage, e);
          if (manipulator.mouseIn(editor, editor.currentPage, e)) {
            cursor =
              manipulator.mouseCursor(editor, editor.currentPage, e) ?? cursor;
          }
        }
      }
      if (editor.selection.size() === 1) {
        const s = editor.selection.getShapes()[0];
        const manipulator = manipulatorManager.get(s.type);
        if (manipulator) {
          manipulator.pointerDown(editor, s, e);
          if (manipulator.mouseIn(editor, s, e)) {
            cursor = manipulator.mouseCursor(editor, s, e) ?? cursor;
          }
        }
      }
    }
    if (Array.isArray(cursor) && cursor.length > 1) {
      editor.setCursor(cursor[0], cursor[1]);
    } else {
      editor.setCursor(Cursor.DEFAULT);
    }
  }

  /**
   * handle pointer move event
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    const p = canvas.globalCoordTransformRev([e.x, e.y]);
    editor.repaint(false); // do not draw selections

    if (editor.currentPage) {
      // selecting area
      if (this.dragging) {
        const p1 = canvas.globalCoordTransform(this.dragStartPoint);
        const p2 = canvas.globalCoordTransform(p);
        const rect = geometry.normalizeRect([p1, p2]);
        canvas.strokeColor = Color.SELECTION;
        canvas.strokeWidth = canvas.px * 1.5;
        canvas.strokePattern = [];
        canvas.roughness = 0;
        canvas.alpha = 1;
        canvas.strokeRect(rect[0][0], rect[0][1], rect[1][0], rect[1][1]);

        // hovering shapes overlaps selecting area
        for (let shape of editor.currentPage.children) {
          const s = shape as Shape;
          let box = geometry.normalizeRect([this.dragStartPoint, p]);
          if (s.overlapRect(canvas, box)) {
            const manipulator = manipulatorManager.get(s.type);
            if (manipulator) manipulator.drawHovering(editor, s, e);
          }
        }

        // propagate drag event
        editor.triggerDrag(null, p);
      } else if (!e.leftButtonDown) {
        // other shape hovering
        const shape = editor.currentPage.getShapeAt(canvas, p);
        if (shape && !editor.selection.isSelected(shape)) {
          guide.drawHovering(editor, shape, e);
        }
      }
    }

    // draw ghost over hovering
    editor.drawSelection();

    // delegates to manipulators
    let cursor: [string, number] = [Cursor.DEFAULT, 0];
    if (editor.currentPage) {
      if (editor.selection.getShapes().length > 1) {
        const manipulator = manipulatorManager.get("selections");
        if (manipulator) {
          manipulator.pointerMove(editor, editor.currentPage, e);
          if (manipulator.mouseIn(editor, editor.currentPage, e)) {
            cursor =
              manipulator.mouseCursor(editor, editor.currentPage, e) ?? cursor;
          }
        }
      }
      if (editor.selection.size() === 1) {
        const s = editor.selection.getShapes()[0];
        const manipulator = manipulatorManager.get(s.type);
        if (manipulator) {
          manipulator.pointerMove(editor, s, e);
          if (manipulator.mouseIn(editor, s, e) || manipulator.isDragging()) {
            cursor = manipulator.mouseCursor(editor, s, e) ?? cursor;
          }
        }
      }
    }
    if (Array.isArray(cursor) && cursor.length > 1) {
      editor.setCursor(cursor[0], cursor[1]);
    } else {
      editor.setCursor(Cursor.DEFAULT);
    }
  }

  /**
   * handle pointer up event
   */
  pointerUp(editor: Editor, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    const p = canvas.globalCoordTransformRev([e.x, e.y]);
    // select area
    if (e.button === Mouse.BUTTON1 && this.dragging) {
      editor.selection.selectArea(
        this.dragStartPoint[0],
        this.dragStartPoint[1],
        p[0],
        p[1]
      );
    }
    // delegates to manipulators
    let cursor: [string, number] = [Cursor.DEFAULT, 0];
    if (editor.currentPage) {
      if (editor.selection.getShapes().length > 1) {
        const manipulator = manipulatorManager.get("selections");
        if (manipulator) {
          if (manipulator.mouseIn(editor, editor.currentPage, e)) {
            cursor =
              manipulator.mouseCursor(editor, editor.currentPage, e) ?? cursor;
          }
          manipulator.pointerUp(editor, editor.currentPage, e);
        }
      }
      if (editor.selection.size() === 1) {
        const s = editor.selection.getShapes()[0];
        const manipulator = manipulatorManager.get(s.type);
        if (manipulator) {
          if (manipulator.mouseIn(editor, s, e)) {
            cursor = manipulator.mouseCursor(editor, s, e) ?? cursor;
          }
          manipulator.pointerUp(editor, s, e);
        }
      }
    }
    if (Array.isArray(cursor) && cursor.length > 1) {
      editor.setCursor(cursor[0], cursor[1]);
    } else {
      editor.setCursor(Cursor.DEFAULT);
    }

    // clear states
    editor.repaint();

    if (this.dragging) {
      editor.triggerDragEnd(null, p);
    }

    this.dragging = false;
    this.dragStartPoint = [-1, -1];
  }

  /**
   * keyDown
   */
  keyDown(editor: Editor, e: KeyboardEvent) {
    // delegates to manipulators
    if (editor.currentPage) {
      if (editor.selection.getShapes().length === 1) {
        const shape = editor.selection.getShapes()[0];
        const manipulator = manipulatorManager.get(shape.type);
        if (manipulator) manipulator.keyDown(editor, shape, e);
      } else if (editor.selection.getShapes().length > 1) {
        const manipulator = manipulatorManager.get("selections");
        if (manipulator) manipulator.keyDown(editor, editor.currentPage, e);
      }
    }
    if (e.key === "Escape") {
      this.dragging = false;
      this.dragStartPoint = [-1, -1];
      editor.selection.deselectAll();
      editor.repaint();
    }
  }

  /**
   * keyUp
   */
  keyUp(editor: Editor, e: KeyboardEvent) {}

  /**
   * Draw ghost for the selected shape
   */
  drawSelection(editor: Editor) {
    if (editor.currentPage) {
      // delegates to manipulators
      if (editor.selection.getShapes().length > 1) {
        const manipulator = manipulatorManager.get("selections");
        if (manipulator) manipulator.draw(editor, editor.currentPage);
      }
      editor.currentPage.traverse((shape) => {
        const s = shape as Shape;
        const manipulator = manipulatorManager.get(s.type);
        if (manipulator && editor.selection.isSelected(s)) {
          manipulator.draw(editor, s);
        }
      });
    }
  }
}
