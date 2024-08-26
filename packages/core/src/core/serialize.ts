import { generateId } from "../std/id";
import type { Store } from "./store";
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
 * Get cloned shapes from the given buffer.
 * @param store
 * @param buffer buffer contains serialized objs.
 * @param extractOuterRefMap A function to extract outer refs of the objs
 * deserialized by buffer. Note that outer refs will not be resolved in default,
 * but they are resolved only if this parameter is provided.
 */
export function deserialize(
  store: Store,
  buffer: any[],
  extractOuterRefMap?: (store: Store, objs: Obj[]) => Record<string, Obj>
): Obj[] {
  // copy objects
  const idMap: Record<string, Obj> = {};
  const objs = buffer.map((json) => {
    const obj = store.instantiator.createFromJson(json) as Obj;
    obj.traverse((s) => (idMap[s.id] = s));
    return obj;
  });
  // extract outer refs to be resolved
  if (extractOuterRefMap) {
    const outerRefMap = extractOuterRefMap(store, objs);
    Object.assign(idMap, outerRefMap);
  }
  // resolve refs and reassign ids
  for (let obj of objs) {
    obj.traverse((s) => s.resolveRefs(idMap, true));
    obj.traverse((s) => (s.id = generateId()));
    obj.parent = null;
  }
  return objs;
}
