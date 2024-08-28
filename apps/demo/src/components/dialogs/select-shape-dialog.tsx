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

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import type { Doc, Shape } from "@dgmjs/core";
import { ShapeTree } from "../common/shape-tree";

export interface SelectShapeDialogState {
  open: boolean;
  doc: Doc | null;
  selected: Shape | null;
  onConfirm?: (shape: Shape | null) => Promise<void>;
  show: (options: {
    doc: Doc | null;
    onConfirm?: (shape: Shape | null) => Promise<void>;
  }) => void;
  select(shape: Shape | null): void;
  close: () => void;
}

export const useSelectShapeDialog = create<SelectShapeDialogState>()(
  devtools((set) => ({
    open: false,
    doc: null,
    selected: null,
    onConfirm: undefined,
    show: (options) => {
      set((state) => ({
        open: true,
        onConfirm: undefined,
        ...options,
      }));
    },
    select: (selected) => {
      set((state) => ({ selected }));
    },
    close: () => {
      set((state) => ({ open: false }));
    },
  }))
);

export function SelectShapeDialog() {
  const { open, doc, selected, onConfirm, select, close } =
    useSelectShapeDialog();

  const handleConfirm = async () => {
    if (onConfirm) await onConfirm(selected);
    close();
  };

  return (
    <ResponsiveDialog
      title="Select shape"
      description="Select a shape."
      open={open}
      onOpenChange={(open) => {}}
      className="max-w-[432px]"
      footer={
        <>
          <Button size="sm" variant="outline" onClick={() => close()}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleConfirm}>
            OK
          </Button>
        </>
      }
    >
      <div className="w-full">
        <ScrollArea className="h-64">
          <ShapeTree
            shapes={(doc?.children.toReversed() as Shape[]) ?? []}
            selections={selected ? [selected] : []}
            onSelect={(shape) => select(shape)}
          />
        </ScrollArea>
      </div>
    </ResponsiveDialog>
  );
}
