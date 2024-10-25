import React from "react";
import { BorderPosition, BorderPositionEnum, Box } from "@dgmjs/core";
import { NumberField } from "./fields/number-field";
import { Panel } from "../common/panel";
import { Label } from "@/components/ui/label";
import { SimpleTooltip } from "../common/simple-tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { merge } from "@/utils";
import { ShapeEditorProps } from "@/types";
import { Checkbox } from "../ui/checkbox";

export const BoxPanel: React.FC<ShapeEditorProps> = ({ shapes, onChange }) => {
  const width = merge(shapes.map((s) => s.width));
  const height = merge(shapes.map((s) => s.height));
  const corners = merge(shapes.map((s) => (s as Box).corners));
  const padding = merge(shapes.map((s) => (s as Box).padding));
  const borders = merge(shapes.map((s) => (s as Box).borders));
  const borderPosition = merge(shapes.map((s) => (s as Box).borderPosition));

  return (
    <Panel title="Box" borderTop>
      <div className="flex items-center gap-2">
        <SimpleTooltip content="Width">
          <div className="flex items-center gap-2">
            <Label htmlFor="shape-width-field" className="flex-none px-1">
              W
            </Label>
            <NumberField
              id="shape-width-field"
              className="flex-grow h-8"
              value={width}
              onChange={(value) => onChange({ width: value })}
            />
          </div>
        </SimpleTooltip>
        <SimpleTooltip content="Height">
          <div className="flex items-center gap-2">
            <Label htmlFor="shape-height-field" className="flex-none px-1">
              H
            </Label>
            <NumberField
              id="shape-height-field"
              className="flex-grow h-8"
              value={height}
              onChange={(value) => onChange({ height: value })}
            />
          </div>
        </SimpleTooltip>
      </div>
      <div className="flex items-center gap-2">
        <Label className="font-normal flex-none">Padding</Label>
        <SimpleTooltip content="Top Padding">
          <NumberField
            className="flex-grow h-8"
            value={padding ? padding[0] : undefined}
            onChange={(value) => {
              const p = padding ?? [0, 0, 0, 0];
              onChange({
                padding: [value, p[1], p[2], p[3]],
              });
            }}
          />
        </SimpleTooltip>
        <SimpleTooltip content="Right Padding">
          <NumberField
            className="flex-grow h-8"
            value={padding ? padding[1] : undefined}
            onChange={(value) => {
              const p = padding ?? [0, 0, 0, 0];
              onChange({
                padding: [p[0], value, p[2], p[3]],
              });
            }}
          />
        </SimpleTooltip>
        <SimpleTooltip content="Bottom Padding">
          <NumberField
            className="flex-grow h-8"
            value={padding ? padding[2] : undefined}
            onChange={(value) => {
              const p = padding ?? [0, 0, 0, 0];
              onChange({
                padding: [p[0], p[1], value, p[3]],
              });
            }}
          />
        </SimpleTooltip>
        <SimpleTooltip content="Left Padding">
          <NumberField
            className="flex-grow h-8"
            value={padding ? padding[3] : undefined}
            onChange={(value) => {
              const p = padding ?? [0, 0, 0, 0];
              onChange({
                padding: [p[0], p[1], p[2], value],
              });
            }}
          />
        </SimpleTooltip>
      </div>
      <div className="flex items-center gap-2">
        <Label className="font-normal">Corners</Label>
        <SimpleTooltip content="Left Top Corner">
          <NumberField
            className="flex-grow h-8"
            value={corners ? corners[0] : undefined}
            onChange={(value) => {
              const c = corners ?? [0, 0, 0, 0];
              onChange({
                corners: [value, c[1], c[2], c[3]],
              });
            }}
          />
        </SimpleTooltip>
        <SimpleTooltip content="Right Top Corner">
          <NumberField
            className="flex-grow h-8"
            value={corners ? corners[1] : undefined}
            onChange={(value) => {
              const c = corners ?? [0, 0, 0, 0];
              onChange({
                corners: [c[0], value, c[2], c[3]],
              });
            }}
          />
        </SimpleTooltip>
        <SimpleTooltip content="Right Bottom Corner">
          <NumberField
            className="flex-grow h-8"
            value={corners ? corners[2] : undefined}
            onChange={(value) => {
              const c = corners ?? [0, 0, 0, 0];
              onChange({
                corners: [c[0], c[1], value, c[3]],
              });
            }}
          />
        </SimpleTooltip>
        <SimpleTooltip content="Left Bottom Corner">
          <NumberField
            className="flex-grow h-8"
            value={corners ? corners[3] : undefined}
            onChange={(value) => {
              const c = corners ?? [0, 0, 0, 0];
              onChange({
                corners: [c[0], c[1], c[2], value],
              });
            }}
          />
        </SimpleTooltip>
      </div>
      <div className="flex items-center gap-2">
        <Label className="font-normal">Borders</Label>
        <SimpleTooltip content="Top Border">
          <div className="flex justify-center items-center w-8">
            <Checkbox
              checked={borders ? borders[0] : undefined}
              onCheckedChange={(value) => {
                onChange({
                  borders: [
                    value === true,
                    borders![1] ?? false,
                    borders![2] ?? false,
                    borders![3] ?? false,
                  ],
                });
              }}
            />
          </div>
        </SimpleTooltip>
        <SimpleTooltip content="Right Border">
          <div className="flex justify-center items-center w-8">
            <Checkbox
              checked={borders ? borders[1] : undefined}
              onCheckedChange={(value) => {
                onChange({
                  borders: [
                    borders![0] ?? false,
                    value === true,
                    borders![2] ?? false,
                    borders![3] ?? false,
                  ],
                });
              }}
            />
          </div>
        </SimpleTooltip>
        <SimpleTooltip content="Bottom Border">
          <div className="flex justify-center items-center w-8">
            <Checkbox
              checked={borders ? borders[2] : undefined}
              onCheckedChange={(value) => {
                onChange({
                  borders: [
                    borders![0] ?? false,
                    borders![1] ?? false,
                    value === true,
                    borders![3] ?? false,
                  ],
                });
              }}
            />
          </div>
        </SimpleTooltip>
        <SimpleTooltip content="Left Border">
          <div className="flex justify-center items-center w-8">
            <Checkbox
              checked={borders ? borders[3] : undefined}
              onCheckedChange={(value) => {
                onChange({
                  borders: [
                    borders![0] ?? false,
                    borders![1] ?? false,
                    borders![2] ?? false,
                    value === true,
                  ],
                });
              }}
            />
          </div>
        </SimpleTooltip>
      </div>
      <div className="grid grid-cols-2 items-center gap-2 pr-3 w-full">
        <Label className="font-normal">Position</Label>
        <div className="flex items-center w-full">
          <Select
            value={borderPosition}
            onValueChange={(value) => {
              onChange({ borderPosition: value as BorderPositionEnum });
            }}
          >
            <SelectTrigger className="h-8 w-full" title="Font Weight">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.values(BorderPosition).map((key) => (
                <SelectItem key={key} value={key}>
                  {key}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Panel>
  );
};
