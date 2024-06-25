import { Page, Shape, constraintManager } from "../shapes";
import { Canvas } from "../graphics/graphics";
import { z } from "zod";
import { Transaction } from "../core/transaction";

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
  tx: Transaction,
  page: Page,
  shape: Shape,
  canvas: Canvas,
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
      changed = tx.assign(child, args.state, value) || changed;
    }
    if (typeof value === "string" && args.state === "text") {
      changed = tx.assign(child, args.state, value) || changed;
    }
  }
  return changed;
}

constraintManager.define("set-state-from-property", constraint, schema);
