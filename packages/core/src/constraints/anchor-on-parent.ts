import { z } from "zod";
import { constraintManager, Box, Shape, Page, Group } from "../shapes";
import * as geometry from "../graphics/geometry";
import { Canvas } from "../graphics/graphics";
import { Transaction } from "../core/transaction";
import { moveShapes } from "../macro";

const schema = z.object({});

/**
 * Anchoring on parent
 * @param {Shape} shape
 * @param {Canvas} canvas
 * @param {object} args
 */
function constraint(
  tx: Transaction,
  page: Page,
  shape: Shape,
  canvas: Canvas,
  args: z.infer<typeof schema>
) {
  let changed = false;
  const parent = shape.parent;
  if (
    shape instanceof Box &&
    parent instanceof Shape &&
    !(parent instanceof Page) &&
    !(parent instanceof Group)
  ) {
    const anchorPoint = geometry.getPointOnPath(
      parent.getOutline() ?? [],
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
    changed = moveShapes(tx, page, [shape], dx, dy);
  }
  return changed;
}

constraintManager.define("anchor-on-parent", constraint, schema);
