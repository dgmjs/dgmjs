declare module "css-font-parser" {
  export function parseFont(font: string): {
    "font-family": string[];
    "font-style": string;
    "font-weight": string;
    "font-size": string;
  };
}
