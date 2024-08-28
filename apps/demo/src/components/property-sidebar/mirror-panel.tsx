import React from "react";
import { Mirror, type Doc } from "@dgmjs/core";
import { MoreHorizontalIcon, PlusIcon, XIcon } from "lucide-react";
import { Panel } from "../common/panel";
import { Button } from "@/components/ui/button";
import { ShapeEditorProps } from "@/types";
import { useSelectShapeDialog } from "../dialogs/select-shape-dialog";

interface MirrorPanelProps extends ShapeEditorProps {
  doc: Doc | null;
}

export const MirrorPanel: React.FC<MirrorPanelProps> = ({
  doc,
  shapes,
  onChange,
}) => {
  const showSelectShapeDialog = useSelectShapeDialog((state) => state.show);
  const subject = shapes[0] instanceof Mirror ? shapes[0].subject : null;

  return (
    <Panel
      title="Mirror"
      borderTop
      more={
        <Button variant="ghost" className="h-6 w-6 px-0 text-muted-foreground">
          <PlusIcon size={16} />
        </Button>
      }
    >
      <div className="w-full h-8 flex items-center justify-between text-sm ">
        <div className="bg-accent py-1 px-2 rounded-md text-muted-foreground">
          {subject ? subject.name : "null"}
        </div>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={async () => {
              await showSelectShapeDialog({
                doc,
                onConfirm: async (shape) => {
                  onChange({ subject: shape });
                },
              });
            }}
          >
            <MoreHorizontalIcon size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => {
              if (onChange) {
                onChange({ subject: null });
              }
            }}
          >
            <XIcon size={16} />
          </Button>
        </div>
      </div>
    </Panel>
  );
};
