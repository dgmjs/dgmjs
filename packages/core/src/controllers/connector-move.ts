import type { CanvasPointerEvent } from "../graphics/graphics";
import { Shape, Line, Movable, Connector, Page, Path } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import * as geometry from "../graphics/geometry";
import { Cursor } from "../graphics/const";
import { changeParent, resolveAllConstraints, setPath } from "../macro";
import { ActionKind } from "../core";
import { ableToContain, findConnectionAnchor } from "./utils";
import { GridSnapper, MoveSnapper } from "../manipulators/snapper";
import { getAllDescendant } from "../utils/shape-utils";

/**
 * ConnectorMove Controller
 */
export class ConnectorMoveController extends Controller {
  /**
   * Grid snapper
   */
  gridSnapper: GridSnapper;

  /**
   * Move snapper
   */
  moveSnapper: MoveSnapper;

  /**
   * Ghost polygon
   */
  controlPath: number[][];

  /**
   * Initial head
   */
  initialHead: Shape | null;

  /**
   * Initial tail
   */
  initialTail: Shape | null;

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
    this.controlPath = [];
    this.initialHead = null;
    this.initialTail = null;
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
      shape instanceof Connector
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
    // initialize shift movement
    this.shiftMove = "none";

    // initialize snappers
    this.gridSnapper.setPointToSnap(editor, this, [shape.left, shape.top]);
    this.moveSnapper.setRectToSnap(editor, shape, shape.getBoundingRect());
    this.moveSnapper.setReferencePoints(editor, getAllDescendant([shape]));

    this.controlPath = geometry.pathCopy((shape as Path).path);
    this.controlPath[0] = (shape as Connector).getTailAnchorPoint();
    this.controlPath[this.controlPath.length - 1] = (
      shape as Connector
    ).getHeadAnchorPoint();
    this.initialHead = (shape as Connector).head;
    this.initialTail = (shape as Connector).tail;
    editor.transform.startAction(ActionKind.REPATH);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    // apply movable property
    let targetShape: Shape | null = shape;
    if (targetShape.movable === Movable.PARENT)
      targetShape = targetShape.findParent(
        (s) => (s as Shape).movable !== Movable.PARENT
      ) as Shape;
    if (!targetShape || targetShape instanceof Page) return;

    // return if no change
    if (this.dxStepGCS === 0 && this.dyStepGCS === 0) return;

    // determine shift-move state
    if (e.shiftDown && this.shiftMove === "none") {
      this.shiftMove =
        Math.abs(this.dxStepGCS) > Math.abs(this.dyStepGCS) ? "horz" : "vert";
    }

    // snap dragging points
    this.gridSnapper.snap(editor, targetShape, this);
    this.moveSnapper.snap(
      editor,
      targetShape,
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
      this.dx = 0;
    if (
      targetShape.movable === Movable.HORZ ||
      targetShape.movable === Movable.NONE
    )
      this.dy = 0;

    // determine container
    const canvas = editor.canvas;
    let p2 = targetShape.localCoordTransform(canvas, this.dragPoint, false);
    this.container =
      editor.getCurrentPage()?.getShapeAt(canvas, p2, [shape]) ?? null;
    if (this.container && !ableToContain(this.container, targetShape)) {
      this.container = null;
    }
    if (!this.container) this.container = editor.getCurrentPage();

    // update ghost
    let newPath = this.controlPath.map((p) => [p[0] + this.dx, p[1] + this.dy]);

    // find ends and anchor points
    let [headEnd, headAnchor] = findConnectionAnchor(
      editor,
      shape as Connector,
      newPath[newPath.length - 1]
    );
    let [tailEnd, tailAnchor] = findConnectionAnchor(
      editor,
      shape as Connector,
      newPath[0]
    );
    if (this.initialHead !== headEnd) {
      headEnd = null;
      headAnchor = [0.5, 0.5];
    }
    if (this.initialTail !== tailEnd) {
      tailEnd = null;
      tailAnchor = [0.5, 0.5];
    }

    // transform shape
    const page = editor.getCurrentPage()!;
    editor.transform.transact((tx) => {
      if (this.dx !== 0 || this.dy !== 0) {
        setPath(tx, shape as Line, newPath);
        tx.assignRef(shape, "head", headEnd);
        tx.assignRef(shape, "tail", tailEnd);
        tx.assign(shape, "headAnchor", headAnchor);
        tx.assign(shape, "tailAnchor", tailAnchor);
        if (this.container && shape.parent !== this.container) {
          changeParent(tx, shape, this.container);
        }
        resolveAllConstraints(tx, page, canvas);
      }
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
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    super.drawDragging(editor, shape, e);
    if (this.container) {
      const manipulator = manipulatorManager.get(this.container.type);
      if (manipulator) manipulator.drawHovering(editor, this.container, e);
    }

    // draw snapping
    this.moveSnapper.draw(editor);
  }
}
