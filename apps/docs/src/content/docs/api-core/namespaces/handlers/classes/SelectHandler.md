---
editUrl: false
next: false
prev: false
title: "SelectHandler"
---

Select Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new SelectHandler()

> **new SelectHandler**(`id`, `options`?): [`SelectHandler`](/api-core/namespaces/handlers/classes/selecthandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`SelectHandler`](/api-core/namespaces/handlers/classes/selecthandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1456](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1456)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragPoint`](/api-core/classes/handler/#dragpoint)

#### Source

[editor.ts:1454](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1454)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragStartPoint`](/api-core/classes/handler/#dragstartpoint)

#### Source

[editor.ts:1453](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1453)

***

### dragging

> **dragging**: `boolean`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragging`](/api-core/classes/handler/#dragging)

#### Source

[editor.ts:1452](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1452)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1450](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1450)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1451](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1451)

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

[editor.ts:1489](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1489)

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

[editor.ts:1480](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1480)

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

[editor.ts:1497](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1497)

***

### drawDragging()

> **drawDragging**(`editor`, `e`): `void`

Draw dragging

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`drawDragging`](/api-core/classes/handler/#drawdragging)

#### Source

[editor.ts:1613](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1613)

***

### drawHovering()

> **drawHovering**(`editor`, `e`): `void`

Draw hovering

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`drawHovering`](/api-core/classes/handler/#drawhovering)

#### Source

[editor.ts:1608](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1608)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`drawSelection`](/api-core/classes/handler/#drawselection)

#### Source

[handlers/select-handler.ts:385](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/select-handler.ts#L385)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

Finalize handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`finalize`](/api-core/classes/handler/#finalize)

#### Source

[editor.ts:1534](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1534)

***

### getShapeAt()

> **getShapeAt**(`editor`, `e`): `null` \| [`Shape`](/api-core/classes/shape/)

Returns a shape (with manipulator area) located at the position e.

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[handlers/select-handler.ts:23](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/select-handler.ts#L23)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

Initialize handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`initialize`](/api-core/classes/handler/#initialize)

#### Source

[editor.ts:1519](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1519)

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

[handlers/select-handler.ts:343](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/select-handler.ts#L343)

***

### keyUp()

> **keyUp**(`editor`, `e`): `void`

keyUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`keyUp`](/api-core/classes/handler/#keyup)

#### Source

[handlers/select-handler.ts:380](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/select-handler.ts#L380)

***

### onActionPerformed()

> **onActionPerformed**(`editor`): `void`

Triggered when action is performed (unclude undo and redo)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`onActionPerformed`](/api-core/classes/handler/#onactionperformed)

#### Source

[editor.ts:1514](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1514)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`onActivate`](/api-core/classes/handler/#onactivate)

#### Source

[editor.ts:1504](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1504)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`onDeactivate`](/api-core/classes/handler/#ondeactivate)

#### Source

[editor.ts:1509](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1509)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

handle pointer down event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerDown`](/api-core/classes/handler/#pointerdown)

#### Source

[handlers/select-handler.ts:44](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/select-handler.ts#L44)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

handle pointer move event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerMove`](/api-core/classes/handler/#pointermove)

#### Source

[handlers/select-handler.ts:164](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/select-handler.ts#L164)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

handle pointer up event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerUp`](/api-core/classes/handler/#pointerup)

#### Source

[handlers/select-handler.ts:251](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/select-handler.ts#L251)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[editor.ts:1471](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1471)

***

### update()

> **update**(`editor`, `e`): `void`

Update handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`update`](/api-core/classes/handler/#update)

#### Source

[editor.ts:1524](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1524)

***

### updateHovering()

> **updateHovering**(`editor`, `e`): `void`

Update handler when hovering (not dragging)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`updateHovering`](/api-core/classes/handler/#updatehovering)

#### Source

[editor.ts:1529](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1529)
