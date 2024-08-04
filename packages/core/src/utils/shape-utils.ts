import { unique } from "../std/lambda";
import { Connector, Doc, Page, Shape } from "../shapes";
import { Canvas } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";

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
