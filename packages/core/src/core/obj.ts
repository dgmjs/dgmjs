import { generateId } from "../std/id";

/**
 * Base object.
 * 1. have unique id
 * 2. have parent and children
 * 3. can be serialized (store and copy-paste)
 * 4. can be traversed
 */
export class Obj {
  id: string;
  type: string;
  parent: Obj | null;
  children: Obj[];

  constructor() {
    this.id = generateId();
    this.type = "Obj";
    this.parent = null;
    this.children = [];
  }

  /**
   * Set a field in the JSON object only if the value is defined and not equal to the default value.
   * @param json The JSON object to set the field in.
   * @param field The field name to set.
   * @param value The value to set.
   * @param defaultValue The default value to compare against.
   * @param enforce If true, the field will be set even if it is equal to the default value.
   */
  setJson(
    json: any,
    field: string,
    value: any,
    defaultValue: any,
    enforce: boolean = false
  ) {
    if (typeof value !== "undefined") {
      if (enforce) {
        json[field] = structuredClone(value);
        return;
      }
      const isDefault = JSON.stringify(value) === JSON.stringify(defaultValue);
      if (!isDefault) {
        json[field] = structuredClone(value);
      }
    }
  }

  /**
   * Read an any value from the JSON object,
   * return defaultValue if the field is undefined.
   */
  readAny(json: any, field: string, defaultValue: any): any {
    if (typeof json[field] !== "undefined") {
      return json[field];
    }
    return defaultValue;
  }

  /**
   * Read an array of any value from the JSON object,
   * return defaultValue if the field is not an array.
   */
  readArrayAny(json: any, field: string, defaultValue: any[]): any[] {
    if (Array.isArray(json[field])) {
      return json[field];
    }
    return defaultValue;
  }

  /**
   * Read a number field from the JSON object,
   * return defaultValue if the field is not a number.
   */
  readNumber(json: any, field: string, defaultValue: number): number {
    if (typeof json[field] !== "number") {
      return defaultValue;
    }
    return json[field];
  }

  /**
   * Read a number field from the JSON object,
   * return defaultValue if the field is not a number.
   */
  readArrayNumber(
    json: any,
    field: string,
    defaultValue: number[],
    length?: number
  ): number[] {
    if (json[field] === null) {
      return null as any;
    }
    if (
      !Array.isArray(json[field]) ||
      !json[field].every((v: any) => typeof v === "number")
    ) {
      return defaultValue;
    }
    if (typeof length === "number" && json[field].length !== length) {
      return defaultValue;
    }
    return json[field];
  }

  /**
   * Read a string field from the JSON object,
   * return defaultValue if the field is not a string.
   */
  readString(json: any, field: string, defaultValue: string): string {
    if (typeof json[field] !== "string") {
      return defaultValue;
    }
    return json[field];
  }

  /**
   * Read an array of string from the JSON object,
   * return defaultValue if the field is not an array of string.
   */
  readArrayString(json: any, field: string, defaultValue: string[]): string[] {
    if (
      !Array.isArray(json[field]) ||
      !json[field].every((v: any) => typeof v === "string")
    ) {
      return defaultValue;
    }
    return json[field];
  }

  /**
   * Read a boolean field from the JSON object,
   * return defaultValue if the field is not a boolean.
   */
  readBoolean(json: any, field: string, defaultValue: boolean): boolean {
    if (typeof json[field] !== "boolean") {
      return defaultValue;
    }
    return json[field];
  }

  /**
   * Read an array of boolean from the JSON object,
   * return defaultValue if the field is not an array of boolean.
   */
  readArrayBoolean(
    json: any,
    field: string,
    defaultValue: boolean[],
    length?: number
  ): boolean[] {
    if (
      !Array.isArray(json[field]) ||
      !json[field].every((v: any) => typeof v === "boolean")
    ) {
      return defaultValue;
    }
    if (typeof length === "number" && json[field].length !== length) {
      return defaultValue;
    }
    return json[field];
  }

  /**
   * Read a color field from the JSON object,
   * return defaultValue if the field is not a string or not a valid color.
   */
  readColor(json: any, field: string, defaultValue: string): string {
    const val = json[field];
    if (
      typeof val === "string" &&
      (val.startsWith("#") || val.startsWith("$"))
    ) {
      return val;
    }
    return defaultValue;
  }

  /**
   * Read an enum value from the JSON object,
   * return defaultValue if the field is not a valid enum value.
   */
  readEnum(
    json: any,
    field: string,
    enumType: any,
    defaultValue: string
  ): string {
    const literals = Object.values(enumType);
    if (literals.includes(json[field])) {
      return json[field];
    }
    return defaultValue;
  }

  /**
   * Read a reference to object from the JSON object,
   * return defaultValue if the field is not string (obj's id) or null.
   */
  readRef(json: any, field: string): Obj | string | null {
    if (json[field] instanceof Obj) {
      return json[field];
    }
    if (typeof json[field] === "string" || json[field] === null) {
      return json[field];
    }
    return null;
  }

  /**
   * Read a point value from the JSON object,
   * return defaultValue if the field is not a point.
   */
  readPoint(
    json: any,
    field: string,
    defaultValue: [number, number]
  ): [number, number] {
    if (
      Array.isArray(json[field]) &&
      json[field].length === 2 &&
      typeof json[field][0] === "number" &&
      typeof json[field][1] === "number"
    ) {
      return [json[field][0], json[field][1]];
    }
    return defaultValue;
  }

  /**
   * Read a point or null value from the JSON object,
   * return defaultValue if the field is not a point or null.
   */
  readPointOrNull(
    json: any,
    field: string,
    defaultValue: [number, number] | null
  ): [number, number] | null {
    if (json[field] === null) {
      return null;
    }
    if (
      Array.isArray(json[field]) &&
      json[field].length === 2 &&
      typeof json[field][0] === "number" &&
      typeof json[field][1] === "number"
    ) {
      return [json[field][0], json[field][1]];
    }
    return defaultValue;
  }

  /**
   * Read a, array of point value from the JSON object,
   * return defaultValue if the field is not an array of point.
   */
  readArrayPoint(
    json: any,
    field: string,
    defaultValue: [number, number][]
  ): [number, number][] {
    if (
      Array.isArray(json[field]) &&
      json[field].every(
        (p: any) =>
          Array.isArray(p) &&
          p.length === 2 &&
          typeof p[0] === "number" &&
          typeof p[1] === "number"
      )
    ) {
      return json[field].map((p: any) => [p[0], p[1]]);
    }
    return defaultValue;
  }

  /**
   * Serialize to JSON object
   * @param recursive recursively serialize children
   * @param keepRefs keep references as object (for undo-redo)
   * @param enforce
   */
  toJSON(
    recursive: boolean = false,
    keepRefs: boolean = false,
    enforce: boolean = false
  ): any {
    const json: any = {};
    json.id = this.id;
    json.type = this.type;
    json.parent = this.parent ? this.parent.id : null;
    if (recursive && this.children.length > 0) {
      json.children = this.children.map((c) => c.toJSON(recursive));
    }
    if (keepRefs) {
      json.parent = this.parent;
    }
    return json;
  }

  fromJSON(json: any) {
    this.id = json.id ?? this.id;
    this.parent = json.parent ?? this.parent;
  }

  /**
   * Resolve references
   * @param idMap id to object map
   * @param nullIfNotFound assign null if not found
   */
  resolveRefs(idMap: Record<string, Obj>, nullIfNotFound: boolean = false) {
    if (typeof this.parent === "string") {
      if (idMap[this.parent]) {
        this.parent = idMap[this.parent];
      } else if (nullIfNotFound) {
        this.parent = null;
      }
    }
  }

  /**
   * Traverse all objects in breath-first order
   */
  traverse(
    fun: (obj: Obj, parent: Obj | null) => void,
    parent: Obj | null = null
  ) {
    fun(this, parent);
    for (let i = this.children.length - 1; i >= 0; i--) {
      const s = this.children[i];
      s.traverse(fun, this);
    }
  }

  /**
   * Traverse all shapes in depth-first order
   */
  traverseDepthFirst(
    fun: (obj: Obj, parent: Obj | null) => void,
    parent: Obj | null = null
  ) {
    for (let i = this.children.length - 1; i >= 0; i--) {
      const s = this.children[i];
      s.traverseDepthFirst(fun, this);
    }
    fun(this, parent);
  }

  /**
   * Returns an array of shapes in order of traverse sequence.
   */
  traverseSequence(): Obj[] {
    let r: Obj[] = [];
    this.traverse((s) => r.push(s));
    return r;
  }

  /**
   * Returns an array of shapes in order of traverse sequence.
   */
  traverseDepthFirstSequence(): Obj[] {
    let r: Obj[] = [];
    this.traverseDepthFirst((s) => r.push(s));
    return r;
  }

  /**
   * Find an shape in breath-first order
   */
  find(pred: (obj: Obj) => boolean): Obj | null {
    if (pred(this)) return this;
    for (let i = this.children.length - 1; i >= 0; i--) {
      const s = this.children[i];
      const r = s.find(pred);
      if (r) return r;
    }
    return null;
  }

  /**
   * Find an shape in depth-first order
   */
  findDepthFirst(pred: (obj: Obj) => boolean): Obj | null {
    for (let i = this.children.length - 1; i >= 0; i--) {
      const s = this.children[i];
      const r = s.findDepthFirst(pred);
      if (r) return r;
    }
    if (pred(this)) return this;
    return null;
  }

  /**
   * Find a shape along with the parent-chain
   */
  findParent(pred: (obj: Obj) => boolean): Obj | null {
    if (this.parent instanceof Obj) {
      return pred(this.parent) ? this.parent : this.parent.findParent(pred);
    }
    return null;
  }

  /**
   * Test whether the given shape is a descendant
   */
  isDescendant(obj: Obj): boolean {
    return !!this.find((s) => s !== this && s === obj);
  }
}

/**
 * Filter out descendants from the given objects
 */
export function filterDescendants(objs: Obj[]): Obj[] {
  let filtered: Obj[] = [];
  for (let obj of objs) {
    if (!objs.some((o) => o.isDescendant(obj))) filtered.push(obj);
  }
  return filtered;
}
