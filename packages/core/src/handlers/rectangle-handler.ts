import * as geometry from "../graphics/geometry";
import { Editor, Handler } from "../editor";
import { CanvasPointerEvent } from "../graphics/graphics";
import { Cursor } from "../graphics/const";
import { Rectangle, Shape } from "../shapes";
import { addShape, resolveAllConstraints } from "../macro";
import { ActionKind } from "../core";
import { HandlerSnapper } from "../manipulators/snapper";

/**
 * Rectangle Factory Handler
 */
export class RectangleFactoryHandler extends Handler {
  shape: Rectangle | null = null;
  snapper: HandlerSnapper = new HandlerSnapper();

  reset(): void {
    super.reset();
    this.shape = null;
  }

  initialize(editor: Editor, e: CanvasPointerEvent): void {
    // snap drag start point
    const snapped = this.snapper.snap(editor, this.dragStartPoint);
    if (snapped) {
      const [dx, dy] = snapped;
      this.dragStartPoint = [
        this.dragStartPoint[0] + dx,
        this.dragStartPoint[1] + dy,
      ];
    }

    // create shape
    const page = editor.getCurrentPage();
    if (page) {
      this.shape = editor.factory.createRectangle([
        this.dragStartPoint,
        this.dragPoint,
      ]);
      editor.transform.startAction(ActionKind.INSERT);
      editor.transform.transact((tx) => {
        addShape(tx, this.shape!, page);
      });
    }
  }

  update(editor: Editor, e: CanvasPointerEvent): void {
    // snap drag point
    const snapped = this.snapper.snap(editor, this.dragPoint);
    if (snapped) {
      const [dx, dy] = snapped;
      this.dragPoint = [this.dragPoint[0] + dx, this.dragPoint[1] + dy];
      this.snapper.guidePoints = [
        this.dragStartPoint,
        [this.dragPoint[0], this.dragStartPoint[1]],
        [this.dragStartPoint[0], this.dragPoint[1]],
        this.dragPoint,
      ];
    }

    // update shape
    const page = editor.getCurrentPage();
    if (page && this.shape) {
      const rect = geometry.normalizeRect([
        this.dragStartPoint,
        this.dragPoint,
      ]);
      editor.transform.transact((tx) => {
        tx.assign(this.shape!, "left", rect[0][0]);
        tx.assign(this.shape!, "top", rect[0][1]);
        tx.assign(this.shape!, "width", geometry.width(rect));
        tx.assign(this.shape!, "height", geometry.height(rect));
        resolveAllConstraints(tx, page, editor.canvas);
      });
    }
  }

  updateHovering(editor: Editor, e: CanvasPointerEvent): void {
    // snap hovering point
    const p = editor.canvas.globalCoordTransformRev([e.x, e.y]);
    this.snapper.snap(editor, p);
  }

  finalize(editor: Editor, e: CanvasPointerEvent): void {
    const MIN_SIZE = 2;
    if (this.shape) {
      if (this.shape?.width < MIN_SIZE && this.shape?.height < MIN_SIZE) {
        editor.transform.cancelAction();
      } else {
        editor.transform.endAction();
        editor.factory.triggerCreate(this.shape as Shape);
      }
    }
  }

  onActivate(editor: Editor): void {
    this.snapper.setReferences(editor, []);
    editor.setCursor(Cursor.CROSSHAIR);
  }

  onDeactivate(editor: Editor): void {
    editor.setCursor(Cursor.DEFAULT);
  }

  onActionPerformed(editor: Editor): void {
    this.snapper.setReferences(editor, []);
  }

  drawHovering(editor: Editor, e: CanvasPointerEvent) {
    this.snapper.draw(editor);
  }

  drawDragging(editor: Editor, e: CanvasPointerEvent) {
    this.snapper.draw(editor);
  }
}
