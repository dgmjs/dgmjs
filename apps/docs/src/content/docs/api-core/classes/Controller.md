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

[editor.ts:1557](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1557)

## Properties

### dragPoint

> **dragPoint**: `number`[]

Current drag point in shape's LCS

#### Source

[editor.ts:1505](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1505)

***

### dragPointCCS

> **dragPointCCS**: `number`[]

Current drag point in shape's CCS

#### Source

[editor.ts:1515](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1515)

***

### dragPointGCS

> **dragPointGCS**: `number`[]

Current drag point in shape's GCS

#### Source

[editor.ts:1510](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1510)

***

### dragPrevPoint

> **dragPrevPoint**: `number`[]

Previous drag point in shape's LCS

#### Source

[editor.ts:1490](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1490)

***

### dragPrevPointCCS

> **dragPrevPointCCS**: `number`[]

Previous drag point in shape's CCS

#### Source

[editor.ts:1500](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1500)

***

### dragPrevPointGCS

> **dragPrevPointGCS**: `number`[]

Previous drag point in shape's GCS

#### Source

[editor.ts:1495](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1495)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

Drag start point in shape's LCS

#### Source

[editor.ts:1475](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1475)

***

### dragStartPointCCS

> **dragStartPointCCS**: `number`[]

Drag start point in shape's CCS

#### Source

[editor.ts:1485](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1485)

***

### dragStartPointGCS

> **dragStartPointGCS**: `number`[]

Drag start point in shape's GCS

#### Source

[editor.ts:1480](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1480)

***

### dragging

> **dragging**: `boolean` = `false`

Indicates whether this controller is dragging or not

#### Source

[editor.ts:1470](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1470)

***

### dx

> **dx**: `number` = `0`

X-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1520](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1520)

***

### dxGCS

> **dxGCS**: `number` = `0`

X-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1540](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1540)

***

### dxStep

> **dxStep**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1530](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1530)

***

### dxStepGCS

> **dxStepGCS**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1550](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1550)

***

### dy

> **dy**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1525](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1525)

***

### dyGCS

> **dyGCS**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1545](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1545)

***

### dyStep

> **dyStep**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1535](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1535)

***

### dyStepGCS

> **dyStepGCS**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1555](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1555)

***

### hasHandle

> **hasHandle**: `boolean` = `false`

Indicates whether this controller has handles or not

#### Source

[editor.ts:1465](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1465)

***

### manipulator

> **manipulator**: [`Manipulator`](/api-core/classes/manipulator/)

#### Source

[editor.ts:1460](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1460)

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

[editor.ts:1586](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1586)

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

[editor.ts:1615](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1615)

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

[editor.ts:1620](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1620)

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

[editor.ts:1625](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1625)

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

[editor.ts:1640](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1640)

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

[editor.ts:1630](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1630)

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

[editor.ts:1731](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1731)

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

[editor.ts:1745](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1745)

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

[editor.ts:1604](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1604)

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

[editor.ts:1594](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1594)

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

[editor.ts:1646](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1646)

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

[editor.ts:1678](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1678)

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

[editor.ts:1712](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1712)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Source

[editor.ts:1562](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1562)

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

[editor.ts:1635](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1635)
