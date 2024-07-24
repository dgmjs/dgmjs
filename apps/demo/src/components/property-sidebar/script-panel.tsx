import React, { useEffect, useState } from "react";
import { MoreHorizontalIcon, PlusIcon, Settings2Icon } from "lucide-react";
import { Panel } from "../common/panel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Empty } from "../common/empty";
import { ScriptType, ScriptTypeEnum } from "@dgmjs/core";
import { Button } from "@/components/ui/button";
import { ShapeEditorProps } from "@/types";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { TextareaField } from "./fields/textarea-field";

const defaultDrawScript = `(do
  (call shape :draw canvas))`;

function ScriptEditor({
  script,
  onChange,
}: {
  script: string;
  onChange: (value: string) => void;
}) {
  const [value, setValue] = useState(script);

  useEffect(() => {
    setValue(script);
  }, [script]);

  return (
    <div>
      <div className="mb-3">
        <TextareaField
          cols={40}
          rows={10}
          value={value}
          className="text-sm"
          onChange={(value) => {
            setValue(value);
          }}
        />
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            if (onChange) onChange(value);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export const ScriptPanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  const scripts = shapes[0].scripts;

  const addScript = (id: string) => {
    if (onChange && !scripts.some((s) => s.id === id)) {
      let defaultScript = "";
      if (id === "draw") defaultScript = defaultDrawScript;
      const s = { id: id as ScriptTypeEnum, script: defaultScript };
      if (onChange) onChange({ scripts: [...scripts, s] });
    }
  };

  return (
    <Panel
      title="Scripts"
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
            {Object.values(ScriptType).map((id) => (
              <DropdownMenuItem key={id} onSelect={() => addScript(id)}>
                {id}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      }
      borderTop
    >
      {scripts.map((script, i) => (
        <div key={i} className="flex h-8 items-center justify-between">
          <div className="flex items-center h-full w-full text-sm pl-2 truncate border border-r-0 rounded-l">
            {script.id}
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
              <PopoverContent side="top" className="w-[640px]">
                <ScriptEditor
                  script={script.script}
                  onChange={(value) => {
                    const updated = scripts.map((s, si) =>
                      si === i ? { ...s, script: value } : s
                    );
                    if (onChange) onChange({ scripts: updated });
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
                    const updated = scripts.filter((s, si) => si !== i);
                    if (onChange) onChange({ scripts: updated });
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
      {scripts.length === 0 && <Empty className="h-8" message="No scripts" />}
    </Panel>
  );
};
