import React from "react";
import { ColorField } from "./fields/color-field";
import { Panel } from "../common/panel";
import { NumberField } from "./fields/number-field";
import { Label } from "@/components/ui/label";
import { SimpleTooltip } from "../common/simple-tooltip";
import { ShapeEditorProps } from "@/types";
import { merge } from "@/utils";
import { Switch } from "../ui/switch";

export const ShadowPanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  const shadow = merge(shapes.map((s) => s.shadow));
  const shadowColor = merge(shapes.map((s) => s.shadowColor));
  const shadowOffsetX = merge(shapes.map((s) => s.shadowOffset[0]));
  const shadowOffsetY = merge(shapes.map((s) => s.shadowOffset[1]));

  return (
    <Panel
      title="Shadow"
      borderTop
      more={
        <div>
          <Switch
            checked={shadow}
            onCheckedChange={(checked) => onChange({ shadow: checked })}
          />
        </div>
      }
    >
      <SimpleTooltip content="Shadow Color">
        <ColorField
          value={shadowColor}
          onValueChange={(value) => onChange({ shadowColor: value })}
        />
      </SimpleTooltip>
      <div className="flex items-center gap-2">
        <SimpleTooltip content="OffsetX">
          <div className="flex items-center gap-2">
            <Label htmlFor="shadow-offset-x" className="flex-none px-1">
              ΔX
            </Label>
            <NumberField
              id="shadow-offset-x"
              className="flex-grow h-8"
              value={shadowOffsetX}
              onChange={(value) =>
                onChange({ shadowOffset: [value, shadowOffsetY ?? 0] })
              }
            />
          </div>
        </SimpleTooltip>
        <SimpleTooltip content="OffsetX">
          <div className="flex items-center gap-2">
            <Label htmlFor="shadow-offset-y" className="flex-none px-1">
              ΔY
            </Label>
            <NumberField
              id="shadow-offset-y"
              className="flex-grow h-8"
              value={shadowOffsetY}
              onChange={(value) =>
                onChange({ shadowOffset: [shadowOffsetX ?? 0, value] })
              }
            />
          </div>
        </SimpleTooltip>
      </div>
    </Panel>
  );
};
