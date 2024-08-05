import { Canvas, SVGPath } from "./graphics";
import { MemoizationCanvas } from "./memoization-canvas";

export type VGPath = {
  cmd: "path";
  d: SVGPath;
};

export type VGRect = {
  cmd: "rect";
  w: number;
  h: number;
  x: number;
  y: number;
  r: number;
};

export type VGCircle = {
  cmd: "circle";
  cx: number;
  cy: number;
  r: number;
};

export type VGEllipse = {
  cmd: "ellipse";
  cx: number;
  cy: number;
  rx: number;
  ry: number;
};

export type VGLine = {
  cmd: "line";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type VGPolyline = {
  cmd: "polyline";
  points: number[];
};

export type VGPolygon = {
  cmd: "polygon";
  points: number[];
};

export type VGElement =
  | VGPath
  | VGRect
  | VGCircle
  | VGEllipse
  | VGLine
  | VGPolyline
  | VGPolygon;

function convertPoints(points: number[]): number[][] {
  const ps = [];
  for (let i = 0; i < points.length; i += 2) {
    ps.push([points[i], points[i + 1]]);
  }
  return ps;
}

export function renderVGElement(
  canvas: MemoizationCanvas | Canvas,
  position: number[],
  scale: number[],
  e: VGElement,
  seed: number
) {
  switch (e.cmd) {
    case "path": {
      const p = e as VGPath;
      // TODO: ...
      break;
    }
    case "rect": {
      const r = e as VGRect;
      const x = r.x * scale[0] + position[0];
      const y = r.y * scale[1] + position[1];
      const w = r.w * scale[0];
      const h = r.h * scale[1];
      const c = r.r * scale[0];
      canvas.strokeRoundRect(x, y, x + w, y + h, c, seed);
      break;
    }
    case "circle": {
      const c = e as VGCircle;
      const cx = c.cx * scale[0] + position[0];
      const cy = c.cy * scale[1] + position[1];
      const r = c.r * scale[0];
      const x1 = cx - r;
      const y1 = cy - r;
      const x2 = cx + r;
      const y2 = cy + r;
      canvas.ellipse(x1, y1, x2, y2, seed);
      break;
    }
    case "ellipse": {
      const c = e as VGEllipse;
      const cx = c.cx * scale[0] + position[0];
      const cy = c.cy * scale[1] + position[1];
      const rx = c.rx * scale[0];
      const ry = c.ry * scale[1];
      const x1 = cx - rx;
      const y1 = cy - ry;
      const x2 = cx + rx;
      const y2 = cy + ry;
      canvas.ellipse(x1, y1, x2, y2, seed);
      break;
    }
    case "line": {
      const l = e as VGLine;
      const x1 = l.x1 * scale[0] + position[0];
      const y1 = l.y1 * scale[1] + position[1];
      const x2 = l.x2 * scale[0] + position[0];
      const y2 = l.y2 * scale[1] + position[1];
      canvas.line(x1, y1, x2, y2, seed);
      break;
    }
    case "polyline": {
      const p = e as VGPolyline;
      const ps = convertPoints(p.points).map(([x, y]) => [
        x * scale[0] + position[0],
        y * scale[1] + position[1],
      ]);
      canvas.polyline(ps, seed);
      break;
    }
    case "polygon": {
      const p = e as VGPolygon;
      const ps = convertPoints(p.points).map(([x, y]) => [
        x * scale[0] + position[0],
        y * scale[1] + position[1],
      ]);
      canvas.polygon(ps, seed);
      break;
    }
  }
}
