/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
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

import { useEffect, useRef, useState } from "react";
import { geometry, Box, type ShapeValues } from "@dgmjs/core";
import { useEditor, extensions, RichTextEditor } from "./rich-text-editor";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { moveToAboveOrBelow } from "../../utils";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { constants, convertDocToText, preprocessDocNode } from "@dgmjs/core";
import { ColorPalette, simplePalette } from "../common/color-palette";
import { Button } from "@/components/ui/button";
import { useDemoStore } from "@/store";

/**
 * TODO:
 * - [ ] ordered-list
 * - [ ] numbered-list
 * - [ ] font family, size, color
 */
interface TextEditorProps {
  text: Box;
  onChange: (values: ShapeValues) => void;
}

export function TextEditor({ text, onChange, ...props }: TextEditorProps) {
  const { theme, setSelections, scale } = useDemoStore();
  const [editingText, setEditingText] = useDemoStore((state) => [
    state.editingText,
    state.setEditingText,
  ]);
  const [position, setPosition] = useState("above");

  const containerRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const textString = convertDocToText(editingText?.text).trim();

  const editor = useEditor({
    extensions,
    content: textString.length > 0 ? editingText?.text : "",
    onTransaction: (tr: any) => {
      // expand editor width if text width is larger than current width
      if (
        editor &&
        editingText &&
        containerRef.current &&
        toolbarRef.current &&
        window.editor
      ) {
        const canvas = window.editor.canvas;
        const doc = preprocessDocNode(
          canvas,
          editor.getJSON(),
          editingText,
          editingText.wordWrap, // word wrap
          editingText.innerWidth,
          1.5
        );
        const rect = getRect(editingText);
        const currentWidth = geometry.width(rect) * (1 / scale);
        const padding = editingText.padding;
        const pl = padding[0];
        const pr = padding[2];
        let width = doc._width + pl + pr;
        if (width < 2) width = 2; // min width (to show cursor)
        if (width > currentWidth) {
          containerRef.current.style.width = `${width}px`;
        }
      }
    },
  });

  const getRect = (box: Box) => {
    const canvas = window.editor.canvas;
    return box.getBoundingRect().map((p) => {
      const tp = canvas.globalCoordTransform(p);
      return [tp[0] / canvas.ratio, tp[1] / canvas.ratio];
    });
  };

  useEffect(() => {
    if (containerRef.current && toolbarRef.current && editor && window.editor) {
      const canvas = window.editor.canvas;
      const diagram = window.editor.state.diagram;
      window.editor.state.selections.deselectAll();

      if (diagram && canvas) {
        const visible = editingText instanceof Box;
        containerRef.current.style.display = visible ? "flex" : "none";
        if (visible) {
          // disable shape's text rendering
          editingText._renderText = false;
          window.editor.repaint();

          const rect = getRect(editingText);

          // set container styles
          const padding = editingText.padding;
          containerRef.current.style.paddingTop = `${padding[0]}px`;
          containerRef.current.style.paddingRight = `${padding[1]}px`;
          containerRef.current.style.paddingBottom = `${padding[2]}px`;
          containerRef.current.style.paddingLeft = `${padding[3]}px`;

          // move container position
          const canvasRect =
            window.editor.canvasElement.getBoundingClientRect();
          const width = geometry.width(rect) * (1 / scale);
          const height = geometry.height(rect) * (1 / scale);
          const left = rect[0][0] - (width * (1 - scale)) / 2 + canvasRect.left;
          const top = rect[0][1] - (height * (1 - scale)) / 2 + canvasRect.top;

          containerRef.current.style.left = `${left}px`;
          containerRef.current.style.top = `${top}px`;
          containerRef.current.style.width = `${width}px`;
          containerRef.current.style.height = `${height}px`;
          containerRef.current.style.transform = `scale(${scale})`;

          // move toolbar position
          const r = containerRef.current.getBoundingClientRect();
          const containerRect = [
            [r.left, r.top],
            [r.right, r.bottom],
          ];
          const isBelow = moveToAboveOrBelow(
            toolbarRef.current,
            containerRect,
            32
          );
          setPosition(isBelow ? "below" : "above");

          const textString = convertDocToText(editingText.text).trim();
          if (textString.length > 0) {
            editor?.commands?.setContent(editingText.text);
          }

          editor?.commands?.focus();
          if (textString.length === 0) {
            editor?.commands?.setTextAlign(editingText.horzAlign);
          }
          editor?.commands?.selectAll();
        }
      }
    }
  }, [editingText, editor, scale, setSelections]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") applyChanges();
  };

  const applyChanges = () => {
    // enable shape's text rendering
    if (editingText) editingText._renderText = true;
    window.editor.repaint();
    // apply changes
    if (onChange) onChange({ text: editor?.getJSON() });
    setEditingText(null);
    window.editor.state.selections.deselectAll();
  };

  if (!editingText || !editor) return <></>;

  return (
    <>
      <div className="fixed inset-0" onPointerDown={() => applyChanges()} />
      <div ref={containerRef} className="absolute" {...props}>
        <RichTextEditor
          fontFamily={editingText.fontFamily}
          fontSize={editingText.fontSize}
          fontColor={
            window.editor
              ? window.editor.canvas.resolveColor(editingText.fontColor)
              : "$foreground"
          }
          lineHeight={editingText.lineHeight}
          paragraphSpacing={editingText.paragraphSpacing}
          vertAlign={editingText.vertAlign}
          editor={editor}
          onBlur={() => {}}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div ref={toolbarRef} className="absolute">
        <div className="h-8 rounded-md p-0 gap-0 flex items-center bg-background">
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
              side={position === "above" ? "top" : "bottom"}
              sideOffset={8}
              className="w-fit dark:bg-slate-950"
            >
              <ColorPalette
                theme={theme}
                palette={simplePalette}
                onClick={(value) => {
                  (editor?.chain().focus() as any).setColor(value).run();
                }}
              />
            </PopoverContent>
          </Popover>
          <Select
            value={
              editor
                ?.getAttributes("textStyle")
                .fontSize?.trim()
                .slice(0, -2) ?? constants.DEFAULT_FONT_SIZE.toString()
            }
            onValueChange={(value) => {
              editor?.chain().focus().setFontSize(`${value}px`).run();
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
          {/* <ToggleGroup
            type="single"
            value={editor?.getAttributes("textStyle").fontFamily}
            onValueChange={(value) => {
              editor?.chain().focus().setFontFamily(value).run();
            }}
            className="h-8 border-none"
          >
            <SimpleTooltip content="Sans">
              <ToggleGroupItem size="sm" value="Inter" className="w-8 h-8 border-y">
                <Label className="font-normal font-sans text-base">M</Label>
              </ToggleGroupItem>
            </SimpleTooltip>
            <SimpleTooltip content="Mono">
              <ToggleGroupItem
                size="sm"
                value="IBM Plex Mono"
                className="w-8 h-8 border-y"
              >
                <Label className="font-normal font-mono text-base">M</Label>
              </ToggleGroupItem>
            </SimpleTooltip>
            <SimpleTooltip content="Serif">
              <ToggleGroupItem
                size="sm"
                value="Source Serif Pro"
                className="w-8 h-8 border-y"
              >
                <Label className="font-normal font-serif text-base">M</Label>
              </ToggleGroupItem>
            </SimpleTooltip>
            <SimpleTooltip content="Handwriting">
              <ToggleGroupItem
                size="sm"
                value="Gloria Hallelujah"
                className="w-8 h-8 border-y"
              >
                <Label className="font-normal font-hand text-base">M</Label>
              </ToggleGroupItem>
            </SimpleTooltip>
          </ToggleGroup> */}
          <Toggle
            className="w-8 h-8 px-2 border-y rounded-none"
            pressed={editor?.isActive("bold") ?? false}
            onPressedChange={() => editor?.chain().focus().toggleBold().run()}
          >
            <BoldIcon size={16} />
          </Toggle>
          <Toggle
            className="w-8 h-8 px-2 border-y rounded-none"
            pressed={editor?.isActive("italic") ?? false}
            onPressedChange={() => editor?.chain().focus().toggleItalic().run()}
          >
            <ItalicIcon size={16} />
          </Toggle>
          <Toggle
            className="w-8 h-8 px-2 border-y rounded-none"
            pressed={editor?.isActive("underline") ?? false}
            onPressedChange={() =>
              editor?.chain().focus().toggleUnderline().run()
            }
          >
            <UnderlineIcon size={16} />
          </Toggle>
          <Toggle
            className="w-8 h-8 px-2 border-y rounded-none"
            pressed={editor?.isActive("strike") ?? false}
            onPressedChange={() => editor?.chain().focus().toggleStrike().run()}
          >
            <StrikethroughIcon size={16} />
          </Toggle>
          <Toggle
            className="w-8 h-8 px-2 border-l border-y rounded-none"
            pressed={editor?.isActive("bulletList") ?? false}
            onPressedChange={() =>
              editor?.chain().focus().toggleBulletList().run()
            }
          >
            <ListIcon size={16} />
          </Toggle>
          <Toggle
            className="w-8 h-8 px-2 border-y rounded-none"
            pressed={editor?.isActive("orderedList") ?? false}
            onPressedChange={() =>
              editor?.chain().focus().toggleOrderedList().run()
            }
          >
            <ListOrderedIcon size={16} />
          </Toggle>
          <ToggleGroup
            type="single"
            className="border-none h-8"
            value={editor?.getAttributes("paragraph").textAlign || "left"}
            onValueChange={(value) => {
              editor?.chain().focus().setTextAlign(value).run();
            }}
          >
            <ToggleGroupItem
              size="sm"
              value="left"
              className="w-8 h-8 border-l border-y rounded-none"
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
      </div>
    </>
  );
}
