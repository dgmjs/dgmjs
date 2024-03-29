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
import { Box, Group, type Shape, Line, type ShapeValues, Page } from "./shapes";
import * as geometry from "./graphics/geometry";

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
  addPage(): Page {
    const page = new Page();
    page.name = `Page ${this.editor.store.doc!.children.length + 1}`;
    const tr = this.editor.transform;
    tr.startTransaction("add-page");
    tr.addPage(page);
    tr.resolveAllConstraints(page, this.editor.canvas);
    tr.endTransaction();
    return page;
  }

  /**
   * Remove a page
   */
  removePage(page: Page) {
    const tr = this.editor.transform;
    tr.startTransaction("remove-page");
    tr.removePage(page);
    tr.endTransaction();
  }

  /**
   * Reorder a page
   */
  reorderPage(page: Page, position: number) {
    const tr = this.editor.transform;
    tr.startTransaction("remove-page");
    tr.reorderPage(page, position);
    tr.endTransaction();
  }

  /**
   * Duplicate a page
   */
  duplcatePage(page: Page, position: number) {
    const clipboard = this.editor.clipboard;
    const buffer: any[] = [];
    clipboard.putObjects([page], buffer);
    if (buffer.length > 0) {
      const copied = clipboard.getObjects(buffer)[0] as Page;
      const tr = this.editor.transform;
      tr.startTransaction("duplicate-page");
      tr.addPage(copied);
      tr.reorderPage(copied, position);
      tr.endTransaction();
      this.editor.setCurrentPage(copied);
    }
  }

  /**
   * Insert a shape into document or another shape
   */
  insert(shape: Shape, parent?: Shape) {
    const page = this.editor.currentPage;
    if (page) {
      const tr = this.editor.transform;
      tr.startTransaction("insert");
      tr.addShape(shape, parent ?? page);
      tr.resolveAllConstraints(page, this.editor.canvas);
      tr.endTransaction();
    }
  }

  /**
   * Update shape properties
   */
  update(values: ShapeValues, shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      const tr = this.editor.transform;
      tr.startTransaction("update");
      for (let key in values) {
        if (key === "richText") {
          shapes.forEach((s) => {
            if (s instanceof Box) tr.setRichText(s, (values as any)[key]);
          });
        } else if (key === "horzAlign") {
          shapes.forEach((s) => {
            if (s instanceof Box) tr.setHorzAlign(s, (values as any)[key]);
          });
        } else if (key === "fontSize") {
          shapes.forEach((s) => {
            if (s instanceof Box) tr.setFontSize(s, (values as any)[key]);
          });
        } else if (key === "fontFamily") {
          shapes.forEach((s) => {
            if (s instanceof Box) tr.setFontFamily(s, (values as any)[key]);
          });
        } else if (key === "fontColor") {
          shapes.forEach((s) => {
            if (s instanceof Box) tr.setFontColor(s, (values as any)[key]);
          });
        } else {
          shapes.forEach((s) => {
            tr.atomicAssign(s, key, (values as any)[key]);
          });
        }
      }
      tr.resolveAllConstraints(page, this.editor.canvas);
      tr.endTransaction();
    }
  }

  /**
   * Delete selected shapes
   */
  delete_(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      const tr = this.editor.transform;
      tr.startTransaction("delete");
      tr.deleteShapes(page, shapes);
      tr.resolveAllConstraints(page, this.editor.canvas);
      tr.endTransaction();
      this.editor.selection.deselectAll();
    }
  }

  /**
   * Copy selected shapes
   */
  copy(shapes?: Shape[]) {
    shapes = shapes ?? this.editor.selection.getShapes();
    const clipboard = this.editor.clipboard;
    clipboard.clearBuffer();
    clipboard.putObjects(shapes, clipboard.buffer);
  }

  /**
   * Cut selected shapes
   */
  cut(shapes?: Shape[]) {
    const page = this.editor.currentPage;
    if (page) {
      shapes = shapes ?? this.editor.selection.getShapes();
      const tr = this.editor.transform;
      const clipboard = this.editor.clipboard;
      clipboard.clearBuffer();
      clipboard.putObjects(shapes, clipboard.buffer);
      tr.startTransaction("cut");
      tr.deleteShapes(page, shapes);
      tr.endTransaction();
      this.editor.selection.deselectAll();
    }
  }

  /**
   * Paste
   */
  paste(page?: Page) {
    const currentPage = page ?? this.editor.currentPage;
    if (currentPage) {
      const clipboard = this.editor.clipboard;
      const tr = this.editor.transform;
      const center = this.editor.getCenter();
      if (clipboard.hasObjects()) {
        const shapes = clipboard.getObjects(clipboard.buffer) as Shape[];
        const boundingRect = shapes
          .map((s) => (s as Shape).getBoundingRect())
          .reduce(geometry.unionRect);
        const w = geometry.width(boundingRect);
        const h = geometry.height(boundingRect);
        const dx = center[0] - (boundingRect[0][0] + w / 2);
        const dy = center[1] - (boundingRect[0][1] + h / 2);
        tr.startTransaction("paste");
        shapes.toReversed().forEach((shape) => {
          tr.atomicInsert(shape);
          tr.changeParent(shape, currentPage);
        });
        tr.moveShapes(currentPage, shapes, dx, dy);
        tr.endTransaction();
        this.editor.selection.select(shapes);
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
      const tr = this.editor.transform;
      const clipboard = this.editor.clipboard;
      const buffer: any[] = [];
      clipboard.putObjects(shapes, buffer);
      if (buffer.length > 0) {
        const copied = clipboard.getObjects(buffer) as Shape[];
        tr.startTransaction("duplicate");
        copied.toReversed().forEach((shape) => {
          tr.atomicInsert(shape);
          tr.changeParent(shape, page);
        });
        tr.moveShapes(page, copied, 30, 30);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("move-right");
        if (shapes.every((s) => s instanceof Box && s.anchored)) {
          for (let s of shapes) {
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
              tr.moveAnchor(s, angle, length);
            }
          }
        } else {
          tr.moveShapes(page, shapes, dx, dy);
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
      // filter all descendants of one of grouping shapes
      let filteredShapes: Shape[] = [];
      for (let s of shapes) {
        if (!shapes.some((s) => s.isDescendant(s))) filteredShapes.push(s);
      }
      if (filteredShapes.length > 1) {
        const tr = this.editor.transform;
        const group = new Group();
        group.left = box[0][0];
        group.top = box[0][1];
        group.width = geometry.width(box);
        group.height = geometry.height(box);
        tr.startTransaction("group");
        tr.atomicInsert(group);
        tr.changeParent(group, page);
        page
          ?.traverseSequence()
          .reverse()
          .forEach((s) => {
            if (filteredShapes.includes(s as Shape)) {
              tr.changeParent(s, group);
            }
          });
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("ungroup");
        for (let s of shapes) {
          if (s instanceof Group) {
            for (let i = s.children.length - 1; i >= 0; i--) {
              const child = s.children[i];
              children.push(child as Shape);
              tr.changeParent(child, s.parent as Shape);
            }
            tr.deleteSingleShape(page, s);
          }
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("bring-to-front");
        for (let s of shapes) {
          tr.bringToFront(s);
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("send-to-back");
        for (let s of shapes) {
          tr.sendToBack(s);
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("bring-forward");
        for (let s of shapes) {
          tr.bringForward(s);
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("send-backward");
        for (let s of shapes) {
          tr.sendBackward(s);
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("align-left");
        const ls = shapes.map((s) => s.getBoundingRect()[0][0]);
        const left = Math.min(...ls);
        for (const s of shapes) {
          if (s instanceof Box) {
            const dx = left - s.left;
            tr.moveShapes(page, [s], dx, 0);
          } else if (s instanceof Line) {
            const dx = left - Math.min(...s.path.map((p) => p[0]));
            tr.moveShapes(page, [s], dx, 0);
          }
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("align-right");
        const rs = shapes.map((s) => s.getBoundingRect()[1][0]);
        const right = Math.max(...rs);
        for (const s of shapes) {
          if (s instanceof Box) {
            const dx = right - s.right;
            tr.moveShapes(page, [s], dx, 0);
          } else if (s instanceof Line) {
            const dx = right - Math.max(...s.path.map((p) => p[0]));
            tr.moveShapes(page, [s], dx, 0);
          }
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("align-center");
        const ls = shapes.map((s) => s.getBoundingRect()[0][0]);
        const rs = shapes.map((s) => s.getBoundingRect()[1][0]);
        const left = Math.min(...ls);
        const right = Math.max(...rs);
        const center = Math.round((left + right) / 2);
        for (const s of shapes) {
          if (s instanceof Box) {
            const dx = center - Math.round((s.left + s.right) / 2);
            tr.moveShapes(page, [s], dx, 0);
          } else if (s instanceof Line) {
            const l = Math.min(...s.path.map((p) => p[0]));
            const r = Math.max(...s.path.map((p) => p[0]));
            const dx = center - Math.round((l + r) / 2);
            tr.moveShapes(page, [s], dx, 0);
          }
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("align-top");
        const ts = shapes.map((s) => s.getBoundingRect()[0][1]);
        const top = Math.min(...ts);
        for (const s of shapes) {
          if (s instanceof Box) {
            const dy = top - s.top;
            tr.moveShapes(page, [s], 0, dy);
          } else if (s instanceof Line) {
            const dy = top - Math.min(...s.path.map((p) => p[1]));
            tr.moveShapes(page, [s], 0, dy);
          }
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("align-bottom");
        const bs = shapes.map((s) => s.getBoundingRect()[1][1]);
        const bottom = Math.max(...bs);
        for (const s of shapes) {
          if (s instanceof Box) {
            const dy = bottom - s.bottom;
            tr.moveShapes(page, [s], 0, dy);
          } else if (s instanceof Line) {
            const dy = bottom - Math.max(...s.path.map((p) => p[1]));
            tr.moveShapes(page, [s], 0, dy);
          }
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
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
        const tr = this.editor.transform;
        tr.startTransaction("align-middle");
        const ts = shapes.map((s) => s.getBoundingRect()[0][1]);
        const bs = shapes.map((s) => s.getBoundingRect()[1][1]);
        const top = Math.min(...ts);
        const bottom = Math.max(...bs);
        const middle = Math.round((top + bottom) / 2);
        for (const s of shapes) {
          if (s instanceof Box) {
            const dy = middle - Math.round((s.top + s.bottom) / 2);
            tr.moveShapes(page, [s], 0, dy);
          } else if (s instanceof Line) {
            const t = Math.min(...s.path.map((p) => p[1]));
            const b = Math.max(...s.path.map((p) => p[1]));
            const dy = middle - Math.round((t + b) / 2);
            tr.moveShapes(page, [s], 0, dy);
          }
        }
        tr.resolveAllConstraints(page, this.editor.canvas);
        tr.endTransaction();
      }
    }
  }
}
