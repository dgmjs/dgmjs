import fontsJson from "@/fonts.json";

function fontFaceToString(font: any, urlPrefix?: string): string {
  const fontFace = {
    "font-family": `'${font.family}'`,
    "font-style": font.style,
    "font-weight": font.weight,
    src: `url('${urlPrefix ?? ""}${font.src}') format('truetype')`,
    ...(font.unicodeRange && { "unicode-range": font.unicodeRange }),
    ...(font.sizeAdjust && { "size-adjust": font.sizeAdjust }),
  };
  const fields = Object.entries(fontFace)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");
  return `@font-face {\n${fields}\n}`;
}

export function getFontsInStyle(urlPrefix?: string): string {
  return fontsJson.map((font) => fontFaceToString(font, urlPrefix)).join("\n");
}
