import type { Shape } from "./shapes";
import * as geometry from "./graphics/geometry";
import type { Canvas } from "./graphics/graphics";
import { Editor } from "./editor";
import { TypedEvent } from "./std/typed-event";

/**
 * Selection Manager
 */
export class SelectionManager {
  editor: Editor;
  shapes: Shape[];
  onChange: TypedEvent<Shape[]>;

  constructor(editor: Editor) {
    this.editor = editor;
    this.shapes = [];
    this.onChange = new TypedEvent();
  }

  /**
   * isChanged
   */
  isChanged(shapes: Shape[]): boolean {
    shapes = shapes || [];
    for (let i = 0, len = shapes.length; i < len; i++) {
      let v = shapes[i];
      if (!this.shapes.includes(v)) {
        return true;
      }
    }
    for (let i = 0, len = this.shapes.length; i < len; i++) {
      let v = this.shapes[i];
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
  getShapes(): Shape[] {
    return this.shapes;
  }

  /**
   * Return the number of selections
   */
  size(): number {
    return this.shapes.length;
  }

  isSelected(shape: Shape) {
    return this.shapes.includes(shape);
  }

  /**
   * Select shapes
   */
  select(shapes: Shape[]) {
    this.shapes = [];
    this.selectAdditional(shapes);
  }

  /**
   * Select additional shapes
   */
  selectAdditional(shapes: Shape[]) {
    for (let shape of shapes) {
      if (!this.isSelected(shape)) {
        this.shapes.push(shape);
      }
    }
    this.onChange.emit(this.shapes);
  }

  /**
   * Select shapes overlap the given area in the current page.
   */
  selectArea(x1: number, y1: number, x2: number, y2: number) {
    const canvas = this.editor.canvas;
    let r = geometry.normalizeRect([
      [x1, y1],
      [x2, y2],
    ]);
    this.shapes = [];
    this.editor.getCurrentPage()?.visit((s) => {
      if (
        s.visible &&
        s.enable &&
        s.overlapRect(canvas, r) &&
        !this.isSelected(s)
      ) {
        this.shapes.push(s);
      }
    });
    this.onChange.emit(this.shapes);
  }

  /**
   * Select all shapes in the current page
   */
  selectAll() {
    this.shapes = [];
    this.editor.getCurrentPage()?.visit((s) => {
      if (s.visible && s.enable) {
        this.shapes.push(s);
      }
    });
    this.onChange.emit(this.shapes);
  }

  /**
   * Deselect the given shapes.
   */
  deselect(shapes: Shape[]) {
    for (let shape of shapes) {
      if (this.isSelected(shape)) {
        this.shapes.splice(this.shapes.indexOf(shape), 1);
      }
    }
    this.onChange.emit(this.shapes);
  }

  /**
   * Deselect all shapes.
   */
  deselectAll() {
    if (this.shapes.length > 0) {
      this.shapes = [];
      this.onChange.emit(this.shapes);
    }
  }

  /**
   * Returns bounding rect of selected shapes
   */
  getBoundingRect(canvas: Canvas): number[][] {
    return this.shapes.length > 0
      ? this.shapes
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
