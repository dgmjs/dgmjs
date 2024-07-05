/* eslint-disable @typescript-eslint/no-explicit-any */

import { geometry } from "@dgmjs/core";

const SCREEN_LEFT_MARGIN = 16;
const SCREEN_TOP_MARGIN = 16;
const SCREEN_RIGHT_MARGIN = 16;
const SCREEN_BOTTOM_MARGIN = 16;

/**
 * Return array which eliminates duplications
 * e.g.) unique([1, 2, 2, 3, 4, 4]) --> [1, 2, 3, 4]
 */
export function unique<T>(A: Array<T>): Array<T> {
  return Array.from(new Set(A).values());
}

/**
 * Return the homogenous value if array items are all same,
 * otherwise return initial.
 */
export function merge<T>(
  values: T[],
  stringifiedCompare: boolean = false,
  initial: T | undefined = undefined
): T | undefined {
  const vs = stringifiedCompare
    ? unique<string>(values.map((v) => JSON.stringify(v)))
    : unique<T>(values);
  return vs.length !== 1
    ? initial
    : stringifiedCompare
    ? JSON.parse(vs[0] as string)
    : vs[0];
}

export function toPascalCaseWithSpace(str: string) {
  return str
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
}

/**
 * Set element position above or below near a given rectangle
 * 1. if the rect is below than screen center, place element above the rect
 * 2. if the rect is above than screen center, place element below the rect
 * 3. keep margin
 * @param element element to position
 * @param rect
 * @return true if position is below, false otherwise
 */
export function moveToAboveOrBelow(
  element: HTMLElement,
  rect: number[][],
  gap: number = 46
): boolean {
  const canvasWidth = window.editor.canvasElement?.offsetWidth || 0;
  const canvasHeight = window.editor.canvasElement?.offsetHeight || 0;

  const cp = geometry.center(rect);
  const isBelow = cp[1] < canvasHeight / 2;
  let x = cp[0];
  let y = isBelow ? rect[1][1] + gap : rect[0][1] - gap; // below or above

  const w = element.offsetWidth;
  const h = element.offsetHeight;
  if (x - w / 2 < 0) {
    x = w / 2 + SCREEN_LEFT_MARGIN;
  }
  if (x + w / 2 > canvasWidth) {
    x = canvasWidth - w / 2 - SCREEN_RIGHT_MARGIN;
  }
  if (y - h / 2 < 0) {
    y = h / 2 + SCREEN_TOP_MARGIN;
  }
  if (y + h / 2 > canvasHeight) {
    y = canvasHeight - h / 2 - SCREEN_BOTTOM_MARGIN;
  }
  element.style.left = `${x - w / 2}px`;
  element.style.top = `${y - h / 2}px`;
  return isBelow;
}
