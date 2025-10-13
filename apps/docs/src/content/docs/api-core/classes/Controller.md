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

[packages/core/src/editor.ts:1741](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1741)

## Properties

### dragPoint

> **dragPoint**: `number`[]

Current drag point in shape's LCS

#### Source

[packages/core/src/editor.ts:1689](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1689)

***

### dragPointCCS

> **dragPointCCS**: `number`[]

Current drag point in shape's CCS

#### Source

[packages/core/src/editor.ts:1699](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1699)

***

### dragPointGCS

> **dragPointGCS**: `number`[]

Current drag point in shape's GCS

#### Source

[packages/core/src/editor.ts:1694](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1694)

***

### dragPrevPoint

> **dragPrevPoint**: `number`[]

Previous drag point in shape's LCS

#### Source

[packages/core/src/editor.ts:1674](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1674)

***

### dragPrevPointCCS

> **dragPrevPointCCS**: `number`[]

Previous drag point in shape's CCS

#### Source

[packages/core/src/editor.ts:1684](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1684)

***

### dragPrevPointGCS

> **dragPrevPointGCS**: `number`[]

Previous drag point in shape's GCS

#### Source

[packages/core/src/editor.ts:1679](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1679)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

Drag start point in shape's LCS

#### Source

[packages/core/src/editor.ts:1659](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1659)

***

### dragStartPointCCS

> **dragStartPointCCS**: `number`[]

Drag start point in shape's CCS

#### Source

[packages/core/src/editor.ts:1669](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1669)

***

### dragStartPointGCS

> **dragStartPointGCS**: `number`[]

Drag start point in shape's GCS

#### Source

[packages/core/src/editor.ts:1664](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1664)

***

### dragging

> **dragging**: `boolean` = `false`

Indicates whether this controller is dragging or not

#### Source

[packages/core/src/editor.ts:1654](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1654)

***

### dx

> **dx**: `number` = `0`

X-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[packages/core/src/editor.ts:1704](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1704)

***

### dxGCS

> **dxGCS**: `number` = `0`

X-distance from dragStartPoint to dragPoint in GCS

#### Source

[packages/core/src/editor.ts:1724](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1724)

***

### dxStep

> **dxStep**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[packages/core/src/editor.ts:1714](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1714)

***

### dxStepGCS

> **dxStepGCS**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in GCS

#### Source

[packages/core/src/editor.ts:1734](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1734)

***

### dy

> **dy**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[packages/core/src/editor.ts:1709](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1709)

***

### dyGCS

> **dyGCS**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in GCS

#### Source

[packages/core/src/editor.ts:1729](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1729)

***

### dyStep

> **dyStep**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[packages/core/src/editor.ts:1719](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1719)

***

### dyStepGCS

> **dyStepGCS**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in GCS

#### Source

[packages/core/src/editor.ts:1739](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1739)

***

### hasHandle

> **hasHandle**: `boolean` = `false`

Indicates whether this controller has handles or not

#### Source

[packages/core/src/editor.ts:1649](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1649)

***

### manipulator

> **manipulator**: [`Manipulator`](/api-core/classes/manipulator/)

#### Source

[packages/core/src/editor.ts:1644](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1644)

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

[packages/core/src/editor.ts:1770](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1770)

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

[packages/core/src/editor.ts:1799](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1799)

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

[packages/core/src/editor.ts:1804](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1804)

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

[packages/core/src/editor.ts:1809](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1809)

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

[packages/core/src/editor.ts:1824](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1824)

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

[packages/core/src/editor.ts:1814](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1814)

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

[packages/core/src/editor.ts:1915](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1915)

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

[packages/core/src/editor.ts:1929](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1929)

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

[packages/core/src/editor.ts:1788](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1788)

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

[packages/core/src/editor.ts:1778](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1778)

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

[packages/core/src/editor.ts:1830](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1830)

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

[packages/core/src/editor.ts:1862](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1862)

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

[packages/core/src/editor.ts:1896](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1896)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1746](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1746)

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

[packages/core/src/editor.ts:1819](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1819)
