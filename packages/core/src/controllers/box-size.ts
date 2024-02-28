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
import { Controller, Controller2, Editor, Manipulator } from "../editor";
import {
  CONTROL_POINT_APOTHEM,
  Cursor,
  SizingPosition,
} from "../graphics/const";
import { lcs2ccs, angleInCCS, ccs2lcs } from "../graphics/utils";
import {
  drawControlPoint,
  drawPolylineInLCS,
  drawText,
  inControlPoint,
} from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { fitEnclosureInCSS } from "./utils";

const MIN_SIZE = CONTROL_POINT_APOTHEM * 2;

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
    const diagram = editor.doc as Document;
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

/**
 * Box Size Controller2
 */
export class BoxSizeController2 extends Controller2 {
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
    let value =
      editor.selection.size() === 1 && editor.selection.isSelected(shape);
    switch (this.controlPosition) {
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
    const box = geometry.boundingRect(controlEnclosure);
    const w = geometry.width(box);
    const h = geometry.height(box);
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
    const ratioX = targetWidth / shape.width;
    const ratioY = targetHeight / shape.height;

    // restore shape states
    shape.fromJSON(memo);

    // transform shapes
    const tr = editor.transform;
    const doc = editor.doc as Document;
    tr.resize(shape, targetWidth, targetHeight);
    tr.moveShapes(doc, [shape], targetLeft - shape.left, targetTop - shape.top);

    // do scale (font and padding)
    if (this.doScale) {
      tr.atomicAssign(shape, "fontSize", initialShape.fontSize * ratioX);
      tr.atomicAssign(
        shape,
        "padding",
        initialShape.padding.map((v: number) => v * ratioX)
      );
    }

    // do scale children
    if (this.doScaleChildren) {
      const ol = targetLeft;
      const ot = targetTop;
      shape.traverse((s) => {
        if (s !== shape && s instanceof Shape) {
          const m = this.initialSnapshot[s.id];
          const l = ol + (m.left - initialShape.left) * ratioX;
          const t = ot + (m.top - initialShape.top) * ratioY;
          const r = ol + (m.left + m.width - initialShape.left) * ratioX;
          const b = ot + (m.top + m.height - initialShape.top) * ratioY;
          const w = r - l;
          const h = b - t;
          tr.move(s, l - s.left, t - s.top);
          tr.resize(s, w, h);
          if (this.doScale) {
            tr.atomicAssign(s, "fontSize", m.fontSize * ratioX);
            if (s instanceof Box) {
              tr.atomicAssign(
                s,
                "padding",
                m.padding.map((v: number) => v * ratioX)
              );
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
    // super.drawDragging(editor, shape, e);
    // // draw ghost
    // const canvas = editor.canvas;
    // drawPolylineInLCS(canvas, shape, this.ghost);
    // const cp = lcs2ccs(
    //   canvas,
    //   shape,
    //   geometry.mid(this.ghost[0], this.ghost[2])
    // );
    // // draw size guide
    // const w = Math.round(geometry.distance(this.ghost[0], this.ghost[1]) + 1);
    // const h = Math.round(geometry.distance(this.ghost[1], this.ghost[2]) + 1);
    // const text = `${w} ✕ ${h}`;
    // drawText(canvas, cp, text);
    // // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}
