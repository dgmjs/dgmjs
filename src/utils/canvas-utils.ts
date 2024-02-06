import { Diagram, type Shape } from "../shapes";
import * as geometry from "../graphics/geometry";
import { Canvas } from "../graphics/graphics";
import { colors } from "../colors";

/**
 * Render the shape on the canvas element
 */
export function renderOnCanvas(
  shape: Shape,
  theme: string,
  canvasElement: HTMLCanvasElement,
  maxWidth: number = 220,
  maxHeight: number = 220,
  margin: number = 8
) {
  // get bounding box
  // const box =
  //   shape instanceof Diagram
  //     ? shape.getDiagramBoundingBox(window.app.editor.canvas)
  //     : geometry.boundingRect(
  //         shape
  //           .traverseSequence()
  //           .map((s) => s.getBoundingRect())
  //           .flat()
  //       );
  const box = geometry.boundingRect(
    shape
      .traverseSequence()
      .map((s) => s.getBoundingRect())
      .flat()
  );

  // get scaled size
  const size = geometry.fitScaledownTo(
    [geometry.width(box), geometry.height(box)],
    [maxWidth, maxHeight]
  );
  let w = size[0];
  let h = size[1];
  let scale = size[2];

  // set canvas size
  const px = window.devicePixelRatio ?? 1;
  const cw = w + margin * 2;
  const ch = h + margin * 2;
  canvasElement.setAttribute("width", (cw * px).toString());
  canvasElement.setAttribute("height", (ch * px).toString());
  canvasElement.style.width = `${cw}px`;
  canvasElement.style.height = `${ch}px`;

  // draw shape on canvas
  const ctx = canvasElement.getContext("2d");
  const canvas = new Canvas(ctx as CanvasRenderingContext2D, px);
  canvas.colorVariables = colors[theme];
  canvas.origin = [-box[0][0] + margin / scale, -box[0][1] + margin / scale];
  canvas.scale = scale;
  canvas.save();
  if (!(shape instanceof Diagram)) canvas.globalTransform();
  shape.render(canvas);
  canvas.restore();
}
