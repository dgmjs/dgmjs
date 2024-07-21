import { Page, Canvas, geometry, themeColors } from "@dgmjs/core";
import fileSaverPkg from "file-saver";
import { Context } from "svgcanvas";
const { saveAs } = fileSaverPkg;

const DEFAULT_MARGIN = 10;

type ExportImageFormat = "image/png" | "image/svg+xml";

type ExportImageOptions = {
  scale: number;
  dark: boolean;
  fillBackground: boolean;
  format: ExportImageFormat;
};

/**
 * Create and return a new canvas element with document rendered
 */
function getImageCanvas(
  canvas: Canvas,
  page: Page,
  options: ExportImageOptions
): HTMLCanvasElement {
  const { scale, dark, fillBackground } = options;
  const theme = dark ? "dark" : "light";
  const colorVariables = themeColors[theme];

  // make a new canvas element for making image data
  const newCanvasElement = document.createElement("canvas");
  const newCanvas = new Canvas(newCanvasElement, scale);
  let boundingBox = page.geViewRect(newCanvas);

  // initialize new canvas
  boundingBox = geometry.expandRect(boundingBox, DEFAULT_MARGIN);
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

  // update and draw page to the new canvas
  page.update(newCanvas);
  page.draw(newCanvas);

  // update page to (existing) canvas
  page.update(canvas);
  return newCanvasElement;
}

/**
 * Get Base64-encoded image data of doc
 */
async function getImageDataUrl(
  canvas: Canvas,
  page: Page,
  options: Partial<ExportImageOptions>
): Promise<string> {
  const canvasElement = getImageCanvas(canvas, page, {
    scale: 1,
    dark: false,
    fillBackground: true,
    format: "image/png",
    ...options,
  });
  return canvasElement.toDataURL(options.format);
}

/**
 * Get Blob image data of doc
 */
async function getImageBlob(
  canvas: Canvas,
  page: Page,
  options: Partial<ExportImageOptions>
): Promise<Blob | null> {
  const canvasElement = getImageCanvas(canvas, page, {
    scale: 1,
    dark: false,
    fillBackground: true,
    format: "image/png",
    ...options,
  });
  return new Promise((resolve) => {
    canvasElement.toBlob((blob) => {
      resolve(blob);
    }, options.format);
  });
}

/**
 * Get SVG image data of doc
 */
async function getSVGImageData(
  canvas: Canvas,
  page: Page,
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
  const boundingBox = geometry.expandRect(page.geViewRect(canvas), margin);
  const w = geometry.width(boundingBox);
  const h = geometry.height(boundingBox);
  const ctx = new Context(w * scale, h * scale);
  const pseudoCanvas: HTMLCanvasElement = {
    getContext: (contextId: string) => {
      if (contextId === "2d") return ctx;
    },
  } as HTMLCanvasElement;
  const svgCanvas = new Canvas(pseudoCanvas, 1);

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

  // update and draw page to the new canvas
  page.update(svgCanvas);
  page.draw(svgCanvas);

  // TODO: add fonts in defs (temporal impls)
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
 * Export doc image as a file
 */
async function exportImageAsFile(
  canvas: Canvas,
  page: Page,
  fileName: string,
  options: Partial<ExportImageOptions>,
  styleInSVG?: string
) {
  switch (options.format) {
    case "image/png": {
      const data = await getImageBlob(canvas, page, options);
      if (data) {
        saveAs(data, fileName);
      }
      break;
    }
    case "image/svg+xml": {
      const data = await getSVGImageData(canvas, page, options, styleInSVG);
      if (data) {
        const blob = new Blob([data], { type: "image/svg+xml" });
        saveAs(blob, fileName);
      }
      break;
    }
  }
}

/**
 * Copy page image to clipboard
 */
async function copyToClipboard(
  canvas: Canvas,
  page: Page,
  options: Partial<ExportImageOptions>
) {
  switch (options.format) {
    case "image/png": {
      const data = await getImageBlob(canvas, page, options);
      if (data) {
        navigator.clipboard.write([
          new ClipboardItem({
            "image/png": data,
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
