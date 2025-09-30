import type { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Connector, Line } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { Cursor } from "../graphics/const";
import { lcs2ccs } from "../graphics/utils";
import * as guide from "../utils/guide";
import { findConnectionAnchor } from "./utils";
import { resolveAllConstraints, setPath } from "../macro";
import { ActionKind } from "../core";
import { GridSnapper } from "../manipulators/snapper";

/**
 * Connector Reconnect Controller
 */
export class ConnectorReconnectController extends Controller {
  /**
   * Grid snapper
   */
  gridSnapper: GridSnapper;

  /**
   * control point
   */
  controlPoint: number;

  /**
   * current control path
   */
  controlPath: number[][];

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.hasHandle = true;
    this.gridSnapper = new GridSnapper();
    this.controlPoint = -1;
    this.controlPath = [];
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return (
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape instanceof Connector &&
      !editor.pointerDownUnselectedShape &&
      !editor.duplicatedDragging
    );
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (shape instanceof Connector) {
      const p = [e.x, e.y];
      const tpCCS = lcs2ccs(editor.canvas, shape, shape.getTailAnchorPoint());
      const hpCCS = lcs2ccs(editor.canvas, shape, shape.getHeadAnchorPoint());
      if (
        guide.inControlPoint(editor.canvas, p, tpCCS) ||
        guide.inControlPoint(editor.canvas, p, hpCCS)
      ) {
        return true;
      }
    }
    return false;
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
    return [Cursor.POINTER, 0];
  }

  initialize(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {
    if (shape instanceof Connector) {
      const tpCCS = lcs2ccs(editor.canvas, shape, shape.getTailAnchorPoint());
      const hpCCS = lcs2ccs(editor.canvas, shape, shape.getHeadAnchorPoint());
      if (guide.inControlPoint(editor.canvas, this.dragStartPointCCS, hpCCS))
        this.controlPoint = shape.path.length - 1;
      if (guide.inControlPoint(editor.canvas, this.dragStartPointCCS, tpCCS))
        this.controlPoint = 0;
      this.controlPath = geometry.pathCopy(shape.path);
      // update control path's head and tail points if connected to shapes
      if (shape.tail instanceof Shape)
        this.controlPath[0] = shape.getTailAnchorPoint();
      if (shape.head instanceof Shape)
        this.controlPath[this.controlPath.length - 1] =
          shape.getHeadAnchorPoint();
    }

    // initialize snappers
    if (this.controlPoint >= 0) {
      this.gridSnapper.setPointToSnap(editor, this, this.dragPointGCS);
    }

    editor.transform.startAction(ActionKind.RECONNECT);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const isHead = this.controlPoint > 0;

    // snap dragging points
    this.gridSnapper.snap(editor, shape, this);

    // if shift is pressed, snap to angles of 15 degrees
    if (e.shiftDown && this.controlPoint >= 0) {
      const fixedPoint = isHead
        ? geometry.copy(this.controlPath.at(-2)!)
        : geometry.copy(this.controlPath.at(1)!);
      const angle = Math.atan2(
        this.dragPoint[1] - fixedPoint[1],
        this.dragPoint[0] - fixedPoint[0]
      );
      const length = geometry.distance(this.dragPoint, fixedPoint);
      const snappedAngle = Math.round(angle / (Math.PI / 12)) * (Math.PI / 12); // 15 degrees
      this.dragPoint = [
        fixedPoint[0] + length * Math.cos(snappedAngle),
        fixedPoint[1] + length * Math.sin(snappedAngle),
      ];
    }

    // find an end and anchor
    let [newEnd, anchor] = findConnectionAnchor(
      editor,
      shape as Connector,
      this.dragPoint
    );

    // prevent to connect to the same end
    if (
      this.controlPoint > 0 &&
      newEnd &&
      (shape as Connector).tail &&
      newEnd === (shape as Connector).tail
    ) {
      newEnd = null;
      anchor = [0.5, 0.5];
    }
    if (
      this.controlPoint === 0 &&
      newEnd &&
      (shape as Connector).head &&
      newEnd === (shape as Connector).head
    ) {
      newEnd = null;
      anchor = [0.5, 0.5];
    }

    // update the path
    let newPath = geometry.pathCopy(this.controlPath);
    if (!newEnd) {
      newPath[this.controlPoint] = this.dragPoint;
    }

    // transform shape
    editor.transform.transact((tx) => {
      const page = editor.getCurrentPage()!;
      setPath(tx, shape as Line, newPath);
      tx.assignRef(shape, isHead ? "head" : "tail", newEnd);
      tx.assign(shape, isHead ? "headAnchor" : "tailAnchor", anchor);
      resolveAllConstraints(tx, page, editor.canvas);
    });
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Connector, e: CanvasPointerEvent) {
    editor.transform.endAction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    if (shape instanceof Connector) {
      const canvas = editor.canvas;
      const tailAnchorPoint = shape.getTailAnchorPoint();
      const headAnchorPoint = shape.getHeadAnchorPoint();
      const p1 = lcs2ccs(canvas, shape, tailAnchorPoint);
      const p2 = lcs2ccs(canvas, shape, headAnchorPoint);
      const pathCCS = shape.path.map((p) => lcs2ccs(canvas, shape, p));
      guide.drawDottedLine(canvas, p1, pathCCS[0]);
      guide.drawDottedLine(canvas, p2, pathCCS[pathCCS.length - 1]);
      guide.drawControlPoint(canvas, p1, shape.tail ? 5 : 1);
      guide.drawControlPoint(canvas, p2, shape.head ? 5 : 1);
    }
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    this.draw(editor, shape);
    if (shape instanceof Connector) {
      const isHead = this.controlPoint > 0;
      if (!isHead && shape.tail && shape.tail.connectable) {
        const manipulator = manipulatorManager.get(shape.tail.type);
        if (manipulator) manipulator.drawHovering(editor, shape.tail, e);
      }
      if (isHead && shape.head && shape.head.connectable) {
        const manipulator = manipulatorManager.get(shape.head.type);
        if (manipulator) manipulator.drawHovering(editor, shape.head, e);
      }
    }
  }
}
