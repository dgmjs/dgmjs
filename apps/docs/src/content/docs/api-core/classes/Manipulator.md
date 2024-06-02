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

[editor.ts:1594](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1594)

## Properties

### controllers

> **controllers**: [`Controller`](/api-core/classes/controller/)[]

Controllers of the manipulator

#### Source

[editor.ts:1587](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1587)

***

### draggingController

> **draggingController**: `null` \| [`Controller`](/api-core/classes/controller/)

Dragging controller

#### Source

[editor.ts:1592](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1592)

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

[editor.ts:1718](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1718)

***

### drawHovering()

> **drawHovering**(`editor`, `shape`, `e`): `void`

Draw hovering for the shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[editor.ts:1730](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1730)

***

### isDragging()

> **isDragging**(): `boolean`

Returns one of controllers is dragging or not

#### Returns

`boolean`

#### Source

[editor.ts:1602](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1602)

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

[editor.ts:1685](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1685)

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

[editor.ts:1702](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1702)

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

[editor.ts:1619](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1619)

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

[editor.ts:1609](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1609)

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

[editor.ts:1639](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1639)

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

[editor.ts:1657](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1657)

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

[editor.ts:1672](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1672)
