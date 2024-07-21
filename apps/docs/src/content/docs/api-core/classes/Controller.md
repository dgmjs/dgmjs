---
editUrl: false
next: false
prev: false
title: "Controller"
---

Controller

## Constructors

### new Controller()

> **new Controller**(`manipulator`): [`Controller`](/api-core/classes/controller/)

#### Parameters

• **manipulator**: [`Manipulator`](/api-core/classes/manipulator/)

#### Returns

[`Controller`](/api-core/classes/controller/)

#### Source

[editor.ts:1541](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1541)

## Properties

### dragPoint

> **dragPoint**: `number`[]

Current drag point in shape's LCS

#### Source

[editor.ts:1489](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1489)

***

### dragPointCCS

> **dragPointCCS**: `number`[]

Current drag point in shape's CCS

#### Source

[editor.ts:1499](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1499)

***

### dragPointGCS

> **dragPointGCS**: `number`[]

Current drag point in shape's GCS

#### Source

[editor.ts:1494](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1494)

***

### dragPrevPoint

> **dragPrevPoint**: `number`[]

Previous drag point in shape's LCS

#### Source

[editor.ts:1474](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1474)

***

### dragPrevPointCCS

> **dragPrevPointCCS**: `number`[]

Previous drag point in shape's CCS

#### Source

[editor.ts:1484](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1484)

***

### dragPrevPointGCS

> **dragPrevPointGCS**: `number`[]

Previous drag point in shape's GCS

#### Source

[editor.ts:1479](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1479)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

Drag start point in shape's LCS

#### Source

[editor.ts:1459](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1459)

***

### dragStartPointCCS

> **dragStartPointCCS**: `number`[]

Drag start point in shape's CCS

#### Source

[editor.ts:1469](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1469)

***

### dragStartPointGCS

> **dragStartPointGCS**: `number`[]

Drag start point in shape's GCS

#### Source

[editor.ts:1464](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1464)

***

### dragging

> **dragging**: `boolean` = `false`

Indicates whether this controller is dragging or not

#### Source

[editor.ts:1454](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1454)

***

### dx

> **dx**: `number` = `0`

X-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1504](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1504)

***

### dxGCS

> **dxGCS**: `number` = `0`

X-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1524](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1524)

***

### dxStep

> **dxStep**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1514](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1514)

***

### dxStepGCS

> **dxStepGCS**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1534](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1534)

***

### dy

> **dy**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1509](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1509)

***

### dyGCS

> **dyGCS**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1529](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1529)

***

### dyStep

> **dyStep**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1519](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1519)

***

### dyStepGCS

> **dyStepGCS**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1539](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1539)

***

### hasHandle

> **hasHandle**: `boolean` = `false`

Indicates whether this controller has handles or not

#### Source

[editor.ts:1449](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1449)

***

### manipulator

> **manipulator**: [`Manipulator`](/api-core/classes/manipulator/)

#### Source

[editor.ts:1444](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1444)

## Methods

### active()

> **active**(`editor`, `shape`): `boolean`

Indicates the controller is active or not

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Source

[editor.ts:1570](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1570)

***

### draw()

> **draw**(`editor`, `shape`): `void`

Draw controller

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`void`

#### Source

[editor.ts:1599](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1599)

***

### drawDragging()

> **drawDragging**(`editor`, `shape`, `e`): `void`

Draw on dragging

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[editor.ts:1604](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1604)

***

### drawHovering()

> **drawHovering**(`editor`, `shape`, `e`): `void`

Draw on hovering

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[editor.ts:1609](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1609)

***

### finalize()

> **finalize**(`editor`, `shape`): `void`

Finalize shape by ghost

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`void`

#### Source

[editor.ts:1624](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1624)

***

### initialize()

> **initialize**(`editor`, `shape`): `void`

Initialize before dragging

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`void`

#### Source

[editor.ts:1614](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1614)

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

[editor.ts:1715](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1715)

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

[editor.ts:1729](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1729)

***

### mouseCursor()

> **mouseCursor**(`editor`, `shape`, `e`): `null` \| [`string`, `number`]

Returns mouse cursor for the controller

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`null` \| [`string`, `number`]

cursor object (null is default cursor)

#### Source

[editor.ts:1588](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1588)

***

### mouseIn()

> **mouseIn**(`editor`, `shape`, `e`): `boolean`

Returns true if mouse cursor is inside the controller.
Default implementation returns true if the point inside the shape.

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`boolean`

#### Source

[editor.ts:1578](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1578)

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

[editor.ts:1630](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1630)

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

[editor.ts:1662](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1662)

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

[editor.ts:1696](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1696)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Source

[editor.ts:1546](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1546)

***

### update()

> **update**(`editor`, `shape`): `void`

Update ghost

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`void`

#### Source

[editor.ts:1619](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1619)
