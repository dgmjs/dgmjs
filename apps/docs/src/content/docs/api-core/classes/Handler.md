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
- [`RectangleFactoryHandler`](/api-core/namespaces/handlers/classes/rectanglefactoryhandler/)
- [`EllipseFactoryHandler`](/api-core/namespaces/handlers/classes/ellipsefactoryhandler/)
- [`TextFactoryHandler`](/api-core/namespaces/handlers/classes/textfactoryhandler/)
- [`ConnectorFactoryHandler`](/api-core/namespaces/handlers/classes/connectorfactoryhandler/)
- [`LineFactoryHandler`](/api-core/namespaces/handlers/classes/linefactoryhandler/)
- [`FreehandFactoryHandler`](/api-core/namespaces/handlers/classes/freehandfactoryhandler/)
- [`HighlighterFactoryHandler`](/api-core/namespaces/handlers/classes/highlighterfactoryhandler/)
- [`ImageFactoryHandler`](/api-core/namespaces/handlers/classes/imagefactoryhandler/)
- [`FrameFactoryHandler`](/api-core/namespaces/handlers/classes/framefactoryhandler/)
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

[editor.ts:1155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1155)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1152](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1152)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Source

[editor.ts:1153](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1153)

## Methods

### activate()

> **activate**(`editor`): `void`

Activate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1181](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1181)

***

### complete()

> **complete**(`editor`): `void`

Trigger when the handler action is complete

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1172](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1172)

***

### deactivate()

> **deactivate**(`editor`): `void`

Deactivate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1189](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1189)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1234](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1234)

***

### keyDown()

> **keyDown**(`editor`, `e`): `void`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Source

[editor.ts:1224](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1224)

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

[editor.ts:1229](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1229)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1196)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1201](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1201)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Abstract

#### Source

[editor.ts:1207](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1207)

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

[editor.ts:1219](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1219)

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

[editor.ts:1213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1213)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Source

[editor.ts:1167](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1167)
