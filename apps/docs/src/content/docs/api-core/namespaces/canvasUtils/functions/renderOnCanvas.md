---
editUrl: false
next: false
prev: false
title: "renderOnCanvas"
---

> **renderOnCanvas**(`shapes`, `canvasElement`, `darkMode`, `pageSize`, `maxCanvasSize`, `maxScale`, `scaleAdjust`, `updateDOM`): `void`

Render the shape on the canvas element

## Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

An array of shapes

• **canvasElement**: `HTMLCanvasElement`

A <canvas> HTML element

• **darkMode**: `boolean`= `false`

A boolean value to indicate dark mode

• **pageSize**: [`PageSize`](/api-core/type-aliases/pagesize/)= `undefined`

• **maxCanvasSize**: `number`[]= `undefined`

A number to indicate the maximum size of the canvas

• **maxScale**: `number`= `1`

• **scaleAdjust**: `number`= `1`

A number to adjust the scale

• **updateDOM**: `boolean`= `false`

## Returns

`void`

## Source

[utils/canvas-utils.ts:14](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/utils/canvas-utils.ts#L14)
