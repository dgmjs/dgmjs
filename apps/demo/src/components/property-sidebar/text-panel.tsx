import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Box,
  HorzAlign,
  HorzAlignEnum,
  Text as TextShape,
  VertAlign,
  VertAlignEnum,
} from "@dgmjs/core";
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
import { FONT_SIZES } from "@/const";

export const TextPanel: React.FC<ShapeEditorProps> = ({ shapes, onChange }) => {
  const fontFamilies = unique(fontJson.map((f) => f.family));

  const isBox = shapes.every((s) => s instanceof Box);
  const fontColor = merge(shapes.map((s) => (s as TextShape).fontColor));
  const fontFamily = merge(shapes.map((s) => (s as TextShape).fontFamily));
  const fontWeight = merge(shapes.map((s) => (s as TextShape).fontWeight));
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
      <ColorField
        value={fontColor}
        onValueChange={(value) => onChange({ fontColor: value })}
        title="Font Color"
      />
      <div className="flex items-center">
        <Select
          value={fontFamily}
          onValueChange={(value) => onChange({ fontFamily: value })}
        >
          <SelectTrigger className="h-8" title="Font Family">
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
      </div>
      <div className="flex items-center gap-2 pr-3 w-full">
        <div className="flex items-center w-full">
          <Select
            value={fontWeight?.toString()}
            onValueChange={(value) => {
              const numberValue = parseInt(value);
              onChange({ fontWeight: numberValue });
            }}
          >
            <SelectTrigger className="h-8 w-full" title="Font Weight">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="100">Thin</SelectItem>
              <SelectItem value="200">ExtraLight</SelectItem>
              <SelectItem value="300">Light</SelectItem>
              <SelectItem value="400">Regular</SelectItem>
              <SelectItem value="500">Medium</SelectItem>
              <SelectItem value="600">SemiBold</SelectItem>
              <SelectItem value="700">Bold</SelectItem>
              <SelectItem value="800">ExtraBold</SelectItem>
              <SelectItem value="900">Black</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center w-full">
          <NumberField
            value={fontSize}
            onChange={(value) => onChange({ fontSize: value })}
            className="w-20 h-8 items-center"
            title="Font Size"
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
              {FONT_SIZES.map((size) => (
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
      </div>
      {isBox && (
        <div className="flex items-center justify-between">
          <ToggleGroup
            type="single"
            size="sm"
            value={horzAlign}
            onValueChange={(value) => {
              if (onChange && value)
                onChange({ horzAlign: value as HorzAlignEnum });
            }}
          >
            <ToggleGroupItem
              value={HorzAlign.LEFT}
              className="h-8 w-8 p-0"
              title="Align Left"
            >
              <AlignLeftIcon size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem
              value={HorzAlign.CENTER}
              className="h-8 w-8 p-0"
              title="Align Center"
            >
              <AlignCenterIcon size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem
              value={HorzAlign.RIGHT}
              className="h-8 w-8 p-0"
              title="Align Right"
            >
              <AlignRightIcon size={16} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup
            type="single"
            size="sm"
            value={vertAlign}
            onValueChange={(value) => {
              if (onChange && value)
                onChange({ vertAlign: value as VertAlignEnum });
            }}
          >
            <ToggleGroupItem
              value={VertAlign.TOP}
              className="h-8 w-8 p-0"
              title="Align Top"
            >
              <VerticalTopIcon size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem
              value={VertAlign.MIDDLE}
              className="h-8 w-8 p-0"
              title="Align Middle"
            >
              <VerticalMiddleIcon size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem
              value={VertAlign.BOTTOM}
              className="h-8 w-8 p-0"
              title="Align Bottom"
            >
              <VerticalBottomIcon size={16} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      )}
      {isBox && (
        <div className="flex w-full items-center gap-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="text-line-height-field" className="text-sm px-1">
              <LineHeightIcon size={16} />
            </Label>
            <NumberField
              id="text-line-height-field"
              className="flex-grow h-8"
              value={lineHeight}
              onChange={(value) => onChange({ lineHeight: value })}
              title="Line Height"
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="text-paragraph-spacing-field" className="text-sm">
              <ParagraphSpacingIcon size={16} />
            </Label>
            <NumberField
              id="text-paragraph-spacing-field"
              className="flex-grow h-8"
              value={paragraphSpacing}
              onChange={(value) => onChange({ paragraphSpacing: value })}
              title="Paragraph Spacing"
            />
          </div>
          <Toggle
            variant="outline"
            size="sm"
            pressed={wordWrap}
            onPressedChange={(pressed) => onChange({ wordWrap: pressed })}
            title="Word Wrap"
          >
            <WrapTextIcon size={16} />
          </Toggle>
        </div>
      )}
    </Panel>
  );
};
