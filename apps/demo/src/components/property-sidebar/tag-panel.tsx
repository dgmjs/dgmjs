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
import {
  HashIcon,
  MoreHorizontalIcon,
  PlusIcon,
  Settings2Icon,
} from "lucide-react";
import React from "react";
import { Empty } from "../common/empty";
import { TextField } from "./fields/text-field";
import { Panel } from "../common/panel";
import { Button } from "@/components/ui/button";
import { ShapeEditorProps } from "@/types";

export const TagPanel: React.FC<ShapeEditorProps> = ({ shapes, onChange }) => {
  const tags = shapes[0].tags;

  const addTag = () => {
    if (onChange) {
      if (onChange) onChange({ tags: [...tags, "new-tag"] });
    }
  };

  return (
    <Panel
      title="Tags"
      more={
        <Button
          variant="ghost"
          className="h-6 w-6 px-0 text-muted-foreground"
          onClick={() => addTag()}
        >
          <PlusIcon size={16} />
        </Button>
      }
      borderTop
    >
      {tags.map((tag, tagIndex) => (
        <div key={tagIndex} className="flex h-8 items-center justify-between">
          <div className="flex items-center h-full w-full text-sm pl-2 truncate border border-r-0 rounded-l">
            <HashIcon size={16} className="mr-1" />
            {tag}
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
                <TextField
                  value={tag}
                  onChange={(value) => {
                    if (onChange)
                      onChange({
                        tags: tags.map((t, i) => (i === tagIndex ? value : t)),
                      });
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
                    if (tagIndex > 0) {
                      const updated = [...tags];
                      const t = updated[tagIndex];
                      updated.splice(tagIndex, 1);
                      updated.splice(tagIndex - 1, 0, t);
                      if (onChange) onChange({ tags: updated });
                    }
                  }}
                >
                  Move Up
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => {
                    if (tagIndex < tags.length - 1) {
                      const updated = [...tags];
                      const t = updated[tagIndex];
                      updated.splice(tagIndex, 1);
                      updated.splice(tagIndex + 1, 0, t);
                      if (onChange) onChange({ tags: updated });
                    }
                  }}
                >
                  Move Down
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => {
                    if (onChange)
                      onChange({ tags: tags.filter((t, i) => i !== tagIndex) });
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <Button variant="ghost"
              className="h-8 w-8 p-0 border border-l-0 rounded-l-none"
              onClick={() => {
                if (onChange)
                  onChange({ tags: tags.filter((t, i) => i !== tagIndex) });
              }}
            >
              <XIcon size={16} />
            </Button> */}
          </div>
        </div>
      ))}
      {tags.length === 0 && <Empty className="h-8" message="No tags" />}
    </Panel>
  );
};
