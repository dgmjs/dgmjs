---
editUrl: false
next: false
prev: false
title: "ExportImageOptions"
---

> **ExportImageOptions**: `object`

## Type declaration

### dark

> **dark**: `boolean`

### fillBackground

> **fillBackground**: `boolean`

### format

> **format**: [`ExportImageFormat`](/api-export/type-aliases/exportimageformat/)

### margin

> **margin**: `number`

### postrender()?

> `optional` **postrender**: (`canvas`, `width`, `height`, `options`) => `void`

#### Parameters

• **canvas**: `Canvas`

• **width**: `number`

• **height**: `number`

• **options**: `Partial`\<[`ExportImageOptions`](/api-export/type-aliases/exportimageoptions/)\>

#### Returns

`void`

### prerender()?

> `optional` **prerender**: (`canvas`, `width`, `height`, `options`) => `void`

#### Parameters

• **canvas**: `Canvas`

• **width**: `number`

• **height**: `number`

• **options**: `Partial`\<[`ExportImageOptions`](/api-export/type-aliases/exportimageoptions/)\>

#### Returns

`void`

### scale

> **scale**: `number`

## Source

[index.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/export/src/index.ts#L16)
