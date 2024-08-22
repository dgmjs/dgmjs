---
editUrl: false
next: false
prev: false
title: "Handler"
---

Handler

## Extended by

- [`HandHandler`](/api-core/namespaces/handlers/classes/handhandler/)
- [`SelectHandler`](/api-core/namespaces/handlers/classes/selecthandler/)
- [`EraserHandler`](/api-core/namespaces/handlers/classes/eraserhandler/)
- [`RectangleFactoryHandler`](/api-core/namespaces/handlers/classes/rectanglefactoryhandler/)
- [`EllipseFactoryHandler`](/api-core/namespaces/handlers/classes/ellipsefactoryhandler/)
- [`TextFactoryHandler`](/api-core/namespaces/handlers/classes/textfactoryhandler/)
- [`ConnectorFactoryHandler`](/api-core/namespaces/handlers/classes/connectorfactoryhandler/)
- [`LineFactoryHandler`](/api-core/namespaces/handlers/classes/linefactoryhandler/)
- [`FreehandFactoryHandler`](/api-core/namespaces/handlers/classes/freehandfactoryhandler/)
- [`HighlighterFactoryHandler`](/api-core/namespaces/handlers/classes/highlighterfactoryhandler/)
- [`ImageFactoryHandler`](/api-core/namespaces/handlers/classes/imagefactoryhandler/)
- [`FrameFactoryHandler`](/api-core/namespaces/handlers/classes/framefactoryhandler/)
- [`EmbedFactoryHandler`](/api-core/namespaces/handlers/classes/embedfactoryhandler/)

## Constructors

### new Handler()

> **new Handler**(`id`, `options`?): [`Handler`](/api-core/classes/handler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:1372](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1372)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1369](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1369)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Source

[editor.ts:1370](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1370)

## Methods

### activate()

> **activate**(`editor`): `void`

Activate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1398](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1398)

***

### complete()

> **complete**(`editor`): `void`

Trigger when the handler action is complete

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1389](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1389)

***

### deactivate()

> **deactivate**(`editor`): `void`

Deactivate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1406](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1406)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1451](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1451)

***

### keyDown()

> **keyDown**(`editor`, `e`): `void`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Source

[editor.ts:1441](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1441)

***

### keyUp()

> **keyUp**(`editor`, `e`): `void`

keyUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Source

[editor.ts:1446](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1446)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1413](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1413)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1418](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1418)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Abstract

#### Source

[editor.ts:1424](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1424)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

pointerMove

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Abstract

#### Source

[editor.ts:1436](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1436)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

pointerUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Abstract

#### Source

[editor.ts:1430](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1430)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Source

[editor.ts:1384](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1384)
