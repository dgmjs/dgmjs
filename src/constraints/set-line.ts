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

import { constraintManager, Box, Shape, Line, Diagram } from "../shapes";
import { Canvas } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { z } from "zod";
import { Transform } from "../transform/transform";

const schema = z.object({
  type: z.enum(["free", "horizontal", "vertical"]).default("free"),
});

/**
 * Set line
 */
function constraint(
  diagram: Diagram,
  shape: Shape,
  canvas: Canvas,
  transform: Transform,
  args: z.infer<typeof schema>
) {
  if (shape instanceof Line) {
    const cp = shape.getCenter();
    let path = geometry.pathCopy(shape.path);
    switch (args.type) {
      case "horizontal":
        path = [
          [path[0][0], cp[1]],
          [path[path.length - 1][0], cp[1]],
        ];
        break;
      case "vertical":
        path = [
          [cp[0], path[0][1]],
          [cp[0], path[path.length - 1][1]],
        ];
        break;
    }
    return transform.setPath(shape, path);
  }
  return false;
}

constraintManager.define("set-line", constraint, schema);
