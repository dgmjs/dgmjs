---
editUrl: false
next: false
prev: false
title: "Manipulator"
---

Manipulator

## Constructors

### new Manipulator()

> **new Manipulator**(): [`Manipulator`](/api-core/classes/manipulator/)

#### Returns

[`Manipulator`](/api-core/classes/manipulator/)

#### Source

[packages/core/src/editor.ts:1948](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1948)

## Properties

### controllers

> **controllers**: [`Controller`](/api-core/classes/controller/)[]

Controllers of the manipulator

#### Source

[packages/core/src/editor.ts:1941](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1941)

***

### draggingController

> **draggingController**: `null` \| [`Controller`](/api-core/classes/controller/)

Dragging controller

#### Source

[packages/core/src/editor.ts:1946](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1946)

## Methods

### draw()

> **draw**(`editor`, `shape`): `void`

Draw controllers

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:2082](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2082)

***

### drawHovering()

> **drawHovering**(`editor`, `shape`, `e`, `thickness`): `void`

Draw hovering for the shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

• **thickness**: `number`= `1.5`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:2096](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2096)

***

### isDragging()

> **isDragging**(): `boolean`

Returns one of controllers is dragging or not

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:1956](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1956)

***

### keyDown()

> **keyDown**(`editor`, `shape`, `e`): `boolean`

Handle keydown event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: `KeyboardEvent`

#### Returns

`boolean`

handled or not

#### Source

[packages/core/src/editor.ts:2049](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2049)

***

### keyUp()

> **keyUp**(`editor`, `shape`, `e`): `boolean`

Handle keyup event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: `KeyboardEvent`

#### Returns

`boolean`

handled or not

#### Source

[packages/core/src/editor.ts:2066](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2066)

***

### mouseCursor()

> **mouseCursor**(`editor`, `shape`, `e`): `null` \| [`string`, `number`]

Returns mouse cursor for the manipulator

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`null` \| [`string`, `number`]

cursor object

#### Source

[packages/core/src/editor.ts:1983](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1983)

***

### mouseIn()

> **mouseIn**(`editor`, `shape`, `e`): `boolean`

Returns true if mouse cursor is inside the shape or control points

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:1963](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1963)

***

### mouseInHandles()

> **mouseInHandles**(`editor`, `shape`, `e`): `boolean`

Returns true if mouse cursor is inside the controller's handles

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:1972](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1972)

***

### pointerDown()

> **pointerDown**(`editor`, `shape`, `e`): `boolean`

Handle pointer down event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`boolean`

handled or not

#### Source

[packages/core/src/editor.ts:2003](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2003)

***

### pointerMove()

> **pointerMove**(`editor`, `shape`, `e`): `boolean`

Handle pointer move event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`boolean`

handled or not

#### Source

[packages/core/src/editor.ts:2021](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2021)

***

### pointerUp()

> **pointerUp**(`editor`, `shape`, `e`): `boolean`

Handle pointer up event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`boolean`

handled or not

#### Source

[packages/core/src/editor.ts:2036](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2036)
