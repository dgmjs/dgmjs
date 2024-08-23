import React from "react";
import { Panel } from "../common/panel";
import { Button } from "@/components/ui/button";
import {
  AlignCenterHorizontalIcon,
  AlignCenterVerticalIcon,
  AlignEndHorizontalIcon,
  AlignEndVerticalIcon,
  AlignHorizontalSpaceAroundIcon,
  AlignStartHorizontalIcon,
  AlignStartVerticalIcon,
  AlignVerticalSpaceAroundIcon,
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
              title="Bring to front"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.bringToFront()}
            >
              <AlignBringToFrontIcon size={16} />
            </Button>
            <Button
              title="Bring forward"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.bringForward()}
            >
              <AlignBringForwardIcon size={16} />
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button
              title="Align left"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.alignLeft()}
            >
              <AlignStartVerticalIcon size={16} />
            </Button>
            <Button
              title="Align center"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.alignCenter()}
            >
              <AlignCenterVerticalIcon size={16} />
            </Button>
            <Button
              title="Align right"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.alignRight()}
            >
              <AlignEndVerticalIcon size={16} />
            </Button>
            <Button
              title="Align horizontal space around"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.alignHorizontalSpaceAround()}
            >
              <AlignHorizontalSpaceAroundIcon size={16} />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              title="Send to back"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.sendToBack()}
            >
              <AlignSendToBackIcon size={16} />
            </Button>
            <Button
              title="Send backward"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.sendBackward()}
            >
              <AlignSendBackwardIcon size={16} />
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button
              title="Align top"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.alignTop()}
            >
              <AlignStartHorizontalIcon size={16} />
            </Button>
            <Button
              title="Align center"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.alignMiddle()}
            >
              <AlignCenterHorizontalIcon size={16} />
            </Button>
            <Button
              title="Align bottom"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.alignBottom()}
            >
              <AlignEndHorizontalIcon size={16} />
            </Button>
            <Button
              title="Align vertical space around"
              variant="outline"
              size="icon"
              className="w-7 h-7"
              onClick={() => window.editor.actions.alignVerticalSpaceAround()}
            >
              <AlignVerticalSpaceAroundIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Panel>
  );
};
