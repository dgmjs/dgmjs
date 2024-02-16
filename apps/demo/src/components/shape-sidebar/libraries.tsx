/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import { Shape } from "@dgmjs/core";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LibraryView,
  type ShapeEnterEvent,
  type ShapeLeaveEvent,
} from "./library-view";
import { MoreHorizontalIcon } from "lucide-react";
import { Panel } from "../common/panel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fileOpen } from "browser-fs-access";
import { Button } from "@/components/ui/button";
import { Empty } from "../common/empty";
import { useDemoStore } from "@/store";

interface LibrariesProps {
  onShapeHover?: (target: HTMLDivElement | null, shape: Shape | null) => void;
}

export function Libraries({ onShapeHover }: LibrariesProps) {
  const libraries = useDemoStore((state) => state.libraries);

  const handleAddLibrary = async () => {
    let fileWithHandle;
    try {
      fileWithHandle = await fileOpen([
        {
          description: "DGM files",
          mimeTypes: ["application/json"],
          extensions: [".dgm"],
          multiple: false,
        },
      ]);
    } catch {
      // user cancelled
    }
    if (fileWithHandle && fileWithHandle.handle) {
      const content = await fileWithHandle.text();
      // await app.commands.execute("library:install", content);
    }
  };

  const handleDeleteLibrary = async (event: any) => {
    const id = event.target.dataset.id;
    // const app = window.app;
    // await app.commands.execute("library:uninstall", id);
  };

  const handleShapeClick = (shape: Shape) => {
    // window.app.commands.execute("shape:insert", shape);
  };

  const handleShapeEnter: ShapeEnterEvent = (event, shape) => {
    if (onShapeHover) onShapeHover(event.currentTarget, shape);
  };

  const handleShapeLeave: ShapeLeaveEvent = (event, shape) => {
    if (onShapeHover) onShapeHover(null, null);
  };

  const handleShapeDragStart = (event: any, shape: Shape) => {
    // hide hover card when dragging
    if (onShapeHover) onShapeHover(null, null);
  };

  const handleShapeDragEnd = (event: any, shape: Shape) => {
    // const app = window.app;
    // const p = app.editor.canvas.globalCoordTransformRev([
    //   event.clientX * app.editor.canvas.ratio,
    //   event.clientY * app.editor.canvas.ratio,
    // ]);
    // window.app.commands.execute("shape:insert", shape, p);
  };

  return (
    <ScrollArea className="h-full w-full">
      {libraries.length === 0 && (
        <Empty className="h-9" message="No libraries" />
      )}
      {libraries.map((library, key) => (
        <Panel
          key={library.id}
          title={library.name}
          borderTop
          more={
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-6 w-6 px-0 text-muted-foreground"
                >
                  <MoreHorizontalIcon size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  data-id={library.id}
                  onSelect={handleDeleteLibrary}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
        >
          <LibraryView
            diagram={libraries[key]}
            onShapeClick={handleShapeClick}
            onShapeEnter={handleShapeEnter}
            onShapeLeave={handleShapeLeave}
            onShapeDragStart={handleShapeDragStart}
            onShapeDragEnd={handleShapeDragEnd}
          />
        </Panel>
      ))}
      <div className="flex flex-col gap-2 justify-center border-t p-3">
        <Button variant="outline" onClick={handleAddLibrary}>
          Install from File...
        </Button>
      </div>
    </ScrollArea>
  );
}
