import React from "react";
import { ColorField } from "./fields/color-field";
import { Panel } from "../common/panel";
import { TextField } from "./fields/text-field";
import { StrokeDottedIcon, StrokeSolidIcon } from "@/components/icons";
import { NumberField } from "./fields/number-field";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { SimpleTooltip } from "../common/simple-tooltip";
import { toast } from "sonner";
import { ShapeEditorProps } from "@/types";
import { merge } from "@/utils";

export const StrokePanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  const strokeColor = merge(shapes.map((s) => s.strokeColor));
  const strokeWidth = merge(shapes.map((s) => s.strokeWidth));
  const strokePattern = merge(shapes.map((s) => s.strokePattern));
  const roughness = merge(shapes.map((s) => s.roughness));

  return (
    <Panel title="Stroke" borderTop>
      <SimpleTooltip content="Stroke Color">
        <ColorField
          value={strokeColor}
          onValueChange={(value) => onChange({ strokeColor: value })}
        />
      </SimpleTooltip>
      <div className="flex items-center gap-2">
        <SimpleTooltip content="Stroke Width">
          <div className="flex items-center gap-2">
            <Label htmlFor="stroke-width-field" className="flex-none px-1">
              <StrokeSolidIcon size={16} />
            </Label>
            <NumberField
              id="stroke-width-field"
              className="flex-grow h-8"
              value={strokeWidth}
              onChange={(value) => onChange({ strokeWidth: value })}
            />
          </div>
        </SimpleTooltip>
        <SimpleTooltip content="Stroke Pattern">
          <div className="flex items-center gap-2">
            <Label htmlFor="stroke-pattern-field" className="flex-none px-1">
              <StrokeDottedIcon size={16} />
            </Label>
            <TextField
              id="stroke-pattern-field"
              className="flex-grow h-8"
              value={
                Array.isArray(strokePattern)
                  ? strokePattern.length > 0
                    ? strokePattern.join(",")
                    : "0"
                  : undefined
              }
              onChange={(value) => {
                try {
                  const pattern = JSON.parse(`[${value}]`);
                  onChange({ strokePattern: pattern });
                } catch (err) {
                  toast.warning("Pattern should be number comma-list");
                }
              }}
            />
          </div>
        </SimpleTooltip>
      </div>
      <div className="flex h-8 items-center gap-3">
        <Label className="font-normal">Roughness</Label>
        <div className="w-full">
          <Slider
            max={5}
            step={0.5}
            min={0}
            value={[roughness || 0]}
            onValueChange={(value) =>
              onChange({ roughness: value.length > 0 ? value[0] : 0 })
            }
          />
        </div>
      </div>
    </Panel>
  );
};
