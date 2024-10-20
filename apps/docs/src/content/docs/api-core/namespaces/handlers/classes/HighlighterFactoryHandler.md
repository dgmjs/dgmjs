---
editUrl: false
next: false
prev: false
title: "HighlighterFactoryHandler"
---

Highlighter Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new HighlighterFactoryHandler()

> **new HighlighterFactoryHandler**(`id`, `options`?): [`HighlighterFactoryHandler`](/api-core/namespaces/handlers/classes/highlighterfactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`HighlighterFactoryHandler`](/api-core/namespaces/handlers/classes/highlighterfactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1440](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1440)

## Properties

### closed

> **closed**: `boolean` = `false`

#### Source

[handlers/highlighter-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L17)

***

### dragPoint

> **dragPoint**: `number`[]

#### Overrides

[`Handler`](/api-core/classes/handler/).[`dragPoint`](/api-core/classes/handler/#dragpoint)

#### Source

[handlers/highlighter-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L15)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Overrides

[`Handler`](/api-core/classes/handler/).[`dragStartPoint`](/api-core/classes/handler/#dragstartpoint)

#### Source

[handlers/highlighter-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L14)

***

### dragging

> **dragging**: `boolean` = `false`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`dragging`](/api-core/classes/handler/#dragging)

#### Source

[handlers/highlighter-handler.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L13)

***

### draggingPoints

> **draggingPoints**: `number`[][] = `[]`

#### Source

[handlers/highlighter-handler.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L16)

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

> **shape**: `null` \| [`Highlighter`](/api-core/classes/highlighter/) = `null`

#### Source

[handlers/highlighter-handler.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L18)

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

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`drawDragging`](/api-core/classes/handler/#drawdragging)

#### Source

[editor.ts:1597](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1597)

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

[editor.ts:1592](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1592)

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

[handlers/highlighter-handler.ts:53](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L53)

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

[handlers/highlighter-handler.ts:29](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L29)

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

[handlers/highlighter-handler.ts:108](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L108)

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

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`onActionPerformed`](/api-core/classes/handler/#onactionperformed)

#### Source

[editor.ts:1498](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1498)

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

[handlers/highlighter-handler.ts:118](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L118)

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

[handlers/highlighter-handler.ts:122](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L122)

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

[handlers/highlighter-handler.ts:69](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L69)

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

[handlers/highlighter-handler.ts:84](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L84)

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

[handlers/highlighter-handler.ts:99](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L99)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/highlighter-handler.ts:20](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L20)

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

[handlers/highlighter-handler.ts:41](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/highlighter-handler.ts#L41)

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

[editor.ts:1513](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1513)
