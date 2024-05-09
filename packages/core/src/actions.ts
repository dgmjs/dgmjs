/*
 * Copyright (c) 2023 MKLabs. All rights reserved.
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

import type { Editor } from "./editor";
import {
  Box,
  Group,
  type Shape,
  Line,
  type ObjProps,
  Page,
  Doc,
} from "./shapes";
import * as geometry from "./graphics/geometry";
import { Obj, filterDescendants } from "./core/obj";
import { deserialize, serialize } from "./core/serialize";
import { extractTextFromShapes } from "./utils/text-utils";
import {
  addPage,
  addShape,
  bringForward,
  bringToFront,
  changeParent,
  deleteMultipleShapes,
  deleteShape,
  moveAnchor,
  moveMultipleShapes,
  removePage,
  reorderPage,
  resolveAllConstraints,
  sendBackward,
  sendToBack,
  setFontColor,
  setFontFamily,
  setFontSize,
  setHorzAlign,
} from "./macro";

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
   */
  addPage(position?: number): Page {
    position = position ?? this.editor.getPages().length;
    const page = new Page();
    page.name = `Page ${position + 1}`;
    this.editor.transform.startAction("add-page");
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
   */
  removePage(page: Page) {
    this.editor.transform.startAction("remove-page");
    this.editor.transform.transact((tx) => {
      removePage(tx, page);
    });
    this.editor.transform.endAction();
  }

  /**
   * Reorder a page
   */
  reorderPage(page: Page, position: number) {
    this.editor.transform.startAction("remove-page");
    this.editor.transform.transact((tx) => {
      reorderPage(tx, page, position);
    });
    this.editor.transform.endAction();
  }

  /**
   * Duplicate a page
   */
  duplicatePage(page: Page, position: number): Page {
    const buffer: any[] = serialize([page]);
    const copied = deserialize(
      this.editor.store.instantiator,
      buffer
    )[0] as Page;
    this.editor.transform.startAction("duplicate-page");
    this.editor.transform.transact((tx) => {
      addPage(tx, this.editor.getDoc(), copied);
      reorderPage(tx, copied, position);
    });
    this.editor.transform.endAction();
    this.editor.setCurrentPage(copied);
    return copied;
  }

  /**
   * Insert a shape into document or another shape
   */
  insert(shape: Shape, parent?: Shape) {
    const page = this.editor.currentPage;
    if (page) {
      this.editor.transform.startAction("insert");
      this.editor.transform.transact((tx) => {
        addShape(tx, shape, parent ?? page);
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
  }

  /**
   * Update obj properties
   */
  update(values: ObjProps, objs?: Obj[]) {
    const page = this.editor.currentPage;
    if (page) {
      this.editor.transform.startAction("update");
      this.editor.transform.transact((tx) => {
        objs = objs ?? this.editor.selection.getShapes();
        for (let key in values) {
          if (key === "horzAlign") {
            objs.forEach((s) => {
              if (s instanceof Box) setHorzAlign(tx, s, (values as any)[key]);
            });
          } else if (key === "fontSize") {
            objs.forEach((s) => {
              if (s instanceof Box) setFontSize(tx, s, (values as any)[key]);
            });
          } else if (key === "fontFamily") {
            objs.forEach((s) => {
              if (s instanceof Box) setFontFamily(tx, s, (values as any)[key]);
            });
          } else if (key === "fontColor") {
            objs.forEach((s) => {
              if (s instanceof Box) setFontColor(tx, s, (values as any)[key]);
            });
          } else {
            objs.forEach((s) => {
              tx.assign(s, key, (values as any)[key]);
            });
          }
        }
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
    }
  }

  /**
   * Remove selected shapes
   */
  remove(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      this.editor.transform.startAction("delete");
      this.editor.transform.transact((tx) => {
        shapes = shapes ?? this.editor.selection.getShapes();
        deleteMultipleShapes(tx, page, shapes);
        resolveAllConstraints(tx, page, this.editor.canvas);
      });
      this.editor.transform.endAction();
      this.editor.selection.deselectAll();
    }
  }

  /**
   * Copy selected shapes
   */
  async copy(shapes?: Shape[]) {
    shapes = shapes ?? this.editor.selection.getShapes();
    const clipboard = this.editor.clipboard;
    await clipboard.write({
      objs: shapes,
      text: extractTextFromShapes(shapes),
    });
  }

  /**
   * Cut selected shapes
   */
  async cut(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      const clipboard = this.editor.clipboard;
      await clipboard.write({
        objs: shapes,
        text: extractTextFromShapes(shapes),
      });
      this.editor.transform.startAction("cut");
      this.editor.transform.transact((tx) => {
        deleteMultipleShapes(tx, page, shapes!);
      });
      this.editor.transform.endAction();
      this.editor.selection.deselectAll();
    }
  }

  /**
   * Paste
   */
  async paste(page?: Page) {
    const currentPage = page ?? this.editor.currentPage;
    if (currentPage) {
      const canvas = this.editor.canvas;
      const clipboard = this.editor.clipboard;
      const data = await clipboard.read();
      const center = this.editor.getCenter();

      // paste shapes in clipboard
      if (Array.isArray(data.objs)) {
        const shapes = data.objs as Shape[];
        const boundingRect = shapes
          .map((s) => (s as Shape).getBoundingRect())
          .reduce(geometry.unionRect);
        const w = geometry.width(boundingRect);
        const h = geometry.height(boundingRect);
        const dx = center[0] - (boundingRect[0][0] + w / 2);
        const dy = center[1] - (boundingRect[0][1] + h / 2);
        this.editor.transform.startAction("paste");
        this.editor.transform.transact((tx) => {
          shapes.toReversed().forEach((shape) => {
            tx.appendObj(shape);
            changeParent(tx, shape, currentPage);
          });
          moveMultipleShapes(tx, currentPage, shapes, dx, dy);
        });
        this.editor.transform.endAction();
        this.editor.selection.select(shapes);
        return;
      }

      // paste image in clipboard
      if (data.image) {
        const shape = await this.editor.factory.createImage(data.image, center);
        this.editor.transform.startAction("paste");
        this.editor.transform.transact((tx) => {
          addShape(tx, shape, currentPage);
          resolveAllConstraints(tx, currentPage, canvas);
        });
        this.editor.transform.endAction();
        this.editor.selection.select([shape]);
        return;
      }

      // paste text in clipboard
      if (data.text) {
        const shape = this.editor.factory.createText(
          [center, center],
          data.text
        );
        this.editor.transform.startAction("paste");
        this.editor.transform.transact((tx) => {
          addShape(tx, shape, currentPage);
          resolveAllConstraints(tx, currentPage, canvas);
        });
        this.editor.transform.endAction();
        this.editor.selection.select([shape]);
        return;
      }
    }
  }

  /**
   * Duplicate shapes
   */
  duplicate(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      const buffer: any[] = serialize(shapes);
      if (buffer.length > 0) {
        const copied = deserialize(
          this.editor.store.instantiator,
          buffer
        ) as Shape[];
        this.editor.transform.startAction("duplicate");
        this.editor.transform.transact((tx) => {
          copied.toReversed().forEach((shape) => {
            tx.appendObj(shape);
            changeParent(tx, shape, page);
          });
          moveMultipleShapes(tx, page, copied, 30, 30);
        });
        this.editor.transform.endAction();
        this.editor.selection.select(copied);
      }
    }
  }

  /**
   * Move selected shapes
   */
  move(dx: number, dy: number, shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("move-right");
        this.editor.transform.transact((tx) => {
          if (shapes!.every((s) => s instanceof Box && s.anchored)) {
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
            moveMultipleShapes(tx, page, shapes!, dx, dy);
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }

  /**
   * Group selected shapes
   */
  group(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      const box = this.editor.selection.getBoundingRect(this.editor.canvas);
      let filtered = filterDescendants(shapes) as Shape[];
      if (filtered.length > 1) {
        const group = new Group();
        group.left = box[0][0];
        group.top = box[0][1];
        group.width = geometry.width(box);
        group.height = geometry.height(box);
        this.editor.transform.startAction("group");
        this.editor.transform.transact((tx) => {
          tx.appendObj(group);
          changeParent(tx, group, page);
          page
            ?.traverseSequence()
            .reverse()
            .forEach((s) => {
              if (filtered.includes(s as Shape)) {
                changeParent(tx, s, group);
              }
            });
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
        this.editor.selection.select([group]);
      }
    }
  }

  /**
   * Ungroup selected shapes
   */
  ungroup(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      const children: Shape[] = [];
      if (shapes.some((s) => s instanceof Group)) {
        this.editor.transform.startAction("ungroup");
        this.editor.transform.transact((tx) => {
          for (let s of shapes!) {
            if (s instanceof Group) {
              for (let i = s.children.length - 1; i >= 0; i--) {
                const child = s.children[i];
                children.push(child as Shape);
                changeParent(tx, child, s.parent as Shape);
              }
              deleteShape(tx, page, s);
            }
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
        this.editor.selection.select(children);
      }
    }
  }

  /**
   * Bring selected shapes to front
   */
  bringToFront(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("bring-to-front");
        this.editor.transform.transact((tx) => {
          for (let s of shapes!) {
            bringToFront(tx, s);
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }

  /**
   * Send selected shapes to back
   */
  sendToBack(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("send-to-back");
        this.editor.transform.transact((tx) => {
          for (let s of shapes!) {
            sendToBack(tx, s);
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }

  /**
   * Bring selected shapes forward
   */
  bringForward(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("bring-forward");
        this.editor.transform.transact((tx) => {
          for (let s of shapes!) {
            bringForward(tx, s);
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }

  /**
   * Send selected shapes backward
   */
  sendBackward(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("send-backward");
        this.editor.transform.transact((tx) => {
          for (let s of shapes!) {
            sendBackward(tx, s);
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }

  /**
   * Align selected shapes to left
   */
  alignLeft(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("align-left");
        this.editor.transform.transact((tx) => {
          const ls = shapes!.map((s) => s.getBoundingRect()[0][0]);
          const left = Math.min(...ls);
          for (const s of shapes!) {
            if (s instanceof Box) {
              const dx = left - s.left;
              moveMultipleShapes(tx, page, [s], dx, 0);
            } else if (s instanceof Line) {
              const dx = left - Math.min(...s.path.map((p) => p[0]));
              moveMultipleShapes(tx, page, [s], dx, 0);
            }
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }

  /**
   * Align selected shapes to right
   */
  alignRight(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("align-right");
        this.editor.transform.transact((tx) => {
          const rs = shapes!.map((s) => s.getBoundingRect()[1][0]);
          const right = Math.max(...rs);
          for (const s of shapes!) {
            if (s instanceof Box) {
              const dx = right - s.right;
              moveMultipleShapes(tx, page, [s], dx, 0);
            } else if (s instanceof Line) {
              const dx = right - Math.max(...s.path.map((p) => p[0]));
              moveMultipleShapes(tx, page, [s], dx, 0);
            }
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }

  /**
   * Align selected shapes to horizontally center
   */
  alignCenter(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("align-center");
        this.editor.transform.transact((tx) => {
          const ls = shapes!.map((s) => s.getBoundingRect()[0][0]);
          const rs = shapes!.map((s) => s.getBoundingRect()[1][0]);
          const left = Math.min(...ls);
          const right = Math.max(...rs);
          const center = Math.round((left + right) / 2);
          for (const s of shapes!) {
            if (s instanceof Box) {
              const dx = center - Math.round((s.left + s.right) / 2);
              moveMultipleShapes(tx, page, [s], dx, 0);
            } else if (s instanceof Line) {
              const l = Math.min(...s.path.map((p) => p[0]));
              const r = Math.max(...s.path.map((p) => p[0]));
              const dx = center - Math.round((l + r) / 2);
              moveMultipleShapes(tx, page, [s], dx, 0);
            }
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }

  /**
   * Align selected shapes to top
   */
  alignTop(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("align-top");
        this.editor.transform.transact((tx) => {
          const ts = shapes!.map((s) => s.getBoundingRect()[0][1]);
          const top = Math.min(...ts);
          for (const s of shapes!) {
            if (s instanceof Box) {
              const dy = top - s.top;
              moveMultipleShapes(tx, page, [s], 0, dy);
            } else if (s instanceof Line) {
              const dy = top - Math.min(...s.path.map((p) => p[1]));
              moveMultipleShapes(tx, page, [s], 0, dy);
            }
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }

  /**
   * Align selected shapes to bottom
   */
  alignBottom(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("align-bottom");
        this.editor.transform.transact((tx) => {
          const bs = shapes!.map((s) => s.getBoundingRect()[1][1]);
          const bottom = Math.max(...bs);
          for (const s of shapes!) {
            if (s instanceof Box) {
              const dy = bottom - s.bottom;
              moveMultipleShapes(tx, page, [s], 0, dy);
            } else if (s instanceof Line) {
              const dy = bottom - Math.max(...s.path.map((p) => p[1]));
              moveMultipleShapes(tx, page, [s], 0, dy);
            }
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }

  /**
   * Align selected shapes to vertically middle
   */
  alignMiddle(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      if (shapes.length > 0) {
        this.editor.transform.startAction("align-middle");
        this.editor.transform.transact((tx) => {
          const ts = shapes!.map((s) => s.getBoundingRect()[0][1]);
          const bs = shapes!.map((s) => s.getBoundingRect()[1][1]);
          const top = Math.min(...ts);
          const bottom = Math.max(...bs);
          const middle = Math.round((top + bottom) / 2);
          for (const s of shapes!) {
            if (s instanceof Box) {
              const dy = middle - Math.round((s.top + s.bottom) / 2);
              moveMultipleShapes(tx, page, [s], 0, dy);
            } else if (s instanceof Line) {
              const t = Math.min(...s.path.map((p) => p[1]));
              const b = Math.max(...s.path.map((p) => p[1]));
              const dy = middle - Math.round((t + b) / 2);
              moveMultipleShapes(tx, page, [s], 0, dy);
            }
          }
          resolveAllConstraints(tx, page, this.editor.canvas);
        });
        this.editor.transform.endAction();
      }
    }
  }
}
