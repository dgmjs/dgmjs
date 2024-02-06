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

import { Diagram, Shape, constraintManager } from "../shapes";
import { Canvas } from "../graphics/graphics";
import { z } from "zod";
import { Transform } from "../transform/transform";

const schema = z.object({
  query: z.string().default(""),
  state: z
    .enum([
      "enable",
      "visible",
      "connectable",
      "containable",
      "editable",
      "text",
    ])
    .default("enable"),
  property: z.string().default(""),
});

/**
 * Change a shape's state from a boolean-type property value
 * - query {object} A query to filter shape to change field
 * - field {string} The name of field to change
 * - property {string} A boolean-type property name
 */
function constraint(
  diagram: Diagram,
  shape: Shape,
  canvas: Canvas,
  transform: Transform,
  args: z.infer<typeof schema>
) {
  let changed = false;
  args.query = args.query ?? {};
  const child = shape.findByQuery(args.query);
  if (child) {
    const value = shape.getPropertyValue(args.property);
    if (
      typeof value === "boolean" &&
      (args.state === "enable" ||
        args.state === "visible" ||
        args.state === "connectable" ||
        args.state === "containable" ||
        args.state === "editable")
    ) {
      changed = transform.atomicAssign(child, args.state, value) || changed;
    }
    if (typeof value === "string" && args.state === "text") {
      changed = transform.atomicAssign(child, args.state, value) || changed;
    }
  }
  return changed;
}

constraintManager.define("set-state-from-property", constraint, schema);
