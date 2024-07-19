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

[editor.ts:1359](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1359)

## Properties

### deletingShapes

> **deletingShapes**: [`Shape`](/api-core/classes/shape/)[] = `[]`

#### Source

[handlers/eraser-handler.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L17)

***

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/eraser-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L14)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/eraser-handler.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L13)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/eraser-handler.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L12)

***

### dx

> **dx**: `number` = `0`

#### Source

[handlers/eraser-handler.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L15)

***

### dy

> **dy**: `number` = `0`

#### Source

[handlers/eraser-handler.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L16)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1356](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1356)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1357](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1357)

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

[editor.ts:1385](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1385)

***

### addToDeletingShapes()

> **addToDeletingShapes**(`editor`, `point`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **point**: `number`[]

#### Returns

`void`

#### Source

[handlers/eraser-handler.ts:28](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L28)

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

[editor.ts:1376](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1376)

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

[editor.ts:1393](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1393)

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

[editor.ts:1438](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1438)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/eraser-handler.ts:51](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L51)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/eraser-handler.ts:42](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L42)

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

[handlers/eraser-handler.ts:103](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L103)

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

[editor.ts:1433](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1433)

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

[handlers/eraser-handler.ts:113](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L113)

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

[handlers/eraser-handler.ts:117](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L117)

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

[handlers/eraser-handler.ts:65](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L65)

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

[handlers/eraser-handler.ts:80](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L80)

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

[handlers/eraser-handler.ts:94](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L94)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/eraser-handler.ts:19](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L19)

***

### update()

> **update**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/eraser-handler.ts:47](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/eraser-handler.ts#L47)
