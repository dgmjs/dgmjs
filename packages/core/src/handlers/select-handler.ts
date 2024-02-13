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
import { Editor, Handler, Manipulator, manipulatorManager } from "../editor";
import { Mouse, Color, Cursor } from "../graphics/const";
import * as guide from "../utils/guide";

export class SelectHandlerExtraBehavior {
  pointerDown(
    selectHandler: SelectHandler,
    editor: Editor,
    e: CanvasPointerEvent
  ): boolean {
    return false;
  }
  pointerMove(
    selectHandler: SelectHandler,
    editor: Editor,
    e: CanvasPointerEvent
  ): boolean {
    return false;
  }
  pointerUp(
    selectHandler: SelectHandler,
    editor: Editor,
    e: CanvasPointerEvent
  ): boolean {
    return false;
  }
  keyDown(
    selectHandler: SelectHandler,
    editor: Editor,
    e: KeyboardEvent
  ): boolean {
    return false;
  }
  keyUp(
    selectHandler: SelectHandler,
    editor: Editor,
    e: KeyboardEvent
  ): boolean {
    return false;
  }
}

/**
 * Select Handler
 */
export class SelectHandler extends Handler {
  dragging: boolean;
  dragStartPoint: number[];
  extraBehaviors: SelectHandlerExtraBehavior[];
  activeManipulator: Manipulator | null;

  constructor(id: string, extras?: SelectHandlerExtraBehavior[]) {
    super(id);
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.extraBehaviors = extras ?? [];
    this.activeManipulator = null;
  }

  /**
   * Returns a shape (with manipulator area) located at the position e.
   */
  getShapeAt(editor: Editor, e: CanvasPointerEvent): Shape | null {
    const canvas = editor.canvas;
    if (editor.state.diagram) {
      let p = canvas.globalCoordTransformRev([e.x, e.y]);
      // find in selected shapes' manipulators
      for (let s of editor.state.selections.getSelections()) {
        const manipulator = manipulatorManager.get(s.type);
        if (manipulator && manipulator.mouseIn(editor, s, e)) {
          return s;
        }
      }
      // find in diagram
      return editor.state.diagram.getShapeAt(canvas, p);
    }
    return null;
  }

  /**
   * handle pointer down event
   */
  pointerDown(editor: Editor, e: CanvasPointerEvent) {
    // handle extra behaviors
    for (let extra of this.extraBehaviors) {
      let handled = extra.pointerDown(this, editor, e);
      if (handled) return;
    }

    const canvas = editor.canvas;
    if (e.button === Mouse.BUTTON1) {
      const shape = this.getShapeAt(editor, e);
      if (shape) {
        // single selection
        if (e.shiftDown) {
          if (editor.state.selections.isSelected(shape)) {
            editor.state.selections.deselect([shape]);
          } else {
            editor.state.selections.selectAdditional([shape]);
          }
        } else {
          if (!editor.state.selections.isSelected(shape)) {
            editor.state.selections.select([shape]);
          }
        }
      } else {
        // area selection
        editor.state.selections.deselectAll();
        this.dragging = true;
        this.dragStartPoint = canvas.globalCoordTransformRev([e.x, e.y]);
        editor.triggerDragStart(null, this.dragStartPoint);
      }
    }

    // delegates to manipulators
    editor.repaint(false); // do not draw selections
    this.activeManipulator = null;
    let cursor: [string, number] = [Cursor.DEFAULT, 0];
    if (editor.state.diagram) {
      if (editor.state.selections.getSelections().length > 1) {
        const manipulator = manipulatorManager.get("selections");
        if (manipulator) {
          const handled = manipulator.pointerDown(
            editor,
            editor.state.diagram,
            e
          );
          if (handled) this.activeManipulator = manipulator;
          if (manipulator.mouseIn(editor, editor.state.diagram, e)) {
            cursor =
              manipulator.mouseCursor(editor, editor.state.diagram, e) ??
              cursor;
          }
        }
      }
      editor.state.diagram.traverse((shape) => {
        const s = shape as Shape;
        const manipulator = manipulatorManager.get(s.type);
        if (manipulator) {
          const handled = manipulator.pointerDown(editor, s, e);
          if (handled) this.activeManipulator = manipulator;
          if (manipulator.mouseIn(editor, s, e)) {
            cursor = manipulator.mouseCursor(editor, s, e) ?? cursor;
          }
        }
      });
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

    // handle extra behaviors
    for (let extra of this.extraBehaviors) {
      let handled = extra.pointerMove(this, editor, e);
      if (handled) return;
    }

    if (editor.state.diagram) {
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
        for (let shape of editor.state.diagram.children) {
          const s = shape as Shape;
          let box = geometry.normalizeRect([this.dragStartPoint, p]);
          if (s.overlapRect(box)) {
            const manipulator = manipulatorManager.get(s.type);
            if (manipulator) manipulator.drawHovering(editor, s, e);
          }
        }

        // propagate drag event
        editor.triggerDrag(null, p);
      } else if (!e.leftButtonDown) {
        // other shape hovering
        const shape = editor.state.diagram.getShapeAt(canvas, p);
        if (shape && !editor.state.selections.isSelected(shape)) {
          guide.drawHovering(editor, shape, e);
        }
      }
    }

    // draw ghost over hovering
    editor.drawSelection();

    // delegates to manipulators
    this.activeManipulator = null;
    let cursor: [string, number] = [Cursor.DEFAULT, 0];
    if (editor.state.diagram) {
      if (editor.state.selections.getSelections().length > 1) {
        const manipulator = manipulatorManager.get("selections");
        if (manipulator) {
          const handled = manipulator.pointerMove(
            editor,
            editor.state.diagram,
            e
          );
          if (handled) this.activeManipulator = manipulator;
          if (manipulator.mouseIn(editor, editor.state.diagram, e)) {
            cursor =
              manipulator.mouseCursor(editor, editor.state.diagram, e) ??
              cursor;
          }
        }
      }
      editor.state.diagram.traverse((shape) => {
        const s = shape as Shape;
        const manipulator = manipulatorManager.get(s.type);
        if (manipulator) {
          const handled = manipulator.pointerMove(editor, s, e);
          if (handled) this.activeManipulator = manipulator;
          if (manipulator.mouseIn(editor, s, e)) {
            cursor = manipulator.mouseCursor(editor, s, e) ?? cursor;
          }
        }
      });
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
    // handle extra behaviors
    for (let extra of this.extraBehaviors) {
      let handled = extra.pointerUp(this, editor, e);
      if (handled) return;
    }

    const canvas = editor.canvas;
    const p = canvas.globalCoordTransformRev([e.x, e.y]);
    // select area
    if (e.button === Mouse.BUTTON1 && this.dragging) {
      editor.state.selections.selectArea(
        this.dragStartPoint[0],
        this.dragStartPoint[1],
        p[0],
        p[1]
      );
    }
    // delegates to manipulators
    this.activeManipulator = null;
    let cursor: [string, number] = [Cursor.DEFAULT, 0];
    if (editor.state.diagram) {
      if (editor.state.selections.getSelections().length > 1) {
        const manipulator = manipulatorManager.get("selections");
        if (manipulator) {
          if (manipulator.mouseIn(editor, editor.state.diagram, e)) {
            cursor =
              manipulator.mouseCursor(editor, editor.state.diagram, e) ??
              cursor;
          }
          const handled = manipulator.pointerUp(
            editor,
            editor.state.diagram,
            e
          );
          if (handled) this.activeManipulator = manipulator;
        }
      }
      editor.state.diagram.traverse((shape) => {
        const s = shape as Shape;
        const manipulator = manipulatorManager.get(s.type);
        if (manipulator) {
          if (manipulator.mouseIn(editor, s, e)) {
            cursor = manipulator.mouseCursor(editor, s, e) ?? cursor;
          }
          const handled = manipulator.pointerUp(editor, s, e);
          if (handled) this.activeManipulator = manipulator;
        }
      });
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
    this.activeManipulator = null;
  }

  /**
   * keyDown
   */
  keyDown(editor: Editor, e: KeyboardEvent) {
    // handle extra behaviors
    for (let extra of this.extraBehaviors) {
      let handled = extra.keyDown(this, editor, e);
      if (handled) return;
    }

    if (e.key === "Escape") {
      this.dragging = false;
      this.dragStartPoint = [-1, -1];
      editor.state.selections.deselectAll();
      editor.repaint();
    }
    // delegates to manipulators
    if (editor.state.diagram) {
      if (editor.state.selections.getSelections().length === 1) {
        const shape = editor.state.selections.getSelections()[0];
        const manipulator = manipulatorManager.get(shape.type);
        if (manipulator) manipulator.keyDown(editor, shape, e);
      } else if (editor.state.selections.getSelections().length > 1) {
        const manipulator = manipulatorManager.get("selections");
        if (manipulator) manipulator.keyDown(editor, editor.state.diagram, e);
      }
    }
  }

  /**
   * keyUp
   */
  keyUp(editor: Editor, e: KeyboardEvent) {
    // handle extra behaviors
    for (let extra of this.extraBehaviors) {
      let handled = extra.keyUp(this, editor, e);
      if (handled) return;
    }
  }

  /**
   * Draw ghost for the selected shape
   */
  drawSelection(editor: Editor) {
    if (editor.state.diagram) {
      // delegates to manipulators
      if (editor.state.selections.getSelections().length > 1) {
        const manipulator = manipulatorManager.get("selections");
        if (manipulator) manipulator.draw(editor, editor.state.diagram);
      }
      editor.state.diagram.traverse((shape) => {
        const s = shape as Shape;
        const manipulator = manipulatorManager.get(s.type);
        if (manipulator && editor.state.selections.isSelected(s)) {
          manipulator.draw(editor, s);
        }
      });
    }
  }
}
