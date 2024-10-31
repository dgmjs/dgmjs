import type { CanvasPointerEvent } from "../graphics/graphics";
import { Shape, Path } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import {
  Cursor,
  LINE_STRATIFY_ANGLE_THRESHOLD,
  MAGNET_THRESHOLD,
} from "../graphics/const";
import { lcs2ccs, ccs2lcs } from "../graphics/utils";
import * as guide from "../utils/guide";
import * as geometry from "../graphics/geometry";
import { findControlPoint } from "./utils";
import { reducePath } from "../utils/route-utils";
import { resolveAllConstraints, setPath } from "../macro";
import { ActionKind } from "../core";
import { GridSnapper } from "../manipulators/snapper";

interface PathMovePointControllerOptions {
  exceptEndPoints: boolean;
}

/**
 * PathMovePointController
 */
export class PathMovePointController extends Controller {
  /**
   * Options of the controller
   */
  options: PathMovePointControllerOptions;

  /**
   * Grid snapper
   */
  gridSnapper: GridSnapper;

  /**
   * current control point
   */
  controlPoint: number;

  /**
   * current control path
   */
  controlPath: number[][];

  constructor(
    manipulator: Manipulator,
    options?: Partial<PathMovePointControllerOptions>
  ) {
    super(manipulator);
    this.hasHandle = true;
    this.options = { exceptEndPoints: false, ...options };
    this.gridSnapper = new GridSnapper();
    this.controlPoint = 0;
    this.controlPath = [];
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return (
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape instanceof Path &&
      shape.pathEditable &&
      !editor.pointerDownUnselectedShape &&
      !editor.duplicatedDragging
    );
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    const p = ccs2lcs(editor.canvas, shape, [e.x, e.y]);
    const idx = findControlPoint(editor, shape as Path, p);
    return this.options.exceptEndPoints
      ? idx > 0 && idx < (shape as Path).path.length - 1
      : idx >= 0;
  }

  /**
   * Returns mouse cursor for the controller
   * @returns cursor [type, angle]
   */
  mouseCursor(
    editor: Editor,
    shape: Shape,
    e: CanvasPointerEvent
  ): [string, number] {
    return [Cursor.POINTER, 0];
  }

  initialize(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {
    this.controlPoint = findControlPoint(
      editor,
      shape as Path,
      this.dragStartPoint
    );
    this.controlPath = geometry.pathCopy((shape as Path).path);

    if (this.controlPoint >= 0) {
      this.gridSnapper.setPointToSnap(
        editor,
        this,
        this.controlPath[this.controlPoint]
      );
    }

    editor.transform.startAction(ActionKind.REPATH);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    // snap dragging points
    this.gridSnapper.snap(editor, shape, this);

    let newPath = geometry.pathCopy(this.controlPath);

    // update the path
    newPath[this.controlPoint][0] += this.dx;
    newPath[this.controlPoint][1] += this.dy;

    // magnet first point to last point
    if (
      this.controlPoint === 0 &&
      geometry.distance(newPath[0], newPath[newPath.length - 1]) <
        MAGNET_THRESHOLD
    ) {
      newPath[0][0] = newPath[newPath.length - 1][0];
      newPath[0][1] = newPath[newPath.length - 1][1];
    }

    // magnet last point to first point
    if (
      this.controlPoint === newPath.length - 1 &&
      geometry.distance(newPath[0], newPath[newPath.length - 1]) <
        MAGNET_THRESHOLD
    ) {
      newPath[newPath.length - 1][0] = newPath[0][0];
      newPath[newPath.length - 1][1] = newPath[0][1];
    }

    // update ghost by simplified routing
    newPath = reducePath(newPath, LINE_STRATIFY_ANGLE_THRESHOLD);

    // transform shape
    editor.transform.transact((tx) => {
      const canvas = editor.canvas;
      const page = editor.getCurrentPage()!;
      setPath(tx, shape as Path, newPath);
      resolveAllConstraints(tx, page, canvas);
    });
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Path, e: CanvasPointerEvent) {
    editor.transform.endAction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const path = (shape as Path).path;
    // draw control points
    const startPoint = this.options.exceptEndPoints ? 1 : 0;
    const endPoint = this.options.exceptEndPoints
      ? path.length - 2
      : path.length - 1;
    if (endPoint >= startPoint) {
      for (let i = startPoint; i <= endPoint; i++) {
        const p = lcs2ccs(canvas, shape, path[i]);
        guide.drawControlPoint(canvas, p, 1);
      }
    }
    // draw filled junction control point if closed polygon
    if ((shape as Path).isClosed()) {
      const p = lcs2ccs(canvas, shape, path[0]);
      guide.drawControlPoint(canvas, p, 5);
    }
  }

  /**
   * Draw ghost while dragging
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {
    // super.drawDragging(editor, shape, e);
    // const canvas = editor.canvas;
    // const path = this.ghost;
    // // draw ghost
    // guide.drawPolylineInLCS(
    //   canvas,
    //   shape,
    //   this.ghost,
    //   (shape as Line).lineType,
    //   geometry.isClosed(this.ghost)
    // );
    // let pathCCS = path.map((p) => lcs2ccs(canvas, shape, p));
    // guide.drawDottedPolyline(canvas, pathCCS);
    // // draw control points
    // const startPoint = this.options.exceptEndPoints ? 1 : 0;
    // const endPoint = this.options.exceptEndPoints ? path.length - 2 : path.length - 1;
    // if (endPoint >= startPoint) {
    //   for (let i = startPoint; i <= endPoint; i++) {
    //     const p = lcs2ccs(canvas, shape, path[i]);
    //     guide.drawControlPoint(canvas, p, 1);
    //   }
    // }
    // // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
