import { Page, Canvas, geometry, themeColors, Shape, Doc } from "@dgmjs/core";
import fileSaverPkg from "file-saver";

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
  const scale = 0.2; // 1; // TODO: find proper scale to fit in the page

  const pdfDoc = new (PDFDocument as any)();
  pdfDoc.fontSize(25).text("Some text with an embedded font!", 100, 100);

  // pipe the document to a blob
  const stream = pdfDoc.pipe(blobStream());
  pdfDoc.end();

  stream.on("finish", function () {
    const blob = stream.toBlob("application/pdf");
    console.log("blob", blob);
    saveAs(blob, "a4.pdf");
  });
}

export { ExportPDFOptions, exportDocAsPDF };
