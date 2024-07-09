import React from "react";
import { Page, Shape } from "@dgmjs/core";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDemoStore } from "@/demo-store";
import { ShapeTree } from "../common/shape-tree";

export interface LayerProps {
  page: Page | null;
  onSelect?: (selection: Shape[]) => void;
}

export const Layers: React.FC<LayerProps> = ({ page, onSelect }) => {
  const selections = useDemoStore((state) => state.selection);

  return (
    <ScrollArea className="h-full w-full">
      <ShapeTree
        shapes={page ? [page] : []}
        selections={selections}
        onSelect={(shape) => {
          if (onSelect) onSelect([shape]);
        }}
      />
    </ScrollArea>
  );
};
