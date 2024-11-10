import { parseSVG, makeAbsolute } from "svg-path-parser";

// TODO: Need to implement all absolute commands
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
        // TODO: Implement smooth cubic bezier curve
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
        // TODO: Implement elliptical arc
        break;
      case "Z":
        context2d.closePath();
        break;
      default:
        throw new Error(`Unrecognized SVG path command: ${item.code}`);
    }
  }
}
