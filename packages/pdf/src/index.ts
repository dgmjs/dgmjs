import { Page, Canvas, geometry, themeColors, Doc } from "@dgmjs/core";
import fileSaverPkg from "file-saver";
import { jsPDF } from "jspdf";
import { PDFContext2D } from "./jspdf-context2d";

declare global {
  const PDFDocument: any;
  const blobStream: any;
}

const { saveAs } = fileSaverPkg;

const DEFAULT_MARGIN = 8;

export type PDFFont = {
  family: string;
  style: string;
  weight: number;
  binaryString: string;
};

export type ExportPDFOptions = {
  dark: boolean;
  margin: number;
  fonts?: PDFFont[];
};

function arrayBufferToBinaryString(buffer: ArrayBuffer) {
  return new Uint8Array(buffer).reduce(
    (data, byte) => data + String.fromCharCode(byte),
    ""
  );
}

async function loadFont(url: string) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  return arrayBufferToBinaryString(buffer);
}

/**
 * Export the doc to PDF
 * @param doc
 */
export async function exportDocAsPDF(
  canvas: Canvas,
  doc: Doc,
  options: Partial<ExportPDFOptions>
) {
  const { dark, margin } = {
    dark: false,
    margin: DEFAULT_MARGIN,
    ...options,
  };

  const theme = dark ? "dark" : "light";
  const colorVariables = themeColors[theme];
  const scale = 0.2; // 1; // TODO: find proper scale to fit in the page

  const pdfDoc = new jsPDF();

  // add fonts
  if (Array.isArray(options.fonts)) {
    options.fonts.forEach((font) => {
      const filename = `${font.family}-${font.style}.ttf`;
      pdfDoc.addFileToVFS(filename, font.binaryString);
      pdfDoc.addFont(filename, font.family, font.style, font.weight);
    });
  }

  // pdfDoc.context2d.fillStyle = "#ff3333";
  // pdfDoc.context2d.fillRect(0, 0, 100, 100);
  // pdfDoc.context2d.fillStyle = "#33ff33";
  // pdfDoc.context2d.fillRect(50, 50, 100, 100);
  // pdfDoc.context2d.font = `normal 400 16px "Loranthus"`;
  // pdfDoc.setFont("Loranthus", "normal", 400);
  // pdfDoc.setFontSize(16);
  // pdfDoc.context2d.fillStyle = "#000000";
  // pdfDoc.context2d.fillText("Hello world!", 10, 10);
  // pdfDoc.addPage();

  // render pages
  doc.children.forEach((obj, index) => {
    const page = obj as Page;
    if (index > 0) pdfDoc.addPage();

    // Make a new pdf canvas
    const orderedShapes = page.getOrderedShapes([]);
    const boundingBox = geometry.expandRect(
      page.getViewport(canvas, orderedShapes),
      margin
    );
    const w = geometry.width(boundingBox);
    const h = geometry.height(boundingBox);

    // Prepare context2d for jspdf
    const ctx = new PDFContext2D(canvas, pdfDoc); // new Context(w * scale, h * scale);
    const pseudoCanvas: HTMLCanvasElement = {
      getContext: (contextId: string) => {
        if (contextId === "2d") return ctx as any;
      },
    } as HTMLCanvasElement;
    const pdfCanvas = new Canvas(pseudoCanvas, 1);

    // Initialize new PDF Canvas
    pdfCanvas.origin = [-boundingBox[0][0], -boundingBox[0][1]];
    pdfCanvas.ratio = scale;
    pdfCanvas.scale = 1;
    pdfCanvas.colorVariables = colorVariables;
    const svgCanvasWidth = w * scale;
    const svgCanvasHeight = h * scale;

    // Fill background
    // if (fillBackground) {
    //   pdfCanvas.context.fillStyle = pdfCanvas.resolveColor("$background");
    //   pdfCanvas.context.fillRect(0, 0, svgCanvasWidth, svgCanvasHeight);
    // }

    // update and draw page to the new canvas
    page.update(pdfCanvas);
    page.draw(pdfCanvas, false, orderedShapes);

    // add fonts in defs (temporal impls)
    // const svg: SVGSVGElement = ctx.getSvg();
    // const defs = svg.getElementsByTagName("defs");
    // if (styleInSVG && defs.length > 0) {
    //   const styleTag = document.createElement("style");
    //   styleTag.setAttribute("type", "text/css");
    //   styleTag.appendChild(document.createTextNode(styleInSVG));
    //   defs.item(0)?.appendChild(styleTag);
    // }

    // Return the SVG data
    // const data = ctx.getSerializedSvg(true);

    // update page to existing canvas
    page.update(canvas);
  });

  // return data;

  // context.beginPath();
  // context.arc(150, 150, 50, 0, Math.PI, false);
  // context.lineTo(300, 300);
  // context.moveTo(300, 150);
  // context.rect(5, 5, 150, 150);
  // context.arc(150, 150, 50, 0, Math.PI, false);
  // context.stroke();

  // context.fillStyle = "red";
  // context.fillRect(10, 10, 50, 40);

  pdfDoc.save("a4.pdf");
}
