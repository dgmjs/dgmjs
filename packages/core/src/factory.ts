import { EventEmitter } from "events";
import type { Editor } from "./editor";
import {
  Connector,
  Ellipse,
  Image,
  Line,
  LineType,
  Rectangle,
  RouteType,
  Shape,
  Sizable,
  Text,
} from "./shapes";
import { fileToImageElement } from "./utils/image-utils";
import * as geometry from "./graphics/geometry";
import simplifyPath from "simplify-path";
import { SHAPE_MIN_SIZE } from "./graphics/const";

/**
 * Shape factory
 */
export class ShapeFactory extends EventEmitter {
  editor: Editor;

  constructor(editor: Editor) {
    super();
    this.editor = editor;
  }

  /**
   * Insert a shape into diagram
   */
  insertShape(shape: Shape, parent?: Shape) {
    this.emit("shapeInitialize", shape);
    this.editor.actions.insert(shape, parent);
    this.emit("create", shape);
  }

  /**
   * Create a rectangle
   */
  createRectangle(rect: number[][]): Rectangle {
    const rectangle = new Rectangle();
    rectangle.left = rect[0][0];
    rectangle.top = rect[0][1];
    let w = geometry.width(rect);
    let h = geometry.height(rect);
    if (geometry.distance(rect[0], rect[1]) <= SHAPE_MIN_SIZE) {
      w = 100;
      h = 100;
    }
    rectangle.width = w;
    rectangle.height = h;
    this.insertShape(rectangle);
    return rectangle;
  }

  /**
   * Create an ellipse
   */
  createEllipse(rect: number[][]): Ellipse {
    const ellipse = new Ellipse();
    ellipse.left = rect[0][0];
    ellipse.top = rect[0][1];
    let w = geometry.width(rect);
    let h = geometry.height(rect);
    if (geometry.distance(rect[0], rect[1]) <= SHAPE_MIN_SIZE) {
      w = 100;
      h = 100;
    }
    ellipse.width = w;
    ellipse.height = h;
    this.insertShape(ellipse);
    return ellipse;
  }

  /**
   * Create a text
   */
  createText(rect: number[][], initialText: string = ""): Text {
    const text = new Text();
    text.richText = false;
    text.text = initialText;
    text.constraints.push({
      id: "set-size",
      width: "text",
      height: "text",
    });
    text.strokeColor = "$transparent";
    text.fillColor = "$transparent";
    text.left = rect[0][0];
    text.top = rect[0][1];
    let w = geometry.width(rect);
    let h = geometry.height(rect);
    text.width = w;
    text.height = h;
    this.insertShape(text);
    return text;
  }

  /**
   * Create a text on connector
   */
  createTextOnConnector(
    anchorOn: Connector,
    anchorPosition: number,
    initialText: string = ""
  ): Text {
    const text = new Text();
    text.richText = false;
    text.text = initialText;
    text.strokeColor = "$transparent";
    text.fillColor = "$transparent";
    text.anchored = true;
    text.anchorPosition = anchorPosition;
    text.constraints.push({ id: "anchor-on-parent" });
    text.constraints.push({
      id: "set-size",
      width: "text",
      height: "text",
    });
    this.insertShape(text, anchorOn);
    return text;
  }

  /**
   * Create an image
   */
  async createImage(file: File, rect: number[][]): Promise<Image> {
    const imageElement = await fileToImageElement(file);
    const image = new Image();
    image.imageData = imageElement.src;
    image.imageWidth = imageElement.width;
    image.imageHeight = imageElement.height;
    let w = geometry.width(rect);
    let h = geometry.height(rect);
    if (geometry.distance(rect[0], rect[1]) <= SHAPE_MIN_SIZE) {
      const size = geometry.fitScaledownTo(
        [image.imageWidth, image.imageHeight],
        [400, 400]
      );
      w = size[0];
      h = size[1];
    }
    image.width = w;
    image.height = h;
    image.left = rect[0][0] - w / 2;
    image.top = rect[0][1] - h / 2;
    image.sizable = Sizable.RATIO;
    this.insertShape(image);
    return image;
  }

  /**
   * Create an image at the position
   */
  async createImageAt(
    file: File,
    position: number[],
    size?: number[]
  ): Promise<Image> {
    const imageElement = await fileToImageElement(file);
    const image = new Image();
    image.imageData = imageElement.src;
    image.imageWidth = imageElement.width;
    image.imageHeight = imageElement.height;
    if (!size) {
      size = geometry.fitScaledownTo(
        [image.imageWidth, image.imageHeight],
        [400, 400]
      );
    }
    image.width = size[0];
    image.height = size[1];
    image.left = position[0] - size[0] / 2;
    image.top = position[1] - size[1] / 2;
    this.insertShape(image);
    return image;
  }

  /**
   * create a line (or polygon)
   */
  createLine(points: number[][], closed: boolean = false): Line {
    const line = new Line();
    const path = points;
    if (closed) {
      path[path.length - 1] = geometry.copy(path[0]);
    }
    line.path = path;
    const rect = geometry.boundingRect(line.path);
    line.left = rect[0][0];
    line.top = rect[0][1];
    line.width = geometry.width(rect);
    line.height = geometry.height(rect);
    this.insertShape(line);
    return line;
  }

  /**
   * Create a freehand lines
   */
  createFreehand(points: number[][], closed: boolean = false): Line {
    const freehand = new Line();
    const path = simplifyPath(points, 4);
    if (closed) {
      path[path.length - 1] = geometry.copy(path[0]);
    }
    freehand.path = path;
    freehand.lineType = LineType.CURVE;
    const rect = geometry.boundingRect(freehand.path);
    freehand.left = rect[0][0];
    freehand.top = rect[0][1];
    freehand.width = geometry.width(rect);
    freehand.height = geometry.height(rect);
    freehand.pathEditable = path.length < 3;
    this.insertShape(freehand);
    return freehand;
  }

  /**
   * Create a connector
   */
  createConnector(
    tail: Shape | null,
    tailCP: number,
    head: Shape | null,
    headCP: number,
    points: number[][]
  ): Connector {
    const connector = new Connector();
    connector.lineType = LineType.CURVE;
    connector.routeType = RouteType.OBLIQUE;
    connector.constraints = [{ id: "adjust-route" }];
    connector.tail = tail;
    connector.tailCP = tailCP;
    connector.head = head;
    connector.headCP = headCP;
    connector.path = points;
    const rect = geometry.boundingRect(connector.path);
    connector.left = rect[0][0];
    connector.top = rect[0][1];
    connector.width = geometry.width(rect);
    connector.height = geometry.height(rect);
    this.insertShape(connector);
    return connector;
  }
}
