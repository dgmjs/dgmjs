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

[editor.ts:1764](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1764)

## Properties

### controllers

> **controllers**: [`Controller`](/api-core/classes/controller/)[]

Controllers of the manipulator

#### Source

[editor.ts:1757](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1757)

***

### draggingController

> **draggingController**: `null` \| [`Controller`](/api-core/classes/controller/)

Dragging controller

#### Source

[editor.ts:1762](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1762)

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

[editor.ts:1898](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1898)

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

[editor.ts:1910](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1910)

***

### isDragging()

> **isDragging**(): `boolean`

Returns one of controllers is dragging or not

#### Returns

`boolean`

#### Source

[editor.ts:1772](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1772)

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

[editor.ts:1865](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1865)

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

[editor.ts:1882](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1882)

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

[editor.ts:1799](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1799)

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

[editor.ts:1779](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1779)

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

[editor.ts:1788](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1788)

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

[editor.ts:1819](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1819)

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

[editor.ts:1837](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1837)

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

[editor.ts:1852](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1852)
