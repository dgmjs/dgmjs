---
editUrl: false
next: false
prev: false
title: "EmbedFactoryHandler"
---

Embed Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new EmbedFactoryHandler()

> **new EmbedFactoryHandler**(`id`, `options`?): [`EmbedFactoryHandler`](/api-core/namespaces/handlers/classes/embedfactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`EmbedFactoryHandler`](/api-core/namespaces/handlers/classes/embedfactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1359](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1359)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/embed-handler.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L12)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/embed-handler.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L11)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/embed-handler.ts:10](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L10)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1356](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1356)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1357](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1357)

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

[editor.ts:1385](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1385)

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

[editor.ts:1376](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1376)

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

[editor.ts:1393](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1393)

***

### drawDragging()

> **drawDragging**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/embed-handler.ts:74](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L74)

***

### drawHovering()

> **drawHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/embed-handler.ts:72](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L72)

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

[editor.ts:1438](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1438)

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

[editor.ts:1428](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1428)

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

[editor.ts:1433](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1433)

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

[handlers/embed-handler.ts:64](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L64)

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

[handlers/embed-handler.ts:68](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L68)

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

[handlers/embed-handler.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L24)

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

[handlers/embed-handler.ts:38](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L38)

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

[handlers/embed-handler.ts:53](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L53)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/embed-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L14)
