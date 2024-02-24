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
import { Shape, Box, Sizable, Line, Diagram } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import {
  CONTROL_POINT_APOTHEM,
  Cursor,
  SizingPosition,
} from "../graphics/const";
import { lcs2ccs, angleInCCS } from "../graphics/utils";
import {
  drawControlPoint,
  drawPolylineInLCS,
  drawText,
  inControlPoint,
} from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { fitEnclosureInCSS } from "./utils";

const MIN_SIZE = CONTROL_POINT_APOTHEM * 4;

/**
 * Size Controller
 */
export class BoxSizeController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  /**
   * Ghost polygon
   */
  ghost: number[][];

  /**
   * The position of controller
   */
  position: string;

  /**
   * Scale fontSize and padding
   */
  doScale: boolean;

  constructor(
    manipulator: Manipulator,
    position: string,
    doScale: boolean = false
  ) {
    super(manipulator);
    this.snap = new Snap();
    this.ghost = [];
    this.position = position;
    this.doScale = doScale;
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    let value =
      editor.selection.size() === 1 && editor.selection.isSelected(shape);
    switch (this.position) {
      case SizingPosition.TOP:
        value =
          value &&
          !this.doScale &&
          (shape.sizable === Sizable.VERT || shape.sizable === Sizable.FREE);
        break;
      case SizingPosition.RIGHT:
        value =
          value &&
          !this.doScale &&
          (shape.sizable === Sizable.HORZ || shape.sizable === Sizable.FREE);
        break;
      case SizingPosition.BOTTOM:
        value =
          value &&
          !this.doScale &&
          (shape.sizable === Sizable.VERT || shape.sizable === Sizable.FREE);
        break;
      case SizingPosition.LEFT:
        value =
          value &&
          !this.doScale &&
          (shape.sizable === Sizable.HORZ || shape.sizable === Sizable.FREE);
        break;
      case SizingPosition.LEFT_TOP:
        value =
          value &&
          (shape.sizable === Sizable.FREE || shape.sizable === Sizable.RATIO);
        break;
      case SizingPosition.RIGHT_TOP:
        value =
          value &&
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
   * Returns the point of the position of the ghost
   */
  getGhostPosition(editor: Editor, shape: Shape, position: string): number[] {
    const offset = 0; //CONTROL_POINT_APOTHEM / editor.canvas.scale;
    if (this.ghost && this.ghost.length > 0) {
      switch (position) {
        case SizingPosition.TOP: {
          const cp = geometry.mid(this.ghost[0], this.ghost[1]);
          return [cp[0], cp[1] - offset];
        }
        case SizingPosition.RIGHT: {
          const cp = geometry.mid(this.ghost[1], this.ghost[2]);
          return [cp[0] + offset, cp[1]];
        }
        case SizingPosition.BOTTOM: {
          const cp = geometry.mid(this.ghost[3], this.ghost[2]);
          return [cp[0], cp[1] + offset];
        }
        case SizingPosition.LEFT: {
          const cp = geometry.mid(this.ghost[0], this.ghost[3]);
          return [cp[0] - offset, cp[1]];
        }
        case SizingPosition.LEFT_TOP: {
          return [this.ghost[0][0] - offset, this.ghost[0][1] - offset];
        }
        case SizingPosition.RIGHT_TOP: {
          return [this.ghost[1][0] + offset, this.ghost[1][1] - offset];
        }
        case SizingPosition.RIGHT_BOTTOM: {
          return [this.ghost[2][0] + offset, this.ghost[2][1] + offset];
        }
        case SizingPosition.LEFT_BOTTOM: {
          return [this.ghost[3][0] - offset, this.ghost[3][1] + offset];
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
      this.getGhostPosition(editor, shape, this.position)
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
    switch (this.position) {
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
    this.ghost = shape.getEnclosure();
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    this.ghost = shape.getEnclosure();
    let box = geometry.boundingRect(this.ghost);
    let w = geometry.width(box);
    let h = geometry.height(box);
    // let w = shape.width;
    // let h = shape.height;
    let ratio = h / w;

    // snap ghost
    let xs: number[] = [];
    let ys: number[] = [];
    switch (this.position) {
      case SizingPosition.TOP:
        ys = [this.ghost[0][1] + this.dy];
        break;
      case SizingPosition.RIGHT:
        xs = [this.ghost[1][0] + this.dx];
        break;
      case SizingPosition.BOTTOM:
        ys = [this.ghost[2][1] + this.dy];
        break;
      case SizingPosition.LEFT:
        xs = [this.ghost[0][0] + this.dx];
        break;
      case SizingPosition.LEFT_TOP:
        xs = [this.ghost[0][0] + this.dx];
        ys = [this.ghost[0][1] + this.dy];
        break;
      case SizingPosition.RIGHT_TOP:
        xs = [this.ghost[1][0] + this.dx];
        ys = [this.ghost[1][1] + this.dy];
        break;
      case SizingPosition.RIGHT_BOTTOM:
        xs = [this.ghost[2][0] + this.dx];
        ys = [this.ghost[2][1] + this.dy];
        break;
      case SizingPosition.LEFT_BOTTOM:
        xs = [this.ghost[3][0] + this.dx];
        ys = [this.ghost[3][1] + this.dy];
        break;
    }
    this.snap.init();
    this.snap.toSize(editor, shape, xs, ys, box, this.position);
    this.snap.toOutline(editor, shape, xs, ys);
    this.snap.toGrid(editor, [xs[0] ?? 0, ys[0] ?? 0]);
    this.snap.apply(this);

    // update ghost
    switch (this.position) {
      case SizingPosition.TOP:
        if (h - this.dy < MIN_SIZE) this.dy = -(MIN_SIZE - h);
        this.ghost[0][1] += this.dy;
        this.ghost[1][1] += this.dy;
        this.ghost[4][1] += this.dy;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          this.ghost[1][0] += -this.dy / ratio;
          this.ghost[2][0] += -this.dy / ratio;
        }
        break;
      case SizingPosition.RIGHT:
        if (w + this.dx < MIN_SIZE) this.dx = MIN_SIZE - w;
        this.ghost[1][0] += this.dx;
        this.ghost[2][0] += this.dx;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          this.ghost[2][1] += this.dx * ratio;
          this.ghost[3][1] += this.dx * ratio;
        }
        break;
      case SizingPosition.BOTTOM:
        if (h + this.dy < MIN_SIZE) this.dy = MIN_SIZE - h;
        this.ghost[2][1] += this.dy;
        this.ghost[3][1] += this.dy;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          this.ghost[1][0] += this.dy / ratio;
          this.ghost[2][0] += this.dy / ratio;
        }
        break;
      case SizingPosition.LEFT:
        if (w - this.dx < MIN_SIZE) this.dx = -(MIN_SIZE - w);
        this.ghost[0][0] += this.dx;
        this.ghost[3][0] += this.dx;
        this.ghost[4][0] += this.dx;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          this.ghost[2][1] += -this.dx * ratio;
          this.ghost[3][1] += -this.dx * ratio;
        }
        break;
      case SizingPosition.LEFT_TOP:
        if (w - this.dx < MIN_SIZE) this.dx = -(MIN_SIZE - w);
        if (h - this.dy < MIN_SIZE) this.dy = -(MIN_SIZE - h);
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          if (this.dx * ratio > this.dy / ratio) {
            this.dy = this.dx * ratio;
          } else {
            this.dx = this.dy / ratio;
          }
          if (w - this.dx < MIN_SIZE) {
            this.dx = -(MIN_SIZE - w);
            this.dy = -this.dx * ratio;
          }
          if (h - this.dy < MIN_SIZE) {
            this.dy = -(MIN_SIZE - h);
            this.dx = -this.dy / ratio;
          }
        }
        this.ghost[0][0] += this.dx;
        this.ghost[0][1] += this.dy;
        this.ghost[4][0] += this.dx;
        this.ghost[4][1] += this.dy;
        this.ghost[1][1] += this.dy;
        this.ghost[3][0] += this.dx;
        break;
      case SizingPosition.RIGHT_TOP:
        if (w + this.dx < MIN_SIZE) this.dx = MIN_SIZE - w;
        if (h - this.dy < MIN_SIZE) this.dy = -(MIN_SIZE - h);
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          if (this.dx * ratio > this.dy / ratio) {
            this.dy = -this.dx * ratio;
          } else {
            this.dx = -this.dy / ratio;
          }
          if (w + this.dx < MIN_SIZE) {
            this.dx = MIN_SIZE - w;
            this.dy = -this.dx * ratio;
          }
          if (h - this.dy < MIN_SIZE) {
            this.dy = -(MIN_SIZE - h);
            this.dx = -this.dy / ratio;
          }
        }
        this.ghost[1][0] += this.dx;
        this.ghost[1][1] += this.dy;
        this.ghost[0][1] += this.dy;
        this.ghost[2][0] += this.dx;
        this.ghost[4][1] += this.dy;
        break;
      case SizingPosition.RIGHT_BOTTOM:
        if (w + this.dx < MIN_SIZE) this.dx = MIN_SIZE - w;
        if (h + this.dy < MIN_SIZE) this.dy = MIN_SIZE - h;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          if (this.dx * ratio > this.dy / ratio) {
            this.dy = this.dx * ratio;
          } else {
            this.dx = this.dy / ratio;
          }
          if (w + this.dx < MIN_SIZE) {
            this.dx = MIN_SIZE - w;
            this.dy = this.dx * ratio;
          }
          if (h + this.dy < MIN_SIZE) {
            this.dy = MIN_SIZE - h;
            this.dx = this.dy / ratio;
          }
        }
        this.ghost[2][0] += this.dx;
        this.ghost[2][1] += this.dy;
        this.ghost[1][0] += this.dx;
        this.ghost[3][1] += this.dy;
        break;
      case SizingPosition.LEFT_BOTTOM:
        if (w - this.dx < MIN_SIZE) this.dx = -(MIN_SIZE - w);
        if (h + this.dy < MIN_SIZE) this.dy = MIN_SIZE - h;
        if (this.doScale || shape.sizable === Sizable.RATIO) {
          if (this.dx * ratio > this.dy / ratio) {
            this.dy = -this.dx * ratio;
          } else {
            this.dx = -this.dy / ratio;
          }
          if (w - this.dx < MIN_SIZE) {
            this.dx = -(MIN_SIZE - w);
            this.dy = -this.dx * ratio;
          }
          if (h + this.dy < MIN_SIZE) {
            this.dy = MIN_SIZE - h;
            this.dx = -this.dy / ratio;
          }
        }
        this.ghost[3][0] += this.dx;
        this.ghost[3][1] += this.dy;
        this.ghost[2][1] += this.dy;
        this.ghost[0][0] += this.dx;
        this.ghost[4][0] += this.dx;
        break;
    }
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box) {
    const canvas = editor.canvas;
    const ghostCCS = this.ghost.map((p) => lcs2ccs(canvas, shape, p));
    const width = this.ghost[2][0] - this.ghost[0][0];
    const height = this.ghost[2][1] - this.ghost[0][1];
    const ratio = width / shape.width;

    // find best-fit [dx, dy]
    const delta = fitEnclosureInCSS(
      editor.canvas,
      shape,
      this.ghost[0][0],
      this.ghost[0][1],
      width,
      height,
      ghostCCS
    );

    // compute size
    const x1 = this.ghost[0][0] + delta[0];
    const y1 = this.ghost[0][1] + delta[1];
    const x2 = this.ghost[2][0] + delta[0];
    const y2 = this.ghost[2][1] + delta[1];
    let w = Math.round(x2 - x1);
    let h = Math.round(y2 - y1);
    const minW = CONTROL_POINT_APOTHEM * 2 * canvas.px;
    const minH = CONTROL_POINT_APOTHEM * 2 * canvas.px;
    if (w < minW) w = minW;
    if (h < minH) h = minH;

    // transform shapes
    const tr = editor.transform;
    const diagram = editor.diagram as Diagram;
    tr.startTransaction("resize");
    tr.moveShapes(diagram, [shape], x1 - shape.left, y1 - shape.top);
    tr.resize(shape, w, h);
    if (this.doScale) {
      tr.atomicAssign(shape, "fontSize", shape.fontSize * ratio);
      tr.atomicAssign(
        shape,
        "padding",
        shape.padding.map((v) => v * ratio)
      );
    }
    tr.resolveAllConstraints(diagram, canvas);
    tr.endTransaction();

    // clear ghost
    this.ghost = [];
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    this.ghost = shape.getEnclosure();
    const p = lcs2ccs(
      canvas,
      shape,
      this.getGhostPosition(editor, shape, this.position)
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
    drawPolylineInLCS(canvas, shape, this.ghost);
    const cp = lcs2ccs(
      canvas,
      shape,
      geometry.mid(this.ghost[0], this.ghost[2])
    );
    // draw size guide
    const w = Math.round(geometry.distance(this.ghost[0], this.ghost[1]) + 1);
    const h = Math.round(geometry.distance(this.ghost[1], this.ghost[2]) + 1);
    const text = `${w} ✕ ${h}`;
    drawText(canvas, cp, text);
    // draw snap
    this.snap.draw(editor, shape, this.ghost);
  }
}
