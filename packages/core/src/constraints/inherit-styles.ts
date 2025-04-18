import { z } from "zod";
import { Shape, constraintManager, Box, Page, Group } from "../shapes";
import { Canvas } from "../graphics/graphics";
import { Transaction } from "../core/transaction";

const schema = z.object({
  opacity: z.boolean().default(false),
  stroke: z.boolean().default(false),
  fill: z.boolean().default(false),
  font: z.boolean().default(false),
  textAlignment: z.boolean().default(false),
  query: z.string().default(""),
});

/**
 * Inherit styles from parent
 */
function constraint(
  tx: Transaction,
  page: Page,
  shape: Shape,
  canvas: Canvas,
  args: z.infer<typeof schema>
) {
  let changed = false;
  const parent = shape.parent as Shape;
  const query = shape.parseQueryString(
    typeof args.query === "string" ? args.query : ""
  );
  if (
    parent instanceof Shape &&
    parent.match(query) &&
    !(parent instanceof Page) &&
    !(parent instanceof Group)
  ) {
    if (args.opacity) {
      changed = tx.assign(shape, "opacity", parent.computeOpacity()) || changed;
    }
    if (args.stroke) {
      changed = tx.assign(shape, "strokeColor", parent.strokeColor) || changed;
      changed = tx.assign(shape, "strokeWidth", parent.strokeWidth) || changed;
      changed =
        tx.assign(shape, "strokePattern", parent.strokePattern) || changed;
      changed = tx.assign(shape, "roughness", parent.roughness) || changed;
    }
    if (args.fill) {
      changed = tx.assign(shape, "fillColor", parent.fillColor) || changed;
      changed = tx.assign(shape, "fillStyle", parent.fillStyle) || changed;
    }
    if (args.font) {
      changed = tx.assign(shape, "fontColor", parent.fontColor) || changed;
      changed = tx.assign(shape, "fontFamily", parent.fontFamily) || changed;
      changed = tx.assign(shape, "fontSize", parent.fontSize) || changed;
      changed = tx.assign(shape, "fontStyle", parent.fontStyle) || changed;
      changed = tx.assign(shape, "fontWeight", parent.fontWeight) || changed;
    }
    if (args.textAlignment && parent instanceof Box) {
      changed = tx.assign(shape, "horzAlign", parent.horzAlign) || changed;
      changed = tx.assign(shape, "vertAlign", parent.vertAlign) || changed;
      changed = tx.assign(shape, "wordWrap", parent.wordWrap) || changed;
      changed = tx.assign(shape, "lineHeight", parent.lineHeight) || changed;
      changed =
        tx.assign(shape, "paragraphSpacing", parent.paragraphSpacing) ||
        changed;
    }
  }
  return changed;
}

constraintManager.define("inherit-styles", constraint, schema);
