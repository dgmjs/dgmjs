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

[shapes.ts:1200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1200)

## Properties

### anchorAngle

> **anchorAngle**: `number`

Anchor angle (in degree)

#### Source

[shapes.ts:1122](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1122)

***

### anchorLength

> **anchorLength**: `number`

Anchor length

#### Source

[shapes.ts:1127](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1127)

***

### anchorPosition

> **anchorPosition**: `number`

Anchor position (0~1). 0 is on tail, 1 is on head

#### Source

[shapes.ts:1132](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1132)

***

### anchored

> **anchored**: `boolean`

Anchored

#### Source

[shapes.ts:1117](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1117)

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

[shapes.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L200)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`constraints`](/api-core/classes/shape/#constraints)

#### Source

[shapes.ts:300](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L300)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containable`](/api-core/classes/shape/#containable)

#### Source

[shapes.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L190)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containableFilter`](/api-core/classes/shape/#containablefilter)

#### Source

[shapes.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L195)

***

### corners

> **corners**: `number`[]

Corner radius [top-left, top-right, bottom-right, bottom-left] (same with CSS)

#### Source

[shapes.ts:1112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1112)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`description`](/api-core/classes/shape/#description)

#### Source

[shapes.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L150)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`enable`](/api-core/classes/shape/#enable)

#### Source

[shapes.ts:165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L165)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fillColor`](/api-core/classes/shape/#fillcolor)

#### Source

[shapes.ts:245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L245)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fillStyle`](/api-core/classes/shape/#fillstyle)

#### Source

[shapes.ts:250](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L250)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontColor`](/api-core/classes/shape/#fontcolor)

#### Source

[shapes.ts:255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L255)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontFamily`](/api-core/classes/shape/#fontfamily)

#### Source

[shapes.ts:260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L260)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontSize`](/api-core/classes/shape/#fontsize)

#### Source

[shapes.ts:265](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L265)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontStyle`](/api-core/classes/shape/#fontstyle)

#### Source

[shapes.ts:270](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L270)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontWeight`](/api-core/classes/shape/#fontweight)

#### Source

[shapes.ts:275](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L275)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`height`](/api-core/classes/shape/#height)

#### Source

[shapes.ts:220](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L220)

***

### horzAlign

> **horzAlign**: [`HorzAlignEnum`](/api-core/type-aliases/horzalignenum/)

Text horizontal alignment

#### Source

[shapes.ts:1177](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1177)

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

[shapes.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L205)

***

### lineHeight

> **lineHeight**: `number`

Text line height

#### Source

[shapes.ts:1187](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1187)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`link`](/api-core/classes/shape/#link)

#### Source

[shapes.ts:290](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L290)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`movable`](/api-core/classes/shape/#movable)

#### Source

[shapes.ts:175](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L175)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`name`](/api-core/classes/shape/#name)

#### Source

[shapes.ts:145](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L145)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`opacity`](/api-core/classes/shape/#opacity)

#### Source

[shapes.ts:280](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L280)

***

### padding

> **padding**: `number`[]

Padding spaces [top, right, bottom, left] (same with CSS)

#### Source

[shapes.ts:1107](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1107)

***

### paragraphSpacing

> **paragraphSpacing**: `number`

Text paragraph spacing

#### Source

[shapes.ts:1192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1192)

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

[shapes.ts:305](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L305)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`proto`](/api-core/classes/shape/#proto)

#### Source

[shapes.ts:155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L155)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`reference`](/api-core/classes/shape/#reference)

#### Source

[shapes.ts:295](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L295)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`rotatable`](/api-core/classes/shape/#rotatable)

#### Source

[shapes.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L185)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`rotate`](/api-core/classes/shape/#rotate)

#### Source

[shapes.ts:225](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L225)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`roughness`](/api-core/classes/shape/#roughness)

#### Source

[shapes.ts:285](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L285)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`scripts`](/api-core/classes/shape/#scripts)

#### Source

[shapes.ts:310](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L310)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`sizable`](/api-core/classes/shape/#sizable)

#### Source

[shapes.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L180)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokeColor`](/api-core/classes/shape/#strokecolor)

#### Source

[shapes.ts:230](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L230)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokePattern`](/api-core/classes/shape/#strokepattern)

#### Source

[shapes.ts:240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L240)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokeWidth`](/api-core/classes/shape/#strokewidth)

#### Source

[shapes.ts:235](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L235)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`tags`](/api-core/classes/shape/#tags)

#### Source

[shapes.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L160)

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

[shapes.ts:1167](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1167)

***

### textEditable

> **textEditable**: `boolean`

Text editable

#### Source

[shapes.ts:1137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1137)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`top`](/api-core/classes/shape/#top)

#### Source

[shapes.ts:210](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L210)

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

[shapes.ts:1182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1182)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`visible`](/api-core/classes/shape/#visible)

#### Source

[shapes.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L170)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`width`](/api-core/classes/shape/#width)

#### Source

[shapes.ts:215](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L215)

***

### wordWrap

> **wordWrap**: `boolean`

Word wrap

#### Source

[shapes.ts:1172](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1172)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:474](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L474)

***

### innerBottom

> `get` **innerBottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1268](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1268)

***

### innerHeight

> `get` **innerHeight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1276](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1276)

***

### innerLeft

> `get` **innerLeft**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1256)

***

### innerRight

> `get` **innerRight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1260)

***

### innerTop

> `get` **innerTop**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1264](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1264)

***

### innerWidth

> `get` **innerWidth**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1272](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1272)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:470](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L470)

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

[shapes.ts:535](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L535)

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

[shapes.ts:927](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L927)

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

[shapes.ts:804](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L804)

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

[shapes.ts:670](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L670)

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

[shapes.ts:684](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L684)

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

[shapes.ts:491](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L491)

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

[shapes.ts:917](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L917)

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

[shapes.ts:904](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L904)

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

[shapes.ts:1239](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1239)

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

[shapes.ts:1433](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1433)

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

[shapes.ts:731](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L731)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getCenter`](/api-core/classes/shape/#getcenter)

#### Source

[shapes.ts:724](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L724)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getChildrenBoundingRect`](/api-core/classes/shape/#getchildrenboundingrect)

#### Source

[shapes.ts:757](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L757)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getEnclosure`](/api-core/classes/shape/#getenclosure)

#### Source

[shapes.ts:791](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L791)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getOutline`](/api-core/classes/shape/#getoutline)

#### Source

[shapes.ts:659](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L659)

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

[shapes.ts:939](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L939)

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

[shapes.ts:949](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L949)

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

[shapes.ts:770](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L770)

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

[shapes.ts:957](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L957)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getSeed`](/api-core/classes/shape/#getseed)

#### Source

[shapes.ts:478](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L478)

***

### getShapeAt()

> **getShapeAt**(`canvas`, `point`, `exceptions`): `null` \| [`Shape`](/api-core/classes/shape/)

Pick a shape at specific position (x, y)

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

• **exceptions**: [`Shape`](/api-core/classes/shape/)[]= `[]`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getShapeAt`](/api-core/classes/shape/#getshapeat)

#### Source

[shapes.ts:510](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L510)

***

### getViewRect()

> **getViewRect**(`canvas`): `number`[][]

Return a view rect in GCS.
View rect is a rect that includes actually drawn area which includes
stroke width, arrowheads, etc. So view rect is mostly larger than
bounding rect.

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getViewRect`](/api-core/classes/shape/#getviewrect)

#### Source

[shapes.ts:744](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L744)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`inGroup`](/api-core/classes/shape/#ingroup)

#### Source

[shapes.ts:528](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L528)

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

[shapes.ts:486](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L486)

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

[shapes.ts:571](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L571)

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

[shapes.ts:591](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L591)

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

[shapes.ts:555](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L555)

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

[shapes.ts:879](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L879)

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

[shapes.ts:824](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L824)

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

[shapes.ts:854](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L854)

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

[shapes.ts:1327](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1327)

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

[shapes.ts:614](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L614)

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

[shapes.ts:1280](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1280)

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

[shapes.ts:637](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L637)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Return outline polygon

#### Returns

`number`[][]

#### Overrides

[`Shape`](/api-core/classes/shape/).[`renderOutlineDefault`](/api-core/classes/shape/#renderoutlinedefault)

#### Source

[shapes.ts:1408](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1408)

***

### renderText()

> **renderText**(`canvas`): `void`

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:1302](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1302)

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

[shapes.ts:459](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L459)

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

[shapes.ts:1221](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1221)

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

[shapes.ts:501](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L501)

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

[shapes.ts:1332](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1332)
