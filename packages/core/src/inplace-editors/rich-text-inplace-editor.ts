import { Editor, InplaceEditor } from "../editor";
import { Box, Shape } from "../shapes";
import * as geometry from "../graphics/geometry";
import { measureText, preprocessDocNode } from "../utils/text-utils";
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
  tipTapEditor: TiptapEditor;

  constructor() {
    super();
    this.box = null;
    this.overlay = document.createElement("div");
    this.editorHolder = document.createElement("div");
    this.editorStyle = document.createElement("style");
    document.body.appendChild(this.overlay);
    document.body.appendChild(this.editorHolder);
    document.body.appendChild(this.editorStyle);
    this.tipTapEditor = new TiptapEditor({
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

  getRect(editor: Editor, box: Box) {
    const canvas = editor.canvas;
    return box.getBoundingRect().map((p) => {
      let tp = canvas.globalCoordTransform(p);
      return [tp[0] / canvas.ratio, tp[1] / canvas.ratio];
    });
  }

  setPositionSize(editor: Editor, text: Box) {
    if (this.box) {
      const rect = this.getRect(editor, text);

      // set container styles
      const padding = text.padding;
      this.editorHolder.style.paddingTop = `${padding[0]}px`;
      this.editorHolder.style.paddingRight = `${padding[1]}px`;
      this.editorHolder.style.paddingBottom = `${padding[2]}px`;
      this.editorHolder.style.paddingLeft = `${padding[3]}px`;

      // move editor holder position
      const scale = editor.getScale();
      const canvasRect = editor.canvasElement.getBoundingClientRect();
      const width = geometry.width(rect) * (1 / scale);
      const height = geometry.height(rect) * (1 / scale);
      const left = rect[0][0] - (width * (1 - scale)) / 2 + canvasRect.left;
      const top = rect[0][1] - (height * (1 - scale)) / 2 + canvasRect.top;

      this.editorHolder.style.left = `${left}px`;
      this.editorHolder.style.top = `${top}px`;
      this.editorHolder.style.width = `${width}px`;
      this.editorHolder.style.height = `${height}px`;
      this.editorHolder.style.transform = `scale(${scale})`;
    }
  }

  setup(editor: Editor) {
    this.overlay.style.position = "fixed";
    this.overlay.style.inset = "0";
    this.overlay.style.display = "none";
    this.overlay.addEventListener("pointerdown", (e) => {
      this.close(editor);
    });
    this.editorHolder.setAttribute("id", "rich-text-inplace-editor");
    this.editorHolder.style.position = "absolute";
    this.editorHolder.style.left = "100px";
    this.editorHolder.style.top = "100px";
    this.editorHolder.style.width = "100px";
    this.editorHolder.style.height = "100px";
    this.editorHolder.style.zIndex = "1000";
    this.editorHolder.style.outline = "none";
    this.editorHolder.style.resize = "none";
    this.editorHolder.style.overflow = "hidden";
    this.editorHolder.style.whiteSpace = "nowrap";
    this.editorHolder.style.display = "none";

    this.tipTapEditor.on("transaction", (tr) => {
      if (this.box) {
        const canvas = editor.canvas;
        const doc = preprocessDocNode(
          canvas,
          this.tipTapEditor.getJSON(),
          this.box,
          this.box.wordWrap, // word wrap
          this.box.innerWidth,
          1.5
        );
        const rect = this.getRect(editor, this.box);
        const scale = editor.getScale();
        const currentWidth = geometry.width(rect) * (1 / scale);
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
    this.tipTapEditor.view.dom.addEventListener("keydown", (e) => {
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
      this.editorHolder.style.background = "transparent";
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

      // disable shape's text rendering
      shape._renderText = false;
      editor.repaint();

      // set position and size
      this.setPositionSize(editor, shape);

      // assign text to tiptap editor
      this.tipTapEditor.commands.setContent(shape.text);
      this.tipTapEditor.commands.focus();
      this.tipTapEditor.commands.selectAll();
    }
  }

  close(editor: Editor) {
    this.overlay.style.display = "none";
    this.editorHolder.style.display = "none";
    if (this.box instanceof Box) {
      this.box._renderText = true;
      const value = this.tipTapEditor.getJSON();
      editor.actions.update({ text: value }, [this.box]);
      editor.repaint();
    }
    this.box = null;
  }
}
