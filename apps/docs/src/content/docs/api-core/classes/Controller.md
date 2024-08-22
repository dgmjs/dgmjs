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

[editor.ts:1555](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1555)

## Properties

### dragPoint

> **dragPoint**: `number`[]

Current drag point in shape's LCS

#### Source

[editor.ts:1503](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1503)

***

### dragPointCCS

> **dragPointCCS**: `number`[]

Current drag point in shape's CCS

#### Source

[editor.ts:1513](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1513)

***

### dragPointGCS

> **dragPointGCS**: `number`[]

Current drag point in shape's GCS

#### Source

[editor.ts:1508](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1508)

***

### dragPrevPoint

> **dragPrevPoint**: `number`[]

Previous drag point in shape's LCS

#### Source

[editor.ts:1488](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1488)

***

### dragPrevPointCCS

> **dragPrevPointCCS**: `number`[]

Previous drag point in shape's CCS

#### Source

[editor.ts:1498](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1498)

***

### dragPrevPointGCS

> **dragPrevPointGCS**: `number`[]

Previous drag point in shape's GCS

#### Source

[editor.ts:1493](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1493)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

Drag start point in shape's LCS

#### Source

[editor.ts:1473](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1473)

***

### dragStartPointCCS

> **dragStartPointCCS**: `number`[]

Drag start point in shape's CCS

#### Source

[editor.ts:1483](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1483)

***

### dragStartPointGCS

> **dragStartPointGCS**: `number`[]

Drag start point in shape's GCS

#### Source

[editor.ts:1478](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1478)

***

### dragging

> **dragging**: `boolean` = `false`

Indicates whether this controller is dragging or not

#### Source

[editor.ts:1468](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1468)

***

### dx

> **dx**: `number` = `0`

X-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1518](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1518)

***

### dxGCS

> **dxGCS**: `number` = `0`

X-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1538](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1538)

***

### dxStep

> **dxStep**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1528](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1528)

***

### dxStepGCS

> **dxStepGCS**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1548](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1548)

***

### dy

> **dy**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1523](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1523)

***

### dyGCS

> **dyGCS**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1543](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1543)

***

### dyStep

> **dyStep**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1533](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1533)

***

### dyStepGCS

> **dyStepGCS**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1553](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1553)

***

### hasHandle

> **hasHandle**: `boolean` = `false`

Indicates whether this controller has handles or not

#### Source

[editor.ts:1463](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1463)

***

### manipulator

> **manipulator**: [`Manipulator`](/api-core/classes/manipulator/)

#### Source

[editor.ts:1458](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1458)

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

[editor.ts:1584](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1584)

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

[editor.ts:1613](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1613)

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

[editor.ts:1618](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1618)

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

[editor.ts:1623](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1623)

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

[editor.ts:1638](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1638)

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

[editor.ts:1628](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1628)

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

[editor.ts:1729](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1729)

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

[editor.ts:1743](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1743)

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

[editor.ts:1602](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1602)

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

[editor.ts:1592](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1592)

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

[editor.ts:1644](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1644)

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

[editor.ts:1676](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1676)

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

[editor.ts:1710](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1710)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Source

[editor.ts:1560](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1560)

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

[editor.ts:1633](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1633)
