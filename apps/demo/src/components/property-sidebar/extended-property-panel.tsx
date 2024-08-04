import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Property } from "@dgmjs/core";
import { MoreHorizontalIcon, PlusIcon, Settings2Icon } from "lucide-react";
import { Empty } from "../common/empty";
import { TextField } from "./fields/text-field";
import { Panel } from "../common/panel";
import { NumberField } from "./fields/number-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { TextareaField } from "./fields/textarea-field";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ShapeEditorProps } from "@/types";
import { cn } from "@/lib/utils";

export const ExtendedPropertyPanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  const properties = shapes[0].properties;

  const changeProperty = (index: number, property: Property) => {
    if (onChange) {
      onChange({
        properties: properties.map((prop, i) =>
          index === i ? property : prop
        ),
      });
    }
  };

  const addProperty = () => {
    if (onChange) {
      const newProp: Property = {
        name: "NewProperty",
        hidden: false,
        type: "string",
        value: "",
      };
      if (onChange) onChange({ properties: [...properties, newProp] });
    }
  };

  const deleteProperty = (index: number) => {
    if (onChange) {
      if (onChange)
        onChange({ properties: properties.filter((p, i) => i !== index) });
    }
  };

  return (
    <Panel
      title="Extended Properties"
      borderTop
      more={
        <Button
          variant="ghost"
          className="h-6 w-6 px-0 text-muted-foreground"
          onClick={() => addProperty()}
        >
          <PlusIcon size={16} />
        </Button>
      }
    >
      {properties.map((property, i) => (
        <div key={i} className="flex items-center justify-between h-8 rounded">
          <div className="grid w-full grid-cols-2">
            <div
              className={cn(
                "h-8 w-full border border-r-0 rounded-l pl-2 flex items-center truncate text-sm",
                property.hidden && "text-muted-foreground/40"
              )}
            >
              {property.name}
            </div>
            <div className="h-8 flex items-center border border-r-0">
              {property.type === "enum" && (
                <Select
                  value={property.value}
                  onValueChange={(value) =>
                    changeProperty(i, { ...property, value })
                  }
                >
                  <SelectTrigger className="h-8 rounded-none border-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {property.options &&
                      property.options?.map((option: any, j: number) => (
                        <SelectItem key={j} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              )}
              {property.type === "string" && (
                <TextField
                  className="h-8 rounded-none border-none"
                  value={property.value}
                  onChange={(value) =>
                    changeProperty(i, { ...property, value })
                  }
                />
              )}
              {property.type === "number" && (
                <>
                  {property.extra === "slider" ? (
                    <Slider
                      value={[property.value]}
                      min={property.min ?? 0}
                      max={property.max ?? 100}
                      step={property.step ?? 1}
                      onValueChange={(value) =>
                        changeProperty(i, {
                          ...property,
                          value: value.length > 0 ? value[0] : 0,
                        })
                      }
                    />
                  ) : (
                    <NumberField
                      className="h-8 rounded-none border-none"
                      value={property.value}
                      onChange={(value) => {
                        if (
                          typeof property.max === "number" &&
                          value > property.max
                        )
                          value = property.max;
                        if (
                          typeof property.min === "number" &&
                          value < property.min
                        )
                          value = property.min;
                        changeProperty(i, { ...property, value });
                      }}
                    />
                  )}
                </>
              )}
              {property.type === "boolean" && (
                <div className="w-full flex items-center justify-center">
                  <Switch
                    checked={property.value}
                    onCheckedChange={(checked) =>
                      changeProperty(i, { ...property, value: checked })
                    }
                  />
                </div>
              )}
              {property.type === "text" && (
                <TextareaField
                  rows={1}
                  className="h-8 min-h-full max-h-8 rounded-none py-1 px-2 border-none resize-none"
                  value={property.value}
                  onChange={(value) =>
                    changeProperty(i, { ...property, value })
                  }
                />
              )}
            </div>
          </div>
          <div className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-8 p-0 border rounded-none"
                >
                  <Settings2Icon size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex flex-row items-center justify-between">
                  <Label className="font-medium">Extended Property</Label>
                </div>
                <Separator className="mb-3 mt-2" />
                <div className="flex flex-col items-center gap-2">
                  <div className="grid grid-cols-2 w-full items-center">
                    <Label
                      htmlFor="extended-property-name-field"
                      className="font-normal"
                    >
                      Name
                    </Label>
                    <TextField
                      id="extended-property-name-field"
                      className="h-8"
                      value={property.name}
                      onChange={(value) =>
                        changeProperty(i, { ...property, name: value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 w-full items-center">
                    <Label
                      htmlFor="extended-property-type-select"
                      className="font-normal"
                    >
                      Type
                    </Label>
                    <Select
                      value={property.type}
                      onValueChange={(value) => {
                        let defaultValue: any = "";
                        if (value === "boolean") defaultValue = false;
                        if (value === "number") defaultValue = 0;
                        changeProperty(i, {
                          ...property,
                          type: value as any,
                          value: defaultValue,
                          options: value === "enum" ? [] : property.options,
                        });
                      }}
                    >
                      <SelectTrigger
                        id="extended-property-type-select"
                        className="h-8"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="string">string</SelectItem>
                        <SelectItem value="number">number</SelectItem>
                        <SelectItem value="boolean">boolean</SelectItem>
                        <SelectItem value="enum">enum</SelectItem>
                        <SelectItem value="text">text</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 w-full items-center">
                    <Label
                      htmlFor="extended-property-extra"
                      className="font-normal"
                    >
                      Extra
                    </Label>
                    <TextField
                      id="extended-property-extra"
                      className="h-8"
                      value={property.extra}
                      onChange={(value) =>
                        changeProperty(i, { ...property, extra: value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 w-full items-center">
                    <Label
                      htmlFor="extended-property-hidden"
                      className="font-normal"
                    >
                      Hidden
                    </Label>
                    <div className="flex items-center justify-end">
                      <Switch
                        id="extended-property-hidden"
                        checked={property.hidden}
                        onCheckedChange={(checked) =>
                          changeProperty(i, { ...property, hidden: checked })
                        }
                      />
                    </div>
                  </div>
                  {property.type === "enum" && (
                    <div className="grid grid-cols-2 w-full items-center">
                      <Label
                        htmlFor="extended-property-options-field"
                        className="font-normal"
                      >
                        Options
                      </Label>
                      <TextareaField
                        id="extended-property-options-field"
                        rows={3}
                        value={
                          Array.isArray(property.options)
                            ? property.options.join("\n")
                            : ""
                        }
                        onChange={(value) =>
                          changeProperty(i, {
                            ...property,
                            options: value.trim().split("\n"),
                          })
                        }
                      />
                    </div>
                  )}
                  {property.type === "number" && (
                    <>
                      <div className="grid grid-cols-2 w-full items-center">
                        <Label
                          htmlFor="extended-property-min"
                          className="font-normal"
                        >
                          Min
                        </Label>
                        <NumberField
                          id="extended-property-min"
                          className="h-8"
                          value={property.min}
                          onChange={(value) =>
                            changeProperty(i, {
                              ...property,
                              min: value,
                              value: Math.max(value, property.value),
                            })
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 w-full items-center">
                        <Label
                          htmlFor="extended-property-max"
                          className="font-normal"
                        >
                          Max
                        </Label>
                        <NumberField
                          id="extended-property-max"
                          className="h-8"
                          value={property.max}
                          onChange={(value) =>
                            changeProperty(i, {
                              ...property,
                              max: value,
                              value: Math.min(value, property.value),
                            })
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 w-full items-center">
                        <Label
                          htmlFor="extended-property-setp"
                          className="font-normal"
                        >
                          Step
                        </Label>
                        <NumberField
                          id="extended-property-step"
                          className="h-8"
                          value={property.step}
                          onChange={(value) =>
                            changeProperty(i, { ...property, step: value })
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </PopoverContent>
            </Popover>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 border border-l-0 rounded-l-none"
                  >
                    <MoreHorizontalIcon size={16} />
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onSelect={() => {
                    if (i > 0) {
                      const updated = [...properties];
                      const p = updated[i];
                      updated.splice(i, 1);
                      updated.splice(i - 1, 0, p);
                      if (onChange) onChange({ properties: updated });
                    }
                  }}
                >
                  Move Up
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => {
                    if (i < properties.length - 1) {
                      const updated = [...properties];
                      const p = updated[i];
                      updated.splice(i, 1);
                      updated.splice(i + 1, 0, p);
                      if (onChange) onChange({ properties: updated });
                    }
                  }}
                >
                  Move Down
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => deleteProperty(i)}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
      {properties.length === 0 && (
        <Empty className="h-8" message="No properties" />
      )}
    </Panel>
  );
};
