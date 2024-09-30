import { Controller, Editor } from "../editor";

/**
 * GridSnapper
 * Snap a point to grid
 */
export class GridSnapper {
  /**
   * Snap point to grid
   * @param editor Editor
   * @param point Point to snap
   * @returns snapped point
   */
  snap(editor: Editor, point: number[]): number[] {
    // if (editor.getSnapToGrid()) {
    const grid = editor.getGridSize();
    const snapped = [
      Math.round(point[0] / grid[0]) * grid[0],
      Math.round(point[1] / grid[0]) * grid[0],
    ];
    // console.log("snapped", snapped);
    return snapped;
    // }
    // return [0, 0];
  }
}

/**
 * MoveSnapper
 * Snap a moving shape to other shapes
 */
export class MoveSnapper {
  snap(
    editor: Editor,
    rect: number[][],
    snapRects: number[][][]
  ): number[][] | null {
    return rect;
  }

  /** Draw snapping guide lines */
  draw(editor: Editor) {}
}

/**
 * GapSnapper
 * Snap a moving shape to gaps between shapes
 */
export class GapSnapper {}
