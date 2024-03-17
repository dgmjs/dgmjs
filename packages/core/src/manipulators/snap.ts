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

import { Editor, Controller } from "../editor";
import * as geometry from "../graphics/geometry";
import { Shape, Box, Line } from "../shapes";
import { ControllerPosition, MAGNET_THRESHOLD } from "../graphics/const";
import { angleInCCS, lcs2ccs, boxInCCS, boxInGCS } from "../graphics/utils";
import { cartisian } from "../std/lambda";
import * as guide from "../utils/guide";

/**
 * Return boxes for snap guide
 * @param editor
 * @param shape controlling shape
 * @returns return non-rotated nodes except the controlling shape
 */
function getGuideBoxes(editor: Editor, shape: Shape): Box[] {
  const canvas = editor.canvas;
  return (
    (editor.currentPage?.children.filter(
      (s) => s !== shape && s instanceof Box && angleInCCS(canvas, s) === 0
    ) as Box[]) ?? []
  );
}

/**
 * Return boxes in the same row with the box for snap guide
 * @param editor
 * @param shape controlling shape
 * @param box
 * @returns return non-rotated nodes except the controlling shape
 */
function getBoxesInRow(editor: Editor, shape: Shape, box: number[][]): Box[] {
  const canvas = editor.canvas;
  const t = box[0][1];
  const b = box[1][1];
  return (
    (editor.currentPage?.children.filter(
      (s) =>
        s !== shape &&
        s instanceof Box &&
        angleInCCS(canvas, s) === 0 &&
        ((s.top >= t && s.top <= b) ||
          (t >= s.top && t <= s.bottom) ||
          (s.bottom >= t && s.bottom <= b) ||
          (b >= s.top && b <= s.bottom))
    ) as Box[]) ?? []
  );
}

/**
 * Return boxes in the same column with the box for snap guide
 * @param editor
 * @param shape controlling shape
 * @param box
 * @returns return non-rotated nodes except the controlling shape
 */
function getBoxesInColumn(
  editor: Editor,
  shape: Shape,
  box: number[][]
): Box[] {
  const canvas = editor.canvas;
  const l = box[0][0];
  const r = box[1][0];
  return (
    (editor.currentPage?.children.filter(
      (s) =>
        s !== shape &&
        s instanceof Box &&
        angleInCCS(canvas, s) === 0 &&
        ((s.left >= l && s.left <= r) ||
          (l >= s.left && l <= s.right) ||
          (s.right >= l && s.right <= r) ||
          (r >= s.left && r <= s.right))
    ) as Box[]) ?? []
  );
}

/**
 * Snap
 */
class Snap {
  /**
   * X-coords to snap
   */
  xs: number[];

  /**
   * Y-coords to snap
   */
  ys: number[];

  /**
   * snapping X-coords (xs will be snapped to snapXs)
   */
  snapXs: number[];

  /**
   * snapping Y-coords (ys will be snapped to snapYs)
   */
  snapYs: number[];

  /**
   * X-coord finally snapped
   */
  x: number;

  /**
   * Y-coord finally snapped
   */
  y: number;

  /**
   * Finally snapped X-coord of this.x
   */
  snappedX: number;

  /**
   * Finally snapped Y-coord of this.y
   */
  snappedY: number;

  /**
   * Final snap type of snappedX (e.g. "outline", "size", "grid", ...)
   */
  typeX: string | null;

  /**
   * Final snap type of snappedY (e.g. "outline", "size", "grid", ...)
   */
  typeY: string | null;

  /**
   * X-delta (this.snappedX - this.x)
   */
  dx: number;

  /**
   * Y-delta (this.snappedY - this.y)
   */
  dy: number;

  /**
   * Additional gap infos for snapXs
   */
  snapXgaps: any[];

  /**
   * Additional gap infos for snapYs
   */
  snapYgaps: any[];

  /**
   * Temporal gap infos for nodes in row
   */
  Xgaps: any[];

  /**
   * Temporal gap infos for nodes in column
   */
  Ygaps: any[];

  constructor() {
    this.xs = [];
    this.ys = [];
    this.snapXs = [];
    this.snapYs = [];
    this.x = -1;
    this.y = -1;
    this.snappedX = -1;
    this.snappedY = -1;
    this.typeX = null;
    this.typeY = null;
    this.dx = 0;
    this.dy = 0;
    this.snapXgaps = [];
    this.snapYgaps = [];
    this.Xgaps = [];
    this.Ygaps = [];
  }

  /**
   * Initialize snap states
   */
  init() {
    this.xs = [];
    this.ys = [];
    this.snapXs = [];
    this.snapYs = [];
    this.x = -1;
    this.y = -1;
    this.snappedX = -1;
    this.snappedY = -1;
    this.typeX = null;
    this.typeY = null;
    this.dx = 0;
    this.dy = 0;
    this.snapXgaps = [];
    this.snapYgaps = [];
    this.Xgaps = [];
    this.Ygaps = [];
  }

  /**
   * Snap to X/Y-coords
   * @param editor
   * @param xs x-coords to snap
   * @param ys y-coords to snap
   * @param snapXs snapping x-coords
   * @param snapYs snapping y-coords
   * @param snapType type of snap
   */
  toXY(
    editor: Editor,
    xs: number[],
    ys: number[],
    snapXs: number[],
    snapYs: number[],
    snapType: string | null = null
  ) {
    const canvas = editor.canvas;
    const T = MAGNET_THRESHOLD * canvas.px;
    if (this.x < 0) {
      for (let x of xs) {
        const mx = snapXs.find((v) => Math.abs(v - x) < T);
        if (mx) {
          this.xs = xs;
          this.snapXs = snapXs;
          this.snappedX = mx;
          this.x = x;
          this.dx = mx - x;
          this.typeX = snapType;
          break;
        }
      }
    }
    if (this.y < 0) {
      for (let y of ys) {
        const my = snapYs.find((v) => Math.abs(v - y) < T);
        if (my) {
          this.ys = ys;
          this.snapYs = snapYs;
          this.snappedY = my;
          this.y = y;
          this.dy = my - y;
          this.typeY = snapType;
          break;
        }
      }
    }
  }

  /**
   * Snap to node's size
   * @param editor
   * @param shape
   * @param xs x-coords to snap
   * @param ys y-coords to snap
   * @param box rect of sizing shape
   * @param sizingPosition
   */
  toSize(
    editor: Editor,
    shape: Shape,
    xs: number[],
    ys: number[],
    box: number[][],
    sizingPosition: string
  ) {
    const canvas = editor.canvas;
    if (editor.snapToObject && angleInCCS(canvas, shape) === 0) {
      const snapXs: number[] = [];
      const snapYs: number[] = [];
      getGuideBoxes(editor, shape).forEach((s) => {
        const b = boxInGCS(canvas, s);
        const w = geometry.width(b);
        const h = geometry.height(b);
        switch (sizingPosition) {
          case ControllerPosition.TOP:
            snapYs.push(box[1][1] - h);
            break;
          case ControllerPosition.RIGHT:
            snapXs.push(box[0][0] + w);
            break;
          case ControllerPosition.BOTTOM:
            snapYs.push(box[0][1] + h);
            break;
          case ControllerPosition.LEFT:
            snapXs.push(box[1][0] - w);
            break;
          case ControllerPosition.LEFT_TOP:
            snapXs.push(box[1][0] - w);
            snapYs.push(box[1][1] - h);
            break;
          case ControllerPosition.RIGHT_TOP:
            snapXs.push(box[0][0] + w);
            snapYs.push(box[1][1] - h);
            break;
          case ControllerPosition.RIGHT_BOTTOM:
            snapXs.push(box[0][0] + w);
            snapYs.push(box[0][1] + h);
            break;
          case ControllerPosition.LEFT_BOTTOM:
            snapXs.push(box[1][0] - w);
            snapYs.push(box[0][1] + h);
            break;
        }
      });
      this.toXY(editor, xs, ys, snapXs, snapYs, "size");
      if (this.x > -1) {
        switch (sizingPosition) {
          case ControllerPosition.RIGHT:
          case ControllerPosition.RIGHT_BOTTOM:
          case ControllerPosition.RIGHT_TOP:
            box[1][0] = this.snappedX;
            break;
          case ControllerPosition.LEFT:
          case ControllerPosition.LEFT_TOP:
          case ControllerPosition.LEFT_BOTTOM:
            box[0][0] = this.snappedX;
            break;
        }
      }
      if (this.y > -1) {
        switch (sizingPosition) {
          case ControllerPosition.TOP:
          case ControllerPosition.LEFT_TOP:
          case ControllerPosition.RIGHT_TOP:
            box[0][1] = this.snappedY;
            break;
          case ControllerPosition.BOTTOM:
          case ControllerPosition.RIGHT_BOTTOM:
          case ControllerPosition.LEFT_BOTTOM:
            box[1][1] = this.snappedY;
            break;
        }
      }
    }
  }

  /**
   * Snap to gaps between nodes.
   * @param editor
   * @param shape
   * @param box ghost rect of moving/sizing shape
   */
  toGap(editor: Editor, shape: Shape, box: number[][]) {
    const canvas = editor.canvas;
    if (editor.snapToObject && angleInCCS(canvas, shape) === 0) {
      // 1. snap to gaps in row
      const ROW = getBoxesInRow(editor, shape, box);
      // 1.1 compute gaps on lefts
      const L = ROW.filter((n) => n.right < box[0][0]);
      const LL: Array<[number, Box | null, Box | null]> = cartisian(L, L)
        .map(
          (p) =>
            [Math.round(p[1].left - p[0].right), p[0], p[1]] as [
              number,
              Box,
              Box
            ]
        )
        .filter((p) => p[0] > 0);
      const Lgaps = LL.map((p) => p[0]).sort((a, b) => a - b);
      const snapLgaps = cartisian(Lgaps, L);
      const snapLs = snapLgaps.map(([g, l]) => Math.round(l.right + g));
      // 1.2 compute gaps on rights
      const R = ROW.filter((n) => n.left > box[1][0]);
      const RR: Array<[number, Box | null, Box | null]> = cartisian(R, R)
        .map(
          (p) =>
            [Math.round(p[1].left - p[0].right), p[0], p[1]] as [
              number,
              Box,
              Box
            ]
        )
        .filter((p) => p[0] > 0);
      const Rgaps = RR.map((p) => p[0]).sort((a, b) => a - b);
      const snapRgaps = cartisian(Rgaps, R);
      const snapRs = snapRgaps.map(([g, r]) => Math.round(r.left - g));
      // 1.3 compute gaps for the center of lefts and rights.
      cartisian(L, R).forEach(([l, r]) => {
        const w = geometry.width(box);
        const d = Math.round(r.left - l.right);
        if (d > w) {
          const g = Math.round((d - w) / 2);
          LL.push([g, l, null]);
          snapLgaps.push([g, l]);
          snapLs.push(l.right + g);
          RR.push([g, null, r]);
          snapRgaps.push([g, r]);
          snapRs.push(r.left - g);
        }
      });
      // 2. snap to gaps in column
      const COL = getBoxesInColumn(editor, shape, box);
      // 2.1 compute gaps on tops
      const T = COL.filter((n) => n.bottom < box[0][1]);
      const TT: Array<[number, Box | null, Box | null]> = cartisian(T, T)
        .map(
          (p) =>
            [Math.round(p[1].top - p[0].bottom), p[0], p[1]] as [
              number,
              Box,
              Box
            ]
        )
        .filter((p) => p[0] > 0);
      const Tgaps = TT.map((p) => p[0]).sort((a, b) => a - b);
      const snapTgaps = cartisian(Tgaps, T);
      const snapTs = snapTgaps.map(([g, t]) => Math.round(t.bottom + g));
      // 2.2 compute gaps on bottoms
      const B = COL.filter((n) => n.top > box[1][1]);
      const BB: Array<[number, Box | null, Box | null]> = cartisian(B, B)
        .map(
          (p) =>
            [Math.round(p[1].top - p[0].bottom), p[0], p[1]] as [
              number,
              Box,
              Box
            ]
        )
        .filter((p) => p[0] > 0);
      const Bgaps = BB.map((p) => p[0]).sort((a, b) => a - b);
      const snapBgaps = cartisian(Bgaps, B);
      const snapBs = snapBgaps.map(([g, b]) => Math.round(b.top - g));
      // 2.3 compute gaps for the middle of tops and bottoms.
      cartisian(T, B).forEach(([t, b]) => {
        const h = geometry.height(box);
        const d = Math.round(b.top - t.bottom);
        if (d > h) {
          const g = Math.round((d - h) / 2);
          TT.push([g, t, null]);
          snapTgaps.push([g, t]);
          snapTs.push(t.bottom + g);
          BB.push([g, null, b]);
          snapBgaps.push([g, b]);
          snapBs.push(b.top - g);
        }
      });
      this.toXY(editor, [box[0][0]], [], snapLs, [], "gap");
      this.toXY(editor, [box[1][0]], [], snapRs, [], "gap");
      this.toXY(editor, [], [box[0][1]], [], snapTs, "gap");
      this.toXY(editor, [], [box[1][1]], [], snapBs, "gap");
      this.Xgaps = [...LL, ...RR];
      this.Ygaps = [...TT, ...BB];
      this.snapXgaps = [...snapLgaps, ...snapRgaps];
      this.snapYgaps = [...snapTgaps, ...snapBgaps];
    }
  }

  /**
   * Snap to path's points
   * @param editor
   * @param shape
   * @param xs x-coords to snap
   * @param ys y-coords to snap
   */
  toPath(editor: Editor, shape: Line, xs: number[], ys: number[]) {
    if (editor.snapToObject) {
      const snapXs = shape.path.map((p) => p[0]);
      const snapYs = shape.path.map((p) => p[1]);
      this.toXY(editor, xs, ys, snapXs, snapYs, "path");
    }
  }

  /**
   * Snap to node's outline
   * @param editor
   * @param shape
   * @param xs x-coords to snap
   * @param ys y-coords to snap
   */
  toOutline(editor: Editor, shape: Shape, xs: number[], ys: number[]) {
    const canvas = editor.canvas;
    if (editor.snapToObject && angleInCCS(canvas, shape) === 0) {
      const snapXs: number[] = [];
      const snapYs: number[] = [];
      getGuideBoxes(editor, shape).forEach((s) => {
        const box = boxInGCS(canvas, s);
        const cp = geometry.center(box);
        snapXs.push(box[0][0]);
        snapXs.push(box[1][0]);
        snapXs.push(cp[0]);
        snapYs.push(box[0][1]);
        snapYs.push(box[1][1]);
        snapYs.push(cp[1]);
      });
      this.toXY(editor, xs, ys, snapXs, snapYs, "outline");
    }
  }

  /**
   * Snap to grid
   */
  toGrid(editor: Editor, point: number[]) {
    if (editor.snapToGrid) {
      if (this.x < 0) {
        const gx = editor.gridSize[0];
        let mx = Math.round(point[0] / gx) * gx;
        this.x = point[0];
        this.snappedX = mx;
        this.dx = Math.round(mx - point[0]);
        this.typeX = "grid";
      }
      if (this.y < 0) {
        const gy = editor.gridSize[1];
        let my = Math.round(point[1] / gy) * gy;
        this.y = point[1];
        this.snappedY = my;
        this.dy = Math.round(my - point[1]);
        this.typeY = "grid";
      }
    }
  }

  /**
   * Apply snap result to controller
   */
  apply(controller: Controller) {
    if (this.x > -1 && controller.dx !== 0) {
      controller.dragPoint[0] += this.dx;
      controller.dx += this.dx;
    }
    if (this.y > -1 && controller.dy !== 0) {
      controller.dragPoint[1] += this.dy;
      controller.dy += this.dy;
    }
  }

  /**
   * Draw snap guide info
   */
  draw(editor: Editor, shape: Shape, ghost: number[][]) {
    const canvas = editor.canvas;
    const box = geometry.boundingRect(ghost);
    const boxCCS = box.map((p) => lcs2ccs(canvas, shape, p));
    switch (this.typeX) {
      case "size":
        const w = Math.round(geometry.width(box));
        guide.drawWidth(canvas, boxCCS, w);
        getGuideBoxes(editor, shape).forEach((s) => {
          if (Math.round(s.width) === w) {
            const sb = geometry.boundingRect(s.getOutline());
            const sbCCS = sb.map((p) => lcs2ccs(canvas, s, p));
            guide.drawWidth(canvas, sbCCS, Math.round(s.width));
          }
        });
        break;
      case "outline":
      case "path":
        const mxs = this.xs.map((x) => x + this.dx);
        for (let x of mxs) {
          for (let tx of this.snapXs) {
            if (x === tx) {
              const p = lcs2ccs(canvas, shape, [x, 0]);
              guide.drawVertline(canvas, p[0], [4]);
            }
          }
        }
        break;
      case "gap":
        for (let i = 0; i < this.snapXs.length; i++) {
          if (this.snappedX === this.snapXs[i]) {
            const g = this.snapXgaps[i];
            let go = boxInCCS(canvas, g[1]);
            if (go[1][0] < boxCCS[0][0]) {
              guide.drawHorzGap(canvas, go, boxCCS, g[0]);
            } else {
              guide.drawHorzGap(canvas, boxCCS, go, g[0]);
            }
            for (let xgap of this.Xgaps) {
              if (g[0] === xgap[0]) {
                let o1 = xgap[1] ? boxInCCS(canvas, xgap[1]) : boxCCS;
                let o2 = xgap[2] ? boxInCCS(canvas, xgap[2]) : boxCCS;
                guide.drawHorzGap(canvas, o1, o2, g[0]);
              }
            }
            break;
          }
        }
        break;
    }
    switch (this.typeY) {
      case "size":
        const h = Math.round(geometry.height(box));
        guide.drawHeight(canvas, boxCCS, h);
        getGuideBoxes(editor, shape).forEach((s) => {
          if (Math.round(s.height) === h) {
            const sb = geometry.boundingRect(s.getOutline());
            const sbCCS = sb.map((p) => lcs2ccs(canvas, s, p));
            guide.drawHeight(canvas, sbCCS, Math.round(s.height));
          }
        });
        break;
      case "outline":
      case "path":
        const mys = this.ys.map((y) => y + this.dy);
        for (let y of mys) {
          for (let ty of this.snapYs) {
            if (y === ty) {
              const p = lcs2ccs(canvas, shape, [0, y]);
              guide.drawHorzline(canvas, p[1], [4]);
            }
          }
        }
        break;
      case "gap":
        for (let i = 0; i < this.snapYs.length; i++) {
          if (this.snappedY === this.snapYs[i]) {
            const g = this.snapYgaps[i];
            for (let ygap of this.Ygaps) {
              if (g[0] === ygap[0]) {
                let go = boxInCCS(canvas, g[1]);
                if (go[1][1] < boxCCS[0][1]) {
                  guide.drawVertGap(canvas, go, boxCCS, g[0]);
                } else {
                  guide.drawVertGap(canvas, boxCCS, go, g[0]);
                }
                let o1 = ygap[1] ? boxInCCS(canvas, ygap[1]) : boxCCS;
                let o2 = ygap[2] ? boxInCCS(canvas, ygap[2]) : boxCCS;
                guide.drawVertGap(canvas, o1, o2, g[0]);
              }
            }
          }
        }
        break;
    }
  }
}

export { Snap };
