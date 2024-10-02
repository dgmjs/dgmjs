import { BoxSizeController } from "../controllers/box-size";
import { Controller, Editor } from "../editor";
import { ControllerPosition, MAGNET_THRESHOLD } from "../graphics/const";
import * as geometry from "../graphics/geometry";
import { gcs2ccs } from "../graphics/utils";
import { Box, Shape } from "../shapes";
import * as guide from "../utils/guide";

export class Snapper {
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

  moveDragPointGCS(
    editor: Editor,
    controller: Controller,
    dx: number,
    dy: number
  ) {
    controller.dragPointGCS = [
      controller.dragPointGCS[0] + dx,
      controller.dragPointGCS[1] + dy,
    ];
    controller.dragPointCCS = gcs2ccs(editor.canvas, controller.dragPointGCS);
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
  update(editor: Editor, controller: Controller) {
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
    this.moveDragPointGCS(editor, controller, dx, dy);
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

  initialize(editor: Editor, controller: Controller, targetShape: Shape) {
    // set points to snap
    const rect = targetShape.getBoundingRect();
    const center = geometry.center(rect);
    this.pointsToSnap = [...geometry.rectToPolygon(rect, false), center];

    // set refernces points
    this.referencePoints = [];
    const page = editor.getCurrentPage()!;
    page.traverse((shape) => {
      if (shape !== targetShape && shape instanceof Box) {
        const rect = (shape as Shape).getBoundingRect();
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

    // console.log("pointsToSnap", this.pointsToSnap);
    // this.referencePoints.forEach((p) => {
    //   console.log(p, geometry.distance(p, center));
    // });
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

  update(editor: Editor, controller: Controller) {
    const page = editor.getCurrentPage()!;

    const dx = controller.dxGCS;
    const dy = controller.dyGCS;
    const pointToSnap = geometry.movePoints(this.pointsToSnap, dx, dy);
    this.snappedX = null;
    this.snappedY = null;

    for (let j = 0; j < pointToSnap.length; j++) {
      const p = pointToSnap[j];
      if (this.snappedX === null) {
        this.snappedX = this.snapX(p, this.referencePoints);
        if (this.snappedX !== null) {
          const dx = this.snappedX - p[0];
          this.moveDragPointGCS(editor, controller, dx, 0);
        }
      }
      if (this.snappedY === null) {
        this.snappedY = this.snapY(p, this.referencePoints);
        if (this.snappedY !== null) {
          const dy = this.snappedY - p[1];
          this.moveDragPointGCS(editor, controller, 0, dy);
        }
      }
    }

    // const rect = geometry.movePoints(this.rectToSnap, dx, dy);
    // const center = geometry.center(rect);
  }

  /** Draw snapping guide lines */
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

  initialize(
    editor: Editor,
    controller: BoxSizeController,
    targetShape: Shape
  ) {
    // set points to snap
    const rect = targetShape.getBoundingRect();
    const center = geometry.center(rect);
    const enclosure = geometry.rectToPolygon(rect, false);
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
    page.traverse((shape) => {
      if (shape !== targetShape && shape instanceof Box) {
        const rect = (shape as Shape).getBoundingRect();
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

    // console.log("pointsToSnap", this.pointsToSnap);
    // this.referencePoints.forEach((p) => {
    //   console.log(p, geometry.distance(p, center));
    // });
  }

  update(editor: Editor, controller: BoxSizeController) {
    const canvas = editor.canvas;
    const page = editor.getCurrentPage()!;

    const dx = controller.dxGCS;
    const dy = controller.dyGCS;

    let pointToSnap: number[][] = [];
    switch (controller.options.position) {
      case ControllerPosition.TOP: {
        pointToSnap = geometry.movePoints(this.pointsToSnap, dx, dy);
        break;
      }
    }

    // console.log("pointToSnap", JSON.stringify(pointToSnap));
    // console.log("referencePoints", this.referencePoints);

    // const pointToSnap = geometry.movePoints(this.pointsToSnap, dx, dy);
    this.snappedX = null;
    this.snappedY = null;

    for (let j = 0; j < pointToSnap.length; j++) {
      const p = pointToSnap[j];

      // if (this.snappedX === null) {
      //   this.snappedX = this.snapX(p, this.referencePoints);
      //   if (this.snappedX !== null) {
      //     const dx = this.snappedX - p[0];
      //     controller.dragPointGCS[0] += dx;
      //     this.updateDeltas(controller);
      //   }
      // }

      if (this.snappedY === null) {
        this.snappedY = this.snapY(p, this.referencePoints);
        if (this.snappedY !== null) {
          console.log("snappedY", this.snappedY);
          const dy = this.snappedY - p[1];
          this.moveDragPointGCS(editor, controller, 0, dy);
        }
      }
    }

    // const rect = geometry.movePoints(this.rectToSnap, dx, dy);
    // const center = geometry.center(rect);
  }

  /** Draw snapping guide lines */
  draw(editor: Editor) {
    const canvas = editor.canvas;
    // draw all lines from reference points to points to snap

    // if (this.snappedX !== null) {
    //   const x = gcs2ccs(canvas, [this.snappedX, 0])[0];
    //   guide.drawVertline(canvas, x, [4]);
    // }

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
