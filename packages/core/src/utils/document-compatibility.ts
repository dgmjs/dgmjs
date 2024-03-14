/**
 * Convert a old-version format JSON object to the latest version.
 */
export function convertToLatestVersion(json: any): any {
  // convert Diagram to Document
  if (json.type === "Diagram") {
    json.type = "Document";
  }
  return json;
}
