import type { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Box, Path } from "../shapes";
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
import { ActionKind } from "../core";
import { moveSingleShape, resizeShape, resolveAllConstraints } from "../macro";

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

  isKeepSizeRatio(): boolean {
    return this.keepSizeRatio;
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

  initialize(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {
    const canvas = editor.canvas;
    const selections = editor.selection.getShapes();
    const rect = editor.selection.getBoundingRect(canvas);

    // initialize snappers
    // this.gridSnapper.setPointToSnap(
    //   editor,
    //   this,
    //   getRectPosition(rect, this.options.position)
    // );
    // this.sizeSnapper.setSizeToSnap(editor, shape, this);
    // this.sizeSnapper.setReferencePoints(editor, [shape]);

    // keep size ratio
    this.keepSizeRatio = !e.shiftDown;

    editor.transform.startAction(ActionKind.RESIZE);
    this.initialEnclosure = geometry.rectToPolygon(rect);
    this.initialSnapshot = {};
    for (const sh of selections) {
      sh.traverse((s) => (this.initialSnapshot[s.id] = s.toJSON(false, true)));
    }
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const selections = editor.selection.getShapes();
    const canvas = editor.canvas;

    // snapping
    // this.gridSnapper.snap(editor, shape, this);
    // this.sizeSnapper.snap(editor, shape, this);

    // compute (dx, dy) in initial shape's LCS
    // const dragPoint = ccs2lcs(canvas, shape, this.dragPointCCS);
    let dx = this.dx; // dragPoint[0] - this.dragStartPoint[0];
    let dy = this.dy; // dragPoint[1] - this.dragStartPoint[1];

    // initialize control enclosure
    let controlEnclosure = geometry.pathCopy(this.initialEnclosure);
    const initialRect = geometry.boundingRect(controlEnclosure);
    const w = geometry.width(initialRect);
    const h = geometry.height(initialRect);
    const r = h / w;

    // update control enclosure based on mouse movement (dx, dy)
    switch (this.options.position) {
      case ControllerPosition.LEFT_TOP:
        if (this.keepSizeRatio) {
          if (dx * r > dy / r) {
            dy = dx * r;
          } else {
            dx = dy / r;
          }
        }
        controlEnclosure[0][0] += dx;
        controlEnclosure[0][1] += dy;
        controlEnclosure[4][0] += dx;
        controlEnclosure[4][1] += dy;
        controlEnclosure[1][1] += dy;
        controlEnclosure[3][0] += dx;
        break;
      case ControllerPosition.RIGHT_TOP:
        if (this.keepSizeRatio) {
          if (dx * r > dy / r) {
            dy = -dx * r;
          } else {
            dx = -dy / r;
          }
        }
        controlEnclosure[1][0] += dx;
        controlEnclosure[1][1] += dy;
        controlEnclosure[0][1] += dy;
        controlEnclosure[2][0] += dx;
        controlEnclosure[4][1] += dy;
        break;
      case ControllerPosition.RIGHT_BOTTOM:
        if (this.keepSizeRatio) {
          if (dx * r > dy / r) {
            dy = dx * r;
          } else {
            dx = dy / r;
          }
        }
        controlEnclosure[2][0] += dx;
        controlEnclosure[2][1] += dy;
        controlEnclosure[1][0] += dx;
        controlEnclosure[3][1] += dy;
        break;
      case ControllerPosition.LEFT_BOTTOM:
        if (this.keepSizeRatio) {
          if (dx * r > dy / r) {
            dy = -dx * r;
          } else {
            dx = -dy / r;
          }
        }
        controlEnclosure[3][0] += dx;
        controlEnclosure[3][1] += dy;
        controlEnclosure[2][1] += dy;
        controlEnclosure[0][0] += dx;
        controlEnclosure[4][0] += dx;
        break;
    }

    // normalize control enclosure
    controlEnclosure = geometry.rectToPolygon(
      geometry.normalizeRect(geometry.boundingRect(controlEnclosure))
    );

    // compute final target position and size
    const targetLeft = controlEnclosure[0][0];
    const targetTop = controlEnclosure[0][1];
    const targetRight = controlEnclosure[2][0];
    const targetBottom = controlEnclosure[2][1];
    const targetWidth = targetRight - targetLeft;
    const targetHeight = targetBottom - targetTop;
    const targetRect = [
      [targetLeft, targetTop],
      [targetRight, targetBottom],
    ];
    const ratio = targetWidth / w; // shape.width;

    // transform shapes
    editor.transform.transact((tx) => {
      const page = editor.getCurrentPage()!;

      // scale selected shapes
      for (const sh of selections) {
        sh.traverse((s) => {
          if (s !== shape && s instanceof Shape) {
            const initialChild = this.initialSnapshot[s.id];
            const initialChildRect = [
              [initialChild.left, initialChild.top],
              [
                initialChild.left + initialChild.width,
                initialChild.top + initialChild.height,
              ],
            ];
            const targetChildRect = geometry.projectPoints(
              initialChildRect,
              initialRect,
              targetRect
            );
            const l = targetChildRect[0][0];
            const t = targetChildRect[0][1];
            const r = targetChildRect[1][0];
            const b = targetChildRect[1][1];
            const w = r - l;
            const h = b - t;
            moveSingleShape(tx, s, l - s.left, t - s.top);
            resizeShape(tx, s, w, h);
            if (s instanceof Path) {
              const newPath = geometry.projectPoints(
                initialChild.path,
                initialChildRect,
                targetChildRect
              );
              tx.assign(s, "path", newPath);
            }
            if (this.keepSizeRatio) {
              tx.assign(s, "fontSize", initialChild.fontSize * ratio);
              if (s instanceof Box) {
                tx.assign(
                  s,
                  "padding",
                  initialChild.padding.map((v: number) => v * ratio)
                );
              }
            }
          }
        });
      }
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

    drawPolylineInLCS(canvas, shape, ghost);

    // draw snapping
    // this.sizeSnapper.draw(editor);
  }
}
