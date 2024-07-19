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

[factory.ts:46](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L46)

## Properties

### onCreate

> **onCreate**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Shape`](/api-core/classes/shape/)\>

Event emitter for shape creation

#### Source

[factory.ts:39](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L39)

***

### onShapeInitialize

> **onShapeInitialize**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Shape`](/api-core/classes/shape/)\>

Event emitter for shape initialization

#### Source

[factory.ts:44](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L44)

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

[factory.ts:124](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L124)

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

[factory.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L193)

***

### createEllipse()

> **createEllipse**(`rect`): [`Ellipse`](/api-core/classes/ellipse/)

Create an ellipse

#### Parameters

• **rect**: `number`[][]

#### Returns

[`Ellipse`](/api-core/classes/ellipse/)

#### Source

[factory.ts:81](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L81)

***

### createEmbed()

> **createEmbed**(`rect`): [`Embed`](/api-core/classes/embed/)

Create an embed

#### Parameters

• **rect**: `number`[][]

#### Returns

[`Embed`](/api-core/classes/embed/)

#### Source

[factory.ts:286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L286)

***

### createFrame()

> **createFrame**(`rect`): [`Frame`](/api-core/classes/frame/)

Create a frame

#### Parameters

• **rect**: `number`[][]

#### Returns

[`Frame`](/api-core/classes/frame/)

#### Source

[factory.ts:264](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L264)

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

[factory.ts:220](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L220)

***

### createHighlighter()

> **createHighlighter**(`points`): [`Highlighter`](/api-core/classes/highlighter/)

Create a freehand lines

#### Parameters

• **points**: `number`[][]

#### Returns

[`Highlighter`](/api-core/classes/highlighter/)

#### Source

[factory.ts:241](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L241)

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

[factory.ts:147](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L147)

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

[factory.ts:174](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L174)

***

### createRectangle()

> **createRectangle**(`rect`): [`Rectangle`](/api-core/classes/rectangle/)

Create a rectangle

#### Parameters

• **rect**: `number`[][]

#### Returns

[`Rectangle`](/api-core/classes/rectangle/)

#### Source

[factory.ts:64](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L64)

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

[factory.ts:98](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/factory.ts#L98)
