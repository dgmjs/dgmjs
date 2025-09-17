---
editUrl: false
next: false
prev: false
title: "Frame"
---

Frame

## Extends

- [`Box`](/api-core/classes/box/)

## Constructors

### new Frame()

> **new Frame**(): [`Frame`](/api-core/classes/frame/)

#### Returns

[`Frame`](/api-core/classes/frame/)

#### Overrides

[`Box`](/api-core/classes/box/).[`constructor`](/api-core/classes/box/#constructors)

#### Source

[packages/core/src/shapes.ts:3110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L3110)

## Properties

### \_memoShadowCanvas

> **\_memoShadowCanvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Source

[packages/core/src/shapes.ts:3108](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L3108)

***

### anchorAngle

> **anchorAngle**: `number`

Anchor angle (in degree)

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorAngle`](/api-core/classes/box/#anchorangle)

#### Source

[packages/core/src/shapes.ts:1386](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1386)

***

### anchorLength

> **anchorLength**: `number`

Anchor length

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorLength`](/api-core/classes/box/#anchorlength)

#### Source

[packages/core/src/shapes.ts:1391](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1391)

***

### anchorPosition

> **anchorPosition**: `number`

Anchor position (0~1). 0 is on tail, 1 is on head

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorPosition`](/api-core/classes/box/#anchorposition)

#### Source

[packages/core/src/shapes.ts:1396](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1396)

***

### anchored

> **anchored**: `boolean`

Anchored

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchored`](/api-core/classes/box/#anchored)

#### Source

[packages/core/src/shapes.ts:1381](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1381)

***

### borderPosition

> **borderPosition**: [`BorderPositionEnum`](/api-core/type-aliases/borderpositionenum/)

Border position (center, inside, outside)

#### Inherited from

[`Box`](/api-core/classes/box/).[`borderPosition`](/api-core/classes/box/#borderposition)

#### Source

[packages/core/src/shapes.ts:1376](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1376)

***

### borders

> **borders**: `boolean`[]

Borders [top, right, bottom, left]

#### Inherited from

[`Box`](/api-core/classes/box/).[`borders`](/api-core/classes/box/#borders)

#### Source

[packages/core/src/shapes.ts:1371](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1371)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`children`](/api-core/classes/box/#children)

#### Source

[packages/core/src/core/obj.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L14)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`connectable`](/api-core/classes/box/#connectable)

#### Source

[packages/core/src/shapes.ts:218](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L218)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Box`](/api-core/classes/box/).[`constraints`](/api-core/classes/box/#constraints)

#### Source

[packages/core/src/shapes.ts:333](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L333)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`containable`](/api-core/classes/box/#containable)

#### Source

[packages/core/src/shapes.ts:203](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L203)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Box`](/api-core/classes/box/).[`containableFilter`](/api-core/classes/box/#containablefilter)

#### Source

[packages/core/src/shapes.ts:208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L208)

***

### corners

> **corners**: `number`[]

Corner radius [top-left, top-right, bottom-right, bottom-left] (same with CSS).
if positive value, it is pixels.
if negative value, it is the percentage ratio of the shorter one between the width and the height.

#### Inherited from

[`Box`](/api-core/classes/box/).[`corners`](/api-core/classes/box/#corners)

#### Source

[packages/core/src/shapes.ts:1366](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1366)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`description`](/api-core/classes/box/#description)

#### Source

[packages/core/src/shapes.ts:163](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L163)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`enable`](/api-core/classes/box/#enable)

#### Source

[packages/core/src/shapes.ts:178](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L178)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Box`](/api-core/classes/box/).[`fillColor`](/api-core/classes/box/#fillcolor)

#### Source

[packages/core/src/shapes.ts:263](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L263)

***

### fillStyle

> **fillStyle**: [`FillStyleEnum`](/api-core/type-aliases/fillstyleenum/)

Fill style

#### Inherited from

[`Box`](/api-core/classes/box/).[`fillStyle`](/api-core/classes/box/#fillstyle)

#### Source

[packages/core/src/shapes.ts:268](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L268)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontColor`](/api-core/classes/box/#fontcolor)

#### Source

[packages/core/src/shapes.ts:273](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L273)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontFamily`](/api-core/classes/box/#fontfamily)

#### Source

[packages/core/src/shapes.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L278)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontSize`](/api-core/classes/box/#fontsize)

#### Source

[packages/core/src/shapes.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L283)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontStyle`](/api-core/classes/box/#fontstyle)

#### Source

[packages/core/src/shapes.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L288)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontWeight`](/api-core/classes/box/#fontweight)

#### Source

[packages/core/src/shapes.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L293)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Box`](/api-core/classes/box/).[`height`](/api-core/classes/box/#height)

#### Source

[packages/core/src/shapes.ts:238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L238)

***

### horzAlign

> **horzAlign**: [`HorzAlignEnum`](/api-core/type-aliases/horzalignenum/)

Text horizontal alignment

#### Inherited from

[`Box`](/api-core/classes/box/).[`horzAlign`](/api-core/classes/box/#horzalign)

#### Source

[packages/core/src/shapes.ts:1441](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1441)

***

### id

> **id**: `string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`id`](/api-core/classes/box/#id)

#### Source

[packages/core/src/core/obj.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L11)

***

### left

> **left**: `number`

Shape's left position

#### Inherited from

[`Box`](/api-core/classes/box/).[`left`](/api-core/classes/box/#left)

#### Source

[packages/core/src/shapes.ts:223](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L223)

***

### lineHeight

> **lineHeight**: `number`

Text line height

#### Inherited from

[`Box`](/api-core/classes/box/).[`lineHeight`](/api-core/classes/box/#lineheight)

#### Source

[packages/core/src/shapes.ts:1451](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1451)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Box`](/api-core/classes/box/).[`link`](/api-core/classes/box/#link)

#### Source

[packages/core/src/shapes.ts:323](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L323)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Box`](/api-core/classes/box/).[`movable`](/api-core/classes/box/#movable)

#### Source

[packages/core/src/shapes.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L188)

***

### movableParentFilter

> **movableParentFilter**: `string`

Movable parent filter

#### Inherited from

[`Box`](/api-core/classes/box/).[`movableParentFilter`](/api-core/classes/box/#movableparentfilter)

#### Source

[packages/core/src/shapes.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L213)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`name`](/api-core/classes/box/#name)

#### Source

[packages/core/src/shapes.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L158)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Box`](/api-core/classes/box/).[`opacity`](/api-core/classes/box/#opacity)

#### Source

[packages/core/src/shapes.ts:298](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L298)

***

### padding

> **padding**: `number`[]

Padding spaces [top, right, bottom, left] (same with CSS)

#### Inherited from

[`Box`](/api-core/classes/box/).[`padding`](/api-core/classes/box/#padding)

#### Source

[packages/core/src/shapes.ts:1359](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1359)

***

### paragraphSpacing

> **paragraphSpacing**: `number`

Text paragraph spacing

#### Inherited from

[`Box`](/api-core/classes/box/).[`paragraphSpacing`](/api-core/classes/box/#paragraphspacing)

#### Source

[packages/core/src/shapes.ts:1456](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1456)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`parent`](/api-core/classes/box/#parent)

#### Source

[packages/core/src/core/obj.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L13)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Box`](/api-core/classes/box/).[`properties`](/api-core/classes/box/#properties)

#### Source

[packages/core/src/shapes.ts:338](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L338)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Box`](/api-core/classes/box/).[`proto`](/api-core/classes/box/#proto)

#### Source

[packages/core/src/shapes.ts:168](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L168)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`reference`](/api-core/classes/box/#reference)

#### Source

[packages/core/src/shapes.ts:328](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L328)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`rotatable`](/api-core/classes/box/#rotatable)

#### Source

[packages/core/src/shapes.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L198)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Box`](/api-core/classes/box/).[`rotate`](/api-core/classes/box/#rotate)

#### Source

[packages/core/src/shapes.ts:243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L243)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Box`](/api-core/classes/box/).[`roughness`](/api-core/classes/box/#roughness)

#### Source

[packages/core/src/shapes.ts:303](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L303)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Box`](/api-core/classes/box/).[`scripts`](/api-core/classes/box/#scripts)

#### Source

[packages/core/src/shapes.ts:343](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L343)

***

### shadow

> **shadow**: `boolean`

Shadow

#### Inherited from

[`Box`](/api-core/classes/box/).[`shadow`](/api-core/classes/box/#shadow)

#### Source

[packages/core/src/shapes.ts:308](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L308)

***

### shadowColor

> **shadowColor**: `string`

Shadow color

#### Inherited from

[`Box`](/api-core/classes/box/).[`shadowColor`](/api-core/classes/box/#shadowcolor)

#### Source

[packages/core/src/shapes.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L313)

***

### shadowOffset

> **shadowOffset**: `number`[]

Shadow offset

#### Inherited from

[`Box`](/api-core/classes/box/).[`shadowOffset`](/api-core/classes/box/#shadowoffset)

#### Source

[packages/core/src/shapes.ts:318](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L318)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Box`](/api-core/classes/box/).[`sizable`](/api-core/classes/box/#sizable)

#### Source

[packages/core/src/shapes.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L193)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokeColor`](/api-core/classes/box/#strokecolor)

#### Source

[packages/core/src/shapes.ts:248](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L248)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokePattern`](/api-core/classes/box/#strokepattern)

#### Source

[packages/core/src/shapes.ts:258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L258)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokeWidth`](/api-core/classes/box/#strokewidth)

#### Source

[packages/core/src/shapes.ts:253](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L253)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Box`](/api-core/classes/box/).[`tags`](/api-core/classes/box/#tags)

#### Source

[packages/core/src/shapes.ts:173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L173)

***

### text

> **text**: `any`

Text could a string or document object

Rich text document content grammar (BNF):
  doc = (paragraph | bulletList | orderedList)*
  bulletList = listItem*
  orderedList = listItem*
  paragraph = (text | hardBreak)*
  listItem = paragraph
  text = <TERMINAL>
  hardBreak = <TERMINAL>

Rich text document content (this.text) look like:
{
  "type": "doc",
  "content": [
    {
      "type": "paragraph",
      "content": [
        { "type": "text", "text": "asdf asdf" },
        { "type": "text", "marks": [{ "type": "strong" }], "text": "sadflkj" },
        ...
      ]
    }
    ...
  ]
}

#### Inherited from

[`Box`](/api-core/classes/box/).[`text`](/api-core/classes/box/#text)

#### Source

[packages/core/src/shapes.ts:1431](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1431)

***

### textEditable

> **textEditable**: `boolean`

Text editable

#### Inherited from

[`Box`](/api-core/classes/box/).[`textEditable`](/api-core/classes/box/#texteditable)

#### Source

[packages/core/src/shapes.ts:1401](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1401)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Box`](/api-core/classes/box/).[`top`](/api-core/classes/box/#top)

#### Source

[packages/core/src/shapes.ts:228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L228)

***

### type

> **type**: `string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`type`](/api-core/classes/box/#type)

#### Source

[packages/core/src/core/obj.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L12)

***

### vertAlign

> **vertAlign**: [`VertAlignEnum`](/api-core/type-aliases/vertalignenum/)

Text vertical alignment

#### Inherited from

[`Box`](/api-core/classes/box/).[`vertAlign`](/api-core/classes/box/#vertalign)

#### Source

[packages/core/src/shapes.ts:1446](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1446)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`visible`](/api-core/classes/box/#visible)

#### Source

[packages/core/src/shapes.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L183)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Box`](/api-core/classes/box/).[`width`](/api-core/classes/box/#width)

#### Source

[packages/core/src/shapes.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L233)

***

### wordWrap

> **wordWrap**: `boolean`

Word wrap

#### Inherited from

[`Box`](/api-core/classes/box/).[`wordWrap`](/api-core/classes/box/#wordwrap)

#### Source

[packages/core/src/shapes.ts:1436](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1436)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:576](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L576)

***

### innerBottom

> `get` **innerBottom**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:1592](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1592)

***

### innerHeight

> `get` **innerHeight**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:1600](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1600)

***

### innerLeft

> `get` **innerLeft**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:1580](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1580)

***

### innerRight

> `get` **innerRight**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:1584](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1584)

***

### innerTop

> `get` **innerTop**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:1588](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1588)

***

### innerWidth

> `get` **innerWidth**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:1596](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1596)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:572](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L572)

## Methods

### assignStyles()

> **assignStyles**(`canvas`): `void`

Assign styles to memoization canvas.

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`assignStyles`](/api-core/classes/box/#assignstyles)

#### Source

[packages/core/src/shapes.ts:686](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L686)

***

### canContain()

> **canContain**(`shape`): `boolean`

Determine a given shape can be contained in this shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Inherited from

[`Box`](/api-core/classes/box/).[`canContain`](/api-core/classes/box/#cancontain)

#### Source

[packages/core/src/shapes.ts:1144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1144)

***

### computeCorners()

> **computeCorners**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`computeCorners`](/api-core/classes/box/#computecorners)

#### Source

[packages/core/src/shapes.ts:1604](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1604)

***

### computeOpacity()

> **computeOpacity**(): `number`

#### Returns

`number`

#### Inherited from

[`Box`](/api-core/classes/box/).[`computeOpacity`](/api-core/classes/box/#computeopacity)

#### Source

[packages/core/src/shapes.ts:676](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L676)

***

### containsPoint()

> **containsPoint**(`canvas`, `point`, `regardFillStyle`): `boolean`

Determines whether this shape contains a point in GCS

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

• **regardFillStyle**: `boolean`= `true`

#### Returns

`boolean`

#### Inherited from

[`Box`](/api-core/classes/box/).[`containsPoint`](/api-core/classes/box/#containspoint)

#### Source

[packages/core/src/shapes.ts:1001](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1001)

***

### draw()

> **draw**(`canvas`, `showDOM`): `void`

Draw this shape

Render vs Draw
- Render: computing geometries how to draw the shape
- Draw: actual drawing the computed geometries of the shape on the canvas

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **showDOM**: `boolean`= `false`

#### Returns

`void`

#### Overrides

[`Box`](/api-core/classes/box/).[`draw`](/api-core/classes/box/#draw)

#### Source

[packages/core/src/shapes.ts:3182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L3182)

***

### drawLink()

> **drawLink**(`canvas`, `showDOM`): `void`

Draw link

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **showDOM**: `boolean`= `false`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`drawLink`](/api-core/classes/box/#drawlink)

#### Source

[packages/core/src/shapes.ts:846](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L846)

***

### finalize()

> **finalize**(`canvas`): `void`

Finalize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`finalize`](/api-core/classes/box/#finalize)

#### Source

[packages/core/src/shapes.ts:596](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L596)

***

### find()

> **find**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find an shape in breath-first order

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`find`](/api-core/classes/box/#find)

#### Source

[packages/core/src/core/obj.ts:363](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L363)

***

### findAllByQuery()

> **findAllByQuery**(`queryString`): [`Shape`](/api-core/classes/shape/)[]

Find all shapes matched with the query string

#### Parameters

• **queryString**: `string`

#### Returns

[`Shape`](/api-core/classes/shape/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`findAllByQuery`](/api-core/classes/box/#findallbyquery)

#### Source

[packages/core/src/shapes.ts:1134](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1134)

***

### findByQuery()

> **findByQuery**(`queryString`): `null` \| [`Shape`](/api-core/classes/shape/)

Find a shape first matched with the query string

#### Parameters

• **queryString**: `any`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`findByQuery`](/api-core/classes/box/#findbyquery)

#### Source

[packages/core/src/shapes.ts:1121](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1121)

***

### findDepthFirst()

> **findDepthFirst**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find an shape in depth-first order

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`findDepthFirst`](/api-core/classes/box/#finddepthfirst)

#### Source

[packages/core/src/core/obj.ts:376](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L376)

***

### findParent()

> **findParent**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find a shape along with the parent-chain

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`findParent`](/api-core/classes/box/#findparent)

#### Source

[packages/core/src/core/obj.ts:389](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L389)

***

### fromJSON()

> **fromJSON**(`json`): `void`

Import shape from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`fromJSON`](/api-core/classes/box/#fromjson)

#### Source

[packages/core/src/shapes.ts:1537](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1537)

***

### getAnchorVector()

> **getAnchorVector**(`canvas`): `number`[][]

Return the anchor vector based on this.anchorPosition. The anchor vector
provides the start point and end point to derive the base angle. The shape
will be rotated as the angle of (base angle + anchor angle) at start point.

  (shape)
     \
      \ <-- anchorLength
       \
        o --------------------> o
        |     (anchor vector)   |
        |                       |
     vector[0]               vector[1]

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getAnchorVector`](/api-core/classes/box/#getanchorvector)

#### Source

[packages/core/src/shapes.ts:1953](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1953)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getBoundingRect`](/api-core/classes/box/#getboundingrect)

#### Source

[packages/core/src/shapes.ts:893](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L893)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getCenter`](/api-core/classes/box/#getcenter)

#### Source

[packages/core/src/shapes.ts:886](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L886)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getChildrenBoundingRect`](/api-core/classes/box/#getchildrenboundingrect)

#### Source

[packages/core/src/shapes.ts:954](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L954)

***

### getContainerAt()

> **getContainerAt**(`canvas`, `point`, `exceptions`): `null` \| [`Shape`](/api-core/classes/shape/)

Pick a container shape at specific position (x, y)

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

• **exceptions**: [`Shape`](/api-core/classes/shape/)[]= `[]`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`getContainerAt`](/api-core/classes/box/#getcontainerat)

#### Source

[packages/core/src/shapes.ts:643](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L643)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getEnclosure`](/api-core/classes/box/#getenclosure)

#### Source

[packages/core/src/shapes.ts:988](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L988)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getOutline`](/api-core/classes/box/#getoutline)

#### Source

[packages/core/src/shapes.ts:821](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L821)

***

### getPage()

> **getPage**(): `null` \| [`Page`](/api-core/classes/page/)

Return the page that contains this shape

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`getPage`](/api-core/classes/box/#getpage)

#### Source

[packages/core/src/shapes.ts:568](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L568)

***

### getProperty()

> **getProperty**(`name`): `any`

Get a property object

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

[`Box`](/api-core/classes/box/).[`getProperty`](/api-core/classes/box/#getproperty)

#### Source

[packages/core/src/shapes.ts:1156](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1156)

***

### getPropertyValue()

> **getPropertyValue**(`name`): `any`

Get a property value

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

[`Box`](/api-core/classes/box/).[`getPropertyValue`](/api-core/classes/box/#getpropertyvalue)

#### Source

[packages/core/src/shapes.ts:1166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1166)

***

### getRectInDCS()

> **getRectInDCS**(`canvas`, `includeAnchorPoints`): `number`[][]

Return a bounding box in DOM coord.

[Note] If you want to place DOM elements over the canvas, use this method.
and don't forget to apply transform scale to the DOM element.

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getRectInDCS`](/api-core/classes/box/#getrectindcs)

#### Source

[packages/core/src/shapes.ts:967](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L967)

***

### getScript()

> **getScript**(`id`): `undefined` \| `string`

Get a property object

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`getScript`](/api-core/classes/box/#getscript)

#### Source

[packages/core/src/shapes.ts:1174](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1174)

***

### getSeed()

> **getSeed**(): `number`

Return the seed number

#### Returns

`number`

#### Inherited from

[`Box`](/api-core/classes/box/).[`getSeed`](/api-core/classes/box/#getseed)

#### Source

[packages/core/src/shapes.ts:583](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L583)

***

### getShapeAt()

> **getShapeAt**(`canvas`, `point`, `exceptions`, `allowDisabledAndInvisible`): `null` \| [`Shape`](/api-core/classes/shape/)

Pick a shape at specific position (x, y).
Prevent to pick children shapes if point is outside of the frame.

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

• **exceptions**: [`Shape`](/api-core/classes/shape/)[]= `[]`

• **allowDisabledAndInvisible**: `boolean`= `false`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Overrides

[`Box`](/api-core/classes/box/).[`getShapeAt`](/api-core/classes/box/#getshapeat)

#### Source

[packages/core/src/shapes.ts:3122](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L3122)

***

### getViewport()

> **getViewport**(`canvas`): `number`[][]

Return a viewport in GCS.
Viewport is a rect that includes actually drawn area which includes
stroke width, arrowheads, etc. So viewport is mostly larger than
bounding rect.

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getViewport`](/api-core/classes/box/#getviewport)

#### Source

[packages/core/src/shapes.ts:944](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L944)

***

### initialze()

> **initialze**(`canvas`): `void`

Initialize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`initialze`](/api-core/classes/box/#initialze)

#### Source

[packages/core/src/shapes.ts:591](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L591)

***

### isDescendant()

> **isDescendant**(`obj`): `boolean`

Test whether the given shape is a descendant

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Inherited from

[`Box`](/api-core/classes/box/).[`isDescendant`](/api-core/classes/box/#isdescendant)

#### Source

[packages/core/src/core/obj.ts:399](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L399)

***

### localCoordTransform()

> **localCoordTransform**(`canvas`, `point`, `recursive`): `number`[]

Transform local coord to parent's coord (LCS --> parent's LCS)
if recursive=true, transform to GCS (Global coord-system).

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

• **recursive**: `boolean`= `false`

#### Returns

`number`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`localCoordTransform`](/api-core/classes/box/#localcoordtransform)

#### Source

[packages/core/src/shapes.ts:722](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L722)

***

### localCoordTransformRev()

> **localCoordTransformRev**(`canvas`, `point`, `recursive`): `number`[]

Transform parent's coord to local coord (parent's LCS --> LCS)
if recursive=true, transform GCS (Global coord-system) --> LCS.

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

• **recursive**: `boolean`= `false`

#### Returns

`number`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`localCoordTransformRev`](/api-core/classes/box/#localcoordtransformrev)

#### Source

[packages/core/src/shapes.ts:742](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L742)

***

### localTransform()

> **localTransform**(`canvas`, `recursive`): `void`

Transform local context to parent's context

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **recursive**: `boolean`= `false`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`localTransform`](/api-core/classes/box/#localtransform)

#### Source

[packages/core/src/shapes.ts:706](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L706)

***

### match()

> **match**(`query`): `boolean`

Returns true if query matches this shape

#### Parameters

• **query**: `object`[]

#### Returns

`boolean`

#### Inherited from

[`Box`](/api-core/classes/box/).[`match`](/api-core/classes/box/#match)

#### Source

[packages/core/src/shapes.ts:1097](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1097)

***

### overlapClippingArea()

> **overlapClippingArea**(`canvas`, `rect`): `boolean`

Determines whether the given rect overlaps this shape's clipping area.
If the shape don't have clipping area, return true.
If the shape has clipping area, return true if the rect overlaps the
clipping area. (e.g. Frame)

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **rect**: `number`[][]

#### Returns

`boolean`

#### Overrides

[`Box`](/api-core/classes/box/).[`overlapClippingArea`](/api-core/classes/box/#overlapclippingarea)

#### Source

[packages/core/src/shapes.ts:3158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L3158)

***

### overlapRect()

> **overlapRect**(`canvas`, `rect`): `boolean`

Determines whether this shape overlaps a given rect
In the case of Frame, it returns true only if the rect includes the frame.

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **rect**: `number`[][]

#### Returns

`boolean`

#### Overrides

[`Box`](/api-core/classes/box/).[`overlapRect`](/api-core/classes/box/#overlaprect)

#### Source

[packages/core/src/shapes.ts:3166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L3166)

***

### parseQueryString()

> **parseQueryString**(`queryString`): `any`[]

Parse the query-string and returns a query object (JSON)

Query syntax:
<query>         = <clause>["|" <clause>]*
<clause>        = <term>["&" <term>]*
<term>          = <type-selector> | <tag-selector>
<name-selector> = <name>  e.g.) OuterBox, NameText, ...
<type-selector> = "@"<type>  e.g.) @Box, @Text, @Line, ...
<tag-selector>  = "#"<tag>   e.g.) #label, #compartment, ...

e.g.) parseQuery("@Box|NameText|@Text&#compartment")
  --> [{_type: "Box"},{name: "NameText"},{_type: "Text", tag:"compartment"}]

#### Parameters

• **queryString**: `string`

#### Returns

`any`[]

query object

#### Inherited from

[`Box`](/api-core/classes/box/).[`parseQueryString`](/api-core/classes/box/#parsequerystring)

#### Source

[packages/core/src/shapes.ts:1072](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1072)

***

### preprocess()

> **preprocess**(`doc`, `wordWrap`, `width`, `listIndent`): `void`

Preprocess document (handle wordWrap and hardBreak)
options:
  wordWrap: boolean
  width: number
  listIndent: number

Preprocessed document content grammar (BNF):
  doc = (paragraph | bulletList | orderedList)*
  orderedList [width, height] = listItem*
  bulletList [width, height] = listItem*
  listItem [width, height] = paragraph
  paragraph [width, height] = line*
  line [width, height] = text*
  text [width, height] = <TERMINAL>

#### Parameters

• **doc**: `any`

• **wordWrap**: `boolean`

• **width**: `number`

• **listIndent**: `number`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`preprocess`](/api-core/classes/box/#preprocess)

#### Source

[packages/core/src/shapes.ts:1847](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1847)

***

### readAny()

> **readAny**(`json`, `field`, `defaultValue`): `any`

Read an any value from the JSON object,
return defaultValue if the field is undefined.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `any`

#### Returns

`any`

#### Inherited from

[`Box`](/api-core/classes/box/).[`readAny`](/api-core/classes/box/#readany)

#### Source

[packages/core/src/core/obj.ts:54](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L54)

***

### readArrayAny()

> **readArrayAny**(`json`, `field`, `defaultValue`): `any`[]

Read an array of any value from the JSON object,
return defaultValue if the field is not an array.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `any`[]

#### Returns

`any`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`readArrayAny`](/api-core/classes/box/#readarrayany)

#### Source

[packages/core/src/core/obj.ts:65](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L65)

***

### readArrayBoolean()

> **readArrayBoolean**(`json`, `field`, `defaultValue`, `length`?): `boolean`[]

Read an array of boolean from the JSON object,
return defaultValue if the field is not an array of boolean.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `boolean`[]

• **length?**: `number`

#### Returns

`boolean`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`readArrayBoolean`](/api-core/classes/box/#readarrayboolean)

#### Source

[packages/core/src/core/obj.ts:148](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L148)

***

### readArrayNumber()

> **readArrayNumber**(`json`, `field`, `defaultValue`, `length`?): `number`[]

Read a number field from the JSON object,
return defaultValue if the field is not a number.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `number`[]

• **length?**: `number`

#### Returns

`number`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`readArrayNumber`](/api-core/classes/box/#readarraynumber)

#### Source

[packages/core/src/core/obj.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L87)

***

### readArrayPoint()

> **readArrayPoint**(`json`, `field`, `defaultValue`): [`number`, `number`][]

Read a, array of point value from the JSON object,
return defaultValue if the field is not an array of point.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: [`number`, `number`][]

#### Returns

[`number`, `number`][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`readArrayPoint`](/api-core/classes/box/#readarraypoint)

#### Source

[packages/core/src/core/obj.ts:256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L256)

***

### readArrayString()

> **readArrayString**(`json`, `field`, `defaultValue`): `string`[]

Read an array of string from the JSON object,
return defaultValue if the field is not an array of string.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `string`[]

#### Returns

`string`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`readArrayString`](/api-core/classes/box/#readarraystring)

#### Source

[packages/core/src/core/obj.ts:123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L123)

***

### readBoolean()

> **readBoolean**(`json`, `field`, `defaultValue`): `boolean`

Read a boolean field from the JSON object,
return defaultValue if the field is not a boolean.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `boolean`

#### Returns

`boolean`

#### Inherited from

[`Box`](/api-core/classes/box/).[`readBoolean`](/api-core/classes/box/#readboolean)

#### Source

[packages/core/src/core/obj.ts:137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L137)

***

### readColor()

> **readColor**(`json`, `field`, `defaultValue`): `string`

Read a color field from the JSON object,
return defaultValue if the field is not a string or not a valid color.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `string`

#### Returns

`string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`readColor`](/api-core/classes/box/#readcolor)

#### Source

[packages/core/src/core/obj.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L170)

***

### readEnum()

> **readEnum**(`json`, `field`, `enumType`, `defaultValue`): `string`

Read an enum value from the JSON object,
return defaultValue if the field is not a valid enum value.

#### Parameters

• **json**: `any`

• **field**: `string`

• **enumType**: `any`

• **defaultValue**: `string`

#### Returns

`string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`readEnum`](/api-core/classes/box/#readenum)

#### Source

[packages/core/src/core/obj.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L185)

***

### readNumber()

> **readNumber**(`json`, `field`, `defaultValue`): `number`

Read a number field from the JSON object,
return defaultValue if the field is not a number.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `number`

#### Returns

`number`

#### Inherited from

[`Box`](/api-core/classes/box/).[`readNumber`](/api-core/classes/box/#readnumber)

#### Source

[packages/core/src/core/obj.ts:76](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L76)

***

### readPoint()

> **readPoint**(`json`, `field`, `defaultValue`): [`number`, `number`]

Read a point value from the JSON object,
return defaultValue if the field is not a point.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: [`number`, `number`]

#### Returns

[`number`, `number`]

#### Inherited from

[`Box`](/api-core/classes/box/).[`readPoint`](/api-core/classes/box/#readpoint)

#### Source

[packages/core/src/core/obj.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L213)

***

### readPointOrNull()

> **readPointOrNull**(`json`, `field`, `defaultValue`): `null` \| [`number`, `number`]

Read a point or null value from the JSON object,
return defaultValue if the field is not a point or null.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `null` \| [`number`, `number`]

#### Returns

`null` \| [`number`, `number`]

#### Inherited from

[`Box`](/api-core/classes/box/).[`readPointOrNull`](/api-core/classes/box/#readpointornull)

#### Source

[packages/core/src/core/obj.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L233)

***

### readRef()

> **readRef**(`json`, `field`): `null` \| `string`

Read a reference to object from the JSON object,
return defaultValue if the field is not string (obj's id) or null.

#### Parameters

• **json**: `any`

• **field**: `string`

#### Returns

`null` \| `string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`readRef`](/api-core/classes/box/#readref)

#### Source

[packages/core/src/core/obj.ts:202](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L202)

***

### readString()

> **readString**(`json`, `field`, `defaultValue`): `string`

Read a string field from the JSON object,
return defaultValue if the field is not a string.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `string`

#### Returns

`string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`readString`](/api-core/classes/box/#readstring)

#### Source

[packages/core/src/core/obj.ts:112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L112)

***

### render()

> **render**(`canvas`): `void`

Render this shape

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Overrides

[`Box`](/api-core/classes/box/).[`render`](/api-core/classes/box/#render)

#### Source

[packages/core/src/shapes.ts:3231](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L3231)

***

### renderBorders()

> **renderBorders**(`canvas`, `x1`, `y1`, `x2`, `y2`): `void`

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`renderBorders`](/api-core/classes/box/#renderborders)

#### Source

[packages/core/src/shapes.ts:1617](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1617)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Default render this shape

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Overrides

[`Box`](/api-core/classes/box/).[`renderDefault`](/api-core/classes/box/#renderdefault)

#### Source

[packages/core/src/shapes.ts:3251](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L3251)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`renderOutline`](/api-core/classes/box/#renderoutline)

#### Source

[packages/core/src/shapes.ts:790](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L790)

***

### renderOutlineDefault()

> **renderOutlineDefault**(`canvas`): `number`[][]

Return outline polygon

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`renderOutlineDefault`](/api-core/classes/box/#renderoutlinedefault)

#### Source

[packages/core/src/shapes.ts:1928](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1928)

***

### renderShadow()

> **renderShadow**(`canvas`): `void`

Render shadow

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`renderShadow`](/api-core/classes/box/#rendershadow)

#### Source

[packages/core/src/shapes.ts:1810](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1810)

***

### renderText()

> **renderText**(`canvas`): `void`

Render text

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`renderText`](/api-core/classes/box/#rendertext)

#### Source

[packages/core/src/shapes.ts:1801](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1801)

***

### renderViewport()

> **renderViewport**(`canvas`): `void`

Return this shape's viewport

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`renderViewport`](/api-core/classes/box/#renderviewport)

#### Source

[packages/core/src/shapes.ts:903](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L903)

***

### renderViewportDefault()

> **renderViewportDefault**(`canvas`): `number`[][]

Render default viewport

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`renderViewportDefault`](/api-core/classes/box/#renderviewportdefault)

#### Source

[packages/core/src/shapes.ts:922](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L922)

***

### resolveRefs()

> **resolveRefs**(`idMap`, `nullIfNotFound`): `void`

Resolve references

#### Parameters

• **idMap**: `Record`\<`string`, [`Shape`](/api-core/classes/shape/)\>

id to object map

• **nullIfNotFound**: `boolean`= `false`

assign null if not found

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`resolveRefs`](/api-core/classes/box/#resolverefs)

#### Source

[packages/core/src/shapes.ts:554](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L554)

***

### setJson()

> **setJson**(`json`, `field`, `value`, `defaultValue`, `enforce`): `void`

Set a field in the JSON object only if the value is defined and not equal to the default value.

#### Parameters

• **json**: `any`

The JSON object to set the field in.

• **field**: `string`

The field name to set.

• **value**: `any`

The value to set.

• **defaultValue**: `any`

The default value to compare against.

• **enforce**: `boolean`= `false`

If true, the field will be set even if it is equal to the default value.

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`setJson`](/api-core/classes/box/#setjson)

#### Source

[packages/core/src/core/obj.ts:31](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L31)

***

### toJSON()

> **toJSON**(`recursive`, `keepRefs`, `enforce`): `any`

Export shape to JSON

#### Parameters

• **recursive**: `boolean`= `false`

• **keepRefs**: `boolean`= `false`

• **enforce**: `boolean`= `false`

#### Returns

`any`

#### Inherited from

[`Box`](/api-core/classes/box/).[`toJSON`](/api-core/classes/box/#tojson)

#### Source

[packages/core/src/shapes.ts:1489](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1489)

***

### traverse()

> **traverse**(`fun`, `parent`): `void`

Traverse all objects in breath-first order

#### Parameters

• **fun**

• **parent**: `null` \| [`Obj`](/api-core/classes/obj/)= `null`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`traverse`](/api-core/classes/box/#traverse)

#### Source

[packages/core/src/core/obj.ts:317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L317)

***

### traverseDepthFirst()

> **traverseDepthFirst**(`fun`, `parent`): `void`

Traverse all shapes in depth-first order

#### Parameters

• **fun**

• **parent**: `null` \| [`Obj`](/api-core/classes/obj/)= `null`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`traverseDepthFirst`](/api-core/classes/box/#traversedepthfirst)

#### Source

[packages/core/src/core/obj.ts:331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L331)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`traverseDepthFirstSequence`](/api-core/classes/box/#traversedepthfirstsequence)

#### Source

[packages/core/src/core/obj.ts:354](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L354)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`traverseSequence`](/api-core/classes/box/#traversesequence)

#### Source

[packages/core/src/core/obj.ts:345](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L345)

***

### update()

> **update**(`canvas`): `void`

Update shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Overrides

[`Box`](/api-core/classes/box/).[`update`](/api-core/classes/box/#update)

#### Source

[packages/core/src/shapes.ts:3173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L3173)

***

### visit()

> **visit**(`fun`, `parent`): `void`

Visit all shapes in breath-first order. The difference from traverse()
is that each shape determine visit into children or not.
(e.g. Group and Frame doens't visit into children)

#### Parameters

• **fun**

• **parent**: `null` \| [`Shape`](/api-core/classes/shape/)= `null`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`visit`](/api-core/classes/box/#visit)

#### Source

[packages/core/src/shapes.ts:665](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L665)

***

### wordWrapTextSize()

> **wordWrapTextSize**(`canvas`, `wordWrap`, `width`): `number`[]

Compute size of text with word-wrap and new line chars

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **wordWrap**: `boolean`

• **width**: `number`

#### Returns

`number`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`wordWrapTextSize`](/api-core/classes/box/#wordwraptextsize)

#### Source

[packages/core/src/shapes.ts:1852](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1852)
