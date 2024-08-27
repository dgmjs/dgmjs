---
editUrl: false
next: false
prev: false
title: "ShapeFactory"
---

Shape factory

## Constructors

### new ShapeFactory()

> **new ShapeFactory**(`editor`): [`ShapeFactory`](/api-core/classes/shapefactory/)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

[`ShapeFactory`](/api-core/classes/shapefactory/)

#### Source

[factory.ts:49](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L49)

## Properties

### onCreate

> **onCreate**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Shape`](/api-core/classes/shape/)\>

Event emitter for shape creation

#### Source

[factory.ts:42](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L42)

***

### onShapeInitialize

> **onShapeInitialize**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Shape`](/api-core/classes/shape/)\>

Event emitter for shape initialization

#### Source

[factory.ts:47](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L47)

## Methods

### createAnchoredText()

> **createAnchoredText**(`anchorPosition`, `initialText`): [`Text`](/api-core/classes/text/)

Create an anchored text

#### Parameters

• **anchorPosition**: `number`

• **initialText**: `string`= `""`

#### Returns

[`Text`](/api-core/classes/text/)

#### Source

[factory.ts:127](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L127)

***

### createConnector()

> **createConnector**(`tail`, `tailAnchor`, `head`, `headAnchor`, `points`): [`Connector`](/api-core/classes/connector/)

Create a connector

#### Parameters

• **tail**: `null` \| [`Shape`](/api-core/classes/shape/)

• **tailAnchor**: `number`[]

• **head**: `null` \| [`Shape`](/api-core/classes/shape/)

• **headAnchor**: `number`[]

• **points**: `number`[][]

#### Returns

[`Connector`](/api-core/classes/connector/)

#### Source

[factory.ts:196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L196)

***

### createEllipse()

> **createEllipse**(`rect`): [`Ellipse`](/api-core/classes/ellipse/)

Create an ellipse

#### Parameters

• **rect**: `number`[][]

#### Returns

[`Ellipse`](/api-core/classes/ellipse/)

#### Source

[factory.ts:84](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L84)

***

### createEmbed()

> **createEmbed**(`rect`): [`Embed`](/api-core/classes/embed/)

Create an embed

#### Parameters

• **rect**: `number`[][]

#### Returns

[`Embed`](/api-core/classes/embed/)

#### Source

[factory.ts:330](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L330)

***

### createFrame()

> **createFrame**(`rect`): [`Frame`](/api-core/classes/frame/)

Create a frame

#### Parameters

• **rect**: `number`[][]

#### Returns

[`Frame`](/api-core/classes/frame/)

#### Source

[factory.ts:285](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L285)

***

### createFreehand()

> **createFreehand**(`points`, `closed`): [`Freehand`](/api-core/classes/freehand/)

Create a freehand lines

#### Parameters

• **points**: `number`[][]

• **closed**: `boolean`= `false`

#### Returns

[`Freehand`](/api-core/classes/freehand/)

#### Source

[factory.ts:223](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L223)

***

### createHighlighter()

> **createHighlighter**(`points`): [`Highlighter`](/api-core/classes/highlighter/)

Create a freehand lines

#### Parameters

• **points**: `number`[][]

#### Returns

[`Highlighter`](/api-core/classes/highlighter/)

#### Source

[factory.ts:244](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L244)

***

### createIcon()

> **createIcon**(`rect`, `viewWidth`, `viewHeight`, `data`): [`Icon`](/api-core/classes/icon/)

#### Parameters

• **rect**: `number`[][]

• **viewWidth**: `number`

• **viewHeight**: `number`

• **data**: `VGElement`[]

#### Returns

[`Icon`](/api-core/classes/icon/)

#### Source

[factory.ts:264](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L264)

***

### createImage()

> **createImage**(`fileOrBlob`, `position`): `Promise`\<[`Image`](/api-core/classes/image/)\>

Create an image

#### Parameters

• **fileOrBlob**: `Blob` \| `File`

• **position**: `number`[]

#### Returns

`Promise`\<[`Image`](/api-core/classes/image/)\>

#### Source

[factory.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L150)

***

### createLine()

> **createLine**(`points`, `closed`): [`Line`](/api-core/classes/line/)

create a line (or polygon)

#### Parameters

• **points**: `number`[][]

• **closed**: `boolean`= `false`

#### Returns

[`Line`](/api-core/classes/line/)

#### Source

[factory.ts:177](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L177)

***

### createMirror()

> **createMirror**(`rect`, `subject`?): [`Mirror`](/api-core/classes/mirror/)

Create a mirror

#### Parameters

• **rect**: `number`[][]

• **subject?**: [`Shape`](/api-core/classes/shape/)

#### Returns

[`Mirror`](/api-core/classes/mirror/)

#### Source

[factory.ts:307](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L307)

***

### createRectangle()

> **createRectangle**(`rect`): [`Rectangle`](/api-core/classes/rectangle/)

Create a rectangle

#### Parameters

• **rect**: `number`[][]

#### Returns

[`Rectangle`](/api-core/classes/rectangle/)

#### Source

[factory.ts:67](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L67)

***

### createText()

> **createText**(`rect`, `initialText`): [`Text`](/api-core/classes/text/)

Create a text

#### Parameters

• **rect**: `number`[][]

• **initialText**: `string`= `""`

#### Returns

[`Text`](/api-core/classes/text/)

#### Source

[factory.ts:101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L101)
