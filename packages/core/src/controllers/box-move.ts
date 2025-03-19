import { CanvasPointerEvent } from "../graphics/graphics";
import { Shape, Box, Movable, Page, Path, Mirror } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { drawPolylineInLCS } from "../utils/guide";
import { Cursor } from "../graphics/const";
import { moveShapes, resolveAllConstraints } from "../macro";
import { ActionKind } from "../core";
import { ableToContain, getMovableShape } from "./utils";
import { GridSnapper, MoveSnapper } from "../manipulators/snapper";
import { getAllDescendant } from "../utils/shape-utils";

/**
 * BoxMoveController
 */
export class BoxMoveController extends Controller {
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

  /**
   * State of shift movement (moving shapes with shift key)
   */
  shiftMove: "none" | "horz" | "vert";

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.hasHandle = false;
    this.gridSnapper = new GridSnapper();
    this.moveSnapper = new MoveSnapper();
    this.container = null;
    this.shiftMove = "none";
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

  initialize(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {
    const targetShape = getMovableShape(shape);
    if (!targetShape || targetShape instanceof Page) return;

    // initialize shift move state
    this.shiftMove = "none";

    // initialize snappers
    this.gridSnapper.setPointToSnap(editor, this, [
      targetShape.left,
      targetShape.top,
    ]);
    this.moveSnapper.setRectToSnap(
      editor,
      targetShape,
      shape.getBoundingRect()
    );
    this.moveSnapper.setReferencePoints(
      editor,
      getAllDescendant([targetShape])
    );

    editor.transform.startAction(ActionKind.MOVE);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const targetShape = getMovableShape(shape);
    if (!targetShape || targetShape instanceof Page) return;

    // return if no change
    if (this.dxStepGCS === 0 && this.dyStepGCS === 0) return;

    // determine shift-move state
    if (e.shiftDown && this.shiftMove === "none") {
      this.shiftMove =
        Math.abs(this.dxStepGCS) > Math.abs(this.dyStepGCS) ? "horz" : "vert";
    }

    // snap dragging points
    this.gridSnapper.snap(editor, shape, this);
    this.moveSnapper.snap(
      editor,
      shape,
      this,
      this.shiftMove !== "vert",
      this.shiftMove !== "horz"
    );

    // move horizontal or vertical with shift key
    if (e.shiftDown) {
      if (this.shiftMove === "horz") {
        this.dyStepGCS = 0;
        this.dyGCS = 0;
        this.dy = 0;
      } else if (this.shiftMove === "vert") {
        this.dxStepGCS = 0;
        this.dxGCS = 0;
        this.dx = 0;
      }
    }

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
  finalize(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
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
