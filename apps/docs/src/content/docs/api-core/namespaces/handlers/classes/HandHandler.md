---
editUrl: false
next: false
prev: false
title: "HandHandler"
---

Hand Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new HandHandler()

> **new HandHandler**(`id`, `options`?): [`HandHandler`](/api-core/namespaces/handlers/classes/handhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`HandHandler`](/api-core/namespaces/handlers/classes/handhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1391](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1391)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/hand-handler.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L25)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/hand-handler.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L24)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/hand-handler.ts:23](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L23)

***

### dx

> **dx**: `number` = `0`

#### Source

[handlers/hand-handler.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L26)

***

### dy

> **dy**: `number` = `0`

#### Source

[handlers/hand-handler.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L27)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1388](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1388)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1389](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1389)

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

[editor.ts:1417](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1417)

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

[editor.ts:1408](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1408)

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

[editor.ts:1425](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1425)

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

[editor.ts:1470](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1470)

***

### keyDown()

> **keyDown**(`editor`, `e`): `void`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`keyDown`](/api-core/classes/handler/#keydown)

#### Source

[editor.ts:1460](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1460)

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

[editor.ts:1465](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1465)

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

[handlers/hand-handler.ts:77](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L77)

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

[handlers/hand-handler.ts:81](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L81)

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

[handlers/hand-handler.ts:40](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L40)

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

[handlers/hand-handler.ts:55](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L55)

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

[handlers/hand-handler.ts:69](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L69)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/hand-handler.ts:29](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L29)
