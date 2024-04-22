import * as Y from "yjs";
import { Editor, Plugin } from "../../editor";
import { Document, Page } from "../../shapes";
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
import { Disposable } from "../../std/typed-event";
import { objToYMap, yMapToObj } from "./yjs-utils";

function getParentOrder(
  yObjMap: Y.Map<Y.Map<any>>,
  parent: Obj,
  position: number
) {
  // compute parent:order
  const objPrev = position > 0 ? parent.children[position - 1] : null;
  const objNext =
    position < parent.children.length ? parent.children[position + 1] : null;
  const yObjPrev = objPrev ? yObjMap.get(objPrev.id) : null;
  const yObjNext = objNext ? yObjMap.get(objNext.id) : null;
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

function getYChildren(yObjMap: Y.Map<Y.Map<any>>, parent: string) {
  const children: Y.Map<any>[] = [];
  yObjMap.forEach((yObj, key) => {
    if (yObj.get("parent") === parent) {
      children.push(yObj);
    }
  });
  return children;
}

export class YjsSyncPlugin extends Plugin {
  editor: Editor = null!;
  state: "idle" | "syncing";
  yDoc: Y.Doc | null;
  yObjMap: Y.Map<Y.Map<any>> | null;
  disposables: Disposable[] = [];

  constructor() {
    super("dgmjs/yjs-sync");
    this.state = "idle";
    this.yDoc = null;
    this.yObjMap = null;
  }

  activate(editor: Editor) {
    this.editor = editor;
  }

  deactivate(editor: Editor) {}

  start(yDoc: Y.Doc) {
    this.state = "syncing";
    this.yDoc = yDoc;
    this.yObjMap = this.yDoc.getMap("objmap");
    this.listen();
  }

  stop() {
    this.state = "idle";
    this.yDoc = null;
    this.yObjMap = null;
    this.unlisten();
  }

  /**
   * Synchronize the store to the ydoc
   */
  flush() {
    if (this.state === "syncing" && this.yDoc && this.yObjMap) {
      const store = this.editor.store;
      for (const key in store.idIndex) {
        const obj = store.idIndex[key];
        this.yObjMap.set(key, objToYMap(obj));
      }
    }
  }

  applyTransaction(tx: Transaction) {
    if (!this.yObjMap || tx.mutations.length === 0) return;
    for (let i = 0; i < tx.mutations.length; i++) {
      const mutation = tx.mutations[i];
      switch (mutation.type) {
        case MutationType.CREATE: {
          const mut = mutation as CreateMutation;
          const yObj = objToYMap(mut.obj);
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
          const yObj = this.yObjMap.get(mut.obj.id);
          if (yParent && yObj) {
            yObj.set("parent", mut.parent.id);
            yObj.set(
              "parent:order",
              getParentOrder(this.yObjMap, mut.parent, mut.position)
            );
          }
          break;
        }
        case MutationType.REMOVE_CHILD: {
          const mut = mutation as RemoveChildMutation;
          const yParent = this.yObjMap.get(mut.parent.id);
          const yObj = this.yObjMap.get(mut.obj.id);
          if (yParent && yObj) {
            yObj.delete("parent");
            yObj.delete("parent:order");
          }
          break;
        }
        case MutationType.REORDER_CHILD: {
          const mut = mutation as ReorderChildMutation;
          const yParent = this.yObjMap.get(mut.parent.id);
          const yObj = this.yObjMap.get(mut.obj.id);
          if (yParent && yObj) {
            // TODO: parent order
          }
          break;
        }
      }
    }
  }

  unapplyTransaction(tx: Transaction) {
    if (!this.yObjMap || tx.mutations.length === 0) return;
    for (let i = tx.mutations.length - 1; i >= 0; i--) {
      const mutation = tx.mutations[i];
      switch (mutation.type) {
        case MutationType.CREATE: {
          const mut = mutation as CreateMutation;
          this.yObjMap.delete(mut.obj.id);
          break;
        }
        case MutationType.DELETE: {
          const mut = mutation as CreateMutation;
          const yObj = objToYMap(mut.obj);
          this.yObjMap.set(mut.obj.id, yObj);
          break;
        }
        case MutationType.ASSIGN: {
          const mut = mutation as AssignMutation;
          const yObj = this.yObjMap.get(mut.obj.id);
          if (yObj) {
            yObj.set(mut.field, mut.oldValue);
          }
          break;
        }
        case MutationType.ASSIGN_REF: {
          const mut = mutation as AssignRefMutation;
          const yObj = this.yObjMap.get(mut.obj.id);
          if (yObj && mut.oldValue) {
            yObj.set(mut.field, mut.oldValue.id);
          }
          break;
        }
        case MutationType.INSERT_CHILD: {
          const mut = mutation as InsertChildMutation;
          const yParent = this.yObjMap.get(mut.parent.id);
          const yObj = this.yObjMap.get(mut.obj.id);
          if (yParent && yObj) {
            yObj.delete("parent");
            yObj.delete("parent:order");
          }
          break;
        }
        case MutationType.REMOVE_CHILD: {
          const mut = mutation as RemoveChildMutation;
          const yParent = this.yObjMap.get(mut.parent.id);
          const yObj = this.yObjMap.get(mut.obj.id);
          if (yParent && yObj) {
            yObj.set("parent", mut.parent.id);
            yObj.set(
              "parent:order",
              getParentOrder(this.yObjMap, mut.parent, mut.position)
            );
          }
          break;
        }
        case MutationType.REORDER_CHILD: {
          const mut = mutation as ReorderChildMutation;
          const yParent = this.yObjMap.get(mut.parent.id);
          const yObj = this.yObjMap.get(mut.obj.id);
          if (yParent && yObj) {
            // TODO: parent order
          }
          break;
        }
      }
    }
  }

  listen() {
    this.disposables.push(
      this.editor.transform.onTransaction.addListener((tx) => {
        if (this.state == "syncing" && this.yDoc) {
          this.yDoc.transact(() => {
            this.applyTransaction(tx);
          });
        }
      })
    );

    this.disposables.push(
      this.editor.transform.onUndo.addListener((action) => {
        if (this.state == "syncing" && this.yDoc) {
          this.yDoc.transact(() => {
            for (let i = action.transactions.length - 1; i >= 0; i--) {
              const tx = action.transactions[i];
              this.unapplyTransaction(tx);
            }
          });
        }
      })
    );

    this.disposables.push(
      this.editor.transform.onRedo.addListener((action) => {
        if (this.state == "syncing" && this.yDoc) {
          this.yDoc.transact(() => {
            for (let i = 0; i < action.transactions.length; i++) {
              const tx = action.transactions[i];
              this.applyTransaction(tx);
            }
          });
        }
      })
    );

    const observeListener = (events: Y.YEvent<any>[], tr: any) => {
      if (this.yObjMap && !tr.local) {
        for (const event of events) {
          if (event.target === this.yObjMap) {
            const keys = [...(event as any).keysChanged];
            for (const key of keys) {
              const yObj = this.yObjMap.get(key);
              if (yObj) {
                // create
                console.log("create", key);
                if (!this.editor.store.getById(key)) {
                  const obj = yMapToObj(this.editor, yObj);
                  obj.resolveRefs(this.editor.store.idIndex);
                  this.editor.store.addToIndex(obj);
                  const parentId = yObj.get("parent");
                  const parent = this.editor.store.getById(parentId);
                  if (parent) {
                    obj.parent = parent;
                    const order = yObj.get("parent:order");
                    const yChildren = getYChildren(this.yObjMap, parentId);
                    const orders = yChildren.map((yChild) =>
                      yChild.get("parent:order")
                    );
                    const position = orders.findIndex((o) => o >= order);
                    parent.children.splice(position, 0, obj);
                  }
                  // TODO: remove this
                  if (obj instanceof Document) {
                    this.editor.store.setDoc(obj);
                  }
                  // TODO: remove this
                  if (obj instanceof Page) {
                    this.editor.setCurrentPage(obj);
                  }
                }
              } else {
                //delete
                console.log("delete", key);
                const obj = this.editor.store.getById(key);
                if (obj?.parent && Array.isArray(obj.parent.children)) {
                  obj.parent.children.splice(
                    obj.parent.children.indexOf(obj),
                    1
                  );
                  obj.parent = null;
                }
                if (obj) this.editor.store.removeFromIndex(obj);
              }
            }
          } else {
            // update
            const id = event.target.get("id");
            const obj = this.editor.store.getById(id);
            const yObj = this.yObjMap.get(id);
            if (obj && yObj) {
              const keys = [...(event as any).keysChanged];
              for (const key of keys) {
                const value = yObj.get(key);
                console.log(`update (${id}) : ${key}=${value}`);
                if (key === "parent") {
                  const parentId = yObj.get("parent");
                  const parent = this.editor.store.getById(parentId);
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
        }
        this.editor.repaint();
      }
    };

    if (this.yObjMap) {
      this.yObjMap.observeDeep(observeListener);
      this.disposables.push({
        dispose: () => {
          if (this.yObjMap) this.yObjMap.unobserveDeep(observeListener);
        },
      });
    }
  }

  unlisten() {
    this.disposables.forEach((d) => d.dispose());
    this.disposables = [];
  }
}
