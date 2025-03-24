import { Context } from "svgcanvas";

export function overrideSVGContext(ctx: typeof Context) {
  // stroke override
  (ctx as any).stroke = function (this: typeof Context, path: any) {
    if (this.__currentElement.nodeName === "path") {
      this.__currentElement.setAttribute("paint-order", "fill stroke markers");
      if (path && path.pathData) {
        // TODO: Path points should be adjusted to the origin
        this.__currentDefaultPath = path.pathData;
        const origin = this.__canvas.origin;
        this.__currentElement.setAttribute(
          "transform",
          `translate(${origin[0]}, ${origin[1]})`
        );
      }
    }
    this.__applyCurrentDefaultPath();
    this.__applyStyleToCurrentElement("stroke");
  }.bind(ctx);

  // fill override
  (ctx as any).fill = function (this: typeof Context, path: any) {
    if (this.__currentElement.nodeName === "path") {
      this.__currentElement.setAttribute("paint-order", "stroke fill markers");
      if (path && path.pathData) {
        // TODO: Path points should be adjusted to the origin
        this.__currentDefaultPath = path.pathData;
        const origin = this.__canvas.origin;
        this.__currentElement.setAttribute(
          "transform",
          `translate(${origin[0]}, ${origin[1]})`
        );
      }
    }
    this.__applyCurrentDefaultPath();
    this.__applyStyleToCurrentElement("fill");
  }.bind(ctx);
}
