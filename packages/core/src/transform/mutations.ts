import { Store } from "../core/store";
import type { Obj } from "../core/obj";

export const MutationType = {
  CREATE: "create",
  DELETE: "delete",
  ASSIGN: "assign",
  ASSIGN_REF: "assign-ref",
  INSERT_CHILD: "insert-child",
  REMOVE_CHILD: "remove-child",
  REORDER_IN_ARRAY: "reorder-in-array",
} as const;

/**
 * Mutates object store
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
 * Remove from an array
 */
export class ReorderInArrayMutation extends Mutation {
  obj: Obj;
  field: string;
  value: any;
  newPosition: number;
  oldPosition: number;

  constructor(obj: Obj, field: string, value: any, position: number) {
    super(MutationType.REORDER_IN_ARRAY);
    this.obj = obj;
    this.field = field;
    this.value = value;
    this.newPosition = position;
    const array = (this.obj as Record<string, any>)[this.field];
    if (Array.isArray(array)) {
      this.oldPosition = array.indexOf(this.value);
    } else {
      this.oldPosition = -1;
    }
  }

  apply(store: Store) {
    const array = (this.obj as Record<string, any>)[this.field];
    if (Array.isArray(array)) {
      array.splice(this.oldPosition, 1);
      array.splice(this.newPosition, 0, this.value);
    }
  }

  unapply(store: Store): void {
    const array = (this.obj as Record<string, any>)[this.field];
    if (Array.isArray(array)) {
      array.splice(this.newPosition, 1);
      array.splice(this.oldPosition, 0, this.value);
    }
  }

  toJSON() {
    return {
      op: this.type,
      objId: this.obj.id,
      field: this.field,
      item: this.value,
      position: this.oldPosition,
    };
  }
}

/**
 * Transation is a atomic operation includes a set of mutations
 */
export class Transaction {
  name: string;
  mutations: Mutation[];

  constructor(name: string) {
    this.name = name;
    this.mutations = [];
  }

  push(mut: Mutation) {
    this.mutations.push(mut);
  }

  toJSON(): any {
    return this.mutations.map((mut) => mut.toJSON());
  }
}
