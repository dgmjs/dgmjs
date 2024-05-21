---
editUrl: false
next: false
prev: false
title: "Embed"
---

Embed

## Extends

- [`Box`](/api-core/classes/box/)

## Constructors

### new Embed()

> **new Embed**(): [`Embed`](/api-core/classes/embed/)

#### Returns

[`Embed`](/api-core/classes/embed/)

#### Overrides

[`Box`](/api-core/classes/box/).[`constructor`](/api-core/classes/box/#constructors)

#### Source

[shapes.ts:2271](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2271)

## Properties

### \_iframeDOM

> **\_iframeDOM**: `null` \| `HTMLIFrameElement`

Iframe DOM element

#### Source

[shapes.ts:2269](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2269)

***

### \_linkDOM

> **\_linkDOM**: `null` \| `HTMLAnchorElement`

Link DOM element

#### Inherited from

[`Box`](/api-core/classes/box/).[`_linkDOM`](/api-core/classes/box/#_linkdom)

#### Source

[shapes.ts:336](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L336)

***

### \_memoCanvas

> **\_memoCanvas**: `MemoizationCanvas`

Memoization canvas

#### Inherited from

[`Box`](/api-core/classes/box/).[`_memoCanvas`](/api-core/classes/box/#_memocanvas)

#### Source

[shapes.ts:326](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L326)

***

### \_memoOutline

> **\_memoOutline**: `number`[][]

Memoization outline

#### Inherited from

[`Box`](/api-core/classes/box/).[`_memoOutline`](/api-core/classes/box/#_memooutline)

#### Source

[shapes.ts:331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L331)

***

### \_memoSeed

> **\_memoSeed**: `null` \| `number`

Memoize seed

#### Inherited from

[`Box`](/api-core/classes/box/).[`_memoSeed`](/api-core/classes/box/#_memoseed)

#### Source

[shapes.ts:321](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L321)

***

### \_renderText

> **\_renderText**: `boolean`

Indicate render text or not (just for internal use)

#### Inherited from

[`Box`](/api-core/classes/box/).[`_renderText`](/api-core/classes/box/#_rendertext)

#### Source

[shapes.ts:1180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1180)

***

### anchorAngle

> **anchorAngle**: `number`

Anchor angle (in degree)

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorAngle`](/api-core/classes/box/#anchorangle)

#### Source

[shapes.ts:1105](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1105)

***

### anchorLength

> **anchorLength**: `number`

Anchor length

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorLength`](/api-core/classes/box/#anchorlength)

#### Source

[shapes.ts:1110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1110)

***

### anchorPosition

> **anchorPosition**: `number`

Anchor position (0~1). 0 is on tail, 1 is on head

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchorPosition`](/api-core/classes/box/#anchorposition)

#### Source

[shapes.ts:1115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1115)

***

### anchored

> **anchored**: `boolean`

Anchored

#### Inherited from

[`Box`](/api-core/classes/box/).[`anchored`](/api-core/classes/box/#anchored)

#### Source

[shapes.ts:1100](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1100)

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

[shapes.ts:211](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L211)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Box`](/api-core/classes/box/).[`constraints`](/api-core/classes/box/#constraints)

#### Source

[shapes.ts:306](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L306)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`containable`](/api-core/classes/box/#containable)

#### Source

[shapes.ts:201](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L201)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Box`](/api-core/classes/box/).[`containableFilter`](/api-core/classes/box/#containablefilter)

#### Source

[shapes.ts:206](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L206)

***

### corners

> **corners**: `number`[]

Corner radius [top-left, top-right, bottom-right, bottom-left] (same with CSS)

#### Inherited from

[`Box`](/api-core/classes/box/).[`corners`](/api-core/classes/box/#corners)

#### Source

[shapes.ts:1095](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1095)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`description`](/api-core/classes/box/#description)

#### Source

[shapes.ts:161](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L161)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`enable`](/api-core/classes/box/#enable)

#### Source

[shapes.ts:176](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L176)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Box`](/api-core/classes/box/).[`fillColor`](/api-core/classes/box/#fillcolor)

#### Source

[shapes.ts:256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L256)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Box`](/api-core/classes/box/).[`fillStyle`](/api-core/classes/box/#fillstyle)

#### Source

[shapes.ts:261](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L261)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontColor`](/api-core/classes/box/#fontcolor)

#### Source

[shapes.ts:266](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L266)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontFamily`](/api-core/classes/box/#fontfamily)

#### Source

[shapes.ts:271](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L271)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontSize`](/api-core/classes/box/#fontsize)

#### Source

[shapes.ts:276](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L276)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontStyle`](/api-core/classes/box/#fontstyle)

#### Source

[shapes.ts:281](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L281)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Box`](/api-core/classes/box/).[`fontWeight`](/api-core/classes/box/#fontweight)

#### Source

[shapes.ts:286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L286)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Box`](/api-core/classes/box/).[`height`](/api-core/classes/box/#height)

#### Source

[shapes.ts:231](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L231)

***

### horzAlign

> **horzAlign**: [`HorzAlignEnum`](/api-core/type-aliases/horzalignenum/)

Text horizontal alignment

#### Inherited from

[`Box`](/api-core/classes/box/).[`horzAlign`](/api-core/classes/box/#horzalign)

#### Source

[shapes.ts:1160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1160)

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

[shapes.ts:216](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L216)

***

### lineHeight

> **lineHeight**: `number`

Text line height

#### Inherited from

[`Box`](/api-core/classes/box/).[`lineHeight`](/api-core/classes/box/#lineheight)

#### Source

[shapes.ts:1170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1170)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Box`](/api-core/classes/box/).[`link`](/api-core/classes/box/#link)

#### Source

[shapes.ts:301](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L301)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Box`](/api-core/classes/box/).[`movable`](/api-core/classes/box/#movable)

#### Source

[shapes.ts:186](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L186)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Box`](/api-core/classes/box/).[`name`](/api-core/classes/box/#name)

#### Source

[shapes.ts:156](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L156)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Box`](/api-core/classes/box/).[`opacity`](/api-core/classes/box/#opacity)

#### Source

[shapes.ts:291](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L291)

***

### padding

> **padding**: `number`[]

Padding spaces [top, right, bottom, left] (same with CSS)

#### Inherited from

[`Box`](/api-core/classes/box/).[`padding`](/api-core/classes/box/#padding)

#### Source

[shapes.ts:1090](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1090)

***

### paragraphSpacing

> **paragraphSpacing**: `number`

Text paragraph spacing

#### Inherited from

[`Box`](/api-core/classes/box/).[`paragraphSpacing`](/api-core/classes/box/#paragraphspacing)

#### Source

[shapes.ts:1175](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1175)

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

[shapes.ts:311](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L311)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Box`](/api-core/classes/box/).[`proto`](/api-core/classes/box/#proto)

#### Source

[shapes.ts:166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L166)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`rotatable`](/api-core/classes/box/#rotatable)

#### Source

[shapes.ts:196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L196)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Box`](/api-core/classes/box/).[`rotate`](/api-core/classes/box/#rotate)

#### Source

[shapes.ts:236](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L236)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Box`](/api-core/classes/box/).[`roughness`](/api-core/classes/box/#roughness)

#### Source

[shapes.ts:296](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L296)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Box`](/api-core/classes/box/).[`scripts`](/api-core/classes/box/#scripts)

#### Source

[shapes.ts:316](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L316)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Box`](/api-core/classes/box/).[`sizable`](/api-core/classes/box/#sizable)

#### Source

[shapes.ts:191](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L191)

***

### src

> **src**: `string`

#### Source

[shapes.ts:2264](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2264)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokeColor`](/api-core/classes/box/#strokecolor)

#### Source

[shapes.ts:241](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L241)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokePattern`](/api-core/classes/box/#strokepattern)

#### Source

[shapes.ts:251](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L251)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Box`](/api-core/classes/box/).[`strokeWidth`](/api-core/classes/box/#strokewidth)

#### Source

[shapes.ts:246](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L246)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Box`](/api-core/classes/box/).[`tags`](/api-core/classes/box/#tags)

#### Source

[shapes.ts:171](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L171)

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

[shapes.ts:1150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1150)

***

### textEditable

> **textEditable**: `boolean`

Text editable

#### Inherited from

[`Box`](/api-core/classes/box/).[`textEditable`](/api-core/classes/box/#texteditable)

#### Source

[shapes.ts:1120](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1120)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Box`](/api-core/classes/box/).[`top`](/api-core/classes/box/#top)

#### Source

[shapes.ts:221](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L221)

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

[shapes.ts:1165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1165)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Box`](/api-core/classes/box/).[`visible`](/api-core/classes/box/#visible)

#### Source

[shapes.ts:181](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L181)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Box`](/api-core/classes/box/).[`width`](/api-core/classes/box/#width)

#### Source

[shapes.ts:226](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L226)

***

### wordWrap

> **wordWrap**: `boolean`

Word wrap

#### Inherited from

[`Box`](/api-core/classes/box/).[`wordWrap`](/api-core/classes/box/#wordwrap)

#### Source

[shapes.ts:1155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1155)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:466](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L466)

***

### innerBottom

> `get` **innerBottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1250](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1250)

***

### innerHeight

> `get` **innerHeight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1258)

***

### innerLeft

> `get` **innerLeft**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1238)

***

### innerRight

> `get` **innerRight**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1242](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1242)

***

### innerTop

> `get` **innerTop**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1246](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1246)

***

### innerWidth

> `get` **innerWidth**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:1254](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1254)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:462](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L462)

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

[shapes.ts:527](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L527)

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

[shapes.ts:919](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L919)

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

[shapes.ts:796](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L796)

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

[shapes.ts:662](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L662)

***

### drawFrame()

> **drawFrame**(`canvas`, `showDOM`): `void`

Determines whether this shape contains a point in GCS

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **showDOM**: `boolean`= `false`

#### Returns

`void`

#### Source

[shapes.ts:2313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2313)

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

[shapes.ts:676](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L676)

***

### finalize()

> **finalize**(`canvas`): `void`

Finalize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Overrides

[`Box`](/api-core/classes/box/).[`finalize`](/api-core/classes/box/#finalize)

#### Source

[shapes.ts:2278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2278)

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

[shapes.ts:909](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L909)

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

[shapes.ts:896](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L896)

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

#### Overrides

[`Box`](/api-core/classes/box/).[`fromJSON`](/api-core/classes/box/#fromjson)

#### Source

[shapes.ts:2292](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2292)

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

[shapes.ts:1415](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1415)

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

[shapes.ts:723](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L723)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getCenter`](/api-core/classes/box/#getcenter)

#### Source

[shapes.ts:716](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L716)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getChildrenBoundingRect`](/api-core/classes/box/#getchildrenboundingrect)

#### Source

[shapes.ts:749](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L749)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getEnclosure`](/api-core/classes/box/#getenclosure)

#### Source

[shapes.ts:783](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L783)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`getOutline`](/api-core/classes/box/#getoutline)

#### Source

[shapes.ts:651](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L651)

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

[shapes.ts:931](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L931)

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

[shapes.ts:941](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L941)

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

[shapes.ts:762](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L762)

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

[shapes.ts:949](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L949)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Inherited from

[`Box`](/api-core/classes/box/).[`getSeed`](/api-core/classes/box/#getseed)

#### Source

[shapes.ts:470](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L470)

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

[shapes.ts:502](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L502)

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

[shapes.ts:736](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L736)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Box`](/api-core/classes/box/).[`inGroup`](/api-core/classes/box/#ingroup)

#### Source

[shapes.ts:520](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L520)

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

[shapes.ts:478](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L478)

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

[shapes.ts:563](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L563)

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

[shapes.ts:583](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L583)

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

[shapes.ts:547](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L547)

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

[shapes.ts:871](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L871)

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

[shapes.ts:816](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L816)

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

[shapes.ts:846](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L846)

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

[shapes.ts:1309](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1309)

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

[shapes.ts:606](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L606)

***

### renderDefault()

> **renderDefault**(`canvas`, `showDOM`): `void`

Default render this shape

#### Parameters

• **canvas**: `MemoizationCanvas`

• **showDOM**: `boolean`= `false`

#### Returns

`void`

#### Overrides

[`Box`](/api-core/classes/box/).[`renderDefault`](/api-core/classes/box/#renderdefault)

#### Source

[shapes.ts:2346](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2346)

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

[shapes.ts:629](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L629)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Return outline polygon

#### Returns

`number`[][]

#### Inherited from

[`Box`](/api-core/classes/box/).[`renderOutlineDefault`](/api-core/classes/box/#renderoutlinedefault)

#### Source

[shapes.ts:1390](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1390)

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

[shapes.ts:1284](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1284)

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

#### Overrides

[`Box`](/api-core/classes/box/).[`toJSON`](/api-core/classes/box/#tojson)

#### Source

[shapes.ts:2286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2286)

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

[shapes.ts:493](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L493)

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

[shapes.ts:1314](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1314)
