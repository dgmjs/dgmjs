import rough from "roughjs";
import { Drawable } from "roughjs/bin/core";
import { Canvas } from "./graphics";
import { RoughGenerator } from "roughjs/bin/generator";
import { roughDraw } from "./roughjs-draw";

/**
 * Drawing Object
 */
type DO = RectDO | FillRectDO | RoughDO;

type DOType = "rect" | "fillRect" | "rough";

interface BaseDO {
  type: DOType;
}

interface RectDO extends BaseDO {
  type: "rect";
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  alpha: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface FillRectDO extends BaseDO {
  type: "fillRect";
  fillColor: string;
  alpha: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface RoughDO extends BaseDO {
  type: "rough";
  rd: Drawable;
}

/**
 * Drawing class
 */
export class Drawing {
  do: DO[];
  generator: RoughGenerator;

  constructor() {
    this.do = [];
    this.generator = rough.generator();
  }

  rect(
    canvas: Canvas,
    strokeColor: string,
    strokeWidth: number,
    strokePattern: number[],
    alpha: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    this.do.push({
      type: "rect",
      strokeColor,
      strokeWidth,
      strokePattern,
      alpha,
      x,
      y,
      w,
      h,
    });
    return this;
  }

  fillRect(
    canvas: Canvas,
    fillColor: string,
    alpha: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    this.do.push({
      type: "fillRect",
      fillColor,
      alpha,
      x,
      y,
      w,
      h,
    });
    return this;
  }

  roughRect(
    canvas: Canvas,
    strokeColor: string,
    strokeWidth: number,
    strokePattern: number[],
    roughness: number,
    alpha: number,
    seed: number = 1,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    const rd = this.generator.rectangle(x, y, w, h, {
      seed,
      roughness: roughness,
      stroke: canvas.resolveColor(strokeColor),
      strokeWidth: strokeWidth,
      strokeLineDash: strokePattern,
    });
    this.do.push({ type: "rough", rd });
    return this;
  }

  clear() {
    this.do = [];
  }

  draw(canvas: Canvas) {
    for (const d of this.do) {
      switch (d.type) {
        case "rect":
          canvas.context.globalAlpha = d.alpha;
          canvas.context.strokeStyle = d.strokeColor;
          canvas.context.lineWidth = d.strokeWidth;
          canvas.context.setLineDash(d.strokePattern);
          canvas.context.beginPath();
          canvas.context.rect(d.x, d.y, d.w, d.h);
          canvas.context.closePath();
          canvas.context.stroke();
          break;
        case "fillRect":
          canvas.context.globalAlpha = d.alpha;
          canvas.context.fillStyle = d.fillColor;
          canvas.context.fillRect(d.x, d.y, d.w, d.h);
          break;
        case "rough":
          roughDraw(canvas.context, d.rd);
          break;
      }
    }
  }
}
