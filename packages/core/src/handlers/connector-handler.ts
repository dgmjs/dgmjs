import { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Connector, Line, Shape } from "../shapes";
import { Editor, Handler, manipulatorManager } from "../editor";
import { Cursor } from "../graphics/const";
import { findConnectionAnchor } from "../controllers/utils";
import * as guide from "../utils/guide";
import { lcs2ccs } from "../graphics/utils";
import { addShape, resolveAllConstraints, setPath } from "../macro";
import { ActionKind } from "../core";
import { HandlerSnapper } from "../manipulators/snapper";

/**
 * Connector Factory Handler
 */
export class ConnectorFactoryHandler extends Handler {
  tailEnd: Shape | null = null;
  tailAnchor: number[] = [0.5, 0.5];
  headEnd: Shape | null = null;
  headAnchor: number[] = [0.5, 0.5];
  shape: Connector | null = null;
  snapper: HandlerSnapper = new HandlerSnapper(false, true);

  reset() {
    super.reset();
    this.tailEnd = null;
    this.tailAnchor = [0.5, 0.5];
    this.headEnd = null;
    this.headAnchor = [0.5, 0.5];
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
      const [end, anchor] = findConnectionAnchor(
        editor,
        null,
        this.dragStartPoint
      );
      this.tailEnd = end;
      this.tailAnchor = anchor;
      this.shape = editor.factory.createConnector(
        this.tailEnd,
        this.tailAnchor,
        this.headEnd,
        this.headAnchor,
        [this.dragStartPoint, this.dragPoint]
      );
      this.shape.path = [this.dragStartPoint, this.dragPoint];
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
    if (page) {
      const [end, anchor] = findConnectionAnchor(
        editor,
        this.shape,
        this.dragPoint
      );
      this.headEnd = end;
      this.headAnchor = anchor;
      const newPath = geometry.pathCopy((this.shape as Connector).path);
      newPath[1] = this.dragPoint;
      editor.transform.transact((tx) => {
        setPath(tx, this.shape as Line, newPath);
        tx.assignRef(this.shape as Shape, "head", this.headEnd);
        tx.assign(this.shape as Shape, "headAnchor", this.headAnchor);
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
      if (geometry.pathLength((this.shape as Connector).path) < MIN_SIZE) {
        editor.transform.cancelAction();
      } else {
        editor.transform.endAction();
        editor.factory.triggerCreate(this.shape);
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

  drawTailHovering(editor: Editor, e: CanvasPointerEvent) {
    if (this.tailEnd && this.tailEnd.connectable) {
      const manipulator = manipulatorManager.get(this.tailEnd.type);
      if (manipulator) manipulator.drawHovering(editor, this.tailEnd, e);
    }
  }

  drawHeadHovering(editor: Editor, e: CanvasPointerEvent) {
    if (this.headEnd && this.headEnd.connectable) {
      const manipulator = manipulatorManager.get(this.headEnd.type);
      if (manipulator) manipulator.drawHovering(editor, this.headEnd, e);
    }
  }

  drawHovering(editor: Editor, e: CanvasPointerEvent) {
    this.drawTailHovering(editor, e);
    this.snapper.draw(editor);
  }

  drawDragging(editor: Editor, e: CanvasPointerEvent) {
    this.drawTailHovering(editor, e);
    this.drawHeadHovering(editor, e);
    if (this.shape instanceof Connector) {
      const canvas = editor.canvas;
      const tailAnchorPoint = this.shape.getTailAnchorPoint();
      const headAnchorPoint = this.shape.getHeadAnchorPoint();
      const p1 = lcs2ccs(canvas, this.shape, tailAnchorPoint);
      const p2 = lcs2ccs(canvas, this.shape, headAnchorPoint);
      const pathCCS = this.shape.path.map((p) =>
        lcs2ccs(canvas, this.shape!, p)
      );
      guide.drawDottedLine(canvas, p1, pathCCS[0]);
      guide.drawDottedLine(canvas, p2, pathCCS[pathCCS.length - 1]);
      guide.drawControlPoint(canvas, p1, this.shape.tail ? 5 : 1);
      guide.drawControlPoint(canvas, p2, this.shape.head ? 5 : 1);
    }
    this.snapper.draw(editor);
  }
}
