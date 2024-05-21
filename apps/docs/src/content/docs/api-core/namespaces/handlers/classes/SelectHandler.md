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

[editor.ts:1103](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1103)

## Properties

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/select-handler.ts:26](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/handlers/select-handler.ts#L26)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/select-handler.ts:25](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/handlers/select-handler.ts#L25)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1100](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1100)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1101](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1101)

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

[editor.ts:1129](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1129)

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

[editor.ts:1120](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1120)

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

[editor.ts:1137](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1137)

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

[handlers/select-handler.ts:280](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/handlers/select-handler.ts#L280)

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

[handlers/select-handler.ts:36](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/handlers/select-handler.ts#L36)

***

### keyDown()

> **keyDown**(`editor`, `e`): `void`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`keyDown`](/api-core/classes/handler/#keydown)

#### Source

[handlers/select-handler.ts:252](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/handlers/select-handler.ts#L252)

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

[handlers/select-handler.ts:275](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/handlers/select-handler.ts#L275)

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

[editor.ts:1144](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1144)

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

[editor.ts:1149](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1149)

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

[handlers/select-handler.ts:56](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/handlers/select-handler.ts#L56)

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

[handlers/select-handler.ts:120](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/handlers/select-handler.ts#L120)

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

[handlers/select-handler.ts:196](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/handlers/select-handler.ts#L196)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/select-handler.ts:28](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/handlers/select-handler.ts#L28)
