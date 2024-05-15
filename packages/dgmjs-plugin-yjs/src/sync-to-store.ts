import * as Y from "yjs";
import { Editor, Obj, Shape, Store } from "@dgmjs/core";
import { YObj, YStore } from "./yjs-utils";

interface Postprocess {
  created: Set<Obj>;
  updated: Set<Obj>;
  deleted: Set<Obj>;
  reorder: Set<Obj>;
}

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
 * Create an obj in the store from a Yjs object
 */
export function createObj(
  store: Store,
  yStore: YStore,
  yObj: YObj,
  postprocess: Postprocess
): Obj | null {
  const objId = yObj.get("id");
  if (!store.getById(objId) && yObj) {
    const obj = yObjToObj(store, yObj);
    store.addToIndex(obj);
    const parentId = yObj.get("parent");
    setParent(store, obj, parentId);
    postprocess.created.add(obj);
    const parent = store.getById(parentId);
    if (parent) {
      postprocess.reorder.add(parent);
    }
    return obj;
  }
  return null;
}

/**
 * Delete an obj from the store
 */
export function deleteObj(
  store: Store,
  objId: string,
  postprocess: Postprocess
) {
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
  newValue: any,
  postprocess: Postprocess
) {
  const obj = store.getById(objId);
  const yObj = yStore.get(objId);
  if (obj && yObj) {
    if (field === "parent") {
      const parentId = yObj.get("parent");
      setParent(store, obj, parentId);
      postprocess.updated.add(obj);
    } else if (field === "parent:order") {
      const parentId = yObj.get("parent");
      const parent = store.getById(parentId);
      postprocess.updated.add(obj);
      if (parent) {
        postprocess.updated.add(parent);
        postprocess.reorder.add(parent);
      }
    } else if (field === "head" || field === "tail") {
      if (newValue) {
        const ref = store.getById(newValue);
        (obj as any)[field] = ref;
      } else {
        (obj as any)[field] = null;
      }
      postprocess.updated.add(obj);
    } else {
      (obj as any)[field] = newValue;
      postprocess.updated.add(obj);
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
  postprocess: Postprocess
) {
  if (event.target === yStore) {
    event.changes.keys.forEach((change, key) => {
      if (change.action === "add") {
        const yObj = yStore.get(key);
        createObj(store, yStore, yObj!, postprocess);
      } else if (change.action === "delete") {
        deleteObj(store, key, postprocess);
      }
    });
  } else {
    event.changes.keys.forEach((change, key) => {
      if (change.action === "update") {
        const objId = event.target.get("id");
        const value = event.target.get(key);
        updateObj(
          store,
          yStore,
          objId,
          key,
          change.oldValue,
          value,
          postprocess
        );
      }
    });
  }
}

/**
 * Handle Yjs events and apply them to store
 */
export function handleYjsObserveDeep(
  editor: Editor,
  store: Store,
  yStore: YStore,
  events: Y.YEvent<any>[]
): Postprocess {
  const postprocess: Postprocess = {
    created: new Set(),
    updated: new Set(),
    deleted: new Set(),
    reorder: new Set(),
  };

  // apply all yjs events
  for (const event of events) {
    applyYjsEvent(event, store, yStore, postprocess);
  }

  // resolve refs for all created objs and update created objs
  postprocess.created.forEach((obj) => {
    obj.resolveRefs(store.idIndex, true);
    if (obj instanceof Shape) {
      obj.update(editor.canvas);
    }
  });

  // update shapes
  postprocess.updated.forEach((obj) => {
    if (obj instanceof Shape) {
      obj.update(editor.canvas);
    }
  });

  // reorder children
  postprocess.reorder.forEach((parent) => {
    parent.children.sort((a, b) => {
      const yA = yStore.get(a.id);
      const yB = yStore.get(b.id);
      if (!yA || !yB) return 0;
      return yA.get("parent:order") - yB.get("parent:order");
    });
  });

  return postprocess;
}
