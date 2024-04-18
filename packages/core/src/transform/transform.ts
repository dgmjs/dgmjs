import {
  Mutation,
  CreateMutation,
  AssignMutation,
  InsertChildMutation,
  RemoveChildMutation,
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
  Connector,
  Page,
} from "../shapes";
import { Canvas } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { moveEndPoint, adjustRoute } from "../utils/route-utils";
import type { Obj } from "../core/obj";
import { getAllConnectorsTo, getAllDescendant } from "../utils/shape-utils";
import { TypedEvent } from "../std/typed-event";
import { visitTextNodes } from "../utils/text-utils";

// Maximum size of undo/redo stack
const MAX_STACK_SIZE = 1000;

/**
 * Transform shape store.
 *
 * 1. All changes should be applied via transform.
 * 2. All mutation methods return true if there is any changes.
 */
export class Transform {
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
   * Event emitter for mutation
   */
  onMutate: TypedEvent<Mutation> = new TypedEvent();

  /**
   * Event emitter for transaction
   */
  onTransaction: TypedEvent<Transaction> = new TypedEvent();

  /**
   * constructor
   */
  constructor(store: Store) {
    this.store = store;
    this.tx = null;
    this.undoHistory = new Stack(MAX_STACK_SIZE);
    this.redoHistory = new Stack(MAX_STACK_SIZE);
    this.onMutate = new TypedEvent();
    this.onTransaction = new TypedEvent();
  }

  /**
   * Apply a mutation
   */
  applyMutation(m: Mutation) {
    m.apply(this.store);
    this.onMutate.emit(m);
  }

  /**
   * Unapply a mutation
   */
  unapplyMutation(m: Mutation) {
    m.unapply(this.store);
    this.onMutate.emit(m);
  }

  /**
   * Start a transaction
   */
  startTransaction(name: string) {
    if (this.tx && this.tx.mutations.length > 0) {
      this.endTransaction();
    }
    this.tx = new Transaction(name);
  }

  /**
   * End the transaction
   */
  endTransaction() {
    if (!this.tx) throw new Error("No transaction started");
    if (this.tx.mutations.length > 0) {
      this.onTransaction.emit(this.tx);
      this.undoHistory.push(this.tx);
      this.redoHistory.clear();
    }
    this.tx = null;
  }

  /**
   * Cancel the transaction
   */
  cancelTransaction() {
    if (this.tx) {
      for (let i = this.tx.mutations.length - 1; i >= 0; i--) {
        const mut = this.tx.mutations[i];
        this.unapplyMutation(mut);
      }
      this.tx = null;
    }
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
        this.onTransaction.emit(tx);
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
        this.onTransaction.emit(tx);
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
      const mut = new CreateMutation(obj);
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
   * Atomic mutation to insert a child to parent obj and returns
   * true if changed
   */
  atomicInsertChild(parent: Obj, obj: Obj, position?: number): boolean {
    if (!this.tx) throw new Error("No transaction started");
    if (!parent.children.includes(obj)) {
      const mut = new InsertChildMutation(parent, obj, position);
      this.applyMutation(mut);
      this.tx.push(mut);
      return true;
    }
    return false;
  }

  /**
   * Atomic mutation to remove a child from a parent and returns
   * true if changed
   */
  atomicRemoveChild(parent: Obj, obj: Obj): boolean {
    if (!this.tx) throw new Error("No transaction started");
    if (parent.children.includes(obj)) {
      const mut = new RemoveChildMutation(parent, obj);
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
        changed = this.atomicRemoveChild(obj.parent, obj) || changed;
      }
      changed = this.atomicInsertChild(parent, obj) || changed;
      changed = this.atomicAssignRef(obj, "parent", parent) || changed;
    }
    return changed;
  }

  // ---------------------------------------------------------------------------
  //                         MUTATIONS FOR PAGES
  // ---------------------------------------------------------------------------

  /**
   * Mutation to add a page to doc
   */
  addPage(page: Page): boolean {
    let changed = false;
    changed = this.atomicInsert(page) || changed;
    changed = this.changeParent(page, this.store.doc!) || changed;
    return changed;
  }

  /**
   * Mutation to remove a page from doc
   */
  removePage(page: Page): boolean {
    let changed = false;
    if (page && page.parent) {
      changed = this.atomicRemoveChild(page.parent, page) || changed;
      changed = this.atomicAssignRef(page.parent, "parent", null) || changed;
      changed = this.atomicDelete(page) || changed;
    }
    return changed;
  }

  /**
   * Mutation to reorder a page in doc
   */
  reorderPage(page: Page, position: number): boolean {
    let changed = false;
    if (
      page &&
      page.parent &&
      position >= 0 &&
      position < page.parent.children.length
    ) {
      // changed = this.atomicRemoveChild(page.parent, page) || changed;
      // changed = this.atomicInsertChild(page.parent, page, position) || changed;

      changed = this.atomicReorderInArray(
        page.parent,
        "children",
        page,
        position
      );
    }
    return changed;
  }

  // ---------------------------------------------------------------------------
  //                     MUTATIONS FOR GENERAL SHAPE
  // ---------------------------------------------------------------------------

  /**
   * Mutation to add a shape to a parent
   */
  addShape(shape: Shape, parent: Shape): boolean {
    let changed = false;
    changed = this.atomicInsert(shape) || changed;
    changed = this.changeParent(shape, parent) || changed;
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
   * Mutation to set line's path (including left, top, width, height)
   */
  setPath(line: Line, path: number[][]): boolean {
    let changed = false;
    const rect = geometry.boundingRect(path);
    changed = this.atomicAssignPath(line, "path", path) || changed;
    changed = this.atomicAssign(line, "left", rect[0][0]) || changed;
    changed = this.atomicAssign(line, "top", rect[0][1]) || changed;
    changed = this.atomicAssign(line, "width", geometry.width(rect)) || changed;
    changed =
      this.atomicAssign(line, "height", geometry.height(rect)) || changed;
    return changed;
  }

  /**
   * Mutation to resize a shape (width, height, path)
   */
  resize(shape: Shape, width: number, height: number): boolean {
    let changed = false;
    changed = this.atomicAssign(shape, "width", width) || changed;
    changed = this.atomicAssign(shape, "height", height) || changed;
    const rect = shape.getBoundingRect();
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
   * A set of mutations to move an anchored box
   */
  moveAnchor(box: Box, angle: number, length: number): boolean {
    let changed = false;
    changed = this.atomicAssign(box, "anchorAngle", angle) || changed;
    changed = this.atomicAssign(box, "anchorLength", length) || changed;
    return changed;
  }

  /**
   * A set of mutations to change horz align
   */
  setHorzAlign(box: Box, horzAlign: string): boolean {
    let changed = false;
    let doc = structuredClone(box.text);
    visitTextNodes(doc, (docNode) => {
      if (docNode.attrs && docNode.attrs.textAlign)
        docNode.attrs.textAlign = horzAlign;
    });
    changed = this.atomicAssign(box, "text", doc) || changed;
    changed = this.atomicAssign(box, "horzAlign", horzAlign) || changed;
    return changed;
  }

  /**
   * A set of mutations to change font size
   */
  setFontSize(box: Box, fontSize: number): boolean {
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
    changed = this.atomicAssign(box, "fontSize", fontSize) || changed;
    changed = this.atomicAssign(box, "text", doc) || changed;
    return changed;
  }

  /**
   * A set of mutation to change font family
   */
  setFontFamily(box: Box, fontFamily: string): boolean {
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
    changed = this.atomicAssign(box, "fontFamily", fontFamily) || changed;
    changed = this.atomicAssign(box, "text", doc) || changed;
    return changed;
  }

  /**
   * A set of mutation to change font color
   */
  setFontColor(box: Box, fontColor: string): boolean {
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
    changed = this.atomicAssign(box, "fontColor", fontColor) || changed;
    changed = this.atomicAssign(box, "text", doc) || changed;
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
    moveEndPoint(newPath, isHead, point);
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
    const newPath = adjustRoute(connector);
    changed = this.setPath(connector, newPath) || changed;
    return changed;
  }

  // ---------------------------------------------------------------------------
  //                      GENERAL MUTATIONS FOR SHAPES
  // ---------------------------------------------------------------------------

  /**
   * A set of mutations to move shapes
   */
  moveShapes(
    page: Page,
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
    let edges = getAllConnectorsTo(page, targets).filter(
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
  deleteSingleShape(page: Page, shape: Shape): boolean {
    let changed = false;
    if (this.store.has(shape)) {
      // set null to all edges connected to the shape
      const edges = getAllConnectorsTo(page, [shape]) as Connector[];
      for (let edge of edges) {
        if (edge.head === shape)
          changed = this.atomicAssignRef(edge, "head", null) || changed;
        if (edge.tail === shape)
          changed = this.atomicAssignRef(edge, "tail", null) || changed;
      }
      // delete the shape from store
      if (shape.parent) {
        changed = this.atomicRemoveChild(shape.parent, shape) || changed;
      }
      changed = this.atomicAssignRef(shape, "parent", null) || changed;
      changed = this.atomicDelete(shape) || changed;
    }
    return changed;
  }

  /**
   * A set of mutations to delete shapes
   */
  deleteShapes(page: Page, shapes: Shape[]): boolean {
    let changed = false;
    shapes.forEach((s) => {
      changed = this.deleteSingleShape(page, s) || changed;
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
  resolveSingleConstraints(page: Page, shape: Shape, canvas: Canvas): boolean {
    let changed = false;
    shape.constraints.forEach((c) => {
      try {
        const fn = constraintManager.get(c.id);
        changed = fn(page, shape, canvas, this, c) || changed;
      } catch (err) {
        console.log(err);
      }
    });
    return changed;
  }

  /**
   * A set of mutations to resolve all constraints
   */
  resolveAllConstraints(
    page: Page,
    canvas: Canvas,
    maxIteration: number = 3
  ): boolean {
    let changed = false;
    for (let i = 0; i < maxIteration; i++) {
      page.traverse((s) => {
        changed =
          this.resolveSingleConstraints(page, s as Shape, canvas) || changed;
      });
      if (!changed) return false;
      changed = false;
    }
    console.warn(`Constraints are not resolved within ${maxIteration} times`);
    return true;
  }
}
