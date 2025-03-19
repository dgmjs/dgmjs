import {
  BorderPosition,
  HorzAlign,
  LineEndType,
  LineType,
  Page,
  Shape,
  VertAlign,
  constraintManager,
} from "../shapes";
import { Canvas, FillStyle } from "../graphics/graphics";
import { z } from "zod";
import { Transaction } from "../core/transaction";
import { evalScript } from "../mal/mal";

const schema = z.object({
  property: z.string().default(""),
  expression: z.string().default(""),
  query: z.string().default(""),
  state: z
    .enum([
      "enable",
      "visible",
      "rotatable",
      "connectable",
      "containable",
      "opacity",
      "roughness",
      "width",
      "height",
      "rotate",
      "padding",
      "corners",
      "borders",
      "borderPosition",
      "strokeColor",
      "strokeWidth",
      "strokePattern",
      "fillColor",
      "fillStyle",
      "fontColor",
      "fontSize",
      "fontStyle",
      "fontWeight",
      "shadow",
      "shadowColor",
      "shadowOffset",
      "text",
      "horzAlign",
      "vertAlign",
      "wordWrap",
      "lineHeight",
      "paragraphSpacing",
      "lineType",
      "headEndType",
      "tailEndType",
    ])
    .default("enable"),
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
  args.expression = args.expression ?? "";
  const child = shape.findByQuery(args.query);
  if (child) {
    let value = shape.getPropertyValue(args.property);
    if (args.expression.trim().length > 0) {
      try {
        value = evalScript({ value: value, shape: shape }, args.expression);
      } catch (err) {
        console.error("[set-state-from-property] Script Error", err);
      }
    }
    switch (args.state) {
      // boolean types
      case "enable":
      case "visible":
      case "rotatable":
      case "connectable":
      case "containable":
      case "shadow":
      case "wordWrap": {
        if (typeof value === "boolean") {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be boolean type for '${args.state}' state`
          );
        }
        break;
      }
      // string types
      case "strokeColor":
      case "fillColor":
      case "fontColor":
      case "shadowColor":
      case "fontStyle":
      case "text": {
        if (typeof value === "string") {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be string type for '${args.state}' state`
          );
        }
        break;
      }
      // number types
      case "width":
      case "height":
      case "rotate":
      case "strokeWidth":
      case "fontSize":
      case "fontWeight":
      case "opacity":
      case "roughness":
      case "lineHeight":
      case "paragraphSpacing": {
        if (typeof value === "number") {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be number type for '${args.state}' state`
          );
        }
        break;
      }
      // number[] type
      case "strokePattern": {
        if (Array.isArray(value) && value.every((v) => typeof v === "number")) {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be number[] type for '${args.state}' state`
          );
        }
        break;
      }
      // number[2] type
      case "shadowOffset": {
        if (
          Array.isArray(value) &&
          value.length === 2 &&
          value.every((v) => typeof v === "number")
        ) {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be number[2] type for '${args.state}' state`
          );
        }
        break;
      }
      // number[4] type
      case "padding":
      case "corners": {
        if (
          Array.isArray(value) &&
          value.length === 4 &&
          value.every((v) => typeof v === "number")
        ) {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be number[4] type for '${args.state}' state`
          );
        }
        break;
      }
      // boolean[4] type
      case "borders": {
        if (
          Array.isArray(value) &&
          value.length === 4 &&
          value.every((v) => typeof v === "boolean")
        ) {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be boolean[4] type for '${args.state}' state`
          );
        }
        break;
      }
      // BorderPosition type
      case "borderPosition": {
        const items = Object.values(BorderPosition);
        if (items.includes(value)) {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be one of ${items
              .map((i) => `"${i}"`)
              .join(", ")} for '${args.state}' state`
          );
        }
        break;
      }
      // FillStyle type
      case "fillStyle": {
        const items = Object.values(FillStyle);
        if (items.includes(value)) {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be one of ${items
              .map((i) => `"${i}"`)
              .join(", ")} for '${args.state}' state`
          );
        }
        break;
      }
      // HorzAlign type
      case "horzAlign": {
        const items = Object.values(HorzAlign);
        if (items.includes(value)) {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be one of ${items
              .map((i) => `"${i}"`)
              .join(", ")} for '${args.state}' state`
          );
        }
        break;
      }
      // VertAlign type
      case "vertAlign": {
        const items = Object.values(VertAlign);
        if (items.includes(value)) {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be one of ${items
              .map((i) => `"${i}"`)
              .join(", ")} for '${args.state}' state`
          );
        }
        break;
      }
      // LineType type
      case "lineType": {
        const items = Object.values(LineType);
        if (items.includes(value)) {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be one of ${items
              .map((i) => `"${i}"`)
              .join(", ")} for '${args.state}' state`
          );
        }
        break;
      }
      // LineEndType type
      case "headEndType":
      case "tailEndType": {
        const items = Object.values(LineEndType);
        if (items.includes(value)) {
          changed = tx.assign(child, args.state, value) || changed;
        } else {
          console.error(
            `[set-state-from-property] The value should be one of ${items
              .map((i) => `"${i}"`)
              .join(", ")} for '${args.state}' state`
          );
        }
        break;
      }
    }
  } else {
    console.warn(
      `[set-state-from-property] No shape matched with query '${args.query}'`
    );
  }
  return changed;
}

constraintManager.define("set-state-from-property", constraint, schema);
