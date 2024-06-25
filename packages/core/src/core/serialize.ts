import { generateId } from "../std/id";
import { Instantiator } from "./instantiator";
import type { Obj } from "./obj";

/**
 * Put shapes to the given buffer
 */
export function serialize(objs: Obj[]): any[] {
  let buffer: any[] = [];
  // filter all descendants of one of the object
  let filteredObjs = [];
  for (let obj of objs) {
    if (!objs.some((s) => s.isDescendant(obj))) filteredObjs.push(obj);
  }
  // put objects to buffer
  filteredObjs.forEach((s) => {
    const json = s.toJSON(true);
    buffer.push(json);
  });
  return buffer;
}

/**
 * Get cloned shapes from the given buffer
 */
export function deserialize(instantiator: Instantiator, buffer: any[]): Obj[] {
  // copy objects
  const idMap: Record<string, Obj> = {};
  const objs = buffer.map((json) => {
    const obj = instantiator.createFromJson(json) as Obj;
    obj.traverse((s) => (idMap[s.id] = s));
    return obj;
  });
  // resolve refs and reassign ids
  for (let obj of objs) {
    obj.traverse((s) => s?.resolveRefs(idMap, true));
    obj.traverse((s) => (s.id = generateId()));
    obj.parent = null;
  }
  return objs;
}
