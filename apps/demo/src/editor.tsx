import { Box, Editor } from "@dgmjs/core";
import { useState, useEffect } from "react";
import {
  DGMEditor,
  DGMEditorProps,
  DGMPlainTextInplaceEditor,
  DGMRichTextInplaceEditor,
  TiptapEditor,
} from "@dgmjs/react";
import { constants } from "@dgmjs/core";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ColorPalette, simplePalette } from "@/components/common/color-palette";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function RichTextInplaceEditorToolbar({
  tiptapEditor,
  theme,
  shape,
}: {
  tiptapEditor: TiptapEditor;
  theme: "light" | "dark";
  shape: Box | null;
}) {
  const [state, setState] = useState({
    fontSize: constants.DEFAULT_FONT_SIZE.toString(),
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
          constants.DEFAULT_FONT_SIZE.toString(),
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
        <PopoverContent sideOffset={8} className="w-fit dark:bg-slate-950">
          <ColorPalette
            theme={theme}
            palette={simplePalette}
            onClick={(value: any) => {
              (tiptapEditor.chain().focus() as any).setColor(value).run();
            }}
          />
        </PopoverContent>
      </Popover>
      <Select
        value={state.fontSize}
        onValueChange={(value) => {
          (tiptapEditor.chain().focus() as any).setFontSize(`${value}px`).run();
        }}
      >
        <SelectTrigger className="w-[72px] h-8 border border-l-0 rounded-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="12">12</SelectItem>
          <SelectItem value="14">14</SelectItem>
          <SelectItem value="16">16</SelectItem>
          <SelectItem value="18">18</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="24">24</SelectItem>
          <SelectItem value="30">30</SelectItem>
          <SelectItem value="36">36</SelectItem>
          <SelectItem value="48">48</SelectItem>
          <SelectItem value="60">60</SelectItem>
          <SelectItem value="72">72</SelectItem>
          <SelectItem value="96">96</SelectItem>
          <SelectItem value="128">128</SelectItem>
        </SelectContent>
      </Select>
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

interface EditorWrapperProps extends DGMEditorProps {
  theme: "light" | "dark";
}

export const EditorWrapper: React.FC<EditorWrapperProps> = ({
  theme,
  onMount,
  ...props
}) => {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [tiptapEditor, setTiptapEditor] = useState<any>(null);
  const [editingText, setEditingText] = useState<Box | null>(null);

  return (
    <>
      <DGMEditor
        onMount={(editor) => {
          setEditor(editor);
          if (onMount) onMount(editor);
        }}
        {...props}
      >
        <DGMPlainTextInplaceEditor editor={editor as Editor} />
        <DGMRichTextInplaceEditor
          onMount={(tiptapEditor) => {
            setTiptapEditor(tiptapEditor);
          }}
          onOpen={(shape) => {
            setEditingText(shape as Box);
          }}
          editor={editor as Editor}
          toolbar={
            <RichTextInplaceEditorToolbar
              theme={theme}
              tiptapEditor={tiptapEditor}
              shape={editingText}
            />
          }
        />
      </DGMEditor>
    </>
  );
};
