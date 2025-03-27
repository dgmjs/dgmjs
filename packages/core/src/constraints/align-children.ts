import { z } from "zod";
import { Box, Page, Shape, constraintManager } from "../shapes";
import { Canvas } from "../graphics/graphics";
import { Transaction } from "../core/transaction";
import {
  moveShapes,
  resizeShape,
  setBottom,
  setHeight,
  setLeft,
  setRight,
  setTop,
  setWidth,
} from "../macro";

const schema = z.object({
  orient: z
    .enum([
      "top",
      "bottom",
      "middle",
      "left",
      "right",
      "center",
      "vert-fill",
      "horz-fill",
    ])
    .default("top"),
  align: z
    .enum([
      "left",
      "left-outside",
      "left-border",
      "center",
      "right",
      "right-outside",
      "right-border",
      "top",
      "top-outside",
      "top-border",
      "middle",
      "bottom",
      "bottom-outside",
      "bottom-border",
      "fill",
    ])
    .default("left"),
  query: z.string().default(""),
  gap: z.number().default(0),
  fillLast: z.boolean().default(false),
});

/**
 * Align shape horizontal relative to a shape
 * @return returns changed or not
 */
function setHorzAlign(
  tx: Transaction,
  page: Page,
  shape: Box,
  relativeTo: Box,
  align:
    | "none"
    | "left"
    | "left-outside"
    | "left-border"
    | "center"
    | "right"
    | "right-outside"
    | "right-border"
    | "top"
    | "top-outside"
    | "top-border"
    | "middle"
    | "bottom"
    | "bottom-outside"
    | "bottom-border"
    | "fill"
    | "border",
  offset: number = 0
): boolean {
  let changed = false;
  const l0 = relativeTo.innerLeft;
  const l1 = relativeTo.left;
  const r0 = relativeTo.innerRight;
  const r1 = relativeTo.right;
  const w0 = relativeTo.innerWidth;
  let dx = 0;
  let dy = 0;
  let width = -1;
  switch (align) {
    case "left":
      dx = l0 - shape.left;
      break;
    case "left-outside":
      dx = l1 - shape.right;
      break;
    case "left-border":
      dx = Math.round(l1 - shape.width / 2) - shape.left;
      break;
    case "center":
      dx =
        l0 + Math.round((relativeTo.innerWidth - shape.width) / 2) - shape.left;
      break;
    case "right":
      dx = r0 - shape.right;
      break;
    case "right-outside":
      dx = r1 - shape.left;
      break;
    case "right-border":
      dx = Math.round(r1 - shape.width / 2) - shape.left;
      break;
    case "fill":
      dx = l0 - shape.left;
      width = w0;
      break;
  }
  dx += offset;
  changed = moveShapes(tx, page, [shape], dx, dy);
  if (width > -1) {
    changed =
      resizeShape(tx, shape, width < 0 ? shape.width : width, shape.height) ||
      changed;
  }
  return changed;
}

/**
 * Align shape vertical relative to a shape
 * @return returns changed or not
 */
function setVertAlign(
  tx: Transaction,
  page: Page,
  shape: Box,
  relativeTo: Box,
  align:
    | "none"
    | "left"
    | "left-outside"
    | "left-border"
    | "center"
    | "right"
    | "right-outside"
    | "right-border"
    | "top"
    | "top-outside"
    | "top-border"
    | "middle"
    | "bottom"
    | "bottom-outside"
    | "bottom-border"
    | "fill"
    | "border",
  offset: number = 0
): boolean {
  let changed = false;
  const t0 = relativeTo.innerTop;
  const t1 = relativeTo.top;
  const b0 = relativeTo.innerBottom;
  const b1 = relativeTo.bottom;
  const h0 = relativeTo.innerHeight;
  let dx = 0;
  let dy = 0;
  let height = -1;
  switch (align) {
    case "top":
      dy = t0 - shape.top;
      break;
    case "top-outside":
      dy = t1 - shape.bottom;
      break;
    case "top-border":
      dy = Math.round(t1 - shape.height / 2) - shape.top;
      break;
    case "middle":
      dy =
        t0 +
        Math.round((relativeTo.innerHeight - shape.height) / 2) -
        shape.top;
      break;
    case "bottom":
      dy = b0 - shape.bottom;
      break;
    case "bottom-outside":
      dy = b1 - shape.top;
      break;
    case "bottom-border":
      dy = Math.round(b1 - shape.height / 2) - shape.top;
      break;
    case "fill":
      dy = t0 - shape.top;
      height = h0;
      break;
  }
  dy += offset;
  changed = moveShapes(tx, page, [shape], dx, dy);
  if (height > -1) {
    changed =
      resizeShape(tx, shape, shape.width, height < 0 ? shape.height : height) ||
      changed;
  }
  return changed;
}

/**
 * Align children
 * - args.orient {"top" | "bottom" | "middle" | "left" | "right" | "center"}
 * - args.align {"left" | "left-outside" | "left-border" | "center" | "right"
 *   | "right-outside" | "right-border" | "top" | "top-outside" | "top-border"
 *   | "middle" | "bottom" | "bottom-outside" | "bottom-border" | "fill"}
 * - args.query {string} query string to filter children
 * - args.fillLast {boolean} fill space with last child
 */
function constraint(
  tx: Transaction,
  page: Page,
  shape: Shape,
  canvas: Canvas,
  args: z.infer<typeof schema>
) {
  let changed: boolean = false;
  if (shape instanceof Box) {
    const query = shape.parseQueryString(
      typeof args.query === "string" ? args.query : ""
    );
    switch (args.orient) {
      case "top": {
        const arr = [...shape.children]
          .sort((a: any, b: any) => a.top - b.top)
          .filter((s) => s instanceof Box && s.visible && s.match(query));
        let ty = shape.innerTop;
        for (let child of arr) {
          if (child instanceof Box) {
            changed = setTop(tx, child, ty) || changed;
            ty = child.bottom + (args.gap ?? 0);
            changed =
              setHorzAlign(tx, page, child, shape, args.align) || changed;
            // fill last child
            if (args.fillLast && child === arr[arr.length - 1]) {
              const h = shape.innerBottom - child.top;
              changed = setHeight(tx, child, Math.max(h, 0)) || changed;
            }
          }
        }
        break;
      }
      case "bottom": {
        const arr = [...shape.children]
          .sort((a: any, b: any) => a.top - b.top)
          .filter((s) => s instanceof Box && s.visible && s.match(query));
        let by = shape.innerBottom;
        for (let child of arr.reverse()) {
          if (child instanceof Box) {
            changed = setBottom(tx, child, by) || changed;
            by = child.top - (args.gap ?? 0);
            changed =
              setHorzAlign(tx, page, child, shape, args.align) || changed;
            // fill last child
            if (args.fillLast && child === arr[arr.length - 1]) {
              const h = child.bottom - shape.innerTop;
              changed = setTop(tx, child, shape.innerTop) || changed;
              changed = setHeight(tx, child, Math.max(h, 0)) || changed;
            }
          }
        }
        break;
      }
      case "middle": {
        const arr = [...shape.children]
          .sort((a: any, b: any) => a.top - b.top)
          .filter((s) => s instanceof Box && s.visible && s.match(query));
        const sumOfHeight = arr.reduce((acc, s) => acc + (s as Box).height, 0);
        let ty =
          shape.innerTop + Math.round((shape.innerHeight - sumOfHeight) / 2);
        for (let child of arr) {
          if (child instanceof Box) {
            changed = setTop(tx, child, ty) || changed;
            ty = child.bottom + (args.gap ?? 0);
            changed =
              setHorzAlign(tx, page, child, shape, args.align) || changed;
            // fill last child
            if (args.fillLast && child === arr[arr.length - 1]) {
              const h = shape.innerBottom - child.top;
              changed = setHeight(tx, child, Math.max(h, 0)) || changed;
            }
          }
        }
        break;
      }
      case "left": {
        const arr = [...shape.children]
          .sort((a: any, b: any) => a.left - b.left)
          .filter((s) => s instanceof Box && s.visible && s.match(query));
        let lx = shape.innerLeft;
        for (let child of arr) {
          if (child instanceof Box) {
            changed = setLeft(tx, child, lx) || changed;
            lx = child.right + (args.gap ?? 0);
            changed =
              setVertAlign(tx, page, child, shape, args.align) || changed;
            // fill last child
            if (args.fillLast && child === arr[arr.length - 1]) {
              const w = shape.innerRight - child.left;
              changed = setWidth(tx, child, Math.max(w, 0)) || changed;
            }
          }
        }
        break;
      }
      case "right": {
        const arr = [...shape.children]
          .sort((a: any, b: any) => a.left - b.left)
          .filter((s) => s instanceof Box && s.visible && s.match(query));
        let rx = shape.innerRight;
        for (let child of arr.reverse()) {
          if (child instanceof Box) {
            changed = setRight(tx, child, rx) || changed;
            rx = child.left - (args.gap ?? 0);
            changed =
              setVertAlign(tx, page, child, shape, args.align) || changed;
            // fill last child
            if (args.fillLast && child === arr[arr.length - 1]) {
              const w = child.right - shape.innerLeft;
              changed = setLeft(tx, child, shape.innerLeft) || changed;
              changed = setWidth(tx, child, Math.max(w, 0)) || changed;
            }
          }
        }
        break;
      }
      case "center": {
        const arr = [...shape.children]
          .sort((a: any, b: any) => a.left - b.left)
          .filter((s) => s instanceof Box && s.visible && s.match(query));
        const sumOfWidth = arr.reduce((acc, s) => acc + (s as Box).width, 0);
        let lx =
          shape.innerLeft + Math.round((shape.innerWidth - sumOfWidth) / 2);
        for (let child of arr) {
          if (child instanceof Box) {
            changed = setLeft(tx, child, lx) || changed;
            lx = child.right + (args.gap ?? 0);
            changed =
              setVertAlign(tx, page, child, shape, args.align) || changed;
            // fill last child
            if (args.fillLast && child === arr[arr.length - 1]) {
              const w = shape.innerRight - child.left;
              changed = setWidth(tx, child, Math.max(w, 0)) || changed;
            }
          }
        }
        break;
      }
      case "vert-fill": {
        const arr = [...shape.children]
          .sort((a: any, b: any) => a.top - b.top)
          .filter((s) => s instanceof Box && s.visible && s.match(query));
        const len = arr.length;
        let ty = shape.innerTop;
        let h = (shape.innerHeight - args.gap * (len - 1)) / len;
        for (let child of arr) {
          if (child instanceof Box) {
            changed = setTop(tx, child, ty) || changed;
            changed = setHeight(tx, child, h) || changed;
            ty = child.bottom + (args.gap ?? 0);
            changed =
              setHorzAlign(tx, page, child, shape, args.align) || changed;
          }
        }
        break;
      }
      case "horz-fill": {
        const arr = [...shape.children]
          .sort((a: any, b: any) => a.left - b.left)
          .filter((s) => s instanceof Box && s.visible && s.match(query));
        const len = arr.length;
        let lx = shape.innerLeft;
        let w = (shape.innerWidth - args.gap * (len - 1)) / len;
        for (let child of arr) {
          if (child instanceof Box) {
            changed = setLeft(tx, child, lx) || changed;
            changed = setWidth(tx, child, w) || changed;
            lx = child.right + (args.gap ?? 0);
            changed =
              setVertAlign(tx, page, child, shape, args.align) || changed;
          }
        }
        break;
      }
    }
  }
  return changed;
}

constraintManager.define("align-children", constraint, schema);
