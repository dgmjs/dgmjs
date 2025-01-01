import type { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Box } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import { Cursor, ControllerPosition } from "../graphics/const";
import { lcs2ccs, angleInCCS } from "../graphics/utils";
import {
  drawControlPoint,
  drawPolylineInLCS,
  inControlPoint,
} from "../utils/guide";
import { getRectPosition } from "./utils";
import { GridSnapper, SizeSnapper } from "../manipulators/snapper";

interface SelectionsSizeControllerOptions {
  position: string;
}

/**
 * Selections Size Controller
 */
export class SelectionsSizeController extends Controller {
  /**
   * Options of the controller
   */
  options: SelectionsSizeControllerOptions;

  /**
   * Whether keep size ratio or not
   */
  keepSizeRatio: boolean;

  /**
   * Grid snapper
   */
  gridSnapper: GridSnapper;

  /**
   * Size snapper
   */
  sizeSnapper: SizeSnapper;

  /**
   * Temporal memory for shape's enclosure
   */
  initialEnclosure: number[][];

  /**
   * Initial snapshot of shapes states
   */
  initialSnapshot: Record<string, any>;

  constructor(
    manipulator: Manipulator,
    options: Partial<SelectionsSizeControllerOptions>
  ) {
    super(manipulator);
    this.hasHandle = true;
    this.options = {
      position: ControllerPosition.RIGHT_BOTTOM,
      ...options,
    };
    this.keepSizeRatio = false;
    this.gridSnapper = new GridSnapper();
    this.sizeSnapper = new SizeSnapper();
    this.initialEnclosure = [];
    this.initialSnapshot = {};
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    let value = editor.selection.size() > 1;
    // don't allow resizing when pointer down on unselected shape
    if (editor.pointerDownUnselectedShape) value = false;
    // don't allow resizing when dragging a duplicated shape
    if (editor.duplicatedDragging) value = false;

    // console.log("active", this.options.position, value);

    return value;
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    const canvas = editor.canvas;
    const p = [e.x, e.y];
    const rect = editor.selection.getBoundingRect(canvas);
    const cp = lcs2ccs(
      canvas,
      shape,
      getRectPosition(rect, this.options.position)
    );
    const angle = angleInCCS(canvas, shape);
    return inControlPoint(canvas, p, cp, angle);
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
    const canvas = editor.canvas;
    let angle = angleInCCS(canvas, shape);
    angle = Math.round(angle);
    switch (this.options.position) {
      case ControllerPosition.LEFT:
      case ControllerPosition.RIGHT:
        angle += 90;
        break;
      case ControllerPosition.LEFT_TOP:
      case ControllerPosition.RIGHT_BOTTOM:
        angle += 135;
        break;
      case ControllerPosition.RIGHT_TOP:
      case ControllerPosition.LEFT_BOTTOM:
        angle += 45;
        break;
    }
    angle = geometry.normalizeAngle(angle);
    if (angle >= 180) angle -= 180;
    return [Cursor.RESIZE, angle];
  }

  initialize(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {}

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape, e: CanvasPointerEvent) {}

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box, e: CanvasPointerEvent) {}

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const rect = editor.selection.getBoundingRect(canvas);
    const p = lcs2ccs(
      canvas,
      shape,
      getRectPosition(rect, this.options.position)
    );
    const angle = angleInCCS(canvas, shape);
    drawControlPoint(canvas, p, 0, angle);
  }

  /**
   * Draw ghost while dragging
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    super.drawDragging(editor, shape, e);
    // draw ghost
    const canvas = editor.canvas;
    const rect = editor.selection.getBoundingRect(canvas);
    const ghost = geometry.rectToPolygon(rect);
    // const ghost = shape.getEnclosure();

    drawPolylineInLCS(canvas, shape, ghost);

    // draw snapping
    // this.sizeSnapper.draw(editor);
  }
}
