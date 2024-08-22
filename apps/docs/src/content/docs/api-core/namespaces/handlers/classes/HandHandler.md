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

[editor.ts:1372](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1372)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/hand-handler.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L12)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/hand-handler.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L11)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/hand-handler.ts:10](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L10)

***

### dx

> **dx**: `number` = `0`

#### Source

[handlers/hand-handler.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L13)

***

### dy

> **dy**: `number` = `0`

#### Source

[handlers/hand-handler.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L14)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1369](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1369)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1370](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1370)

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

[editor.ts:1398](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1398)

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

[editor.ts:1389](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1389)

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

[editor.ts:1406](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1406)

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

[editor.ts:1451](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1451)

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

[editor.ts:1441](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1441)

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

[editor.ts:1446](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1446)

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

[handlers/hand-handler.ts:64](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L64)

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

[handlers/hand-handler.ts:68](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L68)

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

[handlers/hand-handler.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L27)

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

[handlers/hand-handler.ts:42](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L42)

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

[handlers/hand-handler.ts:56](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L56)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/hand-handler.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/hand-handler.ts#L16)
