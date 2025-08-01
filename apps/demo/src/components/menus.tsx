import { MenuIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fileOpen, fileSave } from "browser-fs-access";
import { useDemoStore } from "@/demo-store";
import {
  ExportImageFormat,
  ExportImageOptions,
  exportImageAsFile,
} from "@dgmjs/export";
import { exportPDFAsFile, ExportPDFOptions } from "@dgmjs/pdf";
import fontJson from "@/fonts.json";
import { Canvas, geometry, Page, utils } from "@dgmjs/core";

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

const postrenderWatermark = (
  canvas: Canvas,
  width: number,
  height: number,
  options: Partial<ExportImageOptions>
) => {
  // Decomment the code for watermark
  // --------------------------------
  const scale = options.scale || 1;
  const text = "TRIALMODE";
  canvas.font = utils.toCssFont("normal", 400, 16, "Inter");
  const tm = canvas.textMetric(text);
  const xc = Math.round(width / tm.width + 1);
  const yc = Math.round(height / tm.height + 1);
  canvas.font = utils.toCssFont("normal", 400, 16 * scale, "Inter");
  canvas.fontColor = "$foreground";
  canvas.alpha = 0.2;
  for (let i = 0; i < yc; i++) {
    for (let j = 0; j < xc; j++) {
      canvas.fillText(j * (tm.width + 4) * scale, i * tm.height * scale, text);
    }
  }
};

const postrenderPdfWatermark = (page: Page, jsPDF: any, canvas: Canvas) => {
  // Decomment the code for watermark
  // --------------------------------
  const scale = canvas.ratio || 1;
  const text = "TRIALMODE";
  canvas.font = utils.toCssFont("normal", 400, 16, "Inter");
  const tm = canvas.textMetric(text);
  const viewport = page.getViewport(canvas, []);
  const width = geometry.width(viewport);
  const height = geometry.height(viewport);
  const xc = Math.round(width / tm.width + 1);
  const yc = Math.round(height / tm.height + 1);
  canvas.font = utils.toCssFont("normal", 400, 16 * scale, "Inter");
  canvas.fontColor = "$foreground";
  canvas.alpha = 0.2;
  for (let i = 0; i < yc; i++) {
    for (let j = 0; j < xc; j++) {
      canvas.fillText(j * (tm.width + 4) * scale, i * tm.height * scale, text);
    }
  }
};

export function Menus() {
  const {
    setDoc,
    setCurrentPage,
    darkMode,
    showGrid,
    snapToGrid,
    snapToObjects,
    setShowGrid,
    setSnapToGrid,
    setSnapToObjects,
  } = useDemoStore();

  const handleNew = () => {
    window.editor.newDoc();
    setDoc(window.editor.getDoc());
  };

  const handleOpen = async () => {
    try {
      const fileWithHandle = await fileOpen([
        {
          description: "DGM files",
          mimeTypes: ["application/json"],
          extensions: [".dgm"],
          multiple: false,
        },
      ]);
      if (fileWithHandle && fileWithHandle.handle) {
        try {
          const file = await fileWithHandle.handle.getFile();
          const data = await file.text();
          const json = JSON.parse(data);
          window.editor.loadFromJSON(json);
          setDoc(window.editor.getDoc());
          setCurrentPage(window.editor.getCurrentPage());
          window.editor.scrollToCenter();
          window.editor.repaint();
        } catch (err) {
          console.error(err);
        }
      }
    } catch {
      // user canceled
      return;
    }
  };

  const handleSaveCopy = async () => {
    const content = JSON.stringify(window.editor.store.toJSON());
    const blob = new Blob([content], { type: "application/json" });
    try {
      await fileSave(blob, { extensions: [".dgm"] });
    } catch {
      // user cancelled
      return;
    }
  };

  const handleAddPage = () => {
    const page = window.editor.actions.addPage();
    window.editor.setCurrentPage(page);
    setCurrentPage(page);
  };

  /**
   * Export doc image to a png file
   */
  const handleExportPNG = async () => {
    const page = window.editor.getCurrentPage()!;
    const shapes = window.editor.selection.getShapes() ?? [];
    const exportOptions = {
      scale: 2,
      dark: darkMode,
      fillBackground: true,
      format: "image/png" as ExportImageFormat,
      postrender: postrenderWatermark,
    };
    const name = "dgm-export";
    const fileName = `${name}.${
      exportOptions.format === "image/png" ? "png" : "svg"
    }`;
    exportImageAsFile(
      window.editor.canvas,
      page,
      shapes,
      fileName,
      exportOptions
    );
  };

  /**
   * Export doc image to a jpeg file
   */
  const handleExportJPEG = async () => {
    const page = window.editor.getCurrentPage()!;
    const shapes = window.editor.selection.getShapes() ?? [];
    const exportOptions = {
      scale: 2,
      dark: darkMode,
      fillBackground: true,
      format: "image/jpeg" as ExportImageFormat,
      postrender: postrenderWatermark,
    };
    const name = "dgm-export";
    const fileName = `${name}.jpg`;
    exportImageAsFile(
      window.editor.canvas,
      page,
      shapes,
      fileName,
      exportOptions
    );
  };

  /**
   * Export doc image to a webp file
   */
  const handleExportWebP = async () => {
    console.log("export jpeg");
    const page = window.editor.getCurrentPage()!;
    const shapes = window.editor.selection.getShapes() ?? [];
    const exportOptions = {
      scale: 2,
      dark: darkMode,
      fillBackground: true,
      format: "image/webp" as ExportImageFormat,
      postrender: postrenderWatermark,
    };
    const name = "dgm-export";
    const fileName = `${name}.webp`;
    exportImageAsFile(
      window.editor.canvas,
      page,
      shapes,
      fileName,
      exportOptions
    );
  };

  /**
   * Export doc image to a file
   */
  const handleExportSVG = async () => {
    const page = window.editor.getCurrentPage()!;
    const shapes = window.editor.selection.getShapes() ?? [];
    const exportOptions = {
      scale: 1,
      dark: darkMode,
      fillBackground: true,
      format: "image/svg+xml" as ExportImageFormat,
      postrender: postrenderWatermark,
    };
    const name = "dgm-export";
    const fileName = `${name}.${
      exportOptions.format === "image/png" ? "png" : "svg"
    }`;
    exportImageAsFile(
      window.editor.canvas,
      page,
      shapes,
      fileName,
      exportOptions
    );
  };

  const handleExportPDFBitmap = async () => {
    const fonts = [];
    for (const font of fontJson) {
      const fontBinaryString = await loadFont(
        `http://localhost:4321${font.src}`
      );
      fonts.push({
        family: font.family,
        style: font.style,
        weight: font.weight,
        binaryString: fontBinaryString,
      });
    }

    const editor = window.editor;
    const doc = editor.getDoc();
    const pdfOptions: ExportPDFOptions = {
      bitmap: true,
      bitmapScale: 1,
      dark: darkMode,
      fonts: fonts,
      pageFormat: "a4",
      pageOrientation: "landscape",
      createLinks: true,
      createPageLinks: true,
      postrenderPage: postrenderPdfWatermark,
    };
    exportPDFAsFile(editor.canvas, doc, "exported-pdf", pdfOptions);
  };

  const handleExportPDF = async () => {
    const fonts = [];
    for (const font of fontJson) {
      const fontBinaryString = await loadFont(
        `http://localhost:4321${font.src}`
      );
      fonts.push({
        family: font.family,
        style: font.style,
        weight: font.weight,
        binaryString: fontBinaryString,
      });
    }

    const editor = window.editor;
    const doc = editor.getDoc();
    const pdfOptions: ExportPDFOptions = {
      bitmap: false,
      dark: darkMode,
      fonts: fonts,
      pageFormat: "a4",
      pageOrientation: "landscape",
      createLinks: true,
      createPageLinks: true,
      postrenderPage: postrenderPdfWatermark,
    };
    exportPDFAsFile(editor.canvas, doc, "exported-pdf", pdfOptions);
  };

  return (
    <div className="flex justify-center items-center h-8 px-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MenuIcon size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="text-xs" onSelect={handleNew}>
            New
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs" onSelect={handleOpen}>
            Open...
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs" onSelect={handleSaveCopy}>
            Save copy...
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-xs" onSelect={handleExportPNG}>
            Export as PNG
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs" onSelect={handleExportJPEG}>
            Export as JPEG
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs" onSelect={handleExportWebP}>
            Export as WebP
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs" onSelect={handleExportSVG}>
            Export as SVG
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-xs"
            onSelect={handleExportPDFBitmap}
          >
            Export as PDF (bitmap)
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs" onSelect={handleExportPDF}>
            Export as PDF
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            className="text-xs"
            checked={showGrid}
            onSelect={(e) => {
              window.editor.setShowGrid(!showGrid);
              setShowGrid(!showGrid);
            }}
          >
            Show grid
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className="text-xs"
            checked={snapToGrid}
            onSelect={(e) => {
              window.editor.setSnapToGrid(!snapToGrid);
              setSnapToGrid(!snapToGrid);
            }}
          >
            Snap to grid
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className="text-xs"
            checked={snapToObjects}
            onSelect={(e) => {
              window.editor.setSnapToObjects(!snapToObjects);
              setSnapToObjects(!snapToObjects);
            }}
          >
            Snap to objects
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" className="h-7 w-7 p-0" onClick={handleAddPage}>
        <PlusIcon size={16} />
      </Button>
    </div>
  );
}
