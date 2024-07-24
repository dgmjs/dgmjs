---
editUrl: false
next: false
prev: false
title: "MemoizationCanvas"
---

Memoization Canvas

## Constructors

### new MemoizationCanvas()

> **new MemoizationCanvas**(): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:292](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L292)

## Properties

### alpha

> **alpha**: `number`

#### Source

[graphics/memoization-canvas.ts:289](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L289)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/memoization-canvas.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L278)

***

### do

> **do**: `DO`[]

#### Source

[graphics/memoization-canvas.ts:280](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L280)

***

### fillColor

> **fillColor**: `string`

#### Source

[graphics/memoization-canvas.ts:285](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L285)

***

### fillStyle

> **fillStyle**: `string`

#### Source

[graphics/memoization-canvas.ts:286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L286)

***

### font

> **font**: `string`

#### Source

[graphics/memoization-canvas.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L288)

***

### fontColor

> **fontColor**: `string`

#### Source

[graphics/memoization-canvas.ts:287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L287)

***

### generator

> **generator**: `RoughGenerator`

#### Source

[graphics/memoization-canvas.ts:281](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L281)

***

### roughness

> **roughness**: `number`

#### Source

[graphics/memoization-canvas.ts:290](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L290)

***

### stateStack

> **stateStack**: [`CanvasState`](/api-core/interfaces/canvasstate/)[]

#### Source

[graphics/memoization-canvas.ts:279](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L279)

***

### strokeColor

> **strokeColor**: `string`

#### Source

[graphics/memoization-canvas.ts:282](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L282)

***

### strokePattern

> **strokePattern**: `number`[]

#### Source

[graphics/memoization-canvas.ts:284](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L284)

***

### strokeWidth

> **strokeWidth**: `number`

#### Source

[graphics/memoization-canvas.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L283)

## Methods

### arc()

> **arc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw an arc

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:992](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L992)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:343](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L343)

***

### curve()

> **curve**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a curve

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:836](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L836)

***

### draw()

> **draw**(`canvas`): `void`

Draw memoized drawing objects

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:1162](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1162)

***

### drawImage()

> **drawImage**(`image`, `x`, `y`, `width`, `height`, `radius`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw Image

#### Parameters

• **image**: `HTMLImageElement`

• **x**: `number`

• **y**: `number`

• **width**: `number`

• **height**: `number`

• **radius**: `number` \| `number`[]

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:1127](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1127)

***

### ellipse()

> **ellipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw an ellipse

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:745](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L745)

***

### fillArc()

> **fillArc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw filled arc. angles are started from 12'clock in degree.

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:951](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L951)

***

### fillCurve()

> **fillCurve**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw filled curved lines

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:808](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L808)

***

### fillEllipse()

> **fillEllipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a filled ellipse

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:702](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L702)

***

### fillPath()

> **fillPath**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw filled path

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:1037](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1037)

***

### fillPolygon()

> **fillPolygon**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw filled polygon

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:872](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L872)

***

### fillRect()

> **fillRect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a filled rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:489](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L489)

***

### fillRoundRect()

> **fillRoundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a filled round rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:588](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L588)

***

### fillText()

> **fillText**(`x`, `y`, `text`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Fill a text

#### Parameters

• **x**: `number`

• **y**: `number`

text baseline (metric.ascent - not the top of text)

• **text**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:1111](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1111)

***

### line()

> **line**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a line

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:426](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L426)

***

### path()

> **path**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a path

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:1067](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1067)

***

### polygon()

> **polygon**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a polygon

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:900](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L900)

***

### polyline()

> **polyline**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw polyline

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:754](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L754)

***

### rect()

> **rect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:524](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L524)

***

### restoreState()

> **restoreState**(): `void`

Restore the canvas states from a stack

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:328](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L328)

***

### roundRect()

> **roundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a round rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:644](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L644)

***

### setAlpha()

> **setAlpha**(`alpha`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set alpha

#### Parameters

• **alpha**: `number`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:410](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L410)

***

### setCanvas()

> **setCanvas**(`canvas`): `void`

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:347](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L347)

***

### setFillColor()

> **setFillColor**(`color`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set fill color

#### Parameters

• **color**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:378](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L378)

***

### setFillStyle()

> **setFillStyle**(`style`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set fill style

#### Parameters

• **style**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:386](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L386)

***

### setFont()

> **setFont**(`font`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set font

#### Parameters

• **font**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:402](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L402)

***

### setFontColor()

> **setFontColor**(`color`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set font color

#### Parameters

• **color**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:394](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L394)

***

### setRoughness()

> **setRoughness**(`roughness`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set roughness

#### Parameters

• **roughness**: `number`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:418](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L418)

***

### setStrokeColor()

> **setStrokeColor**(`color`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set stroke color

#### Parameters

• **color**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:354](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L354)

***

### setStrokePattern()

> **setStrokePattern**(`pattern`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set stroke pattern

#### Parameters

• **pattern**: `number`[]

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:370](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L370)

***

### setStrokeWidth()

> **setStrokeWidth**(`width`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set stroke width

#### Parameters

• **width**: `number`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:362](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L362)

***

### storeState()

> **storeState**(): `void`

Store current canvas state into a stack

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:310](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L310)

***

### strokeArc()

> **strokeArc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw an arc. angles are started from 3'clock in degree (0~360).

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:909](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L909)

***

### strokeCurve()

> **strokeCurve**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw curved lines

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:781](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L781)

***

### strokeEllipse()

> **strokeEllipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw an ellipse

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:660](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L660)

***

### strokeFreehand()

> **strokeFreehand**(`path`, `thinning`, `tailTaper`, `headTaper`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a freehand stroke

#### Parameters

• **path**: `number`[][]

• **thinning**: `number`= `0`

Thinning of the path

• **tailTaper**: `number`= `0`

Taper at the start of the path. value must be 0~1

• **headTaper**: `number`= `0`

Taper at the end of the path value must be 0~1

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:1081](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1081)

***

### strokePath()

> **strokePath**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a path

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:1008](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1008)

***

### strokePolygon()

> **strokePolygon**(`path`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw polygon

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:845](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L845)

***

### strokeRect()

> **strokeRect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a rect lines

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:455](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L455)

***

### strokeRoundRect()

> **strokeRoundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Draw a round rect lines

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:533](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L533)

***

### textMetric()

> **textMetric**(`text`): [`CanvasTextMetric`](/api-core/interfaces/canvastextmetric/)

Get Text Metric

#### Parameters

• **text**: `string`

#### Returns

[`CanvasTextMetric`](/api-core/interfaces/canvastextmetric/)

#### Source

[graphics/memoization-canvas.ts:1154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1154)
