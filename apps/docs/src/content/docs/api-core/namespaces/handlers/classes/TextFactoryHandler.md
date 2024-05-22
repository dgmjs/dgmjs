---
editUrl: false
next: false
prev: false
title: "TextFactoryHandler"
---

Text Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new TextFactoryHandler()

> **new TextFactoryHandler**(`id`, `options`?): [`TextFactoryHandler`](/api-core/namespaces/handlers/classes/textfactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`TextFactoryHandler`](/api-core/namespaces/handlers/classes/textfactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1154)

## Properties

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

***

### shape

> **shape**: `null` \| [`Text`](/api-core/classes/text/) = `null`

#### Source

[handlers/text-handler.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/text-handler.ts#L24)

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

[handlers/text-handler.ts:46](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/text-handler.ts#L46)

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

[handlers/text-handler.ts:50](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/text-handler.ts#L50)

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

[handlers/text-handler.ts:34](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/text-handler.ts#L34)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

pointerMove

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`pointerMove`](/api-core/classes/handler/#pointermove)

#### Abstract

#### Source

[editor.ts:1218](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1218)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

pointerUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`pointerUp`](/api-core/classes/handler/#pointerup)

#### Abstract

#### Source

[editor.ts:1212](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1212)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/text-handler.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/text-handler.ts#L26)
