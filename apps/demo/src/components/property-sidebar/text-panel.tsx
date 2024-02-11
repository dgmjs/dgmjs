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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Box, Text as TextShape } from "@dgmjs/core";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  ChevronsUpDownIcon,
  WrapTextIcon,
} from "lucide-react";
import React from "react";
import { ColorField } from "./fields/color-field";
import { NumberField } from "./fields/number-field";
import { Panel } from "../common/panel";
import {
  LineHeightIcon,
  ParagraphSpacingIcon,
  VerticalBottomIcon,
  VerticalMiddleIcon,
  VerticalTopIcon,
} from "@/components/icons";
import { Label } from "@/components/ui/label";
import { SimpleTooltip } from "../common/simple-tooltip";
import { constants } from "@dgmjs/core";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { merge, unique } from "@/utils";
import { ShapeEditorProps } from "@/types";
import fontJson from "@/fonts.json";

export const TextPanel: React.FC<ShapeEditorProps> = ({ shapes, onChange }) => {
  const fontFamilies = unique(fontJson.map((f) => f.family));

  const isBox = shapes.every((s) => s instanceof Box);
  const fontColor = merge(shapes.map((s) => (s as TextShape).fontColor));
  const fontFamily = merge(shapes.map((s) => (s as TextShape).fontFamily));
  const fontSize = merge(shapes.map((s) => (s as TextShape).fontSize));
  const vertAlign = merge(shapes.map((s) => (s as TextShape).vertAlign));
  const horzAlign = merge(shapes.map((s) => (s as TextShape).horzAlign));
  const wordWrap = merge(shapes.map((s) => (s as TextShape).wordWrap));
  const lineHeight = merge(shapes.map((s) => (s as TextShape).lineHeight));
  const paragraphSpacing = merge(
    shapes.map((s) => (s as TextShape).paragraphSpacing)
  );

  return (
    <Panel title="Text" borderTop>
      <SimpleTooltip content="Font Color">
        <ColorField
          value={fontColor}
          onValueChange={(value) => onChange({ fontColor: value })}
        />
      </SimpleTooltip>
      <div className="grid grid-cols-3 items-center gap-2">
        <div className="col-span-2">
          <SimpleTooltip content="Font Family">
            <Select
              value={fontFamily}
              onValueChange={(value) => onChange({ fontFamily: value })}
            >
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fontFamilies.map((family) => (
                  <SelectItem key={family} value={family}>
                    {family}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </SimpleTooltip>
        </div>
        <SimpleTooltip content="Font Size">
          <div className="flex items-center">
            <NumberField
              value={fontSize}
              onChange={(value) => onChange({ fontSize: value })}
              className="w-20 h-8 items-center"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex h-8 min-w-6 relative -left-7 items-center">
                  <Button
                    variant="ghost"
                    className="text-muted-foreground h-6 min-w-6 px-0"
                  >
                    <ChevronsUpDownIcon size={12} />
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {constants.FontSizes.map((size) => (
                  <DropdownMenuItem
                    key={size}
                    onSelect={() => onChange({ fontSize: size })}
                  >
                    {size}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </SimpleTooltip>
      </div>
      {isBox && (
        <div className="flex items-center justify-between">
          <ToggleGroup
            type="single"
            value={horzAlign}
            onValueChange={(value) => {
              if (onChange && value) onChange({ horzAlign: value });
            }}
          >
            <SimpleTooltip content="Align Left">
              <ToggleGroupItem size="sm" value="left">
                <AlignLeftIcon size={16} />
              </ToggleGroupItem>
            </SimpleTooltip>
            <SimpleTooltip content="Align Center">
              <ToggleGroupItem size="sm" value="center">
                <AlignCenterIcon size={16} />
              </ToggleGroupItem>
            </SimpleTooltip>
            <SimpleTooltip content="Align Right">
              <ToggleGroupItem size="sm" value="right">
                <AlignRightIcon size={16} />
              </ToggleGroupItem>
            </SimpleTooltip>
          </ToggleGroup>
          <ToggleGroup
            type="single"
            value={vertAlign}
            onValueChange={(value) => {
              if (onChange && value) onChange({ vertAlign: value });
            }}
          >
            <SimpleTooltip content="Align Top">
              <ToggleGroupItem size="sm" value="top">
                <VerticalTopIcon size={16} />
              </ToggleGroupItem>
            </SimpleTooltip>
            <SimpleTooltip content="Align Middle">
              <ToggleGroupItem size="sm" value="middle">
                <VerticalMiddleIcon size={16} />
              </ToggleGroupItem>
            </SimpleTooltip>
            <SimpleTooltip content="Align Bottom">
              <ToggleGroupItem size="sm" value="bottom">
                <VerticalBottomIcon size={16} />
              </ToggleGroupItem>
            </SimpleTooltip>
          </ToggleGroup>
        </div>
      )}
      {isBox && (
        <div className="flex w-full items-center gap-2">
          <SimpleTooltip content="Line Height">
            <div className="flex items-center gap-2">
              <Label htmlFor="text-line-height-field" className="text-sm px-1">
                <LineHeightIcon size={16} />
              </Label>
              <NumberField
                id="text-line-height-field"
                className="flex-grow h-8"
                value={lineHeight}
                onChange={(value) => onChange({ lineHeight: value })}
              />
            </div>
          </SimpleTooltip>
          <SimpleTooltip content="Paragraph Spacing">
            <div className="flex items-center gap-2">
              <Label htmlFor="text-paragraph-spacing-field" className="text-sm">
                <ParagraphSpacingIcon size={16} />
              </Label>
              <NumberField
                id="text-paragraph-spacing-field"
                className="flex-grow h-8"
                value={paragraphSpacing}
                onChange={(value) => onChange({ paragraphSpacing: value })}
              />
            </div>
          </SimpleTooltip>
          <SimpleTooltip content="Word Wrap">
            <Toggle
              className="w-9 px-2 justify-center flex-none"
              variant="outline"
              size="sm"
              pressed={wordWrap}
              onPressedChange={(pressed) => onChange({ wordWrap: pressed })}
            >
              <WrapTextIcon size={16} />
            </Toggle>
          </SimpleTooltip>
        </div>
      )}
    </Panel>
  );
};
