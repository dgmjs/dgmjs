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

[shapes.ts:1390](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1390)

## Properties

### anchorAngle

> **anchorAngle**: `number`

Anchor angle (in degree)

#### Source

[shapes.ts:1312](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1312)

***

### anchorLength

> **anchorLength**: `number`

Anchor length

#### Source

[shapes.ts:1317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1317)

***

### anchorPosition

> **anchorPosition**: `number`

Anchor position (0~1). 0 is on tail, 1 is on head

#### Source

[shapes.ts:1322](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1322)

***

### anchored

> **anchored**: `boolean`

Anchored

#### Source

[shapes.ts:1307](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1307)

***

### borderPosition

> **borderPosition**: [`BorderPositionEnum`](/api-core/type-aliases/borderpositionenum/)

Border position (center, inside, outside)

#### Source

[shapes.ts:1302](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1302)

***

### borders

> **borders**: `boolean`[]

Borders [top, right, bottom, left]

#### Source

[shapes.ts:1297](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1297)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`children`](/api-core/classes/shape/#children)

#### Source

[core/obj.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L14)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`connectable`](/api-core/classes/shape/#connectable)

#### Source

[shapes.ts:218](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L218)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`constraints`](/api-core/classes/shape/#constraints)

#### Source

[shapes.ts:333](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L333)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containable`](/api-core/classes/shape/#containable)

#### Source

[shapes.ts:203](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L203)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containableFilter`](/api-core/classes/shape/#containablefilter)

#### Source

[shapes.ts:208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L208)

***

### corners

> **corners**: `number`[]

Corner radius [top-left, top-right, bottom-right, bottom-left] (same with CSS)

#### Source

[shapes.ts:1292](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1292)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`description`](/api-core/classes/shape/#description)

#### Source

[shapes.ts:163](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L163)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`enable`](/api-core/classes/shape/#enable)

#### Source

[shapes.ts:178](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L178)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fillColor`](/api-core/classes/shape/#fillcolor)

#### Source

[shapes.ts:263](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L263)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fillStyle`](/api-core/classes/shape/#fillstyle)

#### Source

[shapes.ts:268](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L268)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontColor`](/api-core/classes/shape/#fontcolor)

#### Source

[shapes.ts:273](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L273)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontFamily`](/api-core/classes/shape/#fontfamily)

#### Source

[shapes.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L278)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontSize`](/api-core/classes/shape/#fontsize)

#### Source

[shapes.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L283)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontStyle`](/api-core/classes/shape/#fontstyle)

#### Source

[shapes.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L288)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontWeight`](/api-core/classes/shape/#fontweight)

#### Source

[shapes.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L293)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`height`](/api-core/classes/shape/#height)

#### Source

[shapes.ts:238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L238)

***

### horzAlign

> **horzAlign**: [`HorzAlignEnum`](/api-core/type-aliases/horzalignenum/)

Text horizontal alignment

#### Source

[shapes.ts:1367](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1367)

***

### id

> **id**: `string`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`id`](/api-core/classes/shape/#id)

#### Source

[core/obj.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L11)

***

### left

> **left**: `number`

Shape's left position

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`left`](/api-core/classes/shape/#left)

#### Source

[shapes.ts:223](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L223)

***

### lineHeight

> **lineHeight**: `number`

Text line height

#### Source

[shapes.ts:1377](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1377)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`link`](/api-core/classes/shape/#link)

#### Source

[shapes.ts:323](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L323)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`movable`](/api-core/classes/shape/#movable)

#### Source

[shapes.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L188)

***

### movableParentFilter

> **movableParentFilter**: `string`

Movable parent filter

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`movableParentFilter`](/api-core/classes/shape/#movableparentfilter)

#### Source

[shapes.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L213)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`name`](/api-core/classes/shape/#name)

#### Source

[shapes.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L158)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`opacity`](/api-core/classes/shape/#opacity)

#### Source

[shapes.ts:298](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L298)

***

### padding

> **padding**: `number`[]

Padding spaces [top, right, bottom, left] (same with CSS)

#### Source

[shapes.ts:1287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1287)

***

### paragraphSpacing

> **paragraphSpacing**: `number`

Text paragraph spacing

#### Source

[shapes.ts:1382](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1382)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`parent`](/api-core/classes/shape/#parent)

#### Source

[core/obj.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L13)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`properties`](/api-core/classes/shape/#properties)

#### Source

[shapes.ts:338](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L338)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`proto`](/api-core/classes/shape/#proto)

#### Source

[shapes.ts:168](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L168)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`reference`](/api-core/classes/shape/#reference)

#### Source

[shapes.ts:328](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L328)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`rotatable`](/api-core/classes/shape/#rotatable)

#### Source

[shapes.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L198)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`rotate`](/api-core/classes/shape/#rotate)

#### Source

[shapes.ts:243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L243)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`roughness`](/api-core/classes/shape/#roughness)

#### Source

[shapes.ts:303](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L303)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`scripts`](/api-core/classes/shape/#scripts)

#### Source

[shapes.ts:343](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L343)

***

### shadow

> **shadow**: `boolean`

Shadow

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`shadow`](/api-core/classes/shape/#shadow)

#### Source

[shapes.ts:308](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L308)

***

### shadowColor

> **shadowColor**: `string`

Shadow color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`shadowColor`](/api-core/classes/shape/#shadowcolor)

#### Source

[shapes.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L313)

***

### shadowOffset

> **shadowOffset**: `number`[]

Shadow offset

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`shadowOffset`](/api-core/classes/shape/#shadowoffset)

#### Source

[shapes.ts:318](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L318)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`sizable`](/api-core/classes/shape/#sizable)

#### Source

[shapes.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L193)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokeColor`](/api-core/classes/shape/#strokecolor)

#### Source

[shapes.ts:248](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L248)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokePattern`](/api-core/classes/shape/#strokepattern)

#### Source

[shapes.ts:258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L258)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokeWidth`](/api-core/classes/shape/#strokewidth)

#### Source

[shapes.ts:253](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L253)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`tags`](/api-core/classes/shape/#tags)

#### Source

[shapes.ts:173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L173)

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

[shapes.ts:1357](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1357)

***

### textEditable

> **textEditable**: `boolean`

Text editable

#### Source

[shapes.ts:1327](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1327)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`top`](/api-core/classes/shape/#top)

#### Source

[shapes.ts:228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L228)

***

### type

> **type**: `string`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`type`](/api-core/classes/shape/#type)

#### Source

[core/obj.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L12)

***

### vertAlign

> **vertAlign**: [`VertAlignEnum`](/api-core/type-aliases/vertalignenum/)

Text vertical alignment

#### Source

[shapes.ts:1372](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1372)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`visible`](/api-core/classes/shape/#visible)

#### Source

[shapes.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L183)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`width`](/api-core/classes/shape/#width)

#### Source

[shapes.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L233)

***

### wordWrap

> **wordWrap**: `boolean`

Word wrap

#### Source

[shapes.ts:1362](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1362)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:536](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L536)

***

### innerBottom

> `get` **innerBottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1464](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1464)

***

### innerHeight

> `get` **innerHeight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1472](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1472)

***

### innerLeft

> `get` **innerLeft**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1452](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1452)

***

### innerRight

> `get` **innerRight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1456](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1456)

***

### innerTop

> `get` **innerTop**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1460](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1460)

***

### innerWidth

> `get` **innerWidth**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1468](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1468)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:532](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L532)

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

[shapes.ts:626](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L626)

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

[shapes.ts:1080](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1080)

***

### computeOpacity()

> **computeOpacity**(): `number`

#### Returns

`number`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`computeOpacity`](/api-core/classes/shape/#computeopacity)

#### Source

[shapes.ts:616](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L616)

***

### containsPoint()

> **containsPoint**(`canvas`, `point`): `boolean`

Determines whether this shape contains a point in GCS

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

#### Returns

`boolean`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containsPoint`](/api-core/classes/shape/#containspoint)

#### Source

[shapes.ts:941](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L941)

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

[shapes.ts:772](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L772)

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

[shapes.ts:786](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L786)

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

[shapes.ts:556](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L556)

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

[core/obj.ts:106](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L106)

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

[shapes.ts:1070](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1070)

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

[shapes.ts:1057](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1057)

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

[core/obj.ts:119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L119)

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

[core/obj.ts:132](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L132)

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

[shapes.ts:1433](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1433)

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

[shapes.ts:1812](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1812)

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

[shapes.ts:833](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L833)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getCenter`](/api-core/classes/shape/#getcenter)

#### Source

[shapes.ts:826](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L826)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getChildrenBoundingRect`](/api-core/classes/shape/#getchildrenboundingrect)

#### Source

[shapes.ts:894](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L894)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getEnclosure`](/api-core/classes/shape/#getenclosure)

#### Source

[shapes.ts:928](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L928)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getOutline`](/api-core/classes/shape/#getoutline)

#### Source

[shapes.ts:761](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L761)

***

### getPage()

> **getPage**(): `null` \| [`Page`](/api-core/classes/page/)

Return the page that contains this shape

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getPage`](/api-core/classes/shape/#getpage)

#### Source

[shapes.ts:528](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L528)

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

[shapes.ts:1092](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1092)

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

[shapes.ts:1102](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1102)

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

[shapes.ts:907](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L907)

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

[shapes.ts:1110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1110)

***

### getSeed()

> **getSeed**(): `number`

Return the seed number

#### Returns

`number`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getSeed`](/api-core/classes/shape/#getseed)

#### Source

[shapes.ts:543](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L543)

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

[shapes.ts:576](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L576)

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

[shapes.ts:884](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L884)

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

[shapes.ts:551](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L551)

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

[core/obj.ts:142](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L142)

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

[shapes.ts:662](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L662)

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

[shapes.ts:682](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L682)

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

[shapes.ts:646](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L646)

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

[shapes.ts:1033](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1033)

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

[shapes.ts:964](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L964)

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

[shapes.ts:971](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L971)

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

[shapes.ts:1008](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1008)

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

[shapes.ts:1706](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1706)

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

[shapes.ts:705](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L705)

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

[shapes.ts:1476](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1476)

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

[shapes.ts:1607](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1607)

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

[shapes.ts:730](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L730)

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

[shapes.ts:1787](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1787)

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

[shapes.ts:1669](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1669)

***

### renderText()

> **renderText**(`canvas`): `void`

Render text

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:1660](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1660)

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

[shapes.ts:843](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L843)

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

[shapes.ts:862](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L862)

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

[shapes.ts:514](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L514)

***

### toJSON()

> **toJSON**(`recursive`, `keepRefs`): `any`

Export shape to JSON

#### Parameters

• **recursive**: `boolean`= `false`

• **keepRefs**: `boolean`= `false`

#### Returns

`any`

#### Overrides

[`Shape`](/api-core/classes/shape/).[`toJSON`](/api-core/classes/shape/#tojson)

#### Source

[shapes.ts:1413](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1413)

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

[core/obj.ts:60](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L60)

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

[core/obj.ts:74](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L74)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`traverseDepthFirstSequence`](/api-core/classes/shape/#traversedepthfirstsequence)

#### Source

[core/obj.ts:97](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L97)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`traverseSequence`](/api-core/classes/shape/#traversesequence)

#### Source

[core/obj.ts:88](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L88)

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

[shapes.ts:566](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L566)

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

[shapes.ts:605](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L605)

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

[shapes.ts:1711](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1711)
