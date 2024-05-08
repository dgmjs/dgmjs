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

import { Canvas, CanvasPointerEvent } from "./graphics/graphics";
import {
  Connector,
  Doc,
  Shape,
  Page,
  shapeInstantiator,
  FillStyle,
} from "./shapes";
import { Cursor, Color, Mouse, CONTROL_POINT_APOTHEM } from "./graphics/const";
import { assert } from "./std/assert";
import * as geometry from "./graphics/geometry";
import * as utils from "./graphics/utils";
import { ShapeFactory } from "./factory";
import type { Obj } from "./core/obj";
import { themeColors } from "./colors";
import { Actions } from "./actions";
import { KeyMap, KeymapManager } from "./keymap-manager";
import { AutoScroller } from "./utils/auto-scroller";
import { createPointerEvent, createTouchEvent } from "./utils/canvas-utils";
import { Store } from "./core/store";
import { SelectionManager } from "./selection-manager";
import { Clipboard } from "./core/clipboard";
import { TypedEvent } from "./std/typed-event";
import { Transform } from "./core/transform";

export interface EditorOptions {
  handlers: Handler[];
  defaultHandlerId: string | null;
  keymap: KeyMap;
  keymapEventTarget: EventTarget | null;
  allowAutoScroll: boolean;
  allowCreateTextOnCanvas: boolean;
  allowCreateTextOnConnector: boolean;
  onReady: (editor: Editor) => void;
}

export interface DblClickEvent {
  shape: Shape | null;
  point: number[];
}

export interface DragEvent {
  controller: Controller | null;
  dragPoint: number[];
}

export interface FileDropEvent {
  event: CanvasPointerEvent;
  dataTransfer: DataTransfer;
}

/**
 * The editor
 */
export class Editor {
  options: EditorOptions;
  plugins: Record<string, Plugin>;
  platform: string;

  onCurrentPageChange: TypedEvent<Page>;
  onActiveHandlerChange: TypedEvent<string>;
  onZoom: TypedEvent<number>;
  onScroll: TypedEvent<number[]>;
  onPointerDown: TypedEvent<CanvasPointerEvent>;
  onPointerMove: TypedEvent<CanvasPointerEvent>;
  onPointerUp: TypedEvent<CanvasPointerEvent>;
  onDblClick: TypedEvent<DblClickEvent>;
  onKeyDown: TypedEvent<KeyboardEvent>;
  onDragStart: TypedEvent<DragEvent>;
  onDrag: TypedEvent<DragEvent>;
  onDragEnd: TypedEvent<DragEvent>;
  onFileDrop: TypedEvent<FileDropEvent>;
  onRepaint: TypedEvent<void>;

  store: Store;
  transform: Transform;
  clipboard: Clipboard;
  selection: SelectionManager;
  factory: ShapeFactory;
  actions: Actions;
  keymap: KeymapManager;
  autoScroller: AutoScroller;

  enabled: boolean;
  currentPage: Page | null;
  parent: HTMLElement;
  canvasElement: HTMLCanvasElement;
  canvas: Canvas;
  darkMode: boolean;
  gridSize: number[];
  showGrid: boolean;
  snapToGrid: boolean;
  snapToObject: boolean;
  handlers: Record<string, Handler>;
  activeHandlerId: string | null;
  activeHandler: Handler | null;
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
  constructor(
    editorHolder: HTMLElement,
    options: Partial<EditorOptions>,
    plugins: Plugin[] = []
  ) {
    this.options = {
      handlers: [],
      defaultHandlerId: "",
      keymap: {},
      keymapEventTarget: null,
      allowAutoScroll: true,
      allowCreateTextOnCanvas: true,
      allowCreateTextOnConnector: true,
      onReady: () => {},
      ...options,
    };

    // register plugins
    this.plugins = {};
    plugins.forEach((plugin) => {
      this.plugins[plugin.id] = plugin;
    });

    // initialize event emitters
    this.onCurrentPageChange = new TypedEvent();
    this.onActiveHandlerChange = new TypedEvent();
    this.onZoom = new TypedEvent();
    this.onScroll = new TypedEvent();
    this.onPointerDown = new TypedEvent();
    this.onPointerMove = new TypedEvent();
    this.onPointerUp = new TypedEvent();
    this.onDblClick = new TypedEvent();
    this.onKeyDown = new TypedEvent();
    this.onDragStart = new TypedEvent();
    this.onDrag = new TypedEvent();
    this.onDragEnd = new TypedEvent();
    this.onFileDrop = new TypedEvent();
    this.onRepaint = new TypedEvent();

    this.store = new Store(shapeInstantiator, {
      objInitializer: (o) => {
        if (o instanceof Shape) o.initialze(this.canvas);
      },
      objFinalizer: (o) => {
        if (o instanceof Shape) o.finalize(this.canvas);
      },
    });
    this.transform = new Transform(this.store);
    this.clipboard = new Clipboard(this.store);
    this.selection = new SelectionManager(this);
    this.factory = new ShapeFactory(this);
    this.actions = new Actions(this);
    this.keymap = new KeymapManager(this);

    this.platform = this.detectPlatform();
    this.enabled = true;
    this.currentPage = null;
    this.parent = editorHolder;
    this.parent.style.overflow = "hidden";
    this.autoScroller = new AutoScroller(this);
    this.autoScroller.setEnabled(this.options.allowAutoScroll ?? true);
    // initialize properties
    this.canvasElement = null as any;
    this.canvas = null as any;
    this.darkMode = false;
    this.gridSize = [8, 8];
    this.showGrid = false;
    this.snapToGrid = false;
    this.snapToObject = false;
    this.handlers = {};
    this.addHandlers(this.options.handlers ?? []);
    this.activeHandlerId = null;
    this.activeHandler = null;
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
    this.activatePlugins();
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
    this.transform.onTransaction.addListener(() => this.repaint());
    this.transform.onUndo.addListener(() => this.repaint());
    this.transform.onRedo.addListener(() => this.repaint());
    this.selection.onChange.addListener(() => this.repaint());
    this.factory.onCreate.addListener((shape: Shape) => {
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
    this.canvas.colorVariables = { ...themeColors["light"] };

    // pointer down handler
    this.canvasElement.addEventListener("pointerdown", (e) => {
      if (this.enabled) {
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
        this.onPointerDown.emit(event);
      }
    });

    // pointer move
    this.canvasElement.addEventListener("pointermove", (e) => {
      if (this.enabled) {
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
        this.onPointerMove.emit(event);
      }
    });

    // pointer up  handler
    this.canvasElement.addEventListener("pointerup", (e) => {
      if (this.enabled) {
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
        this.onPointerUp.emit(event);
      }
    });

    this.canvasElement.addEventListener("pointercancel", (e) => {
      if (this.enabled) {
      }
    });

    // touch start handler
    this.canvasElement.addEventListener("touchstart", (e) => {
      if (this.enabled) {
        this.focus();
        if (e.touches.length === 2) {
          const event = createTouchEvent(this.canvasElement, this.canvas, e);
          this.isPinching = true;
          this.initialScale = this.canvas.scale;
          this.initialDistance = event.touchDistance;
          this.touchPoint = [event.x, event.y];
        }
      }
    });

    // touch move handler
    this.canvasElement.addEventListener("touchmove", (e) => {
      if (this.enabled) {
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
      }
    });

    // touch end handler
    this.canvasElement.addEventListener("touchend", (e) => {
      if (this.enabled) {
        e.stopImmediatePropagation();
        this.isPinching = false;
        this.initialScale = 1;
        this.initialDistance = 0;
        this.touchPoint = [-1, -1];
      }
    });

    // mouse double click
    this.canvasElement.addEventListener("dblclick", (e) => {
      if (this.enabled) {
        this.focus();
        this.selection.deselectAll();
        const event = createPointerEvent(this.canvasElement, this.canvas, e);
        const p = this.canvas.globalCoordTransformRev([event.x, event.y]);
        const x = p[0];
        const y = p[1];
        if (this.currentPage) {
          // allows double click on a disable shape (e.g. a text inside another shape)
          const pred = (s: Obj) =>
            (s as Shape).visible && (s as Shape).containsPoint(this.canvas, p);
          const shape: Shape | null = this.currentPage.findDepthFirst(
            pred
          ) as Shape | null;
          // create a text on canvas
          if (this.options.allowCreateTextOnCanvas && !shape) {
            const textShape = this.factory.createText([
              [x, y],
              [x, y],
            ]);
            this.actions.insert(textShape);
            this.factory.triggerCreate(textShape);
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
              CONTROL_POINT_APOTHEM * 2
            );
            const position = nearest
              ? geometry.getPositionOnPath(outline, nearest)
              : 0.5;
            const textShape = this.factory.createAnchoredText(position);
            this.actions.insert(textShape, shape);
            this.factory.triggerCreate(textShape);
          }
          // trigger double click event
          this.onDblClick.emit({ shape, point: [x, y] });
        }
      }
    });

    // mouse wheel event
    this.canvasElement.addEventListener("wheel", (e) => {
      if (this.enabled) {
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
      }
    });

    // mouse drag over event
    this.canvasElement.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    // mouse drag drop event
    this.canvasElement.addEventListener("drop", (e) => {
      if (this.enabled) {
        this.focus();
        e.preventDefault();
        const event = createPointerEvent(this.canvasElement, this.canvas, e);
        // const files = Array.from(e.dataTransfer?.files ?? []);
        this.onFileDrop.emit({
          event,
          dataTransfer: e.dataTransfer as DataTransfer,
        });
      }
    });

    // key down event
    this.canvasElement.addEventListener("keydown", (e) => {
      if (this.enabled) {
        e.preventDefault();
        this.focus();
        this.onKeyDown.emit(e);
      }
    });
  }

  initializeKeymap() {
    this.keymap.bind(this.options.keymap ?? {});
    // handle global key events
    this.canvasElement.addEventListener("keydown", (e) => {
      if (this.enabled) {
        if (this.activeHandler) {
          this.activeHandler.keyDown(this, e);
        }
        if (e.key === "Escape" && this.options.defaultHandlerId) {
          this.activateHandler(this.options.defaultHandlerId);
        }
      }
    });
    this.canvasElement.addEventListener("keyup", (e) => {
      if (this.enabled) {
        if (this.activeHandler) {
          this.activeHandler.keyUp(this, e);
        }
      }
    });
  }

  /**
   * Activate plugins
   */
  activatePlugins() {
    for (const plugin of Object.values(this.plugins)) {
      plugin.activate(this);
    }
  }

  /**
   * Deactivate plugins
   */
  deactivatePlugins() {
    for (const plugin of Object.values(this.plugins)) {
      plugin.deactivate(this);
    }
  }

  /**
   * Get a plugin by id
   */
  getPlugin(id: string): Plugin | null {
    return this.plugins[id];
  }

  /**
   * Set enable or disable
   */
  setEnabled(enabled: boolean) {
    this.enabled = enabled;
    this.canvasElement.style.opacity = enabled ? "1" : "0.5";
  }

  /**
   * Set current page
   */
  setCurrentPage(page: Page) {
    if (this.currentPage !== page) {
      if (this.currentPage) {
        this.currentPage.finalize(this.canvas);
        this.selection.deselectAll();
      }
      this.currentPage = page;
      this.repaint();
      this.onCurrentPageChange.emit(page);
    }
  }

  /**
   * Get pages
   */
  getPages(): Page[] {
    if (this.store.root) {
      return this.store.root.children as Page[];
    }
    return [];
  }

  /**
   * Set focus on this editor
   */
  focus() {
    this.canvasElement.focus();
  }

  /**
   * Set dark mode
   */
  setDarkMode(dark: boolean) {
    this.darkMode = dark;
    this.canvas.colorVariables = {
      ...themeColors[this.darkMode ? "dark" : "light"],
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
   * Get bounding rect in GCS
   */
  getBoundingRect(): number[][] {
    const rect: number[][] = [[0, 0], this.getSize()];
    return rect.map((p) => this.canvas.globalCoordTransformRev(p));
  }

  /**
   * Set origin point
   */
  setOrigin(x: number, y: number) {
    this.canvas.origin = [x, y];
    this.repaint();
    this.onScroll.emit([x, y]);
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
    this.onZoom.emit(scale);
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
   * Fit doc to screen and move to center
   */
  fitToScreen(scaleAdjust: number = 1, maxScale: number = 1) {
    if (this.currentPage) {
      // doc size in GCS
      const doc = this.store.root as Doc;
      const page = this.currentPage;
      let box = Array.isArray(doc.pageSize)
        ? [[0, 0], doc.pageSize]
        : page.getPageBoundingBox(this.canvas);
      const center = geometry.center(box);
      const dw = geometry.width(box);
      const dh = geometry.height(box);
      // screen size in GCS when scale = 1
      const size = this.getSize();
      const sw = Math.round(size[0] / this.canvas.ratio);
      const sh = Math.round(size[1] / this.canvas.ratio);
      const scale = Math.min(sw / dw, sh / dh, maxScale);
      this.setScale(scale * scaleAdjust);
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
   * @param center center point in GCS. If not provided, scroll to the center
   *   of the page size or the center of the shapes
   */
  scrollCenterTo(center?: number[]) {
    if (this.currentPage) {
      // doc size in GCS
      const doc = this.store.root as Doc;
      const page = this.currentPage;
      let box = Array.isArray(doc.pageSize)
        ? [[0, 0], doc.pageSize]
        : page.getPageBoundingBox(this.canvas);
      if (!center) {
        center = geometry.center(box);
      }
      // screen size in CGS when scale = 1
      const size = this.getSize();
      const sw = Math.round(size[0] / this.canvas.ratio);
      const sh = Math.round(size[1] / this.canvas.ratio);
      // screen size in CGS with zoom scale
      const zsw = sw / this.canvas.scale;
      const zsh = sh / this.canvas.scale;
      const px = Math.round(center[0] - zsw / 2);
      const py = Math.round(center[1] - zsh / 2);
      this.setOrigin(-px, -py);
    }
  }

  /**
   * Scroll to center of the shapes
   */
  scrollToCenter() {
    if (this.currentPage) {
      const doc = this.store.root as Doc;
      const page = this.currentPage;
      let box = Array.isArray(doc.pageSize)
        ? [[0, 0], doc.pageSize]
        : page.getPageBoundingBox(this.canvas);
      const center = geometry.center(box);
      this.scrollCenterTo(center);
    }
  }

  /**
   * Add an array of handlers
   * Note: the first handler is set as default handler
   */
  addHandlers(handlers: Handler[]) {
    handlers.forEach((handler, index) => {
      this.addHandler(handler);
    });
    if (!this.options.defaultHandlerId && handlers.length > 0) {
      this.options.defaultHandlerId = handlers[0].id;
    }
  }

  /**
   * Add a handler
   */
  addHandler(handler: Handler) {
    this.handlers[handler.id] = handler;
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
   * Activate a handler by id
   */
  activateHandler(id: string) {
    if (this.activeHandlerId !== id) {
      if (this.activeHandler) this.activeHandler.onDeactivate(this);
      this.activeHandlerId = id;
      this.activeHandler = this.handlers[this.activeHandlerId];
      this.activeHandler.onActivate(this);
      this.onActiveHandlerChange.emit(this.activeHandlerId);
    }
  }

  /**
   * Activate the default handler
   */
  activateDefaultHandler() {
    if (this.options.defaultHandlerId) {
      this.activateHandler(this.options.defaultHandlerId);
    }
  }

  /**
   * Clear canvas background
   */
  clearBackground(canvas: Canvas) {
    const g = canvas.context;
    const docSize = (this.store.root as Doc)?.pageSize;
    g.fillStyle = this.canvas.resolveColor(
      docSize ? Color.CANVAS : Color.BACKGROUND
    );
    g.globalAlpha = 1;
    g.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  /**
   * Draw the grid
   */
  drawGrid(canvas: Canvas) {
    const scale = this.getScale();
    const docSize = (this.store.root as Doc).pageSize;

    canvas.save();
    canvas.globalTransform();

    // draw document background
    if (docSize) {
      canvas.roughness = 0;
      canvas.alpha = 1;
      canvas.fillStyle = FillStyle.SOLID;
      canvas.fillColor = this.canvas.resolveColor(Color.BACKGROUND);
      canvas.fillRect(0, 0, docSize[0], docSize[1]);
    }

    // draw grid
    if (this.showGrid) {
      const sz = this.getSize();
      const p1 = canvas.globalCoordTransformRev([0, 0]);
      const p2 = canvas.globalCoordTransformRev(sz);
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
    }

    // draw document border
    if (docSize) {
      canvas.strokeColor = this.canvas.resolveColor(Color.BORDER);
      canvas.strokeWidth = 1 / scale;
      canvas.strokePattern = [];
      canvas.roughness = 0;
      canvas.alpha = 1;
      canvas.strokeRect(0, 0, docSize[0], docSize[1]);
    }

    canvas.restore();
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
    this.clearBackground(this.canvas);
    if (this.currentPage) {
      this.drawGrid(this.canvas);
      this.currentPage.render(this.canvas, true);
      if (drawSelection) this.drawSelection();
      this.onRepaint.emit();
    }
  }

  /**
   * Set cursor
   */
  setCursor(cursor: string, angle: number = 0) {
    const cssCursor = cursor.replace("{{angle}}", angle.toString());
    this.canvasElement.style.cursor = cssCursor;
  }

  /**
   * Get the document
   */
  getDoc(): Doc {
    return this.store.root as Doc;
  }

  /**
   * Set the document
   */
  setDoc(doc: Doc) {
    this.store.setRoot(doc);
  }

  /**
   * Create a new document
   */
  newDoc(): Doc {
    const doc = new Doc();
    const page = new Page();
    doc.children.push(page);
    page.parent = doc;
    this.store.setRoot(doc);
    this.setCurrentPage(doc.children[0] as Page);
    return doc;
  }

  /**
   * Load from JSON
   */
  loadFromJSON(json: any) {
    if (json) {
      this.selection.deselectAll();
      this.store.fromJSON(json);
      if (
        this.store.root instanceof Doc &&
        this.store.root.children.length > 0 &&
        this.store.root.children[0] instanceof Page
      ) {
        this.setCurrentPage(this.store.root.children[0] as Page);
      }
    }
  }

  /**
   * Save to JSON
   */
  saveToJSON(): any {
    return this.store.toJSON();
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

export interface HandlerOptions {
  lock: boolean;
}

/**
 * Handler
 */
export class Handler {
  id: string;
  options: HandlerOptions;

  constructor(id: string, options?: Partial<HandlerOptions>) {
    this.id = id;
    this.options = {
      lock: false,
      ...options,
    };
    this.reset();
  }

  /**
   * Reset the states of handler
   */
  reset() {}

  /**
   * Get lock
   */
  getLock(): boolean {
    return this.options.lock;
  }

  /**
   * Set lock
   */
  setLock(lock: boolean) {
    this.options.lock = lock;
  }

  /**
   * Call this method when the handler is done
   */
  done(editor: Editor) {
    if (!this.options.lock) {
      editor.activateDefaultHandler();
    }
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
export class Controller {
  manipulator: Manipulator;

  /**
   * Indicates whether this controller is dragging or not
   */
  dragging: boolean = false;

  /**
   * Drag start point in shape's LCS
   */
  dragStartPoint: number[] = [-1, -1];

  /**
   * Drag start point in shape's GCS
   */
  dragStartPointGCS: number[] = [-1, -1];

  /**
   * Drag start point in shape's CCS
   */
  dragStartPointCCS: number[] = [-1, -1];

  /**
   * Previous drag point in shape's LCS
   */
  dragPrevPoint: number[] = [-1, -1];

  /**
   * Previous drag point in shape's GCS
   */
  dragPrevPointGCS: number[] = [-1, -1];

  /**
   * Previous drag point in shape's CCS
   */
  dragPrevPointCCS: number[] = [-1, -1];

  /**
   * Current drag point in shape's LCS
   */
  dragPoint: number[] = [-1, -1];

  /**
   * Current drag point in shape's GCS
   */
  dragPointGCS: number[] = [-1, -1];

  /**
   * Current drag point in shape's CCS
   */
  dragPointCCS: number[] = [-1, -1];

  /**
   * X-distance from dragStartPoint to dragPoint in shape's LCS
   */
  dx: number = 0;

  /**
   * Y-distance from dragStartPoint to dragPoint in shape's LCS
   */
  dy: number = 0;

  /**
   * X-distance from dragPrevPoint to dragPoint in shape's LCS
   */
  dxStep: number = 0;

  /**
   * Y-distance from dragPrevPoint to dragPoint in shape's LCS
   */
  dyStep: number = 0;

  /**
   * X-distance from dragStartPoint to dragPoint in GCS
   */
  dxGCS: number = 0;

  /**
   * Y-distance from dragStartPoint to dragPoint in GCS
   */
  dyGCS: number = 0;

  /**
   * X-distance from dragPrevPoint to dragPoint in GCS
   */
  dxStepGCS: number = 0;

  /**
   * Y-distance from dragPrevPoint to dragPoint in GCS
   */
  dyStepGCS: number = 0;

  constructor(manipulator: Manipulator) {
    this.manipulator = manipulator;
    this.reset();
  }

  reset() {
    this.dragging = false;
    this.dragStartPoint = [-1, -1];
    this.dragStartPointGCS = [-1, -1];
    this.dragStartPointCCS = [-1, -1];
    this.dragPrevPoint = [-1, -1];
    this.dragPrevPointGCS = [-1, -1];
    this.dragPrevPointCCS = [-1, -1];
    this.dragPoint = [-1, -1];
    this.dragPointGCS = [-1, -1];
    this.dragPointCCS = [-1, -1];
    this.dx = 0;
    this.dy = 0;
    this.dxStep = 0;
    this.dyStep = 0;
    this.dxGCS = 0;
    this.dyGCS = 0;
    this.dxStepGCS = 0;
    this.dyStepGCS = 0;
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
    let handled = false;
    if (e.button === Mouse.BUTTON1 && this.mouseIn(editor, shape, e)) {
      this.reset();
      this.dragging = true;
      this.dragStartPoint = utils.ccs2lcs(canvas, shape, [e.x, e.y]);
      this.dragPrevPoint = geometry.copy(this.dragStartPoint);
      this.dragPoint = geometry.copy(this.dragStartPoint);
      this.dragStartPointGCS = utils.ccs2gcs(canvas, [e.x, e.y]);
      this.dragPrevPointGCS = geometry.copy(this.dragStartPointGCS);
      this.dragPointGCS = geometry.copy(this.dragStartPointGCS);
      this.dragStartPointCCS = [e.x, e.y];
      this.dragPrevPointCCS = geometry.copy(this.dragStartPointCCS);
      this.dragPointCCS = geometry.copy(this.dragStartPointCCS);
      handled = true;
      this.initialize(editor, shape);
      this.update(editor, shape);
      editor.repaint();
      this.drawDragging(editor, shape, e);
      editor.onDragStart.emit({
        controller: this,
        dragPoint: this.dragStartPoint,
      });
    }
    return handled;
  }

  /**
   * Handle pointer move event
   * @returns handled or not
   */
  pointerMove(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    const canvas = editor.canvas;
    let handled = false;
    if (this.dragging) {
      this.dragPrevPoint = geometry.copy(this.dragPoint);
      this.dragPoint = utils.ccs2lcs(canvas, shape, [e.x, e.y]);
      this.dragPrevPointGCS = geometry.copy(this.dragPointGCS);
      this.dragPointGCS = utils.ccs2gcs(canvas, [e.x, e.y]);
      this.dragPrevPointCCS = geometry.copy(this.dragPointCCS);
      this.dragPointCCS = [e.x, e.y];
      this.dx = this.dragPoint[0] - this.dragStartPoint[0];
      this.dy = this.dragPoint[1] - this.dragStartPoint[1];
      this.dxStep = this.dragPoint[0] - this.dragPrevPoint[0];
      this.dyStep = this.dragPoint[1] - this.dragPrevPoint[1];
      this.dxGCS = this.dragPointGCS[0] - this.dragStartPointGCS[0];
      this.dyGCS = this.dragPointGCS[1] - this.dragStartPointGCS[1];
      this.dxStepGCS = this.dragPointGCS[0] - this.dragPrevPointGCS[0];
      this.dyStepGCS = this.dragPointGCS[1] - this.dragPrevPointGCS[1];
      handled = true;
      this.update(editor, shape);
      editor.repaint();
      this.drawDragging(editor, shape, e);
      editor.onDrag.emit({
        controller: this,
        dragPoint: this.dragPoint,
      });
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
      this.reset();
      handled = true;
      this.finalize(editor, shape);
      editor.repaint();
      editor.onDragEnd.emit({
        controller: this,
        dragPoint: this.dragPoint,
      });
    }
    return handled;
  }

  /**
   * Handle keydown event
   * @returns handled or not
   */
  keyDown(editor: Editor, shape: Shape, e: KeyboardEvent): boolean {
    if (this.dragging && e.key === "Escape") {
      this.reset();
      editor.transform.cancelAction();
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
export class Manipulator {
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
    // dragging controller has higher priority
    for (let c of this.controllers) {
      if (c.dragging) return c.mouseCursor(editor, shape, e);
    }
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
      if (cp.active(editor, shape) && cp.mouseIn(editor, shape, e)) {
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
    if (this.draggingController) {
      handled = this.draggingController.pointerMove(editor, shape, e);
    }
    return handled;
  }

  /**
   * Handle pointer up event
   * @returns handled or not
   */
  pointerUp(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    let handled = false;
    if (this.draggingController) {
      handled = this.draggingController.pointerUp(editor, shape, e);
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

/**
 * Plugin
 */
export abstract class Plugin {
  id: string;

  constructor(pluginId: string) {
    this.id = pluginId;
  }

  abstract activate(editor: Editor): void;
  abstract deactivate(editor: Editor): void;
}

export const manipulatorManager = ManipulatorManager.getInstance();
