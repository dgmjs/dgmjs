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

import { LINE_STRATIFY_ANGLE_THRESHOLD } from "../graphics/const";
import * as geometry from "../graphics/geometry";
import { Connector, Path } from "../shapes";

/**
 * Move end point
 */
export function moveEndPoint(
  path: number[][],
  isHead: boolean,
  point: number[]
) {
  if (isHead) {
    path[path.length - 1][0] = point[0];
    path[path.length - 1][1] = point[1];
  } else {
    path[0][0] = point[0];
    path[0][1] = point[1];
  }
}

export function reducePath(
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

/**
 * Adjust route
 */
export function adjustRoute(connector: Connector): number[][] {
  if (connector.path.length >= 2) {
    // reduce path
    const newPath = reducePath(
      geometry.pathCopy(connector.path),
      LINE_STRATIFY_ANGLE_THRESHOLD
    );
    // attach tail point
    if (connector.tail) {
      const tp = connector.getTailAnchorPoint();
      const p = newPath[1];
      if (connector.tail instanceof Path && !connector.tail.isClosed()) {
        newPath[0] = geometry.getPointAtDistance(tp, p, connector.tailMargin);
      } else if (connector.tail) {
        const outline = connector.tail
          .getOutline()
          .map((p) =>
            connector.tail!.localCoordTransform(null as any, p, true)
          );
        const jp = geometry.pathIntersect(outline, [p, tp], true, false);
        if (jp) {
          newPath[0] = geometry.getPointAtDistance(jp, p, connector.tailMargin);
        }
      }
    }
    // attach head point
    if (connector.head) {
      const hp = connector.getHeadAnchorPoint();
      const p = newPath[newPath.length - 2];
      if (connector.head instanceof Path && !connector.head.isClosed()) {
        newPath[newPath.length - 1] = geometry.getPointAtDistance(
          hp,
          p,
          connector.headMargin
        );
      } else if (connector.head) {
        const outline = connector.head
          .getOutline()
          .map((p) =>
            connector.head!.localCoordTransform(null as any, p, true)
          );
        const jp = geometry.pathIntersect(outline, [p, hp], true, false);
        if (jp) {
          newPath[newPath.length - 1] = geometry.getPointAtDistance(
            jp,
            p,
            connector.headMargin
          );
        }
      }
    }
    return newPath;
  }
  return connector.path;
}
