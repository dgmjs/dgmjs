---
editUrl: false
next: false
prev: false
title: "ConnectorFactoryHandler"
---

Connector Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new ConnectorFactoryHandler()

> **new ConnectorFactoryHandler**(`id`, `options`?): [`ConnectorFactoryHandler`](/api-core/namespaces/handlers/classes/connectorfactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`ConnectorFactoryHandler`](/api-core/namespaces/handlers/classes/connectorfactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1358](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1358)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/connector-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L17)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/connector-handler.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L16)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/connector-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L15)

***

### headAnchor

> **headAnchor**: `number`[]

#### Source

[handlers/connector-handler.ts:21](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L21)

***

### headEnd

> **headEnd**: `null` \| [`Shape`](/api-core/classes/shape/) = `null`

#### Source

[handlers/connector-handler.ts:20](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L20)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1355](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1355)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1356](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1356)

***

### shape

> **shape**: `null` \| [`Connector`](/api-core/classes/connector/) = `null`

#### Source

[handlers/connector-handler.ts:22](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L22)

***

### tailAnchor

> **tailAnchor**: `number`[]

#### Source

[handlers/connector-handler.ts:19](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L19)

***

### tailEnd

> **tailEnd**: `null` \| [`Shape`](/api-core/classes/shape/) = `null`

#### Source

[handlers/connector-handler.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L18)

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

[editor.ts:1384](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1384)

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

[editor.ts:1375](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1375)

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

[editor.ts:1392](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1392)

***

### drawDragging()

> **drawDragging**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:175](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L175)

***

### drawHeadHovering()

> **drawHeadHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:164](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L164)

***

### drawHovering()

> **drawHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:171](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L171)

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

[editor.ts:1437](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1437)

***

### drawTailHovering()

> **drawTailHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:157](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L157)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:81](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L81)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:35](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L35)

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

[handlers/connector-handler.ts:139](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L139)

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

[editor.ts:1432](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1432)

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

[handlers/connector-handler.ts:149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L149)

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

[handlers/connector-handler.ts:153](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L153)

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

[handlers/connector-handler.ts:97](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L97)

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

[handlers/connector-handler.ts:113](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L113)

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

[handlers/connector-handler.ts:130](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L130)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/connector-handler.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L24)

***

### update()

> **update**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:60](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L60)
