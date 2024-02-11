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
import { ColorField } from "./fields/color-field";
import { Panel } from "../common/panel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FillStyle } from "dgmjs";
import {
  FillCrossHatchIcon,
  FillHachureIcon,
  FillSolidIcon,
} from "@/components/icons";
import { SimpleTooltip } from "../common/simple-tooltip";
import { ShapeEditorProps } from "@/types";
import { merge } from "@/utils";

export const FillPanel: React.FC<ShapeEditorProps> = ({ shapes, onChange }) => {
  const fillColor = merge(shapes.map((s) => s.fillColor));
  const fillStyle = merge(shapes.map((s) => s.fillStyle));

  return (
    <Panel title="Fill">
      <SimpleTooltip content="Fill Color">
        <ColorField
          value={fillColor}
          onValueChange={(value) => {
            if (onChange) onChange({ fillColor: value });
          }}
        />
      </SimpleTooltip>
      <div className="flex items-center justify-center">
        <ToggleGroup
          type="single"
          value={fillStyle}
          onValueChange={(value) => {
            if (onChange && value) onChange({ fillStyle: value });
          }}
        >
          <SimpleTooltip content="Solid">
            <ToggleGroupItem size="sm" value={FillStyle.SOLID}>
              <FillSolidIcon size={16} />
            </ToggleGroupItem>
          </SimpleTooltip>
          <SimpleTooltip content="Hachure">
            <ToggleGroupItem size="sm" value={FillStyle.HACHURE}>
              <FillHachureIcon size={16} />
            </ToggleGroupItem>
          </SimpleTooltip>
          <SimpleTooltip content="Cross Hatch">
            <ToggleGroupItem size="sm" value={FillStyle.CROSS_HATCH}>
              <FillCrossHatchIcon size={16} />
            </ToggleGroupItem>
          </SimpleTooltip>
        </ToggleGroup>
      </div>
    </Panel>
  );
};
