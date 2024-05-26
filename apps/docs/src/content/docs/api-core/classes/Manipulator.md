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

[editor.ts:1540](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1540)

## Properties

### controllers

> **controllers**: [`Controller`](/api-core/classes/controller/)[]

Controllers of the manipulator

#### Source

[editor.ts:1533](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1533)

***

### draggingController

> **draggingController**: `null` \| [`Controller`](/api-core/classes/controller/)

Dragging controller

#### Source

[editor.ts:1538](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1538)

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

[editor.ts:1664](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1664)

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

[editor.ts:1676](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1676)

***

### isDragging()

> **isDragging**(): `boolean`

Returns one of controllers is dragging or not

#### Returns

`boolean`

#### Source

[editor.ts:1548](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1548)

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

[editor.ts:1631](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1631)

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

[editor.ts:1648](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1648)

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

[editor.ts:1565](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1565)

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

[editor.ts:1555](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1555)

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

[editor.ts:1585](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1585)

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

[editor.ts:1603](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1603)

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

[editor.ts:1618](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1618)
