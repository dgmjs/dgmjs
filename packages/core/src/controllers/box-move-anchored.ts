import * as geometry from "../graphics/geometry";
import { Shape, Box, Movable } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import { lcs2ccs } from "../graphics/utils";
import * as guide from "../utils/guide";
import type { CanvasPointerEvent } from "../graphics/graphics";
import { Cursor } from "../graphics/const";
import { moveAnchor, resolveAllConstraints } from "../macro";
import { ActionKind } from "../core";
import { GridSnapper, MoveSnapper } from "../manipulators/snapper";
import { getAllDescendant } from "../utils/shape-utils";

/**
 * BoxMoveAnchoredController
 */
export class BoxMoveAnchoredController extends Controller {
  /**
   * Grid snapper
   */
  gridSnapper: GridSnapper;

  /**
   * Move snapper
   */
  moveSnapper: MoveSnapper;

  /**
   * Initial position of the target shape
   */
  initialPosition: number[];

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.hasHandle = false;
    this.gridSnapper = new GridSnapper();
    this.moveSnapper = new MoveSnapper();
    this.initialPosition = [0, 0];
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return (
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape instanceof Box &&
      shape.movable !== Movable.NONE &&
      shape.anchored &&
      !editor.duplicatedDragging
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
    // store initial position
    this.initialPosition = [shape.left, shape.top];

    // initialize snappers
    this.gridSnapper.setPointToSnap(editor, this, [shape.left, shape.top]);
    this.moveSnapper.setRectToSnap(editor, shape, shape.getBoundingRect());
    this.moveSnapper.setReferencePoints(editor, getAllDescendant([shape]));

    editor.transform.startAction(ActionKind.MOVE_ANCHOR);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    // determine horz and/or vert movement
    let allowMoveX = true;
    let allowMoveY = true;
    if (e.shiftDown) {
      if (Math.abs(this.dxGCS) > Math.abs(this.dyGCS)) {
        allowMoveY = false;
      } else {
        allowMoveX = false;
      }
    }

    // snap dragging points
    this.gridSnapper.snap(editor, shape, this);
    this.moveSnapper.snap(editor, shape, this, allowMoveX, allowMoveY);

    // horizontal or vertical movement with shift key
    if (e.shiftDown) {
      if (!allowMoveY) {
        this.dyStepGCS = 0;
        this.dyGCS = 0;
        if (shape.top !== this.initialPosition[1]) {
          this.dyStepGCS = this.initialPosition[1] - shape.top;
        }
      }
      if (!allowMoveX) {
        this.dxStepGCS = 0;
        this.dxGCS = 0;
        if (shape.left !== this.initialPosition[0]) {
          this.dxStepGCS = this.initialPosition[0] - shape.left;
        }
      }
    }

    // update
    const canvas = editor.canvas;
    const anchorPoint = geometry.getPointOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      (shape as Box).anchorPosition
    );
    const shapeCenter = shape.getCenter();
    shapeCenter[0] += this.dxStepGCS;
    shapeCenter[1] += this.dyStepGCS;
    const angle = geometry.angle(anchorPoint, shapeCenter);
    const length = geometry.distance(shapeCenter, anchorPoint);

    // transform shape
    editor.transform.transact((tx) => {
      const page = editor.getCurrentPage()!;
      moveAnchor(tx, shape as Box, angle, length);
      resolveAllConstraints(tx, page, canvas);
    });
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box, e: CanvasPointerEvent) {
    editor.transform.endAction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Box) {
    const canvas = editor.canvas;
    const enclosure = shape.getEnclosure();
    const center = geometry.mid(enclosure[0], enclosure[2]);
    const centerCCS = lcs2ccs(canvas, shape, center);
    const anchorPoint = geometry.getPointOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      shape.anchorPosition
    );
    const anchorPointCCS = lcs2ccs(
      canvas,
      (shape.parent as Shape) ?? shape,
      anchorPoint
    );
    guide.drawPolylineInLCS(canvas, shape, enclosure);
    guide.drawDottedLine(canvas, centerCCS, anchorPointCCS);
  }

  /**
   * Draw ghost while dragging
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    super.drawDragging(editor, shape, e);
    const canvas = editor.canvas;
    // draw ghost
    const ghost = shape.getEnclosure();
    const center = geometry.mid(ghost[0], ghost[2]);
    const centerCCS = lcs2ccs(canvas, shape, center);
    const anchorPoint = geometry.getPointOnPath(
      (shape.parent as Shape).getOutline() ?? [],
      (shape as Box).anchorPosition
    );
    const anchorPointCCS = lcs2ccs(
      canvas,
      (shape.parent as Shape) ?? shape,
      anchorPoint
    );
    guide.drawPolylineInLCS(canvas, shape, ghost);
    guide.drawDottedLine(canvas, centerCCS, anchorPointCCS);

    // draw snapping
    this.moveSnapper.draw(editor);
  }
}
