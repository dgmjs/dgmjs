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

import React from "react";
import { Panel } from "../common/panel";
import type { Page } from "@dgmjs/core";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { TextField } from "./fields/text-field";

interface PagePanelProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  page: Page;
  onPageChange: (page: Partial<Page>) => void;
}

export const PagePanel: React.FC<PagePanelProps> = ({
  open,
  onOpenChange,
  page,
  onPageChange,
}) => {
  const pageName = page.name;
  const pageSize = JSON.stringify(page.size);

  return (
    <Panel title="Page" open={open} onOpenChange={onOpenChange} borderTop>
      <div className="flex flex-col gap-2">
        <TextField
          placeholder="Name"
          value={pageName}
          onChange={(value) => {
            onPageChange({ name: value });
          }}
        />
      </div>
      <div className="flex items-center justify-between w-full gap-3">
        <Label className="w-16 whitespace-nowrap">Size</Label>
        <Select
          value={pageSize}
          onValueChange={(value) => {
            if (onPageChange) onPageChange({ size: JSON.parse(value) });
          }}
        >
          <SelectTrigger className="w-full" title="Font Family">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="null">Infinite</SelectItem>
            <SelectItem value="[960,720]">4:3</SelectItem>
            <SelectItem value="[960,540]">16:9</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Panel>
  );
};
