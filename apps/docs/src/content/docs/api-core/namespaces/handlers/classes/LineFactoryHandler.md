---
editUrl: false
next: false
prev: false
title: "LineFactoryHandler"
---

Line Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new LineFactoryHandler()

> **new LineFactoryHandler**(`id`, `options`?): [`LineFactoryHandler`](/api-core/namespaces/handlers/classes/linefactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`LineFactoryHandler`](/api-core/namespaces/handlers/classes/linefactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1328](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1328)

## Properties

### closed

> **closed**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L16)

***

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/line-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L14)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/line-handler.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L13)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L12)

***

### draggingMoved

> **draggingMoved**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L17)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1325](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1325)

***

### multiPointMode

> **multiPointMode**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L18)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1326](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1326)

***

### points

> **points**: `number`[][] = `[]`

#### Source

[handlers/line-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L15)

***

### shape

> **shape**: `null` \| [`Line`](/api-core/classes/line/) = `null`

#### Source

[handlers/line-handler.ts:19](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L19)

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

### finalize()

> **finalize**(`editor`, `e`?): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e?**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/line-handler.ts:55](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L55)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/line-handler.ts:32](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L32)

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

[handlers/line-handler.ts:131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L131)

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

[handlers/line-handler.ts:149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L149)

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

[handlers/line-handler.ts:154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L154)

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

[handlers/line-handler.ts:71](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L71)

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

[handlers/line-handler.ts:98](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L98)

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

[handlers/line-handler.ts:118](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L118)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/line-handler.ts:21](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L21)

***

### update()

> **update**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/line-handler.ts:44](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L44)
