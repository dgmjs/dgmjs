import { pointsOnBezierCurves } from "../utils/points-on-curve";

/**
 * Geometry data types are represented as follows:
 * - Point : array of two numbers
 * eg: [0, 0]
 *
 * - Line : array of two points
 * eg: [[0, 0], [100, 100]]
 *
 * - Rect : array of two points
 * eg: [[0, 0], [100, 100]]
 *
 * - Path : array of points
 * eg: [[0, 0], [10, 10], [20, 20], ...]
 */

/**
 * Copy a point
 */
function copy(point: number[]): number[] {
  return [point[0], point[1]];
}

/**
 * assign point2 to point1
 */
function assign(point1: number[], point2: number[]): number[] {
  point1[0] = point2[0];
  point1[1] = point2[1];
  return point1;
}

/**
 * Test point1 equals to point2
 */
function equals(point1: number[], point2: number[]): boolean {
  return point1[0] === point2[0] && point1[1] === point2[1];
}

/**
 * Quantize point
 */
function quantize(point: number[]): number[] {
  const x = Math.round(point[0]);
  const y = Math.round(point[1]);
  return [x, y];
}

/**
 * Returns a mid point of the given two points
 */
function mid(point1: number[], point2: number[]): number[] {
  return [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
}

/**
 * Returns a point moved as dx and dy
 */
function move(point: number[], dx: number, dy: number): number[] {
  return [point[0] + dx, point[1] + dy];
}

/**
 * Test whether the two points are horizontal
 */
function isHorz(point1: number[], point2: number[]): boolean {
  const dx = Math.abs(point1[0] - point2[0]);
  const dy = Math.abs(point1[1] - point2[1]);
  return dx > dy;
}

/**
 * Test whether the two points are vertical
 */
function isVert(point1: number[], point2: number[]): boolean {
  return !isHorz(point1, point2);
}

/**
 * Test whether a point is inside a rect
 */
function inRect(point: number[], rect: number[][]): boolean {
  let r = normalizeRect(rect);
  return (
    r[0][0] <= point[0] &&
    point[0] <= r[1][0] &&
    r[0][1] <= point[1] &&
    point[1] <= r[1][1]
  );
}

/**
 * Test whether a point is inside a square rect
 * @param point
 * @param center center point of square
 * @param apothem apothem of square
 */
function inSquare(point: number[], center: number[], apothem: number): boolean {
  return inRect(point, square(center, apothem));
}

/**
 * Test whether a point is inside a circle
 * @param point
 * @param center center point of circle
 * @param radius radius of circle
 */
function inCircle(point: number[], center: number[], radius: number): boolean {
  let d = distance(point, center);
  return d <= radius;
}

/**
 * Performs the even-odd-rule Algorithm (a raycasting algorithm) to find out
 * whether a point is in a given polygon.
 * Ref: https://www.algorithms-and-technologies.com/point_in_polygon/javascript
 */
function inPolygon(point: number[], polygon: number[][]): boolean {
  let odd = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; i++) {
    if (
      polygon[i][1] > point[1] !== polygon[j][1] > point[1] &&
      point[0] <
        ((polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1])) /
          (polygon[j][1] - polygon[i][1]) +
          polygon[i][0]
    ) {
      odd = !odd;
    }
    j = i;
  }
  return odd;
}

/**
 * Distance between two points
 */
function distance(point1: number[], point2: number[]): number {
  return Math.sqrt(
    (point1[0] - point2[0]) * (point1[0] - point2[0]) +
      (point1[1] - point2[1]) * (point1[1] - point2[1])
  );
}

/**
 * Squared distance between two points
 */
function distance2(point1: number[], point2: number[]): number {
  return (
    Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)
  );
}

/**
 * Shortest distance from a point to line
 */
function distanceToLine(point: number[], line: number[][]): number {
  let sp = line[0];
  let ep = line[1];
  let l2 = distance2(sp, ep);
  if (l2 === 0) return distance2(point, sp);
  let t =
    ((point[0] - sp[0]) * (ep[0] - sp[0]) +
      (point[1] - sp[1]) * (ep[1] - sp[1])) /
    l2;
  t = Math.max(0, Math.min(1, t));
  let squared = distance2(point, [
    sp[0] + t * (ep[0] - sp[0]),
    sp[1] + t * (ep[1] - sp[1]),
  ]);
  return Math.sqrt(squared);
}

/**
 * Shortest distance from a point to path
 */
function distanceToPath(point: number[], path: number[][]): number {
  let d = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < path.length - 1; i++) {
    const seg = [path[i], path[i + 1]];
    d = Math.min(d, distanceToLine(point, seg));
  }
  return d;
}

/**
 * Returns an intersect point of two finite lines
 * Ref: https://jsfiddle.net/justin_c_rounds/Gd2S2/light/
 * @param line1
 * @param line2
 * @param lb1 line1 is infinite to backward
 * @param lf1 line1 is infinite to forward
 * @param lb2 line2 is infinite to backward
 * @param lf2 line2 is infinite to forward
 * @returns null if not intersect
 */
function intersect(
  line1: number[][],
  line2: number[][],
  lb1: boolean = false,
  lf1: boolean = false,
  lb2: boolean = false,
  lf2: boolean = false
): number[] | null {
  const p1 = line1[0];
  const p2 = line1[1];
  const p3 = line2[0];
  const p4 = line2[1];
  let d = (p4[1] - p3[1]) * (p2[0] - p1[0]) - (p4[0] - p3[0]) * (p2[1] - p1[1]);
  if (d == 0) {
    return null;
  }
  let a = p1[1] - p3[1];
  let b = p1[0] - p3[0];
  let n1 = (p4[0] - p3[0]) * a - (p4[1] - p3[1]) * b;
  let n2 = (p2[0] - p1[0]) * a - (p2[1] - p1[1]) * b;
  a = n1 / d;
  b = n2 / d;
  let x = p1[0] + a * (p2[0] - p1[0]);
  let y = p1[1] + a * (p2[1] - p1[1]);
  let in1 = (a >= 0 && a <= 1) || (lb1 && a < 0) || (lf1 && a > 1);
  let in2 = (b >= 0 && b <= 1) || (lb2 && b < 0) || (lf2 && b > 1);
  if (in1 && in2) {
    return [x, y];
  }
  return null;
}

/**
 * Return a square rect with center point and apothem
 * @param center center point of square
 * @param apothem distance center point to line segment
 */
function square(center: number[], apothem: number): number[][] {
  return [
    [center[0] - apothem, center[1] - apothem],
    [center[0] + apothem, center[1] + apothem],
  ];
}

/**
 * Returns whether a rect overlap (or contains) a line
 */
function lineOverlapRect(line: number[][], rect: number[][]): boolean {
  const p1 = line[0];
  const p2 = line[1];
  if (inRect(p1, rect) && inRect(p2, rect)) return true; // contains
  const polygon = rectToPolygon(rect);
  return (
    intersect(line, [polygon[0], polygon[1]]) !== null ||
    intersect(line, [polygon[1], polygon[2]]) !== null ||
    intersect(line, [polygon[2], polygon[3]]) !== null ||
    intersect(line, [polygon[3], polygon[4]]) !== null
  );
}

/**
 * Find nearest point on line
 * @param point
 * @param line
 * @returns nearest point on line
 */
function findNearestOnLine(p: number[], line: number[][]): number[] {
  const a = line[0];
  const b = line[1];
  const atob = [b[0] - a[0], b[1] - a[1]];
  const atop = [p[0] - a[0], p[1] - a[1]];
  const len = atob[0] * atob[0] + atob[1] * atob[1];
  let dot = atop[0] * atob[0] + atop[1] * atob[1];
  const t = Math.min(1, Math.max(0, dot / len));
  dot = (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
  return [a[0] + atob[0] * t, a[1] + atob[1] * t];
}

/**
 * Find nearest point on path
 * @param point
 * @param path
 * @param distance
 * @returns nearest point on path
 */
function findNearestOnPath(
  p: number[],
  path: number[][],
  distance: number
): number[] | null {
  const seg = getNearSegment(p, path, distance);
  if (seg > -1) {
    return findNearestOnLine(p, [path[seg], path[seg + 1]]);
  }
  return null;
}

/**
 * Returns width of the rect
 */
function width(rect: number[][]): number {
  return Math.abs(rect[1][0] - rect[0][0]);
}

/**
 * Returns height of the rect
 */
function height(rect: number[][]): number {
  return Math.abs(rect[1][1] - rect[0][1]);
}

/**
 * Returns an copy of the rect
 */
function copyRect(rect: number[][]): number[][] {
  return [copy(rect[0]), copy(rect[1])];
}

/**
 * Returns an expanded the rect as the delta
 */
function expandRect(rect: number[][], delta: number): number[][] {
  return [
    [rect[0][0] - delta, rect[0][1] - delta],
    [rect[1][0] + delta, rect[1][1] + delta],
  ];
}

/**
 * Returns an union of two rects
 */
function unionRect(rect1: number[][], rect2: number[][]): number[][] {
  return [
    [Math.min(rect1[0][0], rect2[0][0]), Math.min(rect1[0][1], rect2[0][1])],
    [Math.max(rect1[1][0], rect2[1][0]), Math.max(rect1[1][1], rect2[1][1])],
  ];
}

/**
 * Returns an scaled rect
 */
function scaleRect(rect: number[][], scale: number): number[][] {
  return [
    [rect[0][0] * scale, rect[0][1] * scale],
    [rect[1][0] * scale, rect[1][1] * scale],
  ];
}

/**
 * Return scale-downed size with scale fit inside the given maximum size
 * @returns [scaled-width, scaled-height, scale]
 */
function fitScaleTo(
  size: number[],
  maxSize: number[],
  maxScale: number = 1
): number[] {
  let w = size[0];
  let h = size[1];
  let scale = 1;
  const scaleW = maxSize[0] / size[0];
  const scaleH = maxSize[1] / size[1];
  scale = Math.min(scaleW, scaleH);
  if (scale > maxScale) scale = maxScale;
  w = Math.ceil(w * scale);
  h = Math.ceil(h * scale);
  return [w, h, scale];
}

/**
 * Test whether two rects are overlap or not
 */
function overlapRect(rect1: number[][], rect2: number[][]): boolean {
  return !(
    rect1[0][0] > rect2[1][0] ||
    rect2[0][0] > rect1[1][0] ||
    rect1[0][1] > rect2[1][1] ||
    rect2[0][1] > rect1[1][1]
  );
}

/**
 * Returns a normalized rect
 */
function normalizeRect(rect: number[][]): number[][] {
  let x1: number, x2: number, y1: number, y2: number;
  if (rect[0][0] < rect[1][0]) {
    x1 = rect[0][0];
    x2 = rect[1][0];
  } else {
    x1 = rect[1][0];
    x2 = rect[0][0];
  }
  if (rect[0][1] < rect[1][1]) {
    y1 = rect[0][1];
    y2 = rect[1][1];
  } else {
    y1 = rect[1][1];
    y2 = rect[0][1];
  }
  return [
    [x1, y1],
    [x2, y2],
  ];
}

/**
 * Convert a rect to a polygon
 * @param rect
 * @param close close the polygon
 * @returns polygon
 */
function rectToPolygon(rect: number[][], close: boolean = true): number[][] {
  let poly = [
    [rect[0][0], rect[0][1]],
    [rect[1][0], rect[0][1]],
    [rect[1][0], rect[1][1]],
    [rect[0][0], rect[1][1]],
  ];
  if (close) {
    poly.push([rect[0][0], rect[0][1]]);
  }
  return poly;
}

/**
 * Get a center point of rect
 */
function center(rect: number[][]): number[] {
  return [(rect[0][0] + rect[1][0]) / 2, (rect[0][1] + rect[1][1]) / 2];
}

/**
 * Test whether the two reacts are equals or not
 */
function equalRect(rect1: number[][], rect2: number[][]): boolean {
  return (
    rect1[0][0] === rect2[0][0] &&
    rect1[0][1] === rect2[0][1] &&
    rect1[1][0] === rect2[1][0] &&
    rect1[1][1] === rect2[1][1]
  );
}

/**
 * Returns the index of segment which is closer to the point than distance
 * @param point
 * @param path
 * @param distance
 * @returns index of segment (-1 if not found)
 */
function getNearSegment(
  point: number[],
  path: number[][],
  distance: number
): number {
  for (let i = 0; i < path.length - 1; i++) {
    const dist = distanceToLine(point, [path[i], path[i + 1]]);
    if (dist < distance) {
      return i;
    }
  }
  return -1;
}

/**
 * Copy a path
 */
function pathCopy(path: number[][]): number[][] {
  return path.map((p) => copy(p));
}

/**
 * Return total length of the given path
 */
function pathLength(path: number[][]): number {
  let len = 0;
  for (let i = 1; i < path.length; i++) {
    const d = distance(path[i - 1], path[i]);
    len += d;
  }
  return len;
}

/**
 * Compare two paths are equals (allows tolerance)
 */
function equalsPath(path1: number[][], path2: number[][], tolerance = 0) {
  if (path1.length !== path2.length) return false;
  let delta = 0;
  for (let i = 0; i < path1.length; i++) {
    const p1 = path1[i];
    const p2 = path2[i];
    delta += distance(p1, p2);
  }
  return delta <= tolerance;
}

/**
 * Get a bounding rect of a path
 */
function boundingRect(path: number[][]): number[][] {
  const xs = path.map((p) => p[0]);
  const ys = path.map((p) => p[1]);
  return [
    [Math.min(...xs), Math.min(...ys)],
    [Math.max(...xs), Math.max(...ys)],
  ];
}

/**
 * Get a bounding rect polygon of path
 */
function boundingPath(path: number[][]): number[][] {
  return rectToPolygon(boundingRect(path));
}

/**
 * Get intersection point between a infinite line and a path
 * @param path
 * @param line
 * @param infiniteBackward line is infinite to backward
 * @param infiniteForward line is infinite to forward
 * @param closeToStart return closest point to line[0] if true or line[1] if false
 * @returns Returns a intersection point or null
 */
function pathIntersect(
  path: number[][],
  line: number[][],
  infiniteBackward: boolean = true,
  infiniteForward: boolean = true,
  closeToStart: boolean = true
): number[] | null {
  let ps = [];
  for (let i = 0; i < path.length - 1; i++) {
    let seg = [path[i], path[i + 1]];
    let p = intersect(
      seg,
      line,
      false,
      false,
      infiniteBackward,
      infiniteForward
    );
    if (p) {
      ps.push([p[0], p[1], distance(p, line[closeToStart ? 0 : 1])]); // [x, y, distance]
    }
  }
  if (ps.length > 0) {
    ps.sort((a, b) => a[2] - b[2]); // sort by distance
    return copy(ps[0]); // returns closest point
  }
  return null;
}

/**
 * Project points onto a range
 * @param points
 * @return projected points
 */
function projectPoints(
  points: number[][],
  fromRect: number[][],
  toRect: number[][]
) {
  const ox = fromRect[0][0];
  const oy = fromRect[0][1];
  const dx = toRect[0][0] - ox;
  const dy = toRect[0][1] - oy;
  const rx = width(toRect) / width(fromRect);
  const ry = height(toRect) / height(fromRect);
  const ps = points.map((p) => [
    ox + (p[0] - ox) * rx + dx,
    oy + (p[1] - oy) * ry + dy,
  ]);
  return ps;
}

/**
 * Generate a path from start point to end point
 * @param start
 * @param end
 * @param rectilinear generated path is rectilinear
 * @returns Returns a path
 */
function generatePath(
  start: number[],
  end: number[],
  rectilinear: boolean = false
) {
  if (rectilinear) {
    const rect = normalizeRect([start, end]);
    const horz = width(rect) > height(rect);
    // change path based on horz or vert
    const mp = mid(start, end);
    if (horz) {
      return [start, [mp[0], start[1]], [mp[0], end[1]], end];
    } else {
      return [start, [start[0], mp[1]], [end[0], mp[1]], end];
    }
  } else {
    return [start, end];
  }
}

/**
 * Return wether is this rectilinear line or not
 */
function isRectilinear(path: number[][]): boolean {
  for (let i = 1, len = path.length; i < len; i++) {
    const p0 = path[i - 1];
    const p1 = path[i];
    if (p0[0] !== p1[0] && p0[1] !== p1[1]) {
      return false;
    }
  }
  return true;
}

/**
 * Return whether is the path is closed or not
 */
function isClosed(path: number[][]): boolean {
  return path.length > 3 && distance(path[0], path[path.length - 1]) < 1;
}

/**
 * Get the angle in degree between two points
 */
function angle(center: number[], point: number[]): number {
  var dx = center[0] - point[0];
  var dy = center[1] - point[1];
  return normalizeAngle(Math.atan2(dy, dx) * (180 / Math.PI) - 90);
}

/**
 * Returns a normalized (0~360) angle.
 */
function normalizeAngle(angle: number): number {
  if (angle < 0) angle = angle + 360;
  if (angle >= 360) angle = angle - 360;
  return angle;
}

/**
 * Convert degree to radian
 */
function toRadian(degree: number): number {
  return degree * (Math.PI / 180);
}

/**
 * Convert radian to degree
 */
function toDegree(radian: number): number {
  return radian * (180 / Math.PI);
}

/**
 * Returns a point rotated as a given degree based on the center point
 */
function rotate(
  point: number[],
  angle: number,
  center: number[] = [0, 0]
): number[] {
  const a = toRadian(angle);
  const cos = Math.cos(-a);
  const sin = Math.sin(-a);
  const x =
    cos * (point[0] - center[0]) + sin * (point[1] - center[1]) + center[0];
  const y =
    cos * (point[1] - center[1]) - sin * (point[0] - center[0]) + center[1];
  return [x, y];
}

/**
 * Return points on a given bezier path
 */
function pointsOnBezier(
  path: number[][],
  tolerance?: number,
  distance?: number
): number[][] {
  return pointsOnBezierCurves(
    path as [number, number][],
    tolerance,
    distance
  ) as unknown as number[][];
}

/**
 * Return points on a ellipse outline
 */
function pointsOnEllipse(
  center: number[],
  radiusX: number,
  radiusY: number,
  numPoints: number
): number[][] {
  let points = [];
  let angleIncrement = (2 * Math.PI) / numPoints;
  for (let i = 0; i < numPoints; i++) {
    let angle = i * angleIncrement;
    let x = center[0] + radiusX * Math.cos(angle);
    let y = center[1] + radiusY * Math.sin(angle);
    points.push([x, y]);
  }
  points.push(points[0]);
  return points;
}

/**
 * Returns bezier curve points that passing all the given points
 * From the https://github.com/pshihn/bezier-points
 * Fixed code when the number of points is 3.
 */
function curveToBezier(pointsIn: number[][], curveTightness = 0): number[][] {
  const len = pointsIn.length;
  if (len < 3) {
    throw new Error("A curve must have at least three points.");
  }
  const out: number[][] = [];
  const points: number[][] = [];
  points.push(pointsIn[0], pointsIn[0]);
  for (let i = 1; i < pointsIn.length; i++) {
    points.push(pointsIn[i]);
    if (i === pointsIn.length - 1) {
      points.push(pointsIn[i]);
    }
  }
  const b: number[][] = [];
  const s = 1 - curveTightness;
  out.push(copy(points[0]));
  for (let i = 1; i + 2 < points.length; i++) {
    const cachedVertArray = points[i];
    b[0] = [cachedVertArray[0], cachedVertArray[1]];
    b[1] = [
      cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6,
      cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6,
    ];
    b[2] = [
      points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6,
      points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6,
    ];
    b[3] = [points[i + 1][0], points[i + 1][1]];
    out.push(b[1], b[2], b[3]);
  }
  return out;
}

/**
 * Returns points on curve line path
 */
function curvePathPoints(path: number[][]): number[][] {
  return pointsOnBezier(curveToBezier(path));
}

/**
 * Returns a point that is a specified distance away from a starting point in
 * the direction towards an end point.
 */
function getPointAtDistance(
  point1: number[],
  point2: number[],
  distance: number
): number[] {
  let dx = point2[0] - point1[0];
  let dy = point2[1] - point1[1];
  let len = Math.sqrt(dx * dx + dy * dy);
  let unitX = dx / len;
  let unitY = dy / len;
  let x = point1[0] + distance * unitX;
  let y = point1[1] + distance * unitY;
  return [x, y];
}

/**
 * Return a point which is positioned on the line.
 * If position is 0, returns the start point and if position is 1, returns the end point
 * @param point1 line start point
 * @param point2 line end point
 * @param position position value (0 ~ 1) on the path
 */
function getPointOnLine(
  point1: number[],
  point2: number[],
  position: number
): number[] {
  if (position < 0 || position > 1)
    throw new Error("position should be a value between 0 and 1");
  const d0 = (point2[0] - point1[0]) * position;
  const d1 = (point2[1] - point1[1]) * position;
  return [point1[0] + d0, point1[1] + d1];
}

/**
 * Return a point which is positioned on the path.
 * If position is 0, returns the start point and if position is 1, returns the end point
 * @param path path
 * @param position position value (0 ~ 1) on the path
 */
function getPointOnPath(path: number[][], position: number): number[] {
  if (position < 0 || position > 1)
    throw new Error("position should be a value between 0 and 1");
  const len = pathLength(path);
  let p = len * position;
  for (let i = 1; i < path.length; i++) {
    const l = distance(path[i - 1], path[i]);
    if (p <= l) {
      return getPointOnLine(path[i - 1], path[i], p / l);
    }
    p = p - l;
  }
  return [path[0][0], path[0][1]];
}

/**
 * Get position value of the given point on the given line.
 * It assumes that the point is on the line.
 * Returns 0 if the point is same with the start point of the line,
 * and returns 1 if the point is same with the end point of the line.
 * @param linepoint1
 * @param linepoint2
 * @param point
 */
function getPositionOnLine(
  linepoint1: number[],
  linepoint2: number[],
  point: number[]
): number {
  let d = distance(linepoint1, linepoint2);
  if (d === 0) d = 0.00000001;
  const dp = distance(linepoint1, point);
  return dp / d;
}

/**
 * Get position value of the given point on the given path.
 * It assumes that the point is on the path.
 * Returns 0 if the point is same with the start point of the path,
 * and returns 1 if the point is same with the end point of the path.
 * @param linepoint1
 * @param linepoint2
 * @param point
 * @param dist distance value to find nearest segment
 */
function getPositionOnPath(
  path: number[][],
  point: number[],
  dist: number = 1
): number {
  const len = pathLength(path);
  const segment = getNearSegment(point, path, dist);
  let p = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const l = distance(path[i], path[i + 1]);
    if (i === segment) {
      p += getPositionOnLine(path[i], path[i + 1], point) * l;
      return p / len;
    }
    p += l;
  }
  return 0;
}

function reduceObliquePath(
  path: number[][],
  stratifyAngleThreshold: number
): number[][] {
  let newPath = pathCopy(path);
  let i = 0;
  while (i < newPath.length - 2) {
    const p1 = newPath[i];
    const p2 = newPath[i + 1];
    const p3 = newPath[i + 2];
    const _angle = normalizeAngle(angle(p2, p3) - angle(p2, p1));
    if (equals(p1, p2)) {
      newPath.splice(i, 1);
    } else if (Math.abs(180 - _angle) < stratifyAngleThreshold) {
      newPath.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  return newPath;
}

function reduceRectilinearPath(
  path: number[][],
  reduceSegmentThreshold: number
): number[][] {
  let newPath = pathCopy(path);
  if (newPath.length > 3) {
    let i = 0;
    while (i < newPath.length - 3) {
      const p1 = newPath[i];
      const p2 = newPath[i + 1];
      const p3 = newPath[i + 2];
      const p4 = newPath[i + 3];
      if (distance(p2, p3) < reduceSegmentThreshold) {
        if (isHorz(p2, p3)) {
          const x = (p1[0] + p4[0]) / 2;
          p1[0] = x;
          p4[0] = x;
        } else {
          const y = (p1[1] + p4[1]) / 2;
          p1[1] = y;
          p4[1] = y;
        }
        newPath.splice(i + 1, 2);
      }
      i++;
    }
  }
  return newPath;
}

/**
 * Returns a centroid of the given polygon
 */
function centroidPolygon(polygon: number[][]): number[] {
  const l = polygon.length;
  return polygon.reduce(
    (center, p, i) => {
      center[0] += p[0];
      center[1] += p[1];
      if (i === l - 1) {
        center[0] /= l;
        center[1] /= l;
      }
      return center;
    },
    [0, 0]
  );
}

export {
  copy,
  assign,
  equals,
  quantize,
  mid,
  move,
  isHorz,
  isVert,
  inRect,
  inSquare,
  inCircle,
  inPolygon,
  distance,
  distanceToLine,
  distanceToPath,
  intersect,
  square,
  lineOverlapRect,
  findNearestOnLine,
  findNearestOnPath,
  width,
  height,
  copyRect,
  expandRect,
  unionRect,
  scaleRect,
  fitScaleTo,
  overlapRect,
  normalizeRect,
  rectToPolygon,
  center,
  equalRect,
  getNearSegment,
  pathCopy,
  boundingRect,
  boundingPath,
  pathIntersect,
  projectPoints,
  generatePath,
  isRectilinear,
  isClosed,
  angle,
  normalizeAngle,
  toRadian,
  toDegree,
  rotate,
  pointsOnBezier,
  pointsOnEllipse,
  curveToBezier,
  curvePathPoints,
  pathLength,
  equalsPath,
  getPointAtDistance,
  getPointOnLine,
  getPointOnPath,
  getPositionOnLine,
  getPositionOnPath,
  reduceObliquePath,
  reduceRectilinearPath,
  centroidPolygon,
};
