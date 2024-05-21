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

[shapes.ts:1540](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1540)

## Properties

### \_linkDOM

> **\_linkDOM**: `null` \| `HTMLAnchorElement`

Link DOM element

#### Inherited from

[`Box`](/api-core/classes/box/).[`_linkDOM`](/api-core/classes/box/#_linkdom)

#### Source

[shapes.ts:337](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L337)

***

### \_memoCanvas

> **\_memoCanvas**: `MemoizationCanvas`

Memoization canvas

#### Inherited from

[`Box`](/api-core/classes/box/).[`_memoCanvas`](/api-core/classes/box/#_memocanvas)

#### Source

[shapes.ts:327](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L327)

***

### \_memoOutline

> **\_memoOutline**: `number`[][]

Memoization outline

#### Inherited from

[`Box`](/api-core/classes/box/).[`_memoOutline`](/api-core/classes/box/#_memooutline)

#### Source

[shapes.ts:332](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L332)

***

### \_memoSeed

> **\_memoSeed**: `null` \| `number`

Memoize seed

#### Inherited from

[`Box`](/api-core/classes/box/).[`_memoSeed`](/api-core/classes/box/#_memoseed)

#### Source

[shapes.ts:322](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L322)

***

### \_renderText

> **\_renderText**: `boolean`

Indicate render text or not (just for internal use)

#### Inherited from

[`Box`](/api-core/classes/box/).[`_renderText`](/api-core/classes/box/#_rendertext)

#### Source

[shapes.ts:1181](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1181)

***

### anchorAngle

> **anchorAngle**: `number`

Anchor angle (in degree)

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorAngle`](/api-core/classes/box/#anchorangle)

#### Source

[shapes.ts:1106](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1106)

***

### anchorLength

> **anchorLength**: `number`

Anchor length

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorLength`](/api-core/classes/box/#anchorlength)

#### Source

[shapes.ts:1111](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1111)

***

### anchorPosition

> **anchorPosition**: `number`

Anchor position (0~1). 0 is on tail, 1 is on head

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorPosition`](/api-core/classes/box/#anchorposition)

#### Source

[shapes.ts:1116](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1116)

***

### anchored

> **anchored**: `boolean`

Anchored

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchored`](/api-core/classes/box/#anchored)

#### Source

[shapes.ts:1101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1101)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`children`](/api-core/classes/box/#children)

#### Source

[core/obj.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L27)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`connectable`](/api-core/classes/box/#connectable)

#### Source

[shapes.ts:212](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L212)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Box`](/api-core/classes/box/).[`constraints`](/api-core/classes/box/#constraints)

#### Source

[shapes.ts:307](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L307)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`containable`](/api-core/classes/box/#containable)

#### Source

[shapes.ts:202](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L202)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Box`](/api-core/classes/box/).[`containableFilter`](/api-core/classes/box/#containablefilter)

#### Source

[shapes.ts:207](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L207)

***

### corners

> **corners**: `number`[]

Corner radius [top-left, top-right, bottom-right, bottom-left] (same with CSS)

#### Inherited from

[`Box`](/api-core/classes/box/).[`corners`](/api-core/classes/box/#corners)

#### Source

[shapes.ts:1096](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1096)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`description`](/api-core/classes/box/#description)

#### Source

[shapes.ts:162](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L162)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`enable`](/api-core/classes/box/#enable)

#### Source

[shapes.ts:177](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L177)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Box`](/api-core/classes/box/).[`fillColor`](/api-core/classes/box/#fillcolor)

#### Source

[shapes.ts:257](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L257)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Box`](/api-core/classes/box/).[`fillStyle`](/api-core/classes/box/#fillstyle)

#### Source

[shapes.ts:262](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L262)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontColor`](/api-core/classes/box/#fontcolor)

#### Source

[shapes.ts:267](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L267)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontFamily`](/api-core/classes/box/#fontfamily)

#### Source

[shapes.ts:272](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L272)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontSize`](/api-core/classes/box/#fontsize)

#### Source

[shapes.ts:277](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L277)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontStyle`](/api-core/classes/box/#fontstyle)

#### Source

[shapes.ts:282](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L282)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontWeight`](/api-core/classes/box/#fontweight)

#### Source

[shapes.ts:287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L287)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Box`](/api-core/classes/box/).[`height`](/api-core/classes/box/#height)

#### Source

[shapes.ts:232](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L232)

***

### horzAlign

> **horzAlign**: [`HorzAlignEnum`](/api-core/type-aliases/horzalignenum/)

Text horizontal alignment

#### Inherited from

[`Box`](/api-core/classes/box/).[`horzAlign`](/api-core/classes/box/#horzalign)

#### Source

[shapes.ts:1161](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1161)

***

### id

> **id**: `string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`id`](/api-core/classes/box/#id)

#### Source

[core/obj.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L24)

***

### left

> **left**: `number`

Shape's left position

#### Inherited from

[`Box`](/api-core/classes/box/).[`left`](/api-core/classes/box/#left)

#### Source

[shapes.ts:217](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L217)

***

### lineHeight

> **lineHeight**: `number`

Text line height

#### Inherited from

[`Box`](/api-core/classes/box/).[`lineHeight`](/api-core/classes/box/#lineheight)

#### Source

[shapes.ts:1171](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1171)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Box`](/api-core/classes/box/).[`link`](/api-core/classes/box/#link)

#### Source

[shapes.ts:302](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L302)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Box`](/api-core/classes/box/).[`movable`](/api-core/classes/box/#movable)

#### Source

[shapes.ts:187](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L187)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`name`](/api-core/classes/box/#name)

#### Source

[shapes.ts:157](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L157)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Box`](/api-core/classes/box/).[`opacity`](/api-core/classes/box/#opacity)

#### Source

[shapes.ts:292](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L292)

***

### padding

> **padding**: `number`[]

Padding spaces [top, right, bottom, left] (same with CSS)

#### Inherited from

[`Box`](/api-core/classes/box/).[`padding`](/api-core/classes/box/#padding)

#### Source

[shapes.ts:1091](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1091)

***

### paragraphSpacing

> **paragraphSpacing**: `number`

Text paragraph spacing

#### Inherited from

[`Box`](/api-core/classes/box/).[`paragraphSpacing`](/api-core/classes/box/#paragraphspacing)

#### Source

[shapes.ts:1176](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1176)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`parent`](/api-core/classes/box/#parent)

#### Source

[core/obj.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L26)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Box`](/api-core/classes/box/).[`properties`](/api-core/classes/box/#properties)

#### Source

[shapes.ts:312](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L312)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Box`](/api-core/classes/box/).[`proto`](/api-core/classes/box/#proto)

#### Source

[shapes.ts:167](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L167)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`rotatable`](/api-core/classes/box/#rotatable)

#### Source

[shapes.ts:197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L197)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Box`](/api-core/classes/box/).[`rotate`](/api-core/classes/box/#rotate)

#### Source

[shapes.ts:237](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L237)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Box`](/api-core/classes/box/).[`roughness`](/api-core/classes/box/#roughness)

#### Source

[shapes.ts:297](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L297)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Box`](/api-core/classes/box/).[`scripts`](/api-core/classes/box/#scripts)

#### Source

[shapes.ts:317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L317)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Box`](/api-core/classes/box/).[`sizable`](/api-core/classes/box/#sizable)

#### Source

[shapes.ts:192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L192)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokeColor`](/api-core/classes/box/#strokecolor)

#### Source

[shapes.ts:242](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L242)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokePattern`](/api-core/classes/box/#strokepattern)

#### Source

[shapes.ts:252](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L252)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokeWidth`](/api-core/classes/box/#strokewidth)

#### Source

[shapes.ts:247](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L247)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Box`](/api-core/classes/box/).[`tags`](/api-core/classes/box/#tags)

#### Source

[shapes.ts:172](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L172)

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

[shapes.ts:1151](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1151)

***

### textEditable

> **textEditable**: `boolean`

Text editable

#### Inherited from

[`Box`](/api-core/classes/box/).[`textEditable`](/api-core/classes/box/#texteditable)

#### Source

[shapes.ts:1121](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1121)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Box`](/api-core/classes/box/).[`top`](/api-core/classes/box/#top)

#### Source

[shapes.ts:222](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L222)

***

### type

> **type**: `string`

#### Inherited from

[`Box`](/api-core/classes/box/).[`type`](/api-core/classes/box/#type)

#### Source

[core/obj.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L25)

***

### vertAlign

> **vertAlign**: [`VertAlignEnum`](/api-core/type-aliases/vertalignenum/)

Text vertical alignment

#### Inherited from

[`Box`](/api-core/classes/box/).[`vertAlign`](/api-core/classes/box/#vertalign)

#### Source

[shapes.ts:1166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1166)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`visible`](/api-core/classes/box/#visible)

#### Source

[shapes.ts:182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L182)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Box`](/api-core/classes/box/).[`width`](/api-core/classes/box/#width)

#### Source

[shapes.ts:227](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L227)

***

### wordWrap

> **wordWrap**: `boolean`

Word wrap

#### Inherited from

[`Box`](/api-core/classes/box/).[`wordWrap`](/api-core/classes/box/#wordwrap)

#### Source

[shapes.ts:1156](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1156)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:467](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L467)

***

### innerBottom

> `get` **innerBottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1251](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1251)

***

### innerHeight

> `get` **innerHeight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1259](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1259)

***

### innerLeft

> `get` **innerLeft**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1239](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1239)

***

### innerRight

> `get` **innerRight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1243)

***

### innerTop

> `get` **innerTop**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1247](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1247)

***

### innerWidth

> `get` **innerWidth**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1255)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:463](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L463)

## Methods

### assignStyles()

> **assignStyles**(`canvas`): `void`

Assign styles to memoization canvas.

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`assignStyles`](/api-core/classes/box/#assignstyles)

#### Source

[shapes.ts:528](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L528)

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

[shapes.ts:920](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L920)

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

[shapes.ts:797](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L797)

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

[shapes.ts:663](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L663)

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

[shapes.ts:677](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L677)

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

[shapes.ts:484](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L484)

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

[core/obj.ts:119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L119)

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

[shapes.ts:910](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L910)

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

[shapes.ts:897](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L897)

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

[core/obj.ts:132](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L132)

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

[core/obj.ts:145](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L145)

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

[shapes.ts:1222](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1222)

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

[shapes.ts:1416](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1416)

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

[shapes.ts:724](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L724)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getCenter`](/api-core/classes/box/#getcenter)

#### Source

[shapes.ts:717](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L717)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getChildrenBoundingRect`](/api-core/classes/box/#getchildrenboundingrect)

#### Source

[shapes.ts:750](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L750)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getEnclosure`](/api-core/classes/box/#getenclosure)

#### Source

[shapes.ts:784](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L784)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getOutline`](/api-core/classes/box/#getoutline)

#### Source

[shapes.ts:652](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L652)

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

[shapes.ts:932](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L932)

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

[shapes.ts:942](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L942)

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

[shapes.ts:763](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L763)

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

[shapes.ts:950](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L950)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Inherited from

[`Box`](/api-core/classes/box/).[`getSeed`](/api-core/classes/box/#getseed)

#### Source

[shapes.ts:471](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L471)

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

[shapes.ts:503](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L503)

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

[`Box`](/api-core/classes/box/).[`getViewRect`](/api-core/classes/box/#getviewrect)

#### Source

[shapes.ts:737](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L737)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`inGroup`](/api-core/classes/box/#ingroup)

#### Source

[shapes.ts:521](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L521)

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

[shapes.ts:479](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L479)

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

[core/obj.ts:155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L155)

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

[shapes.ts:564](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L564)

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

[shapes.ts:584](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L584)

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

[shapes.ts:548](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L548)

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

[shapes.ts:872](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L872)

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

[shapes.ts:817](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L817)

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

[shapes.ts:847](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L847)

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

[shapes.ts:1310](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1310)

***

### render()

> **render**(`canvas`): `void`

Render this shape

Render vs Draw
- Render: computing geometries how to draw the shape
- Draw: actual drawing the computed geometries of the shape on the canvas

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`render`](/api-core/classes/box/#render)

#### Source

[shapes.ts:607](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L607)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Default render this shape

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Overrides

[`Box`](/api-core/classes/box/).[`renderDefault`](/api-core/classes/box/#renderdefault)

#### Source

[shapes.ts:1545](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1545)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`renderOutline`](/api-core/classes/box/#renderoutline)

#### Source

[shapes.ts:630](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L630)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Return outline polygon

#### Returns

`number`[][]

#### Overrides

[`Box`](/api-core/classes/box/).[`renderOutlineDefault`](/api-core/classes/box/#renderoutlinedefault)

#### Source

[shapes.ts:1568](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1568)

***

### renderText()

> **renderText**(`canvas`): `void`

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`renderText`](/api-core/classes/box/#rendertext)

#### Source

[shapes.ts:1285](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1285)

***

### resolveRefs()

> **resolveRefs**(`idMap`, `nullIfNotFound`): `void`

Resolve references

#### Parameters

• **idMap**: `Record`\<`string`, [`Obj`](/api-core/classes/obj/)\>

id to object map

• **nullIfNotFound**: `boolean`= `false`

assign null if not found

#### Returns

`void`

#### Inherited from

[`Box`](/api-core/classes/box/).[`resolveRefs`](/api-core/classes/box/#resolverefs)

#### Source

[core/obj.ts:60](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L60)

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

[shapes.ts:1204](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1204)

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

[core/obj.ts:73](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L73)

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

[core/obj.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L87)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`traverseDepthFirstSequence`](/api-core/classes/box/#traversedepthfirstsequence)

#### Source

[core/obj.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L110)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`traverseSequence`](/api-core/classes/box/#traversesequence)

#### Source

[core/obj.ts:101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L101)

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

[shapes.ts:494](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L494)

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

[shapes.ts:1315](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1315)
