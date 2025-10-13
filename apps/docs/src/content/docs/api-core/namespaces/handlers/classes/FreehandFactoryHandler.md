---
editUrl: false
next: false
prev: false
title: "FreehandFactoryHandler"
---

Freehand Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new FreehandFactoryHandler()

> **new FreehandFactoryHandler**(`id`, `options`?): [`FreehandFactoryHandler`](/api-core/namespaces/handlers/classes/freehandfactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`FreehandFactoryHandler`](/api-core/namespaces/handlers/classes/freehandfactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[packages/core/src/editor.ts:1480](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1480)

## Properties

### closed

> **closed**: `boolean` = `false`

#### Source

[packages/core/src/handlers/freehand-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L17)

***

### dragPoint

> **dragPoint**: `number`[]

#### Overrides

[`Handler`](/api-core/classes/handler/).[`dragPoint`](/api-core/classes/handler/#dragpoint)

#### Source

[packages/core/src/handlers/freehand-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L15)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Overrides

[`Handler`](/api-core/classes/handler/).[`dragStartPoint`](/api-core/classes/handler/#dragstartpoint)

#### Source

[packages/core/src/handlers/freehand-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L14)

***

### dragging

> **dragging**: `boolean` = `false`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`dragging`](/api-core/classes/handler/#dragging)

#### Source

[packages/core/src/handlers/freehand-handler.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L13)

***

### draggingPoints

> **draggingPoints**: `number`[][] = `[]`

#### Source

[packages/core/src/handlers/freehand-handler.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L16)

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

***

### shape

> **shape**: `null` \| [`Freehand`](/api-core/classes/freehand/) = `null`

#### Source

[packages/core/src/handlers/freehand-handler.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L18)

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

[packages/core/src/handlers/freehand-handler.ts:59](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L59)

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

[packages/core/src/handlers/freehand-handler.ts:29](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L29)

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

[packages/core/src/handlers/freehand-handler.ts:114](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L114)

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

[packages/core/src/handlers/freehand-handler.ts:124](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L124)

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

[packages/core/src/handlers/freehand-handler.ts:128](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L128)

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

[packages/core/src/handlers/freehand-handler.ts:75](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L75)

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

[packages/core/src/handlers/freehand-handler.ts:90](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L90)

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

[packages/core/src/handlers/freehand-handler.ts:105](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L105)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[packages/core/src/handlers/freehand-handler.ts:20](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L20)

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

[packages/core/src/handlers/freehand-handler.ts:41](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/freehand-handler.ts#L41)

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
