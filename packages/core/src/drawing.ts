import rough from "roughjs";
import { Drawable } from "roughjs/bin/core";
import { Canvas } from "./graphics/graphics";
import { RoughGenerator } from "roughjs/bin/generator";
import { roughDraw } from "./graphics/roughjs-draw";
import { FillStyle, Shape } from "./shapes";

/**
 * Drawing Object
 */
type DO = RoundRectDO | FillRoundRectDO | RoughDO;

type DOType = "rect" | "fillRect" | "roundRect" | "fillRoundRect" | "rough";

interface BaseDO {
  type: DOType;
}

// line
// rect
// fillRect
// ellipse
// fillEllipse
// polyline
// curve
// fillCurve
// polygon
// fillPolygon
// arc
// fillArc
// path
// fillPath
// fillText
// drawImage

interface RoundRectDO extends BaseDO {
  type: "roundRect";
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  opacity: number;
  x: number;
  y: number;
  w: number;
  h: number;
  radius: number[];
}

interface FillRoundRectDO extends BaseDO {
  type: "fillRoundRect";
  fillColor: string;
  fillStyle: string;
  opacity: number;
  x: number;
  y: number;
  w: number;
  h: number;
  radius: number[];
}

interface RoughDO extends BaseDO {
  type: "rough";
  rd: Drawable;
}

/**
 * Drawing class
 */
export class Drawing {
  shape: Shape;
  do: DO[];
  generator: RoughGenerator;

  constructor(shape: Shape) {
    this.shape = shape;
    this.do = [];
    this.generator = rough.generator();
  }

  roundRect(
    canvas: Canvas,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number | number[]
  ) {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    const rs = Array.isArray(radius)
      ? radius
      : [radius, radius, radius, radius];
    if (this.shape.roughness > 0) {
      const rd = this.generator.path(
        `M${x + rs[0]},${y} L${x + w - rs[1]},${y} Q${x + w},${y} ${x + w},${
          y + rs[1]
        } L${x + w},${y + h - rs[2]} Q${x + w},${y + h} ${x + w - rs[2]},${
          y + h
        } L${x + rs[3]},${y + h} Q${x},${y + h} ${x},${y + h - rs[3]} L${x},${
          y + rs[0]
        } Q${x},${y} ${x + rs[0]},${y} Z`,
        {
          seed: this.shape.getSeed(),
          roughness: this.shape.roughness,
          stroke: canvas.resolveColor(this.shape.strokeColor),
          strokeWidth: this.shape.strokeWidth,
          strokeLineDash: this.shape.strokePattern,
        }
      );
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "roundRect",
        strokeColor: canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokePattern: this.shape.strokePattern,
        opacity: this.shape.opacity,
        x,
        y,
        w,
        h,
        radius: rs,
      });
    }
    return this;
  }

  fillRoundRect(
    canvas: Canvas,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number | number[]
  ) {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    const rs = Array.isArray(radius)
      ? radius
      : [radius, radius, radius, radius];
    if (this.shape.roughness > 0 || this.shape.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.path(
        `M${x + rs[0]},${y} L${x + w - rs[1]},${y} Q${x + w},${y} ${x + w},${
          y + rs[1]
        } L${x + w},${y + h - rs[2]} Q${x + w},${y + h} ${x + w - rs[2]},${
          y + h
        } L${x + rs[3]},${y + h} Q${x},${y + h} ${x},${y + h - rs[3]} L${x},${
          y + rs[0]
        } Q${x},${y} ${x + rs[0]},${y} Z`,
        {
          seed: this.shape.getSeed(),
          roughness: this.shape.roughness,
          fill: canvas.resolveColor(this.shape.fillColor),
          fillStyle: this.shape.fillStyle,
          fillLineDash: [],
          stroke: canvas.resolveColor("$transparent"),
          strokeWidth: this.shape.strokeWidth,
        }
      );
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "fillRoundRect",
        fillColor: canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        opacity: this.shape.opacity,
        x,
        y,
        w,
        h,
        radius: rs,
      });
    }
    return this;
  }

  clear() {
    this.do = [];
  }

  draw(canvas: Canvas) {
    for (const d of this.do) {
      canvas.context.lineCap = "round";
      canvas.context.lineJoin = "round";
      switch (d.type) {
        case "roundRect":
          canvas.context.strokeStyle = d.strokeColor;
          canvas.context.lineWidth = d.strokeWidth;
          canvas.context.setLineDash(d.strokePattern);
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          canvas.context.moveTo(d.x + d.radius[0], d.y);
          canvas.context.lineTo(d.x + d.w - d.radius[1], d.y);
          canvas.context.quadraticCurveTo(
            d.x + d.w,
            d.y,
            d.x + d.w,
            d.y + d.radius[1]
          );
          canvas.context.lineTo(d.x + d.w, d.y + d.h - d.radius[2]);
          canvas.context.quadraticCurveTo(
            d.x + d.w,
            d.y + d.h,
            d.x + d.w - d.radius[2],
            d.y + d.h
          );
          canvas.context.lineTo(d.x + d.radius[3], d.y + d.h);
          canvas.context.quadraticCurveTo(
            d.x,
            d.y + d.h,
            d.x,
            d.y + d.h - d.radius[3]
          );
          canvas.context.lineTo(d.x, d.y + d.radius[0]);
          canvas.context.quadraticCurveTo(d.x, d.y, d.x + d.radius[0], d.y);
          canvas.context.closePath();
          canvas.context.stroke();
          break;
        case "fillRoundRect":
          canvas.context.fillStyle = d.fillColor;
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          canvas.context.moveTo(d.x + d.radius[0], d.y);
          canvas.context.lineTo(d.x + d.w - d.radius[1], d.y);
          canvas.context.quadraticCurveTo(
            d.x + d.w,
            d.y,
            d.x + d.w,
            d.y + d.radius[1]
          );
          canvas.context.lineTo(d.x + d.w, d.y + d.h - d.radius[2]);
          canvas.context.quadraticCurveTo(
            d.x + d.w,
            d.y + d.h,
            d.x + d.w - d.radius[2],
            d.y + d.h
          );
          canvas.context.lineTo(d.x + d.radius[3], d.y + d.h);
          canvas.context.quadraticCurveTo(
            d.x,
            d.y + d.h,
            d.x,
            d.y + d.h - d.radius[3]
          );
          canvas.context.lineTo(d.x, d.y + d.radius[0]);
          canvas.context.quadraticCurveTo(d.x, d.y, d.x + d.radius[0], d.y);
          canvas.context.closePath();
          canvas.context.fill();
          break;
        case "rough":
          roughDraw(canvas.context, d.rd);
          break;
      }
    }
  }
}
