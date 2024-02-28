import { Editor, geometry } from "@dgmjs/core";

const SCREEN_LEFT_MARGIN = 16;
const SCREEN_TOP_MARGIN = 16;
const SCREEN_RIGHT_MARGIN = 16;
const SCREEN_BOTTOM_MARGIN = 16;

export function textVertAlignToAlignItems(vertAlign: string) {
  switch (vertAlign) {
    case "top":
      return "start";
    case "middle":
      return "center";
    case "bottom":
      return "end";
    default:
      return "start";
  }
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
  editor: Editor,
  element: HTMLElement,
  rect: number[][],
  gap: number = 46
): boolean {
  const canvasWidth = editor.canvasElement?.offsetWidth || 0;
  const canvasHeight = editor.canvasElement?.offsetHeight || 0;
  const cp = geometry.center(rect);
  const h = geometry.height(rect) * editor.getScale();
  const isBelow = cp[1] < canvasHeight / 2;
  let x = cp[0];
  let y = isBelow ? cp[1] + h / 2 + gap : cp[1] - h / 2 - gap; // below or above
  const ew = element.offsetWidth;
  const eh = element.offsetHeight;

  if (x - ew / 2 < 0) {
    x = ew / 2 + SCREEN_LEFT_MARGIN;
  }
  if (x + ew / 2 > canvasWidth) {
    x = canvasWidth - ew / 2 - SCREEN_RIGHT_MARGIN;
  }
  if (y - eh / 2 < 0) {
    y = eh / 2 + SCREEN_TOP_MARGIN;
  }
  if (y + eh / 2 > canvasHeight) {
    y = canvasHeight - eh / 2 - SCREEN_BOTTOM_MARGIN;
  }
  element.style.left = `${x - ew / 2}px`;
  element.style.top = `${y - eh / 2}px`;
  return isBelow;
}
