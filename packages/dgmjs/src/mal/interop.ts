import type { MalType } from "./types";
import {
  MalBoolean,
  MalFunction,
  MalJSObject,
  MalNil,
  MalNumber,
  MalString,
  MalVector,
  Node,
} from "./types";

/**
 * Convert js-type to mal-type
 */
export function js_to_mal(v: any): MalType {
  switch (typeof v) {
    case "number":
      return new MalNumber(v);
    case "boolean":
      return new MalBoolean(v);
    case "string":
      return new MalString(v);
    case "object":
      if (v === null) {
        return MalNil.instance;
      } else if (Array.isArray(v)) {
        return new MalVector(v.map((i) => js_to_mal(i)));
      } else {
        return new MalJSObject(v);
      }
    case "function":
      return MalFunction.fromBootstrap((...args) => {
        const r = v(...args.map((i) => mal_to_js(i)));
        return js_to_mal(r);
      });
    default:
      return MalNil.instance;
  }
}

/**
 * Convert mal-type to js-type
 */
export function mal_to_js(v: MalType): any {
  switch (v.type) {
    case Node.Number:
      return v.v;
    case Node.Boolean:
      return v.v;
    case Node.String:
      return v.v;
    case Node.Nil:
      return null;
    case Node.Symbol:
      return v.v;
    case Node.Keyword:
      return v.v;
    case Node.Vector:
      return v.list.map((i) => mal_to_js(i));
    case Node.List:
      return v.list.map((i) => mal_to_js(i));
    case Node.Function:
      return v.func;
    case Node.HashMap:
      let map: Record<string, any> = {};
      v.entries().forEach((entry) => {
        const key: string = mal_to_js(entry[0]);
        map[key] = mal_to_js(entry[1]);
      });
      return map;
    case Node.Atom:
      return v.v;
    case Node.JSObject:
      return (v as MalJSObject).obj;
    default:
      return null;
  }
}
