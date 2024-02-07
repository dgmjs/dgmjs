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

import type { Box, Diagram, Shape } from "../shapes";
import type { Editor } from "../editor";
import { lcs2ccs } from "../graphics/utils";
import { BoxSizeController } from "./box-size";
import { fitEnclosureInCSS } from "./utils";

/**
 * Group Size Controller
 */
export class GroupSizeController extends BoxSizeController {
  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box) {
    const canvas = editor.canvas;
    const diagram = editor.state.diagram as Diagram;
    const ghostCCS = this.ghost.map((p) => lcs2ccs(canvas, shape, p));
    const width = this.ghost[2][0] - this.ghost[0][0];
    const height = this.ghost[2][1] - this.ghost[0][1];
    const ow = shape.width;
    const oh = shape.height;
    const rx = width / ow;
    const ry = height / oh;

    // find best-fit
    const delta = fitEnclosureInCSS(
      editor.canvas,
      shape,
      this.ghost[0][0],
      this.ghost[0][1],
      width,
      height,
      ghostCCS
    );

    // transform shapes
    const x1 = this.ghost[0][0] + delta[0];
    const y1 = this.ghost[0][1] + delta[1];
    const x2 = this.ghost[2][0] + delta[0];
    const y2 = this.ghost[2][1] + delta[1];
    const tr = editor.state.transform;
    tr.startTransaction("group-resize");
    tr.moveShapes(diagram, [shape], x1 - shape.left, y1 - shape.top);
    tr.resize(shape, x2 - x1, y2 - y1);

    // resize shapes inside the group
    const ol = shape.left;
    const ot = shape.top;
    shape.traverse((s) => {
      if (s !== shape) {
        const l = ol + ((s as Shape).left - ol) * rx;
        const t = ot + ((s as Shape).top - ot) * ry;
        const r = ol + ((s as Shape).right - ol) * rx;
        const b = ot + ((s as Shape).bottom - ot) * ry;
        const w = r - l;
        const h = b - t;
        tr.move(s as Shape, l - (s as Shape).left, t - (s as Shape).top);
        tr.resize(s as Shape, w, h);
      }
    });

    tr.resolveAllConstraints(diagram, canvas);
    tr.endTransaction();
  }
}
