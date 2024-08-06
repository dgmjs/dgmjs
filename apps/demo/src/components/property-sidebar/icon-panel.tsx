import React from "react";
import { Icon } from "@dgmjs/core";
import { NumberField } from "./fields/number-field";
import { Panel } from "../common/panel";
import { Label } from "@/components/ui/label";
import { SimpleTooltip } from "../common/simple-tooltip";
import { merge } from "@/utils";
import { ShapeEditorProps } from "@/types";
import { TextareaField } from "./fields/textarea-field";

export const IconPanel: React.FC<ShapeEditorProps> = ({ shapes, onChange }) => {
  const viewWidth = merge(shapes.map((s) => (s as Icon).viewWidth));
  const viewHeight = merge(shapes.map((s) => (s as Icon).viewHeight));
  const data = merge(shapes.map((s) => (s as Icon).data));
  const dataString = data ? JSON.stringify(data, null, 2) : "";

  return (
    <Panel title="Vector Graphic" borderTop>
      <div className="flex items-center gap-2">
        <SimpleTooltip content="Width">
          <div className="flex items-center gap-2">
            <Label htmlFor="shape-width-field" className="flex-none px-1">
              VW
            </Label>
            <NumberField
              id="shape-width-field"
              className="flex-grow h-8"
              value={viewWidth}
              onChange={(value) => onChange({ viewWidth: value })}
            />
          </div>
        </SimpleTooltip>
        <SimpleTooltip content="Height">
          <div className="flex items-center gap-2">
            <Label htmlFor="shape-height-field" className="flex-none px-1">
              VH
            </Label>
            <NumberField
              id="shape-height-field"
              className="flex-grow h-8"
              value={viewHeight}
              onChange={(value) => onChange({ viewHeight: value })}
            />
          </div>
        </SimpleTooltip>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="vg-data-field" className="font-normal">
          Data
        </Label>
        <TextareaField
          id="vg-data-field"
          value={dataString}
          rows={2}
          onChange={(value) => {
            try {
              const data = JSON.parse(value);
              onChange({ data: data });
            } catch (e) {
              console.error(e);
            }
          }}
        />
      </div>
    </Panel>
  );
};
