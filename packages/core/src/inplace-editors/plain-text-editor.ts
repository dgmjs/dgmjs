import { Editor, InplaceEditor } from "../editor";
import { Box, Shape } from "../shapes";
import * as geometry from "../graphics/geometry";

export class PlainTextEditor extends InplaceEditor {
  shape: Shape | null;
  overlay: HTMLDivElement;
  textarea: HTMLTextAreaElement;

  constructor() {
    super();
    this.shape = null;
    this.overlay = document.createElement("div");
    this.textarea = document.createElement("textarea");
    document.body.appendChild(this.overlay);
    document.body.appendChild(this.textarea);
  }

  getRect(editor: Editor, box: Box) {
    const canvas = editor.canvas;
    return box.getBoundingRect().map((p) => {
      let tp = canvas.globalCoordTransform(p);
      return [tp[0] / canvas.ratio, tp[1] / canvas.ratio];
    });
  }

  setSize(editor: Editor, text: string) {}

  setup(editor: Editor) {
    this.overlay.style.position = "fixed";
    this.overlay.style.inset = "0";
    this.overlay.style.display = "none";
    this.overlay.addEventListener("pointerdown", (e) => {
      this.close(editor);
    });
    this.textarea.style.position = "absolute";
    this.textarea.style.left = "100px";
    this.textarea.style.top = "100px";
    this.textarea.style.width = "100px";
    this.textarea.style.height = "100px";
    this.textarea.style.zIndex = "1000";
    this.textarea.style.outline = "none";
    this.textarea.style.resize = "none";
    this.textarea.style.whiteSpace = "nowrap";
    this.textarea.style.display = "none";
    this.textarea.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close(editor);
    });
    this.textarea.addEventListener("input", (e: any) => {
      this.setSize(editor, e.target.value);
    });
  }

  open(editor: Editor, shape: Shape) {
    this.shape = shape;
    if (shape instanceof Box) {
      this.overlay.style.display = "block";
      this.textarea.style.display = "block";
      this.textarea.style.background = "transparent";
      this.textarea.style.lineHeight = `${shape.lineHeight}em`;
      this.textarea.style.fontFamily = shape.fontFamily;
      this.textarea.style.fontSize = `${shape.fontSize}px`;
      this.textarea.style.color = editor.canvas.resolveColor(shape.fontColor);
      this.textarea.style.textAlign = shape.horzAlign;
      // set container styles
      const padding = shape.padding;
      this.textarea.style.paddingTop = `${padding[0]}px`;
      this.textarea.style.paddingRight = `${padding[1]}px`;
      this.textarea.style.paddingBottom = `${padding[2]}px`;
      this.textarea.style.paddingLeft = `${padding[3]}px`;

      // disable shape's text rendering
      shape._renderText = false;
      editor.repaint();

      // set position
      const rect = this.getRect(editor, shape);
      const scale = editor.getScale();
      const canvasRect = editor.canvasElement.getBoundingClientRect();
      const width = geometry.width(rect) * (1 / scale);
      const height = geometry.height(rect) * (1 / scale);
      const left = rect[0][0] - (width * (1 - scale)) / 2 + canvasRect.left;
      const top = rect[0][1] - (height * (1 - scale)) / 2 + canvasRect.top;

      this.textarea.style.left = `${left}px`;
      this.textarea.style.top = `${top}px`;
      this.textarea.style.width = `${width}px`;
      this.textarea.style.height = `${height + shape.fontSize / 2}px`; // more bottom area prevents clipping text and vertical scrollbar
      this.textarea.style.transform = `scale(${scale})`;

      const textString = shape.text;
      if (textString.length > 0) {
        this.textarea.value = textString.trim();
      }
      this.textarea.focus();
      this.textarea.select();
      this.textarea.scrollTop = 0;
    }
  }

  close(editor: Editor) {
    this.overlay.style.display = "none";
    this.textarea.style.display = "none";
    if (this.shape instanceof Box) {
      this.shape._renderText = true;
      const value = this.textarea.value;
      console.log("value", value);
      editor.actions.update({ text: value }, [this.shape]);
      editor.repaint();
    }
    this.shape = null;
  }
}
