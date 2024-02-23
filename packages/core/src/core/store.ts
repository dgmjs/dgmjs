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

import { Instantiator } from "./instantiator";
import type { Obj } from "./obj";

type StoreOptions = {
  objInitializer?: (obj: Obj) => void;
  objFinalizer?: (obj: Obj) => void;
};

/**
 * Object store
 * - access to all objects
 * - manage index for objects
 */
export class Store {
  /**
   * Shape instantiator
   */
  instantiator: Instantiator;

  options: StoreOptions;

  /**
   * Index for object.id
   */
  idIndex: Record<string, Obj>;

  /**
   * this root object
   */
  root: Obj | null;

  constructor(instantiator: Instantiator, options?: StoreOptions) {
    this.instantiator = instantiator;
    this.options = options || {};
    this.idIndex = {};
    this.root = null;
  }

  /**
   * Clear the store
   */
  clear() {
    this.idIndex = {};
    this.root = null;
  }

  /**
   * Add to index for the object (with all descendants)
   */
  addToIndex(obj: Obj) {
    if (obj) {
      obj.traverse((o) => {
        this.idIndex[o.id] = o;
        if (this.options.objInitializer) {
          this.options.objInitializer(o);
        }
      });
    }
  }

  /**
   * Remove from index for the object (with all descendants)
   */
  removeFromIndex(obj: Obj) {
    if (obj) {
      obj.traverse((o) => {
        delete this.idIndex[o.id];
        if (this.options.objFinalizer) {
          this.options.objFinalizer(o);
        }
      });
    }
  }

  /**
   * Get an object by id
   */
  getById(id: string): Obj | null {
    return this.idIndex[id];
  }

  /**
   * Test shape is exists in the store or not
   */
  has(obj: Obj): boolean {
    if (this.root?.find((s) => s === obj) && this.getById(obj.id)) return true;
    return false;
  }

  /**
   * Return JSON of the root
   */
  toJSON(): any {
    return this.root ? this.root.toJSON(true) : null;
  }

  /**
   * Set the root from JSON
   */
  fromJSON(json: any) {
    this.root = this.instantiator.createFromJson(json);
    if (this.root) {
      this.idIndex = {};
      this.addToIndex(this.root);
    }
  }

  /**
   * Set the root object
   */
  setRoot(obj: Obj) {
    this.root = obj;
    this.addToIndex(obj);
  }
}
