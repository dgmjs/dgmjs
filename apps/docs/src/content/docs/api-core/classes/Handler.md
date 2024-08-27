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
- [`MirrorFactoryHandler`](/api-core/namespaces/handlers/classes/mirrorfactoryhandler/)
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

[editor.ts:1374](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1374)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1371](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1371)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Source

[editor.ts:1372](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1372)

## Methods

### activate()

> **activate**(`editor`): `void`

Activate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1400](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1400)

***

### complete()

> **complete**(`editor`): `void`

Trigger when the handler action is complete

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1391](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1391)

***

### deactivate()

> **deactivate**(`editor`): `void`

Deactivate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1408](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1408)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1453](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1453)

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

[editor.ts:1443](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1443)

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

[editor.ts:1448](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1448)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1415](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1415)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1420](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1420)

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

[editor.ts:1426](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1426)

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

[editor.ts:1438](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1438)

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

[editor.ts:1432](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1432)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Source

[editor.ts:1386](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1386)
