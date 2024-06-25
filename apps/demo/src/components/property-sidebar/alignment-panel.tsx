import React from "react";
import { Panel } from "../common/panel";
import { Button } from "@/components/ui/button";
import {
  AlignCenterHorizontalIcon,
  AlignCenterVerticalIcon,
  AlignEndHorizontalIcon,
  AlignEndVerticalIcon,
  AlignStartHorizontalIcon,
  AlignStartVerticalIcon,
} from "lucide-react";
import {
  AlignBringForwardIcon,
  AlignBringToFrontIcon,
  AlignSendBackwardIcon,
  AlignSendToBackIcon,
} from "@/components/icons";
import { ShapeEditorProps } from "@/types";

export const AlignmentPanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  return (
    <Panel title="Alignment" borderTop>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignLeft()}
            >
              <AlignStartVerticalIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignCenter()}
            >
              <AlignCenterVerticalIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignRight()}
            >
              <AlignEndVerticalIcon size={16} />
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.bringToFront()}
            >
              <AlignBringToFrontIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.bringForward()}
            >
              <AlignBringForwardIcon size={16} />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignTop()}
            >
              <AlignStartHorizontalIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignMiddle()}
            >
              <AlignCenterHorizontalIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignBottom()}
            >
              <AlignEndHorizontalIcon size={16} />
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.sendToBack()}
            >
              <AlignSendToBackIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.sendBackward()}
            >
              <AlignSendBackwardIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Panel>
  );
};
