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

[graphics/memoization-canvas.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L293)

## Properties

### alpha

> **alpha**: `number`

#### Source

[graphics/memoization-canvas.ts:290](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L290)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/memoization-canvas.ts:279](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L279)

***

### do

> **do**: `DO`[]

#### Source

[graphics/memoization-canvas.ts:281](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L281)

***

### fillColor

> **fillColor**: `string`

#### Source

[graphics/memoization-canvas.ts:286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L286)

***

### fillStyle

> **fillStyle**: `string`

#### Source

[graphics/memoization-canvas.ts:287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L287)

***

### font

> **font**: `string`

#### Source

[graphics/memoization-canvas.ts:289](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L289)

***

### fontColor

> **fontColor**: `string`

#### Source

[graphics/memoization-canvas.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L288)

***

### generator

> **generator**: `RoughGenerator`

#### Source

[graphics/memoization-canvas.ts:282](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L282)

***

### roughness

> **roughness**: `number`

#### Source

[graphics/memoization-canvas.ts:291](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L291)

***

### stateStack

> **stateStack**: [`CanvasState`](/api-core/interfaces/canvasstate/)[]

#### Source

[graphics/memoization-canvas.ts:280](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L280)

***

### strokeColor

> **strokeColor**: `string`

#### Source

[graphics/memoization-canvas.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L283)

***

### strokePattern

> **strokePattern**: `number`[]

#### Source

[graphics/memoization-canvas.ts:285](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L285)

***

### strokeWidth

> **strokeWidth**: `number`

#### Source

[graphics/memoization-canvas.ts:284](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L284)

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

[graphics/memoization-canvas.ts:1018](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1018)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:344](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L344)

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

[graphics/memoization-canvas.ts:856](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L856)

***

### draw()

> **draw**(`canvas`): `void`

Draw memoized drawing objects

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:1200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1200)

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

[graphics/memoization-canvas.ts:1165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1165)

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

[graphics/memoization-canvas.ts:760](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L760)

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

[graphics/memoization-canvas.ts:977](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L977)

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

[graphics/memoization-canvas.ts:828](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L828)

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

[graphics/memoization-canvas.ts:717](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L717)

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

[graphics/memoization-canvas.ts:1066](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1066)

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

[graphics/memoization-canvas.ts:895](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L895)

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

[graphics/memoization-canvas.ts:494](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L494)

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

[graphics/memoization-canvas.ts:598](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L598)

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

[graphics/memoization-canvas.ts:1149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1149)

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

[graphics/memoization-canvas.ts:427](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L427)

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

[graphics/memoization-canvas.ts:1102](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1102)

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

[graphics/memoization-canvas.ts:924](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L924)

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

[graphics/memoization-canvas.ts:769](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L769)

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

[graphics/memoization-canvas.ts:529](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L529)

***

### restoreState()

> **restoreState**(): `void`

Restore the canvas states from a stack

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:329](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L329)

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

[graphics/memoization-canvas.ts:657](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L657)

***

### setAlpha()

> **setAlpha**(`alpha`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set alpha

#### Parameters

• **alpha**: `number`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:411](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L411)

***

### setCanvas()

> **setCanvas**(`canvas`): `void`

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:348](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L348)

***

### setFillColor()

> **setFillColor**(`color`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set fill color

#### Parameters

• **color**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:379](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L379)

***

### setFillStyle()

> **setFillStyle**(`style`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set fill style

#### Parameters

• **style**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:387](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L387)

***

### setFont()

> **setFont**(`font`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set font

#### Parameters

• **font**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:403](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L403)

***

### setFontColor()

> **setFontColor**(`color`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set font color

#### Parameters

• **color**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:395](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L395)

***

### setRoughness()

> **setRoughness**(`roughness`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set roughness

#### Parameters

• **roughness**: `number`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:419](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L419)

***

### setStrokeColor()

> **setStrokeColor**(`color`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set stroke color

#### Parameters

• **color**: `string`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:355](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L355)

***

### setStrokePattern()

> **setStrokePattern**(`pattern`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set stroke pattern

#### Parameters

• **pattern**: `number`[]

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:371](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L371)

***

### setStrokeWidth()

> **setStrokeWidth**(`width`): [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Set stroke width

#### Parameters

• **width**: `number`

#### Returns

[`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[graphics/memoization-canvas.ts:363](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L363)

***

### storeState()

> **storeState**(): `void`

Store current canvas state into a stack

#### Returns

`void`

#### Source

[graphics/memoization-canvas.ts:311](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L311)

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

[graphics/memoization-canvas.ts:933](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L933)

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

[graphics/memoization-canvas.ts:799](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L799)

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

[graphics/memoization-canvas.ts:673](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L673)

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

[graphics/memoization-canvas.ts:1116](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1116)

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

[graphics/memoization-canvas.ts:1034](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1034)

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

[graphics/memoization-canvas.ts:865](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L865)

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

[graphics/memoization-canvas.ts:458](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L458)

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

[graphics/memoization-canvas.ts:538](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L538)

***

### textMetric()

> **textMetric**(`text`): [`CanvasTextMetric`](/api-core/interfaces/canvastextmetric/)

Get Text Metric

#### Parameters

• **text**: `string`

#### Returns

[`CanvasTextMetric`](/api-core/interfaces/canvastextmetric/)

#### Source

[graphics/memoization-canvas.ts:1192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/memoization-canvas.ts#L1192)
