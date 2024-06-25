import { MenuIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fileOpen } from "browser-fs-access";
import { useDemoStore } from "@/demo-store";
import { ExportImageFormat, exportImageAsFile } from "@dgmjs/export";

export function Menus() {
  const { setDoc, setCurrentPage, darkMode } = useDemoStore();

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
        const file = await fileWithHandle.handle.getFile();
        const data = await file.text();
        const json = JSON.parse(data);
        window.editor.loadFromJSON(json);
        setDoc(window.editor.getDoc());
        setCurrentPage(window.editor.getCurrentPage());
        window.editor.scrollToCenter();
        window.editor.repaint();
      }
    } catch {
      // user canceled
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
  const handleExportImage = async () => {
    const page = window.editor.getCurrentPage()!;
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
    exportImageAsFile(window.editor.canvas, page, fileName, exportOptions);
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
          <DropdownMenuItem onSelect={handleExportImage}>
            Export Image
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" className="h-8 w-8 p-0" onClick={handleAddPage}>
        <PlusIcon size={16} />
      </Button>
    </div>
  );
}
