import { Editor, InplaceEditor } from "../editor";
import { Box, Shape } from "../shapes";
import * as geometry from "../graphics/geometry";
import { measureText } from "../utils/text-utils";

export class PlainTextEditor extends InplaceEditor {
  box: Box | null;
  overlay: HTMLDivElement;
  textarea: HTMLTextAreaElement;

  constructor() {
    super();
    this.box = null;
    this.overlay = document.createElement("div");
    this.textarea = document.createElement("textarea");
    document.body.appendChild(this.overlay);
    document.body.appendChild(this.textarea);
  }

  setPositionSize(editor: Editor, text: string) {
    if (this.box) {
      // compute text bouding box in screen coordinates
      const metric = measureText(editor.canvas, this.box, text);
      const l = this.box?.left || 0;
      const t = this.box?.top || 0;
      const w = metric.minWidth;
      const h = metric.height;
      const r = [
        [l, t],
        [l + w, t + h],
      ];
      const rect = r.map((p) => {
        let tp = editor.canvas.globalCoordTransform(p);
        return [tp[0] / editor.canvas.ratio, tp[1] / editor.canvas.ratio];
      });
      // set position and size
      const scale = editor.getScale();
      const canvasRect = editor.canvasElement.getBoundingClientRect();
      const minWidth = 4;
      const width = geometry.width(rect) * (1 / scale);
      const height = geometry.height(rect) * (1 / scale);
      const left = rect[0][0] - (width * (1 - scale)) / 2 + canvasRect.left;
      const top = rect[0][1] - (height * (1 - scale)) / 2 + canvasRect.top;
      this.textarea.style.left = `${left}px`;
      this.textarea.style.top = `${top}px`;
      this.textarea.style.width = `${width < minWidth ? minWidth : width}px`;
      this.textarea.style.height = `${height + this.box.fontSize / 2}px`; // more bottom area prevents clipping text and vertical scrollbar
      this.textarea.style.transform = `scale(${scale})`;
    }
  }

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
    this.textarea.style.overflow = "hidden";
    this.textarea.style.whiteSpace = "nowrap";
    this.textarea.style.display = "none";
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
      this.overlay.style.display = "block";
      this.textarea.style.display = "block";
      this.textarea.style.background = "transparent";
      this.textarea.style.lineHeight = `${shape.lineHeight}em`;
      this.textarea.style.fontFamily = shape.fontFamily;
      this.textarea.style.fontSize = `${shape.fontSize}px`;
      this.textarea.style.color = editor.canvas.resolveColor(shape.fontColor);
      this.textarea.style.textAlign = shape.horzAlign;
      const padding = shape.padding;
      this.textarea.style.paddingTop = `${padding[0]}px`;
      this.textarea.style.paddingRight = `${padding[1]}px`;
      this.textarea.style.paddingBottom = `${padding[2]}px`;
      this.textarea.style.paddingLeft = `${padding[3]}px`;

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
    this.textarea.style.display = "none";
    if (this.box instanceof Box) {
      this.box._renderText = true;
      const value = this.textarea.value;
      editor.actions.update({ text: value }, [this.box]);
      editor.repaint();
    }
    this.box = null;
  }
}
