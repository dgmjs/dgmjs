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

export function yObjToObj(store: Store, yObj: YObj): Obj {
  const json = yObj.toJSON();
  return store.instantiator.createFromJson(json)!;
}

export function objToYObj(obj: Obj): YObj {
  const json = obj.toJSON();
  const yMap = new Y.Map();
  for (const key in json) {
    yMap.set(key, json[key]);
  }
  return yMap;
}

export function getParentOrder(yStore: YStore, parent: Obj, position: number) {
  // compute parent:order
  const objPrev = position > 0 ? parent.children[position - 1] : null;
  const objNext =
    position < parent.children.length ? parent.children[position + 1] : null;
  const yObjPrev = objPrev ? yStore.get(objPrev.id) : null;
  const yObjNext = objNext ? yStore.get(objNext.id) : null;
  if (yObjNext && yObjPrev) {
    const prev = yObjPrev.get("parent:order");
    const next = yObjNext.get("parent:order");
    const order = (prev + next) / 2;
    return order;
  } else if (yObjNext) {
    const next = yObjNext.get("parent:order");
    return next - 1;
  } else if (yObjPrev) {
    const prev = yObjPrev.get("parent:order");
    return prev + 1;
  } else {
    return 0;
  }
}

export function getYChildren(yStore: YStore, parent: string) {
  const children: YObj[] = [];
  yStore.forEach((yObj, key) => {
    if (yObj.get("parent") === parent) {
      children.push(yObj);
    }
  });
  return children;
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
        const yObj = objToYObj(mut.obj);
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
            getParentOrder(yStore, mut.parent, mut.position)
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
          // TODO: parent order
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
        const yObj = objToYObj(mut.obj);
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
            getParentOrder(yStore, mut.parent, mut.position)
          );
        }
        break;
      }
      case MutationType.REORDER_CHILD: {
        const mut = mutation as ReorderChildMutation;
        const yParent = yStore.get(mut.parent.id);
        const yObj = yStore.get(mut.obj.id);
        if (yParent && yObj) {
          // TODO: parent order
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
        console.log(`[objMap] add: ${key}`);
        const yObj = yStore.get(key);
        if (!store.getById(key) && yObj) {
          const obj = yObjToObj(store, yObj);
          obj.resolveRefs(store.idIndex);
          store.addToIndex(obj);
          const parentId = yObj.get("parent");
          const parent = store.getById(parentId);
          if (parent) {
            obj.parent = parent;
            const order = yObj.get("parent:order");
            const yChildren = getYChildren(yStore, parentId);
            const orders = yChildren.map((yChild) =>
              yChild.get("parent:order")
            );
            const position = orders.findIndex((o) => o >= order);
            parent.children.splice(position, 0, obj);
          }
          if (onObjCreate) {
            onObjCreate(obj);
          }
        }
      } else if (change.action === "delete") {
        console.log(`[objMap] delete: ${key}`);
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
        console.log(`[obj] update: ${key}`);
        const id = event.target.get("id");
        const obj = store.getById(id);
        const yObj = yStore.get(id);
        if (obj && yObj) {
          const keys = [...(event as any).keysChanged];
          for (const key of keys) {
            const value = yObj.get(key);
            console.log(`update (${id}) : ${key}=${value}`);
            if (key === "parent") {
              const parentId = yObj.get("parent");
              const parent = store.getById(parentId);
              if (parent) {
                parent.children.push(obj);
                obj.parent = parent;
              } else {
                if (obj.parent) {
                  obj.parent.children.splice(
                    obj.parent.children.indexOf(obj),
                    1
                  );
                }
                obj.parent = null;
              }
            } else if (key === "head" || key === "tail") {
              const value = yObj.get(key);
              const ref = store.getById(value);
              (obj as any)[key] = ref;
            } else {
              const value = yObj.get(key);
              (obj as any)[key] = value;
            }
          }
        }
      }
    });
  }
}
