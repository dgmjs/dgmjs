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

[editor.ts:1391](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1391)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/connector-handler.ts:30](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L30)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/connector-handler.ts:29](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L29)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/connector-handler.ts:28](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L28)

***

### headAnchor

> **headAnchor**: `number`[]

#### Source

[handlers/connector-handler.ts:34](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L34)

***

### headEnd

> **headEnd**: `null` \| [`Shape`](/api-core/classes/shape/) = `null`

#### Source

[handlers/connector-handler.ts:33](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L33)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1388](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1388)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1389](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1389)

***

### shape

> **shape**: `null` \| [`Connector`](/api-core/classes/connector/) = `null`

#### Source

[handlers/connector-handler.ts:35](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L35)

***

### tailAnchor

> **tailAnchor**: `number`[]

#### Source

[handlers/connector-handler.ts:32](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L32)

***

### tailEnd

> **tailEnd**: `null` \| [`Shape`](/api-core/classes/shape/) = `null`

#### Source

[handlers/connector-handler.ts:31](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L31)

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

[editor.ts:1417](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1417)

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

[editor.ts:1408](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1408)

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

[editor.ts:1425](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1425)

***

### drawDragging()

> **drawDragging**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L188)

***

### drawHeadHovering()

> **drawHeadHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:177](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L177)

***

### drawHovering()

> **drawHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:184](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L184)

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

[editor.ts:1470](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1470)

***

### drawTailHovering()

> **drawTailHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L170)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:94](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L94)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:48](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L48)

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

[handlers/connector-handler.ts:152](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L152)

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

[editor.ts:1465](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1465)

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

[handlers/connector-handler.ts:162](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L162)

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

[handlers/connector-handler.ts:166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L166)

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

[handlers/connector-handler.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L110)

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

[handlers/connector-handler.ts:126](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L126)

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

[handlers/connector-handler.ts:143](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L143)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/connector-handler.ts:37](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L37)

***

### update()

> **update**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:73](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L73)
