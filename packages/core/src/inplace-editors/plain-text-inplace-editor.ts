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
  editorHolder: HTMLDivElement;
  textarea: HTMLTextAreaElement;

  constructor() {
    super();
    this.box = null;
    this.overlay = document.createElement("div");
    this.editorHolder = document.createElement("div");
    this.textarea = document.createElement("textarea");
    document.body.appendChild(this.overlay);
    document.body.appendChild(this.editorHolder);
    this.editorHolder.appendChild(this.textarea);
  }

  getRect(editor: Editor, box: Box) {
    const canvas = editor.canvas;
    return box.getBoundingRect().map((p) => {
      let tp = canvas.globalCoordTransform(p);
      return [tp[0] / canvas.ratio, tp[1] / canvas.ratio];
    });
  }

  setStyle(editor: Editor) {
    if (this.box) {
      let alignItems = "start";
      if (this.box.vertAlign === "top") alignItems = "start";
      if (this.box.vertAlign === "middle") alignItems = "center";
      if (this.box.vertAlign === "bottom") alignItems = "end";
      this.overlay.style.display = "block";
      this.editorHolder.style.display = "flex";
      this.editorHolder.style.alignItems = alignItems;
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
      this.editorHolder.style.paddingTop = `${padding[0]}px`;
      this.editorHolder.style.paddingRight = `${padding[1]}px`;
      this.editorHolder.style.paddingBottom = `${padding[2]}px`;
      this.editorHolder.style.paddingLeft = `${padding[3]}px`;

      // compute position and size
      const rect = this.getRect(editor, this.box);
      const scale = editor.getScale();
      const canvasRect = editor.canvasElement.getBoundingClientRect();
      const MIN_WIDTH = 4;
      let width = geometry.width(rect) * (1 / scale);
      let height = geometry.height(rect) * (1 / scale);
      const left = rect[0][0] - (width * (1 - scale)) / 2 + canvasRect.left;
      const top = rect[0][1] - (height * (1 - scale)) / 2 + canvasRect.top;

      // auto sizing fit to text
      const m = measureText(editor.canvas, this.box, text);
      width = Math.max(m.minWidth + padding[1] + padding[3], width);
      height = Math.max(m.height + padding[0] + padding[2], height);

      // set container size and position
      this.editorHolder.style.left = `${left}px`;
      this.editorHolder.style.top = `${top}px`;
      this.editorHolder.style.width = `${
        width < MIN_WIDTH ? MIN_WIDTH : width
      }px`;
      this.editorHolder.style.height = `${height}px`;
      this.editorHolder.style.transform = `scale(${scale})`;
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

    this.editorHolder.style.position = "absolute";
    this.editorHolder.style.zIndex = "1000";
    this.editorHolder.style.outline = "none";
    this.editorHolder.style.overflow = "hidden";
    this.editorHolder.style.display = "none";

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
    this.editorHolder.style.display = "none";
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
