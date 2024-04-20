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

import { TypedEvent } from "../std/typed-event";
import { convertToLatestVersion } from "../utils/document-compatibility";
import { Instantiator } from "./instantiator";
import type { Obj } from "./obj";
import { Transaction } from "./transaction";

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
   * this document object
   */
  doc: Obj | null;

  /**
   * Event emitter for transaction
   */
  onTransaction: TypedEvent<Transaction> = new TypedEvent();

  constructor(instantiator: Instantiator, options?: StoreOptions) {
    this.instantiator = instantiator;
    this.options = options || {};
    this.idIndex = {};
    this.doc = null;
  }

  /**
   * Clear the store
   */
  clear() {
    this.idIndex = {};
    this.doc = null;
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
    if (this.doc?.find((s) => s === obj) && this.getById(obj.id)) return true;
    return false;
  }

  /**
   * Return JSON of the root
   */
  toJSON(): any {
    return this.doc ? this.doc.toJSON(true) : null;
  }

  /**
   * Set the root from JSON
   */
  fromJSON(json: any) {
    const latestVersionJson = convertToLatestVersion(json);
    this.doc = this.instantiator.createFromJson(latestVersionJson);
    if (this.doc) {
      this.idIndex = {};
      this.addToIndex(this.doc);
    }
  }

  /**
   * Set the root object
   */
  setDoc(doc: Obj) {
    this.doc = doc;
    this.addToIndex(doc);
  }

  /**
   * Execute function as a transaction
   */
  transact(fn: (tx: Transaction) => void) {
    const tx = new Transaction(this);
    fn(tx);
    if (tx.mutations.length > 0) {
      this.onTransaction.emit(tx);
    }
  }
}
