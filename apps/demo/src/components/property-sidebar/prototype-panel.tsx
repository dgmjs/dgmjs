import React from "react";
import { Switch } from "@/components/ui/switch";
import { TextField } from "./fields/text-field";
import { Panel } from "../common/panel";
import { Label } from "@/components/ui/label";
import { TextareaField } from "./fields/textarea-field";
import { ShapeEditorProps } from "@/types";

export const PrototypePanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  const proto = shapes[0].proto;
  const name = shapes[0].name;
  const description = shapes[0].description;

  return (
    <Panel title="Prototype">
      <div className="grid h-7 grid-cols-2 items-center">
        <Label htmlFor="shape-prototype-switch" className="font-normal text-xs">
          Prototype
        </Label>
        <span className="text-right">
          <Switch
            id="shape-prototype-switch"
            checked={proto}
            onCheckedChange={(value) => onChange({ proto: value })}
          />
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="shape-name-field" className="font-normal text-xs">
          Name
        </Label>
        <TextField
          id="shape-name-field"
          className="h-7 text-xs"
          value={name}
          onChange={(value) => {
            onChange({ name: value });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="shape-description-field"
          className="font-normal text-xs"
        >
          Description
        </Label>
        <TextareaField
          id="shape-description-field"
          className="text-xs"
          value={description}
          rows={2}
          onChange={(value) => {
            onChange({ description: value });
          }}
        />
      </div>
    </Panel>
  );
};
