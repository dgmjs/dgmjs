---
editUrl: false
next: false
prev: false
title: "Canvas"
---

Canvas

## Constructors

### new Canvas()

> **new Canvas**(`element`, `pixelRatio`): [`Canvas`](/api-core/classes/canvas/)

#### Parameters

• **element**: `HTMLCanvasElement`

• **pixelRatio**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:212](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L212)

## Properties

### alpha

> **alpha**: `number`

#### Source

[graphics/graphics.ts:207](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L207)

***

### colorVariables

> **colorVariables**: `Record`\<`string`, `string`\>

#### Source

[graphics/graphics.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L195)

***

### context

> **context**: `CanvasRenderingContext2D`

#### Source

[graphics/graphics.ts:194](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L194)

***

### element

> **element**: `HTMLCanvasElement`

#### Source

[graphics/graphics.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L193)

***

### fillColor

> **fillColor**: `string`

#### Source

[graphics/graphics.ts:203](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L203)

***

### fillStyle

> **fillStyle**: `string`

#### Source

[graphics/graphics.ts:204](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L204)

***

### font

> **font**: `string`

#### Source

[graphics/graphics.ts:206](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L206)

***

### fontColor

> **fontColor**: `string`

#### Source

[graphics/graphics.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L205)

***

### generator

> **generator**: `RoughGenerator`

#### Source

[graphics/graphics.ts:196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L196)

***

### origin

> **origin**: `number`[]

#### Source

[graphics/graphics.ts:209](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L209)

***

### px

> **px**: `number`

#### Source

[graphics/graphics.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L198)

***

### ratio

> **ratio**: `number`

#### Source

[graphics/graphics.ts:197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L197)

***

### roughness

> **roughness**: `number`

#### Source

[graphics/graphics.ts:208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L208)

***

### scale

> **scale**: `number`

#### Source

[graphics/graphics.ts:210](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L210)

***

### stateStack

> **stateStack**: `CanvasState`[]

#### Source

[graphics/graphics.ts:199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L199)

***

### strokeColor

> **strokeColor**: `string`

#### Source

[graphics/graphics.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L200)

***

### strokePattern

> **strokePattern**: `number`[]

#### Source

[graphics/graphics.ts:202](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L202)

***

### strokeWidth

> **strokeWidth**: `number`

#### Source

[graphics/graphics.ts:201](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L201)

## Methods

### arc()

> **arc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw an arc with fill and stroke.
angles are started from 12'clock in degree.

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1229](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1229)

***

### curve()

> **curve**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a curved lines with fill and stroke

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1067](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1067)

***

### drawImage()

> **drawImage**(`image`, `x`, `y`, `width`, `height`): [`Canvas`](/api-core/classes/canvas/)

Draw Image

#### Parameters

• **image**: `CanvasImageSource`

• **x**: `number`

• **y**: `number`

• **width**: `number`

• **height**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1326](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1326)

***

### ellipse()

> **ellipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw an ellipse with fill and stroke

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:784](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L784)

***

### fillArc()

> **fillArc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw filled arc. angles are started from 12'clock in degree.

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1193)

***

### fillCurve()

> **fillCurve**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw filled curved lines

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1027](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1027)

***

### fillEllipse()

> **fillEllipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a filled ellipse

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:736](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L736)

***

### fillPath()

> **fillPath**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw filled path

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1274](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1274)

***

### fillPolygon()

> **fillPolygon**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw filled polygon

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1113](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1113)

***

### fillRect()

> **fillRect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a filled rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:503](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L503)

***

### fillRoundRect()

> **fillRoundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a filled and rounded rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:612](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L612)

***

### fillText()

> **fillText**(`x`, `y`, `text`): [`Canvas`](/api-core/classes/canvas/)

Fill a text

#### Parameters

• **x**: `number`

• **y**: `number`

text baseline (metric.ascent - not the top of text)

• **text**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1314](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1314)

***

### globalCoordTransform()

> **globalCoordTransform**(`point`): `number`[]

Transform global coord to canvas coord (GCS --> CCS)

#### Parameters

• **point**: `number`[]

#### Returns

`number`[]

#### Source

[graphics/graphics.ts:300](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L300)

***

### globalCoordTransformRev()

> **globalCoordTransformRev**(`point`): `number`[]

Transform canvas coord to global coord (CCS --> GCS)

#### Parameters

• **point**: `number`[]

#### Returns

`number`[]

#### Source

[graphics/graphics.ts:309](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L309)

***

### globalTransform()

> **globalTransform**(): [`Canvas`](/api-core/classes/canvas/)

Transform global context to canvas context (origin, scale)

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L288)

***

### line()

> **line**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a line

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:431](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L431)

***

### path()

> **path**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a path with fill and stroke

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1302](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1302)

***

### polygon()

> **polygon**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a polygon with fill and stroke

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1146](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1146)

***

### polyline()

> **polyline**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw polyline

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:799](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L799)

***

### rect()

> **rect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a rect with fill and stroke

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:537](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L537)

***

### resolveColor()

> **resolveColor**(`color`): `string`

Resolve color variable to hex color string

#### Parameters

• **color**: `string`

#### Returns

`string`

#### Source

[graphics/graphics.ts:241](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L241)

***

### restore()

> **restore**(): [`Canvas`](/api-core/classes/canvas/)

Restore context

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:326](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L326)

***

### restoreState()

> **restoreState**(): [`Canvas`](/api-core/classes/canvas/)

Restore the canvas states from a stack

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:269](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L269)

***

### rotate()

> **rotate**(`angle`): `void`

Rotation transform

#### Parameters

• **angle**: `number`

anti-clockwise in degree

#### Returns

`void`

#### Source

[graphics/graphics.ts:342](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L342)

***

### roundRect()

> **roundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a rounded rect with fill and stroke

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:671](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L671)

***

### roundRectLine()

> **roundRectLine**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw rounded rect line

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:834](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L834)

***

### save()

> **save**(): [`Canvas`](/api-core/classes/canvas/)

Save context

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:318](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L318)

***

### setAlpha()

> **setAlpha**(`alpha`): [`Canvas`](/api-core/classes/canvas/)

Set alpha

#### Parameters

• **alpha**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:405](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L405)

***

### setFillColor()

> **setFillColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set fill color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:373](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L373)

***

### setFillStyle()

> **setFillStyle**(`style`): [`Canvas`](/api-core/classes/canvas/)

Set fill style

#### Parameters

• **style**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:381](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L381)

***

### setFont()

> **setFont**(`font`): [`Canvas`](/api-core/classes/canvas/)

Set font

#### Parameters

• **font**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:397](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L397)

***

### setFontColor()

> **setFontColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set font color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:389](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L389)

***

### setRoughness()

> **setRoughness**(`roughness`): [`Canvas`](/api-core/classes/canvas/)

Set roughness

#### Parameters

• **roughness**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:413](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L413)

***

### setStrokeColor()

> **setStrokeColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set stroke color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:349](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L349)

***

### setStrokePattern()

> **setStrokePattern**(`pattern`): [`Canvas`](/api-core/classes/canvas/)

Set stroke pattern

#### Parameters

• **pattern**: `number`[]

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:365](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L365)

***

### setStrokeWidth()

> **setStrokeWidth**(`width`): [`Canvas`](/api-core/classes/canvas/)

Set stroke width

#### Parameters

• **width**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:357](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L357)

***

### storeState()

> **storeState**(): [`Canvas`](/api-core/classes/canvas/)

Store current canvas state into a stack

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:250](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L250)

***

### strokeArc()

> **strokeArc**(`x`, `y`, `r`, `startAngle`, `endAngle`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw an arc. angles are started from 3'clock in degree (0~360).

#### Parameters

• **x**: `number`

• **y**: `number`

• **r**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1155)

***

### strokeCurve()

> **strokeCurve**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw curved lines

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:994](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L994)

***

### strokeEllipse()

> **strokeEllipse**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw an ellipse

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:687](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L687)

***

### strokePath()

> **strokePath**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a path

#### Parameters

• **path**: [`SVGPath`](/api-core/type-aliases/svgpath/)

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1245)

***

### strokePolygon()

> **strokePolygon**(`path`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw polygon

#### Parameters

• **path**: `number`[][]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:1076](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1076)

***

### strokeRect()

> **strokeRect**(`x1`, `y1`, `x2`, `y2`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:465](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L465)

***

### strokeRoundRect()

> **strokeRoundRect**(`x1`, `y1`, `x2`, `y2`, `radius`, `seed`): [`Canvas`](/api-core/classes/canvas/)

Draw a rounded rect

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number` \| `number`[]

• **seed**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:552](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L552)

***

### textMetric()

> **textMetric**(`text`): [`CanvasTextMetric`](/api-core/interfaces/canvastextmetric/)

Get Text Metric
Ref: https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics

Values:
- ascent: Distance from the baseline to the top of the box.
- descent: Distance from the baseline to the bottom of the box.
- actualAscent: Distance from the baseline to the top of the font
  (varies for each character: "." is a small value, "|" is a large value).
- actualDescent: Distance from the baseline to the bottom of the font
  (varies for each character).

Hints:
- ascent + descent = height
- ascent + descent > actualAscent + actualDescent

#### Parameters

• **text**: `string`

#### Returns

[`CanvasTextMetric`](/api-core/interfaces/canvastextmetric/)

#### Source

[graphics/graphics.ts:1354](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1354)

***

### translate()

> **translate**(`x`, `y`): `void`

Translate transform

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Source

[graphics/graphics.ts:334](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L334)
