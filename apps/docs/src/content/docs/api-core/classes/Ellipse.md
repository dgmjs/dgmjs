---
editUrl: false
next: false
prev: false
title: "Ellipse"
---

Ellipse

## Extends

- [`Box`](/api-core/classes/box/)

## Constructors

### new Ellipse()

> **new Ellipse**(): [`Ellipse`](/api-core/classes/ellipse/)

#### Returns

[`Ellipse`](/api-core/classes/ellipse/)

#### Overrides

[`Box`](/api-core/classes/box/).[`constructor`](/api-core/classes/box/#constructors)

#### Source

[shapes.ts:1712](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1712)

## Properties

### anchorAngle

> **anchorAngle**: `number`

Anchor angle (in degree)

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorAngle`](/api-core/classes/box/#anchorangle)

#### Source

[shapes.ts:1250](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1250)

***

### anchorLength

> **anchorLength**: `number`

Anchor length

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorLength`](/api-core/classes/box/#anchorlength)

#### Source

[shapes.ts:1255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1255)

***

### anchorPosition

> **anchorPosition**: `number`

Anchor position (0~1). 0 is on tail, 1 is on head

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorPosition`](/api-core/classes/box/#anchorposition)

#### Source

[shapes.ts:1260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1260)

***

### anchored

> **anchored**: `boolean`

Anchored

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchored`](/api-core/classes/box/#anchored)

#### Source

[shapes.ts:1245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1245)

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

[shapes.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L205)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Box`](/api-core/classes/box/).[`constraints`](/api-core/classes/box/#constraints)

#### Source

[shapes.ts:320](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L320)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`containable`](/api-core/classes/box/#containable)

#### Source

[shapes.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L195)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Box`](/api-core/classes/box/).[`containableFilter`](/api-core/classes/box/#containablefilter)

#### Source

[shapes.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L200)

***

### corners

> **corners**: `number`[]

Corner radius [top-left, top-right, bottom-right, bottom-left] (same with CSS)

#### Inherited from

[`Box`](/api-core/classes/box/).[`corners`](/api-core/classes/box/#corners)

#### Source

[shapes.ts:1240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1240)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`description`](/api-core/classes/box/#description)

#### Source

[shapes.ts:155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L155)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`enable`](/api-core/classes/box/#enable)

#### Source

[shapes.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L170)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Box`](/api-core/classes/box/).[`fillColor`](/api-core/classes/box/#fillcolor)

#### Source

[shapes.ts:250](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L250)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Box`](/api-core/classes/box/).[`fillStyle`](/api-core/classes/box/#fillstyle)

#### Source

[shapes.ts:255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L255)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontColor`](/api-core/classes/box/#fontcolor)

#### Source

[shapes.ts:260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L260)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontFamily`](/api-core/classes/box/#fontfamily)

#### Source

[shapes.ts:265](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L265)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontSize`](/api-core/classes/box/#fontsize)

#### Source

[shapes.ts:270](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L270)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontStyle`](/api-core/classes/box/#fontstyle)

#### Source

[shapes.ts:275](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L275)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontWeight`](/api-core/classes/box/#fontweight)

#### Source

[shapes.ts:280](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L280)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Box`](/api-core/classes/box/).[`height`](/api-core/classes/box/#height)

#### Source

[shapes.ts:225](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L225)

***

### horzAlign

> **horzAlign**: [`HorzAlignEnum`](/api-core/type-aliases/horzalignenum/)

Text horizontal alignment

#### Inherited from

[`Box`](/api-core/classes/box/).[`horzAlign`](/api-core/classes/box/#horzalign)

#### Source

[shapes.ts:1305](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1305)

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

[shapes.ts:210](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L210)

***

### lineHeight

> **lineHeight**: `number`

Text line height

#### Inherited from

[`Box`](/api-core/classes/box/).[`lineHeight`](/api-core/classes/box/#lineheight)

#### Source

[shapes.ts:1315](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1315)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Box`](/api-core/classes/box/).[`link`](/api-core/classes/box/#link)

#### Source

[shapes.ts:310](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L310)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Box`](/api-core/classes/box/).[`movable`](/api-core/classes/box/#movable)

#### Source

[shapes.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L180)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`name`](/api-core/classes/box/#name)

#### Source

[shapes.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L150)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Box`](/api-core/classes/box/).[`opacity`](/api-core/classes/box/#opacity)

#### Source

[shapes.ts:285](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L285)

***

### padding

> **padding**: `number`[]

Padding spaces [top, right, bottom, left] (same with CSS)

#### Inherited from

[`Box`](/api-core/classes/box/).[`padding`](/api-core/classes/box/#padding)

#### Source

[shapes.ts:1235](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1235)

***

### paragraphSpacing

> **paragraphSpacing**: `number`

Text paragraph spacing

#### Inherited from

[`Box`](/api-core/classes/box/).[`paragraphSpacing`](/api-core/classes/box/#paragraphspacing)

#### Source

[shapes.ts:1320](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1320)

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

[shapes.ts:325](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L325)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Box`](/api-core/classes/box/).[`proto`](/api-core/classes/box/#proto)

#### Source

[shapes.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L160)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`reference`](/api-core/classes/box/#reference)

#### Source

[shapes.ts:315](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L315)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`rotatable`](/api-core/classes/box/#rotatable)

#### Source

[shapes.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L190)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Box`](/api-core/classes/box/).[`rotate`](/api-core/classes/box/#rotate)

#### Source

[shapes.ts:230](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L230)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Box`](/api-core/classes/box/).[`roughness`](/api-core/classes/box/#roughness)

#### Source

[shapes.ts:290](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L290)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Box`](/api-core/classes/box/).[`scripts`](/api-core/classes/box/#scripts)

#### Source

[shapes.ts:330](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L330)

***

### shadow

> **shadow**: `boolean`

Shadow

#### Inherited from

[`Box`](/api-core/classes/box/).[`shadow`](/api-core/classes/box/#shadow)

#### Source

[shapes.ts:295](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L295)

***

### shadowColor

> **shadowColor**: `string`

Shadow color

#### Inherited from

[`Box`](/api-core/classes/box/).[`shadowColor`](/api-core/classes/box/#shadowcolor)

#### Source

[shapes.ts:300](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L300)

***

### shadowOffset

> **shadowOffset**: `number`[]

Shadow offset

#### Inherited from

[`Box`](/api-core/classes/box/).[`shadowOffset`](/api-core/classes/box/#shadowoffset)

#### Source

[shapes.ts:305](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L305)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Box`](/api-core/classes/box/).[`sizable`](/api-core/classes/box/#sizable)

#### Source

[shapes.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L185)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokeColor`](/api-core/classes/box/#strokecolor)

#### Source

[shapes.ts:235](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L235)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokePattern`](/api-core/classes/box/#strokepattern)

#### Source

[shapes.ts:245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L245)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokeWidth`](/api-core/classes/box/#strokewidth)

#### Source

[shapes.ts:240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L240)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Box`](/api-core/classes/box/).[`tags`](/api-core/classes/box/#tags)

#### Source

[shapes.ts:165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L165)

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

[shapes.ts:1295](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1295)

***

### textEditable

> **textEditable**: `boolean`

Text editable

#### Inherited from

[`Box`](/api-core/classes/box/).[`textEditable`](/api-core/classes/box/#texteditable)

#### Source

[shapes.ts:1265](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1265)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Box`](/api-core/classes/box/).[`top`](/api-core/classes/box/#top)

#### Source

[shapes.ts:215](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L215)

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

[shapes.ts:1310](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1310)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`visible`](/api-core/classes/box/#visible)

#### Source

[shapes.ts:175](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L175)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Box`](/api-core/classes/box/).[`width`](/api-core/classes/box/#width)

#### Source

[shapes.ts:220](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L220)

***

### wordWrap

> **wordWrap**: `boolean`

Word wrap

#### Inherited from

[`Box`](/api-core/classes/box/).[`wordWrap`](/api-core/classes/box/#wordwrap)

#### Source

[shapes.ts:1300](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1300)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:512](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L512)

***

### innerBottom

> `get` **innerBottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1396](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1396)

***

### innerHeight

> `get` **innerHeight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1404](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1404)

***

### innerLeft

> `get` **innerLeft**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1384](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1384)

***

### innerRight

> `get` **innerRight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1388](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1388)

***

### innerTop

> `get` **innerTop**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1392](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1392)

***

### innerWidth

> `get` **innerWidth**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1400](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1400)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:508](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L508)

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

[shapes.ts:590](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L590)

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

[shapes.ts:1036](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1036)

***

### computeOpacity()

> **computeOpacity**(): `number`

#### Returns

`number`

#### Inherited from

[`Box`](/api-core/classes/box/).[`computeOpacity`](/api-core/classes/box/#computeopacity)

#### Source

[shapes.ts:580](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L580)

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

[`Box`](/api-core/classes/box/).[`containsPoint`](/api-core/classes/box/#containspoint)

#### Source

[shapes.ts:896](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L896)

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

[shapes.ts:733](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L733)

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

[shapes.ts:747](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L747)

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

[shapes.ts:529](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L529)

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

[`Box`](/api-core/classes/box/).[`findAllByQuery`](/api-core/classes/box/#findallbyquery)

#### Source

[shapes.ts:1026](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1026)

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

[shapes.ts:1013](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1013)

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

[`Box`](/api-core/classes/box/).[`findParent`](/api-core/classes/box/#findparent)

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

#### Inherited from

[`Box`](/api-core/classes/box/).[`fromJSON`](/api-core/classes/box/#fromjson)

#### Source

[shapes.ts:1367](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1367)

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

[shapes.ts:1587](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1587)

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

[shapes.ts:794](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L794)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getCenter`](/api-core/classes/box/#getcenter)

#### Source

[shapes.ts:787](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L787)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getChildrenBoundingRect`](/api-core/classes/box/#getchildrenboundingrect)

#### Source

[shapes.ts:849](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L849)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getEnclosure`](/api-core/classes/box/#getenclosure)

#### Source

[shapes.ts:883](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L883)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getOutline`](/api-core/classes/box/#getoutline)

#### Source

[shapes.ts:722](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L722)

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

[shapes.ts:1048](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1048)

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

[shapes.ts:1058](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1058)

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

[shapes.ts:862](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L862)

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

[shapes.ts:1066](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1066)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Inherited from

[`Box`](/api-core/classes/box/).[`getSeed`](/api-core/classes/box/#getseed)

#### Source

[shapes.ts:516](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L516)

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

[`Box`](/api-core/classes/box/).[`getShapeAt`](/api-core/classes/box/#getshapeat)

#### Source

[shapes.ts:549](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L549)

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

[shapes.ts:842](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L842)

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

[shapes.ts:524](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L524)

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

[`Box`](/api-core/classes/box/).[`localCoordTransform`](/api-core/classes/box/#localcoordtransform)

#### Source

[shapes.ts:626](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L626)

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

[shapes.ts:646](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L646)

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

[shapes.ts:610](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L610)

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

[shapes.ts:988](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L988)

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

[shapes.ts:919](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L919)

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

[shapes.ts:926](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L926)

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

[shapes.ts:963](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L963)

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

[shapes.ts:1481](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1481)

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

[shapes.ts:669](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L669)

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

[shapes.ts:1718](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1718)

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

[shapes.ts:694](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L694)

***

### renderOutlineDefault()

> **renderOutlineDefault**(`canvas`): `number`[][]

Return outline polygon

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`number`[][]

#### Overrides

[`Box`](/api-core/classes/box/).[`renderOutlineDefault`](/api-core/classes/box/#renderoutlinedefault)

#### Source

[shapes.ts:1743](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1743)

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

[shapes.ts:1756](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1756)

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

[shapes.ts:1435](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1435)

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

[shapes.ts:804](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L804)

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

[shapes.ts:820](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L820)

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

[shapes.ts:497](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L497)

***

### toJSON()

> **toJSON**(`recursive`, `keepRefs`): `any`

Export shape to JSON

#### Parameters

• **recursive**: `boolean`= `false`

• **keepRefs**: `boolean`= `false`

#### Returns

`any`

#### Inherited from

[`Box`](/api-core/classes/box/).[`toJSON`](/api-core/classes/box/#tojson)

#### Source

[shapes.ts:1349](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1349)

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

[`Box`](/api-core/classes/box/).[`traverseDepthFirst`](/api-core/classes/box/#traversedepthfirst)

#### Source

[core/obj.ts:74](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L74)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`traverseDepthFirstSequence`](/api-core/classes/box/#traversedepthfirstsequence)

#### Source

[core/obj.ts:97](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L97)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`traverseSequence`](/api-core/classes/box/#traversesequence)

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

[`Box`](/api-core/classes/box/).[`update`](/api-core/classes/box/#update)

#### Source

[shapes.ts:539](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L539)

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

[shapes.ts:569](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L569)

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

[shapes.ts:1486](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1486)
