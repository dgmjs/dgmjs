import { BoxSizeController } from "../controllers/box-size";
import { Controller, Editor } from "../editor";
import { ControllerPosition, MAGNET_THRESHOLD } from "../graphics/const";
import * as geometry from "../graphics/geometry";
import { ccs2lcs, gcs2ccs, lcs2gcs } from "../graphics/utils";
import { Box, Shape, Sizable } from "../shapes";
import * as guide from "../utils/guide";

function eq(a: number, b: number): boolean {
  return Math.abs(a - b) < 0.0001;
}

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

export class MultipointSnapper extends Snapper {
  initialPointsToSnap: number[][] = [];
  pointsToSnap: number[][] = [];
  referencePoints: number[][] = [];
  snappedX: number | null = null;
  snappedY: number | null = null;

  /**
   * Draw snapped points and lines
   */
  draw(editor: Editor) {
    const canvas = editor.canvas;

    if (this.snappedX !== null) {
      const snappedXPoints: number[][] = [];
      this.pointsToSnap.forEach((p) => {
        if (eq(p[0], this.snappedX as number)) snappedXPoints.push(p);
      });
      this.referencePoints.forEach((p) => {
        if (eq(p[0], this.snappedX as number)) snappedXPoints.push(p);
      });

      snappedXPoints.forEach((p) => {
        const pCCS = gcs2ccs(canvas, p);
        guide.drawControlPoint(canvas, pCCS, 3);
      });
      if (snappedXPoints.length > 1) {
        const y1 = Math.min(...snappedXPoints.map((p) => p[1]));
        const y2 = Math.max(...snappedXPoints.map((p) => p[1]));
        const p1 = gcs2ccs(canvas, [this.snappedX as number, y1]);
        const p2 = gcs2ccs(canvas, [this.snappedX as number, y2]);
        guide.drawLine(canvas, p1, p2);
      }
    }

    if (this.snappedY !== null) {
      const snappedYPoints: number[][] = [];
      this.pointsToSnap.forEach((p) => {
        if (eq(p[1], this.snappedY as number)) snappedYPoints.push(p);
      });
      this.referencePoints.forEach((p) => {
        if (eq(p[1], this.snappedY as number)) snappedYPoints.push(p);
      });

      snappedYPoints.forEach((p) => {
        const pCCS = gcs2ccs(canvas, p);
        guide.drawControlPoint(canvas, pCCS, 3);
      });
      if (snappedYPoints.length > 1) {
        const x1 = Math.min(...snappedYPoints.map((p) => p[0]));
        const x2 = Math.max(...snappedYPoints.map((p) => p[0]));
        const p1 = gcs2ccs(canvas, [x1, this.snappedY as number]);
        const p2 = gcs2ccs(canvas, [x2, this.snappedY as number]);
        guide.drawLine(canvas, p1, p2);
      }
    }
  }
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
export class MoveSnapper extends MultipointSnapper {
  initialize(editor: Editor, shape: Shape, controller: Controller) {
    const canvas = editor.canvas;

    // set initial points to snap
    const rect = shape.getBoundingRect();
    const center = geometry.center(rect);
    this.initialPointsToSnap = [
      ...geometry
        .rectToPolygon(rect, false)
        .map((p) => lcs2gcs(canvas, shape, p)),
      center,
    ];

    // set refernces points
    this.referencePoints = [];
    const page = editor.getCurrentPage()!;
    page.traverse((s) => {
      if (s !== shape && s instanceof Box) {
        const rect = (s as Shape).getBoundingRect();
        const center = geometry.center(rect);
        this.referencePoints.push(
          ...geometry
            .rectToPolygon(rect, false)
            .map((p) => lcs2gcs(canvas, s, p)),
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
    this.pointsToSnap = geometry.movePoints(this.initialPointsToSnap, dx, dy);

    // compute snapped X and Y
    this.snappedX = null;
    this.snappedY = null;
    for (let j = 0; j < this.pointsToSnap.length; j++) {
      const p = this.pointsToSnap[j];
      if (this.snappedX === null) {
        this.snappedX = this.snapX(p, this.referencePoints);
        if (this.snappedX !== null) {
          const dx = this.snappedX - p[0];
          this.moveDragPointGCS(editor, shape, controller, dx, 0);
          this.pointsToSnap.forEach((p) => (p[0] += dx));
        }
      }
      if (this.snappedY === null) {
        this.snappedY = this.snapY(p, this.referencePoints);
        if (this.snappedY !== null) {
          const dy = this.snappedY - p[1];
          this.moveDragPointGCS(editor, shape, controller, 0, dy);
          this.pointsToSnap.forEach((p) => (p[1] += dy));
        }
      }
    }
  }
}

/**
 * SizeSnapper
 * Snap a sizing shape to other shapes
 */
export class SizeSnapper extends MultipointSnapper {
  sizingRatio: number = 0;

  /**
   * Move points to snap by dx and dy according to the position
   */
  movePointsToSnap(
    position: string,
    pointsToSnap: number[][],
    dx: number,
    dy: number
  ): number[][] {
    switch (position) {
      case ControllerPosition.TOP:
      case ControllerPosition.BOTTOM: {
        return [
          [pointsToSnap[0][0], pointsToSnap[0][1] + dy],
          [pointsToSnap[1][0], pointsToSnap[1][1] + dy],
        ];
      }
      case ControllerPosition.LEFT:
      case ControllerPosition.RIGHT: {
        return [
          [pointsToSnap[0][0] + dx, pointsToSnap[0][1]],
          [pointsToSnap[1][0] + dx, pointsToSnap[1][1]],
        ];
      }
      case ControllerPosition.LEFT_TOP: {
        return [
          [pointsToSnap[0][0] + dx, pointsToSnap[0][1] + dy],
          [pointsToSnap[1][0], pointsToSnap[1][1] + dy],
          [pointsToSnap[2][0] + dx, pointsToSnap[2][1]],
        ];
      }
      case ControllerPosition.RIGHT_TOP: {
        return [
          [pointsToSnap[0][0] + dx, pointsToSnap[0][1] + dy],
          [pointsToSnap[1][0] + dx, pointsToSnap[1][1]],
          [pointsToSnap[2][0], pointsToSnap[2][1] + dy],
        ];
      }
      case ControllerPosition.RIGHT_BOTTOM: {
        return [
          [pointsToSnap[0][0] + dx, pointsToSnap[0][1] + dy],
          [pointsToSnap[1][0], pointsToSnap[1][1] + dy],
          [pointsToSnap[2][0] + dx, pointsToSnap[2][1]],
        ];
      }
      case ControllerPosition.LEFT_BOTTOM: {
        return [
          [pointsToSnap[0][0] + dx, pointsToSnap[0][1] + dy],
          [pointsToSnap[1][0] + dx, pointsToSnap[1][1]],
          [pointsToSnap[2][0], pointsToSnap[2][1] + dy],
        ];
      }
      default: {
        return [];
      }
    }
  }

  initialize(editor: Editor, shape: Shape, controller: BoxSizeController) {
    const canvas = editor.canvas;

    // set points to snap
    const rect = shape.getBoundingRect();
    const center = geometry.center(rect);
    const enclosure = geometry.rectToPolygon(rect, false);

    // compute ratio if the shape's sizable is ratio
    const w = geometry.width(rect);
    const h = geometry.height(rect);
    if (shape.sizable === Sizable.RATIO) {
      this.sizingRatio = h / w;
    } else {
      this.sizingRatio = 0;
    }

    // set points to snap
    switch (controller.options.position) {
      case ControllerPosition.TOP: {
        this.initialPointsToSnap = [enclosure[0], enclosure[1]];
        break;
      }
      case ControllerPosition.RIGHT: {
        this.initialPointsToSnap = [enclosure[1], enclosure[2]];
        break;
      }
      case ControllerPosition.BOTTOM: {
        this.initialPointsToSnap = [enclosure[2], enclosure[3]];
        break;
      }
      case ControllerPosition.LEFT: {
        this.initialPointsToSnap = [enclosure[3], enclosure[0]];
        break;
      }
      case ControllerPosition.LEFT_TOP: {
        this.initialPointsToSnap = [enclosure[0], enclosure[1], enclosure[3]];
        break;
      }
      case ControllerPosition.RIGHT_TOP: {
        this.initialPointsToSnap = [enclosure[1], enclosure[2], enclosure[0]];
        break;
      }
      case ControllerPosition.RIGHT_BOTTOM: {
        this.initialPointsToSnap = [enclosure[2], enclosure[3], enclosure[1]];
        break;
      }
      case ControllerPosition.LEFT_BOTTOM: {
        this.initialPointsToSnap = [enclosure[3], enclosure[0], enclosure[2]];
        break;
      }
    }
    this.pointsToSnap = geometry.pathCopy(this.initialPointsToSnap);

    // set refernces points
    this.referencePoints = [];
    const page = editor.getCurrentPage()!;
    page.traverse((s) => {
      if (s !== shape && s instanceof Box) {
        const rect = (s as Shape).getBoundingRect();
        const center = geometry.center(rect);
        this.referencePoints.push(
          ...geometry
            .rectToPolygon(rect, false)
            .map((p) => lcs2gcs(canvas, s, p)),
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
      if (dx * this.sizingRatio > dy / this.sizingRatio) {
        dy = dx * this.sizingRatio;
      } else {
        dx = dy / this.sizingRatio;
      }
    }

    // move points to snap by dx and dy
    this.pointsToSnap = this.movePointsToSnap(
      controller.options.position,
      this.initialPointsToSnap,
      dx,
      dy
    );

    // compute snapped X and Y
    this.snappedX = null;
    this.snappedY = null;
    for (let i = 0; i < this.pointsToSnap.length; i++) {
      const p = this.pointsToSnap[i];
      if (this.snappedX === null) {
        this.snappedX = this.snapX(p, this.referencePoints);
        if (this.snappedX !== null) {
          const dx = this.snappedX - p[0];
          const dy = this.sizingRatio !== 0 ? dx * this.sizingRatio : 0;
          this.moveDragPointGCS(editor, shape, controller, dx, dy);
          this.pointsToSnap = this.movePointsToSnap(
            controller.options.position,
            this.pointsToSnap,
            dx,
            dy
          );
        }
      }

      // if sizing is ratio and X is snapped, skip snapping Y
      // because snapping Y causes broke snapped X position.
      if (this.sizingRatio !== 0 && this.snappedX !== null) {
        continue;
      }

      if (this.snappedY === null) {
        this.snappedY = this.snapY(p, this.referencePoints);
        if (this.snappedY !== null) {
          const dy = this.snappedY - p[1];
          const dx = this.sizingRatio !== 0 ? dy / this.sizingRatio : 0;
          this.moveDragPointGCS(editor, shape, controller, dx, dy);
          this.pointsToSnap = this.movePointsToSnap(
            controller.options.position,
            this.pointsToSnap,
            dx,
            dy
          );
        }
      }
    }
  }
}

/**
 * GapSnapper
 * Snap a moving shape to gaps between shapes
 */
export class GapSnapper {}
