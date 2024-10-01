import { Controller, Editor } from "../editor";
import * as geometry from "../graphics/geometry";
import { Shape } from "../shapes";

/**
 * GridSnapper
 * Snap a point to grid
 */
export class GridSnapper {
  pointToSnap: number[] = [0, 0];

  setPointToSnap(
    editor: Editor,
    controller: Controller,
    point: number[]
  ): void {
    this.pointToSnap = point;
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
   * @param controller Controller
   */
  update(editor: Editor, controller: Controller) {
    // if (editor.getSnapToGrid()) {
    const [gridX, gridY] = editor.getGridSize();

    const dx = controller.dxGCS;
    const dy = controller.dyGCS;

    // snap point to grid and compute snap delta
    const p = [this.pointToSnap[0] + dx, this.pointToSnap[1] + dy];
    const snappedPoint = [
      Math.round(p[0] / gridX) * gridX,
      Math.round(p[1] / gridY) * gridY,
    ];
    const snapDelta = [snappedPoint[0] - p[0], snappedPoint[1] - p[1]];

    // update drag point as snapped point
    controller.dragPointGCS[0] += snapDelta[0];
    controller.dragPointGCS[1] += snapDelta[1];
    this.updateDeltas(controller);
  }
}

/**
 * MoveSnapper
 * Snap a moving shape to other shapes
 */
export class MoveSnapper {
  rectToSnap: number[][] = [];
  referenceRects: number[][][] = [];

  // pointsToSnap: number[][] = [];
  // referencePoints: number[][] = [];

  setReferenceShapes(editor: Editor, controller: Controller) {
    const page = editor.getCurrentPage()!;
    // for all shapes in current page
    // - if box, add lt, rt, lb, rb, and center point
  }

  setRectToSnap(editor: Editor, controller: Controller, rect: number[][]) {
    const page = editor.getCurrentPage()!;
    this.rectToSnap = rect;
    this.referenceRects = page.children.map((shape) =>
      (shape as Shape).getBoundingRect()
    );

    console.log("rectToSnap", this.rectToSnap);
    console.log("referenceRects", this.referenceRects);
  }

  initialize(editor: Editor, controller: Controller, targetShape: Shape) {
    // this.setReferenceShapes(editor, controller);
  }

  update(editor: Editor, controller: Controller) {
    const page = editor.getCurrentPage()!;

    const referenceObjects = [...page.children];

    const dx = controller.dxGCS;
    const dy = controller.dyGCS;

    const rect = geometry.movePoints(this.rectToSnap, dx, dy);
    const center = geometry.center(rect);
  }

  /** Draw snapping guide lines */
  draw(editor: Editor) {
    // draw all lines from reference points to points to snap
  }
}

/**
 * GapSnapper
 * Snap a moving shape to gaps between shapes
 */
export class GapSnapper {}
