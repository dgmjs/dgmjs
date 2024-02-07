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

import { Canvas } from "./graphics";
import { Shape } from "../shapes";
import * as geometry from "./geometry";

/**
 * Transform local coord to canvas coord (LCS --> CCS)
 */
function lcs2ccs(canvas: Canvas, shape: Shape, point: number[]): number[] {
  let p = shape.localCoordTransform(canvas, point, true);
  return canvas.globalCoordTransform(p);
}

/**
 * Transform canvas coord to local coord (CCS --> LCS)
 */
function ccs2lcs(canvas: Canvas, shape: Shape, point: number[]): number[] {
  let p = canvas.globalCoordTransformRev(point);
  return shape.localCoordTransformRev(canvas, p, true);
}

/**
 * Transform local coord to global coord (LCS --> GCS)
 */
function lcs2gcs(canvas: Canvas, shape: Shape, point: number[]): number[] {
  return shape.localCoordTransform(canvas, point, true);
}

/**
 * Transform global coord to local coord (GCS --> LCS)
 */
function gcs2lcs(canvas: Canvas, shape: Shape, point: number[]): number[] {
  return shape.localCoordTransformRev(canvas, point, true);
}

/**
 * Returns the angle of shape in CCS
 */
function angleInCCS(canvas: Canvas, shape: Shape): number {
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
function boxInCCS(canvas: Canvas, shape: Shape): number[][] {
  return geometry.boundingRect(
    shape.getOutline().map((p) => lcs2ccs(canvas, shape, p))
  );
}

/**
 * Return the bounding box of shape in GCS
 */
function boxInGCS(canvas: Canvas, shape: Shape): number[][] {
  return geometry.boundingRect(
    shape.getOutline().map((p) => shape.localCoordTransform(canvas, p, true))
  );
}

/**
 * Convert color to CSS color string
 */
function toCssColor(color: string): string {
  return color.startsWith("$") ? `var(--colors-${color.substring(1)})` : color;
}

/**
 * Convert font attributes to CSS font string
 */
function toCssFont(
  fontStyle: string,
  fontWeight: number,
  fontSize: number,
  fontFamily: string
): string {
  return `${fontStyle} ${fontWeight} ${
    typeof fontSize === "number" ? fontSize + "px" : fontSize
  } "${fontFamily}"`;
}

export {
  lcs2ccs,
  ccs2lcs,
  lcs2gcs,
  gcs2lcs,
  angleInCCS,
  boxInCCS,
  boxInGCS,
  toCssColor,
  toCssFont,
};
