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

import { EventEmitter } from "events";
import type { Shape } from "./shapes";
import * as geometry from "./graphics/geometry";
import type { Canvas } from "./graphics/graphics";
import type { EditorState } from "./editor-state";

/**
 * Selection Manager
 */
export class SelectionManager extends EventEmitter {
  editorState: EditorState;
  selections: Shape[];

  constructor(editorState: EditorState) {
    super();
    this.editorState = editorState;
    this.selections = [];
  }

  /**
   * Trigger event
   */
  triggerEvent() {
    this.emit("select", this.selections);
  }

  /**
   * isChanged
   */
  isChanged(shapes: Shape[]): boolean {
    shapes = shapes || [];
    for (let i = 0, len = shapes.length; i < len; i++) {
      let v = shapes[i];
      if (!this.selections.includes(v)) {
        return true;
      }
    }
    for (let i = 0, len = this.selections.length; i < len; i++) {
      let v = this.selections[i];
      if (!shapes.includes(v)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Return selected shapes.
   * @return an array of selected shapes.
   */
  getSelections(): Shape[] {
    return this.selections;
  }

  /**
   * Return the number of selections
   */
  size(): number {
    return this.selections.length;
  }

  isSelected(shape: Shape) {
    return this.selections.includes(shape);
  }

  /**
   * Select shapes
   */
  select(shapes: Shape[]) {
    this.selections = [];
    this.selectAdditional(shapes);
  }

  /**
   * Select additional shapes
   */
  selectAdditional(shapes: Shape[]) {
    for (let shape of shapes) {
      if (!this.isSelected(shape)) {
        this.selections.push(shape);
      }
    }
    this.triggerEvent();
  }

  /**
   * Select shapes in area
   */
  selectArea(x1: number, y1: number, x2: number, y2: number) {
    let r = geometry.normalizeRect([
      [x1, y1],
      [x2, y2],
    ]);
    this.selections = [];
    this.editorState.diagram?.traverse((s) => {
      if (
        (s as Shape).visible &&
        (s as Shape).enable &&
        (s as Shape).overlapRect(r) &&
        !this.isSelected(s as Shape)
      ) {
        this.selections.push(s as Shape);
      }
    });
    this.triggerEvent();
  }

  /**
   * Select all
   */
  selectAll() {
    this.selections = [];
    this.editorState.diagram?.traverse((s) => {
      if ((s as Shape).visible && (s as Shape).enable) {
        this.selections.push(s as Shape);
      }
    });
    this.triggerEvent();
  }

  /**
   * Deselect shapes
   */
  deselect(shapes: Shape[]) {
    for (let shape of shapes) {
      if (this.isSelected(shape)) {
        this.selections.splice(this.selections.indexOf(shape), 1);
      }
    }
    this.triggerEvent();
  }

  /**
   * Deselect all shapes.
   */
  deselectAll() {
    if (this.selections.length > 0) {
      this.selections = [];
      this.triggerEvent();
    }
  }

  /**
   * Returns bounding rect of selected shapes
   */
  getBoundingRect(canvas: Canvas): number[][] {
    return this.selections.length > 0
      ? this.selections
          .map((s) =>
            geometry.boundingRect(
              s.getOutline().map((p) => s.localCoordTransform(canvas, p, true))
            )
          )
          .reduce(geometry.unionRect)
      : [
          [0, 0],
          [0, 0],
        ];
  }

  /**
   * Returns enclosure of selected shapes
   */
  getEnclosure(canvas: Canvas): number[][] {
    const rect = this.getBoundingRect(canvas);
    return geometry.rectToPolygon(rect);
  }
}
