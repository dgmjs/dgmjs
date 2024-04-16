---
title: "Script Objects"
description: ...
---

In script, you can use the following accessible objects:

- [`shape`](#shape)
- [`canvas`](#canvas)

## Shape

The `shape` object is the shape object where the script code is attached.

The below is the available variables and functions in `shape` object.

```clojure
(. shape :id)
(. shape :type)
(. shape :name)
(. shape :description)
(. shape :proto)
(. shape :tags)
(. shape :enable)
(. shape :visible)
(. shape :movable)
(. shape :sizable)
(. shape :rotatable)
(. shape :containable)
(. shape :containableFilter)
(. shape :connectable)
(. shape :left)
(. shape :top)
(. shape :right)
(. shape :bottom)
(. shape :width)
(. shape :height)
(. shape :rotate)
(. shape :strokeColor)
(. shape :strokeWidth)
(. shape :strokePattern)
(. shape :fillColor)
(. shape :fillStyle)
(. shape :fontColor)
(. shape :fontFamily)
(. shape :fontSize)
(. shape :fontStyle)
(. shape :fontWeight)
(. shape :opacity)
(. shape :roughness)
(. shape :constraints)
(. shape :properties)
(. shape :scripts)
```

```clojure
(. shape :renderDefault canvas)
(. shape :renderText canvas)
(. shape :getCenter)
(. shape :getOutlineDefault)
(. shape :getConnectionPointsDefault)
(. shape :getBoundingRect)
```

## Canvas

The below is the available functions in `canvas` object.

```clojure
(. canvas :line x1 y1 x2 y2)
(. canvas :strokeRect x1 y1 x2 y2)
(. canvas :fillRect x1 y1 x2 y2)
(. canvas :rect x1 y1 x2 y2)
(. canvas :strokeRoundRect x1 y1 x2 y2 radius)
(. canvas :fillRoundRect x1 y1 x2 y2 radius)
(. canvas :roundRect x1 y1 x2 y2 radius)
(. canvas :strokeEllipse x1 y1 x2 y2)
(. canvas :fillEllipse x1 y1 x2 y2)
(. canvas :ellipse x1 y1 x2 y2)
(. canvas :polyline path)
(. canvas :strokeCurve path)
(. canvas :fillCurve path)
(. canvas :curve path)
(. canvas :strokePolygon path)
(. canvas :fillPolygon path)
(. canvas :polygon path)
(. canvas :strokeArc x y r startAngle endAngle)
(. canvas :fillArc x y r startAngle endAngle)
(. canvas :arc x y r startAngle endAngle)
(. canvas :fillText x y text)
(. canvas :textMetric text)
```
