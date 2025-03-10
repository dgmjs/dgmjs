---
editUrl: false
next: false
prev: false
title: "getImageBlob"
---

> **getImageBlob**(`canvas`, `page`, `shapes`, `options`): `Promise`\<`Blob` \| `null`\>

Get the blob image data of the given shapes.

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

`Promise`\<`Blob` \| `null`\>

The blob image data of the shapes.

## Source

[index.ts:113](https://github.com/dgmjs/dgmjs/blob/main/packages/export/src/index.ts#L113)
