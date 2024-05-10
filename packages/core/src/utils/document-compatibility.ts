import { generateId } from "../std/id";
import { convertStringToTextNode } from "./text-utils";

function traverse(json: any, visitor: (node: any) => void) {
  visitor(json);
  if (json.children) {
    json.children.forEach((child: any) => traverse(child, visitor));
  }
}

/**
 * Convert a old-version format JSON object to the latest version.
 */
export function convertToLatestVersion(json: any): any {
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
