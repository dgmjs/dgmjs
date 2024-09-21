import { Box } from "@dgmjs/core";
import { useState, useEffect } from "react";
import { TiptapEditor, DGMEditor, DGMEditorProps } from "@dgmjs/react";
import { Toggle } from "@/components/ui/toggle";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  PaletteIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ColorPalette, simplePalette } from "@/components/common/color-palette";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { DEFAULT_FONT_SIZE } from "@/const";

export function TextInplaceEditorToolbar({
  tiptapEditor,
  darkMode,
  shape,
}: {
  tiptapEditor: TiptapEditor;
  darkMode: boolean;
  shape: Box | null;
}) {
  const [state, setState] = useState({
    fontSize: DEFAULT_FONT_SIZE.toString(),
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    bulletList: false,
    orderedList: false,
    textAlign: "left",
  });

  useEffect(() => {
    tiptapEditor.on("transaction", (tr) => {
      setState({
        fontSize:
          tr.editor.getAttributes("textStyle").fontSize?.trim().slice(0, -2) ??
          shape?.fontSize.toString() ??
          DEFAULT_FONT_SIZE.toString(),
        bold: tr.editor.isActive("bold"),
        italic: tr.editor.isActive("italic"),
        underline: tr.editor.isActive("underline"),
        strike: tr.editor.isActive("strike"),
        bulletList: tr.editor.isActive("bulletList"),
        orderedList: tr.editor.isActive("orderedList"),
        textAlign: tr.editor.getAttributes("paragraph").textAlign || "left",
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-8 rounded-md p-0 gap-0 flex items-center bg-background drop-shadow-lg">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 px-2 border rounded-r-none"
          >
            <PaletteIcon size={16} />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          sideOffset={8}
          className="w-fit dark:bg-slate-950 z-[10000]"
        >
          <ColorPalette
            theme={darkMode ? "dark" : "light"}
            palette={simplePalette}
            onClick={(value: any) => {
              console.log(value);
              (tiptapEditor.chain().focus() as any).setColor(value).run();
            }}
          />
        </PopoverContent>
      </Popover>
      <Toggle
        className="w-8 h-8 px-2 border-y rounded-none"
        pressed={state.bold}
        onPressedChange={() =>
          (tiptapEditor.chain().focus() as any).toggleBold().run()
        }
      >
        <BoldIcon size={16} />
      </Toggle>
      <Toggle
        className="w-8 h-8 px-2 border-y rounded-none"
        pressed={state.italic}
        onPressedChange={() =>
          (tiptapEditor.chain().focus() as any).toggleItalic().run()
        }
      >
        <ItalicIcon size={16} />
      </Toggle>
      <Toggle
        className="w-8 h-8 px-2 border-y rounded-none"
        pressed={state.underline}
        onPressedChange={() =>
          (tiptapEditor.chain().focus() as any).toggleUnderline().run()
        }
      >
        <UnderlineIcon size={16} />
      </Toggle>
      <Toggle
        className="w-8 h-8 px-2 border-y rounded-none"
        pressed={state.strike}
        onPressedChange={() =>
          (tiptapEditor.chain().focus() as any).toggleStrike().run()
        }
      >
        <StrikethroughIcon size={16} />
      </Toggle>
      <Toggle
        className="w-8 h-8 px-2 border-l border-y rounded-none"
        pressed={state.bulletList}
        onPressedChange={() =>
          (tiptapEditor.chain().focus() as any).toggleBulletList().run()
        }
      >
        <ListIcon size={16} />
      </Toggle>
      <Toggle
        className="w-8 h-8 px-2 border-y rounded-none"
        pressed={state.orderedList}
        onPressedChange={() =>
          (tiptapEditor.chain().focus() as any).toggleOrderedList().run()
        }
      >
        <ListOrderedIcon size={16} />
      </Toggle>
      <ToggleGroup
        type="single"
        className="border-none h-8 gap-0"
        value={state.textAlign}
        onValueChange={(value) => {
          (tiptapEditor.chain().focus() as any).setTextAlign(value).run();
        }}
      >
        <ToggleGroupItem
          size="sm"
          value="left"
          className="w-8 h-8 px-2 border-l border-y rounded-none"
        >
          <AlignLeftIcon size={16} />
        </ToggleGroupItem>
        <ToggleGroupItem
          size="sm"
          value="center"
          className="w-8 h-8 px-2 border-y rounded-none"
        >
          <AlignCenterIcon size={16} />
        </ToggleGroupItem>
        <ToggleGroupItem
          size="sm"
          value="right"
          className="w-8 h-8 px-2 border-y rounded-none"
        >
          <AlignRightIcon size={16} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export const EditorWrapper: React.FC<DGMEditorProps> = ({
  darkMode = false,
  onMount,
  ...props
}) => {
  const [tiptapEditor, setTiptapEditor] = useState<any>(null);
  const [editingText, setEditingText] = useState<Box | null>(null);

  return (
    <>
      <DGMEditor
        onMount={(editor) => {
          if (onMount) onMount(editor);
        }}
        textInplaceEditorToolbar={
          <TextInplaceEditorToolbar
            darkMode={darkMode}
            tiptapEditor={tiptapEditor}
            shape={editingText}
          />
        }
        floatingToolbar={
          <div className="bg-foreground text-background px-3 shadow-sm h-10 rounded border flex items-center">
            Floating Toolbar
          </div>
        }
        onTextInplaceEditorMount={(tiptapEditor) => {
          setTiptapEditor(tiptapEditor);
        }}
        onTextInplaceEditorOpen={(shape) => {
          setEditingText(shape as Box);
        }}
        onFloatingToolbarMove={(onBelow: boolean) => {}}
        {...props}
      />
    </>
  );
};
