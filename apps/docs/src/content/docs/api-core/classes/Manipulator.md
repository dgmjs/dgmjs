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

[packages/core/src/editor.ts:1953](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1953)

## Properties

### controllers

> **controllers**: [`Controller`](/api-core/classes/controller/)[]

Controllers of the manipulator

#### Source

[packages/core/src/editor.ts:1946](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1946)

***

### draggingController

> **draggingController**: `null` \| [`Controller`](/api-core/classes/controller/)

Dragging controller

#### Source

[packages/core/src/editor.ts:1951](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1951)

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

[packages/core/src/editor.ts:2087](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2087)

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

[packages/core/src/editor.ts:2101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2101)

***

### isDragging()

> **isDragging**(): `boolean`

Returns one of controllers is dragging or not

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:1961](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1961)

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

[packages/core/src/editor.ts:2054](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2054)

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

[packages/core/src/editor.ts:2071](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2071)

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

[packages/core/src/editor.ts:1988](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1988)

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

[packages/core/src/editor.ts:1968](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1968)

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

[packages/core/src/editor.ts:1977](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1977)

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

[packages/core/src/editor.ts:2008](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2008)

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

[packages/core/src/editor.ts:2026](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2026)

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

[packages/core/src/editor.ts:2041](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2041)
