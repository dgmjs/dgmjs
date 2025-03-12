import { CanvasPointerEvent } from "../graphics/graphics";
import { Editor } from "../editor";

const AUTOSCROLL_STEP = 2;
const AUTOSCROLL_SPEED = 50; // speed in 1..1000
const AUTOSCROLL_MARGIN = 30; // px

export class AutoScroller {
  editor: Editor;
  enabled: boolean;
  dx: number;
  dy: number;
  timerId: ReturnType<typeof setInterval> | null;
  timerHandler: () => void;

  constructor(editor: Editor) {
    this.editor = editor;
    this.enabled = false;
    this.dx = 0;
    this.dy = 0;
    this.timerId = null;
    this.timerHandler = () => {
      if (!this.editor.spaceKeyDown) {
        let scrolled = false;
        if (this.dx !== 0) {
          let x = Math.round(this.editor.canvas.origin[0] + this.dx);
          if (this.editor.canvas.origin[0] !== x) {
            this.editor.canvas.origin[0] = x;
            scrolled = true;
          }
        }
        if (this.dy !== 0) {
          let y = Math.round(this.editor.canvas.origin[1] + this.dy);
          if (this.editor.canvas.origin[1] !== y) {
            this.editor.canvas.origin[1] = y;
            scrolled = true;
          }
        }
        if (scrolled) {
          this.editor.repaint(true);
        }
      }
    };
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  pointerDown(event: CanvasPointerEvent) {
    if (this.enabled && this.editor.leftButtonDown) {
      const speed = Math.round(AUTOSCROLL_SPEED / 1000);
      this.timerId = setInterval(this.timerHandler, speed);
    }
  }

  pointerMove(event: CanvasPointerEvent) {
    if (this.enabled && this.editor.leftButtonDown && this.timerId) {
      const autoscrollMargin = AUTOSCROLL_MARGIN * this.editor.canvas.px;
      if (event.x > this.editor.canvasElement.width - autoscrollMargin) {
        this.dx = -AUTOSCROLL_STEP;
      } else if (event.x < autoscrollMargin) {
        this.dx = AUTOSCROLL_STEP;
      } else {
        this.dx = 0;
      }
      if (event.y > this.editor.canvasElement.height - autoscrollMargin) {
        this.dy = -AUTOSCROLL_STEP;
      } else if (event.y < autoscrollMargin) {
        this.dy = AUTOSCROLL_STEP;
      } else {
        this.dy = 0;
      }
    }
  }

  pointerUp(event: CanvasPointerEvent) {
    if (this.enabled && this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      this.dx = 0;
      this.dy = 0;
    }
  }
}
