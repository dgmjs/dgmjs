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

import * as geometry from "../graphics/geometry";
import { Shape, Box, Diagram } from "../shapes";
import { Editor, Manipulator } from "../editor";
import { CONTROL_POINT_APOTHEM, SizingPosition } from "../graphics/const";
import { lcs2ccs } from "../graphics/utils";
import { fitEnclosureInCSS } from "./utils";
import { BoxSizeController } from "./box-size";

/**
 * Text Size Controller
 */
export class TextSizeController extends BoxSizeController {
  constructor(manipulator: Manipulator, position: string) {
    super(manipulator, position);
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    let active = super.active(editor, shape);
    if (
      !(shape as Box).richText &&
      (this.position == SizingPosition.TOP ||
        this.position == SizingPosition.BOTTOM ||
        this.position == SizingPosition.LEFT ||
        this.position == SizingPosition.RIGHT)
    )
      active = false;
    return active;
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    if ((shape as Box).richText) {
      super.update(editor, shape);
    } else {
      this.ghost = shape.getEnclosure();
      let box = geometry.boundingRect(this.ghost);
      let w = geometry.width(box);
      let h = geometry.height(box);
      let ratio = h / w;
      // snap ghost
      let xs: number[] = [];
      let ys: number[] = [];
      switch (this.position) {
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
        case SizingPosition.LEFT_TOP:
          if (this.dx * ratio > this.dy / ratio) {
            this.dy = this.dx * ratio;
          } else {
            this.dx = this.dy / ratio;
          }
          this.ghost[0][0] += this.dx;
          this.ghost[0][1] += this.dy;
          this.ghost[4][0] += this.dx;
          this.ghost[4][1] += this.dy;
          this.ghost[1][1] += this.dy;
          this.ghost[3][0] += this.dx;
          break;
        case SizingPosition.RIGHT_TOP:
          if (this.dx * ratio > this.dy / ratio) {
            this.dy = -this.dx * ratio;
          } else {
            this.dx = -this.dy / ratio;
          }
          this.ghost[1][0] += this.dx;
          this.ghost[1][1] += this.dy;
          this.ghost[0][1] += this.dy;
          this.ghost[2][0] += this.dx;
          this.ghost[4][1] += this.dy;
          break;
        case SizingPosition.RIGHT_BOTTOM:
          if (this.dx * ratio > this.dy / ratio) {
            this.dy = this.dx * ratio;
          } else {
            this.dx = this.dy / ratio;
          }
          this.ghost[2][0] += this.dx;
          this.ghost[2][1] += this.dy;
          this.ghost[1][0] += this.dx;
          this.ghost[3][1] += this.dy;
          break;
        case SizingPosition.LEFT_BOTTOM:
          if (this.dx * ratio > this.dy / ratio) {
            this.dy = -this.dx * ratio;
          } else {
            this.dx = -this.dy / ratio;
          }
          this.ghost[3][0] += this.dx;
          this.ghost[3][1] += this.dy;
          this.ghost[2][1] += this.dy;
          this.ghost[0][0] += this.dx;
          this.ghost[4][0] += this.dx;
          break;
      }
    }
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box) {
    if ((shape as Box).richText) {
      super.finalize(editor, shape);
    } else {
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
      const tr = editor.state.transform;
      const diagram = editor.state.diagram as Diagram;
      tr.startTransaction("resize");
      tr.moveShapes(diagram, [shape], x1 - shape.left, y1 - shape.top);
      tr.resize(shape, w, h);
      tr.atomicAssign(shape, "fontSize", shape.fontSize * ratio);
      tr.resolveAllConstraints(diagram, canvas);
      tr.endTransaction();

      // clear ghost
      this.ghost = [];
    }
  }
}
