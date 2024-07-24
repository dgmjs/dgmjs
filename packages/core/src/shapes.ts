import { assert } from "./std/assert";
import { FillStyle, Canvas } from "./graphics/graphics";
import {
  CONTROL_POINT_APOTHEM,
  DEFAULT_FONT_SIZE,
  LINE_SELECTION_THRESHOLD,
} from "./graphics/const";
import * as geometry from "./graphics/geometry";
import * as utils from "./graphics/utils";
import { ZodSchema } from "zod";
import {
  convertStringToTextNode,
  renderTextShape,
  visitTextNodes,
} from "./utils/text-utils";
import { evalScript } from "./mal/mal";
import { Obj } from "./core/obj";
import { Instantiator } from "./core/instantiator";
import { Transaction } from "./core/transaction";
import { MemoizationCanvas } from "./graphics/memoization-canvas";
import { hashStringToNumber } from "./std/id";
import { themeColors } from "./colors";
import { getAllViewport } from "./utils/shape-utils";

export const ScriptType = {
  RENDER: "render",
  OUTLINE: "outline",
  VIEWPORT: "viewport",
} as const;

export type ScriptTypeEnum = (typeof ScriptType)[keyof typeof ScriptType];

export interface Constraint {
  id: string;
  [key: string]: any; // allow all additional fields
}

export interface Property {
  name: string;
  type: "string" | "boolean" | "number" | "enum" | "text";
  hidden: boolean;
  options?: string[];
  value: any;
}

export interface Script {
  id: ScriptTypeEnum;
  script: string;
}

export type ConstraintFn = (
  tx: Transaction,
  page: Page,
  shape: Shape,
  canvas: Canvas,
  arg?: any
) => boolean;

export type PageSize = [number, number] | null;

export const Movable = {
  NONE: "none",
  HORZ: "horz",
  VERT: "vert",
  FREE: "free",
  PARENT: "parent",
} as const;

export type MovableEnum = (typeof Movable)[keyof typeof Movable];

export const Sizable = {
  NONE: "none",
  HORZ: "horz",
  VERT: "vert",
  FREE: "free",
  RATIO: "ratio",
} as const;

export type SizableEnum = (typeof Sizable)[keyof typeof Sizable];

export const LineType = {
  STRAIGHT: "straight",
  CURVE: "curve",
} as const;

export type LineTypeEnum = (typeof LineType)[keyof typeof LineType];

export const LineEndType = {
  FLAT: "flat",
  ARROW: "arrow",
  SOLID_ARROW: "solid-arrow",
  TRIANGLE: "triangle",
  TRIANGLE_FILLED: "triangle-filled",
  DIAMOND: "diamond",
  DIAMOND_FILLED: "diamond-filled",
  PLUS: "plus",
  CIRCLE: "circle",
  CIRCLE_PLUS: "circle-plus",
  CIRCLE_FILLED: "circle-filled",
  CROWFOOT_ONE: "crowfoot-one",
  CROWFOOT_ONLY_ONE: "crowfoot-only-one",
  CROWFOOT_ZERO_ONE: "crowfoot-zero-one",
  CROWFOOT_MANY: "crowfoot-many",
  CROWFOOT_ONE_MANY: "crowfoot-one-many",
  CROWFOOT_ZERO_MANY: "crowfoot-zero-many",
  CROSS: "cross",
  DOT: "dot",
  BAR: "bar",
  SQUARE: "square",
} as const;

export type LineEndTypeEnum = (typeof LineEndType)[keyof typeof LineEndType];

export const HorzAlign = {
  LEFT: "left",
  RIGHT: "right",
  CENTER: "center",
} as const;

export type HorzAlignEnum = (typeof HorzAlign)[keyof typeof HorzAlign];

export const VertAlign = {
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom",
} as const;

export type VertAlignEnum = (typeof VertAlign)[keyof typeof VertAlign];

/**
 * Shape object.
 * A shape object has following features:
 * 1. can be serialized (store and copy-paste)
 * 2. can have many children shapes
 * 3. can have multple scripts
 * 4. can have multiple constraints
 * 5. can have a manipulator
 * 6. has it's own coordinate system (rotate)
 */
export class Shape extends Obj {
  /**
   * Name of the shape
   */
  name: string;

  /**
   * Description of the shape
   */
  description: string;

  /**
   * The flag to indicate this shape is a prototype or not
   */
  proto: boolean;

  /**
   * Tags
   */
  tags: string[];

  /**
   * Enable flag
   */
  enable: boolean;

  /**
   * Visible flag
   */
  visible: boolean;

  /**
   * Indicate how this shape can be moved
   */
  movable: MovableEnum;

  /**
   * Indicate how this shape can be resized
   */
  sizable: SizableEnum;

  /**
   * Rotatable flag
   */
  rotatable: boolean;

  /**
   * Containable flag
   */
  containable: boolean;

  /**
   * Containable filter
   */
  containableFilter: string;

  /**
   * Connectable flag
   */
  connectable: boolean;

  /**
   * Shape's left position
   */
  left: number;

  /**
   * Shape's top position
   */
  top: number;

  /**
   * Shape's width
   */
  width: number;

  /**
   * Shape's height
   */
  height: number;

  /**
   * Shape's rotation angle (in degree)
   */
  rotate: number;

  /**
   * Stroke color
   */
  strokeColor: string;

  /**
   * Stroke width
   */
  strokeWidth: number;

  /**
   * Stroke pattern
   */
  strokePattern: number[];

  /**
   * Fill color
   */
  fillColor: string;

  /**
   * Fill style
   */
  fillStyle: string;

  /**
   * Font color
   */
  fontColor: string;

  /**
   * Font family
   */
  fontFamily: string;

  /**
   * Font size
   */
  fontSize: number;

  /**
   * Font style
   */
  fontStyle: string;

  /**
   * Font weight
   */
  fontWeight: number;

  /**
   * Opacity
   */
  opacity: number;

  /**
   * Roughness
   */
  roughness: number;

  /**
   * Link
   */
  link: string;

  /**
   * A reference to shape
   */
  reference: Shape | null;

  /**
   * Shape's constraints
   */
  constraints: Constraint[];

  /**
   * Shape's properties
   */
  properties: Property[];

  /**
   * Shape's scripts
   */
  scripts: Script[];

  /**
   * Memoize seed
   */
  protected _memoSeed: number | null;

  /**
   * Memoization canvas
   */
  protected _memoCanvas: MemoizationCanvas;

  /**
   * Memoization outline
   */
  protected _memoOutline: number[][];

  /**
   * Memoization viewport
   */
  protected _memoViewport: number[][];

  /**
   * Link DOM element
   */
  protected _linkDOM: HTMLAnchorElement | null;

  constructor() {
    super();
    this.type = "Shape";
    this.name = "";
    this.description = "";
    this.proto = false;
    this.tags = [];
    this.enable = true;
    this.visible = true;
    this.movable = Movable.FREE;
    this.sizable = Sizable.FREE;
    this.rotatable = true;
    this.containable = true;
    this.containableFilter = "";
    this.connectable = true;
    this.left = 0;
    this.top = 0;
    this.width = 0;
    this.height = 0;
    this.rotate = 0;
    this.strokeColor = "$foreground";
    this.strokeWidth = 1;
    this.strokePattern = [];
    this.fillColor = "$background";
    this.fillStyle = FillStyle.SOLID;
    this.fontColor = "$foreground";
    this.fontFamily = "Inter"; // "sans-serif"
    this.fontSize = DEFAULT_FONT_SIZE;
    this.fontStyle = "normal";
    this.fontWeight = 400;
    this.opacity = 1;
    this.roughness = 0;
    this.link = "";
    this.reference = null;
    this.constraints = [];
    this.properties = [];
    this.scripts = [];

    this._memoSeed = null;
    this._memoCanvas = new MemoizationCanvas();
    this._memoOutline = [];
    this._memoViewport = [];
    this._linkDOM = null;
  }

  /**
   * Export shape to JSON
   */
  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.name = this.name;
    json.description = this.description;
    json.proto = this.proto;
    json.tags = structuredClone(this.tags);
    json.enable = this.enable;
    json.visible = this.visible;
    json.movable = this.movable;
    json.sizable = this.sizable;
    json.rotatable = this.rotatable;
    json.containable = this.containable;
    json.containableFilter = this.containableFilter;
    json.connectable = this.connectable;
    json.left = this.left;
    json.top = this.top;
    json.width = this.width;
    json.height = this.height;
    json.rotate = this.rotate;
    json.strokeColor = this.strokeColor;
    json.strokeWidth = this.strokeWidth;
    json.strokePattern = structuredClone(this.strokePattern);
    json.fillColor = this.fillColor;
    json.fillStyle = this.fillStyle;
    json.fontColor = this.fontColor;
    json.fontFamily = this.fontFamily;
    json.fontSize = this.fontSize;
    json.fontStyle = this.fontStyle;
    json.fontWeight = this.fontWeight;
    json.opacity = this.opacity;
    json.roughness = this.roughness;
    json.link = this.link;
    json.reference = this.reference ? this.reference.id : null;
    json.constraints = structuredClone(this.constraints);
    json.properties = structuredClone(this.properties);
    json.scripts = structuredClone(this.scripts);
    if (keepRefs) {
      json.reference = this.reference;
    }
    return json;
  }

  /**
   * Import shape from JSON
   */
  fromJSON(json: any) {
    super.fromJSON(json);
    this.name = json.name ?? this.name;
    this.description = json.description ?? this.description;
    this.proto = json.proto ?? this.proto;
    this.tags = json.tags ?? this.tags;
    this.enable = json.enable ?? this.enable;
    this.visible = json.visible ?? this.visible;
    this.movable = json.movable ?? this.movable;
    this.sizable = json.sizable ?? this.sizable;
    this.rotatable = json.rotatable ?? this.rotatable;
    this.containable = json.containable ?? this.containable;
    this.containableFilter = json.containableFilter ?? this.containableFilter;
    this.connectable = json.connectable ?? this.connectable;
    this.left = json.left ?? this.left;
    this.top = json.top ?? this.top;
    this.width = json.width ?? this.width;
    this.height = json.height ?? this.height;
    this.rotate = json.rotate ?? this.rotate;
    this.strokeColor = json.strokeColor ?? this.strokeColor;
    this.strokeWidth = json.strokeWidth ?? this.strokeWidth;
    this.strokePattern = json.strokePattern ?? this.strokePattern;
    this.fillColor = json.fillColor ?? this.fillColor;
    this.fillStyle = json.fillStyle ?? this.fillStyle;
    this.fontColor = json.fontColor ?? this.fontColor;
    this.fontFamily = json.fontFamily ?? this.fontFamily;
    this.fontSize = json.fontSize ?? this.fontSize;
    this.fontStyle = json.fontStyle ?? this.fontStyle;
    this.fontWeight = json.fontWeight ?? this.fontWeight;
    this.opacity = json.opacity ?? this.opacity;
    this.roughness = json.roughness ?? this.roughness;
    this.link = json.link ?? this.link;
    this.reference = json.reference ?? this.reference;
    this.constraints = json.constraints ?? this.constraints;
    this.properties = json.properties ?? this.properties;
    this.scripts = json.scripts ?? this.scripts;
  }

  resolveRefs(idMap: Record<string, Shape>, nullIfNotFound: boolean = false) {
    super.resolveRefs(idMap, nullIfNotFound);
    if (typeof this.reference === "string") {
      if (idMap[this.reference]) {
        this.reference = idMap[this.reference];
      } else if (nullIfNotFound) {
        this.reference = null;
      }
    }
  }

  get right(): number {
    return this.left + this.width;
  }

  get bottom(): number {
    return this.top + this.height;
  }

  getSeed(): number {
    if (!this._memoSeed) this._memoSeed = hashStringToNumber(this.id);
    return this._memoSeed;
  }

  /**
   * Initialize shape
   */
  initialze(canvas: Canvas) {}

  /**
   * Finalize shape
   */
  finalize(canvas: Canvas) {
    if (this._linkDOM) {
      this._linkDOM.remove();
      this._linkDOM = null;
    }
  }

  /**
   * Update shape
   */
  update(canvas: Canvas) {
    this._memoCanvas.clear();
    this._memoCanvas.setCanvas(canvas);
    this.render(this._memoCanvas);
    this.children.forEach((s) => (s as Shape).update(canvas));
  }

  /**
   * Pick a shape at specific position (x, y)
   */
  getShapeAt(
    canvas: Canvas,
    point: number[],
    exceptions: Shape[] = []
  ): Shape | null {
    for (let i = this.children.length - 1; i >= 0; i--) {
      const s: Shape = this.children[i] as Shape;
      const r = s.getShapeAt(canvas, point, exceptions);
      if (r && !exceptions.includes(r)) return r;
    }
    if (this.visible && this.enable && this.containsPoint(canvas, point))
      return this;
    return null;
  }

  /**
   * Visit all shapes in breath-first order. The difference from traverse()
   * is that each shape determine visit into children or not.
   * (e.g. Group and Frame doens't visit into children)
   */
  visit(
    fun: (shape: Shape, parent: Shape | null) => void,
    parent: Shape | null = null
  ) {
    fun(this, parent);
    for (let i = this.children.length - 1; i >= 0; i--) {
      const s = this.children[i] as Shape;
      s.visit(fun, this);
    }
  }

  computeOpacity(): number {
    if (this.parent instanceof Group || this.parent instanceof Frame) {
      return this.opacity * this.parent.computeOpacity();
    }
    return this.opacity;
  }

  /**
   * Assign styles to memoization canvas.
   */
  assignStyles(canvas: MemoizationCanvas) {
    canvas.strokeColor = this.strokeColor;
    canvas.strokeWidth = this.strokeWidth;
    canvas.strokePattern = this.strokePattern;
    canvas.fillColor = this.fillColor;
    canvas.fillStyle = this.fillStyle;
    canvas.fontColor = this.fontColor;
    canvas.font = utils.toCssFont(
      this.fontStyle,
      this.fontWeight,
      this.fontSize,
      this.fontFamily
    );
    canvas.roughness = this.roughness;
    canvas.alpha = this.computeOpacity(); // this.opacity;
  }

  /**
   * Transform local context to parent's context
   */
  localTransform(canvas: Canvas, recursive: boolean = false) {
    if (recursive && this.parent instanceof Shape) {
      this.parent.localTransform(canvas, recursive);
    }
    if (this.rotate !== 0) {
      const cp = this.getCenter();
      canvas.translate(cp[0], cp[1]);
      canvas.rotate(this.rotate);
      canvas.translate(-cp[0], -cp[1]);
    }
  }

  /**
   * Transform local coord to parent's coord (LCS --> parent's LCS)
   * if recursive=true, transform to GCS (Global coord-system).
   */
  localCoordTransform(
    canvas: Canvas,
    point: number[],
    recursive: boolean = false
  ): number[] {
    let p = [point[0], point[1]];
    if (this.rotate !== 0) {
      let cp = this.getCenter();
      p = geometry.rotate(p, this.rotate, cp);
    }
    if (recursive && this.parent instanceof Shape) {
      p = this.parent.localCoordTransform(canvas, p, recursive);
    }
    return p;
  }

  /**
   * Transform parent's coord to local coord (parent's LCS --> LCS)
   * if recursive=true, transform GCS (Global coord-system) --> LCS.
   */
  localCoordTransformRev(
    canvas: Canvas,
    point: number[],
    recursive: boolean = false
  ): number[] {
    let p = [point[0], point[1]];
    if (recursive && this.parent instanceof Shape) {
      p = this.parent.localCoordTransformRev(canvas, p, recursive);
    }
    if (this.rotate !== 0) {
      let cp = this.getCenter();
      p = geometry.rotate(p, -this.rotate, cp);
    }
    return p;
  }

  /**
   * Render this shape
   *
   * Render vs Draw
   * - Render: computing geometries how to draw the shape
   * - Draw: actual drawing the computed geometries of the shape on the canvas
   */
  render(canvas: MemoizationCanvas) {
    this.assignStyles(canvas);
    this.renderOutline(canvas);
    this.renderViewport(canvas);
    const script = this.getScript(ScriptType.RENDER);
    if (script) {
      try {
        evalScript({ canvas: canvas, shape: this }, script);
      } catch (err) {
        console.error("[Script Error]", err);
      }
    } else {
      this.renderDefault(canvas);
    }
  }

  /**
   * Default render this shape
   */
  renderDefault(canvas: MemoizationCanvas) {}

  /**
   * Render this shape's outline
   */
  renderOutline(canvas: MemoizationCanvas) {
    const script = this.getScript(ScriptType.OUTLINE);
    if (script) {
      try {
        this._memoOutline = evalScript({ shape: this }, script);
      } catch (err) {
        console.error("[Script Error]", err);
      }
    } else {
      this._memoOutline = this.renderOutlineDefault(canvas);
    }
  }

  /**
   * Render default outline
   */
  renderOutlineDefault(canvas: MemoizationCanvas): number[][] {
    return [];
  }

  /**
   * Return outline polygon.
   */
  getOutline(): number[][] {
    return this._memoOutline;
  }

  /**
   * Draw this shape
   *
   * Render vs Draw
   * - Render: computing geometries how to draw the shape
   * - Draw: actual drawing the computed geometries of the shape on the canvas
   */
  draw(canvas: Canvas, showDOM: boolean = false) {
    if (this.visible) {
      canvas.save();
      this.localTransform(canvas);
      this.drawLink(canvas, showDOM);
      this._memoCanvas.draw(canvas);
      this.children.forEach((s) => (s as Shape).draw(canvas, showDOM));
      canvas.restore();
    }
  }

  /**
   * Draw link
   */
  drawLink(canvas: Canvas, showDOM: boolean = false) {
    if (this.link.trim().length === 0) showDOM = false;
    if (showDOM) {
      if (!this._linkDOM) {
        this._linkDOM = document.createElement("a");
        this._linkDOM.style.position = "absolute";
        this._linkDOM.style.color = "var(--colors-blue9)";
        this._linkDOM.style.display = "flex";
        this._linkDOM.style.alignItems = "center";
        this._linkDOM.style.justifyContent = "center";
        this._linkDOM.style.cursor = "pointer";
        this._linkDOM.style.zIndex = "10";
        this._linkDOM.setAttribute("target", "_blank");
        this._linkDOM.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`;
        canvas.element.parentElement?.appendChild(this._linkDOM);
      }
      // update linkDOM parent element
      if (this._linkDOM.parentElement !== canvas.element.parentElement) {
        canvas.element.parentElement?.appendChild(this._linkDOM);
      }
      const rect = this.getBoundingRect().map((p) => {
        return utils.gcs2dcs(canvas, p);
      });
      const right = rect[1][0];
      const top = rect[0][1];
      const size = 16;
      this._linkDOM.style.left = `${right + 6}px`;
      this._linkDOM.style.top = `${top - size - 6}px`;
      this._linkDOM.style.width = `${size}px`;
      this._linkDOM.style.height = `${size}px`;
      this._linkDOM.setAttribute("title", this.link);
      this._linkDOM.setAttribute("href", this.link);
    } else {
      this.finalize(canvas);
    }
  }

  /**
   * Returns the center point
   */
  getCenter(): number[] {
    return geometry.center(this.getBoundingRect());
  }

  /**
   * Return a bounding rect.
   */
  getBoundingRect(includeAnchorPoints: boolean = false): number[][] {
    return [
      [this.left, this.top],
      [this.right, this.bottom],
    ];
  }

  /**
   * Return this shape's viewport
   */
  renderViewport(canvas: MemoizationCanvas) {
    const script = this.getScript(ScriptType.VIEWPORT);
    if (script) {
      try {
        this._memoViewport = evalScript({ shape: this }, script);
      } catch (err) {
        console.error("[Script Error]", err);
      }
    } else {
      this._memoViewport = this.renderViewportDefault(canvas);
    }
  }

  /**
   * Render default viewport
   */
  renderViewportDefault(canvas: MemoizationCanvas): number[][] {
    const outlineGCS = this.getOutline().map((p) =>
      this.localCoordTransform(canvas.canvas, p, true)
    );
    return geometry.expandRect(
      geometry.boundingRect(outlineGCS),
      this.strokeWidth / 2
    );
  }

  /**
   * Return a viewport in GCS.
   * Viewport is a rect that includes actually drawn area which includes
   * stroke width, arrowheads, etc. So viewport is mostly larger than
   * bounding rect.
   */
  getViewport(canvas: Canvas): number[][] {
    return this._memoViewport;
  }

  /**
   * Return a bounding box embracing children shapes
   */
  getChildrenBoundingRect(): number[][] {
    return this.children
      .filter((s) => (s as Shape).visible)
      .map((s) => (s as Shape).getBoundingRect())
      .reduce(geometry.unionRect);
  }

  /**
   * Return a bounding box in DOM coord.
   *
   * [Note] If you want to place DOM elements over the canvas, use this method.
   * and don't forget to apply transform scale to the DOM element.
   */
  getRectInDCS(
    canvas: Canvas,
    includeAnchorPoints: boolean = false
  ): number[][] {
    const rect = this.getBoundingRect(includeAnchorPoints).map((p) => {
      return utils.gcs2dcs(canvas, p);
    });
    const scale = canvas.scale;
    let width = geometry.width(rect) * (1 / scale);
    let height = geometry.height(rect) * (1 / scale);
    const left = rect[0][0] - (width * (1 - scale)) / 2;
    const top = rect[0][1] - (height * (1 - scale)) / 2;
    return [
      [left, top],
      [left + width, top + height],
    ];
  }

  /**
   * Return a enclosure
   */
  getEnclosure(): number[][] {
    return [
      [this.left, this.top],
      [this.right, this.top],
      [this.right, this.bottom],
      [this.left, this.bottom],
      [this.left, this.top],
    ];
  }

  /**
   * Determines whether this shape contains a point in GCS
   */
  containsPoint(canvas: Canvas, point: number[]): boolean {
    const outline = this.getOutline().map((p) =>
      this.localCoordTransform(canvas, p, true)
    );
    if (this.fillStyle === FillStyle.NONE) {
      return (
        geometry.getNearSegment(
          point,
          outline,
          LINE_SELECTION_THRESHOLD * canvas.px
        ) > -1
      );
    } else {
      return geometry.inPolygon(point, outline);
    }
  }

  /**
   * Determines whether the given rect overlaps this shape's clipping area.
   * If the shape don't have clipping area, return true.
   * If the shape has clipping area, return true if the rect overlaps the
   * clipping area. (e.g. Frame)
   */
  overlapClippingArea(canvas: Canvas, rect: number[][]): boolean {
    return true;
  }

  /**
   * Determines whether this shape overlaps a given rect
   */
  overlapRect(canvas: Canvas, rect: number[][]): boolean {
    if (this.fillStyle === FillStyle.NONE) {
      const outline = this.getOutline().map((p) =>
        this.localCoordTransform(canvas, p, true)
      );
      for (let i = 0; i < outline.length - 1; i++) {
        if (geometry.lineOverlapRect([outline[i], outline[i + 1]], rect))
          return true;
      }
      return false;
    }
    const overlapParentClippingArea =
      this.parent instanceof Shape
        ? this.parent.overlapClippingArea(canvas, rect)
        : true;
    return (
      overlapParentClippingArea &&
      geometry.overlapRect(rect, this.getBoundingRect())
    );
  }

  /**
   * Parse the query-string and returns a query object (JSON)
   *
   * Query syntax:
   * <query>         = <clause>["|" <clause>]*
   * <clause>        = <term>["&" <term>]*
   * <term>          = <type-selector> | <tag-selector>
   * <name-selector> = <name>  e.g.) OuterBox, NameText, ...
   * <type-selector> = "@"<type>  e.g.) @Box, @Text, @Line, ...
   * <tag-selector>  = "#"<tag>   e.g.) #label, #compartment, ...
   *
   * e.g.) parseQuery("@Box|NameText|@Text&#compartment")
   *   --> [{_type: "Box"},{name: "NameText"},{_type: "Text", tag:"compartment"}]
   * @param queryString
   * @returns query object
   */
  parseQueryString(queryString: string): any[] {
    return queryString
      ?.trim()
      .split("|")
      .filter((i) => i.length > 0)
      .map((clause) => {
        const terms = clause.trim().split("&");
        return Object.fromEntries(
          terms.map((term) => {
            const t = term.trim();
            if (t.startsWith("@")) {
              return ["type", t.substring(1)];
            } else if (t.startsWith("#")) {
              return ["tag", t.substring(1)];
            } else {
              return ["name", t];
            }
          })
        );
      });
  }

  /**
   * Returns true if query matches this shape
   */
  match(query: Array<{ _type: string; tag: string }>): boolean {
    if (query.length === 0) return true;
    for (let clause of query) {
      const terms = Object.entries(clause);
      const result = terms.every(([key, value]) => {
        switch (key) {
          case "name":
            return this.name === value;
          case "tag":
            return this.tags.includes(value);
          case "type":
            // TODO: return meta.types[value] && this instanceof meta.types[value];
            return false;
          default:
            return false;
        }
      });
      if (result) return true;
    }
    return false;
  }

  /**
   * Find a shape first matched with the query string
   */
  findByQuery(queryString: string | any): Shape | null {
    const query =
      typeof queryString === "string"
        ? this.parseQueryString(queryString)
        : queryString;
    if (query)
      return this.find((s) => (s as Shape).match(query)) as Shape | null;
    return null;
  }

  /**
   * Find all shapes matched with the query string
   */
  findAllByQuery(queryString: string): Shape[] {
    const query = this.parseQueryString(queryString);
    return this.traverseSequence().filter((s) =>
      (s as Shape).match(query)
    ) as Shape[];
  }

  /**
   * Determine a given shape can be contained in this shape
   */
  canContain(shape: Shape): boolean {
    return (
      this.containable &&
      (this.containableFilter.trim()
        ? shape.match(this.parseQueryString(this.containableFilter))
        : true)
    );
  }

  /**
   * Get a property object
   */
  getProperty(name: string): any {
    if (this.properties) {
      return this.properties.find((prop) => prop.name === name);
    }
    return undefined;
  }

  /**
   * Get a property value
   */
  getPropertyValue(name: string): any {
    const prop = this.getProperty(name);
    return prop ? prop.value : undefined;
  }

  /**
   * Get a property object
   */
  getScript(id: string) {
    const s = this.scripts.find((s) => s.id === id);
    if (s) {
      return s.script;
    }
    return undefined;
  }
}

/**
 * Doc
 */
export class Doc extends Obj {
  version: number;

  constructor() {
    super();
    this.type = "Doc";
    this.version = 1;
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.version = this.version;
    return json;
  }

  fromJSON(json: any) {
    super.fromJSON(json);
    this.version = json.version ?? this.version;
  }
}

/**
 * Page
 */
export class Page extends Shape {
  size: PageSize;

  /**
   * Page's scroll transient state
   */
  pageOrigin: number[] | null;

  /**
   * Page's zoom transient state
   */
  pageScale: number;

  constructor() {
    super();
    this.type = "Page";
    this.enable = false; // page cannot be controllable
    this.size = null; // null = infinite, [960, 720] = 4:3, [960, 540] = 16:9

    // transient states
    this.pageOrigin = null;
    this.pageScale = 1;
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.size = structuredClone(this.size);
    return json;
  }

  fromJSON(json: any) {
    super.fromJSON(json);
    this.size = json.size ?? this.size;
  }

  finalize(canvas: Canvas): void {
    this.traverseSequence().forEach((s) => {
      if (s !== this) (s as Shape).finalize(canvas);
    });
  }

  /**
   * Update all shapes in this page
   */
  update(canvas: Canvas) {
    this.children.forEach((s) => (s as Shape).update(canvas));
  }

  /**
   * Render this shape
   */
  draw(canvas: Canvas, showDOM: boolean = false) {
    if (this.visible) {
      canvas.save();
      canvas.globalTransform();
      this.children.forEach((s) => (s as Shape).draw(canvas, showDOM));
      canvas.restore();
    }
  }

  /**
   * Returns a bounding box containing all shapes in the doc
   */
  getBoundingRect(): number[][] {
    return this.children.length > 0
      ? this.traverseSequence()
          .filter((s) => s !== this)
          .map((s) => (s as Shape).getBoundingRect())
          .reduce(geometry.unionRect)
      : [
          [0, 0],
          [0, 0],
        ];
  }

  /**
   * Return the page's viewport in GCS
   */
  getViewport(canvas: Canvas): number[][] {
    return this.children.length > 0
      ? this.traverseSequence()
          .filter((s) => s !== this)
          .map((s) => (s as Shape).getViewport(canvas))
          .reduce(geometry.unionRect)
      : [
          [0, 0],
          [0, 0],
        ];
  }

  /**
   * Page do not contain a point
   */
  containsPoint(canvas: Canvas, point: number[]): boolean {
    return false;
  }

  /**
   * Page do not overlap with anything
   */
  overlapRect(canvas: Canvas, rect: number[][]): boolean {
    return false;
  }
}

/**
 * Box shape
 */
export class Box extends Shape {
  /**
   * Padding spaces [top, right, bottom, left] (same with CSS)
   */
  padding: number[];

  /**
   * Corner radius [top-left, top-right, bottom-right, bottom-left] (same with CSS)
   */
  corners: number[];

  /**
   * Anchored
   */
  anchored: boolean;

  /**
   * Anchor angle (in degree)
   */
  anchorAngle: number;

  /**
   * Anchor length
   */
  anchorLength: number;

  /**
   * Anchor position (0~1). 0 is on tail, 1 is on head
   */
  anchorPosition: number;

  /**
   * Text editable
   */
  textEditable: boolean;

  /**
   * Text could a string or document object
   *
   * Rich text document content grammar (BNF):
   *   doc = (paragraph | bulletList | orderedList)*
   *   bulletList = listItem*
   *   orderedList = listItem*
   *   paragraph = (text | hardBreak)*
   *   listItem = paragraph
   *   text = <TERMINAL>
   *   hardBreak = <TERMINAL>
   *
   * Rich text document content (this.text) look like:
   * {
   *   "type": "doc",
   *   "content": [
   *     {
   *       "type": "paragraph",
   *       "content": [
   *         { "type": "text", "text": "asdf asdf" },
   *         { "type": "text", "marks": [{ "type": "strong" }], "text": "sadflkj" },
   *         ...
   *       ]
   *     }
   *     ...
   *   ]
   * }
   */
  text: any;

  /**
   * Word wrap
   */
  wordWrap: boolean;

  /**
   * Text horizontal alignment
   */
  horzAlign: HorzAlignEnum;

  /**
   * Text vertical alignment
   */
  vertAlign: VertAlignEnum;

  /**
   * Text line height
   */
  lineHeight: number;

  /**
   * Text paragraph spacing
   */
  paragraphSpacing: number;

  /**
   * Allow render text or not (just for internal use)
   * @private
   */
  allowRenderText: boolean;

  constructor() {
    super();
    this.type = "Box";
    // Initialization
    this.containable = false;
    this.padding = [0, 0, 0, 0];
    this.corners = [0, 0, 0, 0];
    this.anchored = false;
    this.anchorAngle = 0;
    this.anchorLength = 0;
    this.anchorPosition = 0.5;
    this.textEditable = true;
    this.text = convertStringToTextNode("", HorzAlign.CENTER);
    this.wordWrap = false;
    this.horzAlign = HorzAlign.CENTER;
    this.vertAlign = VertAlign.MIDDLE;
    this.lineHeight = 1.2;
    this.paragraphSpacing = 0;
    this.allowRenderText = true;
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.padding = structuredClone(this.padding);
    json.corners = structuredClone(this.corners);
    json.anchored = this.anchored;
    json.anchorAngle = this.anchorAngle;
    json.anchorLength = this.anchorLength;
    json.anchorPosition = this.anchorPosition;
    json.textEditable = this.textEditable;
    json.text = structuredClone(this.text);
    json.wordWrap = this.wordWrap;
    json.horzAlign = this.horzAlign;
    json.vertAlign = this.vertAlign;
    json.lineHeight = this.lineHeight;
    json.paragraphSpacing = this.paragraphSpacing;
    return json;
  }

  fromJSON(json: any) {
    super.fromJSON(json);
    this.padding = json.padding ?? this.padding;
    this.corners = json.corners ?? this.corners;
    this.anchored = json.anchored ?? this.anchored;
    this.anchorAngle = json.anchorAngle ?? this.anchorAngle;
    this.anchorLength = json.anchorLength ?? this.anchorLength;
    this.anchorPosition = json.anchorPosition ?? this.anchorPosition;
    this.textEditable = json.textEditable ?? this.textEditable;
    this.text = json.text ?? this.text;
    this.wordWrap = json.wordWrap ?? this.wordWrap;
    this.horzAlign = json.horzAlign ?? this.horzAlign;
    this.vertAlign = json.vertAlign ?? this.vertAlign;
    this.lineHeight = json.lineHeight ?? this.lineHeight;
    this.paragraphSpacing = json.paragraphSpacing ?? this.paragraphSpacing;
  }

  get innerLeft(): number {
    return this.left + this.padding[3];
  }

  get innerRight(): number {
    return this.right - this.padding[1];
  }

  get innerTop(): number {
    return this.top + this.padding[0];
  }

  get innerBottom(): number {
    return this.bottom - this.padding[2];
  }

  get innerWidth(): number {
    return this.innerRight - this.innerLeft;
  }

  get innerHeight(): number {
    return this.innerBottom - this.innerTop;
  }

  renderDefault(canvas: MemoizationCanvas): void {
    if (this.fillStyle !== FillStyle.NONE) {
      canvas.fillRoundRect(
        this.left,
        this.top,
        this.right,
        this.bottom,
        this.corners,
        this.getSeed()
      );
    }
    if (this.strokeWidth > 0) {
      canvas.strokeRoundRect(
        this.left,
        this.top,
        this.right,
        this.bottom,
        this.corners,
        this.getSeed()
      );
    }
    this.renderText(canvas);
  }

  renderText(canvas: MemoizationCanvas): void {
    if (this.allowRenderText) {
      renderTextShape(canvas, this);
    }
  }

  /**
   * Preprocess document (handle wordWrap and hardBreak)
   * options:
   *   wordWrap: boolean
   *   width: number
   *   listIndent: number
   *
   * Preprocessed document content grammar (BNF):
   *   doc = (paragraph | bulletList | orderedList)*
   *   orderedList [width, height] = listItem*
   *   bulletList [width, height] = listItem*
   *   listItem [width, height] = paragraph
   *   paragraph [width, height] = line*
   *   line [width, height] = text*
   *   text [width, height] = <TERMINAL>
   *
   * @param doc
   * @param options
   */
  preprocess(doc: any, wordWrap: boolean, width: number, listIndent: number) {}

  /**
   * Compute size of text with word-wrap and new line chars
   */
  wordWrapTextSize(canvas: Canvas, wordWrap: boolean, width: number): number[] {
    let x = 0;
    let y = 0;
    let xmax = 0;
    let ymax = 0;
    const h = canvas.textMetric("|").height * this.lineHeight;
    visitTextNodes(this.text, (node) => {
      switch (node.type) {
        case "text":
          let fontStyle = this.fontStyle;
          let fontWeight = this.fontWeight;
          let fontSize = this.fontSize;
          let fontFamily = this.fontFamily;
          if (node.marks) {
            node.marks.forEach((mark: any) => {
              switch (mark.type) {
                case "strong":
                  fontWeight = 700;
                  break;
                case "em":
                  fontStyle = "italic";
                  break;
              }
            });
          }
          canvas.font = utils.toCssFont(
            fontStyle,
            fontWeight,
            fontSize,
            fontFamily
          );
          const words = node.text.split(" ");
          words.forEach((word: string, i: number) => {
            const m = canvas.textMetric(word);
            const ms = canvas.textMetric(" " + word);
            if (x + ms.width <= this.innerWidth) {
              /*
              canvas.fillText(
                this.getInnerLeft() + x,
                this.getInnerTop() + y,
                x === 0 ? word : " " + word
              );
              */
              x += x === 0 ? m.width : ms.width;
            } else {
              y += h;
              x = 0;
              /*
              canvas.fillText(
                this.getInnerLeft() + x,
                this.getInnerTop() + y,
                word
              );
              */
              x += m.width;
            }
            xmax = Math.max(xmax, x);
            ymax = Math.max(ymax, y);
          });
          break;
        case "paragraph":
          y += h + 10 /* paragraph spacing */;
          x = 0;
          break;
        case "hard_break":
          y += h;
          x = 0;
          break;
      }
    });
    return [xmax, ymax];
  }

  /**
   * Return outline polygon
   */
  renderOutlineDefault(canvas: MemoizationCanvas): number[][] {
    return [
      [this.left, this.top],
      [this.right, this.top],
      [this.right, this.bottom],
      [this.left, this.bottom],
      [this.left, this.top],
    ];
  }

  /**
   * Return the anchor vector based on this.anchorPosition. The anchor vector
   * provides the start point and end point to derive the base angle. The shape
   * will be rotated as the angle of (base angle + anchor angle) at start point.
   *
   *   (shape)
   *      \
   *       \ <-- anchorLength
   *        \
   *         o --------------------> o
   *         |     (anchor vector)   |
   *         |                       |
   *      vector[0]               vector[1]
   *
   */
  getAnchorVector(canvas: Canvas): number[][] {
    const target = this.parent;
    let startPoint = [0, 0];
    let endPoint = [0, 0];
    if (target instanceof Path) {
      const outline = target.getOutline();
      const anchorPoint = geometry.getPointOnPath(outline, this.anchorPosition);
      const segment = geometry.getNearSegment(
        anchorPoint,
        outline,
        CONTROL_POINT_APOTHEM * 2
      );
      startPoint = anchorPoint;
      endPoint = outline[segment + 1];
    } else if (target instanceof Box) {
      startPoint = geometry.center(target.getBoundingRect());
      endPoint = [startPoint[0], startPoint[1] - 1];
    }
    return [startPoint, endPoint];
  }
}

/**
 * Path shape
 */
export class Path extends Shape {
  pathEditable: boolean;
  path: number[][];

  constructor() {
    super();
    this.type = "Path";
    this.pathEditable = true;
    this.path = [];
    this.containable = false;
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.pathEditable = this.pathEditable;
    json.path = structuredClone(this.path);
    return json;
  }

  fromJSON(json: any) {
    super.fromJSON(json);
    this.pathEditable = json.pathEditable ?? this.pathEditable;
    this.path = json.path ?? this.path;
  }

  /**
   * Return is the path is closed
   */
  isClosed(): boolean {
    return geometry.isClosed(this.path);
  }

  /**
   * Return a segment of an end
   * @param isHead
   * @returns segment line to end
   */
  getEndSegment(isHead: boolean): number[][] {
    let i1 = isHead ? this.path.length - 2 : 1;
    let i2 = isHead ? this.path.length - 1 : 0;
    return [this.path[i1], this.path[i2]];
  }

  /**
   * Determines whether this shape contains a point in GCS
   */
  containsPoint(canvas: Canvas, point: number[]): boolean {
    if (this.isClosed() && this.fillStyle !== FillStyle.NONE) {
      const outline = this.getOutline().map((p) =>
        this.localCoordTransform(canvas, p, true)
      );
      return geometry.inPolygon(point, outline);
    } else {
      const points = this.getOutline().map((p) =>
        this.localCoordTransform(canvas, p, true)
      );
      return (
        geometry.getNearSegment(
          point,
          points,
          LINE_SELECTION_THRESHOLD * canvas.px
        ) > -1
      );
    }
  }

  /**
   * Determines whether this shape overlaps a given rect
   */
  overlapRect(canvas: Canvas, rect: number[][]): boolean {
    for (let i = 0; i < this.path.length - 1; i++) {
      if (geometry.lineOverlapRect([this.path[i], this.path[i + 1]], rect))
        return true;
    }
    return false;
  }

  /**
   * Return default outline
   */
  renderOutlineDefault(canvas: MemoizationCanvas): number[][] {
    return geometry.pathCopy(this.path);
  }
}

/**
 * Rectangle
 */
export class Rectangle extends Box {
  constructor() {
    super();
    this.type = "Rectangle";
  }
}

/**
 * Ellipse
 */
export class Ellipse extends Box {
  constructor() {
    super();
    this.type = "Ellipse";
  }

  renderDefault(canvas: MemoizationCanvas): void {
    if (this.fillStyle !== FillStyle.NONE) {
      canvas.fillEllipse(
        this.left,
        this.top,
        this.right,
        this.bottom,
        this.getSeed()
      );
    }
    if (this.strokeWidth > 0) {
      canvas.strokeEllipse(
        this.left,
        this.top,
        this.right,
        this.bottom,
        this.getSeed()
      );
    }
    this.renderText(canvas);
  }

  /**
   * Return outline polygon
   */
  renderOutlineDefault(canvas: MemoizationCanvas): number[][] {
    const points = geometry.pointsOnEllipse(
      this.getCenter(),
      this.width / 2,
      this.height / 2,
      Math.max(Math.round((this.width + this.height) / 5), 30) // num of points
    );
    return points;
  }
}

/**
 * Text
 */
export class Text extends Box {
  constructor() {
    super();
    this.type = "Text";
    this.fillColor = "$transparent";
    this.strokeColor = "$transparent";
    this.horzAlign = HorzAlign.LEFT;
    this.vertAlign = VertAlign.TOP;
  }

  /**
   * Determines whether this shape contains a point in GCS
   */
  containsPoint(canvas: Canvas, point: number[]): boolean {
    const outline = this.getOutline().map((p) =>
      this.localCoordTransform(canvas, p, true)
    );
    return geometry.inPolygon(point, outline);
  }

  renderDefault(canvas: MemoizationCanvas): void {
    if (this.fillStyle !== FillStyle.NONE) {
      canvas.fillRoundRect(
        this.left,
        this.top,
        this.right,
        this.bottom,
        this.corners,
        this.getSeed()
      );
    }
    this.renderText(canvas);
  }
}

/**
 * Image
 */
export class Image extends Box {
  imageData: string;
  imageWidth: number;
  imageHeight: number;

  /**
   * Image DOM element
   */
  private _imageDOM: HTMLImageElement | null;

  constructor() {
    super();
    this.type = "Image";
    this.imageData = "";
    this.imageWidth = 0;
    this.imageHeight = 0;
    this.sizable = Sizable.RATIO;
    this._imageDOM = null;
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.imageData = this.imageData;
    json.imageWidth = this.imageWidth;
    json.imageHeight = this.imageHeight;
    return json;
  }

  fromJSON(json: any) {
    super.fromJSON(json);
    this.imageData = json.imageData ?? this.imageData;
    this.imageWidth = json.imageWidth ?? this.imageWidth;
    this.imageHeight = json.imageHeight ?? this.imageHeight;
  }

  renderDefault(canvas: MemoizationCanvas): void {
    if (!this._imageDOM) {
      this._imageDOM = new globalThis.Image();
      this._imageDOM.src = this.imageData;
    }
    canvas.drawImage(
      this._imageDOM,
      this.left,
      this.top,
      this.width,
      this.height,
      this.corners
    );
  }
}

/**
 * Group
 */
export class Group extends Box {
  constructor() {
    super();
    this.type = "Group";
  }

  /**
   * Pick a shape at specific position (x, y)
   */
  getShapeAt(canvas: Canvas, point: number[]): Shape | null {
    if (this.visible && this.enable && this.containsPoint(canvas, point))
      return this;
    return null;
  }

  /**
   * Determines whether the given rect overlaps this shape's clipping area.
   * Group do not allow to overlap with children shapes.
   */
  overlapClippingArea(canvas: Canvas, rect: number[][]): boolean {
    return false;
  }

  /**
   * Visit all shapes in breath-first order. The difference from traverse()
   * is that each shape determine visit into children or not.
   * (e.g. Group and Frame doens't visit into children)
   */
  visit(
    fun: (shape: Shape, parent: Shape | null) => void,
    parent: Shape | null = null
  ) {
    fun(this, parent);
  }

  renderDefault(canvas: MemoizationCanvas): void {}
}

/**
 * Line shape
 */
export class Line extends Path {
  lineType: LineTypeEnum;
  headEndType: LineEndTypeEnum;
  tailEndType: LineEndTypeEnum;

  constructor() {
    super();
    this.type = "Line";
    this.lineType = LineType.STRAIGHT;
    this.headEndType = LineEndType.FLAT;
    this.tailEndType = LineEndType.FLAT;
    this.containable = false;
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.lineType = this.lineType;
    json.headEndType = this.headEndType;
    json.tailEndType = this.tailEndType;
    return json;
  }

  fromJSON(json: any) {
    super.fromJSON(json);
    this.lineType = json.lineType ?? this.lineType;
    this.headEndType = json.headEndType ?? this.headEndType;
    this.tailEndType = json.tailEndType ?? this.tailEndType;
  }

  /**
   * Draw this shape
   */
  renderDefault(canvas: MemoizationCanvas): void {
    let path = geometry.pathCopy(this.path);
    if (path.length >= 2) {
      const hp = this.renderLineEnd(canvas, this.headEndType, true);
      const tp = this.renderLineEnd(canvas, this.tailEndType, false);
      path[0] = tp;
      path[path.length - 1] = hp;
    }
    this.assignStyles(canvas);
    if (this.isClosed() && this.fillStyle !== FillStyle.NONE) {
      switch (this.lineType) {
        case LineType.STRAIGHT:
          canvas.fillPolygon(path, this.getSeed());
          break;
        case LineType.CURVE:
          canvas.fillCurve(path, this.getSeed());
          break;
      }
    }
    if (this.strokeWidth > 0) {
      switch (this.lineType) {
        case LineType.STRAIGHT:
          canvas.polyline(path, this.getSeed());
          break;
        case LineType.CURVE:
          canvas.strokeCurve(path, this.getSeed());
          break;
      }
    }
  }

  /**
   * Draw line end types.
   * All line-ends are drawn based on the point grid as below:
   *
   *         0 1 2 3 4 5 6 7 8 9 10
   * 0       • • • • • • • • • • •
   * 1       • • • • • • • • • • •
   * 2       • • • • • • • • • • •
   * 3  HEAD •-•-•-•-•-•-•-•-•-•-•---------- TAIL
   * 4       • • • • • • • • • • •
   * 5       • • • • • • • • • • •
   * 6       • • • • • • • • • • •
   *
   * @returns an end point the path should be drawn to
   */
  renderLineEnd(
    canvas: MemoizationCanvas,
    edgeEndType: string,
    isHead: boolean
  ): number[] {
    let rt = [
      [0, 0],
      [0, 0],
    ];
    const path = this.path;
    if (isHead) {
      rt = [path[path.length - 1], path[path.length - 2]];
    } else {
      rt = [path[0], path[1]];
    }
    const a = rt[1][1] - rt[0][1];
    const b = rt[1][0] - rt[0][0];
    let th = Math.atan(a / b);
    if ((a < 0 && b < 0) || (a > 0 && b < 0) || (a === 0 && b < 0)) {
      th = th + Math.PI;
    }

    // compute point grid
    const gap = 4;
    const xsize = 11;
    const ysize = 7;
    let grid: number[][][] = []; // [x][y]
    const yshalf = Math.floor(ysize / 2);
    for (let ix = 0; ix < xsize; ix++) {
      let column: number[][] = [];
      for (let iy = -yshalf; iy <= yshalf; iy++) {
        const l = Math.sqrt(Math.pow(gap * ix, 2) + Math.pow(gap * iy, 2));
        const c = Math.acos((gap * ix) / l);
        const t = th + (iy < 0 ? -c : c);
        let p = [l * Math.cos(t) + rt[0][0], l * Math.sin(t) + rt[0][1]];
        if (ix === 0 && iy === 0) p = rt[0];
        column.push(p);
      }
      grid.push(column);
    }

    // draw line end types
    canvas.strokeColor = this.strokeColor;
    canvas.strokeWidth = this.strokeWidth;
    canvas.strokePattern = []; // solid
    canvas.fillColor = this.strokeColor;
    canvas.fillStyle = FillStyle.SOLID;
    switch (edgeEndType) {
      case LineEndType.ARROW:
        canvas.polyline([grid[3][1], grid[0][3], grid[3][5]], this.getSeed());
        return grid[0][3];
      case LineEndType.SOLID_ARROW:
        canvas.polygon(
          [grid[3][3], grid[3][1], grid[0][3], grid[3][5], grid[3][3]],
          this.getSeed()
        );
        return grid[0][3];
      case LineEndType.TRIANGLE:
        canvas.strokePolygon(
          [grid[7][3], grid[7][0], grid[0][3], grid[7][6], grid[7][3]],
          this.getSeed()
        );
        return grid[7][3];
      case LineEndType.TRIANGLE_FILLED:
        canvas.polygon(
          [grid[7][3], grid[7][0], grid[0][3], grid[7][6], grid[7][3]],
          this.getSeed()
        );
        return grid[7][3];
      case LineEndType.DIAMOND:
        canvas.strokePolygon(
          [grid[0][3], grid[3][1], grid[6][3], grid[3][5]],
          this.getSeed()
        );
        return grid[6][3];
      case LineEndType.DIAMOND_FILLED:
        canvas.polygon(
          [grid[0][3], grid[3][1], grid[6][3], grid[3][5]],
          this.getSeed()
        );
        return grid[6][3];
      case LineEndType.PLUS:
        canvas.polyline([grid[2][1], grid[2][5]], this.getSeed());
        return grid[0][3];
      case LineEndType.CIRCLE:
        canvas.strokeEllipse(
          grid[2][3][0] - gap * 2,
          grid[2][3][1] - gap * 2,
          grid[2][3][0] + gap * 2,
          grid[2][3][1] + gap * 2,
          this.getSeed()
        );
        return grid[4][3];
      case LineEndType.CIRCLE_PLUS:
        canvas.strokeEllipse(
          grid[2][3][0] - gap * 2,
          grid[2][3][1] - gap * 2,
          grid[2][3][0] + gap * 2,
          grid[2][3][1] + gap * 2,
          this.getSeed()
        );
        canvas.polyline([grid[2][1], grid[2][5]]);
        return grid[0][3];
      case LineEndType.CIRCLE_FILLED:
        canvas.ellipse(
          grid[2][3][0] - gap * 2,
          grid[2][3][1] - gap * 2,
          grid[2][3][0] + gap * 2,
          grid[2][3][1] + gap * 2,
          this.getSeed()
        );
        return grid[4][3];
      case LineEndType.CROWFOOT_ONE:
        canvas.polyline([grid[2][1], grid[2][5]], this.getSeed());
        return grid[0][3];
      case LineEndType.CROWFOOT_ONLY_ONE:
        canvas.polyline([grid[4][1], grid[4][5]], this.getSeed());
        canvas.polyline([grid[2][1], grid[2][5]], this.getSeed());
        return grid[0][3];
      case LineEndType.CROWFOOT_MANY:
        canvas.polyline([grid[0][1], grid[4][3], grid[0][5]], this.getSeed());
        return grid[0][3];
      case LineEndType.CROWFOOT_ONE_MANY:
        canvas.polyline([grid[4][1], grid[4][5]], this.getSeed());
        canvas.polyline([grid[0][1], grid[4][3], grid[0][5]], this.getSeed());
        return grid[0][3];
      case LineEndType.CROWFOOT_ZERO_ONE:
        canvas.polyline([grid[2][1], grid[2][5]], this.getSeed());
        canvas.polyline([grid[0][3], grid[4][3]], this.getSeed());
        canvas.strokeEllipse(
          grid[6][3][0] - gap * 2,
          grid[6][3][1] - gap * 2,
          grid[6][3][0] + gap * 2,
          grid[6][3][1] + gap * 2,
          this.getSeed()
        );
        return grid[8][3];
      case LineEndType.CROWFOOT_ZERO_MANY:
        canvas.polyline([grid[0][1], grid[4][3], grid[0][5]], this.getSeed());
        canvas.polyline([grid[0][3], grid[4][3]], this.getSeed());
        canvas.strokeEllipse(
          grid[6][3][0] - gap * 2,
          grid[6][3][1] - gap * 2,
          grid[6][3][0] + gap * 2,
          grid[6][3][1] + gap * 2,
          this.getSeed()
        );
        return grid[8][3];
      case LineEndType.CROSS:
        canvas.polyline([grid[1][2], grid[3][4]], this.getSeed());
        canvas.polyline([grid[3][2], grid[1][4]], this.getSeed());
        return grid[0][3];
      case LineEndType.DOT:
        canvas.ellipse(
          grid[1][3][0] - gap,
          grid[1][3][1] - gap,
          grid[1][3][0] + gap,
          grid[1][3][1] + gap,
          this.getSeed()
        );
        return grid[0][3];
      case LineEndType.BAR:
        canvas.polyline([grid[0][1], grid[0][5]], this.getSeed());
        return grid[0][3];
      case LineEndType.SQUARE:
        canvas.strokeRect(
          grid[2][3][0] - gap * 2,
          grid[2][3][1] - gap * 2,
          grid[2][3][0] + gap * 2,
          grid[2][3][1] + gap * 2,
          this.getSeed()
        );
        return grid[4][3];
      default:
        return grid[0][3];
    }
  }

  /**
   * Return default outline
   */
  renderOutlineDefault(canvas: MemoizationCanvas): number[][] {
    switch (this.lineType) {
      case LineType.CURVE:
        return this.path.length > 2
          ? geometry.curvePathPoints(this.path)
          : geometry.pathCopy(this.path);
    }
    return geometry.pathCopy(this.path);
  }

  /**
   * Render default viewport
   */
  renderViewportDefault(canvas: MemoizationCanvas): number[][] {
    const outlineGCS = this.getOutline().map((p) =>
      this.localCoordTransform(canvas.canvas, p, true)
    );
    const arrowHeadSize = 12;
    return geometry.expandRect(
      geometry.boundingRect(outlineGCS),
      Math.max(this.strokeWidth / 2, arrowHeadSize)
    );
  }
}

/**
 * Connector
 */
export class Connector extends Line {
  head: Shape | null;
  tail: Shape | null;

  /**
   * Head's anchor position
   */
  headAnchor: number[];

  /**
   * Tail's anchor position
   */
  tailAnchor: number[];

  /**
   * Marginal space to head
   */
  headMargin: number;

  /**
   * Marginal space to tail
   */
  tailMargin: number;

  constructor() {
    super();
    this.type = "Connector";
    this.head = null;
    this.tail = null;
    this.headAnchor = [0.5, 0.5];
    this.tailAnchor = [0.5, 0.5];
    this.headMargin = 0;
    this.tailMargin = 0;
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.head = this.head ? this.head.id : null;
    json.tail = this.tail ? this.tail.id : null;
    json.headAnchor = structuredClone(this.headAnchor);
    json.tailAnchor = structuredClone(this.tailAnchor);
    json.headMargin = this.headMargin;
    json.tailMargin = this.tailMargin;
    if (keepRefs) {
      json.head = this.head;
      json.tail = this.tail;
    }
    return json;
  }

  fromJSON(json: any) {
    super.fromJSON(json);
    this.head = json.head ?? this.head;
    this.tail = json.tail ?? this.tail;
    this.headAnchor = json.headAnchor ?? this.headAnchor;
    this.tailAnchor = json.tailAnchor ?? this.tailAnchor;
    this.headMargin = json.headMargin ?? this.headMargin;
    this.tailMargin = json.tailMargin ?? this.tailMargin;
  }

  resolveRefs(idMap: Record<string, Shape>, nullIfNotFound: boolean = false) {
    super.resolveRefs(idMap, nullIfNotFound);
    if (typeof this.tail === "string") {
      if (idMap[this.tail]) {
        this.tail = idMap[this.tail];
      } else if (nullIfNotFound) {
        this.tail = null;
      }
    }
    if (typeof this.head === "string") {
      if (idMap[this.head]) {
        this.head = idMap[this.head];
      } else if (nullIfNotFound) {
        this.head = null;
      }
    }
  }

  /**
   * Return a bounding rect.
   */
  getBoundingRect(includeAnchorPoints: boolean = false): number[][] {
    const rect = [
      [this.left, this.top],
      [this.right, this.bottom],
    ];
    if (includeAnchorPoints) {
      const hp = this.getHeadAnchorPoint();
      const tp = this.getTailAnchorPoint();
      return geometry.unionRect(rect, geometry.normalizeRect([hp, tp]));
    }
    return rect;
  }

  /**
   * Return head anchor point
   */
  getHeadAnchorPoint(): number[] {
    if (this.head instanceof Path && !this.head.isClosed()) {
      const pathGCS = this.head.path.map((p) =>
        this.head!.localCoordTransform(null as any, p, true)
      );
      return geometry.getPointOnPath(pathGCS, this.headAnchor[0]);
    } else if (this.head instanceof Shape) {
      const box = this.head.getBoundingRect();
      const w = geometry.width(box);
      const h = geometry.height(box);
      return [
        box[0][0] + w * this.headAnchor[0],
        box[0][1] + h * this.headAnchor[1],
      ];
    }
    return this.path[this.path.length - 1];
  }

  /**
   * Return tail anchor point
   */
  getTailAnchorPoint(): number[] {
    if (this.tail instanceof Path && !this.tail.isClosed()) {
      const pathGCS = this.tail.path.map((p) =>
        this.tail!.localCoordTransform(null as any, p, true)
      );
      return geometry.getPointOnPath(pathGCS, this.tailAnchor[0]);
    } else if (this.tail instanceof Shape) {
      const box = this.tail.getBoundingRect();
      const w = geometry.width(box);
      const h = geometry.height(box);
      return [
        box[0][0] + w * this.tailAnchor[0],
        box[0][1] + h * this.tailAnchor[1],
      ];
    }
    return this.path[0];
  }

  /**
   * Return head's outline
   */
  getHeadOutline() {
    return this.head?.getOutline() ?? null;
  }

  /**
   * Return head's outline
   */
  getTailOutline() {
    return this.tail?.getOutline() ?? null;
  }
}

/**
 * Freehand
 */
export class Freehand extends Path {
  /**
   * Thinning
   */
  thinning: number;

  /**
   * Taper at the start of the path. The value must be between 0 and 1.
   */
  tailTaper: number;

  /**
   * Taper at the end of the path. The value must be between 0 and 1.
   */
  headTaper: number;

  constructor() {
    super();
    this.type = "Freehand";
    this.thinning = 0;
    this.tailTaper = 0;
    this.headTaper = 0;
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.thinning = this.thinning;
    json.tailTaper = this.tailTaper;
    json.headTaper = this.headTaper;
    return json;
  }

  fromJSON(json: any) {
    super.fromJSON(json);
    this.thinning = json.thinning ?? this.thinning;
    this.tailTaper = json.tailTaper ?? this.tailTaper;
    this.headTaper = json.headTaper ?? this.headTaper;
  }

  renderDefault(canvas: MemoizationCanvas): void {
    if (this.isClosed() && this.fillStyle !== FillStyle.NONE) {
      canvas.fillPolygon(this.path, this.getSeed());
    }
    if (this.strokeWidth > 0) {
      canvas.strokeFreehand(
        this.path,
        this.thinning,
        this.tailTaper,
        this.headTaper
      );
    }
  }
}

/**
 * Highlighter
 */
export class Highlighter extends Path {
  constructor() {
    super();
    this.type = "Highlighter";
  }

  renderDefault(canvas: MemoizationCanvas): void {
    if (this.strokeWidth > 0) {
      canvas.strokeFreehand(this.path);
    }
  }
}

/**
 * Frame
 */
export class Frame extends Box {
  constructor() {
    super();
    this.type = "Frame";
    this.name = "Frame";
    this.containable = true;
  }

  /**
   * Pick a shape at specific position (x, y)
   */
  getShapeAt(
    canvas: Canvas,
    point: number[],
    exceptions: Shape[] = []
  ): Shape | null {
    if (this.visible && this.enable && this.containsPoint(canvas, point)) {
      for (let i = this.children.length - 1; i >= 0; i--) {
        const s: Shape = this.children[i] as Shape;
        const r = s.getShapeAt(canvas, point, exceptions);
        if (r && !exceptions.includes(r)) return r;
      }
      return this;
    }
    return null;
  }

  /**
   * Determines whether the given rect overlaps this shape's clipping area.
   * If the shape don't have clipping area, return true.
   * If the shape has clipping area, return true if the rect overlaps the
   * clipping area. (e.g. Frame)
   */
  overlapClippingArea(canvas: Canvas, rect: number[][]): boolean {
    return geometry.overlapRect(rect, this.getBoundingRect());
  }

  /**
   * Determines whether this shape overlaps a given rect
   * In the case of Frame, it returns true only if the rect includes the frame.
   */
  overlapRect(canvas: Canvas, rect: number[][]): boolean {
    return geometry.includeRect(rect, this.getBoundingRect());
  }

  draw(canvas: Canvas, showDOM: boolean = false) {
    if (this.visible) {
      this.drawLink(canvas, showDOM);
      canvas.save();
      this.localTransform(canvas);
      // fill background
      canvas.fillColor = this.fillColor;
      canvas.fillStyle = this.fillStyle;
      canvas.strokeWidth = this.strokeWidth;
      canvas.roughness = this.roughness;
      if (this.fillStyle !== FillStyle.NONE) {
        canvas.fillRoundRect(
          this.left,
          this.top,
          this.right,
          this.bottom,
          this.corners,
          this.getSeed()
        );
      }
      // clip children
      canvas.fillColor = "$transparent";
      canvas.fillStyle = FillStyle.SOLID;
      canvas.roughness = 0;
      canvas.fillRoundRect(
        this.left,
        this.top,
        this.right,
        this.bottom,
        this.corners,
        this.getSeed()
      );
      canvas.context.clip();
      // draw children
      this.children.forEach((s) => (s as Shape).draw(canvas, showDOM));
      canvas.restore();
      // draw rendered
      this._memoCanvas.draw(canvas);
    }
  }

  /**
   * Default render this shape
   */
  renderDefault(canvas: MemoizationCanvas) {
    const tm = canvas.textMetric(this.name);
    const margin = tm.descent * 1.2;
    canvas.fillText(this.left, this.top - margin, this.name);
    if (this.strokeWidth > 0) {
      canvas.strokeRoundRect(
        this.left,
        this.top,
        this.right,
        this.bottom,
        this.corners,
        this.getSeed()
      );
    }
  }
}

/**
 * Embed
 */
export class Embed extends Box {
  src: string;

  /**
   * Iframe DOM element
   */
  private _iframeDOM: HTMLIFrameElement | null;

  constructor() {
    super();
    this.type = "Embed";
    this.src = "https://www.youtube.com/embed/MTdbhePtCco?si=6-6HWSoOtx0qAmM6";
    this._iframeDOM = null;
  }

  finalize(canvas: Canvas): void {
    if (this._iframeDOM) {
      this._iframeDOM.remove();
      this._iframeDOM = null;
    }
    super.finalize(canvas);
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.src = this.src;
    return json;
  }

  fromJSON(json: any) {
    super.fromJSON(json);
    this.src = json.src ?? this.src;
  }

  /**
   * Determines whether this shape contains a point in GCS
   */
  // containsPoint(canvas: Canvas, point: number[]): boolean {
  //   const outline = this.getOutline().map((p) =>
  //     this.localCoordTransform(canvas, p, true)
  //   );
  //   return (
  //     geometry.getNearSegment(
  //       point,
  //       outline,
  //       LINE_SELECTION_THRESHOLD * canvas.px
  //     ) > -1
  //   );
  // }

  drawFrame(canvas: Canvas, showDOM: boolean = false): void {
    if (this.src.trim().length === 0) showDOM = false;
    if (showDOM) {
      // create iframeDOM
      if (!this._iframeDOM) {
        this._iframeDOM = document.createElement("iframe");
        this._iframeDOM.style.position = "absolute";
        this._iframeDOM.style.pointerEvents = "none";
        canvas.element.parentElement?.appendChild(this._iframeDOM);
      }
      // update iframeDOM
      if (this._iframeDOM.parentElement !== canvas.element.parentElement) {
        canvas.element.parentElement?.appendChild(this._iframeDOM);
      }
      if (this._iframeDOM.src !== this.src) {
        this._iframeDOM.src = this.src;
      }
      const rect = this.getRectInDCS(canvas);
      const scale = canvas.scale;
      const left = rect[0][0];
      const top = rect[0][1];
      const width = geometry.width(rect);
      const height = geometry.height(rect);
      this._iframeDOM.style.left = `${left}px`;
      this._iframeDOM.style.top = `${top}px`;
      this._iframeDOM.style.width = `${width}px`;
      this._iframeDOM.style.height = `${height}px`;
      this._iframeDOM.style.transform = `scale(${scale})`;
    } else {
      this.finalize(canvas);
    }
  }

  renderDefault(canvas: MemoizationCanvas, showDOM: boolean = false): void {
    // this.drawLink(canvas, showDOM);
    // this.renderFrame(canvas, showDOM);
    // if (this.fillStyle !== FillStyle.NONE) {
    //   canvas.fillStyle = FillStyle.SOLID;
    //   canvas.fillColor = Color.FOREGROUND;
    //   canvas.alpha = 0.1;
    //   canvas.fillRect(
    //     this.left,
    //     this.top,
    //     this.right,
    //     this.bottom,
    //     this.getSeed()
    //   );
    // }
  }
}

/**
 * Constraint Manager
 */
class ConstraintManager {
  static instance: ConstraintManager;

  constraints: Record<string, ConstraintFn>;
  constraintSchema: Record<string, ZodSchema>;

  constructor() {
    this.constraints = {};
    this.constraintSchema = {};
  }

  /**
   * Define a constraint
   */
  define(id: string, fn: ConstraintFn, schema: ZodSchema) {
    assert(!this.constraints[id], `A constraint of '${id}' already defined.`);
    this.constraints[id] = fn;
    this.constraintSchema[id] = schema;
  }

  /**
   * Get a constraint function by id
   */
  get(id: string): ConstraintFn {
    assert(
      typeof this.constraints[id] === "function",
      `Constraint not found of id '${id}'`
    );
    return this.constraints[id];
  }

  /**
   * Get a constraint schema by id
   */
  getSchema(id: string): ZodSchema | null {
    if (typeof this.constraintSchema[id] === "object") {
      return this.constraintSchema[id];
    } else {
      console.error(`Constraint schema not found of id '${id}'`);
      return null;
    }
  }

  /**
   * Returns all ids
   */
  getIds(): string[] {
    return Object.keys(this.constraints);
  }

  /**
   * Create a constraint object with a given id
   */
  create(id: string) {
    const schema = this.getSchema(id);
    if (schema) {
      const parsed = schema.safeParse({ id, args: {} });
      return { id, ...(parsed.success ? parsed.data : {}) };
    } else {
      console.error(`Unknown constraint id: ${id}`);
      return null;
    }
  }

  /**
   * Returns a singleton constraint manager
   */
  static getInstance(): ConstraintManager {
    if (!ConstraintManager.instance) {
      ConstraintManager.instance = new ConstraintManager();
    }
    return ConstraintManager.instance;
  }
}

export const constraintManager = ConstraintManager.getInstance();

/**
 * Draw the shapes on the canvas element
 * @param shapes An array of shapes
 * @param canvasElement A <canvas> HTML element
 * @param darkMode A boolean value to indicate dark mode
 * @param maxCanvasSize A number to indicate the maximum size of the canvas
 * @param scaleAdjust A number to adjust the scale
 * @param update A boolean value to indicate whether to update the shapes
 * @param showDOM A boolean value to indicate whether to update the DOM
 */
export function drawShapesOnCanvas(
  shapes: Shape[],
  canvasElement: HTMLCanvasElement,
  darkMode: boolean = false,
  pageSize: PageSize = [960, 720],
  maxCanvasSize: number[] = [200, 150],
  maxScale: number = 1,
  scaleAdjust: number = 1,
  update: boolean = false,
  showDOM: boolean = false
) {
  const px = window.devicePixelRatio ?? 1;
  const canvas = new Canvas(canvasElement, px);

  // get view rect including all shapes
  shapes.forEach((s) => s.update(canvas));
  const box = getAllViewport(canvas, shapes);
  const bw = pageSize ? pageSize[0] : geometry.width(box);
  const bh = pageSize ? pageSize[1] : geometry.height(box);

  // get scaled size
  const size = geometry.fitScaleTo(
    [bw, bh],
    [maxCanvasSize[0], maxCanvasSize[1]],
    maxScale
  );
  let w = size[0];
  let h = size[1];
  let scale = size[2] * scaleAdjust;

  // set canvas size
  const cw = w;
  const ch = h;
  const ox = pageSize ? 0 : -box[0][0] + (w / scale - bw) / 2;
  const oy = pageSize ? 0 : -box[0][1] + (h / scale - bh) / 2;
  canvasElement.setAttribute("width", (cw * px).toString());
  canvasElement.setAttribute("height", (ch * px).toString());
  canvasElement.style.width = `${cw}px`;
  canvasElement.style.height = `${ch}px`;

  // draw shape on canvas
  canvas.colorVariables = themeColors[darkMode ? "dark" : "light"];
  canvas.origin = [ox, oy];
  canvas.scale = scale;
  canvas.save();

  // update shapes
  if (update) {
    shapes.forEach((s) => {
      if (s instanceof Shape) s.update(canvas);
    });
  }

  // draw shapes
  if (shapes.every((s) => !(s instanceof Page))) canvas.globalTransform();
  shapes.forEach((shape) => {
    shape.draw(canvas, showDOM);
  });

  canvas.restore();
}

export const shapeInstantiator = new Instantiator({
  Shape: () => new Shape(),
  Doc: () => new Doc(),
  Page: () => new Page(),
  Box: () => new Box(),
  Path: () => new Path(),
  Line: () => new Line(),
  Rectangle: () => new Rectangle(),
  Ellipse: () => new Ellipse(),
  Text: () => new Text(),
  Image: () => new Image(),
  Connector: () => new Connector(),
  Freehand: () => new Freehand(),
  Highlighter: () => new Highlighter(),
  Group: () => new Group(),
  Frame: () => new Frame(),
  Embed: () => new Embed(),
});

export type ShapeProps = Partial<
  Shape &
    Doc &
    Page &
    Box &
    Path &
    Line &
    Rectangle &
    Ellipse &
    Text &
    Image &
    Connector &
    Freehand &
    Highlighter &
    Group &
    Frame &
    Embed
>;
