import { Color } from "./const";
import * as geometry from "./geometry";
import rough from "roughjs";
import { roughDraw } from "./roughjs-draw";
import type { Point } from "roughjs/bin/geometry";
import type { RoughGenerator } from "roughjs/bin/generator";

export interface CanvasState {
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  fillColor: string;
  fillStyle: string;
  fontColor: string;
  font: string;
  alpha: number;
  roughness: number;
}

interface CanvasTextMetric {
  width: number;
  height: number;
  ascent: number;
  descent: number;
  actualAscent: number;
  actualDescent: number;
}

type SVGPathCommand =
  | "M"
  | "m"
  | "L"
  | "l"
  | "H"
  | "h"
  | "V"
  | "v"
  | "C"
  | "c"
  | "S"
  | "s"
  | "Q"
  | "q"
  | "T"
  | "t"
  | "A"
  | "a"
  | "Z"
  | "z";

type SVGPathItem = [SVGPathCommand, ...number[]];
type SVGPath = SVGPathItem[];

const FillStyle = {
  NONE: "none",
  SOLID: "solid",
  HACHURE: "hachure",
  CROSS_HATCH: "cross-hatch",
} as const;

/**
 * Convert path to a string (SVG path's d property)
 */
function pathToString(path: SVGPath): string {
  let d: string[] = [];
  for (let i = 0; i < path.length; i++) {
    const item = path[i];
    switch (item[0]) {
      case "M":
        if (item.length < 3)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`M ${item[1]} ${item[2]}`);
        break;
      case "m":
        if (item.length < 3)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`m ${item[1]} ${item[2]}`);
        break;
      case "L":
        if (item.length < 3)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`L ${item[1]} ${item[2]}`);
        break;
      case "l":
        if (item.length < 3)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`l ${item[1]} ${item[2]}`);
        break;
      case "H":
        if (item.length < 2)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`H ${item[1]}`);
        break;
      case "h":
        if (item.length < 2)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`h ${item[1]}`);
        break;
      case "V":
        if (item.length < 2)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`V ${item[1]}`);
        break;
      case "v":
        if (item.length < 2)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`v ${item[1]}`);
        break;
      case "C":
        if (item.length < 7)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(
          `C ${item[1]} ${item[2]}, ${item[3]} ${item[4]}, ${item[5]} ${item[6]}`
        );
        break;
      case "c":
        if (item.length < 7)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(
          `c ${item[1]} ${item[2]}, ${item[3]} ${item[4]}, ${item[5]} ${item[6]}`
        );
        break;
      case "S":
        if (item.length < 5)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`S ${item[1]} ${item[2]}, ${item[3]} ${item[4]}`);
        break;
      case "s":
        if (item.length < 5)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`s ${item[1]} ${item[2]}, ${item[3]} ${item[4]}`);
        break;
      case "Q":
        if (item.length < 5)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`Q ${item[1]} ${item[2]}, ${item[3]} ${item[4]}`);
        break;
      case "q":
        if (item.length < 5)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`q ${item[1]} ${item[2]}, ${item[3]} ${item[4]}`);
        break;
      case "T":
        if (item.length < 3)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`T ${item[1]} ${item[2]}`);
        break;
      case "t":
        if (item.length < 3)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(`t ${item[1]} ${item[2]}`);
        break;
      case "A":
        if (item.length < 8)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(
          `A ${item[1]} ${item[2]} ${item[3]} ${item[4]} ${item[5]} ${item[6]} ${item[7]}`
        );
        break;
      case "a":
        if (item.length < 8)
          throw new Error(`Invalid path item: ${JSON.stringify(item)}`);
        d.push(
          `a ${item[1]} ${item[2]} ${item[3]} ${item[4]} ${item[5]} ${item[6]} ${item[7]}`
        );
        break;
      case "Z":
      case "z":
        d.push("Z");
        break;
    }
  }
  return d.join(" ");
}

/**
 * Canvas
 */
class Canvas {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  colorVariables: Record<string, string>;
  generator: RoughGenerator;
  ratio: number;
  px: number;
  stateStack: CanvasState[];
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  fillColor: string;
  fillStyle: string;
  fontColor: string;
  font: string;
  alpha: number;
  roughness: number;
  origin: number[];
  scale: number;

  constructor(element: HTMLCanvasElement, pixelRatio: number) {
    this.element = element;
    const context = this.element.getContext("2d");
    if (!context) throw new Error("Failed to create context2d");
    this.context = context;
    this.colorVariables = {
      background: "#ffffff",
      foreground: "#000000",
    };
    this.generator = rough.generator();
    this.ratio = pixelRatio;
    this.px = pixelRatio;
    this.stateStack = [];
    this.strokeColor = Color.FOREGROUND;
    this.strokeWidth = 1;
    this.strokePattern = []; // solid
    this.fillColor = Color.BACKGROUND;
    this.fillStyle = FillStyle.SOLID;
    this.fontColor = Color.FOREGROUND;
    this.font = "13px sans-serif";
    this.alpha = 1.0;
    this.roughness = 0;
    this.origin = [0.0, 0.0];
    this.scale = 1.0;
  }

  /**
   * Resolve color variable to hex color string
   */
  resolveColor(color: string): string {
    return color.startsWith("$")
      ? this.colorVariables[color.substring(1)] || "#7f7f7f"
      : color;
  }

  /**
   * Store current canvas state into a stack
   */
  storeState(): Canvas {
    const state: CanvasState = {
      strokeColor: this.strokeColor,
      strokeWidth: this.strokeWidth,
      strokePattern: this.strokePattern,
      fillColor: this.fillColor,
      fillStyle: this.fillStyle,
      fontColor: this.fontColor,
      font: this.font,
      alpha: this.alpha,
      roughness: this.roughness,
    };
    this.stateStack.push(state);
    return this;
  }

  /**
   * Restore the canvas states from a stack
   */
  restoreState(): Canvas {
    const state = this.stateStack.pop();
    if (state) {
      this.strokeColor = state.strokeColor;
      this.strokeWidth = state.strokeWidth;
      this.strokePattern = state.strokePattern;
      this.fillColor = state.fillColor;
      this.fillStyle = state.fillStyle;
      this.fontColor = state.fontColor;
      this.font = state.font;
      this.alpha = state.alpha;
      this.roughness = state.roughness;
    }
    return this;
  }

  /**
   * Transform global context to canvas context (origin, scale)
   */
  globalTransform(): Canvas {
    this.context.translate(
      this.origin[0] * this.scale * this.ratio,
      this.origin[1] * this.scale * this.ratio
    );
    this.context.scale(this.scale * this.ratio, this.scale * this.ratio);
    return this;
  }

  /**
   * Transform global coord to canvas coord (GCS --> CCS)
   */
  globalCoordTransform(point: number[]): number[] {
    const x = (point[0] + this.origin[0]) * this.scale * this.ratio;
    const y = (point[1] + this.origin[1]) * this.scale * this.ratio;
    return [x, y];
  }

  /**
   * Transform canvas coord to global coord (CCS --> GCS)
   */
  globalCoordTransformRev(point: number[]): number[] {
    const x = point[0] / this.ratio / this.scale - this.origin[0];
    const y = point[1] / this.ratio / this.scale - this.origin[1];
    return [x, y];
  }

  /**
   * Save context
   */
  save(): Canvas {
    this.context.save();
    return this;
  }

  /**
   * Restore context
   */
  restore(): Canvas {
    this.context.restore();
    return this;
  }

  /**
   * Translate transform
   */
  translate(x: number, y: number) {
    this.context.translate(x, y);
  }

  /**
   * Rotation transform
   * @param angle anti-clockwise in degree
   */
  rotate(angle: number) {
    this.context.rotate(geometry.toRadian(angle));
  }

  /**
   * Set stroke color
   */
  setStrokeColor(color: string): Canvas {
    this.strokeColor = color;
    return this;
  }

  /**
   * Set stroke width
   */
  setStrokeWidth(width: number): Canvas {
    this.strokeWidth = width;
    return this;
  }

  /**
   * Set stroke pattern
   */
  setStrokePattern(pattern: number[]): Canvas {
    this.strokePattern = pattern;
    return this;
  }

  /**
   * Set fill color
   */
  setFillColor(color: string): Canvas {
    this.fillColor = color;
    return this;
  }

  /**
   * Set fill style
   */
  setFillStyle(style: string): Canvas {
    this.fillStyle = style;
    return this;
  }

  /**
   * Set font color
   */
  setFontColor(color: string): Canvas {
    this.fontColor = color;
    return this;
  }

  /**
   * Set font
   */
  setFont(font: string): Canvas {
    this.font = font;
    return this;
  }

  /**
   * Set alpha
   */
  setAlpha(alpha: number): Canvas {
    this.alpha = alpha;
    return this;
  }

  /**
   * Set roughness
   */
  setRoughness(roughness: number): Canvas {
    this.roughness = roughness;
    return this;
  }

  /**
   * Put a pixel
   */
  // pixel(point: number[], color: string, size: number = 1): Canvas {
  //   this.context.fillStyle = this.resolveColor(color);
  //   this.context.globalAlpha = this.alpha;
  //   this.context.fillRect(point[0] - size, point[1] - size, size * 2, size * 2);
  //   return this;
  // }

  /**
   * Draw a line
   */
  line(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    seed: number = 1
  ): Canvas {
    this.context.strokeStyle = this.resolveColor(this.strokeColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.globalAlpha = this.alpha;
    this.context.setLineDash(
      this.strokePattern.map((v) => v * this.strokeWidth)
    );
    if (this.roughness > 0) {
      const rd = this.generator.line(x1, y1, x2, y2, {
        seed,
        roughness: this.roughness,
        stroke: this.resolveColor(this.strokeColor),
        strokeWidth: this.strokeWidth,
        strokeLineDash: this.strokePattern.map((v) => v * this.strokeWidth),
        disableMultiStroke: this.strokePattern.length > 1,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      this.context.moveTo(x1, y1);
      this.context.lineTo(x2, y2);
      this.context.stroke();
    }
    return this;
  }

  /**
   * Draw a rect
   */
  strokeRect(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    seed: number = 1
  ): Canvas {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    this.context.strokeStyle = this.resolveColor(this.strokeColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.globalAlpha = this.alpha;
    this.context.setLineDash(
      this.strokePattern.map((v) => v * this.strokeWidth)
    );
    if (this.roughness > 0) {
      const rd = this.generator.rectangle(x, y, w, h, {
        seed,
        roughness: this.roughness,
        stroke: this.resolveColor(this.strokeColor),
        strokeWidth: this.strokeWidth,
        strokeLineDash: this.strokePattern.map((v) => v * this.strokeWidth),
        disableMultiStroke: this.strokePattern.length > 1,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      this.context.rect(x, y, w, h);
      this.context.closePath();
      this.context.stroke();
    }
    return this;
  }

  /**
   * Draw a filled rect
   */
  fillRect(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    seed: number = 1
  ): Canvas {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    this.context.fillStyle = this.resolveColor(this.fillColor);
    this.context.globalAlpha = this.alpha;
    this.context.lineWidth = this.strokeWidth;
    if (this.roughness > 0 || this.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.rectangle(x, y, w, h, {
        seed,
        roughness: this.roughness,
        fill: this.resolveColor(this.fillColor),
        fillStyle: this.fillStyle,
        fillLineDash: [],
        stroke: this.resolveColor("$transparent"),
        strokeWidth: this.strokeWidth,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.fillRect(x, y, w, h);
    }
    return this;
  }

  /**
   * Draw a rect with fill and stroke
   */
  rect(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    seed: number = 1
  ): Canvas {
    this.fillRect(x1, y1, x2, y2, seed);
    this.strokeRect(x1, y1, x2, y2, seed);
    return this;
  }

  /**
   * Draw a rounded rect
   */
  strokeRoundRect(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number | number[],
    seed: number = 1
  ): Canvas {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    const rs = Array.isArray(radius)
      ? radius
      : [radius, radius, radius, radius];
    this.context.strokeStyle = this.resolveColor(this.strokeColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.globalAlpha = this.alpha;
    this.context.setLineDash(
      this.strokePattern.map((v) => v * this.strokeWidth)
    );
    if (this.roughness > 0) {
      const rd = this.generator.path(
        `M${x + rs[0]},${y} L${x + w - rs[1]},${y} Q${x + w},${y} ${x + w},${
          y + rs[1]
        } L${x + w},${y + h - rs[2]} Q${x + w},${y + h} ${x + w - rs[2]},${
          y + h
        } L${x + rs[3]},${y + h} Q${x},${y + h} ${x},${y + h - rs[3]} L${x},${
          y + rs[0]
        } Q${x},${y} ${x + rs[0]},${y} Z`,
        {
          seed,
          roughness: this.roughness,
          stroke: this.resolveColor(this.strokeColor),
          strokeWidth: this.strokeWidth,
          strokeLineDash: this.strokePattern.map((v) => v * this.strokeWidth),
          disableMultiStroke: this.strokePattern.length > 1,
          preserveVertices: true,
        }
      );
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      this.context.moveTo(x + rs[0], y);
      this.context.lineTo(x + w - rs[1], y);
      this.context.quadraticCurveTo(x + w, y, x + w, y + rs[1]);
      this.context.lineTo(x + w, y + h - rs[2]);
      this.context.quadraticCurveTo(x + w, y + h, x + w - rs[2], y + h);
      this.context.lineTo(x + rs[3], y + h);
      this.context.quadraticCurveTo(x, y + h, x, y + h - rs[3]);
      this.context.lineTo(x, y + rs[0]);
      this.context.quadraticCurveTo(x, y, x + rs[0], y);
      this.context.closePath();
      this.context.stroke();
    }
    return this;
  }

  /**
   * Draw a filled and rounded rect
   */
  fillRoundRect(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number | number[],
    seed: number = 1
  ): Canvas {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    const rs = Array.isArray(radius)
      ? radius
      : [radius, radius, radius, radius];
    this.context.fillStyle = this.resolveColor(this.fillColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.globalAlpha = this.alpha;
    if (this.roughness > 0 || this.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.path(
        `M${x + rs[0]},${y} L${x + w - rs[1]},${y} Q${x + w},${y} ${x + w},${
          y + rs[1]
        } L${x + w},${y + h - rs[2]} Q${x + w},${y + h} ${x + w - rs[2]},${
          y + h
        } L${x + rs[3]},${y + h} Q${x},${y + h} ${x},${y + h - rs[3]} L${x},${
          y + rs[0]
        } Q${x},${y} ${x + rs[0]},${y} Z`,
        {
          seed,
          roughness: this.roughness,
          fill: this.resolveColor(this.fillColor),
          fillStyle: this.fillStyle,
          fillLineDash: [],
          stroke: this.resolveColor("$transparent"),
          strokeWidth: this.strokeWidth,
          preserveVertices: true,
        }
      );
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      this.context.moveTo(x + rs[0], y);
      this.context.lineTo(x + w - rs[1], y);
      this.context.quadraticCurveTo(x + w, y, x + w, y + rs[1]);
      this.context.lineTo(x + w, y + h - rs[2]);
      this.context.quadraticCurveTo(x + w, y + h, x + w - rs[2], y + h);
      this.context.lineTo(x + rs[3], y + h);
      this.context.quadraticCurveTo(x, y + h, x, y + h - rs[3]);
      this.context.lineTo(x, y + rs[0]);
      this.context.quadraticCurveTo(x, y, x + rs[0], y);
      this.context.closePath();
      this.context.fill();
    }
    return this;
  }

  /**
   * Draw a rounded rect with fill and stroke
   */
  roundRect(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number | number[],
    seed: number = 1
  ): Canvas {
    this.fillRoundRect(x1, y1, x2, y2, radius, seed);
    this.strokeRoundRect(x1, y1, x2, y2, radius, seed);
    return this;
  }

  /**
   * Draw an ellipse
   */
  strokeEllipse(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    seed: number = 1
  ): Canvas {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    const kappa = 0.5522848;
    const ox = (w / 2.0) * kappa;
    const oy = (h / 2.0) * kappa;
    const xe = x + w;
    const ye = y + h;
    const xm = x + w / 2.0;
    const ym = y + h / 2.0;
    this.context.strokeStyle = this.resolveColor(this.strokeColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.globalAlpha = this.alpha;
    this.context.setLineDash(
      this.strokePattern.map((v) => v * this.strokeWidth)
    );
    if (this.roughness > 0) {
      const rd = this.generator.ellipse(xm, ym, w, h, {
        seed,
        roughness: this.roughness,
        stroke: this.resolveColor(this.strokeColor),
        strokeWidth: this.strokeWidth,
        strokeLineDash: this.strokePattern.map((v) => v * this.strokeWidth),
        disableMultiStroke: this.strokePattern.length > 1,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      this.context.moveTo(x, ym);
      this.context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
      this.context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
      this.context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
      this.context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
      this.context.closePath();
      this.context.stroke();
    }
    return this;
  }

  /**
   * Draw a filled ellipse
   */
  fillEllipse(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    seed: number = 1
  ): Canvas {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    const kappa = 0.5522848;
    const ox = (w / 2.0) * kappa;
    const oy = (h / 2.0) * kappa;
    const xe = x + w;
    const ye = y + h;
    const xm = x + w / 2.0;
    const ym = y + h / 2.0;
    this.context.fillStyle = this.resolveColor(this.fillColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.globalAlpha = this.alpha;
    if (this.roughness > 0 || this.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.ellipse(xm, ym, w, h, {
        seed,
        roughness: this.roughness,
        fill: this.resolveColor(this.fillColor),
        fillStyle: this.fillStyle,
        fillLineDash: [],
        stroke: this.resolveColor("$transparent"),
        strokeWidth: this.strokeWidth,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      this.context.moveTo(x, ym);
      this.context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
      this.context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
      this.context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
      this.context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
      this.context.closePath();
      this.context.fill();
    }
    return this;
  }

  /**
   * Draw an ellipse with fill and stroke
   */
  ellipse(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    seed: number = 1
  ): Canvas {
    this.fillEllipse(x1, y1, x2, y2, seed);
    this.strokeEllipse(x1, y1, x2, y2, seed);
    return this;
  }

  /**
   * Draw polyline
   */
  polyline(path: number[][], seed: number = 1): Canvas {
    this.context.strokeStyle = this.resolveColor(this.strokeColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.globalAlpha = this.alpha;
    this.context.setLineDash(
      this.strokePattern.map((v) => v * this.strokeWidth)
    );
    if (this.roughness > 0) {
      const rd = this.generator.linearPath(path as Point[], {
        seed,
        roughness: this.roughness,
        stroke: this.resolveColor(this.strokeColor),
        strokeWidth: this.strokeWidth,
        strokeLineDash: this.strokePattern.map((v) => v * this.strokeWidth),
        disableMultiStroke: this.strokePattern.length > 1,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      for (let i = 0, len = path.length; i < len; i++) {
        const p = path[i];
        if (i === 0) {
          this.context.moveTo(p[0], p[1]);
        } else {
          this.context.lineTo(p[0], p[1]);
        }
      }
      this.context.stroke();
    }
    return this;
  }

  // TODO: draw rough round-rect line if roughness > 0 (try to yse SVG path)
  /**
   * Draw rounded rect line
   */
  roundRectLine(path: number[][], seed: number = 1): Canvas {
    const ROUND_RADIUS = 8;
    this.context.strokeStyle = this.resolveColor(this.strokeColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.globalAlpha = this.alpha;
    this.context.setLineDash(
      this.strokePattern.map((v) => v * this.strokeWidth)
    );
    if (this.roughness > 0) {
      const rd = this.generator.linearPath(path as Point[], {
        seed,
        roughness: this.roughness,
        stroke: this.resolveColor(this.strokeColor),
        strokeWidth: this.strokeWidth,
        strokeLineDash: this.strokePattern.map((v) => v * this.strokeWidth),
        disableMultiStroke: this.strokePattern.length > 1,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      if (path.length > 0) {
        var p, prev, next, pdir, ndir;
        const p0 = path[0];
        this.context.moveTo(p0[0], p0[1]);
        for (let i = 1, len = path.length - 1; i < len; i++) {
          p = path[i];
          prev = path[i - 1];
          next = path[i + 1];
          // direction of previous line
          if (prev[0] === p[0]) {
            // vertical
            pdir = prev[1] < p[1] ? "VD" : "VU"; // down or up
          } else {
            // horizontal
            pdir = prev[0] < p[0] ? "HR" : "HL"; // right or left
          }
          // direction of next line
          if (next[0] === p[0]) {
            ndir = next[1] < p[1] ? "VU" : "VD"; // vertical down or up
          } else {
            ndir = next[0] < p[0] ? "HL" : "HR"; // horizontal right or left
          }
          // draw line
          switch (pdir) {
            case "VD":
              // this.context.moveTo(prev[0], prev[1] + ROUND_RADIUS)
              this.context.lineTo(p[0], p[1] - ROUND_RADIUS);
              break;
            case "VU":
              // this.context.moveTo(prev[0], prev[1] - ROUND_RADIUS)
              this.context.lineTo(p[0], p[1] + ROUND_RADIUS);
              break;
            case "HR":
              // this.context.moveTo(prev[0] + ROUND_RADIUS, prev[1])
              this.context.lineTo(p[0] - ROUND_RADIUS, p[1]);
              break;
            case "HL":
              // this.context.moveTo(prev[0] - ROUND_RADIUS, prev[1])
              this.context.lineTo(p[0] + ROUND_RADIUS, p[1]);
              break;
          }
          // draw corner
          switch (pdir) {
            case "VD":
              if (ndir === "HL") {
                this.context.arc(
                  p[0] - ROUND_RADIUS,
                  p[1] - ROUND_RADIUS,
                  ROUND_RADIUS,
                  0,
                  0.5 * Math.PI,
                  false
                );
              } else {
                // HR
                this.context.arc(
                  p[0] + ROUND_RADIUS,
                  p[1] - ROUND_RADIUS,
                  ROUND_RADIUS,
                  Math.PI,
                  0.5 * Math.PI,
                  true
                );
              }
              break;
            case "VU":
              if (ndir === "HL") {
                this.context.arc(
                  p[0] - ROUND_RADIUS,
                  p[1] + ROUND_RADIUS,
                  ROUND_RADIUS,
                  0,
                  1.5 * Math.PI,
                  true
                );
              } else {
                // HR
                this.context.arc(
                  p[0] + ROUND_RADIUS,
                  p[1] + ROUND_RADIUS,
                  ROUND_RADIUS,
                  Math.PI,
                  1.5 * Math.PI,
                  false
                );
              }
              break;
            case "HR":
              if (ndir === "VD") {
                this.context.arc(
                  p[0] - ROUND_RADIUS,
                  p[1] + ROUND_RADIUS,
                  ROUND_RADIUS,
                  1.5 * Math.PI,
                  0,
                  false
                );
              } else {
                // VU
                this.context.arc(
                  p[0] - ROUND_RADIUS,
                  p[1] - ROUND_RADIUS,
                  ROUND_RADIUS,
                  0.5 * Math.PI,
                  0,
                  true
                );
              }
              break;
            case "HL":
              if (ndir === "VD") {
                this.context.arc(
                  p[0] + ROUND_RADIUS,
                  p[1] + ROUND_RADIUS,
                  ROUND_RADIUS,
                  1.5 * Math.PI,
                  Math.PI,
                  true
                );
              } else {
                // VU
                this.context.arc(
                  p[0] + ROUND_RADIUS,
                  p[1] - ROUND_RADIUS,
                  ROUND_RADIUS,
                  0.5 * Math.PI,
                  Math.PI,
                  false
                );
              }
              break;
          }
        }
        this.context.lineTo(path[path.length - 1][0], path[path.length - 1][1]);
      }
      this.context.stroke();
    }
    return this;
  }

  /**
   * Draw curved lines
   */
  strokeCurve(path: number[][], seed: number = 1): Canvas {
    this.context.strokeStyle = this.resolveColor(this.strokeColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.globalAlpha = this.alpha;
    this.context.setLineDash(
      this.strokePattern.map((v) => v * this.strokeWidth)
    );
    if (this.roughness > 0) {
      const rd = this.generator.curve(path as Point[], {
        seed,
        roughness: this.roughness,
        stroke: this.resolveColor(this.strokeColor),
        strokeWidth: this.strokeWidth,
        strokeLineDash: this.strokePattern.map((v) => v * this.strokeWidth),
        disableMultiStroke: this.strokePattern.length > 1,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      if (path.length > 2) {
        const ps = geometry.curvePathPoints(path);
        this.polyline(ps);
      } else {
        this.context.moveTo(path[0][0], path[0][1]);
        this.context.lineTo(path[path.length - 1][0], path[path.length - 1][1]);
      }
      this.context.stroke();
    }
    return this;
  }

  /**
   * Draw filled curved lines
   */
  fillCurve(path: number[][], seed: number = 1): Canvas {
    this.context.fillStyle = this.resolveColor(this.fillColor);
    this.context.globalAlpha = this.alpha;
    this.context.lineWidth = this.strokeWidth;
    if (this.roughness > 0 || this.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.curve([...path, path[0]] as Point[], {
        seed,
        roughness: this.roughness,
        fill: this.resolveColor(this.fillColor),
        fillStyle: this.fillStyle,
        fillLineDash: [],
        stroke: this.resolveColor("$transparent"),
        strokeWidth: this.strokeWidth,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      this.context.setLineDash(this.strokePattern);
      if (path.length > 2) {
        const ps = geometry.curvePathPoints([...path, path[0]]);
        for (let i = 0, len = ps.length; i < len; i++) {
          const p = ps[i];
          if (i === 0) {
            this.context.moveTo(p[0], p[1]);
          } else {
            this.context.lineTo(p[0], p[1]);
          }
        }
      } else {
        this.context.moveTo(path[0][0], path[0][1]);
        this.context.lineTo(path[path.length - 1][0], path[path.length - 1][1]);
      }
      this.context.fill();
    }
    return this;
  }

  /**
   * Draw a curved lines with fill and stroke
   */
  curve(path: number[][], seed: number = 1): Canvas {
    this.fillCurve(path, seed);
    this.strokeCurve(path, seed);
    return this;
  }

  /**
   * Draw polygon
   */
  strokePolygon(path: number[][], seed: number = 1): Canvas {
    this.context.strokeStyle = this.resolveColor(this.strokeColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.globalAlpha = this.alpha;
    this.context.setLineDash(
      this.strokePattern.map((v) => v * this.strokeWidth)
    );
    if (this.roughness > 0) {
      const rd = this.generator.polygon(path as Point[], {
        seed,
        roughness: this.roughness,
        stroke: this.resolveColor(this.strokeColor),
        strokeWidth: this.strokeWidth,
        strokeLineDash: this.strokePattern.map((v) => v * this.strokeWidth),
        disableMultiStroke: this.strokePattern.length > 1,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      let start: number[] = [-1, -1];
      for (let i = 0, len = path.length; i < len; i++) {
        const p = path[i];
        if (i === 0) {
          start = p;
          this.context.moveTo(p[0], p[1]);
        } else {
          this.context.lineTo(p[0], p[1]);
        }
      }
      this.context.lineTo(start[0], start[1]);
      this.context.stroke();
    }
    return this;
  }

  /**
   * Draw filled polygon
   */
  fillPolygon(path: number[][], seed: number = 1): Canvas {
    this.context.fillStyle = this.resolveColor(this.fillColor);
    this.context.globalAlpha = this.alpha;
    this.context.lineWidth = this.strokeWidth;
    if (this.roughness > 0 || this.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.polygon(path as Point[], {
        seed,
        roughness: this.roughness,
        fill: this.resolveColor(this.fillColor),
        fillStyle: this.fillStyle,
        fillLineDash: [],
        stroke: this.resolveColor("$transparent"),
        strokeWidth: this.strokeWidth,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      for (let i = 0, len = path.length; i < len; i++) {
        const p = path[i];
        if (i === 0) {
          this.context.moveTo(p[0], p[1]);
        } else {
          this.context.lineTo(p[0], p[1]);
        }
      }
      this.context.fill();
    }
    return this;
  }

  /**
   * Draw a polygon with fill and stroke
   */
  polygon(path: number[][], seed: number = 1): Canvas {
    this.fillPolygon(path, seed);
    this.strokePolygon(path, seed);
    return this;
  }

  /**
   * Draw an arc. angles are started from 3'clock in degree (0~360).
   */
  strokeArc(
    x: number,
    y: number,
    r: number,
    startAngle: number,
    endAngle: number,
    seed: number = 1
  ): Canvas {
    let sa = geometry.toRadian(startAngle);
    let ea = geometry.toRadian(endAngle);
    this.context.strokeStyle = this.resolveColor(this.strokeColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.globalAlpha = this.alpha;
    this.context.setLineDash(
      this.strokePattern.map((v) => v * this.strokeWidth)
    );
    if (this.roughness > 0) {
      // To avoid system stuck due to the bug of roughjs
      if (startAngle === 0 && endAngle === 360) return this;
      const rd = this.generator.arc(x, y, r * 2, r * 2, sa, ea, false, {
        seed,
        roughness: this.roughness,
        stroke: this.resolveColor(this.strokeColor),
        strokeWidth: this.strokeWidth,
        strokeLineDash: this.strokePattern.map((v) => v * this.strokeWidth),
        disableMultiStroke: this.strokePattern.length > 1,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      this.context.arc(x, y, r, sa, ea, false);
      this.context.stroke();
    }
    return this;
  }

  /**
   * Draw filled arc. angles are started from 12'clock in degree.
   */
  fillArc(
    x: number,
    y: number,
    r: number,
    startAngle: number,
    endAngle: number,
    seed: number = 1
  ): Canvas {
    const sa = geometry.toRadian(geometry.normalizeAngle(startAngle));
    const ea = geometry.toRadian(geometry.normalizeAngle(endAngle));
    this.context.fillStyle = this.resolveColor(this.fillColor);
    this.context.globalAlpha = this.alpha;
    this.context.lineWidth = this.strokeWidth;
    if (this.roughness > 0 || this.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.arc(x, y, r * 2, r * 2, sa, ea, true, {
        seed,
        roughness: this.roughness,
        fill: this.resolveColor(this.fillColor),
        fillStyle: this.fillStyle,
        fillLineDash: [],
        stroke: this.resolveColor("$transparent"),
        strokeWidth: this.strokeWidth,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      this.context.arc(x, y, r, sa, ea, false);
      this.context.fill();
    }
    return this;
  }

  /**
   * Draw an arc with fill and stroke.
   * angles are started from 12'clock in degree.
   */
  arc(
    x: number,
    y: number,
    r: number,
    startAngle: number,
    endAngle: number,
    seed: number = 1
  ): Canvas {
    this.fillArc(x, y, r, startAngle, endAngle, seed);
    this.strokeArc(x, y, r, startAngle, endAngle, seed);
    return this;
  }

  /**
   * Draw a path
   */
  strokePath(path: SVGPath, seed: number = 1): Canvas {
    this.context.strokeStyle = this.resolveColor(this.strokeColor);
    this.context.lineWidth = this.strokeWidth;
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.globalAlpha = this.alpha;
    this.context.setLineDash(
      this.strokePattern.map((v) => v * this.strokeWidth)
    );
    if (this.roughness > 0) {
      const d = pathToString(path);
      const rd = this.generator.path(d, {
        seed,
        roughness: this.roughness,
        stroke: this.resolveColor(this.strokeColor),
        strokeWidth: this.strokeWidth,
        strokeLineDash: this.strokePattern.map((v) => v * this.strokeWidth),
        disableMultiStroke: this.strokePattern.length > 1,
        preserveVertices: true,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      const d = new Path2D(pathToString(path));
      this.context.stroke(d);
    }
    return this;
  }

  /**
   * Draw filled path
   */
  fillPath(path: SVGPath, seed: number = 1): Canvas {
    this.context.fillStyle = this.resolveColor(this.fillColor);
    this.context.globalAlpha = this.alpha;
    this.context.lineWidth = this.strokeWidth;
    if (this.roughness > 0 || this.fillStyle !== FillStyle.SOLID) {
      const d = pathToString(path);
      const rd = this.generator.path(d, {
        seed,
        roughness: this.roughness,
        fill: this.resolveColor(this.fillColor),
        fillStyle: this.fillStyle,
        fillLineDash: [],
        stroke: this.resolveColor("$transparent"),
        strokeWidth: this.strokeWidth,
        preserveVertices: true,
      });
      roughDraw(this.context, rd);
    } else {
      this.context.beginPath();
      const d = new Path2D(pathToString(path));
      this.context.fill(d);
    }
    return this;
  }

  /**
   * Draw a path with fill and stroke
   */
  path(path: SVGPath, seed: number = 1): Canvas {
    this.fillPath(path, seed);
    this.strokePath(path, seed);
    return this;
  }

  /**
   * Fill a text
   * @param x
   * @param y text baseline (metric.ascent - not the top of text)
   * @param text
   */
  fillText(x: number, y: number, text: string): Canvas {
    this.context.fillStyle = this.resolveColor(this.fontColor);
    this.context.globalAlpha = this.alpha;
    this.context.font = this.font;
    this.context.beginPath();
    this.context.fillText(text, x, y);
    return this;
  }

  /**
   * Draw Image
   */
  drawImage(
    image: CanvasImageSource,
    x: number,
    y: number,
    width: number,
    height: number
  ): Canvas {
    this.context.globalAlpha = this.alpha;
    this.context.drawImage(image, x, y, width, height);
    return this;
  }

  /**
   * Get Text Metric
   * Ref: https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics
   *
   * Values:
   * - ascent: Distance from the baseline to the top of the box.
   * - descent: Distance from the baseline to the bottom of the box.
   * - actualAscent: Distance from the baseline to the top of the font
   *   (varies for each character: "." is a small value, "|" is a large value).
   * - actualDescent: Distance from the baseline to the bottom of the font
   *   (varies for each character).
   *
   * Hints:
   * - ascent + descent = height
   * - ascent + descent > actualAscent + actualDescent
   */
  textMetric(text: string): CanvasTextMetric {
    this.context.font = this.font;
    const metric = this.context.measureText(text);
    return {
      width: metric.width,
      height: metric.fontBoundingBoxDescent + metric.fontBoundingBoxAscent,
      ascent: metric.fontBoundingBoxAscent,
      descent: metric.fontBoundingBoxDescent,
      actualAscent: metric.actualBoundingBoxAscent,
      actualDescent: metric.actualBoundingBoxDescent,
    };
  }
}

/**
 * CanvasPointerEvent
 */
class CanvasPointerEvent {
  /**
   * X-position in CCS (Canvas coord-system)
   */
  x: number;

  /**
   * Y-position in CCS (Canvas coord-system)
   */
  y: number;

  button: number;
  shiftDown: boolean;
  altDown: boolean;
  ctrlDown: boolean;
  ModDown: boolean;
  leftButtonDown: boolean;
  touchDistance: number;

  constructor(
    x: number,
    y: number,
    e: {
      button: number;
      shiftKey: boolean;
      altKey: boolean;
      ctrlKey: boolean;
      metaKey: boolean;
      touchDistance?: number;
    }
  ) {
    this.x = x;
    this.y = y;
    this.button = e.button;
    this.shiftDown = e.shiftKey;
    this.altDown = e.altKey;
    this.ctrlDown = e.ctrlKey;
    this.ModDown = e.metaKey || e.ctrlKey;
    this.leftButtonDown = false;
    this.touchDistance = e.touchDistance || 0;
  }
}

export {
  FillStyle,
  SVGPathCommand,
  SVGPathItem,
  SVGPath,
  pathToString,
  Canvas,
  CanvasTextMetric,
  CanvasPointerEvent,
};
