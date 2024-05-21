---
editUrl: false
next: false
prev: false
title: "Page"
---

Page

## Extends

- [`Shape`](/api-core/classes/shape/)

## Constructors

### new Page()

> **new Page**(): [`Page`](/api-core/classes/page/)

#### Returns

[`Page`](/api-core/classes/page/)

#### Overrides

[`Shape`](/api-core/classes/shape/).[`constructor`](/api-core/classes/shape/#constructors)

#### Source

[shapes.ts:999](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L999)

## Properties

### \_linkDOM

> **\_linkDOM**: `null` \| `HTMLAnchorElement`

Link DOM element

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`_linkDOM`](/api-core/classes/shape/#_linkdom)

#### Source

[shapes.ts:337](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L337)

***

### \_memoCanvas

> **\_memoCanvas**: `MemoizationCanvas`

Memoization canvas

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`_memoCanvas`](/api-core/classes/shape/#_memocanvas)

#### Source

[shapes.ts:327](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L327)

***

### \_memoOutline

> **\_memoOutline**: `number`[][]

Memoization outline

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`_memoOutline`](/api-core/classes/shape/#_memooutline)

#### Source

[shapes.ts:332](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L332)

***

### \_memoSeed

> **\_memoSeed**: `null` \| `number`

Memoize seed

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`_memoSeed`](/api-core/classes/shape/#_memoseed)

#### Source

[shapes.ts:322](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L322)

***

### \_origin

> **\_origin**: `null` \| `number`[]

Page's scroll transient state

#### Source

[shapes.ts:992](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L992)

***

### \_scale

> **\_scale**: `number`

Page's zoom transient state

#### Source

[shapes.ts:997](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L997)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`children`](/api-core/classes/shape/#children)

#### Source

[core/obj.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L27)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`connectable`](/api-core/classes/shape/#connectable)

#### Source

[shapes.ts:212](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L212)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`constraints`](/api-core/classes/shape/#constraints)

#### Source

[shapes.ts:307](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L307)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containable`](/api-core/classes/shape/#containable)

#### Source

[shapes.ts:202](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L202)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containableFilter`](/api-core/classes/shape/#containablefilter)

#### Source

[shapes.ts:207](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L207)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`description`](/api-core/classes/shape/#description)

#### Source

[shapes.ts:162](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L162)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`enable`](/api-core/classes/shape/#enable)

#### Source

[shapes.ts:177](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L177)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fillColor`](/api-core/classes/shape/#fillcolor)

#### Source

[shapes.ts:257](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L257)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fillStyle`](/api-core/classes/shape/#fillstyle)

#### Source

[shapes.ts:262](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L262)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontColor`](/api-core/classes/shape/#fontcolor)

#### Source

[shapes.ts:267](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L267)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontFamily`](/api-core/classes/shape/#fontfamily)

#### Source

[shapes.ts:272](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L272)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontSize`](/api-core/classes/shape/#fontsize)

#### Source

[shapes.ts:277](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L277)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontStyle`](/api-core/classes/shape/#fontstyle)

#### Source

[shapes.ts:282](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L282)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontWeight`](/api-core/classes/shape/#fontweight)

#### Source

[shapes.ts:287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L287)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`height`](/api-core/classes/shape/#height)

#### Source

[shapes.ts:232](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L232)

***

### id

> **id**: `string`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`id`](/api-core/classes/shape/#id)

#### Source

[core/obj.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L24)

***

### left

> **left**: `number`

Shape's left position

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`left`](/api-core/classes/shape/#left)

#### Source

[shapes.ts:217](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L217)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`link`](/api-core/classes/shape/#link)

#### Source

[shapes.ts:302](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L302)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`movable`](/api-core/classes/shape/#movable)

#### Source

[shapes.ts:187](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L187)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`name`](/api-core/classes/shape/#name)

#### Source

[shapes.ts:157](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L157)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`opacity`](/api-core/classes/shape/#opacity)

#### Source

[shapes.ts:292](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L292)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`parent`](/api-core/classes/shape/#parent)

#### Source

[core/obj.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L26)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`properties`](/api-core/classes/shape/#properties)

#### Source

[shapes.ts:312](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L312)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`proto`](/api-core/classes/shape/#proto)

#### Source

[shapes.ts:167](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L167)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`rotatable`](/api-core/classes/shape/#rotatable)

#### Source

[shapes.ts:197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L197)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`rotate`](/api-core/classes/shape/#rotate)

#### Source

[shapes.ts:237](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L237)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`roughness`](/api-core/classes/shape/#roughness)

#### Source

[shapes.ts:297](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L297)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`scripts`](/api-core/classes/shape/#scripts)

#### Source

[shapes.ts:317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L317)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`sizable`](/api-core/classes/shape/#sizable)

#### Source

[shapes.ts:192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L192)

***

### size

> **size**: [`PageSize`](/api-core/type-aliases/pagesize/)

#### Source

[shapes.ts:987](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L987)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokeColor`](/api-core/classes/shape/#strokecolor)

#### Source

[shapes.ts:242](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L242)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokePattern`](/api-core/classes/shape/#strokepattern)

#### Source

[shapes.ts:252](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L252)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokeWidth`](/api-core/classes/shape/#strokewidth)

#### Source

[shapes.ts:247](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L247)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`tags`](/api-core/classes/shape/#tags)

#### Source

[shapes.ts:172](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L172)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`top`](/api-core/classes/shape/#top)

#### Source

[shapes.ts:222](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L222)

***

### type

> **type**: `string`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`type`](/api-core/classes/shape/#type)

#### Source

[core/obj.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L25)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`visible`](/api-core/classes/shape/#visible)

#### Source

[shapes.ts:182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L182)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`width`](/api-core/classes/shape/#width)

#### Source

[shapes.ts:227](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L227)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:467](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L467)

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

[`Shape`](/api-core/classes/shape/).[`assignStyles`](/api-core/classes/shape/#assignstyles)

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

[`Shape`](/api-core/classes/shape/).[`canContain`](/api-core/classes/shape/#cancontain)

#### Source

[shapes.ts:920](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L920)

***

### containsPoint()

> **containsPoint**(`canvas`, `point`): `boolean`

Page do not contain a point

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

#### Returns

`boolean`

#### Overrides

[`Shape`](/api-core/classes/shape/).[`containsPoint`](/api-core/classes/shape/#containspoint)

#### Source

[shapes.ts:1072](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1072)

***

### draw()

> **draw**(`canvas`, `showDOM`): `void`

Render this shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **showDOM**: `boolean`= `false`

#### Returns

`void`

#### Overrides

[`Shape`](/api-core/classes/shape/).[`draw`](/api-core/classes/shape/#draw)

#### Source

[shapes.ts:1030](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1030)

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

[shapes.ts:677](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L677)

***

### finalize()

> **finalize**(`canvas`): `void`

Finalize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Overrides

[`Shape`](/api-core/classes/shape/).[`finalize`](/api-core/classes/shape/#finalize)

#### Source

[shapes.ts:1021](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1021)

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

[`Shape`](/api-core/classes/shape/).[`findAllByQuery`](/api-core/classes/shape/#findallbyquery)

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

[`Shape`](/api-core/classes/shape/).[`findByQuery`](/api-core/classes/shape/#findbyquery)

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

[`Shape`](/api-core/classes/shape/).[`findDepthFirst`](/api-core/classes/shape/#finddepthfirst)

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

[`Shape`](/api-core/classes/shape/).[`findParent`](/api-core/classes/shape/#findparent)

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

[`Shape`](/api-core/classes/shape/).[`fromJSON`](/api-core/classes/shape/#fromjson)

#### Source

[shapes.ts:1016](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1016)

***

### geViewRect()

> **geViewRect**(`canvas`): `number`[][]

Return the page's view rect in GCS

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`number`[][]

#### Source

[shapes.ts:1057](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1057)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Returns a bounding box containing all shapes in the doc

#### Returns

`number`[][]

#### Overrides

[`Shape`](/api-core/classes/shape/).[`getBoundingRect`](/api-core/classes/shape/#getboundingrect)

#### Source

[shapes.ts:1042](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1042)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getCenter`](/api-core/classes/shape/#getcenter)

#### Source

[shapes.ts:717](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L717)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getChildrenBoundingRect`](/api-core/classes/shape/#getchildrenboundingrect)

#### Source

[shapes.ts:750](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L750)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getEnclosure`](/api-core/classes/shape/#getenclosure)

#### Source

[shapes.ts:784](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L784)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getOutline`](/api-core/classes/shape/#getoutline)

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

[`Shape`](/api-core/classes/shape/).[`getProperty`](/api-core/classes/shape/#getproperty)

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

[`Shape`](/api-core/classes/shape/).[`getPropertyValue`](/api-core/classes/shape/#getpropertyvalue)

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

[`Shape`](/api-core/classes/shape/).[`getRectInDCS`](/api-core/classes/shape/#getrectindcs)

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

[`Shape`](/api-core/classes/shape/).[`getScript`](/api-core/classes/shape/#getscript)

#### Source

[shapes.ts:950](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L950)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getSeed`](/api-core/classes/shape/#getseed)

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

[`Shape`](/api-core/classes/shape/).[`getShapeAt`](/api-core/classes/shape/#getshapeat)

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

[`Shape`](/api-core/classes/shape/).[`getViewRect`](/api-core/classes/shape/#getviewrect)

#### Source

[shapes.ts:737](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L737)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`inGroup`](/api-core/classes/shape/#ingroup)

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

[`Shape`](/api-core/classes/shape/).[`initialze`](/api-core/classes/shape/#initialze)

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

[`Shape`](/api-core/classes/shape/).[`isDescendant`](/api-core/classes/shape/#isdescendant)

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

[`Shape`](/api-core/classes/shape/).[`localCoordTransform`](/api-core/classes/shape/#localcoordtransform)

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

[`Shape`](/api-core/classes/shape/).[`localCoordTransformRev`](/api-core/classes/shape/#localcoordtransformrev)

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

[`Shape`](/api-core/classes/shape/).[`localTransform`](/api-core/classes/shape/#localtransform)

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

[`Shape`](/api-core/classes/shape/).[`match`](/api-core/classes/shape/#match)

#### Source

[shapes.ts:872](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L872)

***

### overlapRect()

> **overlapRect**(`canvas`, `rect`): `boolean`

Page do not overlap with anything

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **rect**: `number`[][]

#### Returns

`boolean`

#### Overrides

[`Shape`](/api-core/classes/shape/).[`overlapRect`](/api-core/classes/shape/#overlaprect)

#### Source

[shapes.ts:1079](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1079)

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

[shapes.ts:847](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L847)

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

[`Shape`](/api-core/classes/shape/).[`render`](/api-core/classes/shape/#render)

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

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`renderDefault`](/api-core/classes/shape/#renderdefault)

#### Source

[shapes.ts:625](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L625)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`renderOutline`](/api-core/classes/shape/#renderoutline)

#### Source

[shapes.ts:630](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L630)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Render default outline

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`renderOutlineDefault`](/api-core/classes/shape/#renderoutlinedefault)

#### Source

[shapes.ts:645](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L645)

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

[`Shape`](/api-core/classes/shape/).[`resolveRefs`](/api-core/classes/shape/#resolverefs)

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

[`Shape`](/api-core/classes/shape/).[`toJSON`](/api-core/classes/shape/#tojson)

#### Source

[shapes.ts:1010](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1010)

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

[`Shape`](/api-core/classes/shape/).[`traverseDepthFirst`](/api-core/classes/shape/#traversedepthfirst)

#### Source

[core/obj.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L87)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`traverseDepthFirstSequence`](/api-core/classes/shape/#traversedepthfirstsequence)

#### Source

[core/obj.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L110)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`traverseSequence`](/api-core/classes/shape/#traversesequence)

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

[`Shape`](/api-core/classes/shape/).[`update`](/api-core/classes/shape/#update)

#### Source

[shapes.ts:494](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L494)
