---
editUrl: false
next: false
prev: false
title: "EraserHandler"
---

Eraser Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new EraserHandler()

> **new EraserHandler**(`id`, `options`?): [`EraserHandler`](/api-core/namespaces/handlers/classes/eraserhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`EraserHandler`](/api-core/namespaces/handlers/classes/eraserhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[packages/core/src/editor.ts:1480](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1480)

## Properties

### deletingShapes

> **deletingShapes**: [`Shape`](/api-core/classes/shape/)[] = `[]`

#### Source

[packages/core/src/handlers/eraser-handler.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L18)

***

### dragPoint

> **dragPoint**: `number`[]

#### Overrides

[`Handler`](/api-core/classes/handler/).[`dragPoint`](/api-core/classes/handler/#dragpoint)

#### Source

[packages/core/src/handlers/eraser-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L15)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Overrides

[`Handler`](/api-core/classes/handler/).[`dragStartPoint`](/api-core/classes/handler/#dragstartpoint)

#### Source

[packages/core/src/handlers/eraser-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L14)

***

### dragging

> **dragging**: `boolean` = `false`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`dragging`](/api-core/classes/handler/#dragging)

#### Source

[packages/core/src/handlers/eraser-handler.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L13)

***

### dx

> **dx**: `number` = `0`

#### Source

[packages/core/src/handlers/eraser-handler.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L16)

***

### dy

> **dy**: `number` = `0`

#### Source

[packages/core/src/handlers/eraser-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L17)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[packages/core/src/editor.ts:1474](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1474)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[packages/core/src/editor.ts:1475](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1475)

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

[packages/core/src/editor.ts:1513](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1513)

***

### addToDeletingShapes()

> **addToDeletingShapes**(`editor`, `point`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **point**: `number`[]

#### Returns

`void`

#### Source

[packages/core/src/handlers/eraser-handler.ts:29](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L29)

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

[packages/core/src/editor.ts:1504](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1504)

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

[packages/core/src/editor.ts:1521](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1521)

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

[packages/core/src/editor.ts:1637](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1637)

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

[packages/core/src/editor.ts:1632](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1632)

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

[packages/core/src/editor.ts:1627](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1627)

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

[packages/core/src/handlers/eraser-handler.ts:52](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L52)

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

[packages/core/src/handlers/eraser-handler.ts:43](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L43)

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

[packages/core/src/handlers/eraser-handler.ts:105](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L105)

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

[packages/core/src/editor.ts:1622](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1622)

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

[packages/core/src/editor.ts:1538](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1538)

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

[packages/core/src/handlers/eraser-handler.ts:115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L115)

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

[packages/core/src/handlers/eraser-handler.ts:119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L119)

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

[packages/core/src/handlers/eraser-handler.ts:67](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L67)

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

[packages/core/src/handlers/eraser-handler.ts:82](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L82)

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

[packages/core/src/handlers/eraser-handler.ts:96](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L96)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[packages/core/src/handlers/eraser-handler.ts:20](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L20)

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

[packages/core/src/handlers/eraser-handler.ts:48](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L48)

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

[packages/core/src/editor.ts:1553](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1553)
