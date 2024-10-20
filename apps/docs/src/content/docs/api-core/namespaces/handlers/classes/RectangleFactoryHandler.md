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

> **shape**: `null` \| [`Rectangle`](/api-core/classes/rectangle/) = `null`

#### Source

[handlers/rectangle-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L14)

***

### snapper

> **snapper**: `HandlerSnapper`

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

[handlers/rectangle-handler.ts:113](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L113)

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

[handlers/rectangle-handler.ts:109](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L109)

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

[handlers/rectangle-handler.ts:84](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L84)

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

[handlers/rectangle-handler.ts:22](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L22)

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

[handlers/rectangle-handler.ts:105](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L105)

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

[handlers/rectangle-handler.ts:96](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L96)

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

[handlers/rectangle-handler.ts:101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L101)

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

[handlers/rectangle-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L17)

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

[handlers/rectangle-handler.ts:47](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L47)

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

[handlers/rectangle-handler.ts:78](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L78)
