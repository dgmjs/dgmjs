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

> **shape**: `null` \| [`Rectangle`](/api-core/classes/rectangle/) = `null`

#### Source

[packages/core/src/handlers/rectangle-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L14)

***

### snapper

> **snapper**: `HandlerSnapper`

#### Source

[packages/core/src/handlers/rectangle-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L15)

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

[packages/core/src/handlers/rectangle-handler.ts:127](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L127)

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

[packages/core/src/handlers/rectangle-handler.ts:123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L123)

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

[packages/core/src/handlers/rectangle-handler.ts:98](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L98)

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

[packages/core/src/handlers/rectangle-handler.ts:22](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L22)

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

[packages/core/src/handlers/rectangle-handler.ts:119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L119)

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

[packages/core/src/handlers/rectangle-handler.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L110)

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

[packages/core/src/handlers/rectangle-handler.ts:115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L115)

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

[packages/core/src/handlers/rectangle-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L17)

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

[packages/core/src/handlers/rectangle-handler.ts:47](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L47)

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

[packages/core/src/handlers/rectangle-handler.ts:92](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/rectangle-handler.ts#L92)
