---
editUrl: false
next: false
prev: false
title: "Text"
---

Text

## Extends

- [`Box`](/api-core/classes/box/)

## Constructors

### new Text()

> **new Text**(): [`Text`](/api-core/classes/text/)

#### Returns

[`Text`](/api-core/classes/text/)

#### Overrides

[`Box`](/api-core/classes/box/).[`constructor`](/api-core/classes/box/#constructors)

#### Source

[shapes.ts:2108](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2108)

## Properties

### anchorAngle

> **anchorAngle**: `number`

Anchor angle (in degree)

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorAngle`](/api-core/classes/box/#anchorangle)

#### Source

[shapes.ts:1347](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1347)

***

### anchorLength

> **anchorLength**: `number`

Anchor length

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorLength`](/api-core/classes/box/#anchorlength)

#### Source

[shapes.ts:1352](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1352)

***

### anchorPosition

> **anchorPosition**: `number`

Anchor position (0~1). 0 is on tail, 1 is on head

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorPosition`](/api-core/classes/box/#anchorposition)

#### Source

[shapes.ts:1357](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1357)

***

### anchored

> **anchored**: `boolean`

Anchored

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchored`](/api-core/classes/box/#anchored)

#### Source

[shapes.ts:1342](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1342)

***

### borderPosition

> **borderPosition**: [`BorderPositionEnum`](/api-core/type-aliases/borderpositionenum/)

Border position (center, inside, outside)

#### Inherited from

[`Box`](/api-core/classes/box/).[`borderPosition`](/api-core/classes/box/#borderposition)

#### Source

[shapes.ts:1337](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1337)

***

### borders

> **borders**: `boolean`[]

Borders [top, right, bottom, left]

#### Inherited from

[`Box`](/api-core/classes/box/).[`borders`](/api-core/classes/box/#borders)

#### Source

[shapes.ts:1332](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1332)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`children`](/api-core/classes/box/#children)

#### Source

[core/obj.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L14)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`connectable`](/api-core/classes/box/#connectable)

#### Source

[shapes.ts:218](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L218)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Box`](/api-core/classes/box/).[`constraints`](/api-core/classes/box/#constraints)

#### Source

[shapes.ts:333](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L333)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`containable`](/api-core/classes/box/#containable)

#### Source

[shapes.ts:203](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L203)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Box`](/api-core/classes/box/).[`containableFilter`](/api-core/classes/box/#containablefilter)

#### Source

[shapes.ts:208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L208)

***

### corners

> **corners**: `number`[]

Corner radius [top-left, top-right, bottom-right, bottom-left] (same with CSS)

#### Inherited from

[`Box`](/api-core/classes/box/).[`corners`](/api-core/classes/box/#corners)

#### Source

[shapes.ts:1327](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1327)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`description`](/api-core/classes/box/#description)

#### Source

[shapes.ts:163](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L163)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`enable`](/api-core/classes/box/#enable)

#### Source

[shapes.ts:178](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L178)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Box`](/api-core/classes/box/).[`fillColor`](/api-core/classes/box/#fillcolor)

#### Source

[shapes.ts:263](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L263)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Box`](/api-core/classes/box/).[`fillStyle`](/api-core/classes/box/#fillstyle)

#### Source

[shapes.ts:268](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L268)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontColor`](/api-core/classes/box/#fontcolor)

#### Source

[shapes.ts:273](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L273)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontFamily`](/api-core/classes/box/#fontfamily)

#### Source

[shapes.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L278)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontSize`](/api-core/classes/box/#fontsize)

#### Source

[shapes.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L283)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontStyle`](/api-core/classes/box/#fontstyle)

#### Source

[shapes.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L288)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontWeight`](/api-core/classes/box/#fontweight)

#### Source

[shapes.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L293)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Box`](/api-core/classes/box/).[`height`](/api-core/classes/box/#height)

#### Source

[shapes.ts:238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L238)

***

### horzAlign

> **horzAlign**: [`HorzAlignEnum`](/api-core/type-aliases/horzalignenum/)

Text horizontal alignment

#### Inherited from

[`Box`](/api-core/classes/box/).[`horzAlign`](/api-core/classes/box/#horzalign)

#### Source

[shapes.ts:1402](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1402)

***

### id

> **id**: `string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`id`](/api-core/classes/box/#id)

#### Source

[core/obj.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L11)

***

### left

> **left**: `number`

Shape's left position

#### Inherited from

[`Box`](/api-core/classes/box/).[`left`](/api-core/classes/box/#left)

#### Source

[shapes.ts:223](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L223)

***

### lineHeight

> **lineHeight**: `number`

Text line height

#### Inherited from

[`Box`](/api-core/classes/box/).[`lineHeight`](/api-core/classes/box/#lineheight)

#### Source

[shapes.ts:1412](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1412)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Box`](/api-core/classes/box/).[`link`](/api-core/classes/box/#link)

#### Source

[shapes.ts:323](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L323)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Box`](/api-core/classes/box/).[`movable`](/api-core/classes/box/#movable)

#### Source

[shapes.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L188)

***

### movableParentFilter

> **movableParentFilter**: `string`

Movable parent filter

#### Inherited from

[`Box`](/api-core/classes/box/).[`movableParentFilter`](/api-core/classes/box/#movableparentfilter)

#### Source

[shapes.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L213)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`name`](/api-core/classes/box/#name)

#### Source

[shapes.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L158)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Box`](/api-core/classes/box/).[`opacity`](/api-core/classes/box/#opacity)

#### Source

[shapes.ts:298](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L298)

***

### padding

> **padding**: `number`[]

Padding spaces [top, right, bottom, left] (same with CSS)

#### Inherited from

[`Box`](/api-core/classes/box/).[`padding`](/api-core/classes/box/#padding)

#### Source

[shapes.ts:1322](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1322)

***

### paragraphSpacing

> **paragraphSpacing**: `number`

Text paragraph spacing

#### Inherited from

[`Box`](/api-core/classes/box/).[`paragraphSpacing`](/api-core/classes/box/#paragraphspacing)

#### Source

[shapes.ts:1417](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1417)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`parent`](/api-core/classes/box/#parent)

#### Source

[core/obj.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L13)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Box`](/api-core/classes/box/).[`properties`](/api-core/classes/box/#properties)

#### Source

[shapes.ts:338](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L338)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Box`](/api-core/classes/box/).[`proto`](/api-core/classes/box/#proto)

#### Source

[shapes.ts:168](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L168)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`reference`](/api-core/classes/box/#reference)

#### Source

[shapes.ts:328](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L328)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`rotatable`](/api-core/classes/box/#rotatable)

#### Source

[shapes.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L198)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Box`](/api-core/classes/box/).[`rotate`](/api-core/classes/box/#rotate)

#### Source

[shapes.ts:243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L243)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Box`](/api-core/classes/box/).[`roughness`](/api-core/classes/box/#roughness)

#### Source

[shapes.ts:303](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L303)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Box`](/api-core/classes/box/).[`scripts`](/api-core/classes/box/#scripts)

#### Source

[shapes.ts:343](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L343)

***

### shadow

> **shadow**: `boolean`

Shadow

#### Inherited from

[`Box`](/api-core/classes/box/).[`shadow`](/api-core/classes/box/#shadow)

#### Source

[shapes.ts:308](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L308)

***

### shadowColor

> **shadowColor**: `string`

Shadow color

#### Inherited from

[`Box`](/api-core/classes/box/).[`shadowColor`](/api-core/classes/box/#shadowcolor)

#### Source

[shapes.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L313)

***

### shadowOffset

> **shadowOffset**: `number`[]

Shadow offset

#### Inherited from

[`Box`](/api-core/classes/box/).[`shadowOffset`](/api-core/classes/box/#shadowoffset)

#### Source

[shapes.ts:318](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L318)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Box`](/api-core/classes/box/).[`sizable`](/api-core/classes/box/#sizable)

#### Source

[shapes.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L193)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokeColor`](/api-core/classes/box/#strokecolor)

#### Source

[shapes.ts:248](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L248)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokePattern`](/api-core/classes/box/#strokepattern)

#### Source

[shapes.ts:258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L258)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokeWidth`](/api-core/classes/box/#strokewidth)

#### Source

[shapes.ts:253](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L253)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Box`](/api-core/classes/box/).[`tags`](/api-core/classes/box/#tags)

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

#### Inherited from

[`Box`](/api-core/classes/box/).[`text`](/api-core/classes/box/#text)

#### Source

[shapes.ts:1392](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1392)

***

### textEditable

> **textEditable**: `boolean`

Text editable

#### Inherited from

[`Box`](/api-core/classes/box/).[`textEditable`](/api-core/classes/box/#texteditable)

#### Source

[shapes.ts:1362](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1362)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Box`](/api-core/classes/box/).[`top`](/api-core/classes/box/#top)

#### Source

[shapes.ts:228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L228)

***

### type

> **type**: `string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`type`](/api-core/classes/box/#type)

#### Source

[core/obj.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L12)

***

### vertAlign

> **vertAlign**: [`VertAlignEnum`](/api-core/type-aliases/vertalignenum/)

Text vertical alignment

#### Inherited from

[`Box`](/api-core/classes/box/).[`vertAlign`](/api-core/classes/box/#vertalign)

#### Source

[shapes.ts:1407](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1407)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`visible`](/api-core/classes/box/#visible)

#### Source

[shapes.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L183)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Box`](/api-core/classes/box/).[`width`](/api-core/classes/box/#width)

#### Source

[shapes.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L233)

***

### wordWrap

> **wordWrap**: `boolean`

Word wrap

#### Inherited from

[`Box`](/api-core/classes/box/).[`wordWrap`](/api-core/classes/box/#wordwrap)

#### Source

[shapes.ts:1397](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1397)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:563](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L563)

***

### innerBottom

> `get` **innerBottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1533](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1533)

***

### innerHeight

> `get` **innerHeight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1541](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1541)

***

### innerLeft

> `get` **innerLeft**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1521](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1521)

***

### innerRight

> `get` **innerRight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1525](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1525)

***

### innerTop

> `get` **innerTop**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1529](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1529)

***

### innerWidth

> `get` **innerWidth**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1537](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1537)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:559](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L559)

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

[shapes.ts:653](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L653)

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

[shapes.ts:1107](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1107)

***

### computeOpacity()

> **computeOpacity**(): `number`

#### Returns

`number`

#### Inherited from

[`Box`](/api-core/classes/box/).[`computeOpacity`](/api-core/classes/box/#computeopacity)

#### Source

[shapes.ts:643](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L643)

***

### containsPoint()

> **containsPoint**(`canvas`, `point`): `boolean`

Determines whether this shape contains a point in GCS

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

#### Returns

`boolean`

#### Overrides

[`Box`](/api-core/classes/box/).[`containsPoint`](/api-core/classes/box/#containspoint)

#### Source

[shapes.ts:2120](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2120)

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

[`Box`](/api-core/classes/box/).[`draw`](/api-core/classes/box/#draw)

#### Source

[shapes.ts:799](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L799)

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

[shapes.ts:813](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L813)

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

[shapes.ts:583](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L583)

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

[core/obj.ts:147](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L147)

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

[shapes.ts:1097](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1097)

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

[shapes.ts:1084](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1084)

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

[core/obj.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L160)

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

[core/obj.ts:173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L173)

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

[shapes.ts:1498](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1498)

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

[shapes.ts:1881](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1881)

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

[shapes.ts:860](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L860)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getCenter`](/api-core/classes/box/#getcenter)

#### Source

[shapes.ts:853](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L853)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getChildrenBoundingRect`](/api-core/classes/box/#getchildrenboundingrect)

#### Source

[shapes.ts:921](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L921)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getEnclosure`](/api-core/classes/box/#getenclosure)

#### Source

[shapes.ts:955](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L955)

***

### getJson()

> **getJson**(`json`, `field`, `defaultValue`): `any`

Get a field from the JSON object, return defaultValue if the field is not defined.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `any`

#### Returns

`any`

#### Inherited from

[`Box`](/api-core/classes/box/).[`getJson`](/api-core/classes/box/#getjson)

#### Source

[core/obj.ts:53](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L53)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getOutline`](/api-core/classes/box/#getoutline)

#### Source

[shapes.ts:788](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L788)

***

### getPage()

> **getPage**(): `null` \| [`Page`](/api-core/classes/page/)

Return the page that contains this shape

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`getPage`](/api-core/classes/box/#getpage)

#### Source

[shapes.ts:555](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L555)

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

[shapes.ts:1119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1119)

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

[shapes.ts:1129](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1129)

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

[shapes.ts:934](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L934)

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

[shapes.ts:1137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1137)

***

### getSeed()

> **getSeed**(): `number`

Return the seed number

#### Returns

`number`

#### Inherited from

[`Box`](/api-core/classes/box/).[`getSeed`](/api-core/classes/box/#getseed)

#### Source

[shapes.ts:570](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L570)

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

[`Box`](/api-core/classes/box/).[`getShapeAt`](/api-core/classes/box/#getshapeat)

#### Source

[shapes.ts:603](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L603)

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

[shapes.ts:911](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L911)

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

[shapes.ts:578](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L578)

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

[core/obj.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L183)

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

[shapes.ts:689](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L689)

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

[shapes.ts:709](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L709)

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

[shapes.ts:673](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L673)

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

[shapes.ts:1060](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1060)

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

[`Box`](/api-core/classes/box/).[`overlapClippingArea`](/api-core/classes/box/#overlapclippingarea)

#### Source

[shapes.ts:991](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L991)

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

[`Box`](/api-core/classes/box/).[`overlapRect`](/api-core/classes/box/#overlaprect)

#### Source

[shapes.ts:998](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L998)

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

[shapes.ts:1035](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1035)

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

[shapes.ts:1775](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1775)

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

[`Box`](/api-core/classes/box/).[`render`](/api-core/classes/box/#render)

#### Source

[shapes.ts:732](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L732)

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

[shapes.ts:1545](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1545)

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

[shapes.ts:2127](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2127)

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

[shapes.ts:757](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L757)

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

[shapes.ts:1856](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1856)

***

### renderShadow()

> **renderShadow**(`canvas`): `void`

Render shadow

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Overrides

[`Box`](/api-core/classes/box/).[`renderShadow`](/api-core/classes/box/#rendershadow)

#### Source

[shapes.ts:2144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2144)

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

[shapes.ts:1729](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1729)

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

[shapes.ts:870](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L870)

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

[shapes.ts:889](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L889)

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

[shapes.ts:541](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L541)

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

[core/obj.ts:31](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L31)

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

[shapes.ts:1450](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1450)

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

[core/obj.ts:101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L101)

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

[core/obj.ts:115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L115)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`traverseDepthFirstSequence`](/api-core/classes/box/#traversedepthfirstsequence)

#### Source

[core/obj.ts:138](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L138)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`traverseSequence`](/api-core/classes/box/#traversesequence)

#### Source

[core/obj.ts:129](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L129)

***

### update()

> **update**(`canvas`): `void`

Update shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`update`](/api-core/classes/box/#update)

#### Source

[shapes.ts:593](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L593)

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

[shapes.ts:632](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L632)

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

[shapes.ts:1780](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1780)
