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

[packages/core/src/editor.ts:1480](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1480)

## Properties

### closed

> **closed**: `boolean` = `false`

#### Source

[packages/core/src/handlers/line-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L15)

***

### dragPoint

> **dragPoint**: `number`[]

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragPoint`](/api-core/classes/handler/#dragpoint)

#### Source

[packages/core/src/editor.ts:1478](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1478)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragStartPoint`](/api-core/classes/handler/#dragstartpoint)

#### Source

[packages/core/src/editor.ts:1477](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1477)

***

### dragging

> **dragging**: `boolean`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`dragging`](/api-core/classes/handler/#dragging)

#### Source

[packages/core/src/editor.ts:1476](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1476)

***

### draggingMoved

> **draggingMoved**: `boolean` = `false`

#### Source

[packages/core/src/handlers/line-handler.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L16)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[packages/core/src/editor.ts:1474](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1474)

***

### multiPointMode

> **multiPointMode**: `boolean` = `false`

#### Source

[packages/core/src/handlers/line-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L17)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[packages/core/src/editor.ts:1475](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1475)

***

### points

> **points**: `number`[][] = `[]`

#### Source

[packages/core/src/handlers/line-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L14)

***

### shape

> **shape**: `null` \| [`Line`](/api-core/classes/line/) = `null`

#### Source

[packages/core/src/handlers/line-handler.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L18)

***

### snapper

> **snapper**: `HandlerSnapper`

#### Source

[packages/core/src/handlers/line-handler.ts:19](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L19)

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

#### Overrides

[`Handler`](/api-core/classes/handler/).[`drawDragging`](/api-core/classes/handler/#drawdragging)

#### Source

[packages/core/src/handlers/line-handler.ts:240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L240)

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

[packages/core/src/handlers/line-handler.ts:236](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L236)

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

[packages/core/src/handlers/line-handler.ts:100](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L100)

***

### finishMultipointMode()

> **finishMultipointMode**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[packages/core/src/handlers/line-handler.ts:206](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L206)

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

[packages/core/src/handlers/line-handler.ts:30](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L30)

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

[packages/core/src/handlers/line-handler.ts:199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L199)

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

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onActionPerformed`](/api-core/classes/handler/#onactionperformed)

#### Source

[packages/core/src/handlers/line-handler.ts:232](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L232)

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

[packages/core/src/handlers/line-handler.ts:221](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L221)

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

[packages/core/src/handlers/line-handler.ts:227](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L227)

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

[packages/core/src/handlers/line-handler.ts:116](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L116)

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

[packages/core/src/handlers/line-handler.ts:161](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L161)

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

[packages/core/src/handlers/line-handler.ts:186](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L186)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[packages/core/src/handlers/line-handler.ts:21](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L21)

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

[packages/core/src/handlers/line-handler.ts:53](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L53)

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

[packages/core/src/handlers/line-handler.ts:94](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L94)
