import * as geometry from "../graphics/geometry";
import { Editor, Handler } from "../editor";
import { CanvasPointerEvent } from "../graphics/graphics";
import { Color, Cursor, Mouse } from "../graphics/const";
import { HandlerSnapper } from "../manipulators/snapper";

/**
 * Embed Factory Handler
 */
export class EmbedFactoryHandler extends Handler {
  snapper: HandlerSnapper = new HandlerSnapper();

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
  }

  updateHovering(editor: Editor, e: CanvasPointerEvent): void {
    // snap hovering point
    const p = editor.canvas.globalCoordTransformRev([e.x, e.y]);
    this.snapper.snap(editor, p);
  }

  finalize(editor: Editor, e: CanvasPointerEvent): void {
    const r = geometry.normalizeRect([this.dragStartPoint, this.dragPoint]);
    const shape = editor.factory.createEmbed(r);
    editor.actions.insert(shape);
    editor.factory.triggerCreate(shape);
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
    const canvas = editor.canvas;
    const p1 = canvas.globalCoordTransform(this.dragStartPoint);
    const p2 = canvas.globalCoordTransform(this.dragPoint);
    const rect = geometry.normalizeRect([p1, p2]);
    canvas.strokeColor = Color.SELECTION;
    canvas.strokeWidth = canvas.px;
    canvas.strokePattern = [];
    canvas.roughness = 0;
    canvas.alpha = 1;
    canvas.strokeRect(rect[0][0], rect[0][1], rect[1][0], rect[1][1]);

    this.snapper.draw(editor);
  }
}
