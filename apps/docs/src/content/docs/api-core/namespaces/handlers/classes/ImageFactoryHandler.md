---
editUrl: false
next: false
prev: false
title: "ImageFactoryHandler"
---

Image Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new ImageFactoryHandler()

> **new ImageFactoryHandler**(`id`, `options`?): [`ImageFactoryHandler`](/api-core/namespaces/handlers/classes/imagefactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`ImageFactoryHandler`](/api-core/namespaces/handlers/classes/imagefactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1328](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1328)

## Properties

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1325](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1325)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1326](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1326)

## Methods

### activate()

> **activate**(`editor`): `void`

Activate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`activate`](/api-core/classes/handler/#activate)

#### Source

[editor.ts:1354](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1354)

***

### complete()

> **complete**(`editor`): `void`

Trigger when the handler action is complete

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`complete`](/api-core/classes/handler/#complete)

#### Source

[editor.ts:1345](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1345)

***

### deactivate()

> **deactivate**(`editor`): `void`

Deactivate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`deactivate`](/api-core/classes/handler/#deactivate)

#### Source

[editor.ts:1362](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1362)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`drawSelection`](/api-core/classes/handler/#drawselection)

#### Source

[editor.ts:1407](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1407)

***

### keyDown()

> **keyDown**(`editor`, `e`): `void`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`keyDown`](/api-core/classes/handler/#keydown)

#### Source

[editor.ts:1397](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1397)

***

### keyUp()

> **keyUp**(`editor`, `e`): `void`

keyUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`keyUp`](/api-core/classes/handler/#keyup)

#### Source

[editor.ts:1402](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1402)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onActivate`](/api-core/classes/handler/#onactivate)

#### Source

[handlers/image-handler.ts:9](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/image-handler.ts#L9)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`onDeactivate`](/api-core/classes/handler/#ondeactivate)

#### Source

[editor.ts:1374](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1374)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`pointerDown`](/api-core/classes/handler/#pointerdown)

#### Abstract

#### Source

[editor.ts:1380](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1380)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

pointerMove

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`pointerMove`](/api-core/classes/handler/#pointermove)

#### Abstract

#### Source

[editor.ts:1392](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1392)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

pointerUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`pointerUp`](/api-core/classes/handler/#pointerup)

#### Abstract

#### Source

[editor.ts:1386](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1386)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[editor.ts:1340](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1340)
