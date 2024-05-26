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

[editor.ts:1333](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1333)

## Properties

### dragPoint

> **dragPoint**: `number`[]

Current drag point in shape's LCS

#### Source

[editor.ts:1281](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1281)

***

### dragPointCCS

> **dragPointCCS**: `number`[]

Current drag point in shape's CCS

#### Source

[editor.ts:1291](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1291)

***

### dragPointGCS

> **dragPointGCS**: `number`[]

Current drag point in shape's GCS

#### Source

[editor.ts:1286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1286)

***

### dragPrevPoint

> **dragPrevPoint**: `number`[]

Previous drag point in shape's LCS

#### Source

[editor.ts:1266](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1266)

***

### dragPrevPointCCS

> **dragPrevPointCCS**: `number`[]

Previous drag point in shape's CCS

#### Source

[editor.ts:1276](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1276)

***

### dragPrevPointGCS

> **dragPrevPointGCS**: `number`[]

Previous drag point in shape's GCS

#### Source

[editor.ts:1271](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1271)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

Drag start point in shape's LCS

#### Source

[editor.ts:1251](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1251)

***

### dragStartPointCCS

> **dragStartPointCCS**: `number`[]

Drag start point in shape's CCS

#### Source

[editor.ts:1261](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1261)

***

### dragStartPointGCS

> **dragStartPointGCS**: `number`[]

Drag start point in shape's GCS

#### Source

[editor.ts:1256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1256)

***

### dragging

> **dragging**: `boolean` = `false`

Indicates whether this controller is dragging or not

#### Source

[editor.ts:1246](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1246)

***

### dx

> **dx**: `number` = `0`

X-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1296](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1296)

***

### dxGCS

> **dxGCS**: `number` = `0`

X-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1316](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1316)

***

### dxStep

> **dxStep**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1306](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1306)

***

### dxStepGCS

> **dxStepGCS**: `number` = `0`

X-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1326](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1326)

***

### dy

> **dy**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1301](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1301)

***

### dyGCS

> **dyGCS**: `number` = `0`

Y-distance from dragStartPoint to dragPoint in GCS

#### Source

[editor.ts:1321](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1321)

***

### dyStep

> **dyStep**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in shape's LCS

#### Source

[editor.ts:1311](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1311)

***

### dyStepGCS

> **dyStepGCS**: `number` = `0`

Y-distance from dragPrevPoint to dragPoint in GCS

#### Source

[editor.ts:1331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1331)

***

### manipulator

> **manipulator**: [`Manipulator`](/api-core/classes/manipulator/)

#### Source

[editor.ts:1241](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1241)

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

[editor.ts:1362](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1362)

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

[editor.ts:1391](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1391)

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

[editor.ts:1396](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1396)

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

[editor.ts:1401](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1401)

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

[editor.ts:1416](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1416)

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

[editor.ts:1406](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1406)

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

[editor.ts:1507](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1507)

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

[editor.ts:1521](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1521)

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

[editor.ts:1380](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1380)

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

[editor.ts:1370](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1370)

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

[editor.ts:1422](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1422)

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

[editor.ts:1454](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1454)

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

[editor.ts:1488](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1488)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Source

[editor.ts:1338](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1338)

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

[editor.ts:1411](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1411)
