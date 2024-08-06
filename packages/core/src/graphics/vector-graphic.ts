import { Shape } from "../shapes";
import { Canvas, SVGPath } from "./graphics";
import { MemoizationCanvas } from "./memoization-canvas";

/**
 * Vector graphic base element
 */
export interface VGBase {
  /**
   * fill color. "none", "currentColor", or hex color string. Default: "none".
   * If "currentColor" is specified, the fill color is inherited from the shape's fillColor.
   */
  fill?: string;

  /**
   * stroke color. "none", "currentColor", or hex color string. Default: "currentColor".
   * If "currentColor" is specified, the stroke color is inherited from the shape's strokeColor.
   */
  stroke?: string;

  /**
   * stroke width. If not specified, the stroke width is inherited from the shape's strokeWidth.
   */
  strokeWidth?: number;
}

export interface VGPath extends VGBase {
  cmd: "path";
  d: SVGPath;
}

export interface VGRect extends VGBase {
  cmd: "rect";
  w: number;
  h: number;
  x: number;
  y: number;
  r: number;
}

export interface VGCircle extends VGBase {
  cmd: "circle";
  cx: number;
  cy: number;
  r: number;
}

export interface VGEllipse extends VGBase {
  cmd: "ellipse";
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

export interface VGLine extends VGBase {
  cmd: "line";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface VGPolyline extends VGBase {
  cmd: "polyline";
  points: number[][];
}

export interface VGPolygon extends VGBase {
  cmd: "polygon";
  points: number[][];
}

export type VGElement =
  | VGPath
  | VGRect
  | VGCircle
  | VGEllipse
  | VGLine
  | VGPolyline
  | VGPolygon;

export function renderVGElement(
  shape: Shape,
  canvas: MemoizationCanvas | Canvas,
  position: number[],
  scale: number[],
  e: VGElement,
  seed: number
) {
  const fill = e.fill ?? "none";
  const stroke = e.stroke ?? "currentColor";
  switch (e.cmd) {
    case "path": {
      const p = e as VGPath;
      const d: SVGPath = p.d.map((i) => {
        switch (i[0]) {
          case "M":
            return [
              "M",
              i[1] * scale[0] + position[0],
              i[2] * scale[1] + position[1],
            ];
          case "m":
            return ["m", i[1] * scale[0], i[2] * scale[1]];
          case "L":
            return [
              "L",
              i[1] * scale[0] + position[0],
              i[2] * scale[1] + position[1],
            ];
          case "l":
            return ["l", i[1] * scale[0], i[2] * scale[1]];
          case "H":
            return ["H", i[1] * scale[0] + position[0]];
          case "h":
            return ["h", i[1] * scale[0]];
          case "V":
            return ["V", i[1] * scale[1] + position[1]];
          case "v":
            return ["v", i[1] * scale[1]];
          case "C":
            return [
              "C",
              i[1] * scale[0] + position[0],
              i[2] * scale[1] + position[1],
              i[3] * scale[0] + position[0],
              i[4] * scale[1] + position[1],
              i[5] * scale[0] + position[0],
              i[6] * scale[1] + position[1],
            ];
          case "c":
            return [
              "c",
              i[1] * scale[0],
              i[2] * scale[1],
              i[3] * scale[0],
              i[4] * scale[1],
              i[5] * scale[0],
              i[6] * scale[1],
            ];
          case "S":
            return [
              "S",
              i[1] * scale[0] + position[0],
              i[2] * scale[1] + position[1],
              i[3] * scale[0] + position[0],
              i[4] * scale[1] + position[1],
            ];
          case "s":
            return [
              "s",
              i[1] * scale[0],
              i[2] * scale[1],
              i[3] * scale[0],
              i[4] * scale[1],
            ];
          case "Q":
            return [
              "Q",
              i[1] * scale[0] + position[0],
              i[2] * scale[1] + position[1],
              i[3] * scale[0] + position[0],
              i[4] * scale[1] + position[1],
            ];
          case "q":
            return [
              "q",
              i[1] * scale[0],
              i[2] * scale[1],
              i[3] * scale[0],
              i[4] * scale[1],
            ];
          case "T":
            return [
              "T",
              i[1] * scale[0] + position[0],
              i[2] * scale[1] + position[1],
            ];
          case "t":
            return ["t", i[1] * scale[0], i[2] * scale[1]];
          case "A":
            return [
              "A",
              i[1] * scale[0],
              i[2] * scale[1],
              i[3],
              i[4],
              i[5],
              i[6] * scale[0] + position[0],
              i[7] * scale[1] + position[1],
            ];
          case "a":
            return [
              "a",
              i[1] * scale[0],
              i[2] * scale[1],
              i[3],
              i[4],
              i[5],
              i[6] * scale[0],
              i[7] * scale[1],
            ];
          default:
            return i;
        }
      });
      if (fill !== "none") {
        canvas.fillColor = fill === "currentColor" ? shape.fillColor : fill;
        canvas.fillPath(d, seed);
      }
      if (stroke !== "none") {
        canvas.strokeColor =
          stroke === "currentColor" ? shape.strokeColor : stroke;
        canvas.strokePath(d, seed);
      }
      break;
    }
    case "rect": {
      const r = e as VGRect;
      const x = r.x * scale[0] + position[0];
      const y = r.y * scale[1] + position[1];
      const w = r.w * scale[0];
      const h = r.h * scale[1];
      const c = r.r * scale[0];
      if (fill !== "none") {
        canvas.fillColor = fill === "currentColor" ? shape.fillColor : fill;
        canvas.fillRoundRect(x, y, x + w, y + h, c, seed);
      }
      if (stroke !== "none") {
        canvas.strokeColor =
          stroke === "currentColor" ? shape.strokeColor : stroke;
        canvas.strokeRoundRect(x, y, x + w, y + h, c, seed);
      }
      break;
    }
    case "circle": {
      const c = e as VGCircle;
      const cx = c.cx * scale[0] + position[0];
      const cy = c.cy * scale[1] + position[1];
      const r = c.r * scale[0];
      const x1 = cx - r;
      const y1 = cy - r;
      const x2 = cx + r;
      const y2 = cy + r;
      if (fill !== "none") {
        canvas.fillColor = fill === "currentColor" ? shape.fillColor : fill;
        canvas.fillEllipse(x1, y1, x2, y2, seed);
      }
      if (stroke !== "none") {
        canvas.strokeColor =
          stroke === "currentColor" ? shape.strokeColor : stroke;
        canvas.strokeEllipse(x1, y1, x2, y2, seed);
      }
      break;
    }
    case "ellipse": {
      const c = e as VGEllipse;
      const cx = c.cx * scale[0] + position[0];
      const cy = c.cy * scale[1] + position[1];
      const rx = c.rx * scale[0];
      const ry = c.ry * scale[1];
      const x1 = cx - rx;
      const y1 = cy - ry;
      const x2 = cx + rx;
      const y2 = cy + ry;
      if (fill !== "none") {
        canvas.fillColor = fill === "currentColor" ? shape.fillColor : fill;
        canvas.fillEllipse(x1, y1, x2, y2, seed);
      }
      if (stroke !== "none") {
        canvas.strokeColor =
          stroke === "currentColor" ? shape.strokeColor : stroke;
        canvas.strokeEllipse(x1, y1, x2, y2, seed);
      }
      break;
    }
    case "line": {
      const l = e as VGLine;
      const x1 = l.x1 * scale[0] + position[0];
      const y1 = l.y1 * scale[1] + position[1];
      const x2 = l.x2 * scale[0] + position[0];
      const y2 = l.y2 * scale[1] + position[1];
      if (stroke !== "none") {
        canvas.strokeColor =
          stroke === "currentColor" ? shape.strokeColor : stroke;
        canvas.line(x1, y1, x2, y2, seed);
      }
      break;
    }
    case "polyline": {
      const p = e as VGPolyline;
      const ps = p.points.map(([x, y]) => [
        x * scale[0] + position[0],
        y * scale[1] + position[1],
      ]);
      if (stroke !== "none") {
        canvas.strokeColor =
          stroke === "currentColor" ? shape.strokeColor : stroke;
        canvas.polyline(ps, seed);
      }
      break;
    }
    case "polygon": {
      const p = e as VGPolygon;
      const ps = p.points.map(([x, y]) => [
        x * scale[0] + position[0],
        y * scale[1] + position[1],
      ]);
      if (fill !== "none") {
        canvas.fillColor = fill === "currentColor" ? shape.fillColor : fill;
        canvas.fillPolygon(ps, seed);
      }
      if (stroke !== "none") {
        canvas.strokeColor =
          stroke === "currentColor" ? shape.strokeColor : stroke;
        canvas.strokePolygon(ps, seed);
      }
      break;
    }
  }
}
