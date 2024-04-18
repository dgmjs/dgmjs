import * as Y from "yjs";
import { Editor, Plugin } from "../editor";
import { Box, Document, Page, Shape } from "../shapes";
import { Obj } from "../core/obj";
import {
  AssignMutation,
  AssignRefMutation,
  CreateMutation,
  InsertChildMutation,
  MutationType,
} from "../transform/mutations";

interface YDocSyncPluginOptions {
  yDoc: Y.Doc;
}

export class YDocSyncPlugin implements Plugin {
  editor: Editor = null!;
  yDoc: Y.Doc;
  yObjMap: Y.Map<Y.Map<any>>;

  constructor(options: YDocSyncPluginOptions) {
    this.yDoc = options.yDoc;
    this.yObjMap = this.yDoc.getMap("objmap");
  }

  activate(editor: Editor) {
    console.log("activate");
    this.editor = editor;
    this.editor.transform.onMutate.addListener((mutation) => {
      switch (mutation.type) {
        case MutationType.CREATE: {
          console.log("mutation", mutation.type);
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
          break;
        }
        case MutationType.REORDER_CHILD: {
          break;
        }
      }
    });

    this.yObjMap.observeDeep((events) => {
      events.forEach((event: any) => {
        if (event.target === this.yObjMap) {
          const keys = [...event.keysChanged];
          for (const key of keys) {
            const yObj = this.yObjMap.get(key);
            if (yObj) {
              // create
              if (!this.editor.store.getById(key)) {
                const obj = this.yMapToObj(yObj);

                console.log("created obj", obj);

                this.editor.store.addToIndex(obj);
                const parentId = yObj.get("parent");
                const parent = this.editor.store.getById(parentId);
                if (parent) {
                  parent.children.push(obj);
                  obj.parent = parent;
                }

                if (obj instanceof Document) {
                  this.editor.store.doc = obj;
                }
                if (obj instanceof Page) {
                  this.editor.setCurrentPage(obj);
                }

                console.log("event:create", key);
              }
            } else {
              //delete
              const obj = this.editor.store.getById(key);
              if (obj) this.editor.store.removeFromIndex(obj);
              console.log("event:delete", key);
            }
          }
        } else {
          const id = event.target.get("id");
          const obj = this.editor.store.getById(id);
          const yObj = this.yObjMap.get(id);
          if (obj && yObj) {
            const keys = [...event.keysChanged];
            for (const key of keys) {
              if (key === "parent") {
                const parentId = yObj.get("parent");
                const parent = this.editor.store.getById(parentId);
                console.log("event:update-parent", key, parentId);
                if (parent) {
                  parent.children.push(obj);
                  obj.parent = parent;
                }
              } else {
                const value = yObj.get(key);
                (obj as any)[key] = value;
                console.log("event:update", key, id);
              }
            }
          }
        }
      });
      this.editor.repaint();
    });
  }

  deactivate(editor: Editor) {}

  yMapToObj(yMap: Y.Map<any>): Obj {
    const id = yMap.get("id");
    const type = yMap.get("type");
    const json: any = { id, type };
    if (type === "Box") {
      json.name = yMap.get("name");
      json.description = yMap.get("description");
      json.proto = yMap.get("proto");
      // json.tags = []; // JSON.parse(yMap.get("tags"));
      json.enable = yMap.get("enable");
      json.visible = yMap.get("visible");
      json.movable = yMap.get("movable");
      json.sizable = yMap.get("sizable");
      json.rotatable = yMap.get("rotatable");
      json.containable = yMap.get("containable");
      json.containableFilter = yMap.get("containableFilter");
      json.connectable = yMap.get("connectable");
      json.left = yMap.get("left");
      json.top = yMap.get("top");
      json.width = yMap.get("width");
      json.height = yMap.get("height");
      json.rotate = yMap.get("rotate");
      json.strokeColor = yMap.get("strokeColor");
      json.strokeWidth = yMap.get("strokeWidth");
      // json.strokePattern = []; // JSON.parse(yMap.get("strokePattern"));
      json.fillColor = yMap.get("fillColor");
      json.fillStyle = yMap.get("fillStyle");
      json.fontColor = yMap.get("fontColor");
      json.fontFamily = yMap.get("fontFamily");
      json.fontSize = yMap.get("fontSize");
      json.fontStyle = yMap.get("fontStyle");
      json.fontWeight = yMap.get("fontWeight");
      json.opacity = yMap.get("opacity");
      json.roughness = yMap.get("roughness");
      json.link = yMap.get("link");
      // json.constraints = []; // JSON.parse(yMap.get("constraints"));
      // json.properties = []; // JSON.parse(yMap.get("properties"));
      // json.scripts = []; // JSON.parse(yMap.get("scripts"));
    }
    return this.editor.store.instantiator.createFromJson(json)!;
  }

  objToYMap(obj: Obj): Y.Map<any> {
    const yMap = new Y.Map();
    yMap.set("id", obj.id);
    yMap.set("type", obj.type);
    yMap.set("parent", obj.parent?.id);
    if (obj instanceof Shape) {
      yMap.set("name", obj.name);
      yMap.set("description", obj.description);
      yMap.set("proto", obj.proto.toString());
      yMap.set("tags", JSON.stringify(obj.tags));
      yMap.set("enable", obj.enable);
      yMap.set("visible", obj.visible);
      yMap.set("movable", obj.movable);
      yMap.set("sizable", obj.sizable);
      yMap.set("rotatable", obj.rotatable);
      yMap.set("containable", obj.containable);
      yMap.set("containableFilter", obj.containableFilter);
      yMap.set("connectable", obj.connectable);
      yMap.set("left", obj.left);
      yMap.set("top", obj.top);
      yMap.set("width", obj.width);
      yMap.set("height", obj.height);
      yMap.set("rotate", obj.rotate);
      yMap.set("strokeColor", obj.strokeColor);
      yMap.set("strokeWidth", obj.strokeWidth);
      yMap.set("strokePattern", JSON.stringify(obj.strokePattern));
      yMap.set("fillColor", obj.fillColor);
      yMap.set("fillStyle", obj.fillStyle);
      yMap.set("fontColor", obj.fontColor);
      yMap.set("fontFamily", obj.fontFamily);
      yMap.set("fontSize", obj.fontSize);
      yMap.set("fontStyle", obj.fontStyle);
      yMap.set("fontWeight", obj.fontWeight);
      yMap.set("opacity", obj.opacity);
      yMap.set("roughness", obj.roughness);
      yMap.set("link", obj.link);
      yMap.set("constraints", JSON.stringify(obj.constraints));
      yMap.set("properties", JSON.stringify(obj.properties));
      yMap.set("scripts", JSON.stringify(obj.scripts));
    }
    if (obj instanceof Document) {
    }
    if (obj instanceof Page) {
    }
    if (obj instanceof Box) {
    }
    return yMap;
  }

  synchronize() {
    const store = this.editor.store;
    for (const key in store.idIndex) {
      const obj = store.idIndex[key];
      this.yObjMap.set(key, this.objToYMap(obj));
    }
  }

  push() {
    // this.todos.push([Date.now().toString()]);
    // const item = new Y.XmlElement();
    // item.nodeName = Date.now().toString();
    // this.xml.insert(0, [item]);
  }
}
