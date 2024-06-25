import React from "react";
import { MoreHorizontalIcon, PlusIcon, Settings2Icon } from "lucide-react";
import { Panel } from "../common/panel";
import { Empty } from "../common/empty";
import { constraintManager, type Constraint } from "@dgmjs/core";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NameValueEditor, schemaToNameValues } from "./name-value-editor";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ShapeEditorProps } from "@/types";

function constraintToNameValues(constraint: Constraint) {
  const schema = constraintManager.getSchema(constraint.id);
  if (schema) {
    const nameValues = schemaToNameValues(schema);
    return nameValues.map((nameValue) => ({
      ...nameValue,
      value:
        typeof constraint[nameValue.name] !== "undefined"
          ? constraint[nameValue.name]
          : nameValue.value,
    }));
  }
  return [];
}

export const ConstraintPanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  const constraints = shapes[0].constraints;

  const addConstraint = (id: string) => {
    if (onChange) {
      const c = constraintManager.create(id);
      if (c && onChange) onChange({ constraints: [...constraints, c] });
    }
  };

  return (
    <Panel
      title="Constraints"
      more={
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <Button
                variant="ghost"
                className="h-6 w-6 px-0 text-muted-foreground"
              >
                <PlusIcon size={16} />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {constraintManager.getIds().map((id) => (
              <DropdownMenuItem key={id} onSelect={() => addConstraint(id)}>
                {id}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      }
      borderTop
    >
      {constraints.map((constraint, i) => (
        <div key={i} className="flex h-8 items-center justify-between">
          <div className="flex items-center h-full w-full text-sm pl-2 truncate border border-r-0 rounded-l">
            {constraint.id}
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
              <PopoverContent side="top" sideOffset={8} className="w-80">
                <NameValueEditor
                  nameValues={constraintToNameValues(constraint)}
                  onChange={(nameValues) => {
                    const args = Object.fromEntries(
                      nameValues.map((nv) => [nv.name, nv.value])
                    );
                    const updated = constraints.map((c, ci) =>
                      ci === i ? { ...c, ...args } : c
                    );
                    if (onChange) onChange({ constraints: updated });
                  }}
                />
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
                      const updated = [...constraints];
                      const c = updated[i];
                      updated.splice(i, 1);
                      updated.splice(i - 1, 0, c);
                      if (onChange) onChange({ constraints: updated });
                    }
                  }}
                >
                  Move Up
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => {
                    if (i < constraints.length - 1) {
                      const updated = [...constraints];
                      const c = updated[i];
                      updated.splice(i, 1);
                      updated.splice(i + 1, 0, c);
                      if (onChange) onChange({ constraints: updated });
                    }
                  }}
                >
                  Move Down
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => {
                    const updated = constraints.filter((c, ci) => ci !== i);
                    if (onChange) onChange({ constraints: updated });
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
      {constraints.length === 0 && (
        <Empty className="h-8" message="No constraints" />
      )}
    </Panel>
  );
};
