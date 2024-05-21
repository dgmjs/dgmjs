/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

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

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json: any = {};
    json.id = this.id;
    json.type = this.type;
    json.parent = this.parent ? this.parent.id : null;
    if (recursive) {
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
    if (this.parent) {
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

export function filterDescendants(objs: Obj[]): Obj[] {
  let filtered: Obj[] = [];
  for (let obj of objs) {
    if (!objs.some((o) => o.isDescendant(obj))) filtered.push(obj);
  }
  return filtered;
}
