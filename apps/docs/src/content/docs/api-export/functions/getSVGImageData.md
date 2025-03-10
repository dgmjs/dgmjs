---
editUrl: false
next: false
prev: false
title: "getSVGImageData"
---

> **getSVGImageData**(`canvas`, `page`, `shapes`, `options`, `styleInSVG`?): `Promise`\<`string`\>

Get SVG image data of the given shapes.

## Parameters

• **canvas**: `Canvas`

The editor's canvas

• **page**: `Page`

The page to draw.

• **shapes**: `Shape`[]

The shapes to draw in the page. If empty, render all shapes in the page.

• **options**: `Partial`\<[`ExportImageOptions`](/api-export/type-aliases/exportimageoptions/)\>

The options for drawing.

• **styleInSVG?**: `string`

The style to be included in the SVG data.

## Returns

`Promise`\<`string`\>

The SVG image data of the shapes.

## Source

[index.ts:143](https://github.com/dgmjs/dgmjs/blob/main/packages/export/src/index.ts#L143)
