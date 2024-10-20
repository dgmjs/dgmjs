---
editUrl: false
next: false
prev: false
title: "intersect"
---

> **intersect**(`line1`, `line2`, `lb1`, `lf1`, `lb2`, `lf2`): `number`[] \| `null`

Returns an intersect point of two finite lines
Ref: https://jsfiddle.net/justin_c_rounds/Gd2S2/light/

## Parameters

• **line1**: `number`[][]

• **line2**: `number`[][]

• **lb1**: `boolean`= `false`

line1 is infinite to backward

• **lf1**: `boolean`= `false`

line1 is infinite to forward

• **lb2**: `boolean`= `false`

line2 is infinite to backward

• **lf2**: `boolean`= `false`

line2 is infinite to forward

## Returns

`number`[] \| `null`

null if not intersect

## Source

[graphics/geometry.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/geometry.ts#L205)
