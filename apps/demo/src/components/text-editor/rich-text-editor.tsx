/* eslint-disable react-refresh/only-export-components */
import { useEditor, EditorContent } from "@tiptap/react";
import { Document } from "@tiptap/extension-document";
import { Text } from "@tiptap/extension-text";
import { Bold } from "@tiptap/extension-bold";
import { BulletList } from "@tiptap/extension-bullet-list";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { HardBreak } from "@tiptap/extension-hard-break";
import { History } from "@tiptap/extension-history";
import { Italic } from "@tiptap/extension-italic";
import { ListItem } from "@tiptap/extension-list-item";
import { OrderedList } from "@tiptap/extension-ordered-list";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Strike } from "@tiptap/extension-strike";
import { Underline } from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
// import { Color } from "@tiptap/extension-color";
import { ExtendedColor } from "./extended-color";
import { FontFamily } from "@tiptap/extension-font-family";
import { FontSize } from "tiptap-extension-font-size";
import { FontWeight } from "./tiptap-extension-font-weight";
import { TextAlign } from "@tiptap/extension-text-align";

const extensions = [
  Document,
  Text,
  Bold,
  BulletList,
  Dropcursor,
  HardBreak,
  History,
  Italic,
  ListItem,
  OrderedList,
  Paragraph,
  Strike,
  Underline,
  TextStyle,
  // Color,
  ExtendedColor,
  FontFamily,
  FontSize,
  FontWeight,
  TextAlign.configure({
    types: ["paragraph"],
  }),
];

/**
 * RichTextEditor allows forward 'ref'
 *
 * TODO:
 * - [x] font style (bold, italic)
 * - [x] underline, strikeout
 * - [x] list items (bullets, numbers)
 * - [x] font color
 * - [x] font family
 * - [x] font size
 * - [x] font weight (just bold, or weight values - 400, 500, 700, ...)
 * - [o] line height   --> css style issue
 * - [o] paragraph spacing  --> css style issue
 * - [x] text align (horizontal)
 * - [o] text align (vertical) --> css style issue (align editor in area)
 * - [ ] ? headings (markdown)
 * - [ ] ? quote (markdown)
 * - [ ] ? code (mono font)
 * - [ ] ? link (markdown)
 * - [ ] ? subscript, superscript
 * - [x] undo, redo
 * - [x] copy, cut, paste
 */
const RichTextEditor = ({
  editor,
  fontFamily,
  fontSize,
  fontColor,
  lineHeight = 1,
  paragraphSpacing = 1,
  vertAlign = "top",
  ...others
}: {
  editor: any;
  fontFamily: string;
  fontSize: number;
  fontColor: string;
  lineHeight: number;
  paragraphSpacing: number;
  vertAlign: string;
  onBlur: any;
  onKeyDown: any;
}) => {
  let alignItems = "start";
  if (vertAlign === "top") alignItems = "start";
  if (vertAlign === "middle") alignItems = "center";
  if (vertAlign === "bottom") alignItems = "end";

  return (
    <>
      <style>
        {`.RichTextEditor {
            display: flex;
            align-items: ${alignItems};
          }
          .RichTextEditor > .ProseMirror {
            outline: none;
            word-break: keep-all;
            width: 100%;
          }
          .RichTextEditor > .ProseMirror p {
            display: block;
          }
          .RichTextEditor > .ProseMirror ul {
            list-style-type: "• ";
            padding-inline-start: 1.5em;
          }
          .RichTextEditor > .ProseMirror ol {
            list-style-type: decimal;
            padding-inline-start: 1.5em;
          }
          .RichTextEditor .ProseMirror p,
          .RichTextEditor .ProseMirror ul,
          .RichTextEditor .ProseMirror ol {
            margin-block-end: 0px;
            margin-block-end: ${paragraphSpacing}em;
        }`}
      </style>
      <EditorContent
        // ref={ref}
        editor={editor}
        className="RichTextEditor"
        style={{
          width: "100%",
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: fontColor,
          lineHeight: lineHeight,
        }}
        {...others}
      />
    </>
  );
};
RichTextEditor.displayName = "RichTextEditor";

export { useEditor, extensions, RichTextEditor };
