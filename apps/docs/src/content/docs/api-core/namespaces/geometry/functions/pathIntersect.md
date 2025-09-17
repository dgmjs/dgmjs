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

[packages/core/src/graphics/geometry.ts:543](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/geometry.ts#L543)
