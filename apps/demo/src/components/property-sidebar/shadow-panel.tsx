import React from "react";
import { ColorField } from "./fields/color-field";
import { Panel } from "../common/panel";
import { NumberField } from "./fields/number-field";
import { Label } from "@/components/ui/label";
import { SimpleTooltip } from "../common/simple-tooltip";
import { ShapeEditorProps } from "@/types";
import { merge } from "@/utils";

export const ShadowPanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  const shadowColor = merge(shapes.map((s) => s.shadowColor));
  const shadowBlur = merge(shapes.map((s) => s.shadowBlur));
  const shadowOffsetX = merge(shapes.map((s) => s.shadowOffsetX));
  const shadowOffsetY = merge(shapes.map((s) => s.shadowOffsetY));

  return (
    <Panel title="Shadow" borderTop>
      <SimpleTooltip content="Shadow Color">
        <ColorField
          value={shadowColor}
          onValueChange={(value) => onChange({ shadowColor: value })}
        />
      </SimpleTooltip>
      <div className="flex items-center gap-2">
        <SimpleTooltip content="Shadow Offset X">
          <div className="flex items-center gap-2">
            <Label htmlFor="shadow-offset-x-field" className="flex-none px-1">
              X
            </Label>
            <NumberField
              id="shadow-offset-x-field"
              className="flex-grow h-8"
              value={shadowOffsetX}
              onChange={(value) => onChange({ shadowOffsetX: value })}
            />
          </div>
        </SimpleTooltip>
        <SimpleTooltip content="Shadow Offset Y">
          <div className="flex items-center gap-2">
            <Label htmlFor="shadow-offset-y-field" className="flex-none px-1">
              Y
            </Label>
            <NumberField
              id="shadow-offset-y-field"
              className="flex-grow h-8"
              value={shadowOffsetY}
              onChange={(value) => onChange({ shadowOffsetY: value })}
            />
          </div>
        </SimpleTooltip>
      </div>
      <div className="flex h-8 items-center gap-3">
        <SimpleTooltip content="Shadow Offset Y">
          <div className="flex items-center gap-2">
            <Label htmlFor="shadow-blur-field" className="flex-none px-1">
              Blur
            </Label>
            <NumberField
              id="shadow-blur-field"
              className="flex-grow h-8"
              value={shadowBlur}
              onChange={(value) => onChange({ shadowBlur: value })}
            />
          </div>
        </SimpleTooltip>
      </div>
    </Panel>
  );
};
