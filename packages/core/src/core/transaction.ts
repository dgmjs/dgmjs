import { Store } from "../core/store";
import type { Obj } from "../core/obj";

export const MutationType = {
  CREATE: "create",
  DELETE: "delete",
  ASSIGN: "assign",
  ASSIGN_REF: "assign-ref",
  INSERT_CHILD: "insert-child",
  REMOVE_CHILD: "remove-child",
  REORDER_CHILD: "reorder-child",
} as const;

/**
 * Mutation is an atomic modification on an object in store
 */
export class Mutation {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  apply(store: Store) {}
  unapply(store: Store) {}
  toJSON(): any {
    return null;
  }
}

/**
 * Create an object
 */
export class CreateMutation extends Mutation {
  obj: Obj;

  constructor(obj: Obj) {
    super(MutationType.CREATE);
    this.obj = obj;
  }

  apply(store: Store) {
    store.addToIndex(this.obj);
  }

  unapply(store: Store): void {
    store.removeFromIndex(this.obj);
  }

  toJSON(): any {
    return { op: this.type, obj: this.obj.toJSON(true) };
  }
}

/**
 * Delete an object
 */
export class DeleteMutation extends Mutation {
  obj: Obj;

  constructor(obj: Obj) {
    super(MutationType.DELETE);
    this.obj = obj;
  }

  apply(store: Store) {
    store.removeFromIndex(this.obj);
  }

  unapply(store: Store): void {
    store.addToIndex(this.obj);
  }

  toJSON(): any {
    return { op: this.type, obj: this.obj.toJSON(true) };
  }
}

/**
 * Assign a value to an object field
 */
export class AssignMutation extends Mutation {
  obj: Obj;
  field: string;
  newValue: any;
  oldValue: any;

  constructor(obj: Obj, field: string, value: any) {
    super(MutationType.ASSIGN);
    this.obj = obj;
    this.field = field;
    this.newValue = value;
    this.oldValue = (obj as Record<string, any>)[field];
  }

  apply(store: Store) {
    (this.obj as Record<string, any>)[this.field] = this.newValue;
  }

  unapply(store: Store): void {
    (this.obj as Record<string, any>)[this.field] = this.oldValue;
  }

  toJSON() {
    return {
      op: this.type,
      objId: this.obj.id,
      field: this.field,
      newValue: this.newValue,
      oldValue: this.oldValue,
    };
  }
}

/**
 * Assign a ref to an object field
 */
export class AssignRefMutation extends Mutation {
  obj: Obj;
  field: string;
  newValue: Obj | null;
  oldValue: Obj;

  constructor(obj: Obj, field: string, value: Obj | null) {
    super(MutationType.ASSIGN_REF);
    this.obj = obj;
    this.field = field;
    this.newValue = value;
    this.oldValue = (obj as Record<string, any>)[field];
  }

  apply(store: Store) {
    (this.obj as Record<string, any>)[this.field] = this.newValue;
  }

  unapply(store: Store): void {
    (this.obj as Record<string, any>)[this.field] = this.oldValue;
  }

  toJSON() {
    return {
      op: this.type,
      objId: this.obj.id,
      field: this.field,
      newValue: this.newValue,
      oldValue: this.oldValue,
    };
  }
}

/**
 * Insert a child
 */
export class InsertChildMutation extends Mutation {
  parent: Obj;
  obj: Obj;
  position: number;

  constructor(parent: Obj, obj: Obj, position?: number) {
    super(MutationType.INSERT_CHILD);
    this.parent = parent;
    this.obj = obj;
    if (typeof position === "number") {
      this.position = position;
    } else {
      this.position = this.parent.children.length;
    }
  }

  apply(store: Store) {
    if (Array.isArray(this.parent.children)) {
      this.parent.children.splice(this.position, 0, this.obj);
    }
  }

  unapply(store: Store): void {
    if (Array.isArray(this.parent.children)) {
      this.parent.children.splice(this.position, 1);
    }
  }

  toJSON() {
    return {
      op: this.type,
      parentId: this.parent.id,
      obj: this.obj,
      position: this.position,
    };
  }
}

/**
 * Remove a child
 */
export class RemoveChildMutation extends Mutation {
  parent: Obj;
  obj: Obj;
  position: number;

  constructor(parent: Obj, obj: Obj) {
    super(MutationType.REMOVE_CHILD);
    this.parent = parent;
    this.obj = obj;
    const array = this.parent.children;
    if (Array.isArray(array)) {
      this.position = array.indexOf(this.obj);
    } else {
      this.position = -1;
    }
  }

  apply(store: Store) {
    if (Array.isArray(this.parent.children)) {
      this.parent.children.splice(this.position, 1);
    }
  }

  unapply(store: Store): void {
    if (Array.isArray(this.parent.children)) {
      this.parent.children.splice(this.position, 0, this.obj);
    }
  }

  toJSON() {
    return {
      op: this.type,
      parentId: this.parent.id,
      obj: this.obj,
      position: this.position,
    };
  }
}

/**
 * Reorder a child
 */
export class ReorderChildMutation extends Mutation {
  parent: Obj;
  obj: Obj;
  newPosition: number;
  oldPosition: number;

  constructor(parent: Obj, obj: Obj, position: number) {
    super(MutationType.REORDER_CHILD);
    this.parent = parent;
    this.obj = obj;
    this.newPosition = position;
    if (Array.isArray(this.parent.children)) {
      this.oldPosition = this.parent.children.indexOf(this.obj);
    } else {
      this.oldPosition = -1;
    }
  }

  apply(store: Store) {
    const array = this.parent.children;
    if (Array.isArray(array)) {
      array.splice(this.oldPosition, 1);
      array.splice(this.newPosition, 0, this.obj);
    }
  }

  unapply(store: Store): void {
    const array = this.parent.children;
    if (Array.isArray(array)) {
      array.splice(this.newPosition, 1);
      array.splice(this.oldPosition, 0, this.obj);
    }
  }

  toJSON() {
    return {
      op: this.type,
      parentId: this.parent.id,
      obj: this.obj,
      oldPosition: this.oldPosition,
      newPosition: this.newPosition,
    };
  }
}

/**
 * Transation is an operation consists of a set of mutations
 */
export class Transaction {
  store: Store;
  mutations: Mutation[];

  constructor(store: Store) {
    this.store = store;
    this.mutations = [];
  }

  push(mut: Mutation) {
    this.mutations.push(mut);
  }

  toJSON(): any {
    return this.mutations.map((mut) => mut.toJSON());
  }

  apply(store: Store) {
    for (let i = 0; i < this.mutations.length; i++) {
      const mut = this.mutations[i];
      mut.apply(store);
    }
  }

  unapply(store: Store) {
    for (let i = this.mutations.length - 1; i >= 0; i--) {
      const mut = this.mutations[i];
      mut.unapply(store);
    }
  }

  /**
   * Atomic mutation to create a shape and returns true if changed
   */
  atomicCreate(obj: Obj): boolean {
    if (!this.store.getById(obj.id)) {
      const mut = new CreateMutation(obj);
      mut.apply(this.store);
      this.push(mut);
      return true;
    }
    return false;
  }

  /**
   * Atomic mutation to delete a shape and returns true if changed
   */
  atomicDelete(obj: Obj): boolean {
    if (this.store.getById(obj.id)) {
      const mut = new DeleteMutation(obj);
      mut.apply(this.store);
      this.push(mut);
      return true;
    }
    return false;
  }

  /**
   * Assign a value to shape's field and returns true if changed
   */
  assign(obj: Obj, field: string, value: any): boolean {
    const old = JSON.stringify((obj as any)[field]);
    const val = JSON.stringify(value);
    if (old !== val) {
      const existingMut = this.mutations.find(
        (m) => m instanceof AssignMutation && m.obj === obj && m.field === field
      );
      if (existingMut) {
        (existingMut as AssignMutation).newValue = structuredClone(value);
        existingMut.apply(this.store);
      } else {
        const mut = new AssignMutation(obj, field, structuredClone(value));
        mut.apply(this.store);
        this.push(mut);
      }
      return true;
    }
    return false;
  }

  /**
   * Assign a ref to shape's field and returns true if changed
   */
  assignRef(obj: Obj, field: string, value: Obj | null): boolean {
    const old = (obj as any)[field];
    if (old !== value) {
      const existingMut = this.mutations.find(
        (m) => m instanceof AssignMutation && m.obj === obj && m.field === field
      );
      if (existingMut) {
        (existingMut as AssignMutation).newValue = value;
        existingMut.apply(this.store);
      } else {
        const mut = new AssignRefMutation(obj, field, value);
        mut.apply(this.store);
        this.push(mut);
      }
      return true;
    }
    return false;
  }

  /**
   * Insert a child and returns true if changed
   */
  insertChild(parent: Obj, obj: Obj, position?: number): boolean {
    if (!parent.children.includes(obj)) {
      const mut = new InsertChildMutation(parent, obj, position);
      mut.apply(this.store);
      this.push(mut);
      return true;
    }
    return false;
  }

  /**
   * Remove a child and returns true if changed
   */
  removeChild(parent: Obj, obj: Obj): boolean {
    if (parent.children.includes(obj)) {
      const mut = new RemoveChildMutation(parent, obj);
      mut.apply(this.store);
      this.push(mut);
      return true;
    }
    return false;
  }

  /**
   * Reorder a child and returns true if changed
   */
  reorderChild(parent: Obj, obj: Obj, position: number): boolean {
    const array = parent.children;
    const oldIndex = array.indexOf(obj);
    if (oldIndex >= 0) {
      const mut = new ReorderChildMutation(parent, obj, position);
      mut.apply(this.store);
      this.push(mut);
      return true;
    }
    return false;
  }
}
