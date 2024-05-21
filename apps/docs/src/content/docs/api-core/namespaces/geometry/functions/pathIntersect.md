---
editUrl: false
next: false
prev: false
title: "pathIntersect"
---

> **pathIntersect**(`path`, `line`, `infiniteBackward`, `infiniteForward`, `closeToStart`): `number`[] \| `null`

Get intersection point between a infinite line and a path

## Parameters

• **path**: `number`[][]

• **line**: `number`[][]

• **infiniteBackward**: `boolean`= `true`

line is infinite to backward

• **infiniteForward**: `boolean`= `true`

line is infinite to forward

• **closeToStart**: `boolean`= `true`

return closest point to line[0] if true or line[1] if false

## Returns

`number`[] \| `null`

Returns a intersection point or null

## Source

[graphics/geometry.ts:537](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/graphics/geometry.ts#L537)
