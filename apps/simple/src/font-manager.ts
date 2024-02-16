export type Font = {
  category: "sans" | "serif" | "mono" | "hand";
  family: string;
  style: "normal" | "italic";
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  src: string;
  unicodeRange?: string;
  sizeAdjust?: string;
};

function fontFaceToString(font: Font, urlPrefix?: string): string {
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

export function getFontsInStyle(fonts: Font[], urlPrefix?: string): string {
  return fonts.map((font) => fontFaceToString(font, urlPrefix)).join("\n");
}

export async function fetchFonts(fonts: Font[]) {
  const fontPromises = fonts.map((font) => {
    const css = `${font.style === "italic" ? "italic" : ""} ${
      font.weight
    } 1em '${font.family}'`;
    return document.fonts.load(css, "Eng123한글中文ひらがな🙂🙏🏻");
  });
  await Promise.all(fontPromises);
}

export function insertFontsToDocument(fonts: Font[], urlPrefix?: string) {
  const style = document.createElement("style");
  style.innerHTML = getFontsInStyle(fonts, urlPrefix);
  document.head.appendChild(style);
}
