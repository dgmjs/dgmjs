import type { Canvas, CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Box, Path } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import {
  Cursor,
  CONTROL_POINT_APOTHEM,
  ANGLE_STEP,
  ControllerPosition,
} from "../graphics/const";
import { angleInCCS, lcs2ccs } from "../graphics/utils";
import * as guide from "../utils/guide";
import { getControllerPosition } from "./utils";
import { resolveAllConstraints } from "../macro";
import { ActionKind } from "../core";

interface BoxRotateControllerOptions {
  position: string;
  distance: number;
}

/**
 * Box Rotate Controller
 */
export class BoxRotateController extends Controller {
  /**
   * Options of the controller
   */
  options: BoxRotateControllerOptions;

  constructor(
    manipulator: Manipulator,
    options?: Partial<BoxRotateControllerOptions>
  ) {
    super(manipulator);
    this.hasHandle = true;
    this.options = {
      position: ControllerPosition.LEFT_TOP,
      distance: CONTROL_POINT_APOTHEM * 3,
      ...options,
    };
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    let value =
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      shape.rotatable &&
      !editor.pointerDownUnselectedShape;
    // don't allow rotating a single line
    if (shape instanceof Path && shape.path.length === 2) value = false;
    // don't allow rotating when path editable
    if (shape instanceof Path && shape.pathEditable) value = false;
    // don't allow rotating when duplicated dragging
    if (editor.duplicatedDragging) value = false;
    return value;
  }

  /**
   * Get coord of the control point in CCS
   */
  getControlPoint(canvas: Canvas, shape: Shape): number[] {
    return getControllerPosition(
      canvas,
      shape,
      this.options.position,
      this.options.distance
    );
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    const canvas = editor.canvas;
    const p = [e.x, e.y];
    const cpCCS = lcs2ccs(canvas, shape, this.getControlPoint(canvas, shape));
    return guide.inControlPoint(canvas, p, cpCCS, 0);
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
      case ControllerPosition.TOP:
        break;
      case ControllerPosition.BOTTOM:
        angle += 180;
        break;
      case ControllerPosition.LEFT:
        angle -= 90;
        break;
      case ControllerPosition.RIGHT:
        angle += 90;
        break;
      case ControllerPosition.LEFT_TOP:
        angle -= 45;
        break;
      case ControllerPosition.RIGHT_TOP:
        angle += 45;
        break;
      case ControllerPosition.RIGHT_BOTTOM:
        angle += 135;
        break;
      case ControllerPosition.LEFT_BOTTOM:
        angle -= 135;
        break;
    }
    angle = geometry.normalizeAngle(angle);
    return [Cursor.ROTATE, angle];
  }

  /**
   * Initialize ghost
   */
  initialize(editor: Editor, shape: Shape): void {
    editor.transform.startAction(ActionKind.ROTATE);
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    const enclosure = shape.getEnclosure();
    const cp = this.getControlPoint(editor.canvas, shape);
    const center = geometry.mid(enclosure[0], enclosure[2]);
    const angle0 = geometry.angle(center, cp);
    const angle1 = geometry.angle(center, this.dragPoint);
    const d = geometry.normalizeAngle(angle1 - angle0);
    const delta = Math.round(d / ANGLE_STEP) * ANGLE_STEP;
    let angle = Math.round(geometry.normalizeAngle(shape.rotate + delta));
    // transform shapes
    editor.transform.transact((tx) => {
      const page = editor.getCurrentPage()!;
      tx.assign(shape, "rotate", angle);
      resolveAllConstraints(tx, page, editor.canvas);
    });
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box) {
    editor.transform.endAction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const cpCCS = lcs2ccs(canvas, shape, this.getControlPoint(canvas, shape));
    guide.drawControlPoint(canvas, cpCCS, 1, 0);
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    // draw ghost
    const ghost = shape.getEnclosure();
    guide.drawPolylineInLCS(canvas, shape, ghost);
    // const cp = lcs2ccs(
    //   canvas,
    //   shape,
    //   geometry.mid(this.ghost[0], this.ghost[2])
    // );
    // const text =
    //   geometry
    //     .normalizeAngle(Math.round(shape.rotate + this.delta))
    //     .toString() + "°";
    // guide.drawText(canvas, cp, text);
    // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
