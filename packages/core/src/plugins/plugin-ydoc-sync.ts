import * as Y from "yjs";
import { Editor, Plugin } from "../editor";
import { Box, Document, Page, Shape } from "../shapes";
import { Obj } from "../core/obj";
import {
  AssignMutation,
  InsertMutation,
  MutationType,
} from "../transform/mutations";

interface YDocSyncPluginOptions {
  yDoc: Y.Doc;
}

export class YDocSyncPlugin implements Plugin {
  editor: Editor = null!;
  yDoc: Y.Doc;
  yXmlRoot: Y.XmlFragment;
  XmlMap: Map<string, Y.XmlElement> = new Map();

  constructor(options: YDocSyncPluginOptions) {
    this.yDoc = options.yDoc;
    this.yXmlRoot = this.yDoc.getXmlElement("xml:root");
    this.yXmlRoot.observeDeep((events) => {
      events.forEach((event) => {
        const added = [...event.changes.added];
        const deleted = [...event.changes.deleted];
        console.log("yEvent", event);
        if (added.length > 0) {
          console.log(
            "yEvent addded changes",
            (added[0].content as any).type.toJSON()
          );
        }
        if (deleted.length > 0) {
          console.log(
            "yEvent deleted changes",
            (deleted[0].content as any).type.toJSON()
          );
        }
      });
    });
  }

  activate(editor: Editor) {
    console.log("activate");
    this.editor = editor;
  }

  deactivate(editor: Editor) {}

  objToXml(obj: Obj): Y.XmlElement {
    const xml = new Y.XmlElement();
    xml.nodeName = obj.type;
    xml.setAttribute("id", obj.id);
    if (obj instanceof Shape) {
      xml.setAttribute("name", obj.name);
      xml.setAttribute("description", obj.description);
      xml.setAttribute("proto", obj.proto.toString());
      xml.setAttribute("tags", JSON.stringify(obj.tags));
      xml.setAttribute("enable", obj.enable.toString());
      xml.setAttribute("visible", obj.visible.toString());
      xml.setAttribute("movable", obj.movable.toString());
      xml.setAttribute("sizable", obj.sizable.toString());
      xml.setAttribute("rotatable", obj.rotatable.toString());
      xml.setAttribute("containable", obj.containable.toString());
      xml.setAttribute("containableFilter", obj.containableFilter);
      xml.setAttribute("connectable", obj.connectable.toString());
      xml.setAttribute("left", obj.left.toString());
      xml.setAttribute("top", obj.top.toString());
      xml.setAttribute("width", obj.width.toString());
      xml.setAttribute("height", obj.height.toString());
      xml.setAttribute("rotate", obj.rotate.toString());
      xml.setAttribute("strokeColor", obj.strokeColor);
      xml.setAttribute("strokeWidth", obj.strokeWidth.toString());
      xml.setAttribute("strokePattern", JSON.stringify(obj.strokePattern));
      xml.setAttribute("fillColor", obj.fillColor);
      xml.setAttribute("fillStyle", obj.fillStyle);
      xml.setAttribute("fontColor", obj.fontColor);
      xml.setAttribute("fontFamily", obj.fontFamily);
      xml.setAttribute("fontSize", obj.fontSize.toString());
      xml.setAttribute("fontStyle", obj.fontStyle);
      xml.setAttribute("fontWeight", obj.fontWeight.toString());
      xml.setAttribute("opacity", obj.opacity.toString());
      xml.setAttribute("roughness", obj.roughness.toString());
      xml.setAttribute("link", obj.link);
      xml.setAttribute("constraints", JSON.stringify(obj.constraints));
      xml.setAttribute("properties", JSON.stringify(obj.properties));
      xml.setAttribute("scripts", JSON.stringify(obj.scripts));
    }
    if (obj instanceof Document) {
    }
    if (obj instanceof Page) {
    }
    if (obj instanceof Box) {
    }
    const childrenXml = obj.children.map((child) => this.objToXml(child));
    xml.insert(xml.length, childrenXml);
    return xml;
  }

  traverseXml(xml: Y.XmlElement, callback: (xml: Y.XmlElement) => void) {
    callback(xml);
    for (let i = 0; i < xml.length; i++) {
      this.traverseXml(xml.get(i) as Y.XmlElement, callback);
    }
  }

  findXml(xml: Y.XmlElement, id: string): Y.XmlElement | null {
    let found = null;
    this.traverseXml(xml, (node) => {
      if (node.getAttribute("id") === id) {
        found = node;
      }
    });
    return found;
  }

  synchronize() {
    this.editor.transform.onMutate.addListener((mutation) => {
      console.log("mutation", mutation);
      switch (mutation.type) {
        case MutationType.ASSIGN: {
          const mut = mutation as AssignMutation;
          const objXml = this.findXml(
            this.yXmlRoot.get(0) as Y.XmlElement,
            mut.obj.id
          );
          if (objXml) {
            objXml.setAttribute(mut.field, mut.newValue.toString());
          }
          break;
        }
        case MutationType.ASSIGN_REF: {
          break;
        }
        case MutationType.INSERT: {
          console.log("mutation", mutation.type);
          const mut = mutation as InsertMutation;
          const parent = mut.obj.parent;
          if (parent) {
            const objXml = this.objToXml(mut.obj);
            const parentXml = this.findXml(
              this.yXmlRoot.get(0) as Y.XmlElement,
              parent.id
            );

            console.log("objXml", objXml.toJSON());
            console.log("parentXml", parentXml?.toJSON());

            if (parentXml) {
              parentXml.push([objXml]);
            }
            // find xml parent
            // insert yobj to parent at the last
          }
          break;
        }
        case MutationType.DELETE: {
          break;
        }
        case MutationType.INSERT_TO_ARRAY: {
          break;
        }
        case MutationType.REMOVE_FROM_ARRAY: {
          break;
        }
        case MutationType.REORDER_IN_ARRAY: {
          break;
        }
      }
    });

    const doc: Document = this.editor.store.doc as Document;
    const docXml = this.objToXml(doc);
    this.yXmlRoot.insert(0, [docXml]);
    console.log(docXml.toJSON());
  }

  push() {
    // this.todos.push([Date.now().toString()]);
    // const item = new Y.XmlElement();
    // item.nodeName = Date.now().toString();
    // this.xml.insert(0, [item]);
  }
}
