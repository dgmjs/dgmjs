import { generateId } from "../std/id";
import type { Obj } from "./obj";

export type InstantiatorFun = () => Obj;

/**
 * Object instantiator
 */
export class Instantiator {
  fnMap: Record<string, InstantiatorFun>;

  constructor(instantiators?: Record<string, InstantiatorFun>) {
    this.fnMap = instantiators ?? {};
  }

  register(type: string, fn: InstantiatorFun) {
    this.fnMap[type] = fn;
  }

  createFromJson(json: any): Obj | null {
    if (json && json.type) {
      const fn = this.fnMap[json.type];
      if (fn) {
        let obj = fn();
        obj.fromJSON(json);
        if (Array.isArray(json.children)) {
          obj.children = json.children.map((o: any) => this.createFromJson(o));
        }
        // resolve refs
        const idMap: Record<string, Obj> = {};
        obj.traverse((o) => {
          idMap[o.id] = o;
        });
        obj.traverse((o) => {
          o.resolveRefs(idMap, false); // don't assign null for next resolve
        });
        return obj;
      } else {
        throw new Error(`No registered type "${json.type}" in factory`);
      }
    }
    return null;
  }

  /**
   * Reassign ids to shape itself with all descendants
   */
  reassignIds(obj: Obj) {
    obj.traverse((s) => (s.id = generateId()));
  }

  /**
   * Clone an shape with all new ids
   */
  clone(obj: Obj): Obj {
    const json = obj.toJSON(true);
    const clone = this.createFromJson(json) as Obj;
    clone.parent = null;
    this.reassignIds(clone);
    return clone;
  }
}
