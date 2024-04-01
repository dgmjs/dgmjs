import type { Editor } from "./editor";
import {
  AlignmentKind,
  Connector,
  Ellipse,
  Embed,
  Frame,
  Image,
  Line,
  LineType,
  Rectangle,
  Shape,
  Sizable,
  Text,
} from "./shapes";
import { fileToImageElement } from "./utils/image-utils";
import * as geometry from "./graphics/geometry";
import simplifyPath from "simplify-path";
import { SHAPE_MIN_SIZE } from "./graphics/const";
import { TypedEvent } from "./std/typed-event";

/**
 * Shape factory
 */
export class ShapeFactory {
  editor: Editor;
  onCreate: TypedEvent<Shape>;
  onShapeInitialize: TypedEvent<Shape>;

  constructor(editor: Editor) {
    this.editor = editor;
    this.onCreate = new TypedEvent();
    this.onShapeInitialize = new TypedEvent();
  }

  // TODO: Consider to move to editor.on("create", shape)
  triggerCreate(shape: Shape) {
    this.onCreate.emit(shape);
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
    rectangle.width = w;
    rectangle.height = h;
    rectangle.horzAlign = AlignmentKind.CENTER;
    rectangle.vertAlign = AlignmentKind.MIDDLE;
    this.onShapeInitialize.emit(rectangle);
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
    ellipse.width = w;
    ellipse.height = h;
    ellipse.horzAlign = AlignmentKind.CENTER;
    ellipse.vertAlign = AlignmentKind.MIDDLE;
    this.onShapeInitialize.emit(ellipse);
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
    text.horzAlign = AlignmentKind.LEFT;
    text.vertAlign = AlignmentKind.TOP;
    this.onShapeInitialize.emit(text);
    return text;
  }

  /**
   * Create an anchored text
   */
  createAnchoredText(anchorPosition: number, initialText: string = ""): Text {
    const text = new Text();
    text.richText = false;
    text.text = initialText;
    text.strokeColor = "$transparent";
    text.fillColor = "$transparent";
    text.horzAlign = AlignmentKind.LEFT;
    text.vertAlign = AlignmentKind.TOP;
    text.anchored = true;
    text.anchorPosition = anchorPosition;
    text.constraints.push({ id: "anchor-on-parent" });
    text.constraints.push({
      id: "set-size",
      width: "text",
      height: "text",
    });
    this.onShapeInitialize.emit(text);
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
    // if (geometry.distance(rect[0], rect[1]) <= SHAPE_MIN_SIZE) {
    //   const size = geometry.fitScaledownTo(
    //     [image.imageWidth, image.imageHeight],
    //     [400, 400]
    //   );
    //   w = size[0];
    //   h = size[1];
    // }
    image.width = w;
    image.height = h;
    image.left = rect[0][0] - w / 2;
    image.top = rect[0][1] - h / 2;
    image.sizable = Sizable.RATIO;
    this.onShapeInitialize.emit(image);
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
    image.sizable = Sizable.RATIO;
    this.onShapeInitialize.emit(image);
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
    this.onShapeInitialize.emit(line);
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
    freehand.pathEditable = false;
    this.onShapeInitialize.emit(freehand);
    return freehand;
  }

  /**
   * Create a connector
   */
  createConnector(
    tail: Shape | null,
    tailAnchor: number[],
    head: Shape | null,
    headAnchor: number[],
    points: number[][]
  ): Connector {
    const connector = new Connector();
    connector.lineType = LineType.CURVE;
    connector.constraints = [{ id: "adjust-route" }];
    connector.tail = tail;
    connector.tailAnchor = tailAnchor;
    connector.head = head;
    connector.headAnchor = headAnchor;
    connector.path = points;
    const rect = geometry.boundingRect(connector.path);
    connector.left = rect[0][0];
    connector.top = rect[0][1];
    connector.width = geometry.width(rect);
    connector.height = geometry.height(rect);
    this.onShapeInitialize.emit(connector);
    return connector;
  }

  createFrame(rect: number[][]): Frame {
    const frame = new Frame();
    frame.left = rect[0][0];
    frame.top = rect[0][1];
    let w = geometry.width(rect);
    let h = geometry.height(rect);
    if (geometry.distance(rect[0], rect[1]) <= SHAPE_MIN_SIZE) {
      w = 100;
      h = 100;
    }
    frame.width = w;
    frame.height = h;
    frame.horzAlign = AlignmentKind.CENTER;
    frame.vertAlign = AlignmentKind.MIDDLE;
    this.onShapeInitialize.emit(frame);
    return frame;
  }

  createEmbed(rect: number[][]): Embed {
    const embed = new Embed();
    embed.left = rect[0][0];
    embed.top = rect[0][1];
    let w = geometry.width(rect);
    let h = geometry.height(rect);
    if (geometry.distance(rect[0], rect[1]) <= SHAPE_MIN_SIZE) {
      w = 100;
      h = 100;
    }
    embed.width = w;
    embed.height = h;
    embed.horzAlign = AlignmentKind.CENTER;
    embed.vertAlign = AlignmentKind.MIDDLE;
    this.onShapeInitialize.emit(embed);
    return embed;
  }
}
