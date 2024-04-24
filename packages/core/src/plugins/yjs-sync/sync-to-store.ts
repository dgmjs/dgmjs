import * as Y from "yjs";
import { Obj } from "../../core/obj";
import { Store } from "../../core/store";
import { YObj, YStore, getYChildren } from "./yjs-utils";

/**
 * Convert a Yjs object to an editor object
 */
function yObjToObj(store: Store, yObj: YObj): Obj {
  const json = yObj.toJSON();
  const obj = store.instantiator.createFromJson(json)!;
  obj.resolveRefs(store.idIndex);
  // console.log("obj", obj);
  return obj;
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

export function createObj(
  store: Store,
  yStore: YStore,
  yObj: YObj
): Obj | null {
  const objId = yObj.get("id");
  if (!store.getById(objId) && yObj) {
    const obj = yObjToObj(store, yObj);
    store.addToIndex(obj);
    // TODO:
    const parentId = yObj.get("parent");
    const parentOrder = yObj.get("parent:order");
    setParent(store, yStore, obj, parentId, parentOrder);
    // const parentId = yObj.get("parent");
    // const parentOrder = yObj.get("parent:order");
    // console.log("parent", parentId, parentOrder);
    // setParent(store, yStore, obj, parentId, parentOrder);
    // if (onObjCreate) {
    //   onObjCreate(obj);
    // }
    return obj;
  }
  return null;
}

export function deleteObj(store: Store, objId: string) {
  const obj = store.getById(objId);
  // TODO: replace by setParent() ???
  if (obj?.parent && Array.isArray(obj.parent.children)) {
    obj.parent.children.splice(obj.parent.children.indexOf(obj), 1);
    obj.parent = null;
  }
  if (obj) store.removeFromIndex(obj);
}

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
    // const value = yObj.get(field);
    if (field === "parent") {
      const parentId = yObj.get("parent");
      const parentOrder = yObj.get("parent:order");
      setParent(store, yStore, obj, parentId, parentOrder);
    } else if (field === "parent:order") {
      const parentId = yObj.get("parent");
      const parentOrder = yObj.get("parent:order");
      const previousParentOrder = oldValue;
      console.log("update parent:order", parentId, parentOrder);
      setParent(store, yStore, obj, parentId, parentOrder);
      setParentOrder(yStore, obj, parentOrder, previousParentOrder);
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
