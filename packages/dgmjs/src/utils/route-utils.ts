/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import {
  LINE_STRATIFY_ANGLE_THRESHOLD,
  MAGNET_THRESHOLD,
} from "../graphics/const";
import * as geometry from "../graphics/geometry";
import type { Canvas } from "../graphics/graphics";
import { Box, Line, RouteType, Shape } from "../shapes";

function setTailEnd(path: number[][], point: number[]) {
  path[0][0] = point[0];
  path[0][1] = point[1];
}

function setHeadEnd(path: number[][], point: number[]) {
  path[path.length - 1][0] = point[0];
  path[path.length - 1][1] = point[1];
}

function getTailSegment(path: number[][]) {
  const p1 = path[1];
  const p2 = path[0];
  return [p1, p2];
}

function getHeadSegment(path: number[][]) {
  const p1 = path[path.length - 2];
  const p2 = path[path.length - 1];
  return [p1, p2];
}

function getTailJunction(path: number[][], tail: Shape): number[] | null {
  const outline = tail
    .getOutline()
    .map((p) => tail.localCoordTransform(null as any, p, true));
  return geometry.pathIntersect(outline, getTailSegment(path), false, true);
}

function getHeadJunction(path: number[][], head: Shape): number[] | null {
  const outline = head
    .getOutline()
    .map((p) => head.localCoordTransform(null as any, p, true));
  return geometry.pathIntersect(outline, getHeadSegment(path), false, true);
}

function setRectilinearTailEnd(path: number[][], point: number[]) {
  const p1 = path[1];
  const p2 = path[0];
  if (geometry.isHorz(p1, p2)) {
    if (path.length > 2) {
      p2[0] = point[0];
      p2[1] = point[1];
      p1[1] = point[1];
    } else {
      p2[0] = point[0];
    }
  } else {
    if (path.length > 2) {
      p2[0] = point[0];
      p2[1] = point[1];
      p1[0] = point[0];
    } else {
      p2[1] = point[1];
    }
  }
}

function setRectilinearHeadEnd(path: number[][], point: number[]) {
  const p1 = path[path.length - 2];
  const p2 = path[path.length - 1];
  if (geometry.isHorz(p1, p2)) {
    if (path.length > 2) {
      p2[0] = point[0];
      p2[1] = point[1];
      p1[1] = point[1];
    } else {
      p2[0] = point[0];
    }
  } else {
    if (path.length > 2) {
      p2[0] = point[0];
      p2[1] = point[1];
      p1[0] = point[0];
    } else {
      p2[1] = point[1];
    }
  }
}

function reduceRectilinearTailSegments(
  path: number[][],
  tailEndPoint: number[]
) {
  let segment = getTailSegment(path);
  while (
    path.length > 2 &&
    geometry.distance(segment[0], segment[1]) < MAGNET_THRESHOLD
  ) {
    path.shift(); // remove first
    setRectilinearTailEnd(path, tailEndPoint);
    segment = getTailSegment(path);
  }
}

function reduceRectilinearHeadSegments(
  path: number[][],
  headEndPoint: number[]
) {
  let segment = getHeadSegment(path);
  while (
    path.length > 2 &&
    geometry.distance(segment[0], segment[1]) < MAGNET_THRESHOLD
  ) {
    path.pop(); // remove last
    setRectilinearHeadEnd(path, headEndPoint);
    segment = getHeadSegment(path);
  }
}

function addRectilinearTailSegment(path: number[][], point: number[]) {
  const p1 = path[1];
  const p2 = path[0];
  if (geometry.isHorz(p1, p2)) {
    path.unshift([p2[0], p2[1] + MAGNET_THRESHOLD]); // add vertical segment
  } else {
    path.unshift([p2[0] + MAGNET_THRESHOLD, p2[1]]); // add horzontal segment
  }
  setRectilinearTailEnd(path, point);
}

function addRectilinearHeadSegment(path: number[][], point: number[]) {
  const p1 = path[path.length - 2];
  const p2 = path[path.length - 1];
  if (geometry.isHorz(p1, p2)) {
    path.push([p2[0], p2[1] + MAGNET_THRESHOLD]); // add vertical segment
  } else {
    path.push([p2[0] + MAGNET_THRESHOLD, p2[1]]); // add horzontal segment
  }
  setRectilinearHeadEnd(path, point);
}

export function reduceObliquePath(
  path: number[][],
  stratifyAngleThreshold: number
): number[][] {
  let newPath = geometry.pathCopy(path);
  let i = 0;
  while (i < newPath.length - 2) {
    const p1 = newPath[i];
    const p2 = newPath[i + 1];
    const p3 = newPath[i + 2];
    const _angle = geometry.normalizeAngle(
      geometry.angle(p2, p3) - geometry.angle(p2, p1)
    );
    if (geometry.equals(p1, p2)) {
      newPath.splice(i, 1);
    } else if (Math.abs(180 - _angle) < stratifyAngleThreshold) {
      newPath.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  return newPath;
}

export function reduceRectilinearPath(path: number[][]): number[][] {
  let newPath = geometry.pathCopy(path);
  let i = 0;
  while (newPath.length > 3 && i < newPath.length - 3) {
    const p2 = newPath[i + 1];
    const p3 = newPath[i + 2];
    if (geometry.distance(p2, p3) < 0.001) {
      newPath.splice(i + 1, 2);
    }
    i++;
  }
  return newPath;
}

/**
 * Move end point
 */
export function moveEndPoint(
  path: number[][],
  routeType: string,
  isHead: boolean,
  point: number[]
) {
  switch (routeType) {
    case RouteType.OBLIQUE: {
      if (isHead) {
        path[path.length - 1][0] = point[0];
        path[path.length - 1][1] = point[1];
      } else {
        path[0][0] = point[0];
        path[0][1] = point[1];
      }
      break;
    }
    case RouteType.RECTILINEAR: {
      let i1 = isHead ? path.length - 2 : 1;
      let i2 = isHead ? path.length - 1 : 0;
      const isHorz = geometry.isHorz(path[i1], path[i2]);
      if (isHorz) {
        path[i2][0] = point[0];
        path[i2][1] = point[1];
        path[i1][1] = point[1];
      } else {
        path[i2][0] = point[0];
        path[i2][1] = point[1];
        path[i1][0] = point[0];
      }
      break;
    }
  }
}

/**
 * Magnet the segment to other segments in the path
 */
export function magnetSegment(path: number[][], segment: number) {
  const newPath = geometry.pathCopy(path);
  // segment points
  const p1 = newPath[segment];
  const p2 = newPath[segment + 1];
  // prev-point of segment
  const p0 = segment > 0 ? newPath[segment - 1] : null;
  const d0 = p0 ? geometry.distance(p0, p1) : Number.MAX_SAFE_INTEGER;
  // next-point of segment
  const p3 = segment < newPath.length - 2 ? newPath[segment + 2] : null;
  const d3 = p3 ? geometry.distance(p2, p3) : Number.MAX_SAFE_INTEGER;
  if (p0 && d0 < MAGNET_THRESHOLD && d0 <= d3) {
    if (geometry.isHorz(p1, p2)) {
      p1[1] = p0[1];
      p2[1] = p0[1];
    } else {
      p1[0] = p0[0];
      p2[0] = p0[0];
    }
  }
  if (p3 && d3 < MAGNET_THRESHOLD && d3 < d0) {
    if (geometry.isHorz(p1, p2)) {
      p1[1] = p3[1];
      p2[1] = p3[1];
    } else {
      p1[0] = p3[0];
      p2[0] = p3[0];
    }
  }
  return newPath;
}

/**
 * Adjust oblique route
 */
export function adjustObliqueRoute(
  path: number[][],
  head: Shape | null,
  headCP: number,
  tail: Shape | null,
  tailCP: number
): number[][] {
  if (path.length >= 2) {
    const newPath = reduceObliquePath(
      geometry.pathCopy(path),
      LINE_STRATIFY_ANGLE_THRESHOLD
    );
    // attach tail point
    if (tail && tailCP >= 0) {
      // attach to connection point
      const cp = tail.localCoordTransform(
        null as any,
        tail?.getConnectionPoints()[tailCP],
        true
      );
      setTailEnd(newPath, cp);
    } else {
      // attach to outline
      if (tail instanceof Box) {
        const cp = tail.getCenter();
        setTailEnd(newPath, cp);
        let jp = getTailJunction(newPath, tail);
        if (jp) setTailEnd(newPath, jp);
      } else if (tail instanceof Line) {
        let jp = getTailJunction(newPath, tail);
        if (!jp) jp = geometry.positionOnPath(tail.path, 0.5);
        if (jp) setTailEnd(newPath, jp);
      }
    }
    // attach head point
    if (head && headCP >= 0) {
      // attach to connection point
      const cp = head.localCoordTransform(
        null as any,
        head?.getConnectionPoints()[headCP],
        true
      );
      setHeadEnd(newPath, cp);
    } else {
      // attach to outline
      if (head instanceof Box) {
        const cp = head.getCenter();
        setHeadEnd(newPath, cp);
        let jp = getHeadJunction(newPath, head);
        if (jp) setHeadEnd(newPath, jp);
      } else if (head instanceof Line) {
        let jp = getHeadJunction(newPath, head);
        if (!jp) jp = geometry.positionOnPath(head.path, 0.5);
        if (jp) setHeadEnd(newPath, jp);
      }
    }
    return newPath;
  }
  return path;
}

/**
 * Adjust rectilinear route
 */
export function adjustRectilinearRoute(
  path: number[][],
  head: Shape | null,
  headCP: number,
  tail: Shape | null,
  tailCP: number
): number[][] {
  if (path.length >= 2) {
    let newPath = reduceRectilinearPath(geometry.pathCopy(path));
    // attach tail point
    if (tail && tailCP >= 0) {
      // attach to connection point
      const cp = tail.localCoordTransform(
        null as any,
        tail?.getConnectionPoints()[tailCP],
        true
      );
      newPath.unshift(cp); // add to first
      reduceRectilinearTailSegments(newPath, cp);
    } else if (tail) {
      // attach to outline
      let jp = getTailJunction(newPath, tail);
      if (!jp) {
        const cp = tail.getCenter();
        addRectilinearTailSegment(newPath, cp);
        jp = getTailJunction(newPath, tail);
      }
      if (jp) setRectilinearTailEnd(newPath, jp);
    }
    // adjust head point
    if (head && headCP >= 0) {
      // attach to connection point
      const cp = head.localCoordTransform(
        null as any,
        head?.getConnectionPoints()[headCP],
        true
      );
      newPath.push(cp); // add to last
      reduceRectilinearHeadSegments(newPath, cp);
    } else if (head) {
      // attach to outline
      let jp = getHeadJunction(newPath, head);
      if (!jp) {
        const cp = head.getCenter();
        addRectilinearHeadSegment(newPath, cp);
        jp = getHeadJunction(newPath, head);
      }
      if (jp) setRectilinearHeadEnd(newPath, jp);
    }
    return newPath;
  }
  return path;
}
