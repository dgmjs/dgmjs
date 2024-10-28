import { unique } from "../std/lambda";
import { Connector, Doc, Mirror, Page, Shape } from "../shapes";
import { Canvas } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Store } from "../core";
import { deserialize, serialize } from "../core/serialize";
import { outerRefMapExtractor } from "../actions";

/**
 * Returns all descendants of the given set of objects including the given
 * set without any duplications.
 */
export function getAllDescendant(objs: Shape[]): Shape[] {
  const set = unique(objs);
  for (let obj of objs) {
    obj.traverse((c) => {
      if (!set.includes(c)) set.push(c);
    });
  }
  return set;
}

/**
 * Returns all connectors connected to the any of the set of objects
 */
export function getAllConnectorsTo(page: Page, objs: Shape[]): Shape[] {
  const edges: Shape[] = [];
  page?.traverse((o) => {
    if (
      o instanceof Connector &&
      (objs.includes(o.head as Shape) || objs.includes(o.tail as Shape))
    )
      edges.push(o);
  });
  return edges;
}

/**
 * Returns all shapes referencing to a shape of the given set of objects
 */
export function getAllReferers(doc: Doc, objs: Shape[]): Shape[] {
  const referers: Shape[] = [];
  doc.traverse((shape) => {
    if (shape instanceof Shape && objs.find((o) => shape.reference === o)) {
      referers.push(shape);
    }
  });
  return referers;
}

/**
 * Returns all mirrors of the given set of objects
 */
export function getAllMirrors(doc: Doc, objs: Shape[]): Mirror[] {
  const mirrors: Mirror[] = [];
  doc.traverse((shape) => {
    if (shape instanceof Mirror && objs.find((o) => shape.subject === o)) {
      mirrors.push(shape);
    }
  });
  return mirrors;
}

/**
 * Returns the viewport including all of given shapes
 */
export function getAllViewport(canvas: Canvas, shapes: Shape[]): number[][] {
  // get view rect including all shapes
  const allShapes = shapes.map((s) => s.traverseSequence() as Shape[]).flat();
  const rects = allShapes.map((s) => (s as Shape).getViewport(canvas));
  const box =
    rects.length > 0
      ? rects.reduce(geometry.unionRect)
      : [
          [0, 0],
          [0, 0],
        ];
  return box;
}

/**
 * Returns bounding rect of all of given shapes
 */
export function getAllBoundingRect(
  canvas: Canvas,
  shapes: Shape[]
): number[][] {
  return shapes.length > 0
    ? shapes
        .map((s) =>
          geometry.boundingRect(
            s.getOutline().map((p) => s.localCoordTransform(canvas, p, true))
          )
        )
        .reduce(geometry.unionRect)
    : [
        [0, 0],
        [0, 0],
      ];
}

/**
 * A function to duplicate an array of shapes
 */
export function duplicateShapes(store: Store, shapes: Shape[]): Shape[] | null {
  const buffer: any[] = serialize(shapes);
  if (buffer.length > 0) {
    const copied = deserialize(store, buffer, outerRefMapExtractor) as Shape[];
    return copied;
  }
  return null;
}
