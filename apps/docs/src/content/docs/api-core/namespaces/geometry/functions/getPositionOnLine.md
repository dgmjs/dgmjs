---
editUrl: false
next: false
prev: false
title: "getPositionOnLine"
---

> **getPositionOnLine**(`linepoint1`, `linepoint2`, `point`): `number`

Get position value of the given point on the given line.
It assumes that the point is on the line.
Returns 0 if the point is same with the start point of the line,
and returns 1 if the point is same with the end point of the line.

## Parameters

• **linepoint1**: `number`[]

• **linepoint2**: `number`[]

• **point**: `number`[]

## Returns

`number`

## Source

[graphics/geometry.ts:824](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/geometry.ts#L824)
