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

[editor.ts:1387](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1387)

## Properties

### dragPoint

> **dragPoint**: `number`[]

Current drag point in shape's LCS

#### Source

[editor.ts:1335](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1335)

***

### dragPointCCS

> **dragPointCCS**: `number`[]

Current drag point in shape's CCS

#### Source

[editor.ts:1345](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1345)

***

### dragPointGCS

> **dragPointGCS**: `number`[]

Current drag point in shape's GCS

#### Source

[editor.ts:1340](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1340)

***

### dragPrevPoint

> **dragPrevPoint**: `number`[]

Previous drag point in shape's LCS

#### Source

[editor.ts:1320](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1320)

***

### dragPrevPointCCS

> **dragPrevPointCCS**: `number`[]

Previous drag point in shape's CCS

#### Source

[editor.ts:1330](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1330)

***

### dragPrevPointGCS

> **dragPrevPointGCS**: `number`[]

Previous drag point in shape's GCS

#### Source

[editor.ts:1325](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1325)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

Drag start point in shape's LCS

#### Source

[editor.ts:1305](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1305)

***

### dragStartPointCCS

> **dragStartPointCCS**: `number`[]

Drag start point in shape's CCS

#### Source

[editor.ts:1315](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1315)

***

### dragStartPointGCS

> **dragStartPointGCS**: `number`[]

Drag start point in shape's GCS

#### Source

[editor.ts:1310](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1310)

***

### dragging

> **dragging**: `boolean` = `false`

Indicates whether this controller is dragging or not

#### Source

[editor.ts:1300](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1300)

***

### dx

> **dx**: `number` = `0`

X-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1350](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1350)

***

### dxGCS

> **dxGCS**: `number` = `0`

X-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1370](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1370)

***

### dxStep

> **dxStep**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1360](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1360)

***

### dxStepGCS

> **dxStepGCS**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1380](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1380)

***

### dy

> **dy**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1355](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1355)

***

### dyGCS

> **dyGCS**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1375](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1375)

***

### dyStep

> **dyStep**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1365](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1365)

***

### dyStepGCS

> **dyStepGCS**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1385](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1385)

***

### manipulator

> **manipulator**: [`Manipulator`](/api-core/classes/manipulator/)

#### Source

[editor.ts:1295](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1295)

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

[editor.ts:1416](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1416)

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

[editor.ts:1445](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1445)

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

[editor.ts:1450](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1450)

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

[editor.ts:1455](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1455)

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

[editor.ts:1470](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1470)

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

[editor.ts:1460](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1460)

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

[editor.ts:1561](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1561)

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

[editor.ts:1575](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1575)

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

[editor.ts:1434](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1434)

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

[editor.ts:1424](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1424)

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

[editor.ts:1476](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1476)

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

[editor.ts:1508](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1508)

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

[editor.ts:1542](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1542)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Source

[editor.ts:1392](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1392)

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

[editor.ts:1465](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1465)
