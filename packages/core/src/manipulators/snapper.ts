import { BoxSizeController } from "../controllers/box-size";
import { SelectionsSizeController } from "../controllers/selections-size";
import { Controller, Editor } from "../editor";
import { ControllerPosition, MAGNET_THRESHOLD } from "../graphics/const";
import * as geometry from "../graphics/geometry";
import { ccs2lcs, gcs2ccs, lcs2gcs } from "../graphics/utils";
import { Box, Movable, Shape } from "../shapes";
import * as guide from "../utils/guide";

function eq(a: number, b: number): boolean {
  return Math.abs(a - b) < 0.0001;
}

/**
 * Snapper class
 */
export class BaseSnapper {
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
    let snapX: number | null = null;
    let delta = MAGNET_THRESHOLD;
    for (let i = 0; i < referencePoints.length; i++) {
      const rp = referencePoints[i];
      const dx = Math.abs(rp[0] - point[0]);
      if (dx < MAGNET_THRESHOLD && dx < delta) {
        snapX = rp[0];
        delta = dx;
      }
    }
    return snapX;
  }

  /**
   * Snap a point to reference points in vertically.
   * @param point
   * @param references
   * @returns snapped y-coord or null
   */
  snapY(point: number[], referencePoints: number[][]): number | null {
    let snapY: number | null = null;
    let delta = MAGNET_THRESHOLD;
    for (let i = 0; i < referencePoints.length; i++) {
      const rp = referencePoints[i];
      const dy = Math.abs(rp[1] - point[1]);
      if (dy < MAGNET_THRESHOLD && dy < delta) {
        snapY = rp[1];
        delta = dy;
      }
    }
    return snapY;
  }
}

export class ControllerSnapper extends BaseSnapper {
  /**
   * Snap points in controller
   * @abstract
   * @param editor Editor
   * @param shape Shape
   * @param controller Controller
   */
  snap(editor: Editor, shape: Shape, controller: Controller) {}
}

/**
 * MultipointSnapper
 * Snap multiple points to reference points
 */
export class MultipointSnapper extends ControllerSnapper {
  initialPointsToSnap: number[][] = [];
  pointsToSnap: number[][] = [];
  referencePoints: number[][] = [];
  guidePoints: number[][] = [];
  snappedX: number | null = null;
  snappedY: number | null = null;

  /**
   * Set reference points
   */
  setReferencePoints(editor: Editor, exceptions: Shape[]) {
    const canvas = editor.canvas;
    this.referencePoints = [];
    const page = editor.getCurrentPage()!;
    page.traverse((s) => {
      if (!exceptions.includes(s as Shape) && s instanceof Box) {
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
  }

  /**
   * Sort reference points by distance to the given point
   */
  sortReferencePoints(point: number[]) {
    this.referencePoints.sort((a, b) => {
      const da = geometry.distance(a, point);
      const db = geometry.distance(b, point);
      return da - db;
    });
  }

  /**
   * Draw a given snapped x points with a line
   */
  drawSnappingX(editor: Editor, x: number) {
    const canvas = editor.canvas;
    const snappedXPoints: number[][] = [];
    this.guidePoints.forEach((p) => {
      if (eq(p[0], x)) snappedXPoints.push(p);
    });
    this.referencePoints.forEach((p) => {
      if (eq(p[0], x)) snappedXPoints.push(p);
    });
    if (snappedXPoints.length > 1) {
      snappedXPoints.forEach((p) => {
        const pCCS = gcs2ccs(canvas, p);
        guide.drawControlPoint(canvas, pCCS, 3);
      });
      const y1 = Math.min(...snappedXPoints.map((p) => p[1]));
      const y2 = Math.max(...snappedXPoints.map((p) => p[1]));
      const p1 = gcs2ccs(canvas, [x, y1]);
      const p2 = gcs2ccs(canvas, [x, y2]);
      guide.drawLine(canvas, p1, p2);
    }
  }

  /**
   * Draw a given snapped y points with a line
   */
  drawSnappingY(editor: Editor, y: number) {
    const canvas = editor.canvas;
    const snappedYPoints: number[][] = [];
    this.guidePoints.forEach((p) => {
      if (eq(p[1], y)) snappedYPoints.push(p);
    });
    this.referencePoints.forEach((p) => {
      if (eq(p[1], y)) snappedYPoints.push(p);
    });
    if (snappedYPoints.length > 1) {
      snappedYPoints.forEach((p) => {
        const pCCS = gcs2ccs(canvas, p);
        guide.drawControlPoint(canvas, pCCS, 3);
      });
      const x1 = Math.min(...snappedYPoints.map((p) => p[0]));
      const x2 = Math.max(...snappedYPoints.map((p) => p[0]));
      const p1 = gcs2ccs(canvas, [x1, y]);
      const p2 = gcs2ccs(canvas, [x2, y]);
      guide.drawLine(canvas, p1, p2);
    }
  }

  /**
   * Draw snapped points and lines
   */
  draw(editor: Editor) {
    for (let i = 0; i < this.guidePoints.length; i++) {
      const p = this.guidePoints[i];
      if (this.snappedX !== null) this.drawSnappingX(editor, p[0]);
      if (this.snappedY !== null) this.drawSnappingY(editor, p[1]);
    }
  }
}

/**
 * GridSnapper
 * Snap a point to grid
 */
export class GridSnapper extends ControllerSnapper {
  initialPointToSnap: number[] = [0, 0];
  pointToSnap: number[] = [0, 0];

  setPointToSnap(
    editor: Editor,
    controller: Controller,
    point: number[]
  ): void {
    this.initialPointToSnap = point;
  }

  /**
   * Snap point to grid
   * @param editor Editor
   * @param controller Controller
   */
  snap(editor: Editor, shape: Shape, controller: Controller) {
    if (!editor.getSnapToGrid()) return;

    // snap only if the shape is moving
    const dx = controller.dxGCS;
    const dy = controller.dyGCS;
    if (dx === 0 && dy === 0) return;

    // snap point to grid and compute snap delta
    const [gridX, gridY] = editor.getGridSize();
    this.pointToSnap = geometry.move(this.initialPointToSnap, dx, dy);
    const snappedPoint = [
      Math.round(this.pointToSnap[0] / gridX) * gridX,
      Math.round(this.pointToSnap[1] / gridY) * gridY,
    ];
    const snapDX = snappedPoint[0] - this.pointToSnap[0];
    const snapDY = snappedPoint[1] - this.pointToSnap[1];
    this.pointToSnap[0] += snapDX;
    this.pointToSnap[1] += snapDY;

    // update drag point as snapped point
    this.moveDragPointGCS(editor, shape, controller, snapDX, snapDY);
  }
}

/**
 * MoveSnapper
 * Snap a moving shape to other shapes
 */
export class MoveSnapper extends MultipointSnapper {
  /**
   * Set rect to snap
   */
  setRectToSnap(editor: Editor, shape: Shape, rect: number[][]) {
    const canvas = editor.canvas;
    const center = geometry.center(rect);
    this.initialPointsToSnap = [
      center,
      ...geometry
        .rectToPolygon(rect, false)
        .map((p) => lcs2gcs(canvas, shape, p)),
    ];
    this.snappedX = null;
    this.snappedY = null;
  }

  snap(
    editor: Editor,
    shape: Shape,
    controller: Controller,
    allowMoveX: boolean = true,
    allowMoveY: boolean = true
  ) {
    if (!editor.getSnapToObjects()) return;

    // apply movable constraint
    if (shape.movable === Movable.HORZ) allowMoveY = false;
    if (shape.movable === Movable.VERT) allowMoveX = false;
    if (shape.movable === Movable.NONE) {
      allowMoveX = false;
      allowMoveY = false;
    }

    // move points to snap by dx and dy
    const dx = allowMoveX ? controller.dxGCS : 0;
    const dy = allowMoveY ? controller.dyGCS : 0;
    if (dx === 0 && dy === 0) return;
    this.pointsToSnap = geometry.movePoints(this.initialPointsToSnap, dx, dy);

    // sort reference points (snap first to the nearest reference point)
    const centroid = geometry.centroidPolygon(this.pointsToSnap);
    this.sortReferencePoints(centroid);

    // compute snapped X
    this.snappedX = null;
    if (allowMoveX) {
      let deltaX = MAGNET_THRESHOLD;
      if (this.snappedX === null) {
        for (let j = 0; j < this.pointsToSnap.length; j++) {
          const p = this.pointsToSnap[j];
          const sx = this.snapX(p, this.referencePoints);
          if (sx !== null) {
            const dx = Math.abs(sx - p[0]);
            if (dx < deltaX) {
              this.snappedX = sx;
              deltaX = dx;
            }
          }
        }
      }
      if (this.snappedX !== null) {
        this.moveDragPointGCS(editor, shape, controller, deltaX, 0);
        this.pointsToSnap.forEach((p) => (p[0] += deltaX));
      }
    }

    // compute snapped Y
    this.snappedY = null;
    if (allowMoveY) {
      let deltaY = MAGNET_THRESHOLD;
      if (this.snappedY === null) {
        for (let j = 0; j < this.pointsToSnap.length; j++) {
          const p = this.pointsToSnap[j];
          const sy = this.snapY(p, this.referencePoints);
          if (sy !== null) {
            const dy = Math.abs(sy - p[1]);
            if (dy < deltaY) {
              this.snappedY = sy;
              deltaY = dy;
            }
          }
        }
      }
      if (this.snappedY !== null) {
        this.moveDragPointGCS(editor, shape, controller, 0, deltaY);
        this.pointsToSnap.forEach((p) => (p[1] += deltaY));
      }
    }

    // set guide points
    this.guidePoints = geometry.pathCopy(this.pointsToSnap);
  }
}

/**
 * SizeSnapper
 * Snap a sizing shape to other shapes
 */
export class SizeSnapper extends MultipointSnapper {
  initialEnclosure: number[][] = [];
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

  makeGuidePoints(position: string) {
    switch (position) {
      case ControllerPosition.TOP: {
        return [
          ...this.pointsToSnap,
          this.initialEnclosure[2],
          this.initialEnclosure[3],
        ];
      }
      case ControllerPosition.BOTTOM: {
        return [
          ...this.pointsToSnap,
          this.initialEnclosure[0],
          this.initialEnclosure[1],
        ];
      }
      case ControllerPosition.LEFT: {
        return [
          ...this.pointsToSnap,
          this.initialEnclosure[1],
          this.initialEnclosure[2],
        ];
      }
      case ControllerPosition.RIGHT: {
        return [
          ...this.pointsToSnap,
          this.initialEnclosure[0],
          this.initialEnclosure[3],
        ];
      }
      case ControllerPosition.LEFT_TOP: {
        return [...this.pointsToSnap, this.initialEnclosure[2]];
      }
      case ControllerPosition.RIGHT_TOP: {
        return [...this.pointsToSnap, this.initialEnclosure[3]];
      }
      case ControllerPosition.RIGHT_BOTTOM: {
        return [...this.pointsToSnap, this.initialEnclosure[0]];
      }
      case ControllerPosition.LEFT_BOTTOM: {
        return [...this.pointsToSnap, this.initialEnclosure[1]];
      }
      default: {
        return [];
      }
    }
  }

  setSizeToSnap(
    editor: Editor,
    shape: Shape,
    controller: BoxSizeController | SelectionsSizeController
  ) {
    // set points to snap
    let rect = shape.getBoundingRect();
    if (controller instanceof SelectionsSizeController) {
      rect = editor.selection.getBoundingRect(editor.canvas);
    }
    const enclosure = geometry.rectToPolygon(rect, false);

    // compute ratio if the shape's sizable is ratio
    const w = geometry.width(rect);
    const h = geometry.height(rect);
    if (controller.isKeepSizeRatio()) {
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
    this.initialEnclosure = geometry.pathCopy(enclosure);

    this.snappedX = null;
    this.snappedY = null;
  }

  snap(
    editor: Editor,
    shape: Shape,
    controller: BoxSizeController | SelectionsSizeController
  ) {
    if (!editor.getSnapToObjects()) return;

    // size snapping will not work on rotated shape
    const rotate = geometry.normalizeAngle(shape.rotate);
    if (rotate !== 0) return;

    // skip snapping anchord shape temporally
    // anchord shape을 Resizing 할 때 constraint 에 의해서 위치가 변경되기 때문에,
    // snapped 된 위치가 이상하게 되는 문제가 있음.
    if (shape instanceof Box && shape.anchored) return;

    // adjust dx and dy if the shape is sizable ratio
    let dx = controller.dxGCS;
    let dy = controller.dyGCS;
    if (dx === 0 && dy === 0) return;
    if (controller.isKeepSizeRatio()) {
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

    // sort reference points (snap first to the nearest reference point)
    const centroid = geometry.centroidPolygon(this.pointsToSnap);
    this.sortReferencePoints(centroid);

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

      // make guide points
      this.guidePoints = this.makeGuidePoints(controller.options.position);
    }
  }
}

/**
 * HandlerSnapper
 */
export class HandlerSnapper extends BaseSnapper {
  /**
   * Allow snap to objects
   */
  allowSnapToObjects: boolean = true;

  /**
   * Allow snap to grid
   */
  allowSnapToGrid: boolean = true;

  /**
   * A point to snap
   */
  pointToSnap: number[] = [];

  /**
   * An array of reference points
   */
  referencePoints: number[][] = [];

  /**
   * Snapped x-coord (null if not snapped)
   */
  snappedX: number | null = null;

  /**
   * Snapped y-coord (null if not snapped)
   */
  snappedY: number | null = null;

  /**
   * Draw snapped X
   */
  drawSnappedX: boolean = false;

  /**
   * Draw snapped Y
   */
  drawSnappedY: boolean = false;

  /**
   * Snapped delta x
   */
  snapDX: number = 0;

  /**
   * Snapped delta y
   */
  snapDY: number = 0;

  /**
   * An array of guide points (snapped points to draw for guide)
   */
  guidePoints: number[][] = [];

  constructor(
    allowSnapToObjects: boolean = true,
    allowSnapToGrid: boolean = true
  ) {
    super();
    this.allowSnapToObjects = allowSnapToObjects;
    this.allowSnapToGrid = allowSnapToGrid;
  }

  /**
   * Set reference shapes
   */
  setReferences(editor: Editor, exceptions: Shape[] = []) {
    const canvas = editor.canvas;
    this.referencePoints = [];
    const page = editor.getCurrentPage()!;
    page.traverse((s) => {
      if (!exceptions.includes(s as Shape) && s instanceof Box) {
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
  }

  /**
   * Sort reference points by distance to the given point
   */
  sortReferencePoints(point: number[]) {
    this.referencePoints.sort((a, b) => {
      const da = geometry.distance(a, point);
      const db = geometry.distance(b, point);
      return da - db;
    });
  }

  /**
   * Snap to object
   * @returns snapping delta [dx, dy] or null (not snapped)
   */
  snap(editor: Editor, pointToSnap: number[]): number[] | null {
    this.snappedX = null;
    this.snappedY = null;
    this.drawSnappedX = false;
    this.drawSnappedY = false;
    this.snapDX = 0;
    this.snapDY = 0;

    // sort reference points (snap first to the nearest reference point)
    this.sortReferencePoints(pointToSnap);

    // snap to objects and grid
    this.snapToObjects(editor, pointToSnap);
    this.snapToGrid(editor, pointToSnap);

    // update points to snap and guide points
    if (this.snappedX !== null || this.snappedY !== null) {
      this.pointToSnap = geometry.move(
        this.pointToSnap,
        this.snapDX,
        this.snapDY
      );
      this.guidePoints = [this.pointToSnap];
      return [this.snapDX, this.snapDY];
    }

    return null;
  }

  /**
   * Snap to object
   * @returns snapping delta [dx, dy] or null (not snapped)
   */
  snapToObjects(editor: Editor, pointToSnap: number[]) {
    if (!editor.getSnapToObjects() || !this.allowSnapToObjects) return;

    // compute snapped X and Y
    this.pointToSnap = geometry.copy(pointToSnap);
    this.snappedX = null;
    this.snappedY = null;
    const p = this.pointToSnap;
    if (this.snappedX === null) {
      this.snappedX = this.snapX(p, this.referencePoints);
      if (this.snappedX !== null) {
        this.drawSnappedX = true;
        this.snapDX = this.snappedX - p[0];
      }
    }
    if (this.snappedY === null) {
      this.snappedY = this.snapY(p, this.referencePoints);
      if (this.snappedY !== null) {
        this.drawSnappedY = true;
        this.snapDY = this.snappedY - p[1];
      }
    }
  }

  /**
   * Snap to grid
   * @returns snapping delta [dx, dy] or null (not snapped)
   */
  snapToGrid(editor: Editor, pointToSnap: number[]) {
    if (!editor.getSnapToGrid() || !this.allowSnapToGrid) return;

    // snap point to grid and compute snap delta
    const [gridX, gridY] = editor.getGridSize();
    this.pointToSnap = geometry.copy(pointToSnap);
    const snappedPoint = [
      Math.round(this.pointToSnap[0] / gridX) * gridX,
      Math.round(this.pointToSnap[1] / gridY) * gridY,
    ];

    if (this.snappedX === null) {
      this.snappedX = snappedPoint[0];
      this.snapDX = snappedPoint[0] - this.pointToSnap[0];
      this.guidePoints = [];
    }
    if (this.snappedY === null) {
      this.snappedY = snappedPoint[1];
      this.snapDY = snappedPoint[1] - this.pointToSnap[1];
      this.guidePoints = [];
    }
  }

  /**
   * Draw snapped points and lines
   */
  draw(editor: Editor) {
    const canvas = editor.canvas;

    if (this.snappedX !== null && this.drawSnappedX) {
      const snappedXPoints: number[][] = [];
      this.guidePoints.forEach((p) => {
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

    if (this.snappedY !== null && this.drawSnappedY) {
      const snappedYPoints: number[][] = [];
      this.guidePoints.forEach((p) => {
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
