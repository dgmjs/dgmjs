import { parseSVG, makeAbsolute } from "svg-path-parser";
import { arcToLineSegments } from "./utils";
import { geometry } from "@dgmjs/core";

export function renderSVGPath(pathData: string, context2d: any): void {
  const commands = parseSVG(pathData);
  makeAbsolute(commands);
  for (const item of commands) {
    switch (item.code) {
      case "M":
        context2d.moveTo(item.x, item.y);
        break;
      case "L":
        context2d.lineTo(item.x, item.y);
        break;
      case "H":
        context2d.lineTo(item.x, item.y);
        break;
      case "V":
        context2d.lineTo(item.x, item.y);
        break;
      case "C":
        context2d.bezierCurveTo(
          item.x1,
          item.y1,
          item.x2,
          item.y2,
          item.x,
          item.y
        );
        break;
      case "S":
        // TODO: implement smooth curve
        console.warn(
          `[@dgmjs/pdf:svg-renderer] Smooth curve ("S") is not implemented yet`
        );
        break;
      case "Q":
        context2d.quadraticCurveTo(
          item.x0,
          item.y0,
          item.x1,
          item.y1,
          item.x,
          item.y
        );
        break;
      case "T":
        context2d.quadraticCurveTo(item.x0, item.y0, item.x, item.y);
        break;
      case "A":
        const segments = item.rx + item.ry;
        const pts = arcToLineSegments(
          item.x0,
          item.y0,
          item.rx,
          item.ry,
          item.xAxisRotation,
          item.largeArc ? 1 : 0,
          item.sweep ? 1 : 0,
          item.x,
          item.y,
          segments
        );
        for (const pt of pts) {
          context2d.lineTo(pt[0], pt[1]);
        }
        break;
      case "Z":
        context2d.closePath();
        break;
      default:
        throw new Error(`Unrecognized SVG path command: ${item.code}`);
    }
  }
}
