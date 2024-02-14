/*
 * Copyright (c) 2023 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import { RichTextInplaceEditor, constants } from "@dgmjs/core";
import { useEffect, useState } from "react";
import { Toggle } from "./ui/toggle";
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
import { Button } from "./ui/button";
import { ColorPalette, simplePalette } from "./common/color-palette";
import { useDemoStore } from "@/store";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export function RichTextInplaceEditorToolbar({
  inplaceEditor,
}: {
  inplaceEditor: RichTextInplaceEditor;
}) {
  const demoStore = useDemoStore();

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
    inplaceEditor.tiptapEditor.on("transaction", (tr) => {
      setState({
        fontSize:
          tr.editor.getAttributes("textStyle").fontSize?.trim().slice(0, -2) ??
          inplaceEditor.box?.fontSize.toString() ??
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
            theme={demoStore.theme}
            palette={simplePalette}
            onClick={(value) => {
              (inplaceEditor.tiptapEditor.chain().focus() as any)
                .setColor(value)
                .run();
            }}
          />
        </PopoverContent>
      </Popover>
      <Select
        value={state.fontSize}
        onValueChange={(value) => {
          inplaceEditor.tiptapEditor
            .chain()
            .focus()
            .setFontSize(`${value}px`)
            .run();
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
          inplaceEditor.tiptapEditor.chain().focus().toggleBold().run()
        }
      >
        <BoldIcon size={16} />
      </Toggle>
      <Toggle
        className="w-8 h-8 px-2 border-y rounded-none"
        pressed={state.italic}
        onPressedChange={() =>
          inplaceEditor.tiptapEditor.chain().focus().toggleItalic().run()
        }
      >
        <ItalicIcon size={16} />
      </Toggle>
      <Toggle
        className="w-8 h-8 px-2 border-y rounded-none"
        pressed={state.underline}
        onPressedChange={() =>
          inplaceEditor.tiptapEditor.chain().focus().toggleUnderline().run()
        }
      >
        <UnderlineIcon size={16} />
      </Toggle>
      <Toggle
        className="w-8 h-8 px-2 border-y rounded-none"
        pressed={state.strike}
        onPressedChange={() =>
          inplaceEditor.tiptapEditor.chain().focus().toggleStrike().run()
        }
      >
        <StrikethroughIcon size={16} />
      </Toggle>
      <Toggle
        className="w-8 h-8 px-2 border-l border-y rounded-none"
        pressed={state.bulletList}
        onPressedChange={() =>
          inplaceEditor.tiptapEditor.chain().focus().toggleBulletList().run()
        }
      >
        <ListIcon size={16} />
      </Toggle>
      <Toggle
        className="w-8 h-8 px-2 border-y rounded-none"
        pressed={state.orderedList}
        onPressedChange={() =>
          inplaceEditor.tiptapEditor.chain().focus().toggleOrderedList().run()
        }
      >
        <ListOrderedIcon size={16} />
      </Toggle>
      <ToggleGroup
        type="single"
        className="border-none h-8 gap-0"
        value={state.textAlign}
        onValueChange={(value) => {
          inplaceEditor.tiptapEditor.chain().focus().setTextAlign(value).run();
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
