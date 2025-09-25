import { generateId } from "../std/id";
import { convertStringToTextNode } from "./text-utils";
import { Obj } from "../core";
import { Connector } from "../shapes";

function traverse(json: any, visitor: (node: any) => void) {
  visitor(json);
  if (json.children) {
    json.children.forEach((child: any) => traverse(child, visitor));
  }
}

/**
 * Fix issues in json before loading to doc.
 * - convert a old-version json to the latest version.
 */
export function fixJson(json: any): any {
  // convert Diagram, Document to Doc
  if (json.type === "Diagram" || json.type === "Document") {
    json.type = "Doc";
  }

  // ensure children is array
  if (!Array.isArray(json.children)) {
    json.children = [];
  }

  // for Doc
  let pageSize = null;
  if (json.type === "Doc") {
    pageSize = json.pageSize ?? null;
  }

  // for each Pages
  for (const page of json.children) {
    // ensure Page has parent
    if (page.type === "Page") {
      if (!page.parent) {
        page.parent = json.id;
      }
    }

    // ensure Page has size (if not set, use Doc's size)
    if (typeof page.size === "undefined") {
      page.size = pageSize;
    }
  }

  // convert single-page doc to multi-page doc
  if (
    json.type === "Doc" &&
    json.children.length > 0 &&
    json.children[0].type !== "Page"
  ) {
    const pageId = generateId();
    const page = {
      id: pageId,
      type: "Page",
      parent: json.id,
      name: json.name,
      description: json.description,
      children: [
        ...json.children.map((child: any) => ({ ...child, parent: pageId })),
      ],
    };
    json.children = [page];
  }

  // convert plain text string to text doc nodes
  traverse(json, (node) => {
    if (typeof node.text === "string") {
      node.text = convertStringToTextNode(node.text, node.horzAlign);
    }
  });

  return json;
}

/**
 * Fix issues in doc after loading from JSON.
 */
export function fixDoc(doc: Obj): any {
  // fix connector issues
  doc.traverse((obj) => {
    if (obj instanceof Connector) {
      // fix tail and head anchors
      if (Array.isArray(obj.tailAnchor)) {
        if (obj.tailAnchor[0] < 0) obj.tailAnchor[0] = 0;
        if (obj.tailAnchor[0] > 1) obj.tailAnchor[0] = 1;
        if (obj.tailAnchor[1] < 0) obj.tailAnchor[1] = 0;
        if (obj.tailAnchor[1] > 1) obj.tailAnchor[1] = 1;
      }
      if (Array.isArray(obj.headAnchor)) {
        if (obj.headAnchor[0] < 0) obj.headAnchor[0] = 0;
        if (obj.headAnchor[0] > 1) obj.headAnchor[0] = 1;
        if (obj.headAnchor[1] < 0) obj.headAnchor[1] = 0;
        if (obj.headAnchor[1] > 1) obj.headAnchor[1] = 1;
      }
      // fix path's null points
      const tailPoint = obj.path[0];
      if (tailPoint && (tailPoint[0] === null || tailPoint[1] === null)) {
        const tp = obj.getTailAnchorPoint();
        tailPoint[0] = tp[0];
        tailPoint[1] = tp[1];
      }
      const headPoint = obj.path[obj.path.length - 1];
      if (headPoint && (headPoint[0] === null || headPoint[1] === null)) {
        const hp = obj.getHeadAnchorPoint();
        headPoint[0] = hp[0];
        headPoint[1] = hp[1];
      }
      if (!Array.isArray(obj.path) || obj.path.length < 2) {
        const tp = obj.getTailAnchorPoint();
        const hp = obj.getHeadAnchorPoint();
        obj.path = [
          [tp[0], tp[1]],
          [hp[0], hp[1]],
        ];
      }
    }
    // if parent ref is broken
    if (obj.parent === null) {
      doc.traverse((o) => {
        if (Array.isArray(o.children) && o.children.includes(obj)) {
          obj.parent = o;
        }
      });
    }
  });
}
