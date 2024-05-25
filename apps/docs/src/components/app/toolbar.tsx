import type { Editor } from "@dgmjs/core";
import {
  CircleIcon,
  HandIcon,
  HighlighterIcon,
  ImageIcon,
  MousePointer2Icon,
  PencilIcon,
  SlashIcon,
  SplineIcon,
  SquareIcon,
  TypeIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

interface ToolItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

function ToolItem({ active = false, children, ...props }: ToolItemProps) {
  return (
    <button
      className={[
        "hover:bg-slate-100 w-8 h-8 flex items-center justify-center rounded",
        active ? "bg-slate-100" : "bg-transparent",
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

function Separator() {
  return <div className="border-l"></div>;
}

interface ToolbarProps {
  editor: Editor | null;
}

export function Toolbar({ editor }: ToolbarProps) {
  const [handler, setHandler] = useState<string>("Select");

  useEffect(() => {
    editor?.onActiveHandlerChange.addListener((handler) => setHandler(handler));
  }, [editor]);

  return (
    <div className="absolute bottom-4 w-full flex justify-center items-center pointer-events-none">
      <div className="flex gap-1 border p-1 rounded-md pointer-events-auto bg-white drop-shadow">
        <ToolItem
          title="Select"
          active={handler === "Select"}
          onClick={() => editor?.activateHandler("Select")}
        >
          <MousePointer2Icon className="w-4 h-4" />
        </ToolItem>
        <ToolItem
          title="Hand"
          active={handler === "Hand"}
          onClick={() => editor?.activateHandler("Hand")}
        >
          <HandIcon className="w-4 h-4" />
        </ToolItem>
        <Separator />
        <ToolItem
          title="Rectangle"
          active={handler === "Rectangle"}
          onClick={() => editor?.activateHandler("Rectangle")}
        >
          <SquareIcon className="w-4 h-4" />
        </ToolItem>
        <ToolItem
          title="Ellipse"
          active={handler === "Ellipse"}
          onClick={() => editor?.activateHandler("Ellipse")}
        >
          <CircleIcon className="w-4 h-4" />
        </ToolItem>
        <ToolItem
          title="Text"
          active={handler === "Text"}
          onClick={() => editor?.activateHandler("Text")}
        >
          <TypeIcon className="w-4 h-4" />
        </ToolItem>
        <ToolItem
          title="Image"
          active={handler === "Image"}
          onClick={() => editor?.activateHandler("Image")}
        >
          <ImageIcon className="w-4 h-4" />
        </ToolItem>
        <Separator />
        <ToolItem
          title="Line"
          active={handler === "Line"}
          onClick={() => editor?.activateHandler("Line")}
        >
          <SlashIcon className="w-4 h-4" />
        </ToolItem>
        <ToolItem
          title="Connector"
          active={handler === "Connector"}
          onClick={() => editor?.activateHandler("Connector")}
        >
          <SplineIcon className="w-4 h-4" />
        </ToolItem>
        <ToolItem
          title="Freehand"
          active={handler === "Freehand"}
          onClick={() => editor?.activateHandler("Freehand")}
        >
          <PencilIcon className="w-4 h-4" />
        </ToolItem>
        <ToolItem
          title="Highlighter"
          active={handler === "Highlighter"}
          onClick={() => editor?.activateHandler("Highlighter")}
        >
          <HighlighterIcon className="w-4 h-4" />
        </ToolItem>
      </div>
    </div>
  );
}
