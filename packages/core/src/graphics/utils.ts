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

import { type Shape } from "../shapes";
import * as geometry from "./geometry";
import { Canvas } from "./graphics";

/**
 * Transform global coord to canvas coord (GCS --> CCS)
 */
export function gcs2ccs(canvas: Canvas, point: number[]): number[] {
  return canvas.globalCoordTransform(point);
}

/**
 * Transform canvas coord to global coord (CCS --> GCS)
 */
export function ccs2gcs(canvas: Canvas, point: number[]): number[] {
  return canvas.globalCoordTransformRev(point);
}

/**
 * Transform local coord to canvas coord (LCS --> CCS)
 */
export function lcs2ccs(
  canvas: Canvas,
  shape: Shape,
  point: number[]
): number[] {
  let p = shape.localCoordTransform(canvas, point, true);
  return canvas.globalCoordTransform(p);
}

/**
 * Transform canvas coord to local coord (CCS --> LCS)
 */
export function ccs2lcs(
  canvas: Canvas,
  shape: Shape,
  point: number[]
): number[] {
  let p = canvas.globalCoordTransformRev(point);
  return shape.localCoordTransformRev(canvas, p, true);
}

/**
 * Transform local coord to global coord (LCS --> GCS)
 */
export function lcs2gcs(
  canvas: Canvas,
  shape: Shape,
  point: number[]
): number[] {
  return shape.localCoordTransform(canvas, point, true);
}

/**
 * Transform global coord to local coord (GCS --> LCS)
 */
export function gcs2lcs(
  canvas: Canvas,
  shape: Shape,
  point: number[]
): number[] {
  return shape.localCoordTransformRev(canvas, point, true);
}

/**
 * Transform global coord to DOM coord (GCS --> DCS) on canvas element
 */
export function gcs2dcs(canvas: Canvas, point: number[]): number[] {
  let tp = canvas.globalCoordTransform(point);
  return [tp[0] / canvas.ratio, tp[1] / canvas.ratio];
}

/**
 * Returns the angle of shape in CCS
 */
export function angleInCCS(canvas: Canvas, shape: Shape): number {
  let box = shape.getBoundingRect();
  box = geometry.expandRect(box, 10); // to avoid width=0 or height=0
  let polygon = geometry.rectToPolygon(box);
  let polygonCCS = polygon.map((p) => lcs2ccs(canvas, shape, p));
  let rt = polygonCCS[1];
  let rb = polygonCCS[2];
  return geometry.angle(rb, rt);
}

/**
 * Return the bounding box of shape in CCS
 */
export function boxInCCS(canvas: Canvas, shape: Shape): number[][] {
  return geometry.boundingRect(
    shape.getOutline().map((p) => lcs2ccs(canvas, shape, p))
  );
}

/**
 * Return the bounding box of shape in GCS
 */
export function boxInGCS(canvas: Canvas, shape: Shape): number[][] {
  return geometry.boundingRect(
    shape.getOutline().map((p) => shape.localCoordTransform(canvas, p, true))
  );
}

/**
 * Convert color to CSS color string
 */
export function toCssColor(color: string): string {
  return color.startsWith("$") ? `var(--colors-${color.substring(1)})` : color;
}

/**
 * Convert font attributes to CSS font string
 */
export function toCssFont(
  fontStyle: string,
  fontWeight: number,
  fontSize: number,
  fontFamily: string
): string {
  return `${fontStyle} ${fontWeight} ${
    typeof fontSize === "number" ? fontSize + "px" : fontSize
  } "${fontFamily}"`;
}

const average = (a: number, b: number) => (a + b) / 2;

/**
 * Get svg path from stroke points from `perfect-freehand`
 */
export function getSvgPathFromStroke(
  points: number[][],
  closed: boolean = true
) {
  const len = points.length;
  if (len < 4) {
    return ``;
  }
  let a = points[0];
  let b = points[1];
  const c = points[2];
  let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(
    2
  )},${b[1].toFixed(2)} ${average(b[0], c[0]).toFixed(2)},${average(
    b[1],
    c[1]
  ).toFixed(2)} T`;
  for (let i = 2, max = len - 1; i < max; i++) {
    a = points[i];
    b = points[i + 1];
    result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(
      2
    )} `;
  }
  if (closed) {
    result += "Z";
  }
  return result;
}
