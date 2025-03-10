---
editUrl: false
next: false
prev: false
title: "getImageDataUrl"
---

> **getImageDataUrl**(`canvas`, `page`, `shapes`, `options`): `Promise`\<`string`\>

Get Base64-encoded image data of the given page.

## Parameters

• **canvas**: `Canvas`

The editor's canvas

• **page**: `Page`

The page to draw.

• **shapes**: `Shape`[]

The shapes to draw in the page. If empty, render all shapes in the page.

• **options**: `Partial`\<[`ExportImageOptions`](/api-export/type-aliases/exportimageoptions/)\>

The options for drawing.

## Returns

`Promise`\<`string`\>

The Base64-encoded image data of the shapes.

## Source

[index.ts:88](https://github.com/dgmjs/dgmjs/blob/main/packages/export/src/index.ts#L88)
