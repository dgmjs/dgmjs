import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { Editor, Plugin } from "../editor";
import { Box, Document, Page, Shape } from "../shapes";
import { Obj } from "../core/obj";
import {
  AssignMutation,
  AssignRefMutation,
  CreateMutation,
  InsertChildMutation,
  MutationType,
  RemoveChildMutation,
  ReorderChildMutation,
} from "../transform/mutations";

export class YDocSyncPlugin2 implements Plugin {
  editor: Editor = null!;
  yDoc: Y.Doc = null!;
  yObjMap: Y.Map<Y.Map<any>> = null!;

  constructor() {}

  activate(editor: Editor) {
    this.editor = editor;
  }

  deactivate(editor: Editor) {}

  setup() {
    this.yDoc = new Y.Doc();
  }

  startProvider(roomId: string) {
    const provider = new WebrtcProvider(roomId, this.yDoc, {
      password: "1234",
    });
    provider.on("status", (event) => {
      console.log("status", event);
    });
    this.yObjMap = this.yDoc.getMap("objmap");
  }

  listen() {
    this.editor.transform.onTransaction.addListener((tr) => {
      this.yDoc.transact(() => {
        tr.mutations.forEach((mutation) => {
          switch (mutation.type) {
            case MutationType.CREATE: {
              const mut = mutation as CreateMutation;
              const yObj = this.objToYMap(mut.obj);
              this.yObjMap.set(mut.obj.id, yObj);
              break;
            }
            case MutationType.DELETE: {
              const mut = mutation as CreateMutation;
              this.yObjMap.delete(mut.obj.id);
              break;
            }
            case MutationType.ASSIGN: {
              const mut = mutation as AssignMutation;
              const yObj = this.yObjMap.get(mut.obj.id);
              if (yObj) {
                yObj.set(mut.field, mut.newValue);
              }
              break;
            }
            case MutationType.ASSIGN_REF: {
              const mut = mutation as AssignRefMutation;
              const yObj = this.yObjMap.get(mut.obj.id);
              if (yObj && mut.newValue) {
                yObj.set(mut.field, mut.newValue.id);
              }
              break;
            }
            case MutationType.INSERT_CHILD: {
              const mut = mutation as InsertChildMutation;
              const yParent = this.yObjMap.get(mut.parent.id);
              const yChild = this.yObjMap.get(mut.obj.id);
              if (yParent && yChild) {
                yChild.set("parent", mut.parent.id);
                // yChild.set("parentOrder", ???);
              }
              break;
            }
            case MutationType.REMOVE_CHILD: {
              const mut = mutation as RemoveChildMutation;
              const yParent = this.yObjMap.get(mut.parent.id);
              const yChild = this.yObjMap.get(mut.obj.id);
              if (yParent && yChild) {
                yChild.delete("parent");
                // yChild.delete("parentOrder");
              }
              break;
            }
            case MutationType.REORDER_CHILD: {
              const mut = mutation as ReorderChildMutation;
              const yParent = this.yObjMap.get(mut.parent.id);
              const yChild = this.yObjMap.get(mut.obj.id);
              if (yParent && yChild) {
                // yChild.set("parentOrder", ???);
              }
              break;
            }
          }
        });
      });
    });
    // this.editor.transform.onMutate.addListener((mutation) => {
    //   console.log("mut", mutation.toJSON());
    // });

    this.yObjMap.observeDeep((events, tr) => {
      console.log("tr", tr);
      if (!tr.local) {
        events.forEach((event: any) => {
          if (event.target === this.yObjMap) {
            const keys = [...event.keysChanged];
            for (const key of keys) {
              const yObj = this.yObjMap.get(key);
              if (yObj) {
                // create
                if (!this.editor.store.getById(key)) {
                  const obj = this.yMapToObj(yObj);
                  obj.resolveRefs(this.editor.store.idIndex);
                  this.editor.store.addToIndex(obj);
                  const parentId = yObj.get("parent");
                  const parent = this.editor.store.getById(parentId);
                  if (parent) {
                    parent.children.push(obj);
                    obj.parent = parent;
                  }
                  // TODO: remove this
                  if (obj instanceof Document) {
                    this.editor.store.setDoc(obj);
                  }
                  // TODO: remove this
                  if (obj instanceof Page) {
                    this.editor.setCurrentPage(obj);
                  }

                  console.log("create", obj);
                }
              } else {
                //delete
                const obj = this.editor.store.getById(key);
                if (obj) this.editor.store.removeFromIndex(obj);
                console.log("delete", key);
              }
            }
          } else {
            // update
            const id = event.target.get("id");
            const obj = this.editor.store.getById(id);
            const yObj = this.yObjMap.get(id);
            if (obj && yObj) {
              const keys = [...event.keysChanged];
              for (const key of keys) {
                if (key === "parent") {
                  const parentId = yObj.get("parent");
                  const parent = this.editor.store.getById(parentId);
                  if (parent) {
                    parent.children.push(obj);
                    obj.parent = parent;
                  }
                  console.log("update-parent", parent);
                } else if (key === "head" || key === "tail") {
                  const value = yObj.get(key);
                  const ref = this.editor.store.getById(value);
                  (obj as any)[key] = ref;
                  console.log("update-ref", key, ref);
                } else {
                  const value = yObj.get(key);
                  (obj as any)[key] = value;
                  console.log("update", key, id);
                }
              }
            }
          }
        });
        this.editor.repaint();
      }
    });
  }

  /**
   * Synchronize the store to the ydoc
   */
  synchronize() {
    const store = this.editor.store;
    for (const key in store.idIndex) {
      const obj = store.idIndex[key];
      this.yObjMap.set(key, this.objToYMap(obj));
    }
  }

  yMapToObj(yMap: Y.Map<any>): Obj {
    const json = yMap.toJSON();
    return this.editor.store.instantiator.createFromJson(json)!;
  }

  objToYMap(obj: Obj): Y.Map<any> {
    const json = obj.toJSON();
    const yMap = new Y.Map();
    for (const key in json) {
      yMap.set(key, json[key]);
    }
    return yMap;
  }
}
