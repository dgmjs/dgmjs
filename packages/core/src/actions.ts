import type { Editor } from "./editor";
import {
  Box,
  Group,
  Shape,
  type ShapeProps,
  Page,
  Path,
  Mirror,
} from "./shapes";
import * as geometry from "./graphics/geometry";
import { Obj } from "./core/obj";
import { deserialize, serialize } from "./core/serialize";
import {
  addPage,
  addShape,
  bringForward,
  bringToFront,
  changeParent,
  deleteShapes,
  groupShapes,
  moveAnchor,
  moveShapes,
  removePage,
  reorderPage,
  resolveAllConstraints,
  sendBackward,
  sendToBack,
  ungroupShapes,
} from "./macro";
import { convertStringToTextNode, visitTextNodes } from "./utils/text-utils";
import { ActionKind, Store } from "./core";
import { getAllDescendant } from "./utils/shape-utils";

/**
 * Extract outer refs in objs from the store
 */
export const outerRefMapExtractor = (
  store: Store,
  objs: Obj[]
): Record<string, Obj> => {
  const outerRefMap: Record<string, Obj> = {};
  for (let obj of objs) {
    obj.traverse((o) => {
      if (
        o instanceof Shape &&
        typeof o.reference === "string" &&
        store.idIndex[o.reference]
      ) {
        outerRefMap[o.reference] = store.idIndex[o.reference];
      }
      if (
        o instanceof Mirror &&
        typeof o.subject === "string" &&
        store.idIndex[o.subject]
      ) {
        outerRefMap[o.subject] = store.idIndex[o.subject];
      }
    });
  }
  return outerRefMap;
};

/**
 * Editor actions
 */
export class Actions {
  editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  /**
   * Undo
   */
  undo() {
    this.editor.transform.undo();
  }

  /**
   * Redo
   */
  redo() {
    this.editor.transform.redo();
  }

  /**
   * Add a page
   * @param pageProps - The properties of the page to add
   * @param position - The position to add the page at. If not provided, the page will be added at the end
   * @returns The added page
   */
  addPage(pageProps?: Partial<Page>, position?: number): Page {
    const pages = this.editor.getPages();
    position = position ?? pages.length;
    const prevPage = pages[position - 1] ?? null;
    const page = new Page();
    page.size = prevPage?.size ?? null; // set size to the previous page's size
    page.name = `Page ${position + 1}`;
    if (pageProps) {
      Object.assign(page, pageProps);
    }
    this.editor.transform.startAction(ActionKind.ADD_PAGE);
    this.editor.transform.transact((tx) => {
      addPage(tx, this.editor.getDoc(), page);
      if (position >= 0 && position < this.editor.getPages().length) {
        reorderPage(tx, page, position);
      }
      resolveAllConstraints(tx, page, this.editor.canvas);
    });
    this.editor.transform.endAction();
    return page;
  }

  /**
   * Remove a page
   * @param page - The page to remove
   */
  removePage(page: Page): void {
    this.editor.transform.startAction(ActionKind.REMOVE_PAGE);
    this.editor.transform.transact((tx) => {
      removePage(tx, page);
    });
    this.editor.transform.endAction();
  }

  /**
   * Reorder a page
   * @param page - The page to reorder
   * @param position - The new position of the page
   * @returns The reordered page
   */
  reorderPage(page: Page, position: number): Page {
    this.editor.transform.startAction(ActionKind.REORDER_PAGE);
    this.editor.transform.transact((tx) => {
      reorderPage(tx, page, position);
    });
    this.editor.transform.endAction();
    return page;
  }

  /**
   * Duplicate a page
   * @param page - The page to duplicate
   * @param pageProps - The properties of the duplicated page
   * @param position - The position to add the duplicated page at. If not provided, the page will be added at the next of the original page
   * @returns The duplicated page
   */
  duplicatePage(
    page: Page,
    pageProps?: Partial<Page>,
    position?: number
  ): Page {
    const buffer: any[] = serialize([page]);
    const copied = deserialize(
      this.editor.store,
      buffer,
      outerRefMapExtractor
    )[0] as Page;
    if (pageProps) {
      Object.assign(copied, pageProps);
    }
    const originPosition = this.editor.getPages().indexOf(page);
    this.editor.transform.startAction(ActionKind.DUPLICATE_PAGE);
    this.editor.transform.transact((tx) => {
      addPage(tx, this.editor.getDoc(), copied);
      reorderPage(tx, copied, position ?? originPosition + 1);
    });
    this.editor.transform.endAction();
    return copied;
  }

  /**
   * Insert a shape into the current page or another shape
   * @param shape - The shape to insert
   * @param parent - The parent shape to insert the shape into. If not provided, the shape will be inserted into the current page
   */
  insert(shape: Shape, parent?: Shape): Shape {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");

    // prevent inserting a shape into itself or its descendants
    const dsc = getAllDescendant([shape]);
    if (dsc.some((s) => s === parent)) {
      throw new Error("Cannot insert a shape into itself or its descendants");
    }

    // insert the shape
    this.editor.transform.startAction(ActionKind.INSERT);
    this.editor.transform.transact((tx) => {
      addShape(tx, shape, parent ?? page);
      resolveAllConstraints(tx, page, this.editor.canvas);
    });
    this.editor.transform.endAction();
    return shape;
  }

  /**
   * Update obj properties
   * @param values - The properties to update
   * @param objs - The shapes to update. If not provided, the selected shapes will be updated
   * @returns The updated shapes
   */
  update(values: ShapeProps, objs?: Obj[]) {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    this.editor.transform.startAction(ActionKind.UPDATE);
    this.editor.transform.transact((tx) => {
      objs = objs ?? this.editor.selection.getShapes();
      for (let key in values) {
        const value = (values as any)[key];
        switch (key) {
          case "reference": {
            for (const s of objs) {
              if (s.hasOwnProperty(key)) tx.assignRef(s, key, value);
            }
            break;
          }
          case "subject": {
            for (const s of objs) {
              const dsc = getAllDescendant([s as Shape]);
              if (dsc.some((o) => o === value)) {
                throw new Error(
                  "Cannot set a subject to itself or its descendants"
                );
              }
              if (s.hasOwnProperty(key)) tx.assignRef(s, key, value);
            }
            break;
          }
          case "text":
            if (typeof value === "string") {
              for (const s of objs) {
                if (s instanceof Box) {
                  tx.assign(
                    s,
                    key,
                    convertStringToTextNode(value, s.horzAlign)
                  );
                }
              }
            } else if (typeof value === "object") {
              for (const s of objs) {
                if (s instanceof Box) {
                  tx.assign(s, key, value);
                }
              }
            }
            break;
          case "horzAlign":
            for (const s of objs) {
              if (s instanceof Box) {
                const nodes = structuredClone(s.text);
                visitTextNodes(nodes, (node) => {
                  if (node.attrs?.textAlign) node.attrs.textAlign = value;
                });
                if (s.hasOwnProperty(key)) {
                  tx.assign(s, key, value);
                  tx.assign(s, "text", nodes);
                }
              }
            }
            break;
          case "fontColor":
          case "fontFamily":
          case "fontSize":
          case "fontWeight":
            for (const s of objs) {
              if (s instanceof Box) {
                const nodes = structuredClone(s.text);
                visitTextNodes(nodes, (node) => {
                  if (Array.isArray(node.marks)) {
                    node.marks.forEach((mark: any) => {
                      if (mark.attrs)
                        delete mark.attrs[key === "fontColor" ? "color" : key];
                    });
                  }
                });
                if (s.hasOwnProperty(key)) {
                  tx.assign(s, key, value);
                  tx.assign(s, "text", nodes);
                }
              }
            }
            break;
          default:
            for (const s of objs) {
              if (s.hasOwnProperty(key)) tx.assign(s, key, value);
            }
        }
      }
      resolveAllConstraints(tx, page, this.editor.canvas);
    });
    this.editor.transform.endAction();
    return objs;
  }

  /**
   * Remove selected shapes
   * @param shapes - The shapes to remove. If not provided, the selected shapes will be removed
   */
  remove(shapes?: Shape[]): void {
    const doc = this.editor.getDoc();
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    this.editor.transform.startAction(ActionKind.DELETE);
    this.editor.transform.transact((tx) => {
      shapes = shapes ?? this.editor.selection.getShapes();
      deleteShapes(tx, doc, page, shapes);
      resolveAllConstraints(tx, page, this.editor.canvas);
    });
    this.editor.transform.endAction();
    this.editor.selection.deselectAll();
  }

  /**
   * Copy selected shapes
   * @param shapes - The shapes to copy. If not provided, the selected shapes will be copied
   * @returns The copied shapes
   */
  async copy(shapes?: Shape[]) {
    shapes = shapes ?? this.editor.selection.getShapes();
    const clipboard = this.editor.clipboard;
    await clipboard.write({
      objs: shapes,
    });
    return shapes;
  }

  /**
   * Cut selected shapes
   * @param shapes - The shapes to cut. If not provided, the selected shapes will be cut
   */
  async cut(shapes?: Shape[]) {
    const doc = this.editor.getDoc();
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    const clipboard = this.editor.clipboard;
    await clipboard.write({
      objs: shapes,
    });
    this.editor.transform.startAction(ActionKind.CUT);
    this.editor.transform.transact((tx) => {
      deleteShapes(tx, doc, page, shapes!);
    });
    this.editor.transform.endAction();
    this.editor.selection.deselectAll();
    return shapes;
  }

  /**
   * Paste
   * @param page - The page to paste the shapes into. If not provided, the shapes will be pasted into the current page
   * @returns The pasted shapes
   */
  async paste(page?: Page): Promise<Shape[]> {
    const currentPage = page ?? this.editor.getCurrentPage();
    if (!(currentPage instanceof Page)) throw new Error("No page found");

    const canvas = this.editor.canvas;
    const clipboard = this.editor.clipboard;
    const data = await clipboard.read(outerRefMapExtractor);
    const center = this.editor.getCenter();

    // paste shapes from clipboard
    if (Array.isArray(data.objs)) {
      const shapes = data.objs as Shape[];
      const boundingRect = shapes
        .map((s) => (s as Shape).getBoundingRect())
        .reduce(geometry.unionRect);
      const w = geometry.width(boundingRect);
      const h = geometry.height(boundingRect);
      const dx = center[0] - (boundingRect[0][0] + w / 2);
      const dy = center[1] - (boundingRect[0][1] + h / 2);
      this.editor.transform.startAction(ActionKind.PASTE);
      this.editor.transform.transact((tx) => {
        shapes.toReversed().forEach((shape) => {
          tx.appendObj(shape);
          changeParent(tx, shape, currentPage);
        });
        moveShapes(tx, currentPage, shapes, dx, dy);
      });
      this.editor.transform.endAction();
      this.editor.selection.select(shapes);
      return shapes;
    }

    // paste image in clipboard
    if (data.image) {
      const shape = await this.editor.factory.createImage(data.image, center);
      this.editor.transform.startAction(ActionKind.PASTE);
      this.editor.transform.transact((tx) => {
        addShape(tx, shape, currentPage);
        resolveAllConstraints(tx, currentPage, canvas);
      });
      this.editor.transform.endAction();
      this.editor.selection.select([shape]);
      return [shape];
    }

    // paste text in clipboard
    if (data.text) {
      const shape = this.editor.factory.createText([center, center], data.text);
      this.editor.transform.startAction(ActionKind.PASTE);
      this.editor.transform.transact((tx) => {
        addShape(tx, shape, currentPage);
        resolveAllConstraints(tx, currentPage, canvas);
        if (shape.width > 600) {
          tx.assign(shape, "width", 600);
          tx.assign(shape, "wordWrap", true);
          resolveAllConstraints(tx, currentPage, canvas);
        }
      });
      this.editor.transform.endAction();
      this.editor.selection.select([shape]);
      return [shape];
    }

    return [];
  }

  /**
   * Duplicate shapes
   * @param shapes - The shapes to duplicate. If not provided, the selected shapes will be duplicated
   * @param dx - The horizontal distance to move the duplicated shapes
   * @param dy - The vertical distance to move the duplicated shapes
   * @param parent - The parent shape to insert the duplicated shapes into. If not provided, the duplicated shapes will be inserted into the current page
   */
  duplicate(
    shapes?: Shape[],
    dx: number = 30,
    dy: number = 30,
    parent?: Shape
  ): Shape[] {
    const canvas = this.editor.canvas;
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();

    // prevent inserting a shape into itself or its descendants
    const dsc = getAllDescendant(shapes);
    if (dsc.some((s) => s === parent)) {
      throw new Error("Cannot insert a shape into itself or its descendants");
    }

    // duplicate shapes
    const buffer: any[] = serialize(shapes);
    if (buffer.length > 0) {
      const copied = deserialize(
        this.editor.store,
        buffer,
        outerRefMapExtractor
      ) as Shape[];
      this.editor.transform.startAction(ActionKind.DUPLICATE);
      this.editor.transform.transact((tx) => {
        copied.toReversed().forEach((shape) => {
          tx.appendObj(shape);
          changeParent(tx, shape, parent ?? page);
        });
        moveShapes(tx, page, copied, dx, dy);
        resolveAllConstraints(tx, page, canvas);
      });
      this.editor.transform.endAction();
      this.editor.selection.select(copied);
      return copied;
    }
    return [];
  }

  /**
   * Move selected shapes
   * @param dx - The horizontal distance to move the shapes
   * @param dy - The vertical distance to move the shapes
   * @param shapes - The shapes to move. If not provided, the selected shapes will be moved
   * @returns The moved shapes
   */
  move(dx: number, dy: number, shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.MOVE);
      this.editor.transform.transact((tx) => {
        if (shapes.every((s) => s instanceof Box && s.anchored)) {
          for (let s of shapes!) {
            if (s instanceof Box && s.anchored) {
              const anchorPoint = geometry.getPointOnPath(
                (s.parent as Shape).getOutline() ?? [],
                s.anchorPosition
              );
              const shapeCenter = s.getCenter();
              shapeCenter[0] += dx;
              shapeCenter[1] += dy;
              const angle = geometry.angle(anchorPoint, shapeCenter);
              const length = Math.round(
                geometry.distance(shapeCenter, anchorPoint)
              );
              moveAnchor(tx, s, angle, length);
            }
          }
        } else {
          moveShapes(tx, page, shapes!, dx, dy);
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Group given shapes.
   * @param shapes - The shapes to group. If not provided, the selected shapes will be grouped
   * @param parent - The parent shape to insert the group into. If not provided, the group will be inserted into the current page
   * @returns The created group
   */
  group(shapes?: Shape[], parent?: Shape): Group | null {
    const doc = this.editor.getDoc();
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    let group: Group | null = null;
    this.editor.transform.startAction(ActionKind.GROUP);
    this.editor.transform.transact((tx) => {
      groupShapes(tx, doc, page, this.editor.canvas, shapes!, parent);
      group = tx.recentlyAppendedObj as Group;
      resolveAllConstraints(tx, page, this.editor.canvas);
    });
    this.editor.transform.endAction();
    if (group) {
      this.editor.selection.select([group]);
      return group;
    }
    return null;
  }

  /**
   * Ungroup given groups.
   * @param shapes - The shapes to ungroup. If not provided, the selected shapes will be ungrouped
   */
  ungroup(shapes?: Shape[]): void {
    const doc = this.editor.getDoc();
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.some((s) => s instanceof Group)) {
      const children = shapes
        .filter((s) => s instanceof Group)
        .flatMap((g) => g.children as Shape[]);
      this.editor.transform.startAction(ActionKind.UNGROUP);
      this.editor.transform.transact((tx) => {
        ungroupShapes(tx, doc, page, this.editor.canvas, shapes!);
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
      this.editor.selection.select(children);
    }
  }

  /**
   * Bring selected shapes to front
   * @param shapes - The shapes to bring to front. If not provided, the selected shapes will be brought to front
   * @returns The shapes that were brought to front
   */
  bringToFront(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.BRING_TO_FRONT);
      this.editor.transform.transact((tx) => {
        for (let s of shapes!) {
          bringToFront(tx, s);
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Send selected shapes to back
   * @param shapes - The shapes to send to back. If not provided, the selected shapes will be sent to back
   * @returns The shapes that were sent to back
   */
  sendToBack(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.SEND_TO_BACK);
      this.editor.transform.transact((tx) => {
        for (let s of shapes!) {
          sendToBack(tx, s);
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Bring selected shapes forward
   * @param shapes - The shapes to bring forward. If not provided, the selected shapes will be brought forward
   * @returns The shapes that were brought forward
   */
  bringForward(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.BRING_FORWARD);
      this.editor.transform.transact((tx) => {
        for (let s of shapes!) {
          bringForward(tx, s);
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Send selected shapes backward
   * @param shapes - The shapes to send backward. If not provided, the selected shapes will be sent backward
   * @returns The shapes that were sent backward
   */
  sendBackward(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.SEND_BACKWARD);
      this.editor.transform.transact((tx) => {
        for (let s of shapes!) {
          sendBackward(tx, s);
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Align selected shapes to left
   * @param shapes - The shapes to align. If not provided, the selected shapes will be aligned
   * @returns The shapes that were aligned
   */
  alignLeft(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.ALIGN_LEFT);
      this.editor.transform.transact((tx) => {
        const ls = shapes!.map((s) => s.getBoundingRect()[0][0]);
        const left = Math.min(...ls);
        for (const s of shapes!) {
          if (s instanceof Box) {
            const dx = left - s.left;
            moveShapes(tx, page, [s], dx, 0);
          } else if (s instanceof Path) {
            const dx = left - Math.min(...s.path.map((p) => p[0]));
            moveShapes(tx, page, [s], dx, 0);
          }
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Align selected shapes to right
   * @param shapes - The shapes to align. If not provided, the selected shapes will be aligned
   * @returns The shapes that were aligned
   */
  alignRight(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.ALIGN_RIGHT);
      this.editor.transform.transact((tx) => {
        const rs = shapes!.map((s) => s.getBoundingRect()[1][0]);
        const right = Math.max(...rs);
        for (const s of shapes!) {
          if (s instanceof Box) {
            const dx = right - s.right;
            moveShapes(tx, page, [s], dx, 0);
          } else if (s instanceof Path) {
            const dx = right - Math.max(...s.path.map((p) => p[0]));
            moveShapes(tx, page, [s], dx, 0);
          }
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Align selected shapes to horizontally center
   * @param shapes - The shapes to align. If not provided, the selected shapes will be aligned
   * @returns The shapes that were aligned
   */
  alignCenter(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.ALIGN_CENTER);
      this.editor.transform.transact((tx) => {
        const ls = shapes!.map((s) => s.getBoundingRect()[0][0]);
        const rs = shapes!.map((s) => s.getBoundingRect()[1][0]);
        const left = Math.min(...ls);
        const right = Math.max(...rs);
        const center = Math.round((left + right) / 2);
        for (const s of shapes!) {
          if (s instanceof Box) {
            const dx = center - Math.round((s.left + s.right) / 2);
            moveShapes(tx, page, [s], dx, 0);
          } else if (s instanceof Path) {
            const l = Math.min(...s.path.map((p) => p[0]));
            const r = Math.max(...s.path.map((p) => p[0]));
            const dx = center - Math.round((l + r) / 2);
            moveShapes(tx, page, [s], dx, 0);
          }
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Align selected shapes to top
   * @param shapes - The shapes to align. If not provided, the selected shapes will be aligned
   * @returns The shapes that were aligned
   */
  alignTop(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.ALIGN_TOP);
      this.editor.transform.transact((tx) => {
        const ts = shapes!.map((s) => s.getBoundingRect()[0][1]);
        const top = Math.min(...ts);
        for (const s of shapes!) {
          if (s instanceof Box) {
            const dy = top - s.top;
            moveShapes(tx, page, [s], 0, dy);
          } else if (s instanceof Path) {
            const dy = top - Math.min(...s.path.map((p) => p[1]));
            moveShapes(tx, page, [s], 0, dy);
          }
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Align selected shapes to bottom
   * @param shapes - The shapes to align. If not provided, the selected shapes will be aligned
   * @returns The shapes that were aligned
   */
  alignBottom(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.ALIGN_BOTTOM);
      this.editor.transform.transact((tx) => {
        const bs = shapes!.map((s) => s.getBoundingRect()[1][1]);
        const bottom = Math.max(...bs);
        for (const s of shapes!) {
          if (s instanceof Box) {
            const dy = bottom - s.bottom;
            moveShapes(tx, page, [s], 0, dy);
          } else if (s instanceof Path) {
            const dy = bottom - Math.max(...s.path.map((p) => p[1]));
            moveShapes(tx, page, [s], 0, dy);
          }
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Align selected shapes to vertically middle
   * @param shapes - The shapes to align. If not provided, the selected shapes will be aligned
   * @returns The shapes that were aligned
   */
  alignMiddle(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    if (shapes.length > 0) {
      this.editor.transform.startAction(ActionKind.ALIGN_MIDDLE);
      this.editor.transform.transact((tx) => {
        const ts = shapes!.map((s) => s.getBoundingRect()[0][1]);
        const bs = shapes!.map((s) => s.getBoundingRect()[1][1]);
        const top = Math.min(...ts);
        const bottom = Math.max(...bs);
        const middle = Math.round((top + bottom) / 2);
        for (const s of shapes!) {
          if (s instanceof Box) {
            const dy = middle - Math.round((s.top + s.bottom) / 2);
            moveShapes(tx, page, [s], 0, dy);
          } else if (s instanceof Path) {
            const t = Math.min(...s.path.map((p) => p[1]));
            const b = Math.max(...s.path.map((p) => p[1]));
            const dy = middle - Math.round((t + b) / 2);
            moveShapes(tx, page, [s], 0, dy);
          }
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Align selected shapes horizontally with space around
   * @param shapes - The shapes to align. If not provided, the selected shapes will be aligned
   * @returns The shapes that were aligned
   */
  alignHorizontalSpaceAround(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    const orderedShapes = shapes.sort(
      (a, b) => a.getBoundingRect()[0][0] - b.getBoundingRect()[0][0]
    );
    if (orderedShapes.length > 0) {
      const ls = orderedShapes!.map((s) => s.getBoundingRect()[0][0]);
      const rs = orderedShapes!.map((s) => s.getBoundingRect()[1][0]);
      const ws = orderedShapes!.map((s) => geometry.width(s.getBoundingRect()));
      const left = Math.min(...ls);
      const right = Math.max(...rs);
      const width = right - left;
      const sum = ws.reduce((a, b) => a + b, 0);
      const gap = (width - sum) / (orderedShapes.length - 1);
      this.editor.transform.startAction(ActionKind.DISTRIBUTE_HORIZONTALLY);
      this.editor.transform.transact((tx) => {
        let x = left;
        for (let i = 0; i < orderedShapes.length; i++) {
          const s = orderedShapes[i];
          if (s instanceof Box) {
            const dx = x - s.left;
            moveShapes(tx, page, [s], dx, 0);
          } else if (s instanceof Path) {
            const l = Math.min(...s.path.map((p) => p[0]));
            const dx = x - l;
            moveShapes(tx, page, [s], dx, 0);
          }
          x += ws[i] + gap;
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }

  /**
   * Align selected shapes vertically with space around
   * @param shapes - The shapes to align. If not provided, the selected shapes will be aligned
   * @returns The shapes that were aligned
   */
  alignVerticalSpaceAround(shapes?: Shape[]): Shape[] {
    const page = this.editor.getCurrentPage();
    if (!(page instanceof Page)) throw new Error("No page found");
    shapes = shapes ?? this.editor.selection.getShapes();
    const orderedShapes = shapes.sort(
      (a, b) => a.getBoundingRect()[0][1] - b.getBoundingRect()[0][1]
    );
    if (orderedShapes.length > 0) {
      const ts = orderedShapes!.map((s) => s.getBoundingRect()[0][1]);
      const bs = orderedShapes!.map((s) => s.getBoundingRect()[1][1]);
      const hs = orderedShapes!.map((s) =>
        geometry.height(s.getBoundingRect())
      );
      const top = Math.min(...ts);
      const bottom = Math.max(...bs);
      const height = bottom - top;
      const sum = hs.reduce((a, b) => a + b, 0);
      const gap = (height - sum) / (orderedShapes.length - 1);
      this.editor.transform.startAction(ActionKind.DISTRIBUTE_VERTICALLY);
      this.editor.transform.transact((tx) => {
        let y = top;
        for (let i = 0; i < orderedShapes.length; i++) {
          const s = orderedShapes[i];
          if (s instanceof Box) {
            const dy = y - s.top;
            moveShapes(tx, page, [s], 0, dy);
          } else if (s instanceof Path) {
            const t = Math.min(...s.path.map((p) => p[1]));
            const dy = y - t;
            moveShapes(tx, page, [s], 0, dy);
          }
          y += hs[i] + gap;
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
    return shapes;
  }
}
