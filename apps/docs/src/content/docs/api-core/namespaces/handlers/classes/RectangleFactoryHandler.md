---
editUrl: false
next: false
prev: false
title: "RectangleFactoryHandler"
---

Rectangle Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new RectangleFactoryHandler()

> **new RectangleFactoryHandler**(`id`, `options`?): [`RectangleFactoryHandler`](/api-core/namespaces/handlers/classes/rectanglefactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`RectangleFactoryHandler`](/api-core/namespaces/handlers/classes/rectanglefactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1337](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1337)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/rectangle-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L14)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/rectangle-handler.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L13)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/rectangle-handler.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L12)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1334](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1334)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1335](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1335)

***

### shape

> **shape**: `null` \| [`Rectangle`](/api-core/classes/rectangle/) = `null`

#### Source

[handlers/rectangle-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L15)

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

[editor.ts:1363](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1363)

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

[editor.ts:1354](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1354)

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

[editor.ts:1371](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1371)

***

### drawDragging()

> **drawDragging**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/rectangle-handler.ts:133](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L133)

***

### drawHovering()

> **drawHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/rectangle-handler.ts:131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L131)

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

[editor.ts:1416](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1416)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/rectangle-handler.ts:55](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L55)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/rectangle-handler.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L24)

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

[handlers/rectangle-handler.ts:113](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L113)

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

[editor.ts:1411](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1411)

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

[handlers/rectangle-handler.ts:123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L123)

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

[handlers/rectangle-handler.ts:127](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L127)

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

[handlers/rectangle-handler.ts:71](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L71)

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

[handlers/rectangle-handler.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L87)

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

[handlers/rectangle-handler.ts:104](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L104)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/rectangle-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L17)

***

### update()

> **update**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/rectangle-handler.ts:38](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L38)
