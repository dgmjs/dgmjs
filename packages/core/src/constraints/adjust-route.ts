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
import { Shape, constraintManager, Connector, Page } from "../shapes";
import { Canvas } from "../graphics/graphics";
import { Transaction } from "../core/transaction";
import { adjustConnectorRoute } from "../mutates";

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
