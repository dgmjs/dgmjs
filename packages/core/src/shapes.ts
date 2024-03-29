/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import { assert } from "./std/assert";
import { Canvas } from "./graphics/graphics";
import {
  CONTROL_POINT_APOTHEM,
  Color,
  DEFAULT_FONT_SIZE,
  LINE_SELECTION_THRESHOLD,
  SYSTEM_FONT,
  SYSTEM_FONT_SIZE,
} from "./graphics/const";
import * as geometry from "./graphics/geometry";
import * as utils from "./graphics/utils";
import { ZodSchema } from "zod";
import {
  convertTextToDoc,
  drawRichText,
  drawPlainText,
} from "./utils/text-utils";
import { Transform } from "./transform/transform";
import { evalScript } from "./mal/mal";
import { Obj } from "./core/obj";
import { Instantiator } from "./core/instantiator";

interface Constraint {
  id: string;
  [key: string]: any; // allow all additional fields
}

interface Property {
  name: string;
  type: "string" | "boolean" | "number" | "enum" | "text";
  options?: string[];
  value: any;
}

interface Script {
  id: string;
  script: string;
}

type ConstraintFn = (
  page: Page,
  shape: Shape,
  canvas: Canvas,
  transform: Transform,
  arg?: any
) => boolean;

const ScriptType = Object.freeze({
  RENDER: "render",
  OUTLINE: "outline",
});

const Movable = Object.freeze({
  NONE: "none",
  HORZ: "horz",
  VERT: "vert",
  FREE: "free",
  PARENT: "parent",
});

const Sizable = Object.freeze({
  NONE: "none",
  HORZ: "horz",
  VERT: "vert",
  FREE: "free",
  RATIO: "ratio",
});

const FillStyle = Object.freeze({
  NONE: "none",
  SOLID: "solid",
  HACHURE: "hachure",
  CROSS_HATCH: "cross-hatch",
});

const LineType = Object.freeze({
  STRAIGHT: "straight",
  CURVE: "curve",
});

const LineEndType = Object.freeze({
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
});

const AlignmentKind = Object.freeze({
  LEFT: "left",
  RIGHT: "right",
  CENTER: "center",
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom",
});

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
class Shape extends Obj {
  name: string;
  description: string;
  proto: boolean;
  tags: string[];
  enable: boolean;
  visible: boolean;
  movable: string;
  sizable: string;
  rotatable: boolean;
  containable: boolean;
  containableFilter: string;
  connectable: boolean;
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: number;
  strokeColor: string;
  strokeWidth: number;
  strokePattern: number[];
  fillColor: string;
  fillStyle: string;
  fontColor: string;
  fontFamily: string;
  fontSize: number;
  fontStyle: string;
  fontWeight: number;
  opacity: number;
  roughness: number;
  constraints: Constraint[];
  properties: Property[];
  scripts: Script[];

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
    this.constraints = [];
    this.properties = [];
    this.scripts = [];
  }

  initialze(canvas: Canvas) {}

  finalize(canvas: Canvas) {}

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
    json.constraints = structuredClone(this.constraints);
    json.properties = structuredClone(this.properties);
    json.scripts = structuredClone(this.scripts);
    return json;
  }

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
    this.constraints = json.constraints ?? this.constraints;
    this.properties = json.properties ?? this.properties;
    this.scripts = json.scripts ?? this.scripts;
  }

  get right(): number {
    return this.left + this.width;
  }

  get bottom(): number {
    return this.top + this.height;
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
   * Return true if this shape is contained by a group (recursively)
   */
  inGroup() {
    return this.findParent((s) => s instanceof Group);
  }

  /**
   * Assign styles to canvas.
   */
  assignStyles(canvas: Canvas) {
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
    canvas.alpha = this.opacity;
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
   * Default render this shape
   */
  renderDefault(canvas: Canvas) {}

  /**
   * Render this shape
   */
  render(canvas: Canvas) {
    if (this.visible) {
      canvas.save();
      this.assignStyles(canvas);
      this.localTransform(canvas);
      const script = this.getScript(ScriptType.RENDER);
      if (script) {
        try {
          evalScript({ canvas: canvas, shape: this }, script);
        } catch (err) {
          console.log("[Script Error]", err);
        }
      } else {
        this.renderDefault(canvas);
      }
      this.children.forEach((s) => (s as Shape).render(canvas));
      canvas.restore();
    }
  }

  /**
   * Returns the center point
   */
  getCenter(): number[] {
    return geometry.center(this.getBoundingRect());
  }

  /**
   * Return default outline
   */
  getOutlineDefault(): number[][] {
    return [];
  }

  /**
   * Return outline polygon.
   */
  getOutline(): number[][] {
    const script = this.getScript(ScriptType.OUTLINE);
    if (script) {
      try {
        return evalScript({ shape: this }, script);
      } catch (err) {
        console.log("[Script Error]", err);
      }
    }
    return this.getOutlineDefault();
  }

  /**
   * Return a bounding rect.
   */
  getBoundingRect(): number[][] {
    return [
      [this.left, this.top],
      [this.right, this.bottom],
    ];
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
   * Return a bounding box in canvas element.
   *
   * [Note] If you want to place DOM elements over the canvas, use this method
   * and don't forget to apply transform scale to the DOM element.
   */
  getRectInDOM(canvas: Canvas): {
    left: number;
    top: number;
    width: number;
    height: number;
  } {
    const rect = this.getBoundingRect().map((p) => {
      let tp = canvas.globalCoordTransform(p);
      return [tp[0] / canvas.ratio, tp[1] / canvas.ratio];
    });
    const scale = canvas.scale;
    let width = geometry.width(rect) * (1 / scale);
    let height = geometry.height(rect) * (1 / scale);
    const left = rect[0][0] - (width * (1 - scale)) / 2;
    const top = rect[0][1] - (height * (1 - scale)) / 2;
    return {
      left,
      top,
      width,
      height,
    };
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
    return geometry.overlapRect(rect, this.getBoundingRect());
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
 * Document
 */
class Document extends Obj {
  version: number;

  constructor() {
    super();
    this.type = "Document";
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
class Page extends Shape {
  constructor() {
    super();
    this.type = "Page";
    this.enable = false; // page cannot be controllable
  }

  /**
   * Render this shape
   */
  render(canvas: Canvas) {
    if (this.visible) {
      canvas.save();
      this.assignStyles(canvas);
      canvas.globalTransform();
      this.children.forEach((s) => (s as Shape).render(canvas));
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
   * Return actual document bounding box in GCS
   */
  getPageBoundingBox(canvas: Canvas): number[][] {
    return this.children.length > 0
      ? this.traverseSequence()
          .filter((s) => s !== this)
          .map((s) =>
            geometry.boundingRect(
              (s as Shape)
                .getOutline()
                .map((p) => (s as Shape).localCoordTransform(canvas, p, true))
            )
          )
          .reduce(geometry.unionRect)
      : [
          [0, 0],
          [0, 0],
        ];
  }

  /**
   * Document do not contain a point
   */
  containsPoint(canvas: Canvas, point: number[]): boolean {
    return false;
  }

  /**
   * Document do not overlap with anything
   */
  overlapRect(canvas: Canvas, rect: number[][]): boolean {
    return false;
  }
}

/**
 * Box shape
 */
class Box extends Shape {
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
   * Rich text or plain text
   */
  richText: boolean;

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
  horzAlign: string;

  /**
   * Text vertical alignment
   */
  vertAlign: string;

  /**
   * Text line height
   */
  lineHeight: number;

  /**
   * Text paragraph spacing
   */
  paragraphSpacing: number;

  /**
   * Indicate render text or not (just for internal use)
   */
  _renderText: boolean;

  constructor() {
    super();
    this.type = "Node";
    // Initialization
    this.containable = false;
    this.padding = [0, 0, 0, 0];
    this.corners = [0, 0, 0, 0];
    this.anchored = false;
    this.anchorAngle = 0;
    this.anchorLength = 0;
    this.anchorPosition = 0.5;
    this.richText = false;
    this.textEditable = true;
    this.text = "";
    this.wordWrap = false;
    this.horzAlign = AlignmentKind.CENTER;
    this.vertAlign = AlignmentKind.MIDDLE;
    this.lineHeight = 1.2;
    this.paragraphSpacing = 0;
    this._renderText = true;
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.padding = structuredClone(this.padding);
    json.corners = structuredClone(this.corners);
    json.anchored = this.anchored;
    json.anchorAngle = this.anchorAngle;
    json.anchorLength = this.anchorLength;
    json.anchorPosition = this.anchorPosition;
    json.richText = this.richText;
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
    this.richText = json.richText ?? typeof json.text !== "string"; // for backward compatibility
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

  renderText(canvas: Canvas): void {
    if (this._renderText) {
      if (this.richText) {
        drawRichText(canvas, this);
      } else {
        drawPlainText(canvas, this);
      }
    }
  }

  renderDefault(canvas: Canvas): void {
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
    canvas.strokeRoundRect(
      this.left,
      this.top,
      this.right,
      this.bottom,
      this.corners,
      this.getSeed()
    );
    this.renderText(canvas);
  }

  /**
   * Visit all document nodes and returns rebuilt document object
   */
  visitNodes(
    startNode: { type: string; content: any[] },
    visitor: (node: any) => void
  ) {
    if (typeof startNode !== "object") startNode = convertTextToDoc(startNode);
    visitor(startNode);
    if (Array.isArray(startNode.content)) {
      startNode.content.forEach((node) => this.visitNodes(node, visitor));
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
    this.visitNodes(this.text, (node) => {
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
  getOutlineDefault(): number[][] {
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
    if (target instanceof Line) {
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
 * Line shape
 */
class Line extends Shape {
  pathEditable: boolean;
  path: number[][];
  lineType: string;
  headEndType: string;
  tailEndType: string;

  constructor() {
    super();
    this.type = "Line";
    this.pathEditable = true;
    this.path = [];
    this.lineType = LineType.STRAIGHT;
    this.headEndType = LineEndType.FLAT;
    this.tailEndType = LineEndType.FLAT;
    this.containable = false;
  }

  toJSON(recursive: boolean = false, keepRefs: boolean = false) {
    const json = super.toJSON(recursive, keepRefs);
    json.pathEditable = this.pathEditable;
    json.path = structuredClone(this.path);
    json.lineType = this.lineType;
    json.headEndType = this.headEndType;
    json.tailEndType = this.tailEndType;
    return json;
  }

  fromJSON(json: any) {
    super.fromJSON(json);
    this.pathEditable = json.pathEditable ?? this.pathEditable;
    this.path = json.path ?? this.path;
    this.lineType = json.lineType ?? this.lineType;
    this.headEndType = json.headEndType ?? this.headEndType;
    this.tailEndType = json.tailEndType ?? this.tailEndType;
  }

  /**
   * Return is the path is closed
   */
  isClosed(): boolean {
    return geometry.isClosed(this.path);
  }

  /**
   * Draw this shape
   */
  renderDefault(canvas: Canvas): void {
    let path = geometry.pathCopy(this.path);
    if (path.length >= 2) {
      canvas.storeState();
      const hp = this.drawLineEnd(canvas, this.headEndType, true);
      const tp = this.drawLineEnd(canvas, this.tailEndType, false);
      canvas.restoreState();
      path[0] = tp;
      path[path.length - 1] = hp;
    }
    if (this.isClosed() && this.fillStyle !== FillStyle.NONE) {
      switch (this.lineType) {
        case LineType.STRAIGHT:
          canvas.polygon(path, this.getSeed());
          break;
        case LineType.CURVE:
          canvas.curve(path, this.getSeed());
          break;
      }
    } else {
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
  drawLineEnd(canvas: Canvas, edgeEndType: string, isHead: boolean): number[] {
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
        // canvas.pixel(p, Color.RED, 0.5);
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
  getOutlineDefault(): number[][] {
    switch (this.lineType) {
      case LineType.CURVE:
        return this.path.length > 2
          ? geometry.curvePathPoints(this.path)
          : geometry.pathCopy(this.path);
    }
    return geometry.pathCopy(this.path);
  }
}

/**
 * Rectangle
 */
class Rectangle extends Box {
  constructor() {
    super();
    this.type = "Rectangle";
  }
}

/**
 * Ellipse
 */
class Ellipse extends Box {
  constructor() {
    super();
    this.type = "Ellipse";
  }

  renderDefault(canvas: Canvas): void {
    if (this.fillStyle !== FillStyle.NONE) {
      canvas.fillEllipse(
        this.left,
        this.top,
        this.right,
        this.bottom,
        this.getSeed()
      );
    }
    canvas.strokeEllipse(
      this.left,
      this.top,
      this.right,
      this.bottom,
      this.getSeed()
    );
    this.renderText(canvas);
  }

  /**
   * Return outline polygon
   */
  getOutlineDefault(): number[][] {
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
class Text extends Box {
  constructor() {
    super();
    this.type = "Text";
    this.fillColor = "$transparent";
    this.strokeColor = "$transparent";
    this.horzAlign = AlignmentKind.LEFT;
    this.vertAlign = AlignmentKind.TOP;
  }

  renderDefault(canvas: Canvas): void {
    this.renderText(canvas);
  }
}

/**
 * Image
 */
class Image extends Box {
  imageData: string;
  imageWidth: number;
  imageHeight: number;
  _image: HTMLImageElement | null;

  constructor() {
    super();
    this.type = "Image";
    this.imageData = "";
    this.imageWidth = 0;
    this.imageHeight = 0;
    this._image = null;
    this.sizable = Sizable.RATIO;
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

  renderDefault(canvas: Canvas): void {
    if (!this._image) {
      this._image = new globalThis.Image();
      this._image.src = this.imageData;
    }
    if (this._image && this._image.complete) {
      canvas.save();
      canvas.fillColor = Color.TRANSPARENT;
      canvas.fillStyle = FillStyle.SOLID;
      canvas.strokeColor = Color.TRANSPARENT;
      canvas.strokeWidth = 1;
      canvas.strokePattern = [];
      canvas.alpha = 1;
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
      canvas.drawImage(
        this._image,
        this.left,
        this.top,
        this.width,
        this.height
      );
      canvas.restore();
    }
  }
}

/**
 * Group
 */
class Group extends Box {
  constructor() {
    super();
    this.type = "Group";
  }

  renderDefault(canvas: Canvas): void {}

  /**
   * Pick a shape at specific position (x, y)
   */
  getShapeAt(canvas: Canvas, point: number[]): Shape | null {
    if (this.visible && this.enable && this.containsPoint(canvas, point))
      return this;
    return null;
  }
}

/**
 * Connector
 */
class Connector extends Line {
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

  resolveRefs(idMap: Record<string, Shape>) {
    super.resolveRefs(idMap);
    if (typeof this.tail === "string" && idMap[this.tail]) {
      this.tail = idMap[this.tail];
    }
    if (typeof this.head === "string" && idMap[this.head]) {
      this.head = idMap[this.head];
    }
  }

  /**
   * Return head anchor point
   */
  getHeadAnchorPoint(): number[] {
    if (this.head instanceof Line && !this.head.isClosed()) {
      return geometry.getPointOnPath(this.head.path, this.headAnchor[0]);
    } else if (this.head) {
      const box = this.head?.getBoundingRect();
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
    if (this.tail instanceof Line && !this.tail.isClosed()) {
      return geometry.getPointOnPath(this.tail.path, this.tailAnchor[0]);
    } else if (this.tail) {
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
 * Frame
 */
class Frame extends Box {
  constructor() {
    super();
    this.type = "Frame";
    this.name = "Frame";
    this.containable = true;
  }

  render(canvas: Canvas) {
    if (this.visible) {
      canvas.save();
      this.assignStyles(canvas);
      this.localTransform(canvas);
      // const script = this.getScript(ScriptType.RENDER);
      // if (script) {
      //   try {
      //     evalScript({ canvas: canvas, shape: this }, script);
      //   } catch (err) {
      //     console.log("[Script Error]", err);
      //   }
      // } else {
      //   this.renderDefault(canvas);
      // }
      canvas.storeState();
      canvas.fillColor = Color.BACKGROUND;
      canvas.fillStyle = FillStyle.SOLID;
      canvas.strokeColor = Color.FOREGROUND;
      canvas.strokePattern = [];
      canvas.strokeWidth = 1 / canvas.scale;
      canvas.fontColor = Color.FOREGROUND;
      const fontSize = SYSTEM_FONT_SIZE / canvas.scale;
      canvas.font = utils.toCssFont("normal", 400, fontSize, SYSTEM_FONT);
      canvas.alpha = 1;
      canvas.roughness = 0;

      canvas.fillText(this.left, this.top - fontSize / 2, this.name);
      canvas.roundRect(
        this.left,
        this.top,
        this.right,
        this.bottom,
        this.corners,
        this.getSeed()
      );
      canvas.context.clip();
      canvas.restoreState();
      this.children.forEach((s) => (s as Shape).render(canvas));
      canvas.restore();
    }
  }
}

/**
 * Embed
 */
class Embed extends Box {
  iframe: HTMLIFrameElement | null;

  constructor() {
    super();
    this.type = "Embed";
    this.iframe = null;
  }

  initialze(canvas: Canvas): void {
    if (!this.iframe) {
      this.iframe = document.createElement("iframe");
      this.iframe.style.position = "absolute";
      this.iframe.style.pointerEvents = "none";
      this.iframe.src =
        "https://www.youtube.com/embed/MTdbhePtCco?si=6-6HWSoOtx0qAmM6"; // "https://dgm.sh/home";
      canvas.element.parentElement?.appendChild(this.iframe);
    }
  }

  finalize(canvas: Canvas): void {
    if (this.iframe) {
      this.iframe.remove();
      this.iframe = null;
    }
  }

  renderDefault(canvas: Canvas): void {
    const rect = this.getRectInDOM(canvas);
    const scale = canvas.scale;
    if (this.iframe) {
      this.iframe.style.left = `${rect.left}px`;
      this.iframe.style.top = `${rect.top}px`;
      this.iframe.style.width = `${rect.width}px`;
      this.iframe.style.height = `${rect.height}px`;
      this.iframe.style.transform = `scale(${scale})`;
    }
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

const constraintManager = ConstraintManager.getInstance();

const shapeInstantiator = new Instantiator({
  Shape: () => new Shape(),
  Document: () => new Document(),
  Page: () => new Page(),
  Box: () => new Box(),
  Line: () => new Line(),
  Rectangle: () => new Rectangle(),
  Ellipse: () => new Ellipse(),
  Text: () => new Text(),
  Image: () => new Image(),
  Connector: () => new Connector(),
  Group: () => new Group(),
  Frame: () => new Frame(),
  Embed: () => new Embed(),
});

interface ShapeValues {
  name?: string;
  description?: string;
  proto?: boolean;
  enable?: boolean;
  visible?: boolean;
  movable?: string;
  sizable?: string;
  rotatable?: boolean;
  containable?: boolean;
  containableFilter?: string;
  connectable?: boolean;
  anchored?: boolean;
  constraints?: Constraint[];
  properties?: Property[];
  scripts?: Script[];
  manipulator?: string;
  tags?: string[];
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  rotate?: number;
  fillColor?: string;
  fillStyle?: string;
  strokeColor?: string;
  strokeWidth?: number;
  strokePattern?: number[];
  fontColor?: string;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: number;
  opacity?: number;
  roughness?: number;
  lineType?: string;
  pathEditable?: boolean;
  headEndType?: string;
  tailEndType?: string;
  headMargin?: number;
  tailMargin?: number;
  padding?: number[];
  corners?: number[];
  richText?: boolean;
  textEditable?: boolean;
  text?: any;
  wordWrap?: boolean;
  horzAlign?: string;
  vertAlign?: string;
  lineHeight?: number;
  paragraphSpacing?: number;
}

export {
  type Constraint,
  type Property,
  type Script,
  type ConstraintFn,
  ScriptType,
  Movable,
  Sizable,
  FillStyle,
  LineType,
  LineEndType,
  AlignmentKind,
  Shape,
  Document,
  Page,
  Box,
  Line,
  Rectangle,
  Ellipse,
  Text,
  Image,
  Group,
  Connector,
  Frame,
  Embed,
  constraintManager,
  shapeInstantiator,
  type ShapeValues,
};
