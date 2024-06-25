import React from "react";
import { TextField } from "./fields/text-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ZodSchema } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { NumberField } from "./fields/number-field";
import { Empty } from "../common/empty";
import { TextareaField } from "./fields/textarea-field";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export interface NameValue {
  name: string;
  type: "string" | "enum" | "number" | "boolean" | "text";
  options?: string[];
  value: any;
  default?: any;
}

interface NameValueEditorProps {
  nameValues: NameValue[];
  onChange?: (nameValues: NameValue[]) => void;
}

export function schemaToNameValues(schema: ZodSchema): NameValue[] {
  const json = zodToJsonSchema(schema, "schema");
  const props = (json.definitions?.schema as any).properties;
  const nameValues = Object.entries(props).map((entry: [string, any]) => ({
    name: entry[0],
    type: Array.isArray(entry[1].enum) ? "enum" : entry[1].type,
    options: entry[1].enum,
    value: entry[1].default,
    default: entry[1].default,
  }));
  return nameValues;
}

export const NameValueEditor: React.FC<NameValueEditorProps> = ({
  nameValues,
  onChange,
}) => {
  const changeNameValue = (name: string, value: any) => {
    if (onChange) {
      onChange(
        nameValues.map((nv) => (nv.name === name ? { ...nv, value } : nv))
      );
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      {nameValues.map((nameValue, i) => (
        <div key={i} className="flex items-center">
          <div className="grid grid-cols-2 w-full items-center">
            <Label
              htmlFor={`${nameValue.name}-value-field`}
              className="font-normal"
            >
              {nameValue.name}
            </Label>

            {nameValue.type === "enum" && (
              <Select
                value={nameValue.value}
                onValueChange={(value) =>
                  changeNameValue(nameValue.name, value)
                }
              >
                <SelectTrigger
                  id={`${nameValue.name}-value-field`}
                  className="h-8"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {nameValue.options?.map((option: any, j: number) => (
                    <SelectItem key={j} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            {nameValue.type === "string" && (
              <TextField
                id={`${nameValue.name}-value-field`}
                className="h-8"
                value={nameValue.value}
                onChange={(value) => changeNameValue(nameValue.name, value)}
              />
            )}
            {nameValue.type === "number" && (
              <NumberField
                id={`${nameValue.name}-value-field`}
                className="h-8"
                value={nameValue.value}
                onChange={(value) => changeNameValue(nameValue.name, value)}
              />
            )}
            {nameValue.type === "boolean" && (
              <div className="flex h-8 items-center justify-end">
                <Switch
                  id={`${nameValue.name}-value-field`}
                  checked={nameValue.value}
                  onCheckedChange={(checked) =>
                    changeNameValue(nameValue.name, checked)
                  }
                />
              </div>
            )}
            {nameValue.type === "text" && (
              <TextareaField
                id={`${nameValue.name}-value-field`}
                value={nameValue.value}
                onChange={(value) => changeNameValue(nameValue.name, value)}
              />
            )}
          </div>
        </div>
      ))}
      {nameValues.length === 0 && <Empty message="No entries to edit" />}
    </div>
  );
};
