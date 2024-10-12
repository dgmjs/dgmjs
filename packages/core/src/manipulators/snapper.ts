import { BoxSizeController } from "../controllers/box-size";
import { Controller, Editor } from "../editor";
import { ControllerPosition, MAGNET_THRESHOLD } from "../graphics/const";
import * as geometry from "../graphics/geometry";
import { ccs2lcs, gcs2ccs } from "../graphics/utils";
import { Box, Shape, Sizable } from "../shapes";
import * as guide from "../utils/guide";

/**
 * Snapper class
 */
export class Snapper {
  /**
   * Move drag point in GCS of the given controller
   */
  moveDragPointGCS(
    editor: Editor,
    shape: Shape,
    controller: Controller,
    dx: number,
    dy: number
  ) {
    controller.dragPointGCS = [
      controller.dragPointGCS[0] + dx,
      controller.dragPointGCS[1] + dy,
    ];
    controller.dragPointCCS = gcs2ccs(editor.canvas, controller.dragPointGCS);
    controller.dragPoint = ccs2lcs(
      editor.canvas,
      shape,
      controller.dragPointCCS
    );
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
   * Snap a point to reference points in horizontally.
   * @param point
   * @param references
   * @returns snapped x-coord or null
   */
  snapX(point: number[], referencePoints: number[][]): number | null {
    for (let i = 0; i < referencePoints.length; i++) {
      const rp = referencePoints[i];
      const dx = rp[0] - point[0];
      if (Math.abs(dx) < MAGNET_THRESHOLD) return rp[0];
    }
    return null;
  }

  /**
   * Snap a point to reference points in vertically.
   * @param point
   * @param references
   * @returns snapped y-coord or null
   */
  snapY(point: number[], referencePoints: number[][]): number | null {
    for (let i = 0; i < referencePoints.length; i++) {
      const rp = referencePoints[i];
      const dy = rp[1] - point[1];
      if (Math.abs(dy) < MAGNET_THRESHOLD) return rp[1];
    }
    return null;
  }

  /**
   * Update snapper
   * @abstract
   * @param editor Editor
   * @param shape Shape
   * @param controller Controller
   */
  update(editor: Editor, shape: Shape, controller: Controller) {}
}

/**
 * GridSnapper
 * Snap a point to grid
 */
export class GridSnapper extends Snapper {
  pointToSnap: number[] = [0, 0];

  setPointToSnap(
    editor: Editor,
    controller: Controller,
    point: number[]
  ): void {
    this.pointToSnap = point;
  }

  /**
   * Snap point to grid
   * @param editor Editor
   * @param controller Controller
   */
  update(editor: Editor, shape: Shape, controller: Controller) {
    // if (editor.getSnapToGrid()) {
    const [gridX, gridY] = editor.getGridSize();

    // snap point to grid and compute snap delta
    const p = [
      this.pointToSnap[0] + controller.dxGCS,
      this.pointToSnap[1] + controller.dyGCS,
    ];
    const snappedPoint = [
      Math.round(p[0] / gridX) * gridX,
      Math.round(p[1] / gridY) * gridY,
    ];
    const dx = snappedPoint[0] - p[0];
    const dy = snappedPoint[1] - p[1];

    // update drag point as snapped point
    this.moveDragPointGCS(editor, shape, controller, dx, dy);
  }
}

/**
 * MoveSnapper
 * Snap a moving shape to other shapes
 */
export class MoveSnapper extends Snapper {
  pointsToSnap: number[][] = [];
  referencePoints: number[][] = [];
  snappedX: number | null = null;
  snappedY: number | null = null;

  initialize(editor: Editor, shape: Shape, controller: Controller) {
    // set points to snap
    const rect = shape.getBoundingRect();
    const center = geometry.center(rect);
    // TODO: Apply rotate on pointsToSnap
    this.pointsToSnap = [...geometry.rectToPolygon(rect, false), center];

    // set refernces points
    this.referencePoints = [];
    const page = editor.getCurrentPage()!;
    page.traverse((s) => {
      if (s !== shape && s instanceof Box) {
        const rect = (s as Shape).getBoundingRect();
        const center = geometry.center(rect);
        this.referencePoints.push(
          ...geometry.rectToPolygon(rect, false),
          center
        );
      }
    });

    // sort reference points by distance to points to snap
    this.referencePoints.sort((a, b) => {
      const da = geometry.distance(a, center);
      const db = geometry.distance(b, center);
      return da - db;
    });
  }

  update(editor: Editor, shape: Shape, controller: Controller) {
    // move points to snap by dx and dy
    const dx = controller.dxGCS;
    const dy = controller.dyGCS;
    const movedPointsToSnap = geometry.movePoints(this.pointsToSnap, dx, dy);

    // compute snapped X and Y
    this.snappedX = null;
    this.snappedY = null;
    for (let j = 0; j < movedPointsToSnap.length; j++) {
      const p = movedPointsToSnap[j];
      if (this.snappedX === null) {
        this.snappedX = this.snapX(p, this.referencePoints);
        if (this.snappedX !== null) {
          const dx = this.snappedX - p[0];
          this.moveDragPointGCS(editor, shape, controller, dx, 0);
        }
      }
      if (this.snappedY === null) {
        this.snappedY = this.snapY(p, this.referencePoints);
        if (this.snappedY !== null) {
          const dy = this.snappedY - p[1];
          this.moveDragPointGCS(editor, shape, controller, 0, dy);
        }
      }
    }
  }

  /**
   * Draw snapping guide lines
   */
  draw(editor: Editor) {
    const canvas = editor.canvas;
    // draw all lines from reference points to points to snap
    if (this.snappedX !== null) {
      const x = gcs2ccs(canvas, [this.snappedX, 0])[0];
      guide.drawVertline(canvas, x, [4]);
    }
    if (this.snappedY !== null) {
      const y = gcs2ccs(canvas, [0, this.snappedY])[1];
      guide.drawHorzline(canvas, y, [4]);
    }
  }
}

/**
 * SizeSnapper
 * Snap a sizing shape to other shapes
 */
export class SizeSnapper extends Snapper {
  pointsToSnap: number[][] = [];
  referencePoints: number[][] = [];
  snappedX: number | null = null;
  snappedY: number | null = null;
  ratio: number = 0;

  initialize(editor: Editor, shape: Shape, controller: BoxSizeController) {
    // set points to snap
    const rect = shape.getBoundingRect();
    const center = geometry.center(rect);
    const enclosure = geometry.rectToPolygon(rect, false);

    // compute ratio if the shape's sizable is ratio
    const w = geometry.width(rect);
    const h = geometry.height(rect);
    if (shape.sizable === Sizable.RATIO) {
      this.ratio = h / w;
    } else {
      this.ratio = 0;
    }

    // set points to snap
    switch (controller.options.position) {
      case ControllerPosition.TOP: {
        this.pointsToSnap = [enclosure[0], enclosure[1]];
        break;
      }
      case ControllerPosition.RIGHT: {
        this.pointsToSnap = [enclosure[1], enclosure[2]];
        break;
      }
      case ControllerPosition.BOTTOM: {
        this.pointsToSnap = [enclosure[2], enclosure[3]];
        break;
      }
      case ControllerPosition.LEFT: {
        this.pointsToSnap = [enclosure[3], enclosure[0]];
        break;
      }
      case ControllerPosition.LEFT_TOP: {
        this.pointsToSnap = [enclosure[0], enclosure[1], enclosure[3]];
        break;
      }
      case ControllerPosition.RIGHT_TOP: {
        this.pointsToSnap = [enclosure[1], enclosure[2], enclosure[0]];
        break;
      }
      case ControllerPosition.RIGHT_BOTTOM: {
        this.pointsToSnap = [enclosure[2], enclosure[3], enclosure[1]];
        break;
      }
      case ControllerPosition.LEFT_BOTTOM: {
        this.pointsToSnap = [enclosure[3], enclosure[0], enclosure[2]];
        break;
      }
    }

    // set refernces points
    this.referencePoints = [];
    const page = editor.getCurrentPage()!;
    page.traverse((s) => {
      if (s !== shape && s instanceof Box) {
        const rect = (s as Shape).getBoundingRect();
        const center = geometry.center(rect);
        this.referencePoints.push(
          ...geometry.rectToPolygon(rect, false),
          center
        );
      }
    });

    // sort reference points by distance to points to snap
    this.referencePoints.sort((a, b) => {
      const da = geometry.distance(a, center);
      const db = geometry.distance(b, center);
      return da - db;
    });
  }

  update(editor: Editor, shape: Shape, controller: BoxSizeController) {
    // size snapping will not work on rotated shape
    const rotate = geometry.normalizeAngle(shape.rotate);
    if (rotate !== 0) return;

    // adjust dx and dy if the shape is sizable ratio
    let dx = controller.dxGCS;
    let dy = controller.dyGCS;
    if (shape.sizable === Sizable.RATIO) {
      if (dx * this.ratio > dy / this.ratio) {
        dy = dx * this.ratio;
      } else {
        dx = dy / this.ratio;
      }
    }

    // move points to snap by dx and dy
    let movedPointsToSnap: number[][] = [];
    switch (controller.options.position) {
      case ControllerPosition.TOP:
      case ControllerPosition.BOTTOM: {
        movedPointsToSnap = [
          [this.pointsToSnap[0][0], this.pointsToSnap[0][1] + dy],
          [this.pointsToSnap[1][0], this.pointsToSnap[1][1] + dy],
        ];
        break;
      }
      case ControllerPosition.LEFT:
      case ControllerPosition.RIGHT: {
        movedPointsToSnap = [
          [this.pointsToSnap[0][0] + dx, this.pointsToSnap[0][1]],
          [this.pointsToSnap[1][0] + dx, this.pointsToSnap[1][1]],
        ];
        break;
      }
      case ControllerPosition.LEFT_TOP: {
        movedPointsToSnap = [
          [this.pointsToSnap[0][0] + dx, this.pointsToSnap[0][1] + dy],
          [this.pointsToSnap[1][0], this.pointsToSnap[1][1] + dy],
          [this.pointsToSnap[2][0] + dx, this.pointsToSnap[2][1]],
        ];
        break;
      }
      case ControllerPosition.RIGHT_TOP: {
        movedPointsToSnap = [
          [this.pointsToSnap[0][0] + dx, this.pointsToSnap[0][1] + dy],
          [this.pointsToSnap[1][0] + dx, this.pointsToSnap[1][1]],
          [this.pointsToSnap[2][0], this.pointsToSnap[2][1] + dy],
        ];
        break;
      }
      case ControllerPosition.RIGHT_BOTTOM: {
        movedPointsToSnap = [
          [this.pointsToSnap[0][0] + dx, this.pointsToSnap[0][1] + dy],
          [this.pointsToSnap[1][0], this.pointsToSnap[1][1] + dy],
          [this.pointsToSnap[2][0] + dx, this.pointsToSnap[2][1]],
        ];
        break;
      }
      case ControllerPosition.LEFT_BOTTOM: {
        movedPointsToSnap = [
          [this.pointsToSnap[0][0] + dx, this.pointsToSnap[0][1] + dy],
          [this.pointsToSnap[1][0] + dx, this.pointsToSnap[1][1]],
          [this.pointsToSnap[2][0], this.pointsToSnap[2][1] + dy],
        ];
        break;
      }
    }

    // compute snapped X and Y
    this.snappedX = null;
    this.snappedY = null;
    for (let i = 0; i < movedPointsToSnap.length; i++) {
      const p = movedPointsToSnap[i];
      if (this.snappedX === null) {
        this.snappedX = this.snapX(p, this.referencePoints);
        if (this.snappedX !== null) {
          const dx = this.snappedX - p[0];
          const dy = this.ratio !== 0 ? dx * this.ratio : 0;
          this.moveDragPointGCS(editor, shape, controller, dx, dy);
        }
      }

      // if sizing is ratio and X is snapped, skip snapping Y
      // because snapping Y causes broke snapped X position.
      if (this.ratio !== 0 && this.snappedX !== null) {
        continue;
      }

      if (this.snappedY === null) {
        this.snappedY = this.snapY(p, this.referencePoints);
        if (this.snappedY !== null) {
          const dy = this.snappedY - p[1];
          const dx = this.ratio !== 0 ? dy / this.ratio : 0;
          this.moveDragPointGCS(editor, shape, controller, dx, dy);
        }
      }
    }
  }

  /**
   * Draw snapping guide lines
   */
  draw(editor: Editor) {
    const canvas = editor.canvas;
    // draw all lines from reference points to points to snap
    if (this.snappedX !== null) {
      const x = gcs2ccs(canvas, [this.snappedX, 0])[0];
      guide.drawVertline(canvas, x, [4]);
    }

    if (this.snappedY !== null) {
      const y = gcs2ccs(canvas, [0, this.snappedY])[1];
      guide.drawHorzline(canvas, y, [4]);
    }
  }
}

/**
 * GapSnapper
 * Snap a moving shape to gaps between shapes
 */
export class GapSnapper {}
