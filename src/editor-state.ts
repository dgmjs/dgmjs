import { Instantiator } from "./core/instantiator";
import { Shape, Diagram, Box, Line } from "./shapes";
import { Store } from "./core/store";
import { Connector, Ellipse, Rectangle, Text, Image, Group } from "./shapes";
import { Clipboard } from "./core/clipboard";
import { Transform } from "./transform/transform";
import { SelectionManager } from "./selection-manager";

export class EditorState {
  instantiator: Instantiator;
  store: Store;
  transform: Transform;
  clipboard: Clipboard;
  selections: SelectionManager;
  diagram: Diagram | null;

  constructor() {
    this.instantiator = new Instantiator();
    this.store = new Store(this.instantiator);
    this.transform = new Transform(this.store);
    this.clipboard = new Clipboard(this.store, this.transform);
    this.selections = new SelectionManager(this);
    this.instantiator.register("Shape", () => new Shape());
    this.instantiator.register("Diagram", () => new Diagram());
    this.instantiator.register("Box", () => new Box());
    this.instantiator.register("Line", () => new Line());
    this.instantiator.register("Rectangle", () => new Rectangle());
    this.instantiator.register("Ellipse", () => new Ellipse());
    this.instantiator.register("Text", () => new Text());
    this.instantiator.register("Image", () => new Image());
    this.instantiator.register("Connector", () => new Connector());
    this.instantiator.register("Group", () => new Group());
    this.diagram = null;
  }
}
