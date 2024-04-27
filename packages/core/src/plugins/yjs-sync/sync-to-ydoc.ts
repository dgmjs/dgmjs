import * as Y from "yjs";
import { Obj } from "../../core/obj";
import {
  AssignMutation,
  AssignRefMutation,
  CreateMutation,
  DeleteMutation,
  InsertChildMutation,
  MutationType,
  RemoveChildMutation,
  ReorderChildMutation,
  Transaction,
} from "../../core/transaction";
import { YObj, YStore, yComputeParentOrder, yGetChildren } from "./yjs-utils";
import { Store } from "../../core/store";

/**
 * Convert an editor object to a Yjs object
 */
export function objToYObj(obj: Obj, assignParentOrder: boolean = false): YObj {
  const json = obj.toJSON();
  const yObj = new Y.Map();
  for (const key in json) {
    yObj.set(key, json[key]);
  }
  if (assignParentOrder && obj.parent) {
    const position = obj.parent.children.indexOf(obj);
    yObj.set("parent:order", position);
  }
  return yObj;
}

function createYObj(yStore: YStore, obj: Obj) {
  const yObj = objToYObj(obj);
  yStore.set(obj.id, yObj);
}

function deleteYObj(yStore: YStore, objId: string) {
  yStore.delete(objId);
}

function assignYObj(yStore: YStore, objId: string, field: string, value: any) {
  const yObj = yStore.get(objId);
  if (yObj) {
    yObj.set(field, value);
  }
}

function assignRefYObj(
  yStore: YStore,
  objId: string,
  field: string,
  value: Obj | null
) {
  const yObj = yStore.get(objId);
  if (yObj) {
    yObj.set(field, value?.id);
  }
}

function insertYObjChild(
  yStore: YStore,
  parentId: string,
  objId: string,
  position: number
) {
  const yParent = yStore.get(parentId);
  const yObj = yStore.get(objId);
  if (yParent && yObj) {
    yObj.set("parent", parentId);
    const order = yComputeParentOrder(yStore, objId, parentId, position);
    yObj.set("parent:order", order);
  }
}

function removeYObjChild(yStore: YStore, parentId: string, objId: string) {
  const yParent = yStore.get(parentId);
  const yObj = yStore.get(objId);
  if (yParent && yObj) {
    yObj.delete("parent");
    yObj.delete("parent:order");
  }
}

function reorderYObjChild(
  yStore: YStore,
  parentId: string,
  objId: string,
  position: number
) {
  const yParent = yStore.get(parentId);
  const yObj = yStore.get(objId);
  if (yParent && yObj) {
    const order = yComputeParentOrder(yStore, objId, parentId, position);
    yObj.set("parent:order", order);
  }
}

/**
 * Apply a transaction to Yjs store
 */
export function handleApplyTransaction(tx: Transaction, yStore: YStore) {
  if (tx.mutations.length === 0) return;
  for (let i = 0; i < tx.mutations.length; i++) {
    const mutation = tx.mutations[i];
    switch (mutation.type) {
      case MutationType.CREATE: {
        const mut = mutation as CreateMutation;
        mut.obj.traverse((o) => {
          createYObj(yStore, o);
        });
        break;
      }
      case MutationType.DELETE: {
        const mut = mutation as DeleteMutation;
        mut.obj.traverse((o) => {
          deleteYObj(yStore, o.id);
        });
        break;
      }
      case MutationType.ASSIGN: {
        const mut = mutation as AssignMutation;
        assignYObj(yStore, mut.obj.id, mut.field, mut.newValue);
        break;
      }
      case MutationType.ASSIGN_REF: {
        const mut = mutation as AssignRefMutation;
        assignRefYObj(yStore, mut.obj.id, mut.field, mut.newValue);
        break;
      }
      case MutationType.INSERT_CHILD: {
        const mut = mutation as InsertChildMutation;
        insertYObjChild(yStore, mut.parent.id, mut.obj.id, mut.position);
        break;
      }
      case MutationType.REMOVE_CHILD: {
        const mut = mutation as RemoveChildMutation;
        removeYObjChild(yStore, mut.parent.id, mut.obj.id);
        break;
      }
      case MutationType.REORDER_CHILD: {
        const mut = mutation as ReorderChildMutation;
        reorderYObjChild(yStore, mut.parent.id, mut.obj.id, mut.newPosition);
        break;
      }
    }
  }
}

/**
 * Unapply a transaction to Yjs store
 */
export function handleUnapplyTransaction(tx: Transaction, yStore: YStore) {
  if (tx.mutations.length === 0) return;
  for (let i = tx.mutations.length - 1; i >= 0; i--) {
    const mutation = tx.mutations[i];
    switch (mutation.type) {
      case MutationType.CREATE: {
        const mut = mutation as CreateMutation;
        deleteYObj(yStore, mut.obj.id);
        break;
      }
      case MutationType.DELETE: {
        const mut = mutation as DeleteMutation;
        createYObj(yStore, mut.obj);
        break;
      }
      case MutationType.ASSIGN: {
        const mut = mutation as AssignMutation;
        assignYObj(yStore, mut.obj.id, mut.field, mut.oldValue);
        break;
      }
      case MutationType.ASSIGN_REF: {
        const mut = mutation as AssignRefMutation;
        assignRefYObj(yStore, mut.obj.id, mut.field, mut.oldValue);
        break;
      }
      case MutationType.INSERT_CHILD: {
        const mut = mutation as InsertChildMutation;
        removeYObjChild(yStore, mut.parent.id, mut.obj.id);
        break;
      }
      case MutationType.REMOVE_CHILD: {
        const mut = mutation as RemoveChildMutation;
        insertYObjChild(yStore, mut.parent.id, mut.obj.id, mut.position);
        break;
      }
      case MutationType.REORDER_CHILD: {
        const mut = mutation as ReorderChildMutation;
        reorderYObjChild(yStore, mut.parent.id, mut.obj.id, mut.oldPosition);
        break;
      }
    }
  }
}

/**
 * Synchronize the store to the yStore
 */
export function syncToYStore(store: Store, yStore: YStore) {
  for (const key in store.idIndex) {
    const obj = store.idIndex[key];
    yStore.set(key, objToYObj(obj, true));
  }
}
