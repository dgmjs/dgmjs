import type { CanvasPointerEvent } from "../graphics/graphics";
import { Shape, Page } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { Color, Cursor } from "../graphics/const";
import { Snap } from "../manipulators/snap";
import { lcs2ccs } from "../graphics/utils";
import { moveShapes, resolveAllConstraints } from "../macro";
import { ActionKind } from "../core";
import { ableToContain } from "./utils";
import { GridSnapper, MoveSnapper } from "../manipulators/snapper";

/**
 * SelectionsMoveController
 */
export class SelectionsMoveController extends Controller {
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

  initialize(editor: Editor, shape: Shape): void {
    // initialize snappers
    const rect = editor.selection.getBoundingRect(editor.canvas);

    this.gridSnapper.setPointToSnap(editor, this, rect[0]);

    // TODO: snap to points 와 reference points를 직접 파라미터로 넘겨야 할듯.
    this.moveSnapper.initialize(editor, shape, this);

    editor.transform.startAction(ActionKind.MOVE);
  }

  /**
   * Update
   * @param shape (is a page in group manipulator)
   */
  update(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const selections = editor.selection.getShapes();

    // update snappers
    this.gridSnapper.update(editor, shape, this);

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
  finalize(editor: Editor, shape: Shape) {
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
    // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
