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
import { Shape, constraintManager, Document, Box } from "../shapes";
import { Canvas } from "../graphics/graphics";
import { Transform } from "../transform/transform";

const schema = z.object({
  stroke: z.boolean().default(false),
  fill: z.boolean().default(false),
  font: z.boolean().default(false),
  textAlignment: z.boolean().default(false),
});

/**
 * Inherit styles from parent
 */
function constraint(
  diagram: Document,
  shape: Shape,
  canvas: Canvas,
  transform: Transform,
  args: z.infer<typeof schema>
) {
  let changed = false;
  const parent = shape.parent as Shape;
  if (parent && !(parent instanceof Document)) {
    changed =
      transform.atomicAssign(shape, "opacity", parent.opacity) || changed;
    if (args.stroke) {
      changed =
        transform.atomicAssign(shape, "strokeColor", parent.strokeColor) ||
        changed;
      changed =
        transform.atomicAssign(shape, "strokeWidth", parent.strokeWidth) ||
        changed;
      changed =
        transform.atomicAssign(shape, "strokePattern", parent.strokePattern) ||
        changed;
      changed =
        transform.atomicAssign(shape, "roughness", parent.roughness) || changed;
    }
    if (args.fill) {
      changed =
        transform.atomicAssign(shape, "fillColor", parent.fillColor) || changed;
      changed =
        transform.atomicAssign(shape, "fillStyle", parent.fillStyle) || changed;
    }
    if (args.font) {
      changed =
        transform.atomicAssign(shape, "fontColor", parent.fontColor) || changed;
      changed =
        transform.atomicAssign(shape, "fontFamily", parent.fontFamily) ||
        changed;
      changed =
        transform.atomicAssign(shape, "fontSize", parent.fontSize) || changed;
      changed =
        transform.atomicAssign(shape, "fontStyle", parent.fontStyle) || changed;
      changed =
        transform.atomicAssign(shape, "fontWeight", parent.fontWeight) ||
        changed;
    }
    if (args.textAlignment && parent instanceof Box) {
      changed =
        transform.atomicAssign(shape, "horzAlign", parent.horzAlign) || changed;
      changed =
        transform.atomicAssign(shape, "vertAlign", parent.vertAlign) || changed;
      changed =
        transform.atomicAssign(shape, "wordWrap", parent.wordWrap) || changed;
      changed =
        transform.atomicAssign(shape, "lineHeight", parent.lineHeight) ||
        changed;
      changed =
        transform.atomicAssign(
          shape,
          "paragraphSpacing",
          parent.paragraphSpacing
        ) || changed;
    }
  }
  return changed;
}

constraintManager.define("inherit-styles", constraint, schema);
