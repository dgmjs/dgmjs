import * as Y from "yjs";
import { Obj } from "../../core/obj";
import { Store } from "../../core/store";
import {
  YObj,
  YStore,
  yGetChildren,
  yGetPositionByOrder,
  ySortByOrder,
} from "./yjs-utils";

/**
 * Convert a Yjs object to an editor object
 */
function yObjToObj(store: Store, yObj: YObj): Obj {
  const json = yObj.toJSON();
  const obj = store.instantiator.createFromJson(json)!;
  obj.resolveRefs(store.idIndex);
  return obj;
}

/**
 * Set the parent of an obj with the given parentId
 */
function setParent(store: Store, obj: Obj, parentId: string | null) {
  if (obj.parent && obj.parent.id !== parentId) {
    obj.parent.children.splice(obj.parent.children.indexOf(obj), 1);
  }
  if (parentId) {
    const parent = store.getById(parentId);
    if (parent) {
      obj.parent = parent;
      if (parent.children.indexOf(obj) < 0) {
        parent.children.push(obj);
      }
    } else {
      obj.parent = null;
    }
  } else {
    obj.parent = null;
  }
}

/**
 * Set the position of an obj in the parent's children array
 */
function setPosition(obj: Obj, position: number) {
  if (obj.parent) {
    obj.parent.children.splice(obj.parent.children.indexOf(obj), 1);
    obj.parent.children.splice(position, 0, obj);
  }
}

/**
 * Set the position of an obj by order
 */
function setPositionByOrder(
  yStore: YStore,
  obj: Obj,
  parentId: string,
  order: number = 0
) {
  const objId = obj.id;
  const ySiblings = yGetChildren(yStore, parentId).filter(
    (yObj) => yObj.get("id") !== objId
  );
  const ySortedSiblings = ySortByOrder(ySiblings);
  const position = yGetPositionByOrder(ySortedSiblings, order);
  setPosition(obj, position);
}

/**
 * Create an obj in the store from a Yjs object
 */
export function createObj(
  store: Store,
  yStore: YStore,
  yObj: YObj
): Obj | null {
  const objId = yObj.get("id");
  if (!store.getById(objId) && yObj) {
    const obj = yObjToObj(store, yObj);
    store.addToIndex(obj);
    const parentId = yObj.get("parent");
    const order = yObj.get("parent:order");
    setParent(store, obj, parentId);
    setPositionByOrder(yStore, obj, parentId, order);
    return obj;
  }
  return null;
}

/**
 * Delete an obj from the store
 */
export function deleteObj(store: Store, objId: string) {
  const obj = store.getById(objId);
  if (obj) {
    setParent(store, obj, null);
    store.removeFromIndex(obj);
  }
}

/**
 * Update an obj in the store
 */
export function updateObj(
  store: Store,
  yStore: YStore,
  objId: string,
  field: string,
  oldValue: any,
  newValue: any
) {
  const obj = store.getById(objId);
  const yObj = yStore.get(objId);
  if (obj && yObj) {
    if (field === "parent") {
      const parentId = yObj.get("parent");
      const order = yObj.get("parent:order");
      setParent(store, obj, parentId);
      setPositionByOrder(yStore, obj, parentId, order);
    } else if (field === "parent:order") {
      const parentId = yObj.get("parent");
      const parentOrder = yObj.get("parent:order");
      setPositionByOrder(yStore, obj, parentId, parentOrder);
    } else if (field === "head" || field === "tail") {
      if (newValue) {
        const ref = store.getById(newValue);
        (obj as any)[field] = ref;
      } else {
        (obj as any)[field] = null;
      }
    } else {
      (obj as any)[field] = newValue;
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
  onObjCreate?: (obj: Obj) => void
) {
  if (event.target === yStore) {
    event.changes.keys.forEach((change, key) => {
      if (change.action === "add") {
        const yObj = yStore.get(key);
        const obj = createObj(store, yStore, yObj!);
        if (obj && onObjCreate) {
          onObjCreate(obj);
        }
      } else if (change.action === "delete") {
        deleteObj(store, key);
      }
    });
  } else {
    event.changes.keys.forEach((change, key) => {
      if (change.action === "update") {
        const objId = event.target.get("id");
        const value = event.target.get(key);
        updateObj(store, yStore, objId, key, change.oldValue, value);
      }
    });
  }
}

/**
 * Handle Yjs events and apply them to store
 */
export function handleYjsObserveDeep(
  store: Store,
  yStore: YStore,
  events: Y.YEvent<any>[]
): Obj[] {
  const createdObjs: Obj[] = [];

  // apply all yjs events
  for (const event of events) {
    applyYjsEvent(event, store, yStore, (createdObj) => {
      createdObjs.push(createdObj);
      if (createdObj instanceof Document) {
        store.setDoc(createdObj);
      }
    });
  }

  // resolve refs for all created objects
  createdObjs.forEach((obj) => {
    obj.resolveRefs(store.idIndex, true);
  });

  return createdObjs;
}
