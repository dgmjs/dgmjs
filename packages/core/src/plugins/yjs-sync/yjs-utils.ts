import * as Y from "yjs";
import { Editor } from "../../editor";
import { Obj } from "../../core/obj";

export function yMapToObj(editor: Editor, yMap: Y.Map<any>): Obj {
  const json = yMap.toJSON();
  return editor.store.instantiator.createFromJson(json)!;
}

export function objToYMap(obj: Obj): Y.Map<any> {
  const json = obj.toJSON();
  const yMap = new Y.Map();
  for (const key in json) {
    yMap.set(key, json[key]);
  }
  return yMap;
}
