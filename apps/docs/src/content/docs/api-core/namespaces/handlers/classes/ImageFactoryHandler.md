---
editUrl: false
next: false
prev: false
title: "ImageFactoryHandler"
---

Image Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new ImageFactoryHandler()

> **new ImageFactoryHandler**(`id`, `options`?): [`ImageFactoryHandler`](/api-core/namespaces/handlers/classes/imagefactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`ImageFactoryHandler`](/api-core/namespaces/handlers/classes/imagefactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1041](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1041)

## Properties

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1038](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1038)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1039](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1039)

## Methods

### done()

> **done**(`editor`): `void`

Call this method when the handler is done

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`done`](/api-core/classes/handler/#done)

#### Source

[editor.ts:1072](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1072)

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

[editor.ts:1119](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1119)

***

### getLock()

> **getLock**(): `boolean`

Get lock

#### Returns

`boolean`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`getLock`](/api-core/classes/handler/#getlock)

#### Source

[editor.ts:1058](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1058)

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

[editor.ts:1109](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1109)

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

[editor.ts:1114](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1114)

***

### onActivate()

> **onActivate**(`editor`): `void`

called when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onActivate`](/api-core/classes/handler/#onactivate)

#### Source

[handlers/image-handler.ts:22](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/handlers/image-handler.ts#L22)

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

[editor.ts:1086](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1086)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`pointerDown`](/api-core/classes/handler/#pointerdown)

#### Abstract

#### Source

[editor.ts:1092](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1092)

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

[editor.ts:1104](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1104)

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

[editor.ts:1098](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1098)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[editor.ts:1053](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1053)

***

### setLock()

> **setLock**(`lock`): `void`

Set lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`setLock`](/api-core/classes/handler/#setlock)

#### Source

[editor.ts:1065](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1065)