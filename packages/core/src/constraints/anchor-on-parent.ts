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

import { z } from "zod";
import { constraintManager, Box, Line, Shape, Document } from "../shapes";
import * as geometry from "../graphics/geometry";
import { Canvas } from "../graphics/graphics";
import { Transform } from "../transform/transform";

const schema = z.object({});

/**
 * Anchoring on parent
 * @param {Shape} shape
 * @param {Canvas} canvas
 * @param {object} args
 */
function constraint(
  doc: Document,
  shape: Shape,
  canvas: Canvas,
  transform: Transform,
  args: z.infer<typeof schema>
) {
  let changed = false;
  if (shape instanceof Box && !(shape.parent instanceof Document)) {
    const anchorPoint = geometry.getPointOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      shape.anchorPosition
    );
    const shapeCenter = geometry.rotate(
      [anchorPoint[0], anchorPoint[1] - shape.anchorLength],
      shape.anchorAngle,
      anchorPoint
    );
    const left = shapeCenter[0] - shape.width / 2;
    const top = shapeCenter[1] - shape.height / 2;
    const dx = left - shape.left;
    const dy = top - shape.top;
    changed = transform.moveShapes(doc, [shape], dx, dy);
  }
  return changed;
}

constraintManager.define("anchor-on-parent", constraint, schema);
