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

[editor.ts:1717](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1717)

## Properties

### dragPoint

> **dragPoint**: `number`[]

Current drag point in shape's LCS

#### Source

[editor.ts:1665](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1665)

***

### dragPointCCS

> **dragPointCCS**: `number`[]

Current drag point in shape's CCS

#### Source

[editor.ts:1675](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1675)

***

### dragPointGCS

> **dragPointGCS**: `number`[]

Current drag point in shape's GCS

#### Source

[editor.ts:1670](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1670)

***

### dragPrevPoint

> **dragPrevPoint**: `number`[]

Previous drag point in shape's LCS

#### Source

[editor.ts:1650](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1650)

***

### dragPrevPointCCS

> **dragPrevPointCCS**: `number`[]

Previous drag point in shape's CCS

#### Source

[editor.ts:1660](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1660)

***

### dragPrevPointGCS

> **dragPrevPointGCS**: `number`[]

Previous drag point in shape's GCS

#### Source

[editor.ts:1655](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1655)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

Drag start point in shape's LCS

#### Source

[editor.ts:1635](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1635)

***

### dragStartPointCCS

> **dragStartPointCCS**: `number`[]

Drag start point in shape's CCS

#### Source

[editor.ts:1645](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1645)

***

### dragStartPointGCS

> **dragStartPointGCS**: `number`[]

Drag start point in shape's GCS

#### Source

[editor.ts:1640](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1640)

***

### dragging

> **dragging**: `boolean` = `false`

Indicates whether this controller is dragging or not

#### Source

[editor.ts:1630](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1630)

***

### dx

> **dx**: `number` = `0`

X-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1680](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1680)

***

### dxGCS

> **dxGCS**: `number` = `0`

X-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1700](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1700)

***

### dxStep

> **dxStep**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1690](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1690)

***

### dxStepGCS

> **dxStepGCS**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1710](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1710)

***

### dy

> **dy**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1685](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1685)

***

### dyGCS

> **dyGCS**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1705](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1705)

***

### dyStep

> **dyStep**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1695](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1695)

***

### dyStepGCS

> **dyStepGCS**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1715](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1715)

***

### hasHandle

> **hasHandle**: `boolean` = `false`

Indicates whether this controller has handles or not

#### Source

[editor.ts:1625](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1625)

***

### manipulator

> **manipulator**: [`Manipulator`](/api-core/classes/manipulator/)

#### Source

[editor.ts:1620](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1620)

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

[editor.ts:1746](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1746)

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

[editor.ts:1775](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1775)

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

[editor.ts:1780](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1780)

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

[editor.ts:1785](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1785)

***

### finalize()

> **finalize**(`editor`, `shape`, `e`): `void`

Finalize shape by ghost

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[editor.ts:1800](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1800)

***

### initialize()

> **initialize**(`editor`, `shape`, `e`): `void`

Initialize before dragging

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[editor.ts:1790](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1790)

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

[editor.ts:1891](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1891)

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

[editor.ts:1905](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1905)

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

[editor.ts:1764](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1764)

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

[editor.ts:1754](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1754)

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

[editor.ts:1806](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1806)

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

[editor.ts:1838](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1838)

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

[editor.ts:1872](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1872)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Source

[editor.ts:1722](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1722)

***

### update()

> **update**(`editor`, `shape`, `e`): `void`

Update ghost

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[editor.ts:1795](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1795)
