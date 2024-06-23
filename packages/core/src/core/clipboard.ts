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

import { Store } from "./store";
import type { Obj } from "./obj";
import { deserialize, serialize } from "./serialize";
import { Base64 } from "js-base64";

interface ClipboardData {
  objs?: Obj[];
  text?: string;
  image?: Blob;
}

/**
 * Clipboard
 */
class Clipboard {
  store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  /**
   * Write objs to clipboard
   */
  async write(data: ClipboardData): Promise<void> {
    const clipboardItem: Record<string, Blob> = {};
    if (Array.isArray(data.objs) && data.objs.length > 0) {
      const buffer = serialize(data.objs);
      const encoded = `<dgm>${Base64.encode(JSON.stringify(buffer))}</dgm>`;
      const blob = new Blob([encoded], { type: "text/plain" });
      clipboardItem["text/plain"] = blob;
    } else if (data.text && data.text.length > 0) {
      const blob = new Blob([data.text], { type: "text/plain" });
      clipboardItem["text/plain"] = blob;
    }
    if (Object.entries(clipboardItem).length > 0) {
      await navigator.clipboard.write([new ClipboardItem(clipboardItem)]);
    }
  }

  /**
   * Read data from clipboard
   *
   */
  async read(): Promise<ClipboardData> {
    const clipboardItem = await navigator.clipboard.read();
    const data: ClipboardData = {};
    for (let item of clipboardItem) {
      for (let type of item.types) {
        if (type === "text/plain") {
          const blob = await item.getType(type);
          const text = await blob.text();
          const dgmMatch = text.match(/<dgm>(.*)<\/dgm>/);
          const svgMatch = text.match(/<svg.*<\/svg>/);
          if (dgmMatch) {
            const buffer = JSON.parse(Base64.decode(dgmMatch[1]));
            data.objs = deserialize(this.store.instantiator, buffer);
          } else if (svgMatch) {
            data.image = new Blob([svgMatch[0]], { type: "image/svg+xml" });
          } else {
            data.text = text;
          }
        }
        if (type === "image/png") {
          const blob = await item.getType(type);
          data.image = blob;
        }
      }
    }
    return data;
  }
}

export { Clipboard };
