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

import { EventEmitter } from "events";
import { Canvas, CanvasPointerEvent } from "./graphics/graphics";
import { Connector, Diagram, Shape, Text, Box } from "./shapes";
import {
  Cursor,
  Color,
  Mouse,
  CONNECTION_POINT_APOTHEM,
} from "./graphics/const";
import { assert } from "./std/assert";
import * as geometry from "./graphics/geometry";
import * as utils from "./graphics/utils";
import { ShapeFactory } from "./factory";
import type { Obj } from "./core/obj";
import { colors } from "./colors";
import { Actions } from "./actions";
import { KeyMap, KeymapManager } from "./keymap-manager";
import { AutoScroller } from "./utils/auto-scroller";
import { createPointerEvent, createTouchEvent } from "./utils/canvas-utils";
import { Instantiator, InstantiatorFun } from "./core/instantiator";
import { Store } from "./core/store";
import { Transform } from "./transform/transform";
import { SelectionManager } from "./selection-manager";
import { Clipboard } from "./core/clipboard";

export interface EditorOptions {
  instantiators?: Record<string, InstantiatorFun>;
  handlers?: Handler[];
  keymap?: KeyMap;
  allowAutoScroll?: boolean;
  allowCreateTextOnCanvas?: boolean;
  allowCreateTextOnConnector?: boolean;
  onReady?: (editor: Editor) => void;
}

/**
 * The diagram editor
 */
class Editor extends EventEmitter {
  options: EditorOptions;
  platform: string;

  instantiator: Instantiator;
  store: Store;
  transform: Transform;
  clipboard: Clipboard;
  selection: SelectionManager;
  diagram: Diagram | null;

  factory: ShapeFactory;
  actions: Actions;
  keymap: KeymapManager;
  autoScroller: AutoScroller;
  parent: HTMLElement;
  canvasElement: HTMLCanvasElement;
  canvas: Canvas;
  backgroundColor: string;
  darkMode: boolean;
  gridSize: number[];
  showGrid: boolean;
  snapToGrid: boolean;
  snapToObject: boolean;
  handlers: Record<string, Handler>;
  activeHandlerId: string | null;
  activeHandler: Handler | null;
  defaultHandlerId: string | null;
  leftButtonDown: boolean;
  downX: number;
  downY: number;
  isPinching: boolean;
  initialScale: number;
  initialDistance: number;
  touchPoint: number[];

  /**
   * constructor
   */
  constructor(editorHolder: HTMLElement, options: EditorOptions) {
    super();
    this.options = {
      allowCreateTextOnCanvas: true,
      allowCreateTextOnConnector: true,
      ...options,
    };
    this.instantiator = new Instantiator(options.instantiators);
    this.store = new Store(this.instantiator, {
      objInitializer: (o) => {
        if (o instanceof Shape) o.initialze(this.canvas);
      },
      objFinalizer: (o) => {
        if (o instanceof Shape) o.finalize(this.canvas);
      },
    });
    this.transform = new Transform(this.store);
    this.clipboard = new Clipboard(this.store, this.transform);
    this.selection = new SelectionManager(this);
    this.factory = new ShapeFactory(this);
    this.actions = new Actions(this);
    this.keymap = new KeymapManager(this);
    this.diagram = null;

    this.platform = this.detectPlatform();
    this.parent = editorHolder;
    this.parent.style.overflow = "hidden";
    this.autoScroller = new AutoScroller(this);
    this.autoScroller.setEnabled(this.options.allowAutoScroll ?? true);
    // initialize properties
    this.canvasElement = null as any;
    this.canvas = null as any;
    this.backgroundColor = Color.CANVAS;
    this.darkMode = false;
    this.gridSize = [8, 8];
    this.showGrid = false;
    this.snapToGrid = false;
    this.snapToObject = false;
    this.handlers = {};
    this.addHandlers(this.options.handlers ?? []);
    this.activeHandlerId = null;
    this.activeHandler = null;
    this.defaultHandlerId = null;
    this.leftButtonDown = false; // To check mouse left button down in mouse move event.
    this.downX = 0;
    this.downY = 0;
    this.isPinching = false;
    this.initialScale = 1;
    this.initialDistance = 0;
    this.touchPoint = [-1, -1];
    this.initializeState();
    this.initializeCanvas();
    this.initializeKeymap();
    if (this.options.onReady) this.options.onReady(this);
  }

  detectPlatform(): string {
    const p = navigator.platform.toLowerCase();
    if (p.indexOf("mac") > -1) {
      return "darwin";
    } else if (p.indexOf("win") > -1) {
      return "win32";
    } else if (p.indexOf("linux") > -1) {
      return "linux";
    }
    return "unknown";
  }

  initializeState() {
    const diagram = new Diagram();
    this.store.setRoot(diagram);
    this.diagram = diagram;
    this.transform.on("transaction", () => this.repaint());
    this.selection.on("change", () => this.repaint());
    this.factory.on("create", (shape: Shape) => {
      this.selection.select([shape]);
    });
  }

  initializeCanvas() {
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.tabIndex = 0; // enable focus
    this.canvasElement.style.touchAction = "none"; // prevent pointer cancel event in mobile
    this.canvasElement.style.outline = "none"; // remove focus outline
    this.parent.appendChild(this.canvasElement);
    // const context = this.canvasElement.getContext("2d");
    // if (!context) throw new Error("Failed to create context2d");
    const pixelRatio = window.devicePixelRatio ?? 1;
    this.canvas = new Canvas(this.canvasElement, pixelRatio);
    this.canvas.colorVariables = { ...colors["light"] };

    // pointer down handler
    this.canvasElement.addEventListener("pointerdown", (e) => {
      this.focus();
      if (e.button === Mouse.BUTTON1) this.leftButtonDown = true;
      const event = createPointerEvent(this.canvasElement, this.canvas, e);
      this.autoScroller.pointerDown(event);
      if (event.ModDown) {
        // viewpoint move
        // TODO: viewpoint move need to be moved to Handler (SelectHandler or CreateHandler)
        if (this.leftButtonDown) {
          this.setCursor(Cursor.MOVE);
          this.downX = e.offsetX;
          this.downY = e.offsetY;
        }
      } else if (!this.isPinching && this.activeHandler) {
        // 모바일에서는 pointerMove 발생하지 않으므로, pointerMove 한번 호출해준다.
        this.activeHandler.pointerMove(this, event);
        this.activeHandler.pointerDown(this, event);
      }
    });

    // pointer move
    this.canvasElement.addEventListener("pointermove", (e) => {
      const event = createPointerEvent(this.canvasElement, this.canvas, e);
      event.leftButtonDown = this.leftButtonDown;
      this.autoScroller.pointerMove(event);
      if (event.ModDown) {
        // viewpoint move
        if (this.leftButtonDown) {
          let dx = (e.offsetX - this.downX) / this.getScale();
          let dy = (e.offsetY - this.downY) / this.getScale();
          this.moveOrigin(dx, dy);
          this.downX = e.offsetX;
          this.downY = e.offsetY;
        }
      } else if (!this.isPinching && this.activeHandler) {
        this.activeHandler.pointerMove(this, event);
      }
    });

    // pointer up  handler
    this.canvasElement.addEventListener("pointerup", (e) => {
      if (e.button === Mouse.BUTTON1) this.leftButtonDown = false;
      const event = createPointerEvent(this.canvasElement, this.canvas, e);
      this.autoScroller.pointerUp(event);
      if (event.ModDown) {
        // viewpoint move
        this.setCursor(Cursor.DEFAULT);
        this.downX = 0;
        this.downY = 0;
      } else if (!this.isPinching && this.activeHandler) {
        this.activeHandler.pointerUp(this, event);
      }
    });

    this.canvasElement.addEventListener("pointercancel", (e) => {});

    // touch start handler
    this.canvasElement.addEventListener("touchstart", (e) => {
      this.focus();
      if (e.touches.length === 2) {
        const event = createTouchEvent(this.canvasElement, this.canvas, e);
        this.isPinching = true;
        this.initialScale = this.canvas.scale;
        this.initialDistance = event.touchDistance;
        this.touchPoint = [event.x, event.y];
      }
    });

    // touch move handler
    this.canvasElement.addEventListener("touchmove", (e) => {
      if (this.isPinching && e.touches.length === 2) {
        const event = createTouchEvent(this.canvasElement, this.canvas, e);
        const currentDistance = event.touchDistance;
        const scale = currentDistance / this.initialDistance;
        const p1 = this.canvas.globalCoordTransformRev(this.touchPoint);
        this.setScale(this.initialScale * scale);
        const p2 = this.canvas.globalCoordTransformRev([event.x, event.y]);
        this.moveOrigin(p2[0] - p1[0], p2[1] - p1[1]);
        this.touchPoint = [event.x, event.y];
      }
    });

    // touch end handler
    this.canvasElement.addEventListener("touchend", (e) => {
      e.stopImmediatePropagation();
      this.isPinching = false;
      this.initialScale = 1;
      this.initialDistance = 0;
      this.touchPoint = [-1, -1];
    });

    // mouse double click
    this.canvasElement.addEventListener("dblclick", (e) => {
      this.focus();
      this.selection.deselectAll();
      const event = createPointerEvent(this.canvasElement, this.canvas, e);
      const p = this.canvas.globalCoordTransformRev([event.x, event.y]);
      const x = p[0];
      const y = p[1];
      if (this.diagram) {
        // allows double click on a disable shape (e.g. a text inside another shape)
        const pred = (s: Obj) =>
          (s as Shape).visible && (s as Shape).containsPoint(this.canvas, p);
        const shape: Shape | null = this.diagram.findDepthFirst(
          pred
        ) as Shape | null;
        // create a text on canvas
        if (this.options.allowCreateTextOnCanvas && !shape) {
          const textShape = this.factory.createText([
            [x, y],
            [x, y],
          ]);
        }
        // create a text on connector
        if (
          this.options.allowCreateTextOnConnector &&
          shape instanceof Connector
        ) {
          const outline = shape.getOutline();
          const nearest = geometry.findNearestOnPath(
            [x, y],
            outline,
            CONNECTION_POINT_APOTHEM * 2
          );
          const position = geometry.getPositionOnPath(outline, nearest);
          const textShape = this.factory.createTextOnConnector(shape, position);
        }
        // trigger double click event
        this.triggerDblClick(shape, [x, y]);
      }
    });

    // mouse wheel event
    this.canvasElement.addEventListener("wheel", (e) => {
      const event = createPointerEvent(this.canvasElement, this.canvas, e);
      const dx = -e.deltaX;
      const dy = -e.deltaY;
      const h = this.getSize()[1] / (this.canvas.px * 4);
      if (e.ctrlKey || e.metaKey) {
        // zoom with wheel
        e.preventDefault();
        if (dy < 0) {
          const p1 = this.canvas.globalCoordTransformRev([event.x, event.y]);
          this.setScale(this.canvas.scale * (1 + dy / h));
          const p2 = this.canvas.globalCoordTransformRev([event.x, event.y]);
          this.moveOrigin(p2[0] - p1[0], p2[1] - p1[1]);
        } else if (dy > 0) {
          const p1 = this.canvas.globalCoordTransformRev([event.x, event.y]);
          this.setScale(this.canvas.scale * (1 + dy / h));
          const p2 = this.canvas.globalCoordTransformRev([event.x, event.y]);
          this.moveOrigin(p2[0] - p1[0], p2[1] - p1[1]);
        }
      } else if (e.shiftKey && Math.abs(dx) === 0) {
        // horizontal scroll (only for non macOS)
        this.moveOrigin(dy, dx);
      } else {
        // vertical scroll
        this.moveOrigin(dx, dy);
      }
    });

    // mouse drag over event
    this.canvasElement.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    // mouse drag drop event
    this.canvasElement.addEventListener("drop", (e) => {
      this.focus();
      e.preventDefault();
      const event = createPointerEvent(this.canvasElement, this.canvas, e);
      // const files = Array.from(e.dataTransfer?.files ?? []);
      this.triggerFileDrop(event, e.dataTransfer as DataTransfer);
    });

    // key down event
    this.canvasElement.addEventListener("keydown", (e) => {
      e.preventDefault();
      this.focus();
      this.triggerKeyDown(e);
    });
  }

  initializeKeymap() {
    this.keymap.bind(this.options.keymap ?? {});
    // handle global key events
    this.canvasElement.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.defaultHandlerId) {
        this.setActiveHandler(this.defaultHandlerId);
      }
      if (e.key === "Enter") {
        // ...
      }
      if (this.activeHandler) {
        this.activeHandler.keyDown(this, e);
      }
    });
    this.canvasElement.addEventListener("keyup", (e) => {
      if (this.activeHandler) {
        this.activeHandler.keyUp(this, e);
      }
    });
  }

  /**
   * Set diagram
   */
  setDiagram(diagram: Diagram) {
    this.diagram = diagram;
    this.selection.deselectAll();
    this.repaint();
  }

  /**
   * Set focus on this editor
   */
  focus() {
    this.canvasElement.focus();
  }

  /**
   * Set background color
   */
  setBackgroundColor(color: string) {
    this.backgroundColor = color;
    this.repaint();
  }

  /**
   * Set dark mode
   */
  setDarkMode(dark: boolean) {
    this.darkMode = dark;
    this.canvas.colorVariables = {
      ...colors[this.darkMode ? "dark" : "light"],
    };
    this.repaint();
  }

  /**
   * Set grid size
   */
  setGridSize(gridSize: number[]) {
    this.gridSize = gridSize;
    this.repaint();
  }

  /**
   * Set show grid or not
   */
  setShowGrid(show: boolean) {
    this.showGrid = show;
    this.repaint();
  }

  /**
   * Set snap to grid
   */
  setSnapToGrid(value: boolean) {
    this.snapToGrid = value;
  }

  /**
   * Set snap to object
   */
  setSnapToObject(value: boolean) {
    this.snapToObject = value;
  }

  /**
   * Fit the editor size to the holder element
   */
  fit() {
    const rect = this.parent.getBoundingClientRect();
    this.setSize(rect.width, rect.height);
  }

  /**
   * Set canvas element size
   */
  setSize(width: number, height: number) {
    this.canvasElement.width = width;
    this.canvasElement.height = height;
    // Setup for High-DPI (Retina) Display
    this.canvasElement.width = Math.floor(width * this.canvas.ratio);
    this.canvasElement.height = Math.floor(height * this.canvas.ratio);
    this.canvasElement.style.width = width + "px";
    this.canvasElement.style.height = height + "px";
    this.repaint();
  }

  /**
   * Return the size of canvas element in CCS
   */
  getSize(): number[] {
    return [this.canvasElement.width, this.canvasElement.height];
  }

  /**
   * Get origin point in CCS
   */
  getOrigin(): number[] {
    return this.canvas.origin;
  }

  /**
   * Get screen center point in GCS
   */
  getCenter(): number[] {
    const sz = this.getSize();
    return this.canvas.globalCoordTransformRev([sz[0] / 2, sz[1] / 2]);
  }

  /**
   * Set origin point
   */
  setOrigin(x: number, y: number) {
    this.canvas.origin = [x, y];
    this.repaint();
    this.triggerScroll(x, y);
  }

  /**
   * Move origin point
   */
  moveOrigin(dx: number, dy: number) {
    this.setOrigin(this.canvas.origin[0] + dx, this.canvas.origin[1] + dy);
  }

  /**
   * Set scale
   */
  setScale(scale: number) {
    if (scale < 0.1) {
      // min 10%
      scale = 0.1;
    }
    if (scale > 10) {
      // max 1000%
      scale = 10;
    }
    this.canvas.scale = scale;
    this.repaint();
    this.triggerZoom(this.canvas.scale);
  }

  /**
   * Get scale
   */
  getScale(): number {
    return this.canvas.scale;
  }

  /**
   * Set zoom
   */
  zoom(scale: number = 1) {
    const center = this.getCenter();
    this.setScale(scale);
    this.scrollCenterTo(center);
    this.repaint();
  }

  /**
   * Fit diagram to screen and move to center
   */
  fitToScreen(scaleDelta: number = 0) {
    if (this.diagram) {
      // diagram size in GCS
      const diagram = this.diagram;
      const box = diagram.getDiagramBoundingBox(this.canvas);
      const center = geometry.center(box);
      const dw = geometry.width(box);
      const dh = geometry.height(box);
      // screen size in GCS when scale = 1
      const size = this.getSize();
      const sw = Math.round(size[0] / this.canvas.ratio);
      const sh = Math.round(size[1] / this.canvas.ratio);
      const scale = Math.min(sw / dw, sh / dh, 1);
      this.setScale(scale + scaleDelta);
      this.scrollCenterTo(center);
      this.repaint();
    }
  }

  /**
   * Scroll screen
   */
  scroll(dx: number, dy: number) {
    this.moveOrigin(dx, dy);
    this.repaint();
  }

  /**
   * Scroll screen center to a point in GCS
   */
  scrollCenterTo(center: number[]) {
    const size = this.getSize();
    // screen size in CGS when scale = 1
    const sw = Math.round(size[0] / this.canvas.ratio);
    const sh = Math.round(size[1] / this.canvas.ratio);
    // screen size in CGS with zoom scale
    const zsw = sw / this.canvas.scale;
    const zsh = sh / this.canvas.scale;
    const px = Math.round(center[0] - zsw / 2);
    const py = Math.round(center[1] - zsh / 2);
    this.setOrigin(-px, -py);
  }

  /**
   * Set enable
   */
  setEnabled(enabled: boolean) {
    this.canvasElement.style.display = enabled ? "" : "none";
  }

  /**
   * Get enable
   */
  getEnabled(): boolean {
    return this.canvasElement.style.display !== "none";
  }

  /**
   * Add an array of handlers
   * Note: the first handler is set as default handler
   */
  addHandlers(handlers: Handler[]) {
    handlers.forEach((handler, index) => {
      this.addHandler(handler, index === 0);
    });
  }

  /**
   * Add a handler
   */
  addHandler(handler: Handler, isDefault: boolean = false) {
    this.handlers[handler.id] = handler;
    if (isDefault) {
      this.defaultHandlerId = handler.id;
    }
  }

  /**
   * Remove a handler by id
   */
  removeHandler(id: string) {
    delete this.handlers[id];
  }

  /**
   * Get a handler by id
   */
  getHandler(id: string): Handler {
    return this.handlers[id];
  }

  /**
   * Clear all handlers
   */
  clearHandlers() {
    this.handlers = {};
  }

  /**
   * Set active handler by id
   */
  setActiveHandler(id: string) {
    if (this.activeHandlerId !== id) {
      if (this.activeHandler) this.activeHandler.onDeactivate(this);
      this.activeHandlerId = id;
      this.activeHandler = this.handlers[this.activeHandlerId];
      this.activeHandler.onActivate(this);
      this.emit("activeHandlerChange", this.activeHandlerId);
    }
  }

  /**
   * Clear canvas background
   */
  clearBackground(canvas: Canvas) {
    const g = canvas.context;
    g.fillStyle = this.canvas.resolveColor(this.backgroundColor);
    g.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  /**
   * Draw the grid
   */
  drawGrid(canvas: Canvas) {
    if (this.showGrid) {
      const sz = this.getSize();
      const p1 = canvas.globalCoordTransformRev([0, 0]);
      const p2 = canvas.globalCoordTransformRev(sz);
      const scale = this.getScale();
      let w = this.gridSize[0] * 2;
      let h = this.gridSize[1] * 2;
      let thick = Math.max(Math.round(1 / scale), 1);
      if (scale < 0.2) {
        w = this.gridSize[0] * 16;
        h = this.gridSize[1] * 16;
      } else if (scale < 0.4) {
        w = this.gridSize[0] * 8;
        h = this.gridSize[1] * 8;
      } else if (scale < 0.8) {
        w = this.gridSize[0] * 4;
        h = this.gridSize[1] * 4;
      }
      const wc = Math.floor((p2[0] - p1[0]) / w);
      const wh = Math.floor((p2[1] - p1[1]) / h);
      canvas.save();
      canvas.globalTransform();
      canvas.strokeColor = this.canvas.resolveColor(Color.GRID);
      canvas.strokeWidth = thick;
      canvas.strokePattern = [];
      canvas.roughness = 0;
      canvas.alpha = 1;
      for (let i = 0; i <= wc; i++) {
        const x = p1[0] + i * w - (p1[0] % w);
        canvas.line(x, p1[1], x, p2[1]);
      }
      for (let i = 0; i <= wh; i++) {
        const y = p1[1] + i * h - (p1[1] % h);
        canvas.line(p1[0], y, p2[0], y);
      }
      canvas.restore();
    }
  }

  /**
   * Draw selection
   */
  drawSelection() {
    if (this.activeHandler) {
      this.activeHandler.drawSelection(this);
    }
  }

  /**
   * Repaint diagram
   */
  repaint(drawSelection: boolean = true) {
    if (this.diagram) {
      this.clearBackground(this.canvas);
      this.drawGrid(this.canvas);
      this.diagram.render(this.canvas);
      if (drawSelection) this.drawSelection();
    } else {
      this.clearBackground(this.canvas);
    }
  }

  /**
   * Set cursor
   */
  setCursor(cursor: string, angle: number = 0) {
    const cssCursor = cursor.replace("{{angle}}", angle.toString());
    this.canvasElement.style.cursor = cssCursor;
  }

  triggerDblClick(shape: Shape | null, point: number[]) {
    this.emit("dblClick", shape, point);
  }

  triggerZoom(scale: number) {
    this.emit("zoom", scale);
  }

  triggerScroll(originX: number, originY: number) {
    this.emit("scroll", [originX, originY]);
  }

  triggerDragStart(controller: Controller | null, dragStartPoint: number[]) {
    this.emit("dragStart", controller, dragStartPoint);
  }

  triggerDrag(controller: Controller | null, dragPoint: number[]) {
    this.emit("drag", controller, dragPoint);
  }

  triggerDragEnd(controller: Controller | null, dragEndPoint: number[]) {
    this.emit("dragEnd", controller, dragEndPoint);
  }

  triggerFileDrop(event: CanvasPointerEvent, dataTransfer: DataTransfer) {
    this.emit("fileDrop", event, dataTransfer);
  }

  triggerKeyDown(e: KeyboardEvent) {
    this.emit("keyDown", e);
  }
}

/**
 * Manipulator Manager
 */
class ManipulatorManager {
  static instance: ManipulatorManager;

  manipulators: Record<string, Manipulator>;

  constructor() {
    this.manipulators = {};
  }

  /**
   * Define a manipulator
   * @param type shape type
   * @param manipulator a manipulator instance for the shape type
   */
  define(type: string, manipulator: Manipulator) {
    assert(
      !this.manipulators[type],
      `A manipulator of '${type}' already defined.`
    );
    this.manipulators[type] = manipulator;
  }

  /**
   * Get a manupulator by shape type
   */
  get(type: string): Manipulator | null {
    const manipulator = this.manipulators[type];
    return manipulator ?? null;
  }

  /**
   * Returns all types
   */
  getTypes(): string[] {
    return Object.keys(this.manipulators);
  }

  /**
   * Returns a singleton manipulator manager
   */
  static getInstance(): ManipulatorManager {
    if (!ManipulatorManager.instance) {
      ManipulatorManager.instance = new ManipulatorManager();
    }
    return ManipulatorManager.instance;
  }
}

/**
 * Handler
 */
class Handler {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  /**
   * called when activated
   */
  onActivate(editor: Editor) {}

  /**
   * Triggered when deactivate
   */
  onDeactivate(editor: Editor) {}

  /**
   * pointerDown
   * @abstract
   */
  pointerDown(editor: Editor, e: CanvasPointerEvent) {}

  /**
   * pointerUp
   * @abstract
   */
  pointerUp(editor: Editor, e: CanvasPointerEvent) {}

  /**
   * pointerMove
   * @abstract
   */
  pointerMove(editor: Editor, e: CanvasPointerEvent) {}

  /**
   * keyDown
   */
  keyDown(editor: Editor, e: KeyboardEvent) {}

  /**
   * keyUp
   */
  keyUp(editor: Editor, e: KeyboardEvent) {}

  /**
   * Draw ghost for the selected shape
   */
  drawSelection(editor: Editor) {}
}

/**
 * Controller
 */
class Controller {
  manipulator: Manipulator;

  /**
   * Indicates whether this controller is dragging or not
   */
  dragging: boolean;

  /**
   * Drag start point in shape's LCS
   */
  dragStartPoint: number[];

  /**
   * Drag point in shape's LCS
   */
  dragPoint: number[];

  /**
   * Drag x-distance in shape's LCS
   */
  dx: number;

  /**
   * Drag y-distance in shape's LCS
   */
  dy: number;

  constructor(manipulator: Manipulator) {
    this.manipulator = manipulator;
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragPoint = [-1, -1];
    this.dx = 0;
    this.dy = 0;
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    return true;
  }

  /**
   * Returns true if mouse cursor is inside the controller.
   * Default implementation returns true if the point inside the shape.
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    const canvas = editor.canvas;
    let p = canvas.globalCoordTransformRev([e.x, e.y]);
    return shape.visible && shape.enable && shape.containsPoint(canvas, p);
  }

  /**
   * Returns mouse cursor for the controller
   * @returns cursor object (null is default cursor)
   */
  mouseCursor(
    editor: Editor,
    shape: Shape,
    e: CanvasPointerEvent
  ): [string, number] | null {
    return null;
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {}

  /**
   * Draw on dragging
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {}

  /**
   * Draw on hovering
   */
  drawHovering(editor: Editor, shape: Shape, e: CanvasPointerEvent) {}

  /**
   * Initialize before dragging
   */
  initialize(editor: Editor, shape: Shape) {}

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {}

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Shape) {}

  /**
   * Handle pointer down event
   * @returns handled or not
   */
  pointerDown(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    const canvas = editor.canvas;
    this.initialize(editor, shape);
    if (e.button === Mouse.BUTTON1 && this.mouseIn(editor, shape, e)) {
      this.dragging = true;
      this.dragStartPoint = geometry.quantize(
        utils.ccs2lcs(canvas, shape, [e.x, e.y])
      );
      this.dragPoint = geometry.copy(this.dragStartPoint);
      this.dx = 0;
      this.dy = 0;
      this.update(editor, shape);
      this.drawDragging(editor, shape, e);
      editor.triggerDragStart(this, this.dragStartPoint);
      return true;
    }
    return false;
  }

  /**
   * Handle pointer move event
   * @returns handled or not
   */
  pointerMove(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    const canvas = editor.canvas;
    let handled = false;
    if (this.dragging) {
      this.dragPoint = geometry.quantize(
        utils.ccs2lcs(canvas, shape, [e.x, e.y])
      );
      this.dx = this.dragPoint[0] - this.dragStartPoint[0];
      this.dy = this.dragPoint[1] - this.dragStartPoint[1];
      this.update(editor, shape);
      this.drawDragging(editor, shape, e);
      editor.triggerDrag(this, this.dragPoint);
      return true;
    }
    return handled;
  }

  /**
   * Handle pointer up event
   * @returns handled or not
   */
  pointerUp(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    let handled = false;
    if (e.button === Mouse.BUTTON1 && this.dragging) {
      if (this.dx !== 0 || this.dy !== 0) {
        this.finalize(editor, shape);
      }
      this.dragging = false;
      this.dragStartPoint = [-1, -1];
      this.dx = 0;
      this.dy = 0;
      handled = true;
      editor.triggerDragEnd(this, this.dragPoint);
    }
    return handled;
  }

  /**
   * Handle keydown event
   * @returns handled or not
   */
  keyDown(editor: Editor, shape: Shape, e: KeyboardEvent): boolean {
    if (this.dragging && e.key === "Escape") {
      this.dragging = false;
      this.dragStartPoint = [-1, -1];
      this.dx = 0;
      this.dy = 0;
      editor.repaint();
      return true;
    }
    return false;
  }

  /**
   * Handle keyup event
   * @returns handled or not
   */
  keyUp(editor: Editor, shape: Shape, e: KeyboardEvent): boolean {
    return false;
  }
}

/**
 * Manipulator
 */
class Manipulator {
  /**
   * Controllers of the manipulator
   */
  controllers: Controller[];

  /**
   * Dragging controller
   */
  draggingController: Controller | null;

  constructor() {
    this.controllers = [];
    this.draggingController = null;
  }

  /**
   * Returns one of controllers is dragging or not
   */
  isDragging(): boolean {
    return this.controllers.some((cp) => cp.dragging);
  }

  /**
   * Returns true if mouse cursor is inside the shape or control points
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    return this.controllers.some(
      (cp) => cp.active(editor, shape) && cp.mouseIn(editor, shape, e)
    );
  }

  /**
   * Returns mouse cursor for the manipulator
   * @returns cursor object
   */
  mouseCursor(
    editor: Editor,
    shape: Shape,
    e: CanvasPointerEvent
  ): [string, number] | null {
    for (let c of this.controllers) {
      if (c.active(editor, shape) && c.mouseIn(editor, shape, e))
        return c.mouseCursor(editor, shape, e);
    }
    return null;
  }

  /**
   * Handle pointer down event
   * @returns handled or not
   */
  pointerDown(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    let handled = false;
    for (let cp of this.controllers) {
      if (cp.active(editor, shape)) {
        handled = cp.pointerDown(editor, shape, e);
        if (handled) {
          this.draggingController = cp;
          break;
        }
      }
    }
    return handled;
  }

  /**
   * Handle pointer move event
   * @returns handled or not
   */
  pointerMove(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (this.mouseIn(editor, shape, e) && !editor.selection.isSelected(shape)) {
      this.drawHovering(editor, shape, e);
    }
    let handled = false;
    for (let cp of this.controllers) {
      if (cp.active(editor, shape)) {
        handled = cp.pointerMove(editor, shape, e);
        if (handled) {
          this.draggingController = cp;
          break;
        }
      }
    }
    return handled;
  }

  /**
   * Handle pointer up event
   * @returns handled or not
   */
  pointerUp(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    let handled = false;
    for (let cp of this.controllers) {
      if (cp.active(editor, shape)) {
        handled = cp.pointerUp(editor, shape, e);
        if (handled) break;
      }
    }
    this.draggingController = null;
    return handled;
  }

  /**
   * Handle keydown event
   * @returns handled or not
   */
  keyDown(editor: Editor, shape: Shape, e: KeyboardEvent): boolean {
    for (let i = 0; i < this.controllers.length; i++) {
      const cp = this.controllers[i];
      if (cp.active(editor, shape)) {
        let handled = cp.keyDown(editor, shape, e);
        if (handled) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Handle keyup event
   * @returns handled or not
   */
  keyUp(editor: Editor, shape: Shape, e: KeyboardEvent): boolean {
    for (let i = 0; i < this.controllers.length; i++) {
      const cp = this.controllers[i];
      if (cp.active(editor, shape)) {
        let handled = cp.keyUp(editor, shape, e);
        if (handled) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Draw controllers
   */
  draw(editor: Editor, shape: Shape) {
    if (!this.draggingController) {
      for (let i = this.controllers.length - 1; i >= 0; i--) {
        const cp = this.controllers[i];
        cp.active(editor, shape) && cp.draw(editor, shape);
      }
    }
  }

  /**
   * Draw hovering for the shape
   */
  drawHovering(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    let outline = shape.getOutline();
    let outlineCCS = outline.map((p) => utils.lcs2ccs(canvas, shape, p));
    canvas.storeState();
    canvas.strokeColor = Color.SELECTION;
    canvas.strokeWidth = canvas.px * 1.5;
    canvas.strokePattern = [];
    canvas.roughness = 0;
    canvas.alpha = 1;
    canvas.polyline(outlineCCS);
    canvas.restoreState();
    this.controllers.forEach(
      (cp) => cp.active(editor, shape) && cp.drawHovering(editor, shape, e)
    );
  }
}

const manipulatorManager = ManipulatorManager.getInstance();

export { Editor, Handler, Manipulator, Controller, manipulatorManager };
