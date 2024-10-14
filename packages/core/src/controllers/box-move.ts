import { CanvasPointerEvent } from "../graphics/graphics";
import { Shape, Box, Movable, Page, Path, Mirror } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { drawPolylineInLCS } from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { Cursor } from "../graphics/const";
import { moveShapes, resolveAllConstraints } from "../macro";
import { ActionKind } from "../core";
import { ableToContain } from "./utils";
import { GridSnapper, MoveSnapper } from "../manipulators/snapper";

/**
 * BoxMoveController
 */
export class BoxMoveController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * Grid snapper
   */
  gridSnapper: GridSnapper;

  /**
   * Move snapper
   */
  moveSnapper: MoveSnapper;

  /**
   * Reference to a container shape
   */
  container: Shape | null;

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.hasHandle = false;
    this.snap = new Snap();
    this.gridSnapper = new GridSnapper();
    this.moveSnapper = new MoveSnapper();
    this.container = null;
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return (
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape.movable !== Movable.NONE &&
      !(shape as Box).anchored
    );
  }

  /**
   * Returns mouse cursor for the controller
   * @returns cursor [type, angle]
   */
  mouseCursor(
    editor: Editor,
    shape: Shape,
    e: CanvasPointerEvent
  ): [string, number] {
    return [Cursor.MOVE, 0];
  }

  getTargetShape(editor: Editor, shape: Shape): Shape {
    let targetShape: Shape | null = shape;
    if (targetShape.movable === Movable.PARENT)
      targetShape = targetShape.findParent(
        (s) => (s as Shape).movable !== Movable.PARENT
      ) as Shape;
    return targetShape;
  }

  initialize(editor: Editor, shape: Shape): void {
    const targetShape = this.getTargetShape(editor, shape);
    if (!targetShape || targetShape instanceof Page) return;

    // initialize snappers
    this.gridSnapper.setPointToSnap(editor, this, [
      targetShape.left,
      targetShape.top,
    ]);
    this.moveSnapper.initialize(editor, targetShape, this);

    editor.transform.startAction(ActionKind.MOVE);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    const targetShape = this.getTargetShape(editor, shape);
    if (!targetShape || targetShape instanceof Page) return;

    // update snappers
    this.gridSnapper.update(editor, shape, this);
    this.moveSnapper.update(editor, shape, this);

    // apply movable constraint
    if (
      targetShape.movable === Movable.VERT ||
      targetShape.movable === Movable.NONE
    )
      this.dxStepGCS = 0;
    if (
      targetShape.movable === Movable.HORZ ||
      targetShape.movable === Movable.NONE
    )
      this.dyStepGCS = 0;

    // return if no change
    if (this.dxStepGCS === 0 && this.dyStepGCS === 0) return;

    // determine container
    const canvas = editor.canvas;
    let p2 = targetShape.localCoordTransform(canvas, this.dragPoint, false);
    this.container =
      editor.getCurrentPage()?.getShapeAt(canvas, p2, [shape]) ?? null;
    if (this.container && !ableToContain(this.container, targetShape)) {
      this.container = null;
    }
    if (!this.container) this.container = editor.getCurrentPage();

    // update
    const page = editor.getCurrentPage()!;
    editor.transform.transact((tx) => {
      moveShapes(
        tx,
        page,
        [targetShape],
        this.dxStepGCS,
        this.dyStepGCS,
        this.container
      );
      resolveAllConstraints(tx, page, canvas);
    });
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Shape) {
    editor.transform.endAction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape): void {
    const canvas = editor.canvas;
    if (
      !(
        shape instanceof Path &&
        (shape.path.length === 2 || shape.pathEditable)
      )
    ) {
      drawPolylineInLCS(canvas, shape, shape.getEnclosure());
    }
  }

  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {
    super.drawDragging(editor, shape, e);
    // hovering containable
    if (this.container) {
      const manipulator = manipulatorManager.get(this.container.type);
      if (manipulator) manipulator.drawHovering(editor, this.container, e);
    }

    // draw snapping
    this.moveSnapper.draw(editor);
  }
}
