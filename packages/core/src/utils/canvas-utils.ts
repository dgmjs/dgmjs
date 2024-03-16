import { Page, type Shape } from "../shapes";
import * as geometry from "../graphics/geometry";
import { Canvas, CanvasPointerEvent } from "../graphics/graphics";
import { colors } from "../colors";

/**
 * Render the shape on the canvas element
 */
export function renderOnCanvas(
  shapes: Shape[],
  canvasElement: HTMLCanvasElement,
  darkMode: boolean = false,
  width: number = 200,
  height: number = 150,
  scaleAdjust: number = 1
) {
  // get bounding box of given shapes and all their children
  const box = geometry.boundingRect(
    shapes
      .map((s) => s.traverseSequence() as Shape[])
      .flat()
      .map((s) => (s as Shape).getBoundingRect())
      .flat()
  );
  const bw = geometry.width(box);
  const bh = geometry.height(box);

  // get scaled size
  const size = geometry.fitScaledownTo([bw, bh], [width, height]);
  let w = size[0];
  let h = size[1];
  let scale = size[2] * scaleAdjust;

  // set canvas size
  const px = window.devicePixelRatio ?? 1;
  const cw = w;
  const ch = h;
  const ox = -box[0][0] + (w / scale - bw) / 2;
  const oy = -box[0][1] + (h / scale - bh) / 2;
  canvasElement.setAttribute("width", (cw * px).toString());
  canvasElement.setAttribute("height", (ch * px).toString());
  canvasElement.style.width = `${cw}px`;
  canvasElement.style.height = `${ch}px`;

  // draw shape on canvas
  const canvas = new Canvas(canvasElement, px);
  canvas.colorVariables = colors[darkMode ? "dark" : "light"];
  canvas.origin = [ox, oy];
  canvas.scale = scale;
  canvas.save();
  if (shapes.every((s) => !(s instanceof Page))) canvas.globalTransform();
  shapes.forEach((shape) => {
    shape.render(canvas);
  });

  canvas.restore();
}

/**
 * Create a touch event
 * @param element A <canvas> HTML element
 * @param canvas A canvas object
 * @param e An event of canvas element
 */
export function createTouchEvent(
  element: HTMLCanvasElement,
  canvas: Canvas,
  e: TouchEvent
): CanvasPointerEvent {
  const rect = element.getBoundingClientRect();
  // average of touch points if multi-touch
  const cx =
    e.touches.length === 2
      ? (e.touches[0].clientX + e.touches[1].clientX) / 2
      : e.touches[0].clientX;
  const cy =
    e.touches.length === 2
      ? (e.touches[0].clientY + e.touches[1].clientY) / 2
      : e.touches[0].clientY;
  let _p = [cx - rect.left, cy - rect.top];
  // transform pointer event point to CCS (canvas coord-system)
  let p = [_p[0] * canvas.ratio, _p[1] * canvas.ratio];
  const options = {
    button: 0,
    shiftKey: false,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    touchDistance: 0,
  };
  if (e.touches.length === 2) {
    const xd = e.touches[0].clientX - e.touches[1].clientX;
    const yd = e.touches[0].clientY - e.touches[1].clientY;
    options.touchDistance = Math.sqrt(xd * xd + yd * yd);
  }
  return new CanvasPointerEvent(p[0], p[1], options);
}

/**
 * Create a pointer event
 * @param element A <canvas> HTML element
 * @param canvas A canvas object
 * @param e An event of canvas element
 */
export function createPointerEvent(
  element: HTMLCanvasElement,
  canvas: Canvas,
  e: MouseEvent
): CanvasPointerEvent {
  const rect = element.getBoundingClientRect();
  let _p = [e.clientX - rect.left, e.clientY - rect.top];
  // transform pointer event point to CCS (canvas coord-system)
  let p = [_p[0] * canvas.ratio, _p[1] * canvas.ratio];
  return new CanvasPointerEvent(p[0], p[1], e);
}
