import { generateId } from "../std/id";

/**
 * Convert a old-version format JSON object to the latest version.
 */
export function convertToLatestVersion(json: any): any {
  // convert Diagram to Document
  if (json.type === "Diagram") {
    json.type = "Document";
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

  return json;
}
