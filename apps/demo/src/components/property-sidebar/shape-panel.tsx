import { Toggle } from "@/components/ui/toggle";
import { LockIcon, RotateCcwIcon } from "lucide-react";
import React from "react";
import { NumberField } from "./fields/number-field";
import { Panel } from "../common/panel";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { SimpleTooltip } from "../common/simple-tooltip";
import { ShapeEditorProps } from "@/types";
import { merge } from "@/utils";

export const CommonPanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  const rotate = merge(shapes.map((s) => s.rotate));
  const rotatable = merge(shapes.map((s) => s.rotatable));
  const opacity = merge(shapes.map((s) => s.opacity));

  return (
    <Panel title="Shape" borderTop>
      <div className="flex items-center w-full gap-2">
        <SimpleTooltip content="Rotate">
          <div className="flex items-center gap-2">
            <Label
              htmlFor="shape-rotate-field"
              className="text-sm flex-none px-1"
            >
              <RotateCcwIcon size={16} />
            </Label>
            <NumberField
              id="shape-rotate-field"
              className="flex-grow h-8"
              value={rotate}
              onChange={(value) => onChange({ rotate: value })}
            />
          </div>
        </SimpleTooltip>
        <SimpleTooltip content="Lock Rotation">
          <Toggle
            variant="outline"
            size="sm"
            className="w-9 px-2 justify-center flex-none"
            pressed={!rotatable}
            onPressedChange={(pressed) => onChange({ rotatable: !pressed })}
          >
            <LockIcon size={16} />
          </Toggle>
        </SimpleTooltip>
      </div>
      <div className="flex h-9 items-center gap-3">
        <Label className="font-normal">Opacity</Label>
        <div className="w-full">
          <Slider
            max={1}
            step={0.1}
            min={0}
            value={[opacity || 0]}
            onValueChange={(value) =>
              onChange({ opacity: value.length > 0 ? value[0] : 0 })
            }
          />
        </div>
      </div>
    </Panel>
  );
};
