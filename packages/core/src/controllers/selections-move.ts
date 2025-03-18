import type { CanvasPointerEvent } from "../graphics/graphics";
import { Shape, Page, Movable } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { Color, Cursor } from "../graphics/const";
import { lcs2ccs } from "../graphics/utils";
import { moveShapes, resolveAllConstraints } from "../macro";
import { ActionKind } from "../core";
import { ableToContain, getMovableShape } from "./utils";
import { GridSnapper, MoveSnapper } from "../manipulators/snapper";
import { getAllDescendant } from "../utils/shape-utils";
import { unique } from "../std/lambda";

/**
 * SelectionsMoveController
 */
export class SelectionsMoveController extends Controller {
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
    return editor.selection.size() > 1;
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (shape instanceof Page) {
      const canvas = editor.canvas;
      const p = canvas.globalCoordTransformRev([e.x, e.y]);
      for (let s of editor.selection.getShapes()) {
        if (s.visible && s.enable && s.containsPoint(canvas, p)) return true;
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
    return [Cursor.MOVE, 0];
  }

  getTargetShapes(editor: Editor) {
    const selection = editor.selection
      .getShapes()
      .map((s) => getMovableShape(s));
    return unique(selection);
  }

  initialize(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {
    const rect = editor.selection.getBoundingRect(editor.canvas);
    const selection = this.getTargetShapes(editor);

    // initialize shift movement
    this.shiftMove = "none";

    // initialize snappers
    this.gridSnapper.setPointToSnap(editor, this, rect[0]);
    this.moveSnapper.setRectToSnap(editor, shape, rect);
    this.moveSnapper.setReferencePoints(editor, getAllDescendant(selection));

    editor.transform.startAction(ActionKind.MOVE);
  }

  /**
   * Update
   * @param shape (is a page in group manipulator)
   */
  update(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    const rect = editor.selection.getBoundingRect(editor.canvas);
    const selections = this.getTargetShapes(editor);

    // return if not moving
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
    // determine container
    this.container =
      editor
        .getCurrentPage()
        ?.getShapeAt(canvas, this.dragPointGCS, selections) ?? null;
    if (this.container) {
      for (let s of selections) {
        if (!ableToContain(this.container, s)) {
          this.container = null;
          break;
        }
      }
    }
    if (!this.container) this.container = editor.getCurrentPage();

    // move shapes
    editor.transform.transact((tx) => {
      const page = editor.getCurrentPage()!;
      moveShapes(
        tx,
        page,
        selections,
        this.dxStepGCS,
        this.dyStepGCS,
        this.container
      );
      resolveAllConstraints(tx, page, canvas);
    });
  }

  /**
   * Finalize shape by ghost
   * @param shape (is a page in group manipulator)
   */
  finalize(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    editor.transform.endAction();
  }

  /**
   * Draw ghost for the selected shapes
   * @param shape (is a page in group manipulator)
   */
  draw(editor: Editor, shape: Shape) {
    if (shape instanceof Page) {
      const canvas = editor.canvas;
      let ghostCCS = editor.selection
        .getEnclosure(editor.canvas)
        .map((p) => lcs2ccs(canvas, shape, p));
      canvas.storeState();
      canvas.strokeColor = Color.SELECTION;
      canvas.strokeWidth = canvas.px * 1.5;
      canvas.strokePattern = [];
      canvas.roughness = 0;
      canvas.alpha = 1;
      canvas.polyline(ghostCCS);
      editor.selection.getShapes().forEach((s) => {
        const shapeGhostCSS = s
          .getEnclosure()
          .map((p) => lcs2ccs(canvas, s, p));
        canvas.polyline(shapeGhostCSS);
      });
      canvas.restoreState();
    }
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    if (this.container) {
      const manipulator = manipulatorManager.get(this.container.type);
      if (manipulator) manipulator.drawHovering(editor, this.container, e);
    }

    // draw snapping
    this.moveSnapper.draw(editor);
  }
}
