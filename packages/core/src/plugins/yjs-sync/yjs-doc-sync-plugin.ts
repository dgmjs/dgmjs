import * as Y from "yjs";
import { Editor, Plugin } from "../../editor";
import { Document, Page } from "../../shapes";
import { Disposable } from "../../std/typed-event";
import { YStore } from "./yjs-utils";
import { handleYjsObserveDeep } from "./sync-to-store";
import {
  handleApplyTransaction,
  objToYObj,
  handleUnapplyTransaction,
} from "./sync-to-ydoc";

export class YjsDocSyncPlugin extends Plugin {
  editor: Editor = null!;
  state: "idle" | "syncing";
  yDoc: Y.Doc | null;
  yStore: YStore | null;
  disposables: Disposable[] = [];

  constructor() {
    super("dgmjs/yjs-doc-sync");
    this.state = "idle";
    this.yDoc = null;
    this.yStore = null;
  }

  activate(editor: Editor) {
    this.editor = editor;
  }

  deactivate(editor: Editor) {}

  start(yDoc: Y.Doc) {
    this.state = "syncing";
    this.yDoc = yDoc;
    this.yStore = this.yDoc.getMap("store");
    this.watch();

    this.logChanges();
  }

  stop() {
    this.state = "idle";
    this.yDoc = null;
    this.yStore = null;
    this.unwatch();
  }

  /**
   * Synchronize the store to the ydoc
   */
  flush() {
    if (this.state === "syncing" && this.yDoc && this.yStore) {
      const store = this.editor.store;
      for (const key in store.idIndex) {
        const obj = store.idIndex[key];
        this.yStore.set(key, objToYObj(this.yStore, obj, true));
      }
    }
  }

  watch() {
    // handle transaction
    this.disposables.push(
      this.editor.transform.onTransaction.addListener((tx) => {
        if (this.state == "syncing" && this.yDoc && this.yStore) {
          this.yDoc.transact(() => {
            handleApplyTransaction(tx, this.yStore!);
          });
        }
      })
    );

    // handle undo
    this.disposables.push(
      this.editor.transform.onUndo.addListener((action) => {
        if (this.state == "syncing" && this.yDoc && this.yStore) {
          this.yDoc.transact(() => {
            for (let i = action.transactions.length - 1; i >= 0; i--) {
              const tx = action.transactions[i];
              handleUnapplyTransaction(tx, this.yStore!);
            }
          });
        }
      })
    );

    // handle redo
    this.disposables.push(
      this.editor.transform.onRedo.addListener((action) => {
        if (this.state == "syncing" && this.yDoc && this.yStore) {
          this.yDoc.transact(() => {
            for (let i = 0; i < action.transactions.length; i++) {
              const tx = action.transactions[i];
              handleApplyTransaction(tx, this.yStore!);
            }
          });
        }
      })
    );

    // handle yjs observe deep
    const observeListener = (events: Y.YEvent<any>[], tr: any) => {
      if (this.yStore && !tr.local) {
        const createdObjs = handleYjsObserveDeep(
          this.editor.store,
          this.yStore,
          events
        );
        // TODO: fix this
        createdObjs.forEach((obj) => {
          if (obj instanceof Document) {
            this.editor.store.setDoc(obj);
          }
          if (!this.editor.currentPage && obj instanceof Page) {
            this.editor.setCurrentPage(obj);
          }
        });
        this.editor.repaint();
      }
    };
    if (this.yStore) {
      this.yStore.observeDeep(observeListener);
      this.disposables.push({
        dispose: () => {
          if (this.yStore) this.yStore.unobserveDeep(observeListener);
        },
      });
    }
  }

  logChanges() {
    if (this.yStore) {
      this.yStore.observeDeep((events, tr) => {
        for (const event of events) {
          if (event.target === this.yStore) {
            event.changes.keys.forEach((change, key) => {
              if (change.action === "add") {
                console.log(`[objMap] add: ${key}`);
              } else if (change.action === "delete") {
                console.log(`[objMap] delete: ${key}`);
              } else if (change.action === "update") {
                console.log(
                  `[objMap] update: ${key}, old value: ${change.oldValue}`
                );
              }
            });
          } else {
            event.changes.keys.forEach((change, key) => {
              if (change.action === "add") {
                console.log(`[obj] add: ${key}`);
              } else if (change.action === "delete") {
                console.log(`[obj] delete: ${key}`);
              } else if (change.action === "update") {
                console.log(
                  `[obj] update: ${key} - ${
                    change.oldValue
                  } --> ${event.target.get(key)}`
                );
              }
            });
          }
        }
      });
    }
  }

  unwatch() {
    this.disposables.forEach((d) => d.dispose());
    this.disposables = [];
  }
}
