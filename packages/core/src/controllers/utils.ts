import type { Canvas } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Connector, Line, Path, Shape } from "../shapes";
import { angleInCCS, lcs2ccs } from "../graphics/utils";
import optjs from "optimization-js";
import type { Editor } from "../editor";
import { inControlPoint } from "../utils/guide";
import { CONTROL_POINT_APOTHEM, ControllerPosition } from "../graphics/const";

/**
 * Find node's position where is the bestfits to the given enclosure.
 * @param canvas
 * @param shape
 * @param initialLeft
 * @param initialTop
 * @param initialWidth
 * @param initialHeight
 * @param targetEnclosureInCSS outline in CCS
 * @returns return [dx, dy] to move the shape
 */
export function fitEnclosureInCSS(
  canvas: Canvas,
  shape: Shape,
  initialLeft: number,
  initialTop: number,
  initialWidth: number,
  initialHeight: number,
  targetEnclosureInCSS: number[][]
): number[] {
  // save shape states
  let memento = shape.toJSON(false, true);
  shape.left = initialLeft;
  shape.top = initialTop;
  shape.width = initialWidth;
  shape.height = initialHeight;
  let initialState = shape.toJSON(false, true);
  const objective = (vec: number[]) => {
    shape.fromJSON(initialState);
    // move shape as [dx, dy] and get the enclosure
    shape.left = shape.left + vec[0];
    shape.top = shape.top + vec[1];
    let o = shape.getEnclosure().map((p) => lcs2ccs(canvas, shape, p));
    // error value is sum of squared distance for each points
    let e = targetEnclosureInCSS
      .map((p, i) => Math.pow(geometry.distance(p, o[i]), 2))
      .reduce((a, b) => a + b);
    return e;
  };
  let args = [0, 0]; // [dx, dy]
  let solution = optjs.minimize_Powell(objective, args);
  // restore shape states
  shape.fromJSON(memento);
  return solution.argument;
}

/**
 * Find position the bestfits to the given path.
 * @param canvas
 * @param line
 * @param pathInCSS
 * @returns return [dx, dy] to move the shape
 */
export function fitPathInCSS(
  canvas: Canvas,
  line: Line,
  path: number[][],
  pathInCSS: number[][]
): number[] {
  // save shape states
  let memento = line.toJSON(false, true);
  const rect = geometry.boundingRect(path);
  line.path = geometry.pathCopy(path);
  line.left = rect[0][0];
  line.top = rect[0][1];
  line.width = geometry.width(rect);
  line.height = geometry.height(rect);
  let initialState = line.toJSON(false, true);
  const objective = (vec: number[]) => {
    line.fromJSON(initialState);
    // move edge as [dx, dy] and get the outline
    line.path = line.path.map((p) => geometry.move(p, vec[0], vec[1]));
    line.left = line.left + vec[0];
    line.top = line.top + vec[1];
    let o = line.path.map((p) => lcs2ccs(canvas, line, p));
    // error value is sum of squared distance for each points
    let e = pathInCSS
      .map((p, i) => Math.pow(geometry.distance(p, o[i]), 2))
      .reduce((a, b) => a + b);
    return e;
  };
  let args = [0, 0]; // [dx, dy]
  let solution = optjs.minimize_Powell(objective, args);
  // restore shape states
  line.fromJSON(memento);
  return solution.argument;
}

/**
 * Find connection anchor where point in
 *
 * @param editor
 * @param connector
 * @param point
 * @returns [end, anchor]
 */
export function findConnectionAnchor(
  editor: Editor,
  connector: Connector | null,
  point: number[]
): [Shape | null, number[]] {
  const canvas = editor.canvas;
  let end =
    editor
      .getCurrentPage()
      ?.getShapeAt(canvas, point, connector ? [connector] : []) ?? null;
  let anchor = [0.5, 0.5];
  if (!end?.connectable) end = null;
  if (end instanceof Path && !end.isClosed()) {
    const pathGCS = end.path.map((p) =>
      end!.localCoordTransform(null as any, p, true)
    );
    const p = geometry.findNearestOnPath(
      point,
      pathGCS,
      CONTROL_POINT_APOTHEM * 2
    );
    if (p) {
      const position = geometry.getPositionOnPath(pathGCS, p);
      anchor = [position, 1 - position];
    } else {
      end = null;
      anchor = [0.5, 0.5];
    }
  } else if (end) {
    const box = end.getBoundingRect();
    const l = box[0][0];
    const t = box[0][1];
    const w = geometry.width(box);
    const h = geometry.height(box);
    anchor = [(point[0] - l) / w, (point[1] - t) / h];
  }
  return [end, anchor];
}

/**
 * Find control point where point in
 * @returns index of control point
 */
export function findControlPoint(
  editor: Editor,
  pathShape: Path,
  p: number[]
): number {
  const canvas = editor.canvas;
  const path = pathShape.path;
  const angle = angleInCCS(canvas, pathShape);
  const pCCS = lcs2ccs(canvas, pathShape, p);
  if (path.length > 1) {
    for (let i = 0; i < path.length; i++) {
      const cp = path[i];
      const cpCCS = lcs2ccs(canvas, pathShape, cp);
      if (inControlPoint(canvas, pCCS, cpCCS, angle)) return i;
    }
  }
  return -1;
}

/**
 * Get index of the segment control point where mouse in
 */
export function findSegmentControlPoint(
  editor: Editor,
  line: Line,
  p: number[],
  onOutline: boolean = true
): number {
  const canvas = editor.canvas;
  const angle = angleInCCS(canvas, line);
  const path = line.path;
  const outline = onOutline ? line.getOutline() : path;
  const pCCS = lcs2ccs(canvas, line, p);
  if (path.length > 1) {
    for (let i = 0; i < path.length - 1; i++) {
      const p1 = path[i];
      const p2 = path[i + 1];
      const p1pos = i === 0 ? 0 : geometry.getPositionOnPath(outline, p1);
      const p2pos =
        i === path.length - 2 ? 1 : geometry.getPositionOnPath(outline, p2);
      const midpos = (p1pos + p2pos) / 2;
      const mid = geometry.getPointOnPath(outline, midpos);
      const cp = mid;
      const cpCCS = lcs2ccs(canvas, line, cp);
      if (inControlPoint(canvas, pCCS, cpCCS, angle)) return i;
    }
  }
  return -1;
}

/**
 * Returns the point of the position of the controller
 */
export function getControllerPosition(
  canvas: Canvas,
  shape: Shape,
  position: string,
  distance: number = 0
): number[] {
  const delta = distance / canvas.scale;
  const enclosure = shape.getEnclosure();
  if (enclosure && enclosure.length > 0) {
    switch (position) {
      case ControllerPosition.TOP: {
        const cp = geometry.mid(enclosure[0], enclosure[1]);
        return [cp[0], cp[1] - delta];
      }
      case ControllerPosition.RIGHT: {
        const cp = geometry.mid(enclosure[1], enclosure[2]);
        return [cp[0] + delta, cp[1]];
      }
      case ControllerPosition.BOTTOM: {
        const cp = geometry.mid(enclosure[3], enclosure[2]);
        return [cp[0], cp[1] + delta];
      }
      case ControllerPosition.LEFT: {
        const cp = geometry.mid(enclosure[0], enclosure[3]);
        return [cp[0] - delta, cp[1]];
      }
      case ControllerPosition.LEFT_TOP: {
        return [enclosure[0][0] - delta, enclosure[0][1] - delta];
      }
      case ControllerPosition.RIGHT_TOP: {
        return [enclosure[1][0] + delta, enclosure[1][1] - delta];
      }
      case ControllerPosition.RIGHT_BOTTOM: {
        return [enclosure[2][0] + delta, enclosure[2][1] + delta];
      }
      case ControllerPosition.LEFT_BOTTOM: {
        return [enclosure[3][0] - delta, enclosure[3][1] + delta];
      }
    }
  }
  return [-1, -1];
}
