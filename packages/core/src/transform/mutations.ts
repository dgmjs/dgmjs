import { Store } from "../core/store";
import type { Obj } from "../core/obj";

export const MutationType = {
  ASSIGN: "assign",
  ASSIGN_REF: "assign-ref",
  INSERT: "insert",
  DELETE: "delete",
  INSERT_TO_ARRAY: "insert-to-array",
  REMOVE_FROM_ARRAY: "remove-from-array",
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
 * Insert an object
 */
export class InsertMutation extends Mutation {
  obj: Obj;

  constructor(obj: Obj) {
    super(MutationType.INSERT);
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
 * Insert an object to an array
 */
export class InsertToArrayMutation extends Mutation {
  obj: Obj;
  field: string;
  value: any;
  position: number;

  constructor(obj: Obj, field: string, value: any, position?: number) {
    super(MutationType.INSERT_TO_ARRAY);
    this.obj = obj;
    this.field = field;
    this.value = value;
    if (typeof position === "number") {
      this.position = position;
    } else {
      const array = (this.obj as Record<string, any>)[this.field];
      this.position = array.length;
    }
  }

  apply(store: Store) {
    const array = (this.obj as Record<string, any>)[this.field];
    if (Array.isArray(array)) {
      array.splice(this.position, 0, this.value);
    }
  }

  unapply(store: Store): void {
    const array = (this.obj as Record<string, any>)[this.field];
    if (Array.isArray(array)) {
      array.splice(this.position, 1);
    }
  }

  toJSON() {
    return {
      op: this.type,
      objId: this.obj.id,
      field: this.field,
      item: this.value,
      position: this.position,
    };
  }
}

/**
 * Remove from an array
 */
export class RemoveFromArrayMutation extends Mutation {
  obj: Obj;
  field: string;
  value: any;
  position: number;

  constructor(obj: Obj, field: string, value: any) {
    super(MutationType.REMOVE_FROM_ARRAY);
    this.obj = obj;
    this.field = field;
    this.value = value;
    const array = (this.obj as Record<string, any>)[this.field];
    if (Array.isArray(array)) {
      this.position = array.indexOf(this.value);
    } else {
      this.position = -1;
    }
  }

  apply(store: Store) {
    const array = (this.obj as Record<string, any>)[this.field];
    if (Array.isArray(array)) {
      array.splice(this.position, 1);
    }
  }

  unapply(store: Store): void {
    const array = (this.obj as Record<string, any>)[this.field];
    if (Array.isArray(array)) {
      array.splice(this.position, 0, this.value);
    }
  }

  toJSON() {
    return {
      op: this.type,
      objId: this.obj.id,
      field: this.field,
      item: this.value,
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
