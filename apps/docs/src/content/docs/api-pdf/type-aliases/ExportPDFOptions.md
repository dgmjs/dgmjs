---
editUrl: false
next: false
prev: false
title: "ExportPDFOptions"
---

> **ExportPDFOptions**: `object`

Export PDF options

## Type declaration

### bitmap?

> `optional` **bitmap**: `boolean`

Render page as bitmap image (default: false)

### bitmapScale?

> `optional` **bitmapScale**: `number`

The scale (quality) of the bitmap image (default: 1)

### compress?

> `optional` **compress**: `boolean`

Whether to compress the PDF

### createLinks?

> `optional` **createLinks**: `boolean`

Whether to create links for shape's link property

### createPageLinks?

> `optional` **createPageLinks**: `boolean`

Whether to create page links for shape's reference property

### dark?

> `optional` **dark**: `boolean`

Whether to export in dark mode

### excludePages?

> `optional` **excludePages**: `Page`[]

The pages to exclude

### fonts?

> `optional` **fonts**: [`PDFFont`](/api-pdf/type-aliases/pdffont/)[]

The fonts to be embedded

### pageFormat?

> `optional` **pageFormat**: [`PDFPageFormat`](/api-pdf/type-aliases/pdfpageformat/)

The format of the page

### pageMargin?

> `optional` **pageMargin**: `number`

The margin of the page

### pageOrientation?

> `optional` **pageOrientation**: [`PDFPageOrientation`](/api-pdf/type-aliases/pdfpageorientation/)

The orientation of the page

### postrenderPage()?

> `optional` **postrenderPage**: (`page`, `jsPDF`, `canvas`) => `void`

A function to be called after rendering each page

#### Parameters

• **page**: `Page`

• **jsPDF**: `jsPDF`

• **canvas**: `Canvas`

#### Returns

`void`

### prerenderPage()?

> `optional` **prerenderPage**: (`page`, `jsPDF`, `canvas`) => `void`

A function to be called before rendering each page

#### Parameters

• **page**: `Page`

• **jsPDF**: `jsPDF`

• **canvas**: `Canvas`

#### Returns

`void`

## Source

[index.ts:83](https://github.com/dgmjs/dgmjs/blob/main/packages/pdf/src/index.ts#L83)
