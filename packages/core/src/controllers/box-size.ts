import type { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Box, Sizable, Path, Text } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import {
  CONTROL_POINT_APOTHEM,
  Cursor,
  ControllerPosition,
} from "../graphics/const";
import { lcs2ccs, angleInCCS } from "../graphics/utils";
import {
  drawControlPoint,
  drawPolylineInLCS,
  inControlPoint,
} from "../utils/guide";
import { fitEnclosureInCSS, getControllerPosition } from "./utils";
import {
  moveSingleShape,
  moveShapes,
  resizeShape,
  resolveAllConstraints,
} from "../macro";
import { ActionKind } from "../core";
import { GridSnapper, SizeSnapper } from "../manipulators/snapper";

interface BoxSizeControllerOptions {
  position: string;
  doScale: boolean;
  doScaleChildren: boolean;
}

/**
 * Box Size Controller
 */
export class BoxSizeController extends Controller {
  /**
   * Options of the controller
   */
  options: BoxSizeControllerOptions;

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
    options: Partial<BoxSizeControllerOptions>
  ) {
    super(manipulator);
    this.hasHandle = true;
    this.options = {
      position: ControllerPosition.RIGHT_BOTTOM,
      doScale: false,
      doScaleChildren: false,
      ...options,
    };
    this.keepSizeRatio = false;
    this.gridSnapper = new GridSnapper();
    this.sizeSnapper = new SizeSnapper();
    this.initialEnclosure = [];
    this.initialSnapshot = {};
  }

  isKeepSizeRatio(): boolean {
    return this.options.doScale || this.keepSizeRatio;
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    const MIN1 = CONTROL_POINT_APOTHEM * 4;
    const MIN2 = CONTROL_POINT_APOTHEM * 4;
    let value =
      editor.selection.size() === 1 && editor.selection.isSelected(shape);
    switch (this.options.position) {
      case ControllerPosition.TOP:
        value =
          value &&
          (shape.sizable === Sizable.VERT ||
            (shape.sizable === Sizable.FREE && shape.width > MIN1));
        break;
      case ControllerPosition.RIGHT:
        value =
          value &&
          (shape.sizable === Sizable.HORZ ||
            (shape.sizable === Sizable.FREE && shape.height > MIN1));
        break;
      case ControllerPosition.BOTTOM:
        value =
          value &&
          (shape.sizable === Sizable.VERT ||
            (shape.sizable === Sizable.FREE && shape.width > MIN1));
        break;
      case ControllerPosition.LEFT:
        value =
          value &&
          (shape.sizable === Sizable.HORZ ||
            (shape.sizable === Sizable.FREE && shape.height > MIN1));
        break;
      case ControllerPosition.LEFT_TOP:
        value =
          value &&
          shape.width > MIN2 &&
          shape.height > MIN2 &&
          (shape.sizable === Sizable.FREE || shape.sizable === Sizable.RATIO);
        break;
      case ControllerPosition.RIGHT_TOP:
        value =
          value &&
          shape.width > MIN2 &&
          shape.height > MIN2 &&
          (shape.sizable === Sizable.FREE || shape.sizable === Sizable.RATIO);
        break;
      case ControllerPosition.RIGHT_BOTTOM:
        value =
          value &&
          (shape.sizable === Sizable.FREE || shape.sizable === Sizable.RATIO);
        break;
      case ControllerPosition.LEFT_BOTTOM:
        value =
          value &&
          shape.width > MIN2 &&
          shape.height > MIN2 &&
          (shape.sizable === Sizable.FREE || shape.sizable === Sizable.RATIO);
        break;
    }
    // don't allow resizing a single line
    if (shape instanceof Path && shape.path.length === 2) value = false;
    // don't allow resizing when path editable
    if (shape instanceof Path && shape.pathEditable) value = false;
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
    const cp = lcs2ccs(
      canvas,
      shape,
      getControllerPosition(canvas, shape, this.options.position)
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
    // keep size ratio
    if (e.shiftDown) {
      this.keepSizeRatio = shape.sizable !== Sizable.RATIO;
    } else {
      this.keepSizeRatio = shape.sizable === Sizable.RATIO;
    }

    // initialize snappers
    this.gridSnapper.setPointToSnap(
      editor,
      this,
      getControllerPosition(editor.canvas, shape, this.options.position)
    );
    this.sizeSnapper.setSizeToSnap(editor, shape, this);
    this.sizeSnapper.setReferencePoints(editor, [shape]);

    editor.transform.startAction(ActionKind.RESIZE);
    this.initialEnclosure = shape.getEnclosure();
    this.initialSnapshot = {};
    shape.traverse(
      (s) => (this.initialSnapshot[s.id] = s.toJSON(false, true, true))
    );
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const canvas = editor.canvas;

    // snapping
    this.gridSnapper.snap(editor, shape, this);
    this.sizeSnapper.snap(editor, shape, this);

    // remember current shape states
    const memo = shape.toJSON(false, true, true);
    const initialShape = this.initialSnapshot[shape.id];
    shape.fromJSON(initialShape);

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
      case ControllerPosition.TOP:
        controlEnclosure[0][1] += dy;
        controlEnclosure[1][1] += dy;
        controlEnclosure[4][1] += dy;
        if (this.isKeepSizeRatio()) {
          controlEnclosure[1][0] += -dy / r;
          controlEnclosure[2][0] += -dy / r;
        }
        break;
      case ControllerPosition.RIGHT:
        controlEnclosure[1][0] += dx;
        controlEnclosure[2][0] += dx;
        if (this.isKeepSizeRatio()) {
          controlEnclosure[2][1] += dx * r;
          controlEnclosure[3][1] += dx * r;
        }
        break;
      case ControllerPosition.BOTTOM:
        controlEnclosure[2][1] += dy;
        controlEnclosure[3][1] += dy;
        if (this.isKeepSizeRatio()) {
          controlEnclosure[1][0] += dy / r;
          controlEnclosure[2][0] += dy / r;
        }
        break;
      case ControllerPosition.LEFT:
        controlEnclosure[0][0] += dx;
        controlEnclosure[3][0] += dx;
        controlEnclosure[4][0] += dx;
        if (this.isKeepSizeRatio()) {
          controlEnclosure[2][1] += -dx * r;
          controlEnclosure[3][1] += -dx * r;
        }
        break;
      case ControllerPosition.LEFT_TOP:
        if (this.isKeepSizeRatio()) {
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
        if (this.isKeepSizeRatio()) {
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
        if (this.isKeepSizeRatio()) {
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
        if (this.isKeepSizeRatio()) {
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

    // find best-fit to control enclosure and adjust position
    const controlEnclosureCCS = controlEnclosure.map((p) =>
      lcs2ccs(canvas, shape, p)
    );
    const delta = fitEnclosureInCSS(
      editor.canvas,
      shape,
      controlEnclosure[0][0],
      controlEnclosure[0][1],
      controlEnclosure[2][0] - controlEnclosure[0][0],
      controlEnclosure[2][1] - controlEnclosure[0][1],
      controlEnclosureCCS
    );
    controlEnclosure.forEach((p) => {
      p[0] += delta[0];
      p[1] += delta[1];
    });

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
    const ratio = targetWidth / shape.width;

    // restore shape states
    shape.fromJSON(memo);

    // auto wordwrap
    const autoWordWrap =
      shape instanceof Text &&
      !shape.wordWrap &&
      w !== targetWidth &&
      (this.options.position === ControllerPosition.RIGHT ||
        this.options.position === ControllerPosition.LEFT);

    // transform shapes
    editor.transform.transact((tx) => {
      const page = editor.getCurrentPage()!;
      if (autoWordWrap) {
        tx.assign(shape, "wordWrap", true);
      }
      resizeShape(tx, shape, targetWidth, targetHeight);
      moveShapes(
        tx,
        page,
        [shape],
        targetLeft - shape.left,
        targetTop - shape.top
      );

      // resize path
      if (shape instanceof Path) {
        const newPath = geometry.projectPoints(
          initialShape.path,
          initialRect,
          targetRect
        );
        tx.assign(shape, "path", newPath);
      }

      // do scale (font, padding and path)
      if (this.options.doScale) {
        tx.assign(shape, "fontSize", initialShape.fontSize * ratio);
        if (shape instanceof Box) {
          tx.assign(
            shape,
            "padding",
            initialShape.padding.map((v: number) => v * ratio)
          );
        }
      }

      // do scale children
      if (this.options.doScaleChildren) {
        shape.traverse((s) => {
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
            if (this.options.doScale) {
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
    const p = lcs2ccs(
      canvas,
      shape,
      getControllerPosition(canvas, shape, this.options.position)
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
    const ghost = shape.getEnclosure();
    drawPolylineInLCS(canvas, shape, ghost);

    // draw snapping
    this.sizeSnapper.draw(editor);
  }
}
