import { Controller, Editor } from "../editor";

/**
 * GridSnapper
 * Snap a point to grid
 */
export class GridSnapper {
  initialSnapPoint: number[] = [0, 0];
  delta: number[] = [0, 0];

  setSnapPoint(editor: Editor, controller: Controller, point: number[]): void {
    this.initialSnapPoint = point;
  }

  updateDeltas(controller: Controller): void {
    controller.dx = controller.dragPoint[0] - controller.dragStartPoint[0];
    controller.dy = controller.dragPoint[1] - controller.dragStartPoint[1];
    controller.dxStep = controller.dragPoint[0] - controller.dragPrevPoint[0];
    controller.dyStep = controller.dragPoint[1] - controller.dragPrevPoint[1];
    controller.dxGCS =
      controller.dragPointGCS[0] - controller.dragStartPointGCS[0];
    controller.dyGCS =
      controller.dragPointGCS[1] - controller.dragStartPointGCS[1];
    controller.dxStepGCS =
      controller.dragPointGCS[0] - controller.dragPrevPointGCS[0];
    controller.dyStepGCS =
      controller.dragPointGCS[1] - controller.dragPrevPointGCS[1];
  }

  /**
   * Snap point to grid
   * @param editor Editor
   * @param point Point to snap
   * @returns snapped point
   */
  snap(editor: Editor, controller: Controller) {
    // if (editor.getSnapToGrid()) {
    const [gridX, gridY] = editor.getGridSize();

    const dx = controller.dragPointGCS[0] - controller.dragStartPointGCS[0];
    const dy = controller.dragPointGCS[1] - controller.dragStartPointGCS[1];

    const snapPoint = [
      this.initialSnapPoint[0] + dx,
      this.initialSnapPoint[1] + dy,
    ];

    const snappedPoint = [
      Math.round(snapPoint[0] / gridX) * gridX,
      Math.round(snapPoint[1] / gridY) * gridY,
    ];

    const delta = [
      snappedPoint[0] - snapPoint[0],
      snappedPoint[1] - snapPoint[1],
    ];

    controller.dragPointGCS[0] += delta[0];
    controller.dragPointGCS[1] += delta[1];

    this.updateDeltas(controller);
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
