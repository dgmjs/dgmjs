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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Connector, Line, LineType } from "@dgmjs/core";
import { LineCurveIcon, LineStraightIcon } from "@/components/icons";
import { SelectArrowhead } from "./fields/select-arrowhead";
import { ShapeEditorProps } from "@/types";
import { merge } from "@/utils";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";

export const LinePanel: React.FC<ShapeEditorProps> = ({ shapes, onChange }) => {
  const lineType = merge(shapes.map((s) => (s as Line).lineType));
  const headEndType = merge(shapes.map((s) => (s as Line).headEndType));
  const tailEndType = merge(shapes.map((s) => (s as Line).tailEndType));
  const isConnector = shapes.every((s) => s.type === "Connector");
  const headMargin = merge(shapes.map((s) => (s as Connector).headMargin));
  const tailMargin = merge(shapes.map((s) => (s as Connector).tailMargin));

  return (
    <Panel title="Line" borderTop>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <SelectArrowhead
            id="line-head-end"
            className="rounded-r-none"
            rotate={true}
            value={tailEndType}
            onValueChange={(value) => {
              if (onChange) onChange({ tailEndType: value });
            }}
          />
          <SelectArrowhead
            id="line-tail-end"
            className="rounded-l-none ml-[-1px]"
            value={headEndType}
            onValueChange={(value) => {
              if (onChange) onChange({ headEndType: value });
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <ToggleGroup
            type="single"
            value={lineType}
            onValueChange={(value) => {
              if (onChange && value) onChange({ lineType: value });
            }}
          >
            <ToggleGroupItem size="sm" value={LineType.STRAIGHT}>
              <LineStraightIcon size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem size="sm" value={LineType.CURVE}>
              <LineCurveIcon size={16} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      {isConnector && (
        <>
          <div className="flex items-center h-8 gap-3">
            <Label className="font-normal">Head Margin</Label>
            <div className="w-full">
              <Slider
                max={50}
                step={5}
                min={0}
                value={[headMargin || 0]}
                onValueChange={(value) =>
                  onChange({ headMargin: value.length > 0 ? value[0] : 0 })
                }
              />
            </div>
          </div>
          <div className="flex items-center h-8 gap-3">
            <Label className="font-normal">Tail Margin</Label>
            <div className="w-full">
              <Slider
                max={50}
                step={5}
                min={0}
                value={[tailMargin || 0]}
                onValueChange={(value) =>
                  onChange({ tailMargin: value.length > 0 ? value[0] : 0 })
                }
              />
            </div>
          </div>
        </>
      )}
    </Panel>
  );
};
