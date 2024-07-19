import { z } from "zod";
import { constraintManager, Page, Shape } from "../shapes";
import type { Canvas } from "../graphics/graphics";
import { Transaction } from "../core/transaction";
import { moveShapes, resizeShape } from "../macro";

const schema = z.object({
  horz: z
    .enum([
      "none",
      "left",
      "left-outside",
      "left-border",
      "right",
      "right-outside",
      "right-border",
      "center",
      "inside",
      "border",
      "outside",
      "fill",
    ])
    .default("left"),
  vert: z
    .enum([
      "none",
      "top",
      "top-outside",
      "top-border",
      "bottom",
      "bottom-outside",
      "bottom-border",
      "middle",
      "inside",
      "border",
      "outside",
      "fill",
    ])
    .default("top"),
  horzOffset: z.number().default(0),
  vertOffset: z.number().default(0),
});

/**
 * Align to parent
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
  if (parent instanceof Shape && !(parent instanceof Page)) {
    let horz = args.horz;
    let vert = args.vert;
    const l = parent.left;
    const r = parent.right;
    const t = parent.top;
    const b = parent.bottom;
    const w = parent.width;
    const h = parent.height;
    const cp = shape.getCenter();
    let dx = 0;
    let dy = 0;
    let width = -1;
    let height = -1;
    if (args.horz === "inside") {
      horz = Math.abs(l - cp[0]) < Math.abs(r - cp[0]) ? "left" : "right";
    }
    if (args.vert === "inside") {
      vert = Math.abs(t - cp[1]) < Math.abs(b - cp[1]) ? "top" : "bottom";
    }
    if (args.horz === "inside" && args.vert === "inside") {
      const dx = Math.min(Math.abs(l - cp[0]), Math.abs(r - cp[0]));
      const dy = Math.min(Math.abs(t - cp[1]), Math.abs(b - cp[1]));
      if (dx < dy) {
        vert = "none";
      } else {
        horz = "none";
      }
    }
    if (args.horz === "border") {
      horz =
        Math.abs(l - cp[0]) < Math.abs(r - cp[0])
          ? "left-border"
          : "right-border";
    }
    if (args.vert === "border") {
      vert =
        Math.abs(t - cp[1]) < Math.abs(b - cp[1])
          ? "top-border"
          : "bottom-border";
    }
    if (args.horz === "border" && args.vert === "border") {
      const dx = Math.min(Math.abs(l - cp[0]), Math.abs(r - cp[0]));
      const dy = Math.min(Math.abs(t - cp[1]), Math.abs(b - cp[1]));
      if (dx < dy) {
        vert = "none";
      } else {
        horz = "none";
      }
    }
    if (args.horz === "outside") {
      horz =
        Math.abs(l - cp[0]) < Math.abs(r - cp[0])
          ? "left-outside"
          : "right-outside";
    }
    if (args.vert === "outside") {
      vert =
        Math.abs(t - cp[1]) < Math.abs(b - cp[1])
          ? "top-outside"
          : "bottom-outside";
    }
    if (args.horz === "outside" && args.vert === "outside") {
      const dx = Math.min(Math.abs(l - cp[0]), Math.abs(r - cp[0]));
      const dy = Math.min(Math.abs(t - cp[1]), Math.abs(b - cp[1]));
      if (dx < dy) {
        vert = "none";
      } else {
        horz = "none";
      }
    }
    if (args.horz === "fill") {
      horz = "left";
      width = w;
    }
    if (args.vert === "fill") {
      vert = "top";
      height = h;
    }
    switch (horz) {
      case "left":
        dx = l - shape.left;
        break;
      case "left-outside":
        dx = l - shape.right;
        break;
      case "left-border":
        dx = l - cp[0];
        break;
      case "right":
        dx = r - shape.right;
        break;
      case "right-outside":
        dx = r - shape.left;
        break;
      case "right-border":
        dx = r - cp[0];
        break;
      case "center":
        // dx = parent.getCenter()[0] - shape.width / 2 - shape.left;
        dx = parent.getCenter()[0] - cp[0];
        break;
    }
    switch (vert) {
      case "top":
        dy = t - shape.top;
        break;
      case "top-outside":
        dy = t - shape.bottom;
        break;
      case "top-border":
        dy = t - cp[1];
        break;
      case "bottom":
        dy = b - shape.bottom;
        break;
      case "bottom-outside":
        dy = b - shape.top;
        break;
      case "bottom-border":
        dy = b - cp[1];
        break;
      case "middle":
        dy = parent.getCenter()[1] - cp[1];
        break;
    }
    dx += args.horzOffset || 0;
    dy += args.vertOffset || 0;
    changed = moveShapes(tx, page, [shape], dx, dy);
    if (width > -1 || height > -1) {
      changed =
        resizeShape(
          tx,
          shape,
          width < 0 ? shape.width : width,
          height < 0 ? shape.height : height
        ) || changed;
    }
  }
  return changed;
}

constraintManager.define("align-to-parent", constraint, schema);
