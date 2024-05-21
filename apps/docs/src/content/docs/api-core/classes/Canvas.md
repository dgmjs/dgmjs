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

[graphics/graphics.ts:207](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L207)

## Properties

### alpha

> **alpha**: `number`

#### Source

[graphics/graphics.ts:202](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L202)

***

### colorVariables

> **colorVariables**: `Record`\<`string`, `string`\>

#### Source

[graphics/graphics.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L190)

***

### context

> **context**: `CanvasRenderingContext2D`

#### Source

[graphics/graphics.ts:189](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L189)

***

### element

> **element**: `HTMLCanvasElement`

#### Source

[graphics/graphics.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L188)

***

### fillColor

> **fillColor**: `string`

#### Source

[graphics/graphics.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L198)

***

### fillStyle

> **fillStyle**: `string`

#### Source

[graphics/graphics.ts:199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L199)

***

### font

> **font**: `string`

#### Source

[graphics/graphics.ts:201](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L201)

***

### fontColor

> **fontColor**: `string`

#### Source

[graphics/graphics.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L200)

***

### generator

> **generator**: `RoughGenerator`

#### Source

[graphics/graphics.ts:191](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L191)

***

### origin

> **origin**: `number`[]

#### Source

[graphics/graphics.ts:204](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L204)

***

### px

> **px**: `number`

#### Source

[graphics/graphics.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L193)

***

### ratio

> **ratio**: `number`

#### Source

[graphics/graphics.ts:192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L192)

***

### roughness

> **roughness**: `number`

#### Source

[graphics/graphics.ts:203](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L203)

***

### scale

> **scale**: `number`

#### Source

[graphics/graphics.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L205)

***

### stateStack

> **stateStack**: `CanvasState`[]

#### Source

[graphics/graphics.ts:194](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L194)

***

### strokeColor

> **strokeColor**: `string`

#### Source

[graphics/graphics.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L195)

***

### strokePattern

> **strokePattern**: `number`[]

#### Source

[graphics/graphics.ts:197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L197)

***

### strokeWidth

> **strokeWidth**: `number`

#### Source

[graphics/graphics.ts:196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L196)

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

[graphics/graphics.ts:1222](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1222)

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

[graphics/graphics.ts:1060](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1060)

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

[graphics/graphics.ts:1317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1317)

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

[graphics/graphics.ts:777](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L777)

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

[graphics/graphics.ts:1186](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1186)

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

[graphics/graphics.ts:1020](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1020)

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

[graphics/graphics.ts:729](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L729)

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

[graphics/graphics.ts:1266](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1266)

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

[graphics/graphics.ts:1106](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1106)

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

[graphics/graphics.ts:498](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L498)

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

[graphics/graphics.ts:606](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L606)

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

[graphics/graphics.ts:1305](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1305)

***

### globalCoordTransform()

> **globalCoordTransform**(`point`): `number`[]

Transform global coord to canvas coord (GCS --> CCS)

#### Parameters

• **point**: `number`[]

#### Returns

`number`[]

#### Source

[graphics/graphics.ts:295](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L295)

***

### globalCoordTransformRev()

> **globalCoordTransformRev**(`point`): `number`[]

Transform canvas coord to global coord (CCS --> GCS)

#### Parameters

• **point**: `number`[]

#### Returns

`number`[]

#### Source

[graphics/graphics.ts:304](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L304)

***

### globalTransform()

> **globalTransform**(): [`Canvas`](/api-core/classes/canvas/)

Transform global context to canvas context (origin, scale)

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L283)

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

[graphics/graphics.ts:1293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1293)

***

### pixel()

> **pixel**(`point`, `color`, `size`): [`Canvas`](/api-core/classes/canvas/)

Put a pixel

#### Parameters

• **point**: `number`[]

• **color**: `string`

• **size**: `number`= `1`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:416](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L416)

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

[graphics/graphics.ts:1139](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1139)

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

[graphics/graphics.ts:792](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L792)

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

[graphics/graphics.ts:532](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L532)

***

### resolveColor()

> **resolveColor**(`color`): `string`

Resolve color variable to hex color string

#### Parameters

• **color**: `string`

#### Returns

`string`

#### Source

[graphics/graphics.ts:236](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L236)

***

### restore()

> **restore**(): [`Canvas`](/api-core/classes/canvas/)

Restore context

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:321](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L321)

***

### restoreState()

> **restoreState**(): [`Canvas`](/api-core/classes/canvas/)

Restore the canvas states from a stack

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:264](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L264)

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

[graphics/graphics.ts:337](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L337)

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

[graphics/graphics.ts:664](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L664)

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

[graphics/graphics.ts:827](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L827)

***

### save()

> **save**(): [`Canvas`](/api-core/classes/canvas/)

Save context

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L313)

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

[graphics/graphics.ts:245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L245)

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

[graphics/graphics.ts:1148](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1148)

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

[graphics/graphics.ts:987](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L987)

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

[graphics/graphics.ts:680](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L680)

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

[graphics/graphics.ts:1238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1238)

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

[graphics/graphics.ts:1069](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1069)

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

[graphics/graphics.ts:460](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L460)

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

[graphics/graphics.ts:547](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L547)

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

[graphics/graphics.ts:1345](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1345)

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

[graphics/graphics.ts:329](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L329)
