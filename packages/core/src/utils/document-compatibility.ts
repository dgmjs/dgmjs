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
  // convert Diagram to Document
  if (json.type === "Diagram") {
    json.type = "Document";
  }

  // ensure children is array
  if (!Array.isArray(json.children)) {
    json.children = [];
  }

  // convert single-page document to multi-page document
  if (
    json.type === "Document" &&
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
