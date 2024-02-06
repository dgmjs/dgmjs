/*
 * Copyright (c) 2023 MKLabs. All rights reserved.
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

import type { Editor } from ".";
import {
  Box,
  Group,
  Diagram,
  type Shape,
  Line,
  type ShapeValues,
  Connector,
} from "./shapes";
import * as geometry from "./graphics/geometry";

/**
 * Undo
 */
export function undo(editor: Editor) {
  editor.state.transform.undo();
  editor.repaint();
}

/**
 * Redo
 */
export function redo(editor: Editor) {
  editor.state.transform.redo();
  editor.repaint();
}

/**
 * Update shape properties
 */
export function update(editor: Editor, values: ShapeValues, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const diagram = editor.state.diagram as Diagram;
  const tr = editor.state.transform;
  tr.startTransaction("update");
  for (let key in values) {
    if (key === "routeType") {
      shapes.forEach((s) => {
        if (s instanceof Connector) tr.changeRouteType(s, (values as any)[key]);
      });
    } else if (key === "horzAlign") {
      shapes.forEach((s) => {
        if (s instanceof Box) tr.setHorzAlign(s, (values as any)[key]);
      });
    } else if (key === "fontSize") {
      shapes.forEach((s) => {
        if (s instanceof Box) tr.setFontSize(s, (values as any)[key]);
      });
    } else if (key === "fontFamily") {
      shapes.forEach((s) => {
        if (s instanceof Box) tr.setFontFamily(s, (values as any)[key]);
      });
    } else if (key === "fontColor") {
      shapes.forEach((s) => {
        if (s instanceof Box) tr.setFontColor(s, (values as any)[key]);
      });
    } else {
      shapes.forEach((s) => {
        tr.atomicAssign(s, key, (values as any)[key]);
      });
    }
  }
  tr.resolveAllConstraints(diagram, editor.canvas);
  tr.endTransaction();
}

/**
 * Delete selected shapes
 */
export function delete_(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const diagram = editor.state.diagram as Diagram;
  const tr = editor.state.transform;
  tr.startTransaction("delete");
  tr.deleteShapes(diagram, shapes);
  tr.resolveAllConstraints(diagram, editor.canvas);
  tr.endTransaction();
  editor.state.selections.deselectAll();
  editor.repaint();
}

/**
 * Copy selected shapes
 */
export function copy(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const clipboard = editor.state.clipboard;
  clipboard.clearBuffer();
  clipboard.putObjects(shapes, clipboard.buffer);
}

/**
 * Cut selected shapes
 */
export function cut(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const diagram = editor.state.diagram as Diagram;
  const tr = editor.state.transform;
  const clipboard = editor.state.clipboard;
  clipboard.clearBuffer();
  clipboard.putObjects(shapes, clipboard.buffer);
  tr.startTransaction("cut");
  tr.deleteShapes(diagram, shapes);
  tr.endTransaction();
  editor.state.selections.deselectAll();
  editor.repaint();
}

/**
 * Paste
 */
export function paste(editor: Editor, diagram?: Diagram) {
  diagram = diagram ?? (editor.state.diagram as Diagram);
  const clipboard = editor.state.clipboard;
  const tr = editor.state.transform;
  const center = editor.getCenter();
  if (clipboard.hasObjects()) {
    const shapes = clipboard.getObjects(clipboard.buffer) as Shape[];
    const boundingRect = shapes
      .map((s) => (s as Shape).getBoundingRect())
      .reduce(geometry.unionRect);
    const w = geometry.width(boundingRect);
    const h = geometry.height(boundingRect);
    const dx = center[0] - (boundingRect[0][0] + w / 2);
    const dy = center[1] - (boundingRect[0][1] + h / 2);
    tr.startTransaction("paste");
    shapes.toReversed().forEach((shape) => {
      tr.atomicInsert(shape);
      tr.changeParent(shape, diagram as Diagram);
    });
    tr.moveShapes(diagram, shapes, dx, dy);
    tr.endTransaction();
    editor.state.selections.select(shapes);
    editor.repaint();
  }
}

/**
 * Duplicate selected shapes
 */
export function duplicate(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const tr = editor.state.transform;
  const diagram = editor.state.diagram as Diagram;
  const clipboard = editor.state.clipboard;
  const buffer: any[] = [];
  clipboard.putObjects(shapes, buffer);
  if (buffer.length > 0) {
    const copied = clipboard.getObjects(buffer) as Shape[];
    tr.startTransaction("duplicate");
    copied.toReversed().forEach((shape) => {
      tr.atomicInsert(shape);
      tr.changeParent(shape, diagram);
    });
    tr.moveShapes(diagram, copied, 30, 30);
    tr.endTransaction();
    editor.state.selections.select(copied);
    editor.repaint();
  }
}

/**
 * Select all shapes
 */
export function selectAll(editor: Editor) {
  editor.state.selections.selectAll();
  editor.repaint();
}

/**
 * Move selected shapes
 */
export function move(editor: Editor, dx: number, dy: number, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    const diagram = editor.state.diagram as Diagram;
    tr.startTransaction("move-right");
    if (shapes.every((s) => s instanceof Box && s.anchored)) {
      for (let s of shapes) {
        if (s instanceof Box && s.anchored) {
          const anchorPoint = geometry.positionOnPath(
            (s.parent as Shape).getOutline() ?? [],
            s.anchorPosition
          );
          const shapeCenter = s.getCenter();
          shapeCenter[0] += dx;
          shapeCenter[1] += dy;
          const angle = geometry.angle(anchorPoint, shapeCenter);
          const length = Math.round(
            geometry.distance(shapeCenter, anchorPoint)
          );
          tr.moveAnchor(s, angle, length);
        }
      }
    } else {
      tr.moveShapes(diagram, shapes, dx, dy);
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
    editor.repaint();
  }
}

/**
 * Group selected shapes
 */
export function group(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const box = editor.state.selections.getBoundingRect(editor.canvas);
  const diagram = editor.state.diagram as Diagram;
  // filter all descendants of one of grouping shapes
  let filteredShapes: Shape[] = [];
  for (let s of shapes) {
    if (!shapes.some((s) => s.isDescendant(s))) filteredShapes.push(s);
  }
  if (filteredShapes.length > 1) {
    const tr = editor.state.transform;
    const group = new Group();
    group.left = box[0][0];
    group.top = box[0][1];
    group.width = geometry.width(box);
    group.height = geometry.height(box);
    tr.startTransaction("group");
    tr.atomicInsert(group);
    tr.changeParent(group, editor.state.diagram as Diagram);
    diagram
      ?.traverseSequence()
      .reverse()
      .forEach((s) => {
        if (filteredShapes.includes(s as Shape)) {
          tr.changeParent(s, group);
        }
      });
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
    editor.state.selections.select([group]);
    editor.repaint();
  }
}

/**
 * Ungroup selected shapes
 */
export function ungroup(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const diagram = editor.state.diagram as Diagram;
  const children: Shape[] = [];
  if (shapes.some((s) => s instanceof Group)) {
    const tr = editor.state.transform;
    tr.startTransaction("ungroup");
    for (let s of shapes) {
      if (s instanceof Group) {
        for (let i = s.children.length - 1; i >= 0; i--) {
          const child = s.children[i];
          children.push(child as Shape);
          tr.changeParent(child, s.parent as Shape);
        }
        tr.deleteSingleShape(diagram, s);
      }
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
    editor.state.selections.select(children);
    editor.repaint();
  }
}

/**
 * Bring selected shapes to front
 */
export function bringToFront(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const diagram = editor.state.diagram as Diagram;
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    tr.startTransaction("bring-to-front");
    for (let s of shapes) {
      tr.bringToFront(s);
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
  }
}

/**
 * Send selected shapes to back
 */
export function sendToBack(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const diagram = editor.state.diagram as Diagram;
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    tr.startTransaction("send-to-back");
    for (let s of shapes) {
      tr.sendToBack(s);
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
  }
}

/**
 * Bring selected shapes forward
 */
export function bringForward(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const diagram = editor.state.diagram as Diagram;
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    tr.startTransaction("bring-forward");
    for (let s of shapes) {
      tr.bringForward(s);
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
  }
}

/**
 * Send selected shapes backward
 */
export function sendBackward(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  const diagram = editor.state.diagram as Diagram;
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    tr.startTransaction("send-backward");
    for (let s of shapes) {
      tr.sendBackward(s);
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
  }
}

/**
 * Align selected shapes to left
 */
export function alignLeft(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    const diagram = editor.state.diagram as Diagram;
    tr.startTransaction("align-left");
    const ls = shapes.map((s) => s.getBoundingRect()[0][0]);
    const left = Math.min(...ls);
    for (const s of shapes) {
      if (s instanceof Box) {
        const dx = left - s.left;
        tr.moveShapes(diagram, [s], dx, 0);
      } else if (s instanceof Line) {
        const dx = left - Math.min(...s.path.map((p) => p[0]));
        tr.moveShapes(diagram, [s], dx, 0);
      }
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
  }
}

/**
 * Align selected shapes to right
 */
export function alignRight(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    const diagram = editor.state.diagram as Diagram;
    tr.startTransaction("align-right");
    const rs = shapes.map((s) => s.getBoundingRect()[1][0]);
    const right = Math.max(...rs);
    for (const s of shapes) {
      if (s instanceof Box) {
        const dx = right - s.right;
        tr.moveShapes(diagram, [s], dx, 0);
      } else if (s instanceof Line) {
        const dx = right - Math.max(...s.path.map((p) => p[0]));
        tr.moveShapes(diagram, [s], dx, 0);
      }
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
  }
}

/**
 * Align selected shapes to horizontally center
 */
export function alignCenter(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    const diagram = editor.state.diagram as Diagram;
    tr.startTransaction("align-center");
    const ls = shapes.map((s) => s.getBoundingRect()[0][0]);
    const rs = shapes.map((s) => s.getBoundingRect()[1][0]);
    const left = Math.min(...ls);
    const right = Math.max(...rs);
    const center = Math.round((left + right) / 2);
    for (const s of shapes) {
      if (s instanceof Box) {
        const dx = center - Math.round((s.left + s.right) / 2);
        tr.moveShapes(diagram, [s], dx, 0);
      } else if (s instanceof Line) {
        const l = Math.min(...s.path.map((p) => p[0]));
        const r = Math.max(...s.path.map((p) => p[0]));
        const dx = center - Math.round((l + r) / 2);
        tr.moveShapes(diagram, [s], dx, 0);
      }
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
  }
}

/**
 * Align selected shapes to top
 */
export function alignTop(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    const diagram = editor.state.diagram as Diagram;
    tr.startTransaction("align-top");
    const ts = shapes.map((s) => s.getBoundingRect()[0][1]);
    const top = Math.min(...ts);
    for (const s of shapes) {
      if (s instanceof Box) {
        const dy = top - s.top;
        tr.moveShapes(diagram, [s], 0, dy);
      } else if (s instanceof Line) {
        const dy = top - Math.min(...s.path.map((p) => p[1]));
        tr.moveShapes(diagram, [s], 0, dy);
      }
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
  }
}

/**
 * Align selected shapes to bottom
 */
export function alignBottom(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    const diagram = editor.state.diagram as Diagram;
    tr.startTransaction("align-bottom");
    const bs = shapes.map((s) => s.getBoundingRect()[1][1]);
    const bottom = Math.max(...bs);
    for (const s of shapes) {
      if (s instanceof Box) {
        const dy = bottom - s.bottom;
        tr.moveShapes(diagram, [s], 0, dy);
      } else if (s instanceof Line) {
        const dy = bottom - Math.max(...s.path.map((p) => p[1]));
        tr.moveShapes(diagram, [s], 0, dy);
      }
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
  }
}

/**
 * Align selected shapes to vertically middle
 */
export function alignMiddle(editor: Editor, shapes?: Shape[]) {
  shapes = shapes ?? editor.state.selections.getSelections();
  if (shapes.length > 0) {
    const tr = editor.state.transform;
    const diagram = editor.state.diagram as Diagram;
    tr.startTransaction("align-middle");
    const ts = shapes.map((s) => s.getBoundingRect()[0][1]);
    const bs = shapes.map((s) => s.getBoundingRect()[1][1]);
    const top = Math.min(...ts);
    const bottom = Math.max(...bs);
    const middle = Math.round((top + bottom) / 2);
    for (const s of shapes) {
      if (s instanceof Box) {
        const dy = middle - Math.round((s.top + s.bottom) / 2);
        tr.moveShapes(diagram, [s], 0, dy);
      } else if (s instanceof Line) {
        const t = Math.min(...s.path.map((p) => p[1]));
        const b = Math.max(...s.path.map((p) => p[1]));
        const dy = middle - Math.round((t + b) / 2);
        tr.moveShapes(diagram, [s], 0, dy);
      }
    }
    tr.resolveAllConstraints(diagram, editor.canvas);
    tr.endTransaction();
  }
}

/**
 * Create a new diagarm
 */
export function createDiagram(editor: Editor): Diagram {
  const diagram = new Diagram();
  editor.state.store.setRoot(diagram);
  editor.state.setDiagram(diagram);
  editor.state.selections.deselectAll();
  editor.repaint();
  return diagram;
}

/**
 * Change diagram
 */
export function changeDiagram(editor: Editor, diagram: Diagram) {
  editor.state.setDiagram(diagram);
  editor.state.selections.deselectAll();
  editor.repaint();
}

/**
 * Load from JSON
 */
export function loadFromJSON(editor: Editor, json: any) {
  if (json) {
    editor.state.selections.deselectAll();
    editor.state.store.fromJSON(json);
    if (editor.state.store.root instanceof Diagram) {
      editor.state.setDiagram(editor.state.store.root);
      editor.repaint();
    }
  }
}
