import type { Canvas } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Connector, Line, Shape } from "../shapes";
import { angleInCCS, lcs2ccs } from "../graphics/utils";
import optjs from "optimization-js";
import type { Editor } from "../editor";
import { inControlPoint } from "../utils/guide";
import {
  CONNECTION_POINT_APOTHEM,
  CONTROL_POINT_APOTHEM,
  MAGNET_THRESHOLD,
} from "../graphics/const";

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
    editor.doc?.getShapeAt(canvas, point, connector ? [connector] : []) ?? null;
  let anchor = [0.5, 0.5];
  if (!end?.connectable) end = null;
  if (end instanceof Line) {
    const p = geometry.findNearestOnPath(
      point,
      end.path,
      CONTROL_POINT_APOTHEM * 2
    );
    if (p) {
      const position = geometry.getPositionOnPath(end.path, p);
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
  line: Line,
  p: number[]
): number {
  const canvas = editor.canvas;
  const path = line.path;
  const angle = angleInCCS(canvas, line);
  const pCCS = lcs2ccs(canvas, line, p);
  if (path.length > 1) {
    for (let i = 0; i < path.length; i++) {
      const cp = path[i];
      const cpCCS = lcs2ccs(canvas, line, cp);
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
 * Find a connection point near a given point from all shapes
 * @param editor
 * @param line
 * @param point
 * @returns a triple of [end, cp, cpIndex]
 */
export function findConnectionPoint(
  editor: Editor,
  line: Line | null,
  point: number[]
): [Shape | null, number[] | null, number] {
  const canvas = editor.canvas;
  let end: Shape | null =
    editor.doc?.getShapeAt(canvas, point, line ? [line] : []) ?? null;
  let cp: number[] | null = null;
  let cpIndex = -1;
  // prevent connecting to the one of edge's descendant
  if (end && line?.isDescendant(end)) {
    end = null;
  }
  // find from node's connection points
  editor.doc?.traverse((shape) => {
    const s = shape as Shape;
    if (
      !cp &&
      s.enable &&
      s.connectable &&
      s !== line &&
      !line?.isDescendant(s)
    ) {
      const xps = s
        .getConnectionPoints()
        .map((p) => s.localCoordTransform(canvas, p, true));
      if (Array.isArray(xps) && xps.length > 0) {
        for (let i = 0; i < xps.length; i++) {
          const xp = xps[i];
          if (
            geometry.inSquare(
              point,
              xp,
              (CONNECTION_POINT_APOTHEM + 1) * canvas.px
            )
          ) {
            end = s;
            cp = xp;
            cpIndex = i;
            break;
          }
        }
      }
    }
  });
  // find from outlines
  if (!cp) {
    editor.doc?.traverse((shape) => {
      const s = shape as Shape;
      if (
        !cp &&
        s.enable &&
        s.connectable &&
        s !== line &&
        !line?.isDescendant(s)
      ) {
        const outline = s
          .getOutline()
          .map((p) => s.localCoordTransform(canvas, p, true));
        const seg = geometry.getNearSegment(
          point,
          outline,
          MAGNET_THRESHOLD * 2
        );
        if (seg > -1) {
          const ip = geometry.findNearestOnLine(point, [
            outline[seg],
            outline[seg + 1],
          ]);
          if (ip) {
            end = s;
            cp = ip;
          }
        }
      }
    });
  }
  // prevent connecting to self
  if (end === line) end = null;
  return [end, cp, cpIndex];
}
