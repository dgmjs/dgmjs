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

/**
 * A size-limited stack.
 * Delete the last inserted item if overflow.
 */
export class Stack<T> {
  maxSize: number;
  stack: T[];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  /**
   * Clear stack.
   */
  clear() {
    this.stack = [];
  }

  /**
   * Push an item
   */
  push(item: T) {
    this.stack.push(item);
    if (this.stack.length > this.maxSize) {
      this.stack.splice(0, 1);
    }
  }

  /**
   * Pop an item from the top
   */
  pop(): T | undefined {
    return this.stack.pop();
  }

  /**
   * Return size of stack
   */
  size(): number {
    return this.stack.length;
  }
}
