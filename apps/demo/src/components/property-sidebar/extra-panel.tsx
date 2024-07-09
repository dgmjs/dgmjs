import React from "react";
import { TextField } from "./fields/text-field";
import { Panel } from "../common/panel";
import { Label } from "@/components/ui/label";
import { ShapeEditorProps } from "@/types";
import { Button } from "../ui/button";
import { MoreHorizontalIcon, XIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ShapeTree } from "../common/shape-tree";
import { Doc, Shape } from "@dgmjs/core";
import { ScrollArea } from "../ui/scroll-area";

export interface ExtraPanelProps extends ShapeEditorProps {
  doc: Doc;
  onReferenceChange: (shape: Shape, reference: Shape | null) => void;
}

export const ExtraPanel: React.FC<ExtraPanelProps> = ({
  doc,
  shapes,
  onChange,
  onReferenceChange,
}) => {
  const link = shapes[0].link;
  const reference = shapes[0].reference;

  return (
    <Panel title="Extra" borderTop>
      <div className="flex flex-col gap-2">
        <Label htmlFor="shape-link-field" className="font-normal">
          Link
        </Label>
        <TextField
          id="shape-link-field"
          className="h-8"
          value={link}
          onChange={(value) => {
            onChange({ link: value });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="shape-reference-field" className="font-normal">
          Reference
        </Label>
        {shapes.length === 1 && (
          <div className="flex items-center gap-2">
            <div
              id="shape-reference-field"
              className="h-8 flex items-center text-sm w-full border rounded px-2 bg-accent"
            >
              {reference ? reference.name : "null"}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 px-2"
              onClick={() => {
                if (onReferenceChange) onReferenceChange(shapes[0], null);
              }}
            >
              <XIcon size={16} />
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8 px-2">
                  <MoreHorizontalIcon size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side="top"
                sideOffset={8}
                className="w-80 h-60"
                align="end"
              >
                <ScrollArea className="w-full h-full">
                  <ShapeTree
                    shapes={doc ? (doc.children as Shape[]) : []}
                    selections={[]}
                    onSelect={(shape) => {
                      console.log("shape", shape);
                      if (onReferenceChange)
                        onReferenceChange(shapes[0], shape);
                    }}
                  />
                </ScrollArea>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>
    </Panel>
  );
};
