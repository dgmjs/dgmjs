import {
  CircleIcon,
  EraserIcon,
  FrameIcon,
  HandIcon,
  HighlighterIcon,
  ImageIcon,
  LockIcon,
  MousePointer2Icon,
  Pencil,
  ScanIcon,
  SmileIcon,
  SquareCodeIcon,
  SquareIcon,
  TypeIcon,
} from "lucide-react";
import { ConnectorIcon, LineIcon } from "@/components/icons";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import { useDemoStore } from "@/demo-store";

interface PaletteItemProps {
  handlerId: string;
  children: React.ReactNode;
}

function PaletteItem({ handlerId, children }: PaletteItemProps) {
  const activeHandler = useDemoStore((state) => state.activeHandler);

  const handleToggleChange = (pressed: boolean) => {
    if (pressed) {
      window.editor.activateHandler(handlerId);
    }
  };

  return (
    <Toggle
      size="sm"
      title={handlerId}
      pressed={activeHandler === handlerId}
      onPressedChange={handleToggleChange}
      className="w-8 h-8 p-0 dark:hover:bg-slate-700"
    >
      {children}
    </Toggle>
  );
}

export function PaletteToolbar() {
  const { activeHandlerLock } = useDemoStore();
  return (
    <div className="absolute bottom-4 inset-x-0 flex items-center justify-center">
      <div className="flex justify-center items-center h-10 bg-background border rounded-lg px-1 gap-0.5">
        <Toggle
          size="sm"
          pressed={activeHandlerLock}
          onPressedChange={(lock) => {
            window.editor.setActiveHandlerLock(lock);
          }}
        >
          <LockIcon size={16} />
        </Toggle>
        <Separator orientation="vertical" className="dark:bg-gray-700 mx-0.5" />
        <PaletteItem handlerId="Select">
          <MousePointer2Icon size={16} />
        </PaletteItem>
        <PaletteItem handlerId="Hand">
          <HandIcon size={16} />
        </PaletteItem>
        <PaletteItem handlerId="Eraser">
          <EraserIcon size={16} />
        </PaletteItem>
        <Separator orientation="vertical" className="dark:bg-gray-700 mx-0.5" />
        <PaletteItem handlerId="Rectangle">
          <SquareIcon size={16} />
        </PaletteItem>
        <PaletteItem handlerId="Ellipse">
          <CircleIcon size={16} />
        </PaletteItem>
        <PaletteItem handlerId="Text">
          <TypeIcon size={16} />
        </PaletteItem>
        <PaletteItem handlerId="Image">
          <ImageIcon size={16} />
        </PaletteItem>
        <Separator orientation="vertical" className="dark:bg-gray-700 mx-0.5" />
        <PaletteItem handlerId="Connector">
          <ConnectorIcon size={16} />
        </PaletteItem>
        <PaletteItem handlerId="Line">
          <LineIcon size={16} />
        </PaletteItem>
        <PaletteItem handlerId="Freehand">
          <Pencil size={16} />
        </PaletteItem>
        <PaletteItem handlerId="Highlighter">
          <HighlighterIcon size={16} />
        </PaletteItem>
        <Separator orientation="vertical" className="dark:bg-gray-700 mx-0.5" />
        <PaletteItem handlerId="Icon">
          <SmileIcon size={16} />
        </PaletteItem>
        <PaletteItem handlerId="Frame">
          <FrameIcon size={16} />
        </PaletteItem>
        <PaletteItem handlerId="Embed">
          <ScanIcon size={16} />
        </PaletteItem>
      </div>
    </div>
  );
}
