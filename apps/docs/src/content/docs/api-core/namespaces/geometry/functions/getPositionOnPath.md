---
editUrl: false
next: false
prev: false
title: "getPositionOnPath"
---

> **getPositionOnPath**(`path`, `point`, `dist`): `number`

Get position value of the given point on the given path.
It assumes that the point is on the path.
Returns 0 if the point is same with the start point of the path,
and returns 1 if the point is same with the end point of the path.

## Parameters

• **path**: `number`[][]

• **point**: `number`[]

• **dist**: `number`= `1`

distance value to find nearest segment

## Returns

`number`

## Source

[graphics/geometry.ts:858](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/geometry.ts#L858)
