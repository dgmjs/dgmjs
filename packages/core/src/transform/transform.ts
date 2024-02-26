import { EventEmitter } from "events";
import {
  Mutation,
  InsertMutation,
  AssignMutation,
  InsertToArrayMutation,
  RemoveFromArrayMutation,
  DeleteMutation,
  Transaction,
  AssignRefMutation,
  ReorderInArrayMutation,
} from "./mutations";
import { Store } from "../core/store";
import { Stack } from "../std/collections";
import {
  constraintManager,
  Box,
  Line,
  Shape,
  RouteType,
  Document,
  Connector,
  LineType,
} from "../shapes";
import { Canvas } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { CONNECTION_POINT_APOTHEM } from "../graphics/const";
import { convertDocToText, convertTextToDoc } from "../utils/text-utils";
import {
  moveEndPoint,
  adjustObliqueRoute,
  adjustRectilinearRoute,
} from "../utils/route-utils";
import type { Obj } from "../core/obj";
import { getAllConnectorsTo, getAllDescendant } from "../utils/shape-utils";

// Maximum size of undo/redo stack
const MAX_STACK_SIZE = 1000;

/**
 * Transform shape store.
 *
 * 1. All changes should be applied via transform.
 * 2. All mutation methods return true if there is any changes.
 *
 * Triggering events:
 * - 'mutate': (m: Mutation)
 * - 'transaction': (tx: Transaction)
 */
export class Transform extends EventEmitter {
  /**
   * Shape store
   */
  store: Store;

  /**
   * Working transaction
   */
  tx: Transaction | null;

  /**
   * Undo history.
   */
  undoHistory: Stack<Transaction>;

  /**
   * Redo history.
   */
  redoHistory: Stack<Transaction>;

  /**
   * constructor
   */
  constructor(store: Store) {
    super();
    this.store = store;
    this.tx = null;
    this.undoHistory = new Stack(MAX_STACK_SIZE);
    this.redoHistory = new Stack(MAX_STACK_SIZE);
  }

  /**
   * Apply a mutation
   */
  applyMutation(m: Mutation) {
    m.apply(this.store);
    this.emit("mutate", m);
  }

  /**
   * Unapply a mutation
   */
  unapplyMutation(m: Mutation) {
    m.unapply(this.store);
    this.emit("mutate", m);
  }

  /**
   * Start a transaction
   */
  startTransaction(name: string) {
    this.tx = new Transaction(name);
  }

  /**
   * End a transaction
   */
  endTransaction() {
    if (!this.tx) throw new Error("No transaction started");
    if (this.tx.mutations.length > 0) {
      this.emit("transaction", this.tx);
      this.undoHistory.push(this.tx);
      this.redoHistory.clear();
    }
    this.tx = null;
  }

  /**
   * Whether undo is available
   */
  canUndo() {
    return this.undoHistory.size() > 0;
  }

  /**
   * Whether redo is available
   */
  canRedo() {
    return this.redoHistory.size() > 0;
  }

  /**
   * Undo
   */
  undo() {
    if (this.undoHistory.size() > 0) {
      const tx = this.undoHistory.pop();
      if (tx) {
        for (let i = tx.mutations.length - 1; i >= 0; i--) {
          const mut = tx.mutations[i];
          this.unapplyMutation(mut);
        }
        this.emit("transaction", tx);
        this.redoHistory.push(tx);
      }
    }
  }

  /**
   * Redo
   */
  redo() {
    if (this.redoHistory.size() > 0) {
      const tx = this.redoHistory.pop();
      if (tx) {
        for (let i = 0; i < tx.mutations.length; i++) {
          const mut = tx.mutations[i];
          this.applyMutation(mut);
        }
        this.emit("transaction", tx);
        this.undoHistory.push(tx);
      }
    }
  }

  // ---------------------------------------------------------------------------
  //                     MUTATIONS FOR BASE OBJECT
  // ---------------------------------------------------------------------------

  /**
   * Atomic mutation to insert a shape and returns true if changed
   */
  atomicInsert(obj: Obj): boolean {
    if (!this.tx) throw new Error("No transaction started");
    if (!this.store.getById(obj.id)) {
      const mut = new InsertMutation(obj);
      this.applyMutation(mut);
      this.tx.push(mut);
      return true;
    }
    return false;
  }

  /**
   * Atomic mutation to delete a shape and returns true if changed
   */
  atomicDelete(obj: Obj): boolean {
    if (!this.tx) throw new Error("No transaction started");
    if (this.store.getById(obj.id)) {
      const mut = new DeleteMutation(obj);
      this.applyMutation(mut);
      this.tx.push(mut);
      return true;
    }
    return false;
  }

  /**
   * Atomic mutation to assign a value to shape's field and returns true
   * if changed
   */
  atomicAssign(obj: Obj, field: string, value: any): boolean {
    if (!this.tx) throw new Error("No transaction started");
    const old = JSON.stringify((obj as any)[field]);
    const val = JSON.stringify(value);
    if (old !== val) {
      const existingMut = this.tx.mutations.find(
        (m) => m instanceof AssignMutation && m.obj === obj && m.field === field
      );
      if (existingMut) {
        (existingMut as AssignMutation).newValue = structuredClone(value);
        this.applyMutation(existingMut);
      } else {
        const mut = new AssignMutation(obj, field, structuredClone(value));
        this.applyMutation(mut);
        this.tx.push(mut);
      }
      return true;
    }
    return false;
  }

  /**
   * Atomic mutation to assign a ref to shape's field and returns true
   * if changed
   */
  atomicAssignRef(obj: Obj, field: string, value: Obj | null): boolean {
    if (!this.tx) throw new Error("No transaction started");
    const old = (obj as any)[field];
    if (old !== value) {
      const existingMut = this.tx.mutations.find(
        (m) => m instanceof AssignMutation && m.obj === obj && m.field === field
      );
      if (existingMut) {
        (existingMut as AssignMutation).newValue = value;
        this.applyMutation(existingMut);
      } else {
        const mut = new AssignRefMutation(obj, field, value);
        this.applyMutation(mut);
        this.tx.push(mut);
      }
      return true;
    }
    return false;
  }

  /**
   * Atomic mutation to assign a path (number[][]) to shape's field and
   * returns true if changed
   */
  atomicAssignPath(obj: Obj, field: string, value: number[][]): boolean {
    if (!this.tx) throw new Error("No transaction started");
    const old = (obj as any)[field];
    const val = value;
    if (!geometry.equalsPath(old, val, 0.1)) {
      const existingMut = this.tx.mutations.find(
        (m) => m instanceof AssignMutation && m.obj === obj && m.field === field
      );
      if (existingMut) {
        (existingMut as AssignMutation).newValue = structuredClone(value);
        this.applyMutation(existingMut);
      } else {
        const mut = new AssignMutation(obj, field, structuredClone(value));
        this.applyMutation(mut);
        this.tx.push(mut);
      }
      return true;
    }
    return false;
  }

  /**
   * Atomic mutation to insert a value to shape's array field and returns
   * true if changed
   */
  atomicInsertToArray(obj: Obj, field: string, value: any): boolean {
    if (!this.tx) throw new Error("No transaction started");
    const array = (obj as any)[field];
    if (!array.includes(value)) {
      const mut = new InsertToArrayMutation(obj, field, value);
      this.applyMutation(mut);
      this.tx.push(mut);
      return true;
    }
    return false;
  }

  /**
   * Atomic mutation to remove a value from shape's array field and returns
   * true if changed
   */
  atomicRemoveFromArray(obj: Obj, field: string, value: any): boolean {
    if (!this.tx) throw new Error("No transaction started");
    const array = (obj as any)[field];
    if (array.includes(value)) {
      const mut = new RemoveFromArrayMutation(obj, field, value);
      this.applyMutation(mut);
      this.tx.push(mut);
      return true;
    }
    return false;
  }

  /**
   * Atomic mutation to reorder a value from shape's array field and returns
   * true if changed
   */
  atomicReorderInArray(
    obj: Obj,
    field: string,
    value: any,
    position: number
  ): boolean {
    if (!this.tx) throw new Error("No transaction started");
    const array = (obj as any)[field];
    const oldIndex = array.indexOf(value);
    if (oldIndex >= 0) {
      const mut = new ReorderInArrayMutation(obj, field, value, position);
      this.applyMutation(mut);
      this.tx.push(mut);
      return true;
    }
    return false;
  }

  /**
   * A set of mutations to add a child and change the child's parent
   */
  changeParent(obj: Obj, parent: Obj): boolean {
    let changed = false;
    if (parent) {
      if (obj.parent) {
        changed =
          this.atomicRemoveFromArray(obj.parent, "children", obj) || changed;
      }
      changed = this.atomicInsertToArray(parent, "children", obj) || changed;
      changed = this.atomicAssignRef(obj, "parent", parent) || changed;
    }
    return changed;
  }

  // ---------------------------------------------------------------------------
  //                     MUTATIONS FOR GENERAL SHAPE
  // ---------------------------------------------------------------------------

  /**
   * Mutation to add a shape to diagram
   */
  addShapeToDoc(diagram: Document, shape: Shape): boolean {
    let changed = false;
    changed = this.atomicInsert(shape) || changed;
    changed =
      this.atomicInsertToArray(diagram as Document, "children", shape) ||
      changed;
    changed = this.atomicAssignRef(shape, "parent", diagram) || changed;
    return changed;
  }

  /**
   * Mutation to set left
   */
  setLeft(shape: Shape, left: number): boolean {
    let changed = false;
    const dx = left - shape.left;
    changed = this.atomicAssign(shape, "left", left) || changed;
    if (shape instanceof Line) {
      const path = shape.path.map((p) => [p[0] + dx, p[1]]);
      changed = this.atomicAssign(shape, "path", path) || changed;
    }
    return changed;
  }

  /**
   * Mutation to set right
   */
  setRight(shape: Shape, right: number): boolean {
    return this.atomicAssign(shape, "left", right - shape.width);
  }

  /**
   * Mutation to set left and right
   */
  setLeftRight(shape: Shape, left: number, right: number): boolean {
    let changed = false;
    changed = this.atomicAssign(shape, "left", left) || changed;
    changed = this.atomicAssign(shape, "width", right - left) || changed;
    return changed;
  }

  /**
   * Mutation to set top
   */
  setTop(shape: Shape, top: number): boolean {
    let changed = false;
    const dy = top - shape.top;
    changed = this.atomicAssign(shape, "top", top) || changed;
    if (shape instanceof Line) {
      const path = shape.path.map((p) => [p[0], p[1] + dy]);
      changed = this.atomicAssign(shape, "path", path) || changed;
    }
    return changed;
  }

  /**
   * Mutation to set bottom
   */
  setBottom(shape: Shape, bottom: number): boolean {
    return this.atomicAssign(shape, "top", bottom - shape.height);
  }

  /**
   * Mutation to set top
   */
  setTopBottom(shape: Shape, top: number, bottom: number): boolean {
    let changed = false;
    changed = this.atomicAssign(shape, "top", top) || changed;
    changed = this.atomicAssign(shape, "height", bottom - top) || changed;
    return changed;
  }

  /**
   * Mutation to set width
   */
  setWidth(shape: Shape, width: number): boolean {
    let changed = false;
    changed = this.atomicAssign(shape, "width", width) || changed;
    return changed;
  }

  /**
   * Mutation to set height
   */
  setHeight(shape: Shape, height: number): boolean {
    let changed = false;
    changed = this.atomicAssign(shape, "height", height) || changed;
    return changed;
  }

  /**
   * Mutation to set shape's path (including left, top, width, height)
   */
  setPath(shape: Shape, path: number[][]): boolean {
    let changed = false;
    const rect = geometry.boundingRect(path);
    changed = this.atomicAssignPath(shape, "path", path) || changed;
    changed = this.atomicAssign(shape, "left", rect[0][0]) || changed;
    changed = this.atomicAssign(shape, "top", rect[0][1]) || changed;
    changed =
      this.atomicAssign(shape, "width", geometry.width(rect)) || changed;
    changed =
      this.atomicAssign(shape, "height", geometry.height(rect)) || changed;
    return changed;
  }

  /**
   * Mutation to resize a shape (width, height, path)
   */
  resize(shape: Shape, width: number, height: number): boolean {
    const rect = shape.getBoundingRect();
    let changed = false;
    changed = this.atomicAssign(shape, "width", width) || changed;
    changed = this.atomicAssign(shape, "height", height) || changed;
    const rect2 = [rect[0], [rect[0][0] + width, rect[0][1] + height]];
    if (shape instanceof Line) {
      const ps = geometry.projectPoints(shape.path, rect, rect2);
      changed = this.atomicAssignPath(shape, "path", ps) || changed;
    }
    return changed;
  }

  /**
   * Mutations to move a single shape
   */
  move(shape: Shape, dx: number, dy: number): boolean {
    let changed = false;
    changed = this.atomicAssign(shape, "left", shape.left + dx) || changed;
    changed = this.atomicAssign(shape, "top", shape.top + dy) || changed;
    if (shape instanceof Line) {
      changed =
        this.atomicAssignPath(
          shape,
          "path",
          shape.path.map((p) => [p[0] + dx, p[1] + dy])
        ) || changed;
    }
    return changed;
  }

  /**
   * A set of mutations to move an anchored node
   */
  moveAnchor(node: Box, angle: number, length: number): boolean {
    let changed = false;
    changed = this.atomicAssign(node, "anchorAngle", angle) || changed;
    changed = this.atomicAssign(node, "anchorLength", length) || changed;
    return changed;
  }

  /**
   * A set of mutations to change rich text or not
   */
  setRichText(node: Box, richText: boolean): boolean {
    let changed = false;
    if (richText) {
      let doc = structuredClone(
        richText && typeof node.text === "string"
          ? convertTextToDoc(node.text)
          : node.text
      );
      changed = this.atomicAssign(node, "text", doc) || changed;
    } else {
      let str =
        !richText && typeof node.text !== "string"
          ? convertDocToText(node.text)
          : node.text;
      changed = this.atomicAssign(node, "text", str) || changed;
    }
    changed = this.atomicAssign(node, "richText", richText) || changed;
    return changed;
  }

  /**
   * A set of mutations to change horz align
   */
  setHorzAlign(node: Box, horzAlign: string): boolean {
    let changed = false;
    let doc = structuredClone(
      node.richText && typeof node.text === "string"
        ? convertTextToDoc(node.text)
        : node.text
    );
    node.visitNodes(doc, (docNode) => {
      if (docNode.attrs && docNode.attrs.textAlign)
        docNode.attrs.textAlign = horzAlign;
    });
    changed = this.atomicAssign(node, "text", doc) || changed;
    changed = this.atomicAssign(node, "horzAlign", horzAlign) || changed;
    return changed;
  }

  /**
   * A set of mutations to change font size
   */
  setFontSize(node: Box, fontSize: number): boolean {
    let changed = false;
    let doc = structuredClone(
      node.richText && typeof node.text === "string"
        ? convertTextToDoc(node.text)
        : node.text
    );
    node.visitNodes(doc, (docNode) => {
      if (Array.isArray(docNode.marks)) {
        console.log(docNode);
        docNode.marks.forEach((mark: any) => {
          if (mark.type === "textStyle") {
            mark.attrs.fontSize = `${fontSize}px`;
          }
        });
      }
    });
    changed = this.atomicAssign(node, "fontSize", fontSize) || changed;
    changed = this.atomicAssign(node, "text", doc) || changed;
    return changed;
  }

  /**
   * A set of mutation to change font family
   */
  setFontFamily(node: Box, fontFamily: string): boolean {
    let changed = false;
    let doc = structuredClone(
      node.richText && typeof node.text === "string"
        ? convertTextToDoc(node.text)
        : node.text
    );
    node.visitNodes(doc, (docNode) => {
      if (Array.isArray(docNode.marks)) {
        console.log(docNode);
        docNode.marks.forEach((mark: any) => {
          if (mark.type === "textStyle") {
            mark.attrs.fontFamily = fontFamily;
          }
        });
      }
    });
    changed = this.atomicAssign(node, "fontFamily", fontFamily) || changed;
    changed = this.atomicAssign(node, "text", doc) || changed;
    return changed;
  }

  /**
   * A set of mutation to change font color
   */
  setFontColor(node: Box, fontColor: string): boolean {
    let changed = false;
    let doc = structuredClone(
      node.richText && typeof node.text === "string"
        ? convertTextToDoc(node.text)
        : node.text
    );
    node.visitNodes(doc, (docNode) => {
      if (Array.isArray(docNode.marks)) {
        console.log(docNode);
        docNode.marks.forEach((mark: any) => {
          if (mark.type === "textStyle") {
            mark.attrs.color = fontColor;
          }
        });
      }
    });
    changed = this.atomicAssign(node, "fontColor", fontColor) || changed;
    changed = this.atomicAssign(node, "text", doc) || changed;
    return changed;
  }

  // ---------------------------------------------------------------------------
  //                       MUTATIONS FOR CONNECTOR SHAPE
  // ---------------------------------------------------------------------------

  /**
   * A set of mutations to move an connector's end point
   */
  moveConnectorEndPoint(
    connector: Connector,
    isHead: boolean,
    point: number[]
  ): boolean {
    const newPath = geometry.pathCopy(connector.path);
    moveEndPoint(newPath, connector.routeType, isHead, point);
    return this.atomicAssignPath(connector, "path", newPath);
  }

  /**
   * A set of mutations to move an connector's end
   */
  moveConnectorEnd(
    connector: Connector,
    dx: number,
    dy: number,
    isHead: boolean
  ): boolean {
    const p = isHead
      ? connector.path[connector.path.length - 1]
      : connector.path[0];
    return this.moveConnectorEndPoint(
      connector,
      isHead,
      geometry.move(p, dx, dy)
    );
  }

  /**
   * Mutations to adjust routing path
   */
  adjustRoute(connector: Connector): boolean {
    let changed = false;
    switch (connector.routeType) {
      case RouteType.RECTILINEAR: {
        const newPath = adjustRectilinearRoute(
          connector.path,
          connector.head,
          connector.headCP,
          connector.tail,
          connector.tailCP
        );
        changed = this.setPath(connector, newPath) || changed;
        break;
      }
      case RouteType.OBLIQUE: {
        const newPath = adjustObliqueRoute(
          connector.path,
          connector.head,
          connector.headCP,
          connector.tail,
          connector.tailCP
        );
        changed = this.setPath(connector, newPath) || changed;
        break;
      }
    }
    return changed;
  }

  /**
   * Mutation for change connector's route type
   */
  changeRouteType(connector: Connector, routeType: string): boolean {
    if (connector.routeType !== routeType) {
      let changed = false;
      let path = connector.path;
      let lineType = connector.lineType;
      if (connector.routeType === RouteType.RECTILINEAR) {
        if (routeType === RouteType.OBLIQUE) {
          path = [path[0], path[path.length - 1]];
        }
      } else {
        if (routeType === RouteType.RECTILINEAR) {
          const box = geometry.boundingRect(connector.path);
          const w = geometry.width(box);
          const h = geometry.height(box);

          // line is horizontal if width is larger then height
          // or edge's tail point on node's left-side or right-side
          let horz = w > h;
          if (connector.tail instanceof Box) {
            const outpath = geometry.rectToPolygon(
              connector.tail.getBoundingRect()
            );
            const seg = geometry.getNearSegment(
              connector.path[0],
              outpath,
              CONNECTION_POINT_APOTHEM * 2
            );
            horz = seg === 1 || seg === 3;
          }

          // change path based on horz or vert
          path = geometry.generatePath(path[0], path[path.length - 1], true);
          lineType = LineType.STRAIGHT;
        }
      }
      changed = this.atomicAssign(connector, "routeType", routeType) || changed;
      changed = this.atomicAssign(connector, "lineType", lineType) || changed;
      changed = this.setPath(connector, path) || changed;
      return changed;
    }
    return false;
  }

  // ---------------------------------------------------------------------------
  //                      GENERAL MUTATIONS FOR SHAPES
  // ---------------------------------------------------------------------------

  /**
   * A set of mutations to move shapes
   */
  moveShapes(
    diagram: Document,
    shapes: Shape[],
    dx: number,
    dy: number,
    container: Shape | null = null
  ): boolean {
    let changed = false;

    // filter all descendants of one of moving shapes
    let filteredShapes = [];
    for (let shape of shapes) {
      if (!shapes.some((s) => s.isDescendant(shape)))
        filteredShapes.push(shape);
    }

    // move all children and descendants
    let targets = getAllDescendant(filteredShapes) as Shape[];
    targets.forEach((s) => {
      changed = this.move(s as Shape, dx, dy) || changed;
    });

    // move ends of edges which is not in targets
    let edges = getAllConnectorsTo(diagram, targets).filter(
      (s) => !targets.includes(s)
    );
    edges.forEach((s) => {
      if (s instanceof Connector) {
        if (
          targets.includes(s.tail as Shape) &&
          targets.includes(s.head as Shape)
        ) {
          changed = this.move(s, dx, dy) || changed;
        } else if (
          targets.includes(s.tail as Shape) &&
          !targets.includes(s.head as Shape)
        ) {
          changed = this.moveConnectorEnd(s, dx, dy, false) || changed;
        } else if (
          targets.includes(s.head as Shape) &&
          !targets.includes(s.tail as Shape)
        ) {
          changed = this.moveConnectorEnd(s, dx, dy, true) || changed;
        }
      }
    });

    // move into container
    filteredShapes.forEach((s) => {
      if (container && s.parent !== container && !(s as Box).anchored) {
        changed = this.changeParent(s, container) || changed;
      }
    });

    return changed;
  }

  /**
   * A set of mutations to delete a shape
   */
  deleteSingleShape(diagram: Document, shape: Shape): boolean {
    let changed = false;
    if (this.store.has(shape)) {
      // set null to all edges connected to the shape
      const edges = getAllConnectorsTo(diagram, [shape]) as Connector[];
      for (let edge of edges) {
        if (edge.head === shape)
          changed = this.atomicAssignRef(edge, "head", null) || changed;
        if (edge.tail === shape)
          changed = this.atomicAssignRef(edge, "tail", null) || changed;
      }
      // delete the shape from store
      if (shape.parent) {
        changed =
          this.atomicRemoveFromArray(shape.parent, "children", shape) ||
          changed;
      }
      changed = this.atomicAssignRef(shape, "parent", null) || changed;
      changed = this.atomicDelete(shape) || changed;
    }
    return changed;
  }

  /**
   * A set of mutations to delete shapes
   */
  deleteShapes(diagram: Document, shapes: Shape[]): boolean {
    let changed = false;
    shapes.forEach((s) => {
      changed = this.deleteSingleShape(diagram, s) || changed;
    });
    return changed;
  }

  /**
   * Bring the shape to the front
   */
  bringToFront(shape: Shape): boolean {
    let changed = false;
    if (shape.parent) {
      const len = shape.parent.children.length;
      changed =
        this.atomicReorderInArray(shape.parent, "children", shape, len - 1) ||
        changed;
    }
    return changed;
  }

  /**
   * Send the shape to the back
   */
  sendToBack(shape: Shape): boolean {
    let changed = false;
    if (shape.parent) {
      changed =
        this.atomicReorderInArray(shape.parent, "children", shape, 0) ||
        changed;
    }
    return changed;
  }

  /**
   * Bring the shape forward
   */
  bringForward(shape: Shape): boolean {
    let changed = false;
    if (shape.parent) {
      const len = shape.parent.children.length;
      const pos = shape.parent.children.indexOf(shape);
      if (pos < len - 1) {
        this.atomicReorderInArray(shape.parent, "children", shape, pos + 1);
      }
    }
    return changed;
  }

  /**
   * Send the shape backward
   */
  sendBackward(shape: Shape): boolean {
    let changed = false;
    if (shape.parent) {
      const pos = shape.parent.children.indexOf(shape);
      if (pos > 0) {
        this.atomicReorderInArray(shape.parent, "children", shape, pos - 1);
      }
    }
    return changed;
  }

  // ---------------------------------------------------------------------------
  //                       MUTATIONS FOR CONSTRAINTS
  // ---------------------------------------------------------------------------

  /**
   * A set of mutations to resolve a shape's constraints
   */
  resolveSingleConstraints(
    diagram: Document,
    shape: Shape,
    canvas: Canvas
  ): boolean {
    let changed = false;
    shape.constraints.forEach((c) => {
      try {
        const fn = constraintManager.get(c.id);
        changed = fn(diagram, shape, canvas, this, c) || changed;
      } catch (err) {
        console.log(err);
      }
    });
    return changed;
  }

  /**
   * A set of mutations to resolve all constraints
   */
  resolveAllConstraints(diagram: Document, canvas: Canvas): boolean {
    let changed = false;
    for (let i = 0; i < 10; i++) {
      diagram.traverse((s) => {
        changed =
          this.resolveSingleConstraints(diagram, s as Shape, canvas) || changed;
      });
      if (!changed) return false;
      changed = false;
    }
    console.warn(`Constraints are not resolved within 10 times`);
    return true;
  }
}
