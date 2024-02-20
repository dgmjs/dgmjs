export function textVertAlignToAlignItems(vertAlign: string) {
  switch (vertAlign) {
    case "top":
      return "start";
    case "middle":
      return "center";
    case "bottom":
      return "end";
    default:
      return "start";
  }
}
