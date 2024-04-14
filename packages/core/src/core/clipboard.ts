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
import { Transform } from "../transform/transform";
import { Store } from "./store";
import type { Obj } from "./obj";

interface ClipboardData {
  text?: string;
  objs?: Obj[];
}

/**
 * Clipboard
 */
class Clipboard {
  store: Store;
  transform: Transform;
  buffer: any[];

  constructor(store: Store, transform: Transform) {
    this.store = store;
    this.transform = transform;
    this.buffer = [];
  }

  /**
   * Write objs to clipboard
   */
  write(data: ClipboardData) {
    if (Array.isArray(data.objs)) {
    }
  }

  /**
   * Write clipboard to system clipboard
   */
  writeToClipboard() {
    const json = JSON.stringify(this.buffer);
    navigator.clipboard.writeText(json);
  }

  /**
   * Read from system clipboard
   */
  async readFromClipboard() {
    const json = await navigator.clipboard.readText();
    try {
      this.buffer = JSON.parse(json);
    } catch (err) {
      this.buffer = [];
    }
  }

  clearBuffer() {
    this.buffer = [];
  }

  /**
   * Put shapes to the given buffer
   */
  putObjects(objs: Obj[], buffer: any[]) {
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
  }

  /**
   * Get cloned shapes from the given buffer
   */
  getObjects(buffer: any[]): Obj[] {
    // copy objects
    const idMap: Record<string, Obj> = {};
    const objs = buffer.map((json) => {
      const obj = this.store.instantiator.createFromJson(json) as Obj;
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

  /**
   * Check if the clipboard has objects
   */
  hasObjects(): boolean {
    return this.buffer.length > 0;
  }
}

export { Clipboard };
