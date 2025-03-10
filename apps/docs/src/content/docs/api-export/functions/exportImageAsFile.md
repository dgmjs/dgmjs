---
editUrl: false
next: false
prev: false
title: "exportImageAsFile"
---

> **exportImageAsFile**(`canvas`, `page`, `shapes`, `fileName`, `options`, `styleInSVG`?): `Promise`\<`void`\>

Export the image of the given shapes to a file

## Parameters

• **canvas**: `Canvas`

The editor's canvas

• **page**: `Page`

The page to draw.

• **shapes**: `Shape`[]

The shapes to draw in the page. If empty, render all shapes in the page.

• **fileName**: `string`

The name of the file to save.

• **options**: `Partial`\<[`ExportImageOptions`](/api-export/type-aliases/exportimageoptions/)\>

The options for drawing.

• **styleInSVG?**: `string`

The style to be included in the SVG data.

## Returns

`Promise`\<`void`\>

## Source

[index.ts:222](https://github.com/dgmjs/dgmjs/blob/main/packages/export/src/index.ts#L222)
