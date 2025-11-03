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

[packages/core/src/editor.ts:1485](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1485)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[packages/core/src/editor.ts:1483](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1483)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[packages/core/src/editor.ts:1482](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1482)

***

### dragging

> **dragging**: `boolean`

#### Source

[packages/core/src/editor.ts:1481](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1481)

***

### id

> **id**: `string`

#### Source

[packages/core/src/editor.ts:1479](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1479)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Source

[packages/core/src/editor.ts:1480](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1480)

## Methods

### activate()

> **activate**(`editor`): `void`

Activate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

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

#### Source

[packages/core/src/editor.ts:1642](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1642)

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

[packages/core/src/editor.ts:1637](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1637)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

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

#### Source

[packages/core/src/editor.ts:1563](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1563)

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

[packages/core/src/editor.ts:1548](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1548)

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

#### Source

[packages/core/src/editor.ts:1543](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1543)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1533](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1533)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1538](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1538)

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

#### Abstract

#### Source

[packages/core/src/editor.ts:1584](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1584)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1500](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1500)

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

[packages/core/src/editor.ts:1553](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1553)

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

[packages/core/src/editor.ts:1558](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1558)
