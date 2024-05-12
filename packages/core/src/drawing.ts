import rough from "roughjs";
import { Drawable } from "roughjs/bin/core";
import { RoughGenerator } from "roughjs/bin/generator";
import type { Point } from "roughjs/bin/geometry";
import { Canvas, SVGPath, pathToString } from "./graphics/graphics";
import { roughDraw } from "./graphics/roughjs-draw";
import { FillStyle, Shape } from "./shapes";
import * as geometry from "./graphics/geometry";
import * as utils from "./graphics/utils";

/**
 * Drawing Object
 */
type DO =
  | LineDO
  | StrokeRectDO
  | FillRectDO
  | StrokeRoundRectDO
  | FillRoundRectDO
  | StrokeEllipseDO
  | FillEllipseDO
  | PolylineDO
  | StrokeCurveDO
  | FillCurveDO
  | StrokePolygonDO
  | FillPolygonDO
  | StrokeArcDO
  | FillArcDO
  | StrokePathDO
  | FillPathDO
  | FillTextDO
  | DrawImageDO
  | RoughDO;

type DOType =
  | "line"
  | "strokeRect"
  | "fillRect"
  | "strokeRoundRect"
  | "fillRoundRect"
  | "strokeEllipse"
  | "fillEllipse"
  | "polyline"
  | "strokeCurve"
  | "fillCurve"
  | "strokePolygon"
  | "fillPolygon"
  | "strokeArc"
  | "fillArc"
  | "strokePath"
  | "fillPath"
  | "fillText"
  | "drawImage"
  | "rough";

interface BaseDO {
  type: DOType;
}

interface LineDO extends BaseDO {
  type: "line";
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  opacity: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface StrokeRectDO extends BaseDO {
  type: "strokeRect";
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  opacity: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface FillRectDO extends BaseDO {
  type: "fillRect";
  fillColor: string;
  fillStyle: string;
  opacity: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface StrokeRoundRectDO extends BaseDO {
  type: "strokeRoundRect";
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

interface StrokeEllipseDO extends BaseDO {
  type: "strokeEllipse";
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  opacity: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface FillEllipseDO extends BaseDO {
  type: "fillEllipse";
  fillColor: string;
  fillStyle: string;
  opacity: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface PolylineDO extends BaseDO {
  type: "polyline";
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  opacity: number;
  path: number[][];
}

interface StrokeCurveDO extends BaseDO {
  type: "strokeCurve";
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  opacity: number;
  path: number[][];
}

interface FillCurveDO extends BaseDO {
  type: "fillCurve";
  fillColor: string;
  fillStyle: string;
  opacity: number;
  path: number[][];
}

interface StrokePolygonDO extends BaseDO {
  type: "strokePolygon";
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  opacity: number;
  path: number[][];
}

interface FillPolygonDO extends BaseDO {
  type: "fillPolygon";
  fillColor: string;
  fillStyle: string;
  opacity: number;
  path: number[][];
}

interface StrokeArcDO extends BaseDO {
  type: "strokeArc";
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  opacity: number;
  x: number;
  y: number;
  r: number;
  startAngle: number;
  endAngle: number;
}

interface FillArcDO extends BaseDO {
  type: "fillArc";
  fillColor: string;
  fillStyle: string;
  opacity: number;
  x: number;
  y: number;
  r: number;
  startAngle: number;
  endAngle: number;
}

interface StrokePathDO extends BaseDO {
  type: "strokePath";
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  opacity: number;
  path: SVGPath;
}

interface FillPathDO extends BaseDO {
  type: "fillPath";
  fillColor: string;
  fillStyle: string;
  opacity: number;
  path: SVGPath;
}

interface FillTextDO extends BaseDO {
  type: "fillText";
  fillColor: string;
  fillStyle: string;
  opacity: number;
  font: string;
  x: number;
  y: number;
  text: string;
}

interface DrawImageDO extends BaseDO {
  type: "drawImage";
  opacity: number;
  image: CanvasImageSource;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface RoughDO extends BaseDO {
  type: "rough";
  rd: Drawable;
}

/**
 * Drawing class
 */
export class Drawing {
  canvas: Canvas = null!;
  shape: Shape;
  do: DO[];
  generator: RoughGenerator;

  constructor(shape: Shape) {
    this.shape = shape;
    this.do = [];
    this.generator = rough.generator();
  }

  clear() {
    this.do = [];
  }

  setCanvas(canvas: Canvas) {
    this.canvas = canvas;
  }

  /**
   * Draw a line
   */
  line(x1: number, y1: number, x2: number, y2: number) {
    if (this.shape.roughness > 0) {
      const rd = this.generator.line(x1, y1, x2, y2, {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        stroke: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokeLineDash: this.shape.strokePattern,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "line",
        strokeColor: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokePattern: this.shape.strokePattern,
        opacity: this.shape.opacity,
        x1,
        y1,
        x2,
        y2,
      });
    }
    return this;
  }

  /**
   * Draw a rect lines
   */
  strokeRect(x1: number, y1: number, x2: number, y2: number, seed: number = 1) {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    if (this.shape.roughness > 0) {
      const rd = this.generator.rectangle(x, y, w, h, {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        stroke: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokeLineDash: this.shape.strokePattern,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "strokeRect",
        strokeColor: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokePattern: this.shape.strokePattern,
        opacity: this.shape.opacity,
        x,
        y,
        w,
        h,
      });
    }
    return this;
  }

  /**
   * Draw a filled rect
   */
  fillRect(x1: number, y1: number, x2: number, y2: number) {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    if (this.shape.roughness > 0 || this.shape.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.rectangle(x, y, w, h, {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        fill: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        fillLineDash: [],
        stroke: this.canvas.resolveColor("$transparent"),
        strokeWidth: this.shape.strokeWidth,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "fillRect",
        fillColor: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        opacity: this.shape.opacity,
        x,
        y,
        w,
        h,
      });
    }
    return this;
  }

  /**
   * Draw a rect
   */
  rect(x1: number, y1: number, x2: number, y2: number) {
    this.fillRect(x1, y1, x2, y2);
    this.strokeRect(x1, y1, x2, y2);
    return this;
  }

  /**
   * Draw a round rect lines
   */
  strokeRoundRect(
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
          stroke: this.canvas.resolveColor(this.shape.strokeColor),
          strokeWidth: this.shape.strokeWidth,
          strokeLineDash: this.shape.strokePattern,
        }
      );
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "strokeRoundRect",
        strokeColor: this.canvas.resolveColor(this.shape.strokeColor),
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

  /**
   * Draw a filled round rect
   */
  fillRoundRect(
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
          fill: this.canvas.resolveColor(this.shape.fillColor),
          fillStyle: this.shape.fillStyle,
          fillLineDash: [],
          stroke: this.canvas.resolveColor("$transparent"),
          strokeWidth: this.shape.strokeWidth,
        }
      );
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "fillRoundRect",
        fillColor: this.canvas.resolveColor(this.shape.fillColor),
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

  /**
   * Draw a round rect
   */
  roundRect(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number | number[]
  ) {
    this.fillRoundRect(x1, y1, x2, y2, radius);
    this.strokeRoundRect(x1, y1, x2, y2, radius);
    return this;
  }

  /**
   * Draw an ellipse
   */
  strokeEllipse(x1: number, y1: number, x2: number, y2: number) {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    const xm = x + w / 2.0;
    const ym = y + h / 2.0;
    if (this.shape.roughness > 0) {
      const rd = this.generator.ellipse(xm, ym, w, h, {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        stroke: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokeLineDash: this.shape.strokePattern,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "strokeEllipse",
        strokeColor: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokePattern: this.shape.strokePattern,
        opacity: this.shape.opacity,
        x,
        y,
        w,
        h,
      });
    }
    return this;
  }

  /**
   * Draw a filled ellipse
   */
  fillEllipse(x1: number, y1: number, x2: number, y2: number) {
    const x = x1 < x2 ? x1 : x2;
    const y = y1 < y2 ? y1 : y2;
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    const xm = x + w / 2.0;
    const ym = y + h / 2.0;
    if (this.shape.roughness > 0 || this.shape.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.ellipse(xm, ym, w, h, {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        fill: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        fillLineDash: [],
        stroke: this.canvas.resolveColor("$transparent"),
        strokeWidth: this.shape.strokeWidth,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "fillEllipse",
        fillColor: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        opacity: this.shape.opacity,
        x,
        y,
        w,
        h,
      });
    }
    return this;
  }

  /**
   * Draw an ellipse
   */
  ellipse(x1: number, y1: number, x2: number, y2: number) {
    this.fillEllipse(x1, y1, x2, y2);
    this.strokeEllipse(x1, y1, x2, y2);
    return this;
  }

  /**
   * Draw polyline
   */
  polyline(path: number[][]) {
    if (this.shape.roughness > 0) {
      const rd = this.generator.linearPath(path as Point[], {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        stroke: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokeLineDash: this.shape.strokePattern,
      });
      this.do.push({ type: "rough", rd });
      // roughDraw(this.context, rd);
    } else {
      this.do.push({
        type: "polyline",
        strokeColor: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokePattern: this.shape.strokePattern,
        opacity: this.shape.opacity,
        path: path,
      });
    }
    return this;
  }

  /**
   * Draw curved lines
   */
  strokeCurve(path: number[][]) {
    if (this.shape.roughness > 0) {
      const rd = this.generator.curve(path as Point[], {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        stroke: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokeLineDash: this.shape.strokePattern,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "strokeCurve",
        strokeColor: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokePattern: this.shape.strokePattern,
        opacity: this.shape.opacity,
        path: path,
      });
    }
    return this;
  }

  /**
   * Draw filled curved lines
   */
  fillCurve(path: number[][]) {
    if (this.shape.roughness > 0 || this.shape.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.curve([...path, path[0]] as Point[], {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        fill: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        fillLineDash: [],
        stroke: this.canvas.resolveColor("$transparent"),
        strokeWidth: this.shape.strokeWidth,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "fillCurve",
        fillColor: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        opacity: this.shape.opacity,
        path: path,
      });
    }
    return this;
  }

  /**
   * Draw a curve
   */
  curve(path: number[][]) {
    this.fillCurve(path);
    this.strokeCurve(path);
    return this;
  }

  /**
   * Draw polygon
   */
  strokePolygon(path: number[][]) {
    if (this.shape.roughness > 0) {
      const rd = this.generator.polygon(path as Point[], {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        stroke: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokeLineDash: this.shape.strokePattern,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "strokePolygon",
        strokeColor: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokePattern: this.shape.strokePattern,
        opacity: this.shape.opacity,
        path: path,
      });
    }
    return this;
  }

  /**
   * Draw filled polygon
   */
  fillPolygon(path: number[][]) {
    if (this.shape.roughness > 0 || this.shape.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.polygon(path as Point[], {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        fill: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        fillLineDash: [],
        stroke: this.canvas.resolveColor("$transparent"),
        strokeWidth: this.shape.strokeWidth,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "fillPolygon",
        fillColor: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        opacity: this.shape.opacity,
        path: path,
      });
    }
    return this;
  }

  /**
   * Draw a polygon
   */
  polygon(path: number[][]) {
    this.fillPolygon(path);
    this.strokePolygon(path);
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
    endAngle: number
  ) {
    const sa = geometry.toRadian(startAngle);
    const ea = geometry.toRadian(endAngle);
    if (this.shape.roughness > 0) {
      // To avoid system stuck due to the bug of roughjs
      if (startAngle === 0 && endAngle === 360) return this;
      const rd = this.generator.arc(x, y, r * 2, r * 2, sa, ea, false, {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        stroke: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokeLineDash: this.shape.strokePattern,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "strokeArc",
        strokeColor: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokePattern: this.shape.strokePattern,
        opacity: this.shape.opacity,
        x,
        y,
        r,
        startAngle: sa,
        endAngle: ea,
      });
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
    endAngle: number
  ) {
    const sa = geometry.toRadian(geometry.normalizeAngle(startAngle));
    const ea = geometry.toRadian(geometry.normalizeAngle(endAngle));
    if (this.shape.roughness > 0 || this.shape.fillStyle !== FillStyle.SOLID) {
      const rd = this.generator.arc(x, y, r * 2, r * 2, sa, ea, true, {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        fill: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        fillLineDash: [],
        stroke: this.canvas.resolveColor("$transparent"),
        strokeWidth: this.shape.strokeWidth,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "fillArc",
        fillColor: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        opacity: this.shape.opacity,
        x,
        y,
        r,
        startAngle: sa,
        endAngle: ea,
      });
    }
    return this;
  }

  /**
   * Draw an arc
   */
  arc(x: number, y: number, r: number, startAngle: number, endAngle: number) {
    this.fillArc(x, y, r, startAngle, endAngle);
    this.strokeArc(x, y, r, startAngle, endAngle);
    return this;
  }

  /**
   * Draw a path
   */
  strokePath(path: SVGPath) {
    if (this.shape.roughness > 0) {
      const d = pathToString(path);
      const rd = this.generator.path(d, {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        stroke: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokeLineDash: this.shape.strokePattern,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "strokePath",
        strokeColor: this.canvas.resolveColor(this.shape.strokeColor),
        strokeWidth: this.shape.strokeWidth,
        strokePattern: this.shape.strokePattern,
        opacity: this.shape.opacity,
        path,
      });
    }
    return this;
  }

  /**
   * Draw filled path
   */
  fillPath(path: SVGPath) {
    if (this.shape.roughness > 0 || this.shape.fillStyle !== FillStyle.SOLID) {
      const d = pathToString(path);
      const rd = this.generator.path(d, {
        seed: this.shape.getSeed(),
        roughness: this.shape.roughness,
        fill: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        fillLineDash: [],
        stroke: this.canvas.resolveColor("$transparent"),
        strokeWidth: this.shape.strokeWidth,
      });
      this.do.push({ type: "rough", rd });
    } else {
      this.do.push({
        type: "fillPath",
        fillColor: this.canvas.resolveColor(this.shape.fillColor),
        fillStyle: this.shape.fillStyle,
        opacity: this.shape.opacity,
        path,
      });
    }
    return this;
  }

  /**
   * Draw a path
   */
  path(path: SVGPath) {
    this.fillPath(path);
    this.strokePath(path);
    return this;
  }

  /**
   * Fill a text
   * @param x
   * @param y text baseline (metric.ascent - not the top of text)
   * @param text
   */
  fillText(x: number, y: number, text: string) {
    this.do.push({
      type: "fillText",
      fillColor: this.canvas.resolveColor(this.shape.fillColor),
      fillStyle: this.shape.fillStyle,
      opacity: this.shape.opacity,
      font: utils.toCssFont(
        this.shape.fontStyle,
        this.shape.fontWeight,
        this.shape.fontSize,
        this.shape.fontFamily
      ),
      x,
      y,
      text,
    });
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
  ) {
    this.do.push({
      type: "drawImage",
      opacity: this.shape.opacity,
      image,
      x,
      y,
      width,
      height,
    });
    return this;
  }

  /**
   * Draw memoized drawing objects
   */
  draw(canvas: Canvas) {
    for (const d of this.do) {
      canvas.context.lineCap = "round";
      canvas.context.lineJoin = "round";
      switch (d.type) {
        case "line": {
          canvas.context.strokeStyle = d.strokeColor;
          canvas.context.lineWidth = d.strokeWidth;
          canvas.context.setLineDash(d.strokePattern);
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          canvas.context.moveTo(d.x1, d.y1);
          canvas.context.lineTo(d.x2, d.y2);
          canvas.context.closePath();
          canvas.context.stroke();
          break;
        }
        case "strokeRect": {
          canvas.context.strokeStyle = d.strokeColor;
          canvas.context.lineWidth = d.strokeWidth;
          canvas.context.setLineDash(d.strokePattern);
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          canvas.context.rect(d.x, d.y, d.w, d.h);
          canvas.context.closePath();
          canvas.context.stroke();
          break;
        }
        case "fillRect": {
          canvas.context.fillStyle = d.fillColor;
          canvas.context.globalAlpha = d.opacity;
          canvas.context.fillRect(d.x, d.y, d.w, d.h);
          break;
        }
        case "strokeRoundRect": {
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
        }
        case "fillRoundRect": {
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
        }
        case "strokeEllipse": {
          canvas.context.strokeStyle = d.strokeColor;
          canvas.context.lineWidth = d.strokeWidth;
          canvas.context.setLineDash(d.strokePattern);
          canvas.context.globalAlpha = d.opacity;
          const kappa = 0.5522848;
          const ox = (d.w / 2.0) * kappa;
          const oy = (d.h / 2.0) * kappa;
          const xe = d.x + d.w;
          const ye = d.y + d.h;
          const xm = d.x + d.w / 2.0;
          const ym = d.y + d.h / 2.0;
          canvas.context.beginPath();
          canvas.context.moveTo(d.x, ym);
          canvas.context.bezierCurveTo(d.x, ym - oy, xm - ox, d.y, xm, d.y);
          canvas.context.bezierCurveTo(xm + ox, d.y, xe, ym - oy, xe, ym);
          canvas.context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
          canvas.context.bezierCurveTo(xm - ox, ye, d.x, ym + oy, d.x, ym);
          canvas.context.closePath();
          canvas.context.stroke();
          break;
        }
        case "fillEllipse": {
          canvas.context.fillStyle = d.fillColor;
          canvas.context.globalAlpha = d.opacity;
          const kappa = 0.5522848;
          const ox = (d.w / 2.0) * kappa;
          const oy = (d.h / 2.0) * kappa;
          const xe = d.x + d.w;
          const ye = d.y + d.h;
          const xm = d.x + d.w / 2.0;
          const ym = d.y + d.h / 2.0;
          canvas.context.beginPath();
          canvas.context.moveTo(d.x, ym);
          canvas.context.bezierCurveTo(d.x, ym - oy, xm - ox, d.y, xm, d.y);
          canvas.context.bezierCurveTo(xm + ox, d.y, xe, ym - oy, xe, ym);
          canvas.context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
          canvas.context.bezierCurveTo(xm - ox, ye, d.x, ym + oy, d.x, ym);
          canvas.context.closePath();
          canvas.context.fill();
          break;
        }
        case "polyline": {
          canvas.context.strokeStyle = d.strokeColor;
          canvas.context.lineWidth = d.strokeWidth;
          canvas.context.setLineDash(d.strokePattern);
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          for (let i = 0, len = d.path.length; i < len; i++) {
            const p = d.path[i];
            if (i === 0) {
              canvas.context.moveTo(p[0], p[1]);
            } else {
              canvas.context.lineTo(p[0], p[1]);
            }
          }
          canvas.context.stroke();
          break;
        }
        case "strokeCurve": {
          canvas.context.strokeStyle = d.strokeColor;
          canvas.context.lineWidth = d.strokeWidth;
          canvas.context.setLineDash(d.strokePattern);
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          if (d.path.length > 2) {
            const ps = geometry.curvePathPoints(d.path);
            this.polyline(ps);
          } else {
            canvas.context.moveTo(d.path[0][0], d.path[0][1]);
            canvas.context.lineTo(
              d.path[d.path.length - 1][0],
              d.path[d.path.length - 1][1]
            );
          }
          canvas.context.stroke();
          break;
        }
        case "fillCurve": {
          canvas.context.fillStyle = d.fillColor;
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          if (d.path.length > 2) {
            const ps = geometry.curvePathPoints([...d.path, d.path[0]]);
            for (let i = 0, len = ps.length; i < len; i++) {
              const p = ps[i];
              if (i === 0) {
                canvas.context.moveTo(p[0], p[1]);
              } else {
                canvas.context.lineTo(p[0], p[1]);
              }
            }
          } else {
            canvas.context.moveTo(d.path[0][0], d.path[0][1]);
            canvas.context.lineTo(
              d.path[d.path.length - 1][0],
              d.path[d.path.length - 1][1]
            );
          }
          canvas.context.fill();
          break;
        }
        case "strokePolygon": {
          canvas.context.strokeStyle = d.strokeColor;
          canvas.context.lineWidth = d.strokeWidth;
          canvas.context.setLineDash(d.strokePattern);
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          let start: number[] = [-1, -1];
          for (let i = 0, len = d.path.length; i < len; i++) {
            const p = d.path[i];
            if (i === 0) {
              start = p;
              canvas.context.moveTo(p[0], p[1]);
            } else {
              canvas.context.lineTo(p[0], p[1]);
            }
          }
          canvas.context.lineTo(start[0], start[1]);
          canvas.context.stroke();
          break;
        }
        case "fillPolygon": {
          canvas.context.fillStyle = d.fillColor;
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          for (let i = 0, len = d.path.length; i < len; i++) {
            const p = d.path[i];
            if (i === 0) {
              canvas.context.moveTo(p[0], p[1]);
            } else {
              canvas.context.lineTo(p[0], p[1]);
            }
          }
          canvas.context.fill();
          break;
        }
        case "strokeArc": {
          canvas.context.strokeStyle = d.strokeColor;
          canvas.context.lineWidth = d.strokeWidth;
          canvas.context.setLineDash(d.strokePattern);
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          canvas.context.arc(d.x, d.y, d.r, d.startAngle, d.endAngle, false);
          canvas.context.stroke();
          break;
        }
        case "fillArc": {
          canvas.context.fillStyle = d.fillColor;
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          canvas.context.arc(d.x, d.y, d.r, d.startAngle, d.endAngle, false);
          canvas.context.fill();
          break;
        }
        case "strokePath": {
          canvas.context.strokeStyle = d.strokeColor;
          canvas.context.lineWidth = d.strokeWidth;
          canvas.context.setLineDash(d.strokePattern);
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          const path2d = new Path2D(pathToString(d.path));
          canvas.context.stroke(path2d);
          break;
        }
        case "fillPath": {
          canvas.context.fillStyle = d.fillColor;
          canvas.context.globalAlpha = d.opacity;
          canvas.context.beginPath();
          const path2d = new Path2D(pathToString(d.path));
          canvas.context.fill(path2d);
          break;
        }
        case "fillText": {
          canvas.context.fillStyle = d.fillColor;
          canvas.context.globalAlpha = d.opacity;
          canvas.context.font = d.font;
          canvas.context.beginPath();
          canvas.context.fillText(d.text, d.x, d.y);
          break;
        }
        case "drawImage": {
          canvas.context.globalAlpha = d.opacity;
          canvas.context.drawImage(d.image, d.x, d.y, d.width, d.height);
          break;
        }
        case "rough": {
          roughDraw(canvas.context, d.rd);
          break;
        }
      }
    }
  }
}
