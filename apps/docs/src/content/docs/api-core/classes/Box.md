---
editUrl: false
next: false
prev: false
title: "Box"
---

Box shape

## Extends

- [`Shape`](/api-core/classes/shape/)

## Constructors

### new Box()

> **new Box**(): [`Box`](/api-core/classes/box/)

#### Returns

[`Box`](/api-core/classes/box/)

#### Overrides

[`Shape`](/api-core/classes/shape/).[`constructor`](/api-core/classes/shape/#constructors)

#### Source

[packages/core/src/shapes.ts:1464](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1464)

## Properties

### anchorAngle

> **anchorAngle**: `number`

Anchor angle (in degree)

#### Source

[packages/core/src/shapes.ts:1386](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1386)

***

### anchorLength

> **anchorLength**: `number`

Anchor length

#### Source

[packages/core/src/shapes.ts:1391](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1391)

***

### anchorPosition

> **anchorPosition**: `number`

Anchor position (0~1). 0 is on tail, 1 is on head

#### Source

[packages/core/src/shapes.ts:1396](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1396)

***

### anchored

> **anchored**: `boolean`

Anchored

#### Source

[packages/core/src/shapes.ts:1381](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1381)

***

### borderPosition

> **borderPosition**: [`BorderPositionEnum`](/api-core/type-aliases/borderpositionenum/)

Border position (center, inside, outside)

#### Source

[packages/core/src/shapes.ts:1376](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1376)

***

### borders

> **borders**: `boolean`[]

Borders [top, right, bottom, left]

#### Source

[packages/core/src/shapes.ts:1371](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1371)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`children`](/api-core/classes/shape/#children)

#### Source

[packages/core/src/core/obj.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L14)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`connectable`](/api-core/classes/shape/#connectable)

#### Source

[packages/core/src/shapes.ts:218](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L218)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`constraints`](/api-core/classes/shape/#constraints)

#### Source

[packages/core/src/shapes.ts:333](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L333)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containable`](/api-core/classes/shape/#containable)

#### Source

[packages/core/src/shapes.ts:203](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L203)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containableFilter`](/api-core/classes/shape/#containablefilter)

#### Source

[packages/core/src/shapes.ts:208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L208)

***

### corners

> **corners**: `number`[]

Corner radius [top-left, top-right, bottom-right, bottom-left] (same with CSS).
if positive value, it is pixels.
if negative value, it is the percentage ratio of the shorter one between the width and the height.

#### Source

[packages/core/src/shapes.ts:1366](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1366)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`description`](/api-core/classes/shape/#description)

#### Source

[packages/core/src/shapes.ts:163](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L163)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`enable`](/api-core/classes/shape/#enable)

#### Source

[packages/core/src/shapes.ts:178](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L178)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fillColor`](/api-core/classes/shape/#fillcolor)

#### Source

[packages/core/src/shapes.ts:263](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L263)

***

### fillStyle

> **fillStyle**: [`FillStyleEnum`](/api-core/type-aliases/fillstyleenum/)

Fill style

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fillStyle`](/api-core/classes/shape/#fillstyle)

#### Source

[packages/core/src/shapes.ts:268](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L268)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontColor`](/api-core/classes/shape/#fontcolor)

#### Source

[packages/core/src/shapes.ts:273](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L273)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontFamily`](/api-core/classes/shape/#fontfamily)

#### Source

[packages/core/src/shapes.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L278)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontSize`](/api-core/classes/shape/#fontsize)

#### Source

[packages/core/src/shapes.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L283)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontStyle`](/api-core/classes/shape/#fontstyle)

#### Source

[packages/core/src/shapes.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L288)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontWeight`](/api-core/classes/shape/#fontweight)

#### Source

[packages/core/src/shapes.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L293)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`height`](/api-core/classes/shape/#height)

#### Source

[packages/core/src/shapes.ts:238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L238)

***

### horzAlign

> **horzAlign**: [`HorzAlignEnum`](/api-core/type-aliases/horzalignenum/)

Text horizontal alignment

#### Source

[packages/core/src/shapes.ts:1441](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1441)

***

### id

> **id**: `string`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`id`](/api-core/classes/shape/#id)

#### Source

[packages/core/src/core/obj.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L11)

***

### left

> **left**: `number`

Shape's left position

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`left`](/api-core/classes/shape/#left)

#### Source

[packages/core/src/shapes.ts:223](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L223)

***

### lineHeight

> **lineHeight**: `number`

Text line height

#### Source

[packages/core/src/shapes.ts:1451](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1451)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`link`](/api-core/classes/shape/#link)

#### Source

[packages/core/src/shapes.ts:323](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L323)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`movable`](/api-core/classes/shape/#movable)

#### Source

[packages/core/src/shapes.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L188)

***

### movableParentFilter

> **movableParentFilter**: `string`

Movable parent filter

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`movableParentFilter`](/api-core/classes/shape/#movableparentfilter)

#### Source

[packages/core/src/shapes.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L213)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`name`](/api-core/classes/shape/#name)

#### Source

[packages/core/src/shapes.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L158)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`opacity`](/api-core/classes/shape/#opacity)

#### Source

[packages/core/src/shapes.ts:298](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L298)

***

### padding

> **padding**: `number`[]

Padding spaces [top, right, bottom, left] (same with CSS)

#### Source

[packages/core/src/shapes.ts:1359](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1359)

***

### paragraphSpacing

> **paragraphSpacing**: `number`

Text paragraph spacing

#### Source

[packages/core/src/shapes.ts:1456](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1456)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`parent`](/api-core/classes/shape/#parent)

#### Source

[packages/core/src/core/obj.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L13)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`properties`](/api-core/classes/shape/#properties)

#### Source

[packages/core/src/shapes.ts:338](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L338)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`proto`](/api-core/classes/shape/#proto)

#### Source

[packages/core/src/shapes.ts:168](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L168)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`reference`](/api-core/classes/shape/#reference)

#### Source

[packages/core/src/shapes.ts:328](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L328)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`rotatable`](/api-core/classes/shape/#rotatable)

#### Source

[packages/core/src/shapes.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L198)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`rotate`](/api-core/classes/shape/#rotate)

#### Source

[packages/core/src/shapes.ts:243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L243)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`roughness`](/api-core/classes/shape/#roughness)

#### Source

[packages/core/src/shapes.ts:303](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L303)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`scripts`](/api-core/classes/shape/#scripts)

#### Source

[packages/core/src/shapes.ts:343](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L343)

***

### shadow

> **shadow**: `boolean`

Shadow

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`shadow`](/api-core/classes/shape/#shadow)

#### Source

[packages/core/src/shapes.ts:308](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L308)

***

### shadowColor

> **shadowColor**: `string`

Shadow color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`shadowColor`](/api-core/classes/shape/#shadowcolor)

#### Source

[packages/core/src/shapes.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L313)

***

### shadowOffset

> **shadowOffset**: `number`[]

Shadow offset

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`shadowOffset`](/api-core/classes/shape/#shadowoffset)

#### Source

[packages/core/src/shapes.ts:318](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L318)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`sizable`](/api-core/classes/shape/#sizable)

#### Source

[packages/core/src/shapes.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L193)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokeColor`](/api-core/classes/shape/#strokecolor)

#### Source

[packages/core/src/shapes.ts:248](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L248)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokePattern`](/api-core/classes/shape/#strokepattern)

#### Source

[packages/core/src/shapes.ts:258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L258)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokeWidth`](/api-core/classes/shape/#strokewidth)

#### Source

[packages/core/src/shapes.ts:253](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L253)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`tags`](/api-core/classes/shape/#tags)

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

#### Source

[packages/core/src/shapes.ts:1431](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1431)

***

### textEditable

> **textEditable**: `boolean`

Text editable

#### Source

[packages/core/src/shapes.ts:1401](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1401)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`top`](/api-core/classes/shape/#top)

#### Source

[packages/core/src/shapes.ts:228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L228)

***

### type

> **type**: `string`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`type`](/api-core/classes/shape/#type)

#### Source

[packages/core/src/core/obj.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L12)

***

### vertAlign

> **vertAlign**: [`VertAlignEnum`](/api-core/type-aliases/vertalignenum/)

Text vertical alignment

#### Source

[packages/core/src/shapes.ts:1446](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1446)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`visible`](/api-core/classes/shape/#visible)

#### Source

[packages/core/src/shapes.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L183)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`width`](/api-core/classes/shape/#width)

#### Source

[packages/core/src/shapes.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L233)

***

### wordWrap

> **wordWrap**: `boolean`

Word wrap

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

[`Shape`](/api-core/classes/shape/).[`assignStyles`](/api-core/classes/shape/#assignstyles)

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

[`Shape`](/api-core/classes/shape/).[`canContain`](/api-core/classes/shape/#cancontain)

#### Source

[packages/core/src/shapes.ts:1144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1144)

***

### computeCorners()

> **computeCorners**(): `number`[]

#### Returns

`number`[]

#### Source

[packages/core/src/shapes.ts:1604](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1604)

***

### computeOpacity()

> **computeOpacity**(): `number`

#### Returns

`number`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`computeOpacity`](/api-core/classes/shape/#computeopacity)

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

[`Shape`](/api-core/classes/shape/).[`containsPoint`](/api-core/classes/shape/#containspoint)

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

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`draw`](/api-core/classes/shape/#draw)

#### Source

[packages/core/src/shapes.ts:832](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L832)

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

[`Shape`](/api-core/classes/shape/).[`drawLink`](/api-core/classes/shape/#drawlink)

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

[`Shape`](/api-core/classes/shape/).[`finalize`](/api-core/classes/shape/#finalize)

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

[`Shape`](/api-core/classes/shape/).[`find`](/api-core/classes/shape/#find)

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

[`Shape`](/api-core/classes/shape/).[`findAllByQuery`](/api-core/classes/shape/#findallbyquery)

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

[`Shape`](/api-core/classes/shape/).[`findByQuery`](/api-core/classes/shape/#findbyquery)

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

[`Shape`](/api-core/classes/shape/).[`findDepthFirst`](/api-core/classes/shape/#finddepthfirst)

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

[`Shape`](/api-core/classes/shape/).[`findParent`](/api-core/classes/shape/#findparent)

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

#### Overrides

[`Shape`](/api-core/classes/shape/).[`fromJSON`](/api-core/classes/shape/#fromjson)

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

[`Shape`](/api-core/classes/shape/).[`getBoundingRect`](/api-core/classes/shape/#getboundingrect)

#### Source

[packages/core/src/shapes.ts:893](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L893)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getCenter`](/api-core/classes/shape/#getcenter)

#### Source

[packages/core/src/shapes.ts:886](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L886)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getChildrenBoundingRect`](/api-core/classes/shape/#getchildrenboundingrect)

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

[`Shape`](/api-core/classes/shape/).[`getContainerAt`](/api-core/classes/shape/#getcontainerat)

#### Source

[packages/core/src/shapes.ts:643](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L643)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getEnclosure`](/api-core/classes/shape/#getenclosure)

#### Source

[packages/core/src/shapes.ts:988](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L988)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getOutline`](/api-core/classes/shape/#getoutline)

#### Source

[packages/core/src/shapes.ts:821](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L821)

***

### getPage()

> **getPage**(): `null` \| [`Page`](/api-core/classes/page/)

Return the page that contains this shape

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getPage`](/api-core/classes/shape/#getpage)

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

[`Shape`](/api-core/classes/shape/).[`getProperty`](/api-core/classes/shape/#getproperty)

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

[`Shape`](/api-core/classes/shape/).[`getPropertyValue`](/api-core/classes/shape/#getpropertyvalue)

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

[`Shape`](/api-core/classes/shape/).[`getRectInDCS`](/api-core/classes/shape/#getrectindcs)

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

[`Shape`](/api-core/classes/shape/).[`getScript`](/api-core/classes/shape/#getscript)

#### Source

[packages/core/src/shapes.ts:1174](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1174)

***

### getSeed()

> **getSeed**(): `number`

Return the seed number

#### Returns

`number`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getSeed`](/api-core/classes/shape/#getseed)

#### Source

[packages/core/src/shapes.ts:583](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L583)

***

### getShapeAt()

> **getShapeAt**(`canvas`, `point`, `exceptions`, `allowDisabledAndInvisible`): `null` \| [`Shape`](/api-core/classes/shape/)

Pick a shape at specific position (x, y)

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

• **exceptions**: [`Shape`](/api-core/classes/shape/)[]= `[]`

• **allowDisabledAndInvisible**: `boolean`= `false`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getShapeAt`](/api-core/classes/shape/#getshapeat)

#### Source

[packages/core/src/shapes.ts:616](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L616)

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

[`Shape`](/api-core/classes/shape/).[`getViewport`](/api-core/classes/shape/#getviewport)

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

[`Shape`](/api-core/classes/shape/).[`initialze`](/api-core/classes/shape/#initialze)

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

[`Shape`](/api-core/classes/shape/).[`isDescendant`](/api-core/classes/shape/#isdescendant)

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

[`Shape`](/api-core/classes/shape/).[`localCoordTransform`](/api-core/classes/shape/#localcoordtransform)

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

[`Shape`](/api-core/classes/shape/).[`localCoordTransformRev`](/api-core/classes/shape/#localcoordtransformrev)

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

[`Shape`](/api-core/classes/shape/).[`localTransform`](/api-core/classes/shape/#localtransform)

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

[`Shape`](/api-core/classes/shape/).[`match`](/api-core/classes/shape/#match)

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

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`overlapClippingArea`](/api-core/classes/shape/#overlapclippingarea)

#### Source

[packages/core/src/shapes.ts:1028](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1028)

***

### overlapRect()

> **overlapRect**(`canvas`, `rect`): `boolean`

Determines whether this shape overlaps a given rect

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **rect**: `number`[][]

#### Returns

`boolean`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`overlapRect`](/api-core/classes/shape/#overlaprect)

#### Source

[packages/core/src/shapes.ts:1035](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1035)

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

[`Shape`](/api-core/classes/shape/).[`parseQueryString`](/api-core/classes/shape/#parsequerystring)

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

[`Shape`](/api-core/classes/shape/).[`readAny`](/api-core/classes/shape/#readany)

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

[`Shape`](/api-core/classes/shape/).[`readArrayAny`](/api-core/classes/shape/#readarrayany)

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

[`Shape`](/api-core/classes/shape/).[`readArrayBoolean`](/api-core/classes/shape/#readarrayboolean)

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

[`Shape`](/api-core/classes/shape/).[`readArrayNumber`](/api-core/classes/shape/#readarraynumber)

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

[`Shape`](/api-core/classes/shape/).[`readArrayPoint`](/api-core/classes/shape/#readarraypoint)

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

[`Shape`](/api-core/classes/shape/).[`readArrayString`](/api-core/classes/shape/#readarraystring)

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

[`Shape`](/api-core/classes/shape/).[`readBoolean`](/api-core/classes/shape/#readboolean)

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

[`Shape`](/api-core/classes/shape/).[`readColor`](/api-core/classes/shape/#readcolor)

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

[`Shape`](/api-core/classes/shape/).[`readEnum`](/api-core/classes/shape/#readenum)

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

[`Shape`](/api-core/classes/shape/).[`readNumber`](/api-core/classes/shape/#readnumber)

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

[`Shape`](/api-core/classes/shape/).[`readPoint`](/api-core/classes/shape/#readpoint)

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

[`Shape`](/api-core/classes/shape/).[`readPointOrNull`](/api-core/classes/shape/#readpointornull)

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

[`Shape`](/api-core/classes/shape/).[`readRef`](/api-core/classes/shape/#readref)

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

[`Shape`](/api-core/classes/shape/).[`readString`](/api-core/classes/shape/#readstring)

#### Source

[packages/core/src/core/obj.ts:112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L112)

***

### render()

> **render**(`canvas`): `void`

Render this shape

Render vs Draw
- Render: computing geometries how to draw the shape
- Draw: actual drawing the computed geometries of the shape on the canvas

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`render`](/api-core/classes/shape/#render)

#### Source

[packages/core/src/shapes.ts:765](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L765)

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

[`Shape`](/api-core/classes/shape/).[`renderDefault`](/api-core/classes/shape/#renderdefault)

#### Source

[packages/core/src/shapes.ts:1748](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1748)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`renderOutline`](/api-core/classes/shape/#renderoutline)

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

#### Overrides

[`Shape`](/api-core/classes/shape/).[`renderOutlineDefault`](/api-core/classes/shape/#renderoutlinedefault)

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

#### Overrides

[`Shape`](/api-core/classes/shape/).[`renderShadow`](/api-core/classes/shape/#rendershadow)

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

[`Shape`](/api-core/classes/shape/).[`renderViewport`](/api-core/classes/shape/#renderviewport)

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

[`Shape`](/api-core/classes/shape/).[`renderViewportDefault`](/api-core/classes/shape/#renderviewportdefault)

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

[`Shape`](/api-core/classes/shape/).[`resolveRefs`](/api-core/classes/shape/#resolverefs)

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

[`Shape`](/api-core/classes/shape/).[`setJson`](/api-core/classes/shape/#setjson)

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

#### Overrides

[`Shape`](/api-core/classes/shape/).[`toJSON`](/api-core/classes/shape/#tojson)

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

[`Shape`](/api-core/classes/shape/).[`traverse`](/api-core/classes/shape/#traverse)

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

[`Shape`](/api-core/classes/shape/).[`traverseDepthFirst`](/api-core/classes/shape/#traversedepthfirst)

#### Source

[packages/core/src/core/obj.ts:331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L331)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`traverseDepthFirstSequence`](/api-core/classes/shape/#traversedepthfirstsequence)

#### Source

[packages/core/src/core/obj.ts:354](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L354)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`traverseSequence`](/api-core/classes/shape/#traversesequence)

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

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`update`](/api-core/classes/shape/#update)

#### Source

[packages/core/src/shapes.ts:606](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L606)

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

[`Shape`](/api-core/classes/shape/).[`visit`](/api-core/classes/shape/#visit)

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

#### Source

[packages/core/src/shapes.ts:1852](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1852)
