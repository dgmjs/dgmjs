import {
  constraintManager,
  Box,
  Line,
  Shape,
  Connector,
  Page,
  Doc,
} from "./shapes";
import { Canvas } from "./graphics/graphics";
import * as geometry from "./graphics/geometry";
import { moveEndPoint, adjustRoute } from "./utils/route-utils";
import { filterDescendants, type Obj } from "./core/obj";
import { getAllConnectorsTo, getAllDescendant } from "./utils/shape-utils";
import { visitTextNodes } from "./utils/text-utils";
import { Transaction } from "./core/transaction";

/**
 * Macro functions (a set of mutations)
 */

/**
 * Atomic mutation to assign a path (number[][]) to shape's field and
 * returns true if changed
 */
export function assignPath(
  tx: Transaction,
  obj: Obj,
  field: string,
  value: number[][]
): boolean {
  const old = (obj as any)[field];
  const val = value;
  if (!geometry.equalsPath(old, val, 0.1)) {
    tx.assign(obj, field, val);
    return true;
  }
  return false;
}

/**
 * A macro to add a child and change the child's parent
 */
export function changeParent(tx: Transaction, obj: Obj, parent: Obj): boolean {
  let changed = false;
  if (parent) {
    if (obj.parent) {
      changed = tx.removeChild(obj.parent, obj) || changed;
    }
    changed = tx.insertChild(parent, obj) || changed;
  }
  return changed;
}

// ---------------------------------------------------------------------------
//                             MACRO FOR PAGES
// ---------------------------------------------------------------------------

/**
 * A macro to add a page to doc
 */
export function addPage(tx: Transaction, doc: Doc, page: Page): boolean {
  let changed = false;
  changed = tx.appendObj(page) || changed;
  changed = changeParent(tx, page, doc) || changed;
  return changed;
}

/**
 * A macro to remove a page from doc
 */
export function removePage(tx: Transaction, page: Page): boolean {
  let changed = false;
  if (page && page.parent) {
    changed = tx.removeChild(page.parent, page) || changed;
    changed = tx.deleteObj(page) || changed;
  }
  return changed;
}

/**
 * A macro to reorder a page in doc
 */
export function reorderPage(
  tx: Transaction,
  page: Page,
  position: number
): boolean {
  let changed = false;
  if (
    page &&
    page.parent &&
    position >= 0 &&
    position < page.parent.children.length
  ) {
    changed = tx.reorderChild(page.parent, page, position);
  }
  return changed;
}

// ---------------------------------------------------------------------------
//                         MACRO FOR GENERAL SHAPE
// ---------------------------------------------------------------------------

/**
 * A macro to add a shape to a parent
 */
export function addShape(
  tx: Transaction,
  shape: Shape,
  parent: Shape
): boolean {
  let changed = false;
  changed = tx.appendObj(shape) || changed;
  changed = changeParent(tx, shape, parent) || changed;
  return changed;
}

/**
 * A macro to set left
 */
export function setLeft(tx: Transaction, shape: Shape, left: number): boolean {
  let changed = false;
  const dx = left - shape.left;
  changed = tx.assign(shape, "left", left) || changed;
  if (shape instanceof Line) {
    const path = shape.path.map((p) => [p[0] + dx, p[1]]);
    changed = tx.assign(shape, "path", path) || changed;
  }
  return changed;
}

/**
 * A macro to set right
 */
export function setRight(
  tx: Transaction,
  shape: Shape,
  right: number
): boolean {
  return tx.assign(shape, "left", right - shape.width);
}

/**
 * A macro to set left and right
 */
export function setLeftRight(
  tx: Transaction,
  shape: Shape,
  left: number,
  right: number
): boolean {
  let changed = false;
  changed = tx.assign(shape, "left", left) || changed;
  changed = tx.assign(shape, "width", right - left) || changed;
  return changed;
}

/**
 * A macro to set top
 */
export function setTop(tx: Transaction, shape: Shape, top: number): boolean {
  let changed = false;
  const dy = top - shape.top;
  changed = tx.assign(shape, "top", top) || changed;
  if (shape instanceof Line) {
    const path = shape.path.map((p) => [p[0], p[1] + dy]);
    changed = tx.assign(shape, "path", path) || changed;
  }
  return changed;
}

/**
 * A macro to set bottom
 */
export function setBottom(
  tx: Transaction,
  shape: Shape,
  bottom: number
): boolean {
  return tx.assign(shape, "top", bottom - shape.height);
}

/**
 * A macro to set top
 */
export function setTopBottom(
  tx: Transaction,
  shape: Shape,
  top: number,
  bottom: number
): boolean {
  let changed = false;
  changed = tx.assign(shape, "top", top) || changed;
  changed = tx.assign(shape, "height", bottom - top) || changed;
  return changed;
}

/**
 * A macro to set width
 */
export function setWidth(
  tx: Transaction,
  shape: Shape,
  width: number
): boolean {
  let changed = false;
  changed = tx.assign(shape, "width", width) || changed;
  return changed;
}

/**
 * A macro to set height
 */
export function setHeight(
  tx: Transaction,
  shape: Shape,
  height: number
): boolean {
  let changed = false;
  changed = tx.assign(shape, "height", height) || changed;
  return changed;
}

/**
 * A macro to set line's path (including left, top, width, height)
 */
export function setLinePath(
  tx: Transaction,
  line: Line,
  path: number[][]
): boolean {
  let changed = false;
  const rect = geometry.boundingRect(path);
  changed = assignPath(tx, line, "path", path) || changed;
  changed = tx.assign(line, "left", rect[0][0]) || changed;
  changed = tx.assign(line, "top", rect[0][1]) || changed;
  changed = tx.assign(line, "width", geometry.width(rect)) || changed;
  changed = tx.assign(line, "height", geometry.height(rect)) || changed;
  return changed;
}

/**
 * A macro to resize a shape (width, height, path)
 */
export function resizeShape(
  tx: Transaction,
  shape: Shape,
  width: number,
  height: number
): boolean {
  let changed = false;
  changed = tx.assign(shape, "width", width) || changed;
  changed = tx.assign(shape, "height", height) || changed;
  const rect = shape.getBoundingRect();
  const rect2 = [rect[0], [rect[0][0] + width, rect[0][1] + height]];
  if (shape instanceof Line) {
    const ps = geometry.projectPoints(shape.path, rect, rect2);
    changed = assignPath(tx, shape, "path", ps) || changed;
  }
  return changed;
}

/**
 * A macro to move a single shape
 */
export function moveShape(
  tx: Transaction,
  shape: Shape,
  dx: number,
  dy: number
): boolean {
  let changed = false;
  changed = tx.assign(shape, "left", shape.left + dx) || changed;
  changed = tx.assign(shape, "top", shape.top + dy) || changed;
  if (shape instanceof Line) {
    changed =
      assignPath(
        tx,
        shape,
        "path",
        shape.path.map((p) => [p[0] + dx, p[1] + dy])
      ) || changed;
  }
  return changed;
}

/**
 * A macro to move an anchored box
 */
export function moveAnchor(
  tx: Transaction,
  box: Box,
  angle: number,
  length: number
): boolean {
  let changed = false;
  changed = tx.assign(box, "anchorAngle", angle) || changed;
  changed = tx.assign(box, "anchorLength", length) || changed;
  return changed;
}

/**
 * A macro to change horz align
 */
export function setHorzAlign(
  tx: Transaction,
  box: Box,
  horzAlign: string
): boolean {
  let changed = false;
  let doc = structuredClone(box.text);
  visitTextNodes(doc, (docNode) => {
    if (docNode.attrs && docNode.attrs.textAlign)
      docNode.attrs.textAlign = horzAlign;
  });
  changed = tx.assign(box, "text", doc) || changed;
  changed = tx.assign(box, "horzAlign", horzAlign) || changed;
  return changed;
}

/**
 * A macro to change font size
 */
export function setFontSize(
  tx: Transaction,
  box: Box,
  fontSize: number
): boolean {
  let changed = false;
  let doc = structuredClone(box.text);
  visitTextNodes(doc, (docNode) => {
    if (Array.isArray(docNode.marks)) {
      docNode.marks.forEach((mark: any) => {
        if (mark.type === "textStyle") {
          mark.attrs.fontSize = `${fontSize}px`;
        }
      });
    }
  });
  changed = tx.assign(box, "fontSize", fontSize) || changed;
  changed = tx.assign(box, "text", doc) || changed;
  return changed;
}

/**
 * A macro to change font family
 */
export function setFontFamily(
  tx: Transaction,
  box: Box,
  fontFamily: string
): boolean {
  let changed = false;
  let doc = structuredClone(box.text);
  visitTextNodes(doc, (docNode) => {
    if (Array.isArray(docNode.marks)) {
      docNode.marks.forEach((mark: any) => {
        if (mark.type === "textStyle") {
          mark.attrs.fontFamily = fontFamily;
        }
      });
    }
  });
  changed = tx.assign(box, "fontFamily", fontFamily) || changed;
  changed = tx.assign(box, "text", doc) || changed;
  return changed;
}

/**
 * A macro to change font color
 */
export function setFontColor(
  tx: Transaction,
  box: Box,
  fontColor: string
): boolean {
  let changed = false;
  let doc = structuredClone(box.text);
  visitTextNodes(doc, (docNode) => {
    if (Array.isArray(docNode.marks)) {
      docNode.marks.forEach((mark: any) => {
        if (mark.type === "textStyle") {
          mark.attrs.color = fontColor;
        }
      });
    }
  });
  changed = tx.assign(box, "fontColor", fontColor) || changed;
  changed = tx.assign(box, "text", doc) || changed;
  return changed;
}

// ---------------------------------------------------------------------------
//                         MACRO FOR CONNECTOR SHAPE
// ---------------------------------------------------------------------------

/**
 * A macro to move an connector's end point
 */
export function moveConnectorEndPoint(
  tx: Transaction,
  connector: Connector,
  isHead: boolean,
  point: number[]
): boolean {
  const newPath = geometry.pathCopy(connector.path);
  moveEndPoint(newPath, isHead, point);
  return assignPath(tx, connector, "path", newPath);
}

/**
 * A macro to move an connector's end
 */
export function moveConnectorEnd(
  tx: Transaction,
  connector: Connector,
  dx: number,
  dy: number,
  isHead: boolean
): boolean {
  const p = isHead
    ? connector.path[connector.path.length - 1]
    : connector.path[0];
  return moveConnectorEndPoint(tx, connector, isHead, geometry.move(p, dx, dy));
}

/**
 * A macro to adjust routing path
 */
export function adjustConnectorRoute(
  tx: Transaction,
  connector: Connector
): boolean {
  let changed = false;
  const newPath = adjustRoute(connector);
  changed = setLinePath(tx, connector, newPath) || changed;
  return changed;
}

// ---------------------------------------------------------------------------
//                        GENERAL MACRO FOR SHAPES
// ---------------------------------------------------------------------------

/**
 * A macro to move shapes
 */
export function moveMultipleShapes(
  tx: Transaction,
  page: Page,
  shapes: Shape[],
  dx: number,
  dy: number,
  container: Shape | null = null
): boolean {
  let changed = false;

  // filter all descendants of one of moving shapes
  let filtered = filterDescendants(shapes) as Shape[];

  // move all children and descendants
  let targets = getAllDescendant(filtered) as Shape[];
  targets.forEach((s) => {
    changed = moveShape(tx, s as Shape, dx, dy) || changed;
  });

  // move ends of edges which is not in targets
  let edges = getAllConnectorsTo(page, targets).filter(
    (s) => !targets.includes(s)
  );
  edges.forEach((s) => {
    if (s instanceof Connector) {
      if (
        targets.includes(s.tail as Shape) &&
        targets.includes(s.head as Shape)
      ) {
        changed = moveShape(tx, s, dx, dy) || changed;
      } else if (
        targets.includes(s.tail as Shape) &&
        !targets.includes(s.head as Shape)
      ) {
        changed = moveConnectorEnd(tx, s, dx, dy, false) || changed;
      } else if (
        targets.includes(s.head as Shape) &&
        !targets.includes(s.tail as Shape)
      ) {
        changed = moveConnectorEnd(tx, s, dx, dy, true) || changed;
      }
    }
  });

  // move into container
  filtered.forEach((s) => {
    if (container && s.parent !== container && !(s as Box).anchored) {
      changed = changeParent(tx, s, container) || changed;
    }
  });

  return changed;
}

/**
 * A macro to delete a shape
 */
export function deleteShape(
  tx: Transaction,
  page: Page,
  shape: Shape
): boolean {
  let changed = false;
  // set null to all edges connected to the shape
  const edges = getAllConnectorsTo(page, [shape]) as Connector[];
  for (let edge of edges) {
    if (edge.head === shape)
      changed = tx.assignRef(edge, "head", null) || changed;
    if (edge.tail === shape)
      changed = tx.assignRef(edge, "tail", null) || changed;
  }
  // delete the shape from store
  if (shape.parent) {
    changed = tx.removeChild(shape.parent, shape) || changed;
  }
  changed = tx.deleteObj(shape) || changed;
  return changed;
}

/**
 * A macro to delete shapes
 */
export function deleteMultipleShapes(
  tx: Transaction,
  page: Page,
  shapes: Shape[]
): boolean {
  let changed = false;
  shapes.forEach((s) => {
    changed = deleteShape(tx, page, s) || changed;
  });
  return changed;
}

/**
 * A macro to bring the shape to the front
 */
export function bringToFront(tx: Transaction, shape: Shape): boolean {
  let changed = false;
  if (shape.parent) {
    const len = shape.parent.children.length;
    changed = tx.reorderChild(shape.parent, shape, len - 1) || changed;
  }
  return changed;
}

/**
 * A macro to send the shape to the back
 */
export function sendToBack(tx: Transaction, shape: Shape): boolean {
  let changed = false;
  if (shape.parent) {
    changed = tx.reorderChild(shape.parent, shape, 0) || changed;
  }
  return changed;
}

/**
 * A macro to bring the shape forward
 */
export function bringForward(tx: Transaction, shape: Shape): boolean {
  let changed = false;
  if (shape.parent) {
    const len = shape.parent.children.length;
    const pos = shape.parent.children.indexOf(shape);
    if (pos < len - 1) {
      tx.reorderChild(shape.parent, shape, pos + 1);
    }
  }
  return changed;
}

/**
 * A macro to send the shape backward
 */
export function sendBackward(tx: Transaction, shape: Shape): boolean {
  let changed = false;
  if (shape.parent) {
    const pos = shape.parent.children.indexOf(shape);
    if (pos > 0) {
      tx.reorderChild(shape.parent, shape, pos - 1);
    }
  }
  return changed;
}

// ---------------------------------------------------------------------------
//                          MACRO FOR CONSTRAINTS
// ---------------------------------------------------------------------------

/**
 * A macro to resolve a shape's constraints
 */
export function resolveConstraints(
  tx: Transaction,
  page: Page,
  shape: Shape,
  canvas: Canvas
): boolean {
  let changed = false;
  shape.constraints.forEach((c) => {
    try {
      const fn = constraintManager.get(c.id);
      changed = fn(tx, page, shape, canvas, c) || changed;
    } catch (err) {
      console.log(err);
    }
  });
  return changed;
}

/**
 * A macro to resolve all constraints
 */
export function resolveAllConstraints(
  tx: Transaction,
  page: Page,
  canvas: Canvas,
  maxIteration: number = 3
): boolean {
  let changed = false;
  for (let i = 0; i < maxIteration; i++) {
    page.traverse((s) => {
      changed = resolveConstraints(tx, page, s as Shape, canvas) || changed;
    });
    if (!changed) return false;
    changed = false;
  }
  console.warn(`Constraints are not resolved within ${maxIteration} times`);
  return true;
}
