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

[packages/core/src/editor.ts:1485](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1485)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragPoint`](/api-core/classes/handler/#dragpoint)

#### Source

[packages/core/src/editor.ts:1483](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1483)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragStartPoint`](/api-core/classes/handler/#dragstartpoint)

#### Source

[packages/core/src/editor.ts:1482](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1482)

***

### dragging

> **dragging**: `boolean`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragging`](/api-core/classes/handler/#dragging)

#### Source

[packages/core/src/editor.ts:1481](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1481)

***

### headAnchor

> **headAnchor**: `number`[]

#### Source

[packages/core/src/handlers/connector-handler.ts:20](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L20)

***

### headEnd

> **headEnd**: `null` \| [`Shape`](/api-core/classes/shape/) = `null`

#### Source

[packages/core/src/handlers/connector-handler.ts:19](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L19)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[packages/core/src/editor.ts:1479](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1479)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[packages/core/src/editor.ts:1480](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1480)

***

### shape

> **shape**: `null` \| [`Connector`](/api-core/classes/connector/) = `null`

#### Source

[packages/core/src/handlers/connector-handler.ts:21](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L21)

***

### snapper

> **snapper**: `HandlerSnapper`

#### Source

[packages/core/src/handlers/connector-handler.ts:22](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L22)

***

### tailAnchor

> **tailAnchor**: `number`[]

#### Source

[packages/core/src/handlers/connector-handler.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L18)

***

### tailEnd

> **tailEnd**: `null` \| [`Shape`](/api-core/classes/shape/) = `null`

#### Source

[packages/core/src/handlers/connector-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L17)

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

[packages/core/src/editor.ts:1518](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1518)

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

[packages/core/src/editor.ts:1509](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1509)

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

[packages/core/src/editor.ts:1526](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1526)

***

### drawDragging()

> **drawDragging**(`editor`, `e`): `void`

Draw dragging

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`drawDragging`](/api-core/classes/handler/#drawdragging)

#### Source

[packages/core/src/handlers/connector-handler.ts:169](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L169)

***

### drawHeadHovering()

> **drawHeadHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[packages/core/src/handlers/connector-handler.ts:157](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L157)

***

### drawHovering()

> **drawHovering**(`editor`, `e`): `void`

Draw hovering

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`drawHovering`](/api-core/classes/handler/#drawhovering)

#### Source

[packages/core/src/handlers/connector-handler.ts:164](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L164)

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

[packages/core/src/editor.ts:1632](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1632)

***

### drawTailHovering()

> **drawTailHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[packages/core/src/handlers/connector-handler.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L150)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

Finalize handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`finalize`](/api-core/classes/handler/#finalize)

#### Source

[packages/core/src/handlers/connector-handler.ts:125](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L125)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

Initialize handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`initialize`](/api-core/classes/handler/#initialize)

#### Source

[packages/core/src/handlers/connector-handler.ts:33](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L33)

***

### keyDown()

> **keyDown**(`editor`, `e`): `boolean`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`boolean`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`keyDown`](/api-core/classes/handler/#keydown)

#### Source

[packages/core/src/editor.ts:1614](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1614)

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

[packages/core/src/editor.ts:1627](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1627)

***

### onActionPerformed()

> **onActionPerformed**(`editor`): `void`

Triggered when action is performed (unclude undo and redo)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onActionPerformed`](/api-core/classes/handler/#onactionperformed)

#### Source

[packages/core/src/handlers/connector-handler.ts:146](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L146)

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

[packages/core/src/handlers/connector-handler.ts:137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L137)

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

[packages/core/src/handlers/connector-handler.ts:142](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L142)

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

#### Source

[packages/core/src/editor.ts:1568](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1568)

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

[packages/core/src/editor.ts:1597](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1597)

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

[packages/core/src/editor.ts:1584](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1584)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[packages/core/src/handlers/connector-handler.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L24)

***

### update()

> **update**(`editor`, `e`): `void`

Update handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`update`](/api-core/classes/handler/#update)

#### Source

[packages/core/src/handlers/connector-handler.ts:69](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L69)

***

### updateHovering()

> **updateHovering**(`editor`, `e`): `void`

Update handler when hovering (not dragging)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`updateHovering`](/api-core/classes/handler/#updatehovering)

#### Source

[packages/core/src/handlers/connector-handler.ts:119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L119)
