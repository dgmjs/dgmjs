import fs from "fs/promises";
import parseSvg from "svg-path-parser";
import { nanoid } from "nanoid";

async function copyIconNodes() {
  await fs.cp(
    "../../node_modules/lucide-static/icon-nodes.json",
    "./assets/icon-nodes.json"
  );
}

async function copyIconTags() {
  await fs.cp(
    "../../node_modules/lucide-static/tags.json",
    "./assets/icon-tags.json"
  );
}

function convertPoints(points) {
  const ps = [];
  for (let i = 0; i < points.length; i += 2) {
    ps.push([points[i], points[i + 1]]);
  }
  return ps;
}

function convertSvgPathItemToVGPathItem(svgPathItem) {
  switch (svgPathItem.code) {
    case "M":
      return ["M", svgPathItem.x, svgPathItem.y];
    case "m":
      return ["m", svgPathItem.x, svgPathItem.y];
    case "L":
      return ["L", svgPathItem.x, svgPathItem.y];
    case "l":
      return ["l", svgPathItem.x, svgPathItem.y];
    case "H":
      return ["H", svgPathItem.x];
    case "h":
      return ["h", svgPathItem.x];
    case "V":
      return ["V", svgPathItem.y];
    case "v":
      return ["v", svgPathItem.y];
    case "C":
      return [
        "C",
        svgPathItem.x1,
        svgPathItem.y1,
        svgPathItem.x2,
        svgPathItem.y2,
        svgPathItem.x,
        svgPathItem.y,
      ];
    case "c":
      return [
        "c",
        svgPathItem.x1,
        svgPathItem.y1,
        svgPathItem.x2,
        svgPathItem.y2,
        svgPathItem.x,
        svgPathItem.y,
      ];
    case "S":
      return [
        "S",
        svgPathItem.x2,
        svgPathItem.y2,
        svgPathItem.x,
        svgPathItem.y,
      ];
    case "s":
      return [
        "s",
        svgPathItem.x2,
        svgPathItem.y2,
        svgPathItem.x,
        svgPathItem.y,
      ];
    case "Q":
      return [
        "Q",
        svgPathItem.x1,
        svgPathItem.y1,
        svgPathItem.x,
        svgPathItem.y,
      ];
    case "q":
      return [
        "q",
        svgPathItem.x1,
        svgPathItem.y1,
        svgPathItem.x,
        svgPathItem.y,
      ];
    case "T":
      return ["T", svgPathItem.x, svgPathItem.y];
    case "t":
      return ["t", svgPathItem.x, svgPathItem.y];
    case "A":
      return [
        "A",
        svgPathItem.rx,
        svgPathItem.ry,
        svgPathItem.xAxisRotation,
        svgPathItem.largeArc ? 1 : 0,
        svgPathItem.sweep ? 1 : 0,
        svgPathItem.x,
        svgPathItem.y,
      ];
    case "a":
      return [
        "a",
        svgPathItem.rx,
        svgPathItem.ry,
        svgPathItem.xAxisRotation,
        svgPathItem.largeArc ? 1 : 0,
        svgPathItem.sweep ? 1 : 0,
        svgPathItem.x,
        svgPathItem.y,
      ];
    case "Z":
      return ["Z"];
    case "z":
      return ["z"];
    default:
      throw new Error(`Unknown code: ${svgPathItem.code}`);
  }
}

function convertSvgItemToVGElement(svgItem) {
  const [cmd, attrs] = svgItem;
  switch (cmd) {
    case "path":
      return {
        cmd,
        d: parseSvg(attrs.d).map((i) => convertSvgPathItemToVGPathItem(i)),
      };
    case "circle":
      return {
        cmd,
        cx: parseFloat(attrs.cx),
        cy: parseFloat(attrs.cy),
        r: parseFloat(attrs.r),
      };
    case "ellipse":
      return {
        cmd,
        cx: parseFloat(attrs.cx),
        cy: parseFloat(attrs.cy),
        rx: parseFloat(attrs.rx),
        ry: parseFloat(attrs.ry),
      };
    case "rect":
      return {
        cmd,
        x: parseFloat(attrs.x),
        y: parseFloat(attrs.y),
        w: parseFloat(attrs.width),
        h: parseFloat(attrs.height),
        r: parseFloat(attrs.rx) || parseFloat(attrs.ry),
      };
    case "line":
      return {
        cmd,
        x1: parseFloat(attrs.x1),
        y1: parseFloat(attrs.y1),
        x2: parseFloat(attrs.x2),
        y2: parseFloat(attrs.y2),
      };
    case "polyline":
      return {
        cmd,
        points: convertPoints(
          attrs.points.split(" ").map((p) => parseFloat(p))
        ),
      };
    case "polygon":
      return {
        cmd,
        points: convertPoints(
          attrs.points.split(" ").map((p) => parseFloat(p))
        ),
      };
    default:
      throw new Error(`Unknown command: ${cmd}`);
  }
}

async function convertIconNodes() {
  const iconNodes = await fs.readFile("./assets/icon-nodes.json", "utf-8");
  const iconNodesJson = JSON.parse(iconNodes);
  const icons = {};
  for (const key in iconNodesJson) {
    const svg = iconNodesJson[key];
    const vgs = [];
    for (const svgItem of svg) {
      const vg = convertSvgItemToVGElement(svgItem);
      vgs.push(vg);
    }
    icons[key] = vgs;
  }
  await fs.writeFile("./assets/icons.json", JSON.stringify(icons, null, 2));
}

async function convertToDGM() {
  const icons = await fs.readFile("./assets/icons.json", "utf-8");
  const iconTags = await fs.readFile("./assets/icon-tags.json", "utf-8");
  const iconsJson = JSON.parse(icons);
  const iconTagsJson = JSON.parse(iconTags);
  const page = { id: nanoid(), type: "Page", children: [] };
  Object.keys(iconsJson).forEach((key, i) => {
    const icon = iconsJson[key];
    const tags = iconTagsJson[key];
    const left = (i % 30) * 40;
    const top = Math.floor(i / 30) * 40;
    const shape = {
      id: nanoid(),
      type: "Icon",
      name: key,
      proto: true,
      sizable: "ratio",
      left,
      top,
      width: 24,
      height: 24,
      roughness: 0.5,
      viewWidth: 24,
      viewHeight: 24,
      strokeWidth: 2,
      data: icon,
      tags: tags || [],
    };
    page.children.push(shape);
  });
  const doc = { id: nanoid(), type: "Doc", children: [page] };
  await fs.writeFile("./assets/icons.dgm", JSON.stringify(doc, null, 2));
}

async function main() {
  await copyIconNodes();
  await copyIconTags();
  await convertIconNodes();
  await convertToDGM();
}

await main();
