/*
 * Copyright (c) 2023 MKLabs. All rights reserved.
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

import {
  CircleIcon,
  HandIcon,
  ImageIcon,
  MousePointer2Icon,
  Pencil,
  SquareIcon,
  TypeIcon,
} from "lucide-react";
import { ConnectorIcon, LineIcon } from "@/components/icons";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import { useDemoStore } from "@/store";

interface PaletteItemProps {
  handlerId: string;
  children: React.ReactNode;
}

function PaletteItem({ handlerId, children }: PaletteItemProps) {
  const activeHandler = useDemoStore((state) => state.activeHandler);

  const handleToggleChange = (pressed: boolean) => {
    if (pressed) {
      window.editor.setActiveHandler(handlerId);
    }
  };

  return (
    <Toggle
      size="sm"
      pressed={activeHandler === handlerId}
      onPressedChange={handleToggleChange}
      className="w-8 h-8 p-0 dark:hover:bg-slate-700"
    >
      {children}
    </Toggle>
  );
}

export function Palette() {
  return (
    <div className="flex justify-center items-center h-8">
      <PaletteItem handlerId="Select">
        <MousePointer2Icon size={16} />
      </PaletteItem>
      <PaletteItem handlerId="Hand">
        <HandIcon size={16} />
      </PaletteItem>
      <Separator orientation="vertical" />
      <PaletteItem handlerId="Rectangle">
        <SquareIcon size={16} />
      </PaletteItem>
      <PaletteItem handlerId="Ellipse">
        <CircleIcon size={16} />
      </PaletteItem>
      <PaletteItem handlerId="Text">
        <TypeIcon size={16} />
      </PaletteItem>
      <PaletteItem handlerId="Image">
        <ImageIcon size={16} />
      </PaletteItem>
      <Separator orientation="vertical" className="dark:bg-gray-700 mx-0.5" />
      <PaletteItem handlerId="Connector">
        <ConnectorIcon size={16} />
      </PaletteItem>
      <PaletteItem handlerId="Line">
        <LineIcon size={16} />
      </PaletteItem>
      <PaletteItem handlerId="Freehand">
        <Pencil size={16} />
      </PaletteItem>
    </div>
  );
}
