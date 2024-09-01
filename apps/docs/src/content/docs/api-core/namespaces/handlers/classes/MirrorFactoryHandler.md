---
editUrl: false
next: false
prev: false
title: "MirrorFactoryHandler"
---

Mirror Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new MirrorFactoryHandler()

> **new MirrorFactoryHandler**(`id`, `options`?): [`MirrorFactoryHandler`](/api-core/namespaces/handlers/classes/mirrorfactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`MirrorFactoryHandler`](/api-core/namespaces/handlers/classes/mirrorfactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1374](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1374)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/mirror-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L14)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/mirror-handler.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L13)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/mirror-handler.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L12)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1371](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1371)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1372](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1372)

***

### shape

> **shape**: `null` \| [`Mirror`](/api-core/classes/mirror/) = `null`

#### Source

[handlers/mirror-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L15)

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

[editor.ts:1400](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1400)

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

[editor.ts:1391](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1391)

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

[editor.ts:1408](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1408)

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

[editor.ts:1453](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1453)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/mirror-handler.ts:55](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L55)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/mirror-handler.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L24)

***

### keyDown()

> **keyDown**(`editor`, `e`): `boolean`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`boolean`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`keyDown`](/api-core/classes/handler/#keydown)

#### Source

[handlers/mirror-handler.ts:113](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L113)

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

[editor.ts:1448](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1448)

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

[handlers/mirror-handler.ts:123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L123)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onDeactivate`](/api-core/classes/handler/#ondeactivate)

#### Source

[handlers/mirror-handler.ts:127](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L127)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerDown`](/api-core/classes/handler/#pointerdown)

#### Source

[handlers/mirror-handler.ts:73](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L73)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

pointerMove

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerMove`](/api-core/classes/handler/#pointermove)

#### Source

[handlers/mirror-handler.ts:88](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L88)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

pointerUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerUp`](/api-core/classes/handler/#pointerup)

#### Source

[handlers/mirror-handler.ts:104](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L104)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/mirror-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L17)

***

### update()

> **update**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/mirror-handler.ts:38](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/mirror-handler.ts#L38)