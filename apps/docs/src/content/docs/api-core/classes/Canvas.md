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

[graphics/graphics.ts:199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L199)

## Properties

### alpha

> **alpha**: `number`

#### Source

[graphics/graphics.ts:194](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L194)

***

### colorVariables

> **colorVariables**: `Record`\<`string`, `string`\>

#### Source

[graphics/graphics.ts:182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L182)

***

### context

> **context**: `CanvasRenderingContext2D`

#### Source

[graphics/graphics.ts:181](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L181)

***

### element

> **element**: `HTMLCanvasElement`

#### Source

[graphics/graphics.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L180)

***

### fillColor

> **fillColor**: `string`

#### Source

[graphics/graphics.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L190)

***

### fillStyle

> **fillStyle**: `string`

#### Source

[graphics/graphics.ts:191](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L191)

***

### font

> **font**: `string`

#### Source

[graphics/graphics.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L193)

***

### fontColor

> **fontColor**: `string`

#### Source

[graphics/graphics.ts:192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L192)

***

### generator

> **generator**: `RoughGenerator`

#### Source

[graphics/graphics.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L183)

***

### origin

> **origin**: `number`[]

#### Source

[graphics/graphics.ts:196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L196)

***

### px

> **px**: `number`

#### Source

[graphics/graphics.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L185)

***

### ratio

> **ratio**: `number`

#### Source

[graphics/graphics.ts:184](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L184)

***

### roughness

> **roughness**: `number`

#### Source

[graphics/graphics.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L195)

***

### scale

> **scale**: `number`

#### Source

[graphics/graphics.ts:197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L197)

***

### stateStack

> **stateStack**: [`CanvasState`](/api-core/interfaces/canvasstate/)[]

#### Source

[graphics/graphics.ts:186](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L186)

***

### strokeColor

> **strokeColor**: `string`

#### Source

[graphics/graphics.ts:187](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L187)

***

### strokePattern

> **strokePattern**: `number`[]

#### Source

[graphics/graphics.ts:189](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L189)

***

### strokeWidth

> **strokeWidth**: `number`

#### Source

[graphics/graphics.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L188)

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

[graphics/graphics.ts:1285](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1285)

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

[graphics/graphics.ts:1111](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1111)

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

[graphics/graphics.ts:1393](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1393)

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

[graphics/graphics.ts:805](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L805)

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

[graphics/graphics.ts:1249](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1249)

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

[graphics/graphics.ts:1071](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1071)

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

[graphics/graphics.ts:757](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L757)

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

[graphics/graphics.ts:1338](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1338)

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

[graphics/graphics.ts:1163](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1163)

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

[graphics/graphics.ts:508](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L508)

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

[graphics/graphics.ts:625](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L625)

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

[graphics/graphics.ts:1381](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1381)

***

### globalCoordTransform()

> **globalCoordTransform**(`point`): `number`[]

Transform global coord to canvas coord (GCS --> CCS)

#### Parameters

• **point**: `number`[]

#### Returns

`number`[]

#### Source

[graphics/graphics.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L288)

***

### globalCoordTransformRev()

> **globalCoordTransformRev**(`point`): `number`[]

Transform canvas coord to global coord (CCS --> GCS)

#### Parameters

• **point**: `number`[]

#### Returns

`number`[]

#### Source

[graphics/graphics.ts:297](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L297)

***

### globalTransform()

> **globalTransform**(): [`Canvas`](/api-core/classes/canvas/)

Transform global context to canvas context (origin, scale)

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:276](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L276)

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

[graphics/graphics.ts:426](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L426)

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

[graphics/graphics.ts:1369](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1369)

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

[graphics/graphics.ts:1197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1197)

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

[graphics/graphics.ts:820](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L820)

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

[graphics/graphics.ts:542](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L542)

***

### resolveColor()

> **resolveColor**(`color`): `string`

Resolve color variable to hex color string

#### Parameters

• **color**: `string`

#### Returns

`string`

#### Source

[graphics/graphics.ts:229](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L229)

***

### restore()

> **restore**(): [`Canvas`](/api-core/classes/canvas/)

Restore context

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:314](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L314)

***

### restoreState()

> **restoreState**(): [`Canvas`](/api-core/classes/canvas/)

Restore the canvas states from a stack

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:257](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L257)

***

### rotateTransform()

> **rotateTransform**(`angle`): `void`

Rotation transform

#### Parameters

• **angle**: `number`

anti-clockwise in degree

#### Returns

`void`

#### Source

[graphics/graphics.ts:330](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L330)

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

[graphics/graphics.ts:687](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L687)

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

[graphics/graphics.ts:861](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L861)

***

### save()

> **save**(): [`Canvas`](/api-core/classes/canvas/)

Save context

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:306](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L306)

***

### scaleTransform()

> **scaleTransform**(`x`, `y`): `void`

Scale transform

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Source

[graphics/graphics.ts:337](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L337)

***

### setAlpha()

> **setAlpha**(`alpha`): [`Canvas`](/api-core/classes/canvas/)

Set alpha

#### Parameters

• **alpha**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:400](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L400)

***

### setFillColor()

> **setFillColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set fill color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:368](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L368)

***

### setFillStyle()

> **setFillStyle**(`style`): [`Canvas`](/api-core/classes/canvas/)

Set fill style

#### Parameters

• **style**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:376](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L376)

***

### setFont()

> **setFont**(`font`): [`Canvas`](/api-core/classes/canvas/)

Set font

#### Parameters

• **font**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:392](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L392)

***

### setFontColor()

> **setFontColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set font color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:384](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L384)

***

### setRoughness()

> **setRoughness**(`roughness`): [`Canvas`](/api-core/classes/canvas/)

Set roughness

#### Parameters

• **roughness**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:408](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L408)

***

### setStrokeColor()

> **setStrokeColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set stroke color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:344](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L344)

***

### setStrokePattern()

> **setStrokePattern**(`pattern`): [`Canvas`](/api-core/classes/canvas/)

Set stroke pattern

#### Parameters

• **pattern**: `number`[]

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:360](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L360)

***

### setStrokeWidth()

> **setStrokeWidth**(`width`): [`Canvas`](/api-core/classes/canvas/)

Set stroke width

#### Parameters

• **width**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:352](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L352)

***

### storeState()

> **storeState**(): [`Canvas`](/api-core/classes/canvas/)

Store current canvas state into a stack

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L238)

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

[graphics/graphics.ts:1206](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1206)

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

[graphics/graphics.ts:1030](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1030)

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

[graphics/graphics.ts:703](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L703)

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

[graphics/graphics.ts:1301](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1301)

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

[graphics/graphics.ts:1120](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1120)

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

[graphics/graphics.ts:557](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L557)

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

[graphics/graphics.ts:1421](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1421)

***

### translateTransform()

> **translateTransform**(`x`, `y`): `void`

Translate transform

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Source

[graphics/graphics.ts:322](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L322)
