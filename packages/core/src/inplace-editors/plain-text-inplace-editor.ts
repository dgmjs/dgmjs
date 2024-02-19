import { Editor, InplaceEditor } from "../editor";
import { Box, Shape, Text } from "../shapes";
import * as geometry from "../graphics/geometry";
import { measureText } from "../utils/text-utils";

/**
 * Plain text inplace editor
 */
export class PlainTextInplaceEditor extends InplaceEditor {
  box: Box | null;
  overlay: HTMLDivElement;
  textareaHolder: HTMLDivElement;
  textarea: HTMLTextAreaElement;

  constructor() {
    super();
    this.box = null;
    this.overlay = document.createElement("div");
    this.textareaHolder = document.createElement("div");
    this.textarea = document.createElement("textarea");
  }

  setStyle(editor: Editor) {
    if (this.box) {
      let alignItems = "start";
      if (this.box.vertAlign === "top") alignItems = "start";
      if (this.box.vertAlign === "middle") alignItems = "center";
      if (this.box.vertAlign === "bottom") alignItems = "end";
      this.overlay.style.display = "block";
      this.textareaHolder.style.display = "flex";
      this.textareaHolder.style.alignItems = alignItems;
      this.textarea.style.background = "transparent";
      this.textarea.style.lineHeight = `${this.box.lineHeight}em`;
      this.textarea.style.fontFamily = this.box.fontFamily;
      this.textarea.style.fontSize = `${this.box.fontSize}px`;
      this.textarea.style.color = editor.canvas.resolveColor(
        this.box.fontColor
      );
      this.textarea.style.textAlign = this.box.horzAlign;
    }
  }

  setPositionSize(editor: Editor, text: string) {
    if (this.box) {
      // set padding
      const padding = this.box.padding;
      this.textareaHolder.style.paddingTop = `${padding[0]}px`;
      this.textareaHolder.style.paddingRight = `${padding[1]}px`;
      this.textareaHolder.style.paddingBottom = `${padding[2]}px`;
      this.textareaHolder.style.paddingLeft = `${padding[3]}px`;

      // compute position and size
      const rect = this.box.getBoundingRectInCanvasElement(editor.canvas);
      const scale = editor.getScale();
      const left = rect[0][0];
      const top = rect[0][1];
      let width = geometry.width(rect);
      let height = geometry.height(rect);
      const MIN_WIDTH = 4;

      // auto sizing fit to text
      const m = measureText(editor.canvas, this.box, text);
      width = Math.max(m.minWidth + padding[1] + padding[3], width);
      height = Math.max(m.height + padding[0] + padding[2], height);

      // set container size and position
      this.textareaHolder.style.left = `${left}px`;
      this.textareaHolder.style.top = `${top}px`;
      this.textareaHolder.style.width = `${
        width < MIN_WIDTH ? MIN_WIDTH : width
      }px`;
      this.textareaHolder.style.height = `${height}px`;
      this.textareaHolder.style.transform = `scale(${scale})`;
      this.textarea.style.width = "100%";
      this.textarea.style.height = `${m.height}px`;
    }
  }

  setup(editor: Editor) {
    this.overlay.style.position = "fixed";
    this.overlay.style.inset = "0";
    this.overlay.style.display = "none";
    this.overlay.addEventListener("pointerdown", (e) => {
      this.close(editor);
    });
    document.body.appendChild(this.overlay);

    this.textareaHolder.style.position = "absolute";
    this.textareaHolder.style.zIndex = "1000";
    this.textareaHolder.style.outline = "none";
    this.textareaHolder.style.overflow = "hidden";
    this.textareaHolder.style.display = "none";
    editor.canvasElement.parentElement?.appendChild(this.textareaHolder);

    this.textarea.style.width = "100%";
    this.textarea.style.outline = "none";
    this.textarea.style.resize = "none";
    this.textarea.style.whiteSpace = "nowrap";
    this.textarea.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close(editor);
    });
    this.textarea.addEventListener("input", (e: any) => {
      this.setPositionSize(editor, e.target.value);
    });
    this.textareaHolder.appendChild(this.textarea);
  }

  active(editor: Editor, shape: Shape): boolean {
    return (
      shape instanceof Box && shape.textEditable && shape.richText === false
    );
  }

  open(editor: Editor, shape: Shape) {
    if (shape instanceof Box) {
      this.box = shape;
      this.setStyle(editor);

      // disable shape's text rendering
      shape._renderText = false;
      editor.repaint();

      // set position and size
      this.setPositionSize(editor, shape.text);

      // assign text to textarea
      const textString = shape.text;
      if (typeof textString == "string") {
        this.textarea.value = textString;
      }
      this.textarea.focus();
      this.textarea.select();
      this.textarea.scrollTop = 0;
    }
  }

  close(editor: Editor) {
    this.overlay.style.display = "none";
    this.textareaHolder.style.display = "none";
    if (this.box instanceof Box) {
      this.box._renderText = true;
      const value = this.textarea.value;
      if (this.box instanceof Text && value.trim().length === 0) {
        editor.actions.delete_([this.box]);
      } else {
        editor.actions.update({ text: value }, [this.box]);
      }
      editor.repaint();
    }
    this.box = null;
  }
}
