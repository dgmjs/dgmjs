import { z } from "zod";
import { Shape, constraintManager, Connector, Page } from "../shapes";
import { Canvas } from "../graphics/graphics";
import { Transaction } from "../core/transaction";
import { adjustConnectorRoute } from "../macro";

const schema = z.object({});

/**
 * Adjust route path of connector
 */
function constraint(
  tx: Transaction,
  page: Page,
  shape: Shape,
  canvas: Canvas,
  args: z.infer<typeof schema>
): boolean {
  let changed = false;
  if (shape instanceof Connector) {
    changed = adjustConnectorRoute(tx, shape) || changed;
  }
  return changed;
}

constraintManager.define("adjust-route", constraint, schema);
