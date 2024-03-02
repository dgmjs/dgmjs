/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import type { CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Box, Sizable, Line, Document } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import {
  CONTROL_POINT_APOTHEM,
  Cursor,
  SizingPosition,
} from "../graphics/const";
import { lcs2ccs, angleInCCS, ccs2lcs } from "../graphics/utils";
import {
  drawControlPoint,
  drawPolylineInLCS,
  inControlPoint,
} from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { fitEnclosureInCSS } from "./utils";

const MIN_SIZE = CONTROL_POINT_APOTHEM * 2;

/**
 * Box Size Controller
 */
export class BoxSizeController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * The position of controller
   */
  controlPosition: string;

  /**
   * Scale fontSize and padding
   */
  doScale: boolean;

  /**
   * Scale children
   */
  doScaleChildren: boolean;

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
    position: string,
    doScale: boolean = false,
    doScaleChildren: boolean = false
  ) {
    super(manipulator);
    this.snap = new Snap();
    this.controlPosition = position;
    this.doScale = doScale;
    this.doScaleChildren = doScaleChildren;
    this.initialEnclosure = [];
    this.initialSnapshot = {};
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    const MIN1 = CONTROL_POINT_APOTHEM * 8;
    const MIN2 = CONTROL_POINT_APOTHEM * 4;
    let value =
      editor.selection.size() === 1 && editor.selection.isSelected(shape);
    switch (this.controlPosition) {
      case SizingPosition.TOP:
        value =
          value &&
          shape.width > MIN1 &&
          (shape.sizable === Sizable.VERT || shape.sizable === Sizable.FREE);
        break;
      case SizingPosition.RIGHT:
        value =
          value &&
          shape.height > MIN1 &&
          (shape.sizable === Sizable.HORZ || shape.sizable === Sizable.FREE);
        break;
      case SizingPosition.BOTTOM:
        value =
          value &&
          shape.width > MIN1 &&
          (shape.sizable === Sizable.VERT || shape.sizable === Sizable.FREE);
        break;
      case SizingPosition.LEFT:
        value =
          value &&
          shape.height > MIN1 &&
          (shape.sizable === Sizable.HORZ || shape.sizable === Sizable.FREE);
        break;
      case SizingPosition.LEFT_TOP:
        value =
          value &&
          shape.width > MIN2 &&
          shape.height > MIN2 &&
          (shape.sizable === Sizable.FREE || shape.sizable === Sizable.RATIO);
        break;
      case SizingPosition.RIGHT_TOP:
        value =
          value &&
          shape.width > MIN2 &&
          shape.height > MIN2 &&
          (shape.sizable === Sizable.FREE || shape.sizable === Sizable.RATIO);
        break;
      case SizingPosition.RIGHT_BOTTOM:
        value =
          value &&
          (shape.sizable === Sizable.FREE || shape.sizable === Sizable.RATIO);
        break;
      case SizingPosition.LEFT_BOTTOM:
        value =
          value &&
          shape.width > MIN2 &&
          shape.height > MIN2 &&
          (shape.sizable === Sizable.FREE || shape.sizable === Sizable.RATIO);
        break;
    }
    // don't allow resizing a single line
    if (shape instanceof Line && shape.path.length === 2) value = false;
    // don't allow resizing when path editable
    if (shape instanceof Line && shape.pathEditable) value = false;
    return value;
  }

  /**
   * Returns the point of the position of the controller
   */
  getControlPosition(editor: Editor, shape: Shape, position: string): number[] {
    const enclosure = shape.getEnclosure();
    const offset = 0; //CONTROL_POINT_APOTHEM / editor.canvas.scale;
    if (enclosure && enclosure.length > 0) {
      switch (position) {
        case SizingPosition.TOP: {
          const cp = geometry.mid(enclosure[0], enclosure[1]);
          return [cp[0], cp[1] - offset];
        }
        case SizingPosition.RIGHT: {
          const cp = geometry.mid(enclosure[1], enclosure[2]);
          return [cp[0] + offset, cp[1]];
        }
        case SizingPosition.BOTTOM: {
          const cp = geometry.mid(enclosure[3], enclosure[2]);
          return [cp[0], cp[1] + offset];
        }
        case SizingPosition.LEFT: {
          const cp = geometry.mid(enclosure[0], enclosure[3]);
          return [cp[0] - offset, cp[1]];
        }
        case SizingPosition.LEFT_TOP: {
          return [enclosure[0][0] - offset, enclosure[0][1] - offset];
        }
        case SizingPosition.RIGHT_TOP: {
          return [enclosure[1][0] + offset, enclosure[1][1] - offset];
        }
        case SizingPosition.RIGHT_BOTTOM: {
          return [enclosure[2][0] + offset, enclosure[2][1] + offset];
        }
        case SizingPosition.LEFT_BOTTOM: {
          return [enclosure[3][0] - offset, enclosure[3][1] + offset];
        }
      }
    }
    return [-1, -1];
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (this.dragging) return true;
    const canvas = editor.canvas;
    const p = [e.x, e.y];
    const cp = lcs2ccs(
      canvas,
      shape,
      this.getControlPosition(editor, shape, this.controlPosition)
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
    switch (this.controlPosition) {
      case SizingPosition.LEFT:
      case SizingPosition.RIGHT:
        angle += 90;
        break;
      case SizingPosition.LEFT_TOP:
      case SizingPosition.RIGHT_BOTTOM:
        angle += 135;
        break;
      case SizingPosition.RIGHT_TOP:
      case SizingPosition.LEFT_BOTTOM:
        angle += 45;
        break;
    }
    angle = geometry.normalizeAngle(angle);
    if (angle >= 180) angle -= 180;
    return [Cursor.RESIZE, angle];
  }

  initialize(editor: Editor, shape: Shape): void {
    editor.transform.startTransaction("resize");
    this.initialEnclosure = shape.getEnclosure();
    this.initialSnapshot = {};
    shape.traverse((s) => (this.initialSnapshot[s.id] = s.toJSON(false, true)));
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;

    // remember current shape states
    const memo = shape.toJSON(false, true);
    const initialShape = this.initialSnapshot[shape.id];
    shape.fromJSON(initialShape);

    // compute (dx, dy) in initial shape's LCS
    const dragPoint = ccs2lcs(canvas, shape, this.dragPointCCS);
    let dx = dragPoint[0] - this.dragStartPoint[0];
    let dy = dragPoint[1] - this.dragStartPoint[1];

    // initialize control enclosure
    const controlEnclosure = geometry.pathCopy(this.initialEnclosure);
    const initialRect = geometry.boundingRect(controlEnclosure);
    const w = geometry.width(initialRect);
    const h = geometry.height(initialRect);
    const r = h / w;

    // update control enclosure based on mouse movement (dx, dy)
    switch (this.controlPosition) {
      case SizingPosition.TOP:
        if (h - dy < MIN_SIZE) dy = -(MIN_SIZE - h);
        controlEnclosure[0][1] += dy;
        controlEnclosure[1][1] += dy;
        controlEnclosure[4][1] += dy;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          controlEnclosure[1][0] += -dy / r;
          controlEnclosure[2][0] += -dy / r;
        }
        break;
      case SizingPosition.RIGHT:
        if (w + dx < MIN_SIZE) dx = MIN_SIZE - w;
        controlEnclosure[1][0] += dx;
        controlEnclosure[2][0] += dx;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          controlEnclosure[2][1] += dx * r;
          controlEnclosure[3][1] += dx * r;
        }
        break;
      case SizingPosition.BOTTOM:
        if (h + dy < MIN_SIZE) dy = MIN_SIZE - h;
        controlEnclosure[2][1] += dy;
        controlEnclosure[3][1] += dy;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          controlEnclosure[1][0] += dy / r;
          controlEnclosure[2][0] += dy / r;
        }
        break;
      case SizingPosition.LEFT:
        if (w - dx < MIN_SIZE) dx = -(MIN_SIZE - w);
        controlEnclosure[0][0] += dx;
        controlEnclosure[3][0] += dx;
        controlEnclosure[4][0] += dx;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          controlEnclosure[2][1] += -dx * r;
          controlEnclosure[3][1] += -dx * r;
        }
        break;
      case SizingPosition.LEFT_TOP:
        if (w - dx < MIN_SIZE) dx = -(MIN_SIZE - w);
        if (h - dy < MIN_SIZE) dy = -(MIN_SIZE - h);
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          if (dx * r > dy / r) {
            dy = dx * r;
          } else {
            dx = dy / r;
          }
          if (w - dx < MIN_SIZE) {
            dx = -(MIN_SIZE - w);
            dy = -dx * r;
          }
          if (h - dy < MIN_SIZE) {
            dy = -(MIN_SIZE - h);
            dx = -dy / r;
          }
        }
        controlEnclosure[0][0] += dx;
        controlEnclosure[0][1] += dy;
        controlEnclosure[4][0] += dx;
        controlEnclosure[4][1] += dy;
        controlEnclosure[1][1] += dy;
        controlEnclosure[3][0] += dx;
        break;
      case SizingPosition.RIGHT_TOP:
        if (w + dx < MIN_SIZE) dx = MIN_SIZE - w;
        if (h - dy < MIN_SIZE) dy = -(MIN_SIZE - h);
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          if (dx * r > dy / r) {
            dy = -dx * r;
          } else {
            dx = -dy / r;
          }
          if (w + dx < MIN_SIZE) {
            dx = MIN_SIZE - w;
            dy = -dx * r;
          }
          if (h - dy < MIN_SIZE) {
            dy = -(MIN_SIZE - h);
            dx = -dy / r;
          }
        }
        controlEnclosure[1][0] += dx;
        controlEnclosure[1][1] += dy;
        controlEnclosure[0][1] += dy;
        controlEnclosure[2][0] += dx;
        controlEnclosure[4][1] += dy;
        break;
      case SizingPosition.RIGHT_BOTTOM:
        if (w + dx < MIN_SIZE) dx = MIN_SIZE - w;
        if (h + dy < MIN_SIZE) dy = MIN_SIZE - h;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          if (dx * r > dy / r) {
            dy = dx * r;
          } else {
            dx = dy / r;
          }
          if (w + dx < MIN_SIZE) {
            dx = MIN_SIZE - w;
            dy = dx * r;
          }
          if (h + dy < MIN_SIZE) {
            dy = MIN_SIZE - h;
            dx = dy / r;
          }
        }
        controlEnclosure[2][0] += dx;
        controlEnclosure[2][1] += dy;
        controlEnclosure[1][0] += dx;
        controlEnclosure[3][1] += dy;
        break;
      case SizingPosition.LEFT_BOTTOM:
        if (w - dx < MIN_SIZE) dx = -(MIN_SIZE - w);
        if (h + dy < MIN_SIZE) dy = MIN_SIZE - h;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          if (dx * r > dy / r) {
            dy = -dx * r;
          } else {
            dx = -dy / r;
          }
          if (w - dx < MIN_SIZE) {
            dx = -(MIN_SIZE - w);
            dy = -dx * r;
          }
          if (h + dy < MIN_SIZE) {
            dy = MIN_SIZE - h;
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

    // transform shapes
    const tr = editor.transform;
    const doc = editor.doc as Document;

    tr.resize(shape, targetWidth, targetHeight);
    tr.moveShapes(doc, [shape], targetLeft - shape.left, targetTop - shape.top);

    // do scale (font, padding and path)
    if (this.doScale) {
      tr.atomicAssign(shape, "fontSize", initialShape.fontSize * ratio);
      if (shape instanceof Box) {
        tr.atomicAssign(
          shape,
          "padding",
          initialShape.padding.map((v: number) => v * ratio)
        );
      }
      if (shape instanceof Line) {
        const newPath = geometry.projectPoints(
          initialShape.path,
          initialRect,
          targetRect
        );
        tr.atomicAssign(shape, "path", newPath);
      }
    }

    // do scale children
    if (this.doScaleChildren) {
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
          tr.move(s, l - s.left, t - s.top);
          tr.resize(s, w, h);
          if (this.doScale) {
            tr.atomicAssign(s, "fontSize", initialChild.fontSize * ratio);
            if (s instanceof Box) {
              tr.atomicAssign(
                s,
                "padding",
                initialChild.padding.map((v: number) => v * ratio)
              );
            }
            if (s instanceof Line) {
              const newPath = geometry.projectPoints(
                initialChild.path,
                initialChildRect,
                targetChildRect
              );
              tr.atomicAssign(s, "path", newPath);
            }
          }
        }
      });
    }
    tr.resolveAllConstraints(doc, canvas);
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box) {
    editor.transform.endTransaction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const p = lcs2ccs(
      canvas,
      shape,
      this.getControlPosition(editor, shape, this.controlPosition)
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
    // const cp = lcs2ccs(
    //   canvas,
    //   shape,
    //   geometry.mid(this.ghost[0], this.ghost[2])
    // );
    // draw size guide
    // const w = Math.round(geometry.distance(this.ghost[0], this.ghost[1]) + 1);
    // const h = Math.round(geometry.distance(this.ghost[1], this.ghost[2]) + 1);
    // const text = `${w} ✕ ${h}`;
    // drawText(canvas, cp, text);
    // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
