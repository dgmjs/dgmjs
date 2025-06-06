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

[graphics/graphics.ts:201](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L201)

## Properties

### alpha

> **alpha**: `number`

#### Source

[graphics/graphics.ts:196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L196)

***

### colorVariables

> **colorVariables**: `Record`\<`string`, `string`\>

#### Source

[graphics/graphics.ts:184](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L184)

***

### context

> **context**: `CanvasRenderingContext2D`

#### Source

[graphics/graphics.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L183)

***

### element

> **element**: `HTMLCanvasElement`

#### Source

[graphics/graphics.ts:182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L182)

***

### fillColor

> **fillColor**: `string`

#### Source

[graphics/graphics.ts:192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L192)

***

### fillStyle

> **fillStyle**: `string`

#### Source

[graphics/graphics.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L193)

***

### font

> **font**: `string`

#### Source

[graphics/graphics.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L195)

***

### fontColor

> **fontColor**: `string`

#### Source

[graphics/graphics.ts:194](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L194)

***

### generator

> **generator**: `RoughGenerator`

#### Source

[graphics/graphics.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L185)

***

### origin

> **origin**: `number`[]

#### Source

[graphics/graphics.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L198)

***

### px

> **px**: `number`

#### Source

[graphics/graphics.ts:187](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L187)

***

### ratio

> **ratio**: `number`

#### Source

[graphics/graphics.ts:186](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L186)

***

### roughness

> **roughness**: `number`

#### Source

[graphics/graphics.ts:197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L197)

***

### scale

> **scale**: `number`

#### Source

[graphics/graphics.ts:199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L199)

***

### stateStack

> **stateStack**: [`CanvasState`](/api-core/interfaces/canvasstate/)[]

#### Source

[graphics/graphics.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L188)

***

### strokeColor

> **strokeColor**: `string`

#### Source

[graphics/graphics.ts:189](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L189)

***

### strokePattern

> **strokePattern**: `number`[]

#### Source

[graphics/graphics.ts:191](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L191)

***

### strokeWidth

> **strokeWidth**: `number`

#### Source

[graphics/graphics.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L190)

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

[graphics/graphics.ts:1287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1287)

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

[graphics/graphics.ts:1113](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1113)

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

[graphics/graphics.ts:1395](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1395)

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

[graphics/graphics.ts:807](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L807)

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

[graphics/graphics.ts:1251](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1251)

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

[graphics/graphics.ts:1073](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1073)

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

[graphics/graphics.ts:759](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L759)

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

[graphics/graphics.ts:1340](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1340)

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

[graphics/graphics.ts:1165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1165)

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

[graphics/graphics.ts:510](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L510)

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

[graphics/graphics.ts:627](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L627)

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

[graphics/graphics.ts:1383](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1383)

***

### globalCoordTransform()

> **globalCoordTransform**(`point`): `number`[]

Transform global coord to canvas coord (GCS --> CCS)

#### Parameters

• **point**: `number`[]

#### Returns

`number`[]

#### Source

[graphics/graphics.ts:290](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L290)

***

### globalCoordTransformRev()

> **globalCoordTransformRev**(`point`): `number`[]

Transform canvas coord to global coord (CCS --> GCS)

#### Parameters

• **point**: `number`[]

#### Returns

`number`[]

#### Source

[graphics/graphics.ts:299](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L299)

***

### globalTransform()

> **globalTransform**(): [`Canvas`](/api-core/classes/canvas/)

Transform global context to canvas context (origin, scale)

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L278)

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

[graphics/graphics.ts:428](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L428)

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

[graphics/graphics.ts:1371](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1371)

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

[graphics/graphics.ts:1199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1199)

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

[graphics/graphics.ts:822](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L822)

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

[graphics/graphics.ts:544](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L544)

***

### resolveColor()

> **resolveColor**(`color`): `string`

Resolve color variable to hex color string

#### Parameters

• **color**: `string`

#### Returns

`string`

#### Source

[graphics/graphics.ts:231](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L231)

***

### restore()

> **restore**(): [`Canvas`](/api-core/classes/canvas/)

Restore context

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:316](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L316)

***

### restoreState()

> **restoreState**(): [`Canvas`](/api-core/classes/canvas/)

Restore the canvas states from a stack

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:259](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L259)

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

[graphics/graphics.ts:332](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L332)

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

[graphics/graphics.ts:689](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L689)

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

[graphics/graphics.ts:863](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L863)

***

### save()

> **save**(): [`Canvas`](/api-core/classes/canvas/)

Save context

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:308](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L308)

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

[graphics/graphics.ts:339](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L339)

***

### setAlpha()

> **setAlpha**(`alpha`): [`Canvas`](/api-core/classes/canvas/)

Set alpha

#### Parameters

• **alpha**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:402](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L402)

***

### setFillColor()

> **setFillColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set fill color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:370](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L370)

***

### setFillStyle()

> **setFillStyle**(`style`): [`Canvas`](/api-core/classes/canvas/)

Set fill style

#### Parameters

• **style**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:378](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L378)

***

### setFont()

> **setFont**(`font`): [`Canvas`](/api-core/classes/canvas/)

Set font

#### Parameters

• **font**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:394](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L394)

***

### setFontColor()

> **setFontColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set font color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:386](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L386)

***

### setRoughness()

> **setRoughness**(`roughness`): [`Canvas`](/api-core/classes/canvas/)

Set roughness

#### Parameters

• **roughness**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:410](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L410)

***

### setStrokeColor()

> **setStrokeColor**(`color`): [`Canvas`](/api-core/classes/canvas/)

Set stroke color

#### Parameters

• **color**: `string`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:346](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L346)

***

### setStrokePattern()

> **setStrokePattern**(`pattern`): [`Canvas`](/api-core/classes/canvas/)

Set stroke pattern

#### Parameters

• **pattern**: `number`[]

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:362](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L362)

***

### setStrokeWidth()

> **setStrokeWidth**(`width`): [`Canvas`](/api-core/classes/canvas/)

Set stroke width

#### Parameters

• **width**: `number`

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:354](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L354)

***

### storeState()

> **storeState**(): [`Canvas`](/api-core/classes/canvas/)

Store current canvas state into a stack

#### Returns

[`Canvas`](/api-core/classes/canvas/)

#### Source

[graphics/graphics.ts:240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L240)

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

[graphics/graphics.ts:1208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1208)

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

[graphics/graphics.ts:1032](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1032)

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

[graphics/graphics.ts:705](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L705)

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

[graphics/graphics.ts:1303](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1303)

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

[graphics/graphics.ts:1122](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1122)

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

[graphics/graphics.ts:467](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L467)

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

[graphics/graphics.ts:559](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L559)

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

[graphics/graphics.ts:1423](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L1423)

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

[graphics/graphics.ts:324](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/graphics/graphics.ts#L324)
