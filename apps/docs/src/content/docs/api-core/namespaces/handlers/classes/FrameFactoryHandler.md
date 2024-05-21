---
editUrl: false
next: false
prev: false
title: "FrameFactoryHandler"
---

Frame Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new FrameFactoryHandler()

> **new FrameFactoryHandler**(`id`, `options`?): [`FrameFactoryHandler`](/api-core/namespaces/handlers/classes/framefactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`FrameFactoryHandler`](/api-core/namespaces/handlers/classes/framefactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1097](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1097)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/frame-handler.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L27)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/frame-handler.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L26)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/frame-handler.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L25)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1094](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1094)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1095](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1095)

***

### shape

> **shape**: `null` \| [`Frame`](/api-core/classes/frame/) = `null`

#### Source

[handlers/frame-handler.ts:28](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L28)

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

[editor.ts:1123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1123)

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

[editor.ts:1114](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1114)

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

[editor.ts:1131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1131)

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

[editor.ts:1176](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1176)

***

### finalize()

> **finalize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/frame-handler.ts:68](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L68)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/frame-handler.ts:37](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L37)

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

[handlers/frame-handler.ts:126](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L126)

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

[editor.ts:1171](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1171)

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

[handlers/frame-handler.ts:136](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L136)

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

[handlers/frame-handler.ts:140](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L140)

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

[handlers/frame-handler.ts:86](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L86)

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

[handlers/frame-handler.ts:101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L101)

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

[handlers/frame-handler.ts:117](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L117)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/frame-handler.ts:30](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L30)

***

### update()

> **update**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/frame-handler.ts:51](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/frame-handler.ts#L51)
