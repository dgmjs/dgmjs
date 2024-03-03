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

import { constraintManager, Box, Shape, Document } from "../shapes";
import { Canvas } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { z } from "zod";
import { measureText } from "../utils/text-utils";
import { Transform } from "../transform/transform";

const schema = z.object({
  width: z
    .enum(["ignore", "children", "text", "text-min", "parent", "value"])
    .default("ignore"),
  height: z
    .enum(["ignore", "children", "text", "text-min", "parent", "value"])
    .default("ignore"),
  widthValue: z.number().default(0),
  heightValue: z.number().default(0),
});

/**
 * Set size
 */
function constraint(
  doc: Document,
  shape: Shape,
  canvas: Canvas,
  transform: Transform,
  args: z.infer<typeof schema>
) {
  if (shape instanceof Box) {
    let width = shape.width;
    let height = shape.height;

    // set size to number
    if (args.width === "value") width = args.widthValue;
    if (args.width === "value") height = args.heightValue;

    // set size to "children"
    if (args.width === "children" || args.height === "children") {
      const r = shape.getChildrenBoundingRect();
      width = geometry.width(r) + shape.padding[1] + shape.padding[3];
      height = geometry.height(r) + shape.padding[0] + shape.padding[2];
    }

    // set size to "text" or "text-min"
    if (
      shape instanceof Box &&
      (args.width === "text" ||
        args.width === "text-min" ||
        args.height === "text" ||
        args.height === "text-min")
    ) {
      const textSize = measureText(canvas, shape, shape.text);
      if (args.width === "text")
        width = textSize.minWidth + shape.padding[1] + shape.padding[3];
      if (args.width === "text-min")
        width = Math.max(
          shape.width,
          textSize.width + shape.padding[1] + shape.padding[3]
        );
      if (args.height === "text")
        height = textSize.height + shape.padding[0] + shape.padding[2];
      if (args.height === "text-min")
        height = Math.max(
          shape.height,
          textSize.height + shape.padding[0] + shape.padding[2]
        );
    }

    // set size to "parent"
    if (shape.parent instanceof Box) {
      if (args.width === "parent") width = shape.parent.innerWidth;
      if (args.height === "parent") height = shape.parent.innerHeight;
    }
    return transform.resize(shape, width, height);
  }
  return false;
}

constraintManager.define("set-size", constraint, schema);
