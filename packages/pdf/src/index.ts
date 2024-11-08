import { Page, Canvas, geometry, themeColors, Shape, Doc } from "@dgmjs/core";
import fileSaverPkg from "file-saver";
import { PDFKitContext2D } from "./pdfkit-context2d";

require("./pdfkit");
require("./blob-stream");

declare global {
  const PDFDocument: any;
  const blobStream: any;
}

const { saveAs } = fileSaverPkg;

const DEFAULT_MARGIN = 8;

type ExportPDFOptions = {
  dark: boolean;
  margin: number;
};

async function exportDocAsPDF(
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
  const scale = 0.5; // 1; // TODO: find proper scale to fit in the page

  const pdfDoc = new PDFDocument();

  // pdfDoc.registerFont("Loranthus");
  console.log(pdfDoc.registerFont);

  pdfDoc.fillColor("#ff0000").rect(0, 0, 100, 100).fill();
  pdfDoc.fillColor("#00ff00").rect(50, 50, 100, 100).fillOpacity(0.5).fill();

  // pipe the document to a blob
  const stream = pdfDoc.pipe(blobStream());

  doc.children.forEach((page, index) => {
    if (page instanceof Page) {
      if (index > 0) pdfDoc.addPage();

      // Make a new SVG canvas for making SVG image data
      const orderedShapes = page.getOrderedShapes([]);
      const boundingBox = geometry.expandRect(
        page.getViewport(canvas, orderedShapes),
        margin
      );
      const w = geometry.width(boundingBox);
      const h = geometry.height(boundingBox);
      const ctx = new PDFKitContext2D(pdfDoc);
      const pseudoCanvas = {
        getContext: (contextId: string) => {
          if (contextId === "2d") return ctx;
        },
      };
      const pdfCanvas = new Canvas(pseudoCanvas as any, 1);

      // Initialize new SVG Canvas
      pdfCanvas.origin = [-boundingBox[0][0], -boundingBox[0][1]];
      pdfCanvas.ratio = scale;
      pdfCanvas.scale = 1;
      pdfCanvas.colorVariables = colorVariables;
      const pdfCanvasWidth = w * scale;
      const pdfCanvasHeight = h * scale;

      // Fill background
      // if (fillBackground) {
      //   pdfCanvas.context.fillStyle = pdfCanvas.resolveColor("$background");
      //   pdfCanvas.context.fillRect(0, 0, pdfCanvasWidth, pdfCanvasHeight);
      // }

      // update and draw page to the new canvas
      page.update(pdfCanvas);
      page.draw(pdfCanvas, false, orderedShapes);

      // update page to existing canvas
      page.update(canvas);
    }
  });

  // end
  pdfDoc.end();

  stream.on("finish", function () {
    const blob = stream.toBlob("application/pdf");
    console.log("blob", blob);
    saveAs(blob, "a4.pdf");
  });
}

export { ExportPDFOptions, exportDocAsPDF };
