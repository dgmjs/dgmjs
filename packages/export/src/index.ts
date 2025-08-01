import { Page, Canvas, geometry, themeColors, Shape, Doc } from "@dgmjs/core";
import fileSaverPkg from "file-saver";
import { Context } from "svgcanvas";
import { overrideSVGContext } from "./svgcanvas-override";

const { saveAs } = fileSaverPkg;

const DEFAULT_MARGIN = 8;

type ExportImageFormat =
  | "image/png"
  | "image/jpeg"
  | "image/webp"
  | "image/svg+xml";

type ExportImageOptions = {
  scale: number;
  dark: boolean;
  fillBackground: boolean;
  format: ExportImageFormat;
  margin: number;
  prerender?: (
    canvas: Canvas,
    width: number,
    height: number,
    options: Partial<ExportImageOptions>
  ) => void;
  postrender?: (
    canvas: Canvas,
    width: number,
    height: number,
    options: Partial<ExportImageOptions>
  ) => void;
};

/**
 * Create and return a new canvas element with the given shapes drawn.
 * @param canvas - The editor's canvas
 * @param page - The page to draw.
 * @param shapes - The shapes to draw in the page. If empty, render all shapes in the page.
 * @param options - The options for drawing.
 * @returns The new canvas element with the shapes drawn.
 */
function getImageCanvas(
  canvas: Canvas,
  page: Page,
  shapes: Shape[],
  options: ExportImageOptions
): HTMLCanvasElement {
  const { scale, dark, fillBackground, margin, prerender, postrender } =
    options;
  const theme = dark ? "dark" : "light";
  const colorVariables = themeColors[theme];

  // make a new canvas element for making image data
  const orderedShapes = page.getOrderedShapes(shapes);
  const newCanvasElement = document.createElement("canvas");
  const newCanvas = new Canvas(newCanvasElement, scale);
  let boundingBox = page.getViewport(newCanvas, orderedShapes);

  // initialize new canvas
  boundingBox = geometry.expandRect(boundingBox, margin);
  const w = geometry.width(boundingBox);
  const h = geometry.height(boundingBox);
  newCanvas.origin = [-boundingBox[0][0], -boundingBox[0][1]];
  newCanvas.ratio = scale;
  newCanvas.scale = 1;
  newCanvas.colorVariables = colorVariables;
  newCanvasElement.width = w * newCanvas.ratio;
  newCanvasElement.height = h * newCanvas.ratio;
  newCanvasElement.style.width = w + "px";
  newCanvasElement.style.height = h + "px";

  // fill background
  if (fillBackground) {
    newCanvas.context.fillStyle = newCanvas.resolveColor("$background");
    newCanvas.context.fillRect(
      0,
      0,
      newCanvasElement.width,
      newCanvasElement.height
    );
  }

  // prerender the canvas if needed
  if (prerender) prerender(newCanvas, w, h, options);

  // update and draw page to the new canvas
  page.update(newCanvas);
  page.draw(newCanvas, false, orderedShapes);

  // postrender the canvas if needed
  if (postrender) postrender(newCanvas, w, h, options);

  // update page to (existing) canvas
  page.update(canvas);

  return newCanvasElement;
}

/**
 * Get Base64-encoded image data of the given page.
 * @param canvas - The editor's canvas
 * @param page - The page to draw.
 * @param shapes - The shapes to draw in the page. If empty, render all shapes in the page.
 * @param options - The options for drawing.
 * @returns The Base64-encoded image data of the shapes.
 */
async function getImageDataUrl(
  canvas: Canvas,
  page: Page,
  shapes: Shape[],
  options: Partial<ExportImageOptions>
): Promise<string> {
  const canvasElement = getImageCanvas(canvas, page, shapes, {
    scale: 1,
    dark: false,
    fillBackground: true,
    format: "image/png",
    margin: DEFAULT_MARGIN,
    ...options,
  });
  return canvasElement.toDataURL(options.format);
}

/**
 * Get the blob image data of the given shapes.
 * @param canvas - The editor's canvas
 * @param page - The page to draw.
 * @param shapes - The shapes to draw in the page. If empty, render all shapes in the page.
 * @param options - The options for drawing.
 * @returns The blob image data of the shapes.
 */
async function getImageBlob(
  canvas: Canvas,
  page: Page,
  shapes: Shape[],
  options: Partial<ExportImageOptions>
): Promise<Blob | null> {
  const canvasElement = getImageCanvas(canvas, page, shapes, {
    scale: 1,
    dark: false,
    fillBackground: true,
    format: "image/png",
    margin: DEFAULT_MARGIN,
    ...options,
  });
  return new Promise((resolve) => {
    canvasElement.toBlob((blob) => {
      resolve(blob);
    }, options.format);
  });
}

/**
 * Get SVG image data of the given shapes.
 * @param canvas - The editor's canvas
 * @param page - The page to draw.
 * @param shapes - The shapes to draw in the page. If empty, render all shapes in the page.
 * @param options - The options for drawing.
 * @param styleInSVG - The style to be included in the SVG data.
 * @returns The SVG image data of the shapes.
 */
async function getSVGImageData(
  canvas: Canvas,
  page: Page,
  shapes: Shape[],
  options: Partial<ExportImageOptions>,
  styleInSVG?: string
): Promise<string> {
  const { scale, dark, fillBackground, margin } = {
    scale: 1,
    dark: false,
    fillBackground: true,
    margin: DEFAULT_MARGIN,
    ...options,
  };
  const theme = dark ? "dark" : "light";
  const colorVariables = themeColors[theme];

  // Make a new SVG canvas for making SVG image data
  const orderedShapes = page.getOrderedShapes(shapes);
  const boundingBox = geometry.expandRect(
    page.getViewport(canvas, orderedShapes),
    margin
  );
  const w = geometry.width(boundingBox);
  const h = geometry.height(boundingBox);
  const ctx = new Context(w * scale, h * scale);
  overrideSVGContext(ctx);

  const pseudoCanvas: HTMLCanvasElement = {
    getContext: (contextId: string) => {
      if (contextId === "2d") return ctx;
    },
  } as HTMLCanvasElement;
  const svgCanvas = new Canvas(pseudoCanvas, 1);
  ctx.__canvas = svgCanvas;

  // Initialize new SVG Canvas
  svgCanvas.origin = [-boundingBox[0][0], -boundingBox[0][1]];
  svgCanvas.ratio = scale;
  svgCanvas.scale = 1;
  svgCanvas.colorVariables = colorVariables;
  const svgCanvasWidth = w * scale;
  const svgCanvasHeight = h * scale;

  // Fill background
  if (fillBackground) {
    svgCanvas.context.fillStyle = svgCanvas.resolveColor("$background");
    svgCanvas.context.fillRect(0, 0, svgCanvasWidth, svgCanvasHeight);
  }

  // prerender the canvas if needed
  if (options.prerender) options.prerender(svgCanvas, w, h, options);

  // update and draw page to the new canvas
  page.update(svgCanvas);
  page.draw(svgCanvas, false, orderedShapes);

  // postrender the canvas if needed
  if (options.postrender) options.postrender(svgCanvas, w, h, options);

  // add fonts in defs (temporal impls)
  const svg: SVGSVGElement = ctx.getSvg();
  const defs = svg.getElementsByTagName("defs");
  if (styleInSVG && defs.length > 0) {
    const styleTag = document.createElement("style");
    styleTag.setAttribute("type", "text/css");
    styleTag.appendChild(document.createTextNode(styleInSVG));
    defs.item(0)?.appendChild(styleTag);
  }

  // Return the SVG data
  const data = ctx.getSerializedSvg(true);

  // update page to existing canvas
  page.update(canvas);

  return data;
}

/**
 * Export the image of the given shapes to a file
 * @param canvas - The editor's canvas
 * @param page - The page to draw.
 * @param shapes - The shapes to draw in the page. If empty, render all shapes in the page.
 * @param fileName - The name of the file to save.
 * @param options - The options for drawing.
 * @param styleInSVG - The style to be included in the SVG data.
 */
async function exportImageAsFile(
  canvas: Canvas,
  page: Page,
  shapes: Shape[],
  fileName: string,
  options: Partial<ExportImageOptions>,
  styleInSVG?: string
) {
  switch (options.format) {
    case "image/png":
    case "image/jpeg":
    case "image/webp": {
      const data = await getImageBlob(canvas, page, shapes, options);
      if (data) {
        saveAs(data, fileName);
      }
      break;
    }
    case "image/svg+xml": {
      const data = await getSVGImageData(
        canvas,
        page,
        shapes,
        options,
        styleInSVG
      );
      if (data) {
        const blob = new Blob([data], { type: "image/svg+xml" });
        saveAs(blob, fileName);
      }
      break;
    }
  }
}

/**
 * Copy page image of the given shapes to clipboard
 * @param canvas - The editor's canvas
 * @param page - The page to draw.
 * @param shapes - The shapes to draw in the page. If empty, render all shapes in the page.
 * @param options - The options for drawing.
 * @param styleInSVG - The style to be included in the SVG data.
 */
async function copyToClipboard(
  canvas: Canvas,
  page: Page,
  shapes: Shape[],
  options: Partial<ExportImageOptions>
) {
  switch (options.format) {
    case "image/png":
    case "image/jpeg":
    case "image/webp": {
      const data = await getImageBlob(canvas, page, shapes, options);
      if (data) {
        navigator.clipboard.write([
          new ClipboardItem({
            [options.format]: data,
          }),
        ]);
      }
      break;
    }
    case "image/svg+xml": {
      // Copy SVG to clipboard is not support by browser
      break;
    }
  }
}

export {
  ExportImageFormat,
  ExportImageOptions,
  getImageDataUrl,
  getImageBlob,
  getSVGImageData,
  exportImageAsFile,
  copyToClipboard,
};
