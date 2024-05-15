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

import * as geometry from "../graphics/geometry";
import { Color, CONTROL_POINT_APOTHEM, SYSTEM_FONT } from "../graphics/const";
import { Canvas, CanvasPointerEvent } from "../graphics/graphics";
import { toCssFont, lcs2ccs } from "../graphics/utils";
import { FillStyle, LineType, Shape } from "../shapes";
import { Editor, manipulatorManager } from "../editor";

export const ControlPoint = {
  RECT: 0,
  CIRCLE: 1,
  RECT_WITH_PLUS: 2,
  CROSS: 3,
  CIRCLE_WITH_PLUS: 4,
  FILLED_CIRCLE: 5,
  FILLED_CIRCLE_WITH_OUTERLINE: 6,
} as const;

type ControlPointEnum = (typeof ControlPoint)[keyof typeof ControlPoint];

/**
 * Draw text at a given point in CCS
 * @param canvas
 * @param p point in CCS
 * @param text
 */
function drawText(canvas: Canvas, p: number[], text: string) {
  canvas.fontColor = Color.BACKGROUND;
  canvas.font = toCssFont("normal", 400, 11 * canvas.px, SYSTEM_FONT);
  canvas.roughness = 0;
  canvas.fillColor = Color.SELECTION;
  canvas.fillStyle = FillStyle.SOLID;
  const tm = canvas.textMetric(text);
  const w = tm.width;
  const h = tm.ascent - tm.descent;
  const px = canvas.px * 2;
  const py = canvas.px * 2;
  canvas.fillRoundRect(
    p[0] - w / 2 - px,
    p[1] - h / 2 - py,
    p[0] + w / 2 + px,
    p[1] + h / 2 + py,
    3
  );
  canvas.fillText(p[0] - w / 2, p[1] + h / 2, text);
}

/**
 * Draw vertical line in CCS
 */
function drawVertline(canvas: Canvas, x: number, pattern: number[]) {
  canvas.storeState();
  canvas.strokeColor = Color.SELECTION;
  canvas.strokeWidth = canvas.px;
  canvas.roughness = 0;
  canvas.alpha = 1;
  if (pattern) canvas.strokePattern = pattern;
  canvas.line(x, 0, x, 100000);
  canvas.restoreState();
}

/**
 * Draw horizontal line in CCS
 */
function drawHorzline(canvas: Canvas, y: number, pattern: number[]) {
  canvas.storeState();
  canvas.strokeColor = Color.SELECTION;
  canvas.strokeWidth = canvas.px;
  canvas.roughness = 0;
  canvas.alpha = 1;
  if (pattern) canvas.strokePattern = pattern;
  canvas.line(0, y, 100000, y);
  canvas.restoreState();
}

/**
 * Draw horizontal length guide in CCS
 * @param canvas
 * @param p1
 * @param p2
 * @param len length value to show
 * @param distance distance in px
 */
function drawHorzLength(
  canvas: Canvas,
  p1: number[],
  p2: number[],
  len: number,
  distance: number = 0
) {
  const gap = 6 * canvas.px;
  if (distance > 0) {
    p1[1] += distance;
    p2[1] += distance;
  }
  canvas.strokeColor = Color.SELECTION;
  canvas.strokeWidth = canvas.px * 1.5;
  canvas.roughness = 0;
  canvas.alpha = 1;
  canvas.line(p1[0], p1[1], p2[0], p2[1]);
  canvas.line(p1[0], p1[1] - gap, p1[0], p1[1] + gap);
  canvas.line(p2[0], p1[1] - gap, p2[0], p1[1] + gap);
  const mp = geometry.mid(p1, p2);
  drawText(canvas, [mp[0], mp[1] + gap * 3], len.toString());
}

/**
 * Draw vertical length guide in CCS
 * @param canvas
 * @param p1
 * @param p2
 * @param len length value to show
 * @param distance distance in px
 */
function drawVertLength(
  canvas: Canvas,
  p1: number[],
  p2: number[],
  len: number,
  distance: number = 0
) {
  const gap = 6 * canvas.px;
  if (distance > 0) {
    p1[0] += distance;
    p2[0] += distance;
  }
  canvas.strokeColor = Color.SELECTION;
  canvas.strokeWidth = canvas.px * 1.5;
  canvas.roughness = 0;
  canvas.alpha = 1;
  canvas.line(p1[0], p1[1], p2[0], p2[1]);
  canvas.line(p1[0] - gap, p1[1], p1[0] + gap, p1[1]);
  canvas.line(p2[0] - gap, p2[1], p2[0] + gap, p2[1]);
  const mp = geometry.mid(p1, p2);
  drawText(canvas, [mp[0] + gap * 3, mp[1]], len.toString());
}

/**
 * Draw width size on the box in CCS
 */
function drawWidth(canvas: Canvas, box: number[][], width: number) {
  const gap = 6 * canvas.px;
  const p1 = [box[0][0], box[1][1]];
  const p2 = [box[1][0], box[1][1]];
  drawHorzLength(canvas, p1, p2, width, gap * 2);
}

/**
 * Draw height size on the box in CCS
 */
function drawHeight(canvas: Canvas, box: number[][], height: number) {
  const gap = 6 * canvas.px;
  const p1 = [box[1][0], box[0][1]];
  const p2 = [box[1][0], box[1][1]];
  drawVertLength(canvas, p1, p2, height, gap * 2);
}

/**
 * Draw horizontal gap between box1 and box2 in CCS
 */
function drawHorzGap(
  canvas: Canvas,
  box1: number[][],
  box2: number[][],
  value: number
) {
  const gap = 6 * canvas.px;
  let y1 = Math.max(box1[0][1], box2[0][1]);
  let y2 = Math.min(box1[1][1], box2[1][1]);
  let y = Math.round((y1 + y2) / 2);
  const p1 = [box1[1][0] + canvas.px, y];
  const p2 = [box2[0][0] - canvas.px, y];
  drawHorzLength(canvas, p1, p2, value, gap * 2);
}

/**
 * Draw vertical gap between box1 and box2 in CCS
 */
function drawVertGap(
  canvas: Canvas,
  box1: number[][],
  box2: number[][],
  value: number
) {
  const gap = 6 * canvas.px;
  let x1 = Math.max(box1[0][0], box2[0][0]);
  let x2 = Math.min(box1[1][0], box2[1][0]);
  let x = Math.round((x1 + x2) / 2);
  const p1 = [x, box1[1][1] + canvas.px];
  const p2 = [x, box2[0][1] - canvas.px];
  drawVertLength(canvas, p1, p2, value, gap * 2);
}

/**
 * Draw a control point at a given point in CCS
 * - type = 0: Rect
 * - type = 1: Circle
 * - type = 2: Rect with Plus
 * - type = 3: Cross
 * - type = 4: Circle with Plus
 * - type = 5: Filled Circle
 * - type = 6: Filled Circle with Outerline
 */
function drawControlPoint(
  canvas: Canvas,
  p: number[],
  type: ControlPointEnum,
  rotate: number = 0
) {
  canvas.fillColor = Color.BACKGROUND;
  canvas.fillStyle = FillStyle.SOLID;
  canvas.strokeColor = Color.SELECTION;
  canvas.strokeWidth = canvas.px * 1.5;
  canvas.strokePattern = [];
  canvas.roughness = 0;
  canvas.alpha = 1;
  const r = CONTROL_POINT_APOTHEM * canvas.px;
  const p1 = [p[0] - r, p[1] - r];
  const p2 = [p[0] + r, p[1] + r];
  canvas.save();
  canvas.translate(p[0], p[1]);
  canvas.rotate(rotate);
  canvas.translate(-p[0], -p[1]);
  switch (type) {
    case ControlPoint.RECT: {
      canvas.fillRoundRect(p1[0], p1[1], p2[0], p2[1], 0);
      canvas.strokeRoundRect(p1[0], p1[1], p2[0], p2[1], 0);
      break;
    }
    case ControlPoint.CIRCLE: {
      canvas.fillEllipse(p1[0], p1[1], p2[0], p2[1]);
      canvas.strokeEllipse(p1[0], p1[1], p2[0], p2[1]);
      break;
    }
    case ControlPoint.RECT_WITH_PLUS: {
      canvas.fillRect(p1[0], p1[1], p2[0], p2[1]);
      canvas.strokeRect(p1[0], p1[1], p2[0], p2[1]);
      const r2 = r - 3;
      canvas.line(p[0], p[1] - r2, p[0], p[1] + r2);
      canvas.line(p[0] - r2, p[1], p[0] + r2, p[1]);
      break;
    }
    case ControlPoint.CROSS: {
      const L = 3 * canvas.px;
      canvas.line(p[0] - L, p[1] - L, p[0] + L, p[1] + L);
      canvas.line(p[0] + L, p[1] - L, p[0] - L, p[1] + L);
      break;
    }
    case ControlPoint.CIRCLE_WITH_PLUS: {
      canvas.fillEllipse(p1[0], p1[1], p2[0], p2[1]);
      canvas.strokeEllipse(p1[0], p1[1], p2[0], p2[1]);
      const r2 = r - 3;
      canvas.line(p[0], p[1] - r2, p[0], p[1] + r2);
      canvas.line(p[0] - r2, p[1], p[0] + r2, p[1]);
      break;
    }
    case ControlPoint.FILLED_CIRCLE: {
      canvas.fillColor = canvas.strokeColor;
      canvas.fillEllipse(p1[0], p1[1], p2[0], p2[1]);
      break;
    }
    case ControlPoint.FILLED_CIRCLE_WITH_OUTERLINE: {
      canvas.fillColor = canvas.strokeColor;
      canvas.fillEllipse(p1[0], p1[1], p2[0], p2[1]);
      const gap = canvas.px * 2;
      canvas.strokeWidth = canvas.px * 1.5;
      canvas.strokeEllipse(p1[0] - gap, p1[1] - gap, p2[0] + gap, p2[1] + gap);
      break;
    }
  }
  canvas.restore();
}

/**
 * Draw dotted line
 * @param canvas
 * @param p1
 * @param p2
 */
function drawDottedLine(canvas: Canvas, p1: number[], p2: number[]) {
  canvas.storeState();
  canvas.strokeColor = Color.SELECTION;
  canvas.strokeWidth = canvas.px * 1.5;
  canvas.strokePattern = [canvas.px * 2, canvas.px * 2];
  canvas.fillColor = Color.SELECTION;
  canvas.roughness = 0;
  canvas.alpha = 1;
  canvas.line(p1[0], p1[1], p2[0], p2[1]);
  canvas.restoreState();
}

/**
 * Draw dotted polyline
 * @param canvas
 * @param path
 */
function drawDottedPolyline(canvas: Canvas, path: number[][]) {
  canvas.storeState();
  canvas.strokeColor = Color.SELECTION;
  canvas.strokeWidth = canvas.px * 1.5;
  canvas.strokePattern = [canvas.px * 2, canvas.px * 2];
  canvas.fillColor = Color.SELECTION;
  canvas.roughness = 0;
  canvas.alpha = 1;
  canvas.polyline(path);
  canvas.restoreState();
}

/**
 * Returns whether a point inside the controlPoint in CCS
 * @param canvas
 * @param point a point (e.g. mouse point) in CCS
 * @param controlPoint control point in CCS
 * @param rotate
 */
function inControlPoint(
  canvas: Canvas,
  point: number[],
  controlPoint: number[],
  rotate: number = 0
): boolean {
  const r = (CONTROL_POINT_APOTHEM + 4) * canvas.px;
  const cp = [
    [controlPoint[0] - r, controlPoint[1] - r],
    [controlPoint[0] + r, controlPoint[1] + r],
  ];
  const polygon = geometry
    .rectToPolygon(cp)
    .map((p) => geometry.rotate(p, rotate, controlPoint));
  return geometry.inPolygon(point, polygon);
}

/**
 * Draw polyline in shape's LCS
 */
function drawPolylineInLCS(
  canvas: Canvas,
  shape: Shape,
  path: number[][],
  lineType: string = LineType.STRAIGHT,
  fill: boolean = false
) {
  const ghostCCS = path.map((p) => lcs2ccs(canvas, shape, p));
  canvas.storeState();
  canvas.strokeColor = Color.SELECTION;
  canvas.strokeWidth = canvas.px * 1.5;
  canvas.strokePattern = [];
  canvas.fillColor = Color.SELECTION;
  canvas.roughness = 0;
  canvas.alpha = 0.5;
  if (fill) {
    switch (lineType) {
      case LineType.STRAIGHT:
        canvas.fillPolygon(ghostCCS);
        break;
      case LineType.CURVE:
        canvas.fillCurve(ghostCCS);
        break;
    }
  }
  canvas.alpha = 1;
  switch (lineType) {
    case LineType.STRAIGHT:
      canvas.polyline(ghostCCS);
      break;
    case LineType.CURVE:
      canvas.strokeCurve(ghostCCS);
      break;
  }
  canvas.restoreState();
}

function drawHovering(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
  const manipulator = manipulatorManager.get(shape.type);
  if (manipulator) manipulator.drawHovering(editor, shape, e);
}

export {
  drawText,
  drawHorzline,
  drawVertline,
  drawHorzLength,
  drawWidth,
  drawHeight,
  drawHorzGap,
  drawVertGap,
  drawControlPoint,
  drawDottedLine,
  drawDottedPolyline,
  inControlPoint,
  drawPolylineInLCS,
  drawHovering,
};
