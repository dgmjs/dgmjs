---
editUrl: false
next: false
prev: false
title: "copyToClipboard"
---

> **copyToClipboard**(`canvas`, `page`, `shapes`, `options`): `Promise`\<`void`\>

Copy page image of the given shapes to clipboard

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

`Promise`\<`void`\>

## Source

[index.ts:265](https://github.com/dgmjs/dgmjs/blob/main/packages/export/src/index.ts#L265)
