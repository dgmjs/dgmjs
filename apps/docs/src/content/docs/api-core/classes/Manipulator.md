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

[editor.ts:1762](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1762)

## Properties

### controllers

> **controllers**: [`Controller`](/api-core/classes/controller/)[]

Controllers of the manipulator

#### Source

[editor.ts:1755](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1755)

***

### draggingController

> **draggingController**: `null` \| [`Controller`](/api-core/classes/controller/)

Dragging controller

#### Source

[editor.ts:1760](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1760)

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

[editor.ts:1896](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1896)

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

[editor.ts:1908](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1908)

***

### isDragging()

> **isDragging**(): `boolean`

Returns one of controllers is dragging or not

#### Returns

`boolean`

#### Source

[editor.ts:1770](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1770)

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

[editor.ts:1863](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1863)

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

[editor.ts:1880](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1880)

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

[editor.ts:1797](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1797)

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

[editor.ts:1777](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1777)

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

[editor.ts:1786](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1786)

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

[editor.ts:1817](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1817)

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

[editor.ts:1835](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1835)

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

[editor.ts:1850](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1850)
