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
import { ExportImageFormat, exportImageAsFile } from "@dgmjs/export";

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
   * Export doc image to a file
   */
  const handleExportPNG = async () => {
    const page = window.editor.getCurrentPage()!;
    const shapes = window.editor.selection.getShapes() ?? [];
    const exportOptions = {
      scale: 1,
      dark: darkMode,
      fillBackground: true,
      format: "image/png" as ExportImageFormat,
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

  return (
    <div className="flex justify-center items-center h-8 px-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MenuIcon size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={handleNew}>New</DropdownMenuItem>
          <DropdownMenuItem onSelect={handleOpen}>Open...</DropdownMenuItem>
          <DropdownMenuItem onSelect={handleSaveCopy}>
            Save copy...
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={handleExportPNG}>
            Export as PNG
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={handleExportSVG}>
            Export as SVG
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showGrid}
            onSelect={(e) => {
              window.editor.setShowGrid(!showGrid);
              setShowGrid(!showGrid);
            }}
          >
            Show grid
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={snapToGrid}
            onSelect={(e) => {
              window.editor.setSnapToGrid(!snapToGrid);
              setSnapToGrid(!snapToGrid);
            }}
          >
            Snap to grid
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
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
      <Button variant="ghost" className="h-8 w-8 p-0" onClick={handleAddPage}>
        <PlusIcon size={16} />
      </Button>
    </div>
  );
}
