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

[packages/core/src/editor.ts:1748](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1748)

## Properties

### dragPoint

> **dragPoint**: `number`[]

Current drag point in shape's LCS

#### Source

[packages/core/src/editor.ts:1696](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1696)

***

### dragPointCCS

> **dragPointCCS**: `number`[]

Current drag point in shape's CCS

#### Source

[packages/core/src/editor.ts:1706](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1706)

***

### dragPointGCS

> **dragPointGCS**: `number`[]

Current drag point in shape's GCS

#### Source

[packages/core/src/editor.ts:1701](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1701)

***

### dragPrevPoint

> **dragPrevPoint**: `number`[]

Previous drag point in shape's LCS

#### Source

[packages/core/src/editor.ts:1681](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1681)

***

### dragPrevPointCCS

> **dragPrevPointCCS**: `number`[]

Previous drag point in shape's CCS

#### Source

[packages/core/src/editor.ts:1691](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1691)

***

### dragPrevPointGCS

> **dragPrevPointGCS**: `number`[]

Previous drag point in shape's GCS

#### Source

[packages/core/src/editor.ts:1686](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1686)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

Drag start point in shape's LCS

#### Source

[packages/core/src/editor.ts:1666](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1666)

***

### dragStartPointCCS

> **dragStartPointCCS**: `number`[]

Drag start point in shape's CCS

#### Source

[packages/core/src/editor.ts:1676](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1676)

***

### dragStartPointGCS

> **dragStartPointGCS**: `number`[]

Drag start point in shape's GCS

#### Source

[packages/core/src/editor.ts:1671](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1671)

***

### dragging

> **dragging**: `boolean` = `false`

Indicates whether this controller is dragging or not

#### Source

[packages/core/src/editor.ts:1661](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1661)

***

### dx

> **dx**: `number` = `0`

X-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[packages/core/src/editor.ts:1711](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1711)

***

### dxGCS

> **dxGCS**: `number` = `0`

X-distance from dragStartPoint to dragPoint in GCS

#### Source

[packages/core/src/editor.ts:1731](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1731)

***

### dxStep

> **dxStep**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[packages/core/src/editor.ts:1721](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1721)

***

### dxStepGCS

> **dxStepGCS**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in GCS

#### Source

[packages/core/src/editor.ts:1741](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1741)

***

### dy

> **dy**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[packages/core/src/editor.ts:1716](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1716)

***

### dyGCS

> **dyGCS**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in GCS

#### Source

[packages/core/src/editor.ts:1736](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1736)

***

### dyStep

> **dyStep**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[packages/core/src/editor.ts:1726](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1726)

***

### dyStepGCS

> **dyStepGCS**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in GCS

#### Source

[packages/core/src/editor.ts:1746](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1746)

***

### hasHandle

> **hasHandle**: `boolean` = `false`

Indicates whether this controller has handles or not

#### Source

[packages/core/src/editor.ts:1656](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1656)

***

### manipulator

> **manipulator**: [`Manipulator`](/api-core/classes/manipulator/)

#### Source

[packages/core/src/editor.ts:1651](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1651)

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

[packages/core/src/editor.ts:1777](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1777)

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

[packages/core/src/editor.ts:1806](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1806)

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

[packages/core/src/editor.ts:1811](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1811)

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

[packages/core/src/editor.ts:1816](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1816)

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

[packages/core/src/editor.ts:1831](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1831)

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

[packages/core/src/editor.ts:1821](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1821)

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

[packages/core/src/editor.ts:1922](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1922)

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

[packages/core/src/editor.ts:1936](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1936)

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

[packages/core/src/editor.ts:1795](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1795)

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

[packages/core/src/editor.ts:1785](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1785)

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

[packages/core/src/editor.ts:1837](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1837)

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

[packages/core/src/editor.ts:1869](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1869)

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

[packages/core/src/editor.ts:1903](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1903)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1753](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1753)

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

[packages/core/src/editor.ts:1826](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1826)
