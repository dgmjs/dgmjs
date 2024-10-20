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

[editor.ts:1440](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1440)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragPoint`](/api-core/classes/handler/#dragpoint)

#### Source

[editor.ts:1438](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1438)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragStartPoint`](/api-core/classes/handler/#dragstartpoint)

#### Source

[editor.ts:1437](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1437)

***

### dragging

> **dragging**: `boolean`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragging`](/api-core/classes/handler/#dragging)

#### Source

[editor.ts:1436](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1436)

***

### headAnchor

> **headAnchor**: `number`[]

#### Source

[handlers/connector-handler.ts:20](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L20)

***

### headEnd

> **headEnd**: `null` \| [`Shape`](/api-core/classes/shape/) = `null`

#### Source

[handlers/connector-handler.ts:19](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L19)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1434](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1434)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1435](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1435)

***

### shape

> **shape**: `null` \| [`Connector`](/api-core/classes/connector/) = `null`

#### Source

[handlers/connector-handler.ts:21](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L21)

***

### snapper

> **snapper**: `HandlerSnapper`

#### Source

[handlers/connector-handler.ts:22](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L22)

***

### tailAnchor

> **tailAnchor**: `number`[]

#### Source

[handlers/connector-handler.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L18)

***

### tailEnd

> **tailEnd**: `null` \| [`Shape`](/api-core/classes/shape/) = `null`

#### Source

[handlers/connector-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L17)

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

[editor.ts:1473](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1473)

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

[editor.ts:1464](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1464)

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

[editor.ts:1481](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1481)

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

[handlers/connector-handler.ts:154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L154)

***

### drawHeadHovering()

> **drawHeadHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:142](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L142)

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

[handlers/connector-handler.ts:149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L149)

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

[editor.ts:1587](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1587)

***

### drawTailHovering()

> **drawTailHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/connector-handler.ts:135](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L135)

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

[handlers/connector-handler.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L110)

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

[handlers/connector-handler.ts:33](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L33)

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

[editor.ts:1569](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1569)

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

[editor.ts:1582](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1582)

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

[handlers/connector-handler.ts:131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L131)

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

[handlers/connector-handler.ts:122](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L122)

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

[handlers/connector-handler.ts:127](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L127)

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

[editor.ts:1523](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1523)

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

[editor.ts:1552](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1552)

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

[editor.ts:1539](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1539)

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

Update handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`update`](/api-core/classes/handler/#update)

#### Source

[handlers/connector-handler.ts:69](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L69)

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

[handlers/connector-handler.ts:104](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/connector-handler.ts#L104)
