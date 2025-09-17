---
editUrl: false
next: false
prev: false
title: "Handler"
---

Handler

## Extended by

- [`HandHandler`](/api-core/namespaces/handlers/classes/handhandler/)
- [`SelectHandler`](/api-core/namespaces/handlers/classes/selecthandler/)
- [`EraserHandler`](/api-core/namespaces/handlers/classes/eraserhandler/)
- [`RectangleFactoryHandler`](/api-core/namespaces/handlers/classes/rectanglefactoryhandler/)
- [`EllipseFactoryHandler`](/api-core/namespaces/handlers/classes/ellipsefactoryhandler/)
- [`TextFactoryHandler`](/api-core/namespaces/handlers/classes/textfactoryhandler/)
- [`ConnectorFactoryHandler`](/api-core/namespaces/handlers/classes/connectorfactoryhandler/)
- [`LineFactoryHandler`](/api-core/namespaces/handlers/classes/linefactoryhandler/)
- [`FreehandFactoryHandler`](/api-core/namespaces/handlers/classes/freehandfactoryhandler/)
- [`HighlighterFactoryHandler`](/api-core/namespaces/handlers/classes/highlighterfactoryhandler/)
- [`ImageFactoryHandler`](/api-core/namespaces/handlers/classes/imagefactoryhandler/)
- [`FrameFactoryHandler`](/api-core/namespaces/handlers/classes/framefactoryhandler/)
- [`MirrorFactoryHandler`](/api-core/namespaces/handlers/classes/mirrorfactoryhandler/)
- [`EmbedFactoryHandler`](/api-core/namespaces/handlers/classes/embedfactoryhandler/)

## Constructors

### new Handler()

> **new Handler**(`id`, `options`?): [`Handler`](/api-core/classes/handler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`Handler`](/api-core/classes/handler/)

#### Source

[packages/core/src/editor.ts:1472](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1472)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[packages/core/src/editor.ts:1470](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1470)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[packages/core/src/editor.ts:1469](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1469)

***

### dragging

> **dragging**: `boolean`

#### Source

[packages/core/src/editor.ts:1468](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1468)

***

### id

> **id**: `string`

#### Source

[packages/core/src/editor.ts:1466](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1466)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Source

[packages/core/src/editor.ts:1467](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1467)

## Methods

### activate()

> **activate**(`editor`): `void`

Activate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1505](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1505)

***

### complete()

> **complete**(`editor`): `void`

Trigger when the handler action is complete

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1496](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1496)

***

### deactivate()

> **deactivate**(`editor`): `void`

Deactivate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1513](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1513)

***

### drawDragging()

> **drawDragging**(`editor`, `e`): `void`

Draw dragging

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1629](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1629)

***

### drawHovering()

> **drawHovering**(`editor`, `e`): `void`

Draw hovering

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1624](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1624)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1619](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1619)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

Finalize handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1550](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1550)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

Initialize handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1535](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1535)

***

### keyDown()

> **keyDown**(`editor`, `e`): `boolean`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:1601](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1601)

***

### keyUp()

> **keyUp**(`editor`, `e`): `void`

keyUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1614](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1614)

***

### onActionPerformed()

> **onActionPerformed**(`editor`): `void`

Triggered when action is performed (unclude undo and redo)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1530](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1530)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1520](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1520)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1525](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1525)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1555](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1555)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

pointerMove

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Abstract

#### Source

[packages/core/src/editor.ts:1584](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1584)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

pointerUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Abstract

#### Source

[packages/core/src/editor.ts:1571](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1571)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1487](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1487)

***

### update()

> **update**(`editor`, `e`): `void`

Update handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1540](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1540)

***

### updateHovering()

> **updateHovering**(`editor`, `e`): `void`

Update handler when hovering (not dragging)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1545](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1545)
