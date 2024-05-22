---
editUrl: false
next: false
prev: false
title: "EmbedFactoryHandler"
---

Embed Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new EmbedFactoryHandler()

> **new EmbedFactoryHandler**(`id`, `options`?): [`EmbedFactoryHandler`](/api-core/namespaces/handlers/classes/embedfactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`EmbedFactoryHandler`](/api-core/namespaces/handlers/classes/embedfactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1154)

## Properties

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/embed-handler.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L25)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/embed-handler.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L24)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/embed-handler.ts:23](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L23)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1151](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1151)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1152](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1152)

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

[editor.ts:1180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1180)

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

[editor.ts:1171](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1171)

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

[editor.ts:1188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1188)

***

### drawDragging()

> **drawDragging**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/embed-handler.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L87)

***

### drawHovering()

> **drawHovering**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/embed-handler.ts:85](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L85)

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

[editor.ts:1233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1233)

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

[editor.ts:1223](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1223)

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

[editor.ts:1228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1228)

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

[handlers/embed-handler.ts:77](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L77)

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

[handlers/embed-handler.ts:81](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L81)

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

[handlers/embed-handler.ts:37](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L37)

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

[handlers/embed-handler.ts:51](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L51)

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

[handlers/embed-handler.ts:66](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L66)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/embed-handler.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/embed-handler.ts#L27)
