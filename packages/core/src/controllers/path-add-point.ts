import type { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Line, Path } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import { Cursor, LINE_STRATIFY_ANGLE_THRESHOLD } from "../graphics/const";
import { lcs2ccs, ccs2lcs, angleInCCS } from "../graphics/utils";
import * as guide from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { findSegmentControlPoint, fitPathInCSS } from "./utils";
import { reducePath } from "../utils/route-utils";
import { resolveAllConstraints, setPath } from "../macro";
import { ActionKind } from "../core";

/**
 * PathAddPointController
 */
export class PathAddPointController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * current control point
   */
  controlPoint: number;

  /**
   * current control path
   */
  controlPath: number[][];

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.hasHandle = true;
    this.snap = new Snap();
    this.controlPoint = -1;
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
    return findSegmentControlPoint(editor, shape as Line, p) >= 0;
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

  initialize(editor: Editor, shape: Shape): void {
    this.controlPath = geometry.pathCopy((shape as Line).path);
    this.controlPoint = findSegmentControlPoint(
      editor,
      shape as Line,
      this.dragStartPoint
    );
    editor.transform.startAction(ActionKind.REPATH);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    let newPath = geometry.pathCopy(this.controlPath);
    newPath.splice(
      this.controlPoint + 1,
      0,
      geometry.mid(newPath[this.controlPoint], newPath[this.controlPoint + 1])
    );
    newPath[this.controlPoint + 1][0] += this.dx;
    newPath[this.controlPoint + 1][1] += this.dy;
    // update ghost by simplified routing
    newPath = reducePath(newPath, LINE_STRATIFY_ANGLE_THRESHOLD);

    const canvas = editor.canvas;
    const newPathCCS = newPath.map((p) => lcs2ccs(canvas, shape, p));

    // find best-fit [dx, dy]
    const delta = fitPathInCSS(canvas, shape as Line, newPath, newPathCCS);
    newPath = newPath.map((p) => [p[0] + delta[0], p[1] + delta[1]]);

    // transform shape
    editor.transform.transact((tx) => {
      const page = editor.getCurrentPage()!;
      setPath(tx, shape as Line, newPath);
      resolveAllConstraints(tx, page, canvas);
    });
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Line) {
    editor.transform.endAction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const path = (shape as Line).path;
    const outline = shape.getOutline();
    const angle = angleInCCS(canvas, shape);
    if (path.length > 1) {
      for (let i = 0; i < path.length - 1; i++) {
        const p1 = path[i];
        const p2 = path[i + 1];
        const p1pos = i === 0 ? 0 : geometry.getPositionOnPath(outline, p1);
        const p2pos =
          i === path.length - 2 ? 1 : geometry.getPositionOnPath(outline, p2);
        const midpos = (p1pos + p2pos) / 2;
        const mid = geometry.getPointOnPath(outline, midpos);
        const midCCS = lcs2ccs(canvas, shape, mid);
        guide.drawControlPoint(canvas, midCCS, 4, angle);
      }
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
    // for (let i = 1; i < path.length - 1; i++) {
    //   const p = lcs2ccs(canvas, shape, path[i]);
    //   guide.drawControlPoint(canvas, p, 1);
    // }
    // // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
