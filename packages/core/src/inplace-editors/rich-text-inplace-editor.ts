import { Editor, InplaceEditor } from "../editor";
import { Box, Shape, Text as TextShape } from "../shapes";
import * as geometry from "../graphics/geometry";
import { convertDocToText, preprocessDocNode } from "../utils/text-utils";
import { Editor as TiptapEditor } from "@tiptap/core";
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
import { ExtendedColor } from "./tiptap-extension-extended-color";
import { FontFamily } from "@tiptap/extension-font-family";
import { FontSize } from "tiptap-extension-font-size";
import { FontWeight } from "./tiptap-extension-font-weight";
import { TextAlign } from "@tiptap/extension-text-align";

/**
 * Rich text inplace editor
 */
export class RichTextInplaceEditor extends InplaceEditor {
  box: Box | null;
  overlay: HTMLDivElement;
  editorHolder: HTMLDivElement;
  editorStyle: HTMLStyleElement;
  toolbarHolder: HTMLDivElement;
  tiptapEditor: TiptapEditor;

  constructor(options?: { toolbarElement?: HTMLDivElement }) {
    super();
    this.box = null;
    this.overlay = document.createElement("div");
    this.editorHolder = document.createElement("div");
    this.editorStyle = document.createElement("style");
    this.toolbarHolder = document.createElement("div");
    this.toolbarHolder.setAttribute("id", "rich-text-inplace-editor-toolbar");
    document.body.appendChild(this.overlay);
    if (options?.toolbarElement) {
      this.toolbarHolder.appendChild(options.toolbarElement);
    }

    this.tiptapEditor = new TiptapEditor({
      element: this.editorHolder,
      extensions: [
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
      ],
      content: "",
    });
  }

  setPositionSize(editor: Editor, text: Box) {
    if (this.box) {
      // set container styles
      const padding = text.padding;
      this.editorHolder.style.paddingTop = `${padding[0]}px`;
      this.editorHolder.style.paddingRight = `${padding[1]}px`;
      this.editorHolder.style.paddingBottom = `${padding[2]}px`;
      this.editorHolder.style.paddingLeft = `${padding[3]}px`;

      // move editor holder position
      const rect = this.box.getBoundingRectInCanvasElement(editor.canvas);
      const scale = editor.getScale();
      const width = geometry.width(rect);
      const height = geometry.height(rect);
      const left = rect[0][0];
      const top = rect[0][1];

      this.editorHolder.style.left = `${left}px`;
      this.editorHolder.style.top = `${top}px`;
      this.editorHolder.style.width = `${width}px`;
      this.editorHolder.style.height = `${height}px`;
      this.editorHolder.style.transform = `scale(${scale})`;

      // move toolbar position
      const isBelow = moveToAboveOrBelow(editor, this.toolbarHolder, rect, 32);
    }
  }

  setup(editor: Editor) {
    // overlay
    this.overlay.style.position = "fixed";
    this.overlay.style.inset = "0";
    this.overlay.style.display = "none";
    this.overlay.addEventListener("pointerdown", (e) => {
      this.close(editor);
    });

    // tiptap editor holder
    this.editorHolder.setAttribute("id", "rich-text-inplace-editor");
    this.editorHolder.style.position = "absolute";
    this.editorHolder.style.background = "transparent";
    this.editorHolder.style.left = "100px";
    this.editorHolder.style.top = "100px";
    this.editorHolder.style.width = "100px";
    this.editorHolder.style.height = "100px";
    this.editorHolder.style.zIndex = "10";
    this.editorHolder.style.outline = "none";
    this.editorHolder.style.resize = "none";
    this.editorHolder.style.overflow = "hidden";
    this.editorHolder.style.whiteSpace = "nowrap";
    this.editorHolder.style.display = "none";
    editor.canvasElement.parentElement?.appendChild(this.editorHolder);
    editor.canvasElement.parentElement?.appendChild(this.editorStyle);

    // toolbar
    this.toolbarHolder.style.position = "absolute";
    this.toolbarHolder.style.background = "transparent";
    this.toolbarHolder.style.zIndex = "10";
    this.toolbarHolder.style.outline = "none";
    this.toolbarHolder.style.display = "none";
    editor.canvasElement.parentElement?.appendChild(this.toolbarHolder);

    this.tiptapEditor.on("transaction", (tr) => {
      if (this.box) {
        const canvas = editor.canvas;
        const doc = preprocessDocNode(
          canvas,
          this.tiptapEditor.getJSON(),
          this.box,
          this.box.wordWrap, // word wrap
          this.box.innerWidth,
          1.5
        );
        const rect = this.box.getBoundingRectInCanvasElement(editor.canvas);
        const currentWidth = geometry.width(rect);
        const padding = this.box.padding;
        const pl = padding[0];
        const pr = padding[2];
        let width = doc._width + pl + pr;
        if (width < 2) width = 2; // min width (to show cursor)
        if (width > currentWidth) {
          this.editorHolder.style.width = `${width}px`;
        }
      }
    });
    this.tiptapEditor.view.dom.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close(editor);
    });
  }

  active(editor: Editor, shape: Shape): boolean {
    return (
      shape instanceof Box && shape.textEditable && shape.richText === true
    );
  }

  open(editor: Editor, shape: Shape) {
    if (shape instanceof Box) {
      this.box = shape;
      this.overlay.style.display = "block";

      let alignItems = "start";
      if (shape.vertAlign === "top") alignItems = "start";
      if (shape.vertAlign === "middle") alignItems = "center";
      if (shape.vertAlign === "bottom") alignItems = "end";
      let paragraphSpacing = shape.paragraphSpacing;
      this.editorStyle.textContent = `
      #rich-text-inplace-editor {
        display: flex;
        align-items: ${alignItems};
      }
      #rich-text-inplace-editor > .ProseMirror {
        outline: none;
        word-break: keep-all;
        width: 100%;
      }
      #rich-text-inplace-editor > .ProseMirror p {
        display: block;
      }
      #rich-text-inplace-editor > .ProseMirror ul {
        list-style-type: "• ";
        padding-inline-start: 1.5em;
      }
      #rich-text-inplace-editor > .ProseMirror ol {
        list-style-type: decimal;
        padding-inline-start: 1.5em;
      }
      #rich-text-inplace-editor .ProseMirror p,
      #rich-text-inplace-editor .ProseMirror ul,
      #rich-text-inplace-editor .ProseMirror ol {
        margin-block-end: 0px;
        margin-block-end: ${paragraphSpacing}em;
      }    
    `;

      this.editorHolder.style.display = "flex";
      this.editorHolder.style.lineHeight = `${shape.lineHeight}em`;
      this.editorHolder.style.fontFamily = shape.fontFamily;
      this.editorHolder.style.fontSize = `${shape.fontSize}px`;
      this.editorHolder.style.color = editor.canvas.resolveColor(
        shape.fontColor
      );
      this.editorHolder.style.textAlign = shape.horzAlign;
      const padding = shape.padding;
      this.editorHolder.style.paddingTop = `${padding[0]}px`;
      this.editorHolder.style.paddingRight = `${padding[1]}px`;
      this.editorHolder.style.paddingBottom = `${padding[2]}px`;
      this.editorHolder.style.paddingLeft = `${padding[3]}px`;

      this.toolbarHolder.style.display = "block";

      // disable shape's text rendering
      shape._renderText = false;
      editor.repaint();

      // set position and size
      this.setPositionSize(editor, shape);

      // assign text to tiptap editor
      this.tiptapEditor.commands.setContent(shape.text);
      this.tiptapEditor.commands.focus();
      this.tiptapEditor.commands.selectAll();
    }
  }

  close(editor: Editor) {
    this.overlay.style.display = "none";
    this.editorHolder.style.display = "none";
    this.toolbarHolder.style.display = "none";
    if (this.box instanceof Box) {
      this.box._renderText = true;
      const value = this.tiptapEditor.getJSON();
      const valueString = convertDocToText(value).trim();
      if (this.box instanceof TextShape && valueString.length === 0) {
        editor.actions.delete_([this.box]);
      } else {
        editor.actions.update({ text: value }, [this.box]);
      }
      editor.repaint();
    }
    this.box = null;
  }
}

const SCREEN_LEFT_MARGIN = 16;
const SCREEN_TOP_MARGIN = 16;
const SCREEN_RIGHT_MARGIN = 16;
const SCREEN_BOTTOM_MARGIN = 16;

/**
 * Set element position above or below near a given rectangle
 * 1. if the rect is below than screen center, place element above the rect
 * 2. if the rect is above than screen center, place element below the rect
 * 3. keep margin
 * @param element element to position
 * @param rect
 * @return true if position is below, false otherwise
 */
export function moveToAboveOrBelow(
  editor: Editor,
  element: HTMLElement,
  rect: number[][],
  gap: number = 46
): boolean {
  const canvasWidth = editor.canvasElement?.offsetWidth || 0;
  const canvasHeight = editor.canvasElement?.offsetHeight || 0;

  const cp = geometry.center(rect);
  const h = geometry.height(rect) * editor.getScale();
  const isBelow = cp[1] < canvasHeight / 2;
  let x = cp[0];
  let y = isBelow ? cp[1] + h / 2 + gap : cp[1] - h / 2 - gap; // below or above

  const ew = element.offsetWidth;
  const eh = element.offsetHeight;

  console.log(
    "x",
    x,
    "y",
    y,
    element.offsetTop,
    element.offsetTop + element.offsetHeight
  );

  if (x - ew / 2 < 0) {
    x = ew / 2 + SCREEN_LEFT_MARGIN;
  }
  if (x + ew / 2 > canvasWidth) {
    x = canvasWidth - ew / 2 - SCREEN_RIGHT_MARGIN;
  }
  if (y - eh / 2 < 0) {
    y = eh / 2 + SCREEN_TOP_MARGIN;
  }
  if (y + eh / 2 > canvasHeight) {
    y = canvasHeight - eh / 2 - SCREEN_BOTTOM_MARGIN;
  }
  element.style.left = `${x - ew / 2}px`;
  element.style.top = `${y - eh / 2}px`;
  return isBelow;
}
