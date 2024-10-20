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

[editor.ts:1440](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1440)

## Properties

### closed

> **closed**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L15)

***

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

### draggingMoved

> **draggingMoved**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L16)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1434](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1434)

***

### multiPointMode

> **multiPointMode**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L17)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1435](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1435)

***

### points

> **points**: `number`[][] = `[]`

#### Source

[handlers/line-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L14)

***

### shape

> **shape**: `null` \| [`Line`](/api-core/classes/line/) = `null`

#### Source

[handlers/line-handler.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L18)

***

### snapper

> **snapper**: `HandlerSnapper`

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

[handlers/line-handler.ts:208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L208)

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

[handlers/line-handler.ts:204](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L204)

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

> **finalize**(`editor`, `e`?): `void`

Finalize handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e?**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`finalize`](/api-core/classes/handler/#finalize)

#### Source

[handlers/line-handler.ts:84](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L84)

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

[handlers/line-handler.ts:30](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L30)

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

[handlers/line-handler.ts:171](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L171)

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

[handlers/line-handler.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L200)

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

[handlers/line-handler.ts:189](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L189)

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

[handlers/line-handler.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L195)

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

[handlers/line-handler.ts:100](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L100)

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

[handlers/line-handler.ts:133](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L133)

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

[handlers/line-handler.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L158)

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

Update handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`update`](/api-core/classes/handler/#update)

#### Source

[handlers/line-handler.ts:53](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L53)

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

[handlers/line-handler.ts:78](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L78)
