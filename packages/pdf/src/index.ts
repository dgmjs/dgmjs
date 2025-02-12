import { Page, Canvas, geometry, themeColors, Doc, Shape } from "@dgmjs/core";
import { getImageBlob } from "@dgmjs/export";
import { jsPDF } from "jspdf";
import { PDFContext2D } from "./jspdf-context2d";

declare global {
  const PDFDocument: any;
  const blobStream: any;
}

const DEFAULT_PAGE_MARGIN = 10;

/**
 * The margin of the bitmap image to avoid cutting off the content
 */
const BITMAP_IMAGE_MARGIN = 8;

/**
 * Page format
 */
export type PDFPageFormat =
  | "a0"
  | "a1"
  | "a2"
  | "a3"
  | "a4"
  | "a5"
  | "a6"
  | "a7"
  | "a8"
  | "a9"
  | "a10"
  | "b0"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "b5"
  | "b6"
  | "b7"
  | "b8"
  | "b9"
  | "b10"
  | "c0"
  | "c1"
  | "c2"
  | "c3"
  | "c4"
  | "c5"
  | "c6"
  | "c7"
  | "c8"
  | "c9"
  | "c10"
  | "dl"
  | "letter"
  | "government-letter"
  | "legal"
  | "junior-legal"
  | "ledger"
  | "tabloid"
  | "credit-card"
  | number[];

/**
 * Page orientation
 */
export type PDFPageOrientation = "portrait" | "landscape";

/**
 * PDF font to be embedded
 */
export type PDFFont = {
  family: string;
  style: string;
  weight: number;
  binaryString: string;
};

/**
 * Export PDF options
 */
export type ExportPDFOptions = {
  /**
   * Render pages as bitmap images (default: false)
   */
  bitmap?: boolean;

  /**
   * The scale of the bitmap image (default: 1)
   */
  bitmapScale?: number;

  /**
   * Whether to export in dark mode
   */
  dark?: boolean;

  /**
   * The margin of the page
   */
  pageMargin?: number;

  /**
   * The format of the page
   */
  pageFormat?: PDFPageFormat;

  /**
   * The orientation of the page
   */
  pageOrientation?: PDFPageOrientation;

  /**
   * Whether to compress the PDF
   */
  compress?: boolean;

  /**
   * Whether to create links for shape's link property
   */
  createLinks?: boolean;

  /**
   * Whether to create page links for shape's reference property
   */
  createPageLinks?: boolean;

  /**
   * The pages to exclude
   */
  excludePages?: Page[];

  /**
   * A function to be called before rendering each page
   */
  prerenderPage?: (page: Page, jsPDF: jsPDF, canvas: Canvas) => void;

  /**
   * A function to be called after rendering each page
   */
  postrenderPage?: (page: Page, jsPDF: jsPDF, canvas: Canvas) => void;

  /**
   * The fonts to be embedded
   */
  fonts?: PDFFont[];
};

/**
 * Get PDF data of the doc
 * @param canvas - The editor's canvas
 * @param doc - The document to export
 * @param options - The options for exporting
 * @returns The PDF document (jsPDF instance)
 */
export async function getPDFData(
  canvas: Canvas,
  doc: Doc,
  options: Partial<ExportPDFOptions>
): Promise<jsPDF> {
  const {
    bitmap,
    bitmapScale,
    dark,
    pageMargin,
    pageFormat,
    pageOrientation,
    compress,
    createLinks,
    createPageLinks,
    excludePages,
    prerenderPage,
    postrenderPage,
    fonts,
  } = {
    bitmap: false,
    bitmapScale: 1,
    dark: false,
    pageMargin: DEFAULT_PAGE_MARGIN,
    pageFormat: "a4",
    pageOrientation: "portrait",
    compress: true,
    createLinks: false,
    createPageLinks: false,
    excludePages: [],
    fonts: [],
    ...options,
  };

  const theme = dark ? "dark" : "light";
  const colorVariables = themeColors[theme];
  const pdfDoc = new jsPDF({
    orientation: pageOrientation as any,
    format: pageFormat,
    putOnlyUsedFonts: true,
    compress: compress,
  });

  // add fonts (only if not bitmap)
  if (!bitmap && Array.isArray(fonts)) {
    fonts.forEach((font) => {
      const filename = `${font.family}-${font.style}.ttf`;
      pdfDoc.addFileToVFS(filename, font.binaryString);
      pdfDoc.addFont(filename, font.family, font.style, font.weight);
    });
  }

  // render pages
  const pagesToRender = doc.children.filter(
    (child) => child instanceof Page && !(excludePages || []).includes(child)
  );
  for (let i = 0; i < pagesToRender.length; i++) {
    const page = pagesToRender[i] as Page;
    if (i > 0) pdfDoc.addPage();

    // Compute origin and scale
    const pageWidth = pdfDoc.internal.pageSize.getWidth();
    const pageHeight = pdfDoc.internal.pageSize.getHeight();
    const viewportWidth = pageWidth - pageMargin * 2;
    const viewportHeight = pageHeight - pageMargin * 2;
    const boundingBox = page.getViewport(canvas);
    const w = geometry.width(boundingBox);
    const h = geometry.height(boundingBox);
    const fitRatio = Math.min(viewportWidth / w, viewportHeight / h);
    const scale = fitRatio >= 1 ? 1 : fitRatio;

    // dx, dy are the margins to center the content
    const dx = (viewportWidth / scale - w) / 2;
    const dy = (viewportHeight / scale - h) / 2;
    const ox = -boundingBox[0][0] + pageMargin / scale + dx;
    const oy = -boundingBox[0][1] + pageMargin / scale + dy;

    // Prepare canvas (context2d) for PDF rendering
    const ctx = new PDFContext2D(canvas, pdfDoc);
    const pseudoCanvas: HTMLCanvasElement = {
      getContext: (contextId: string) => {
        if (contextId === "2d") return ctx as any;
      },
    } as HTMLCanvasElement;
    const pdfCanvas = new Canvas(pseudoCanvas, 1);
    ctx.setPDFCanvas(pdfCanvas);
    pdfCanvas.origin = [ox, oy];
    pdfCanvas.ratio = 1; // pixel ratio
    pdfCanvas.scale = scale;
    pdfCanvas.colorVariables = colorVariables;

    // Fill dark background
    if (dark) {
      pdfDoc.setFillColor(pdfCanvas.resolveColor("$background"));
      pdfDoc.rect(0, 0, pageWidth, pageHeight, "F");
    }

    // prerender page
    if (prerenderPage) {
      prerenderPage(page, pdfDoc, pdfCanvas);
    }

    // update and draw page to the new canvas
    if (bitmap) {
      console.log("w, h, scale", w, h, autoBitmapScale(w, h, bitmapScale));

      // render page as bitmap
      const blob = await getImageBlob(canvas, page, [], {
        dark: options.dark,
        fillBackground: true,
        format: "image/webp",
        margin: BITMAP_IMAGE_MARGIN,
        scale: autoBitmapScale(w, h, bitmapScale),
      });
      const data = new Uint8Array(await blob!.arrayBuffer());
      const iw = w + BITMAP_IMAGE_MARGIN * 2;
      const ih = h + BITMAP_IMAGE_MARGIN * 2;
      const ix = (pageWidth - iw * scale) / 2;
      const iy = (pageHeight - ih * scale) / 2;
      pdfDoc.addImage(data, "webp", ix, iy, iw * scale, ih * scale);
    } else {
      // render page as vector
      page.update(pdfCanvas);
      page.draw(pdfCanvas, false);
    }

    // postrender page
    if (postrenderPage) {
      postrenderPage(page, pdfDoc, pdfCanvas);
    }

    // create links
    const shapes = page.getOrderedShapes(page.traverseSequence() as Shape[]);
    if (createLinks) {
      for (const shape of shapes) {
        if (shape.link && shape.link.length > 0) {
          const box = shape.getBoundingRect();
          const p1 = pdfCanvas.globalCoordTransform(box[0]);
          const p2 = pdfCanvas.globalCoordTransform(box[1]);
          const newBox = geometry.normalizeRect([p1, p2]);
          const x = newBox[0][0];
          const y = newBox[0][1];
          const w = geometry.width(newBox);
          const h = geometry.height(newBox);
          pdfDoc.link(x, y, w, h, { url: shape.link });
        }
      }
    }

    // create page links
    if (createPageLinks) {
      for (const shape of shapes) {
        if (shape.reference instanceof Shape) {
          const box = shape.getBoundingRect();
          const p1 = pdfCanvas.globalCoordTransform(box[0]);
          const p2 = pdfCanvas.globalCoordTransform(box[1]);
          const newBox = geometry.normalizeRect([p1, p2]);
          const x = newBox[0][0];
          const y = newBox[0][1];
          const w = geometry.width(newBox);
          const h = geometry.height(newBox);
          const targetPage = shape.reference.getPage();
          if (targetPage) {
            const targetPageIndex = pagesToRender.indexOf(targetPage);
            if (targetPageIndex >= 0) {
              pdfDoc.link(x, y, w, h, { pageNumber: targetPageIndex + 1 });
            }
          }
        }
      }
    }

    // update page to existing canvas
    page.update(canvas);
  }

  return pdfDoc;
}

/**
 * Get the blob of the generated PDF
 * @param canvas - The editor's canvas
 * @param doc - The document to export
 * @param options - The options for exporting
 * @returns The blob of the generated PDF
 */
export async function getPDFBlob(
  canvas: Canvas,
  doc: Doc,
  options: Partial<ExportPDFOptions>
): Promise<Blob> {
  const pdfDoc = await getPDFData(canvas, doc, options);
  return pdfDoc.output("blob");
}

/**
 * Export the doc to PDF file
 * @param canvas - The editor's canvas
 * @param doc - The document to export
 * @param fileName - The file name of the exported PDF
 * @param options - The options for exporting
 * @returns The export the generated PDF file
 */
export async function exportPDFAsFile(
  canvas: Canvas,
  doc: Doc,
  fileName: string,
  options: Partial<ExportPDFOptions>
) {
  const pdfDoc = await getPDFData(canvas, doc, options);
  pdfDoc.save(fileName);
}

/**
 * jsPDF fails when try to add a large-size image. To avoid this issue, reduce
 * the bitmap scale if the image size is too large.
 */
function autoBitmapScale(
  width: number,
  height: number,
  bitmapScale: number
): number {
  const MAX_IMAGE_SIZE = 4096;
  if (width >= MAX_IMAGE_SIZE || height >= MAX_IMAGE_SIZE) {
    const scale = Math.min(
      MAX_IMAGE_SIZE / width,
      MAX_IMAGE_SIZE / height,
      bitmapScale
    );
    return scale;
  }
  return bitmapScale;
}
