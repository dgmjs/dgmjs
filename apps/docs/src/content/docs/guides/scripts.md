---
title: Scripts
description: scripts
---

User can redefine of shape's default behaviors including rendering, outlining and defining connection points. The followings are supported script types of a shape:

- `render`
- `outline`
- `connection-points`

## render

The script bound to `render` should code how to draw the shape. The below code is to draw a triagle inside a box.

```clojure title="render (triangle)"
(do
  (def! l (. shape :left))
  (def! r (. shape :right))
  (def! t (. shape :top))
  (def! b (. shape :bottom))
  (def! xc (/ (+ l r) 2))
  (. canvas :polygon [[xc t] [r b] [l b]])
  (. shape :renderText canvas))
```

You can use the shape's default rendering behavor. The below code is draw the cross mark over the rectangle's default rendering.

```clojure title="render (cross box)"
(do
  (def! l (. shape :left))
  (def! r (. shape :right))
  (def! t (. shape :top))
  (def! b (. shape :bottom))
  (. shape :renderDefault canvas)
  (. canvas :line l t r b)
  (. canvas :line r t l b))
```

## outline

The script bound to `outline` should express a vector of points that constitutes the outline of the shape. The below is to define the outline of a triangle.

```clojure title="outline (triangle)"
(do
  (def! l (. shape :left))
  (def! r (. shape :right))
  (def! t (. shape :top))
  (def! b (. shape :bottom))
  (def! xc (/ (+ l r) 2))
  [[xc t] [r b] [l b] [xc t]])
```

## connection-points

The script bound to `connection-points` should express a vector of points that constitutes the connection points of the shape. The below code is to define three connection points on each vertex of a triangle.

```clojure title="connection-points (triangle)"
(do
  (def! l (. shape :left))
  (def! r (. shape :right))
  (def! t (. shape :top))
  (def! b (. shape :bottom))
  (def! xc (/ (+ l r) 2))
  [[xc t] [r b] [l b]])
```
