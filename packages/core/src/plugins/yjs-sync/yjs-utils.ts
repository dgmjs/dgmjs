import * as Y from "yjs";
import { Obj } from "../../core/obj";
import {
  AssignMutation,
  AssignRefMutation,
  CreateMutation,
  InsertChildMutation,
  MutationType,
  RemoveChildMutation,
  ReorderChildMutation,
  Transaction,
} from "../../core/transaction";
import { Store } from "../../core/store";

export type YObj = Y.Map<any>;
export type YStore = Y.Map<YObj>;

/**
 * Get the child yObjs with the given parentId
 */
export function getYChildren(yStore: YStore, parentId: string) {
  const children: YObj[] = [];
  yStore.forEach((yObj, key) => {
    if (yObj.get("parent") === parentId) {
      children.push(yObj);
    }
  });
  return children;
}

/**
 * Get the parent order of a child with the given parentId and position
 */
function getParentOrder(
  yStore: YStore,
  parentId: string,
  position: number
): number {
  const siblings = getYChildren(yStore, parentId);
  const siblingOrders = siblings.map((yChild) => yChild.get("parent:order"));
  if (siblingOrders.length === 0) return 0;
  let order = 0;
  if (position === 0) {
    order = siblingOrders[0] - 1;
  } else if (position >= siblingOrders.length) {
    order = siblingOrders[siblingOrders.length - 1] + 1;
  } else {
    order = (siblingOrders[position - 1] + siblingOrders[position]) / 2;
  }
  console.log("### parent-order", position, order, siblingOrders);
  return order;
}

/**
 * Convert a Yjs object to an editor object
 */
export function yObjToObj(store: Store, yObj: YObj): Obj {
  const json = yObj.toJSON();
  const obj = store.instantiator.createFromJson(json)!;
  obj.resolveRefs(store.idIndex);
  // console.log("obj", obj);
  return obj;
}

/**
 * Convert an editor object to a Yjs object
 */
export function objToYObj(
  yStore: YStore,
  obj: Obj,
  assignParentOrder: boolean = false
): YObj {
  const json = obj.toJSON();
  const yObj = new Y.Map();
  for (const key in json) {
    yObj.set(key, json[key]);
  }
  if (assignParentOrder && obj.parent) {
    const position = obj.parent.children.indexOf(obj);
    // const order = getParentOrder(yStore, obj.parent.id, position);
    yObj.set("parent:order", position);
  }
  return yObj;
}

/**
 * Set the parent of an obj with the given parentId and parent:order
 */
function setParent(
  store: Store,
  yStore: YStore,
  obj: Obj,
  parentId: string | null,
  parentOrder: number
) {
  // remove from old parent
  if (obj.parent && obj.parent.id !== parentId) {
    obj.parent.children.splice(obj.parent.children.indexOf(obj), 1);
  }
  // add to new parent
  if (parentId) {
    const parent = store.getById(parentId);
    if (parent) {
      obj.parent = parent;
      if (parent.children.indexOf(obj) < 0) {
        const siblings = getYChildren(yStore, parentId!);
        const siblingOrders = siblings
          .map((yChild) => yChild.get("parent:order"))
          .sort((a, b) => a - b);
        const position = siblingOrders.findIndex((o) => o >= parentOrder);
        if (position < 0) {
          parent.children.push(obj);
        } else {
          parent.children.splice(position, 0, obj);
        }
        console.log(
          "setObjParent",
          parentId,
          parentOrder,
          position,
          siblingOrders
        );
      }
    } else {
      obj.parent = null;
    }
  } else {
    obj.parent = null;
  }
}

function setParentOrder(
  yStore: YStore,
  obj: Obj,
  parentOrder: number,
  previousParentOrder: number
) {
  const parent = obj.parent;
  if (parent) {
    // remove from old position
    const idx = parent.children.indexOf(obj);
    parent.children.splice(idx, 1);
    // add to new position
    const siblings = getYChildren(yStore, parent.id)
      .map((yObj) => {
        const id = yObj.get("id");
        const order = yObj.get("parent:order");
        return obj.id === id ? previousParentOrder : order;
      })
      .sort((a, b) => a - b);
    // const position = siblings.findIndex((o) => );
    const position = siblings.findIndex((o) => o >= parentOrder);
    console.log("set-parent-order", siblings, position);

    if (position < 0) {
      parent.children.push(obj);
    } else {
      parent.children.splice(position + 1, 0, obj);
    }
  }
}

/**
 * Apply a transaction to Yjs store
 */
export function applyTransaction(tx: Transaction, yStore: YStore) {
  if (tx.mutations.length === 0) return;
  for (let i = 0; i < tx.mutations.length; i++) {
    const mutation = tx.mutations[i];
    switch (mutation.type) {
      case MutationType.CREATE: {
        const mut = mutation as CreateMutation;
        const yObj = objToYObj(yStore, mut.obj);
        yStore.set(mut.obj.id, yObj);
        break;
      }
      case MutationType.DELETE: {
        const mut = mutation as CreateMutation;
        yStore.delete(mut.obj.id);
        break;
      }
      case MutationType.ASSIGN: {
        const mut = mutation as AssignMutation;
        const yObj = yStore.get(mut.obj.id);
        if (yObj) {
          yObj.set(mut.field, mut.newValue);
        }
        break;
      }
      case MutationType.ASSIGN_REF: {
        const mut = mutation as AssignRefMutation;
        const yObj = yStore.get(mut.obj.id);
        if (yObj && mut.newValue) {
          yObj.set(mut.field, mut.newValue.id);
        }
        break;
      }
      case MutationType.INSERT_CHILD: {
        const mut = mutation as InsertChildMutation;
        const yParent = yStore.get(mut.parent.id);
        const yObj = yStore.get(mut.obj.id);
        if (yParent && yObj) {
          yObj.set("parent", mut.parent.id);
          yObj.set(
            "parent:order",
            getParentOrder(yStore, mut.parent.id, mut.position)
          );
        }
        break;
      }
      case MutationType.REMOVE_CHILD: {
        const mut = mutation as RemoveChildMutation;
        const yParent = yStore.get(mut.parent.id);
        const yObj = yStore.get(mut.obj.id);
        if (yParent && yObj) {
          yObj.delete("parent");
          yObj.delete("parent:order");
        }
        break;
      }
      case MutationType.REORDER_CHILD: {
        const mut = mutation as ReorderChildMutation;
        const yParent = yStore.get(mut.parent.id);
        const yObj = yStore.get(mut.obj.id);
        if (yParent && yObj) {
          const order = getParentOrder(yStore, mut.parent.id, mut.newPosition);
          yObj.set("parent:order", order);
          console.log("reorder", mut.obj, mut.newPosition, order);
        }
        break;
      }
    }
  }
}

/**
 * Unapply a transaction to Yjs store
 */
export function unapplyTransaction(tx: Transaction, yStore: YStore) {
  if (tx.mutations.length === 0) return;
  for (let i = tx.mutations.length - 1; i >= 0; i--) {
    const mutation = tx.mutations[i];
    switch (mutation.type) {
      case MutationType.CREATE: {
        const mut = mutation as CreateMutation;
        yStore.delete(mut.obj.id);
        break;
      }
      case MutationType.DELETE: {
        const mut = mutation as CreateMutation;
        const yObj = objToYObj(yStore, mut.obj);
        yStore.set(mut.obj.id, yObj);
        break;
      }
      case MutationType.ASSIGN: {
        const mut = mutation as AssignMutation;
        const yObj = yStore.get(mut.obj.id);
        if (yObj) {
          yObj.set(mut.field, mut.oldValue);
        }
        break;
      }
      case MutationType.ASSIGN_REF: {
        const mut = mutation as AssignRefMutation;
        const yObj = yStore.get(mut.obj.id);
        if (yObj && mut.oldValue) {
          yObj.set(mut.field, mut.oldValue.id);
        }
        break;
      }
      case MutationType.INSERT_CHILD: {
        const mut = mutation as InsertChildMutation;
        const yParent = yStore.get(mut.parent.id);
        const yObj = yStore.get(mut.obj.id);
        if (yParent && yObj) {
          yObj.delete("parent");
          yObj.delete("parent:order");
        }
        break;
      }
      case MutationType.REMOVE_CHILD: {
        const mut = mutation as RemoveChildMutation;
        const yParent = yStore.get(mut.parent.id);
        const yObj = yStore.get(mut.obj.id);
        if (yParent && yObj) {
          yObj.set("parent", mut.parent.id);
          yObj.set(
            "parent:order",
            getParentOrder(yStore, mut.parent.id, mut.position)
          );
        }
        break;
      }
      case MutationType.REORDER_CHILD: {
        const mut = mutation as ReorderChildMutation;
        const yParent = yStore.get(mut.parent.id);
        const yObj = yStore.get(mut.obj.id);
        if (yParent && yObj) {
          yObj.set(
            "parent:order",
            getParentOrder(yStore, mut.parent.id, mut.oldPosition)
          );
        }
        break;
      }
    }
  }
}

/**
 * Apply a Yjs event to editor store
 */
export function applyYjsEvent(
  event: Y.YEvent<any>,
  store: Store,
  yStore: YStore,
  onObjCreate: (obj: Obj) => void
) {
  if (event.target === yStore) {
    event.changes.keys.forEach((change, key) => {
      if (change.action === "add") {
        const yObj = yStore.get(key);
        if (!store.getById(key) && yObj) {
          const obj = yObjToObj(store, yObj);
          store.addToIndex(obj);
          const parentId = yObj.get("parent");
          const parentOrder = yObj.get("parent:order");
          // console.log("parent", parentId, parentOrder);
          setParent(store, yStore, obj, parentId, parentOrder);
          if (onObjCreate) {
            onObjCreate(obj);
          }
        }
      } else if (change.action === "delete") {
        const obj = store.getById(key);
        if (obj?.parent && Array.isArray(obj.parent.children)) {
          obj.parent.children.splice(obj.parent.children.indexOf(obj), 1);
          obj.parent = null;
        }
        if (obj) store.removeFromIndex(obj);
      }
    });
  } else {
    event.changes.keys.forEach((change, key) => {
      if (change.action === "update") {
        const id = event.target.get("id");
        const obj = store.getById(id);
        const yObj = yStore.get(id);
        if (obj && yObj) {
          const value = yObj.get(key);
          if (key === "parent") {
            const parentId = yObj.get("parent");
            const parentOrder = yObj.get("parent:order");
            setParent(store, yStore, obj, parentId, parentOrder);
          } else if (key === "parent:order") {
            const parentId = yObj.get("parent");
            const parentOrder = yObj.get("parent:order");
            const previousParentOrder = change.oldValue;
            console.log("update parent:order", parentId, parentOrder);
            // setParent(store, yStore, obj, parentId, parentOrder);
            setParentOrder(yStore, obj, parentOrder, previousParentOrder);
          } else if (key === "head" || key === "tail") {
            if (value) {
              const ref = store.getById(value);
              (obj as any)[key] = ref;
            } else {
              (obj as any)[key] = null;
            }
          } else {
            (obj as any)[key] = value;
          }
        }
      }
    });
  }
}
