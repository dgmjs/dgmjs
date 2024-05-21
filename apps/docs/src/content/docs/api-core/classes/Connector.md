---
editUrl: false
next: false
prev: false
title: "Connector"
---

Connector

## Extends

- [`Line`](/api-core/classes/line/)

## Constructors

### new Connector()

> **new Connector**(): [`Connector`](/api-core/classes/connector/)

#### Returns

[`Connector`](/api-core/classes/connector/)

#### Overrides

[`Line`](/api-core/classes/line/).[`constructor`](/api-core/classes/line/#constructors)

#### Source

[shapes.ts:2009](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2009)

## Properties

### \_linkDOM

> **\_linkDOM**: `null` \| `HTMLAnchorElement`

Link DOM element

#### Inherited from

[`Line`](/api-core/classes/line/).[`_linkDOM`](/api-core/classes/line/#_linkdom)

#### Source

[shapes.ts:337](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L337)

***

### \_memoCanvas

> **\_memoCanvas**: `MemoizationCanvas`

Memoization canvas

#### Inherited from

[`Line`](/api-core/classes/line/).[`_memoCanvas`](/api-core/classes/line/#_memocanvas)

#### Source

[shapes.ts:327](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L327)

***

### \_memoOutline

> **\_memoOutline**: `number`[][]

Memoization outline

#### Inherited from

[`Line`](/api-core/classes/line/).[`_memoOutline`](/api-core/classes/line/#_memooutline)

#### Source

[shapes.ts:332](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L332)

***

### \_memoSeed

> **\_memoSeed**: `null` \| `number`

Memoize seed

#### Inherited from

[`Line`](/api-core/classes/line/).[`_memoSeed`](/api-core/classes/line/#_memoseed)

#### Source

[shapes.ts:322](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L322)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Line`](/api-core/classes/line/).[`children`](/api-core/classes/line/#children)

#### Source

[core/obj.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L27)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Inherited from

[`Line`](/api-core/classes/line/).[`connectable`](/api-core/classes/line/#connectable)

#### Source

[shapes.ts:212](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L212)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Line`](/api-core/classes/line/).[`constraints`](/api-core/classes/line/#constraints)

#### Source

[shapes.ts:307](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L307)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Line`](/api-core/classes/line/).[`containable`](/api-core/classes/line/#containable)

#### Source

[shapes.ts:202](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L202)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Line`](/api-core/classes/line/).[`containableFilter`](/api-core/classes/line/#containablefilter)

#### Source

[shapes.ts:207](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L207)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Line`](/api-core/classes/line/).[`description`](/api-core/classes/line/#description)

#### Source

[shapes.ts:162](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L162)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Line`](/api-core/classes/line/).[`enable`](/api-core/classes/line/#enable)

#### Source

[shapes.ts:177](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L177)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Line`](/api-core/classes/line/).[`fillColor`](/api-core/classes/line/#fillcolor)

#### Source

[shapes.ts:257](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L257)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Line`](/api-core/classes/line/).[`fillStyle`](/api-core/classes/line/#fillstyle)

#### Source

[shapes.ts:262](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L262)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Line`](/api-core/classes/line/).[`fontColor`](/api-core/classes/line/#fontcolor)

#### Source

[shapes.ts:267](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L267)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Line`](/api-core/classes/line/).[`fontFamily`](/api-core/classes/line/#fontfamily)

#### Source

[shapes.ts:272](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L272)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Line`](/api-core/classes/line/).[`fontSize`](/api-core/classes/line/#fontsize)

#### Source

[shapes.ts:277](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L277)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Line`](/api-core/classes/line/).[`fontStyle`](/api-core/classes/line/#fontstyle)

#### Source

[shapes.ts:282](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L282)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Line`](/api-core/classes/line/).[`fontWeight`](/api-core/classes/line/#fontweight)

#### Source

[shapes.ts:287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L287)

***

### head

> **head**: `null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[shapes.ts:1986](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1986)

***

### headAnchor

> **headAnchor**: `number`[]

Head's anchor position

#### Source

[shapes.ts:1992](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1992)

***

### headEndType

> **headEndType**: [`LineEndTypeEnum`](/api-core/type-aliases/lineendtypeenum/)

#### Inherited from

[`Line`](/api-core/classes/line/).[`headEndType`](/api-core/classes/line/#headendtype)

#### Source

[shapes.ts:1697](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1697)

***

### headMargin

> **headMargin**: `number`

Marginal space to head

#### Source

[shapes.ts:2002](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2002)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Line`](/api-core/classes/line/).[`height`](/api-core/classes/line/#height)

#### Source

[shapes.ts:232](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L232)

***

### id

> **id**: `string`

#### Inherited from

[`Line`](/api-core/classes/line/).[`id`](/api-core/classes/line/#id)

#### Source

[core/obj.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L24)

***

### left

> **left**: `number`

Shape's left position

#### Inherited from

[`Line`](/api-core/classes/line/).[`left`](/api-core/classes/line/#left)

#### Source

[shapes.ts:217](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L217)

***

### lineType

> **lineType**: [`LineTypeEnum`](/api-core/type-aliases/linetypeenum/)

#### Inherited from

[`Line`](/api-core/classes/line/).[`lineType`](/api-core/classes/line/#linetype)

#### Source

[shapes.ts:1696](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1696)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Line`](/api-core/classes/line/).[`link`](/api-core/classes/line/#link)

#### Source

[shapes.ts:302](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L302)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Line`](/api-core/classes/line/).[`movable`](/api-core/classes/line/#movable)

#### Source

[shapes.ts:187](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L187)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Line`](/api-core/classes/line/).[`name`](/api-core/classes/line/#name)

#### Source

[shapes.ts:157](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L157)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Line`](/api-core/classes/line/).[`opacity`](/api-core/classes/line/#opacity)

#### Source

[shapes.ts:292](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L292)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Line`](/api-core/classes/line/).[`parent`](/api-core/classes/line/#parent)

#### Source

[core/obj.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L26)

***

### path

> **path**: `number`[][]

#### Inherited from

[`Line`](/api-core/classes/line/).[`path`](/api-core/classes/line/#path)

#### Source

[shapes.ts:1443](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1443)

***

### pathEditable

> **pathEditable**: `boolean`

#### Inherited from

[`Line`](/api-core/classes/line/).[`pathEditable`](/api-core/classes/line/#patheditable)

#### Source

[shapes.ts:1442](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1442)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Line`](/api-core/classes/line/).[`properties`](/api-core/classes/line/#properties)

#### Source

[shapes.ts:312](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L312)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Line`](/api-core/classes/line/).[`proto`](/api-core/classes/line/#proto)

#### Source

[shapes.ts:167](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L167)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Line`](/api-core/classes/line/).[`rotatable`](/api-core/classes/line/#rotatable)

#### Source

[shapes.ts:197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L197)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Line`](/api-core/classes/line/).[`rotate`](/api-core/classes/line/#rotate)

#### Source

[shapes.ts:237](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L237)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Line`](/api-core/classes/line/).[`roughness`](/api-core/classes/line/#roughness)

#### Source

[shapes.ts:297](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L297)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Line`](/api-core/classes/line/).[`scripts`](/api-core/classes/line/#scripts)

#### Source

[shapes.ts:317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L317)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Line`](/api-core/classes/line/).[`sizable`](/api-core/classes/line/#sizable)

#### Source

[shapes.ts:192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L192)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Line`](/api-core/classes/line/).[`strokeColor`](/api-core/classes/line/#strokecolor)

#### Source

[shapes.ts:242](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L242)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Line`](/api-core/classes/line/).[`strokePattern`](/api-core/classes/line/#strokepattern)

#### Source

[shapes.ts:252](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L252)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Line`](/api-core/classes/line/).[`strokeWidth`](/api-core/classes/line/#strokewidth)

#### Source

[shapes.ts:247](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L247)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Line`](/api-core/classes/line/).[`tags`](/api-core/classes/line/#tags)

#### Source

[shapes.ts:172](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L172)

***

### tail

> **tail**: `null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[shapes.ts:1987](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1987)

***

### tailAnchor

> **tailAnchor**: `number`[]

Tail's anchor position

#### Source

[shapes.ts:1997](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1997)

***

### tailEndType

> **tailEndType**: [`LineEndTypeEnum`](/api-core/type-aliases/lineendtypeenum/)

#### Inherited from

[`Line`](/api-core/classes/line/).[`tailEndType`](/api-core/classes/line/#tailendtype)

#### Source

[shapes.ts:1698](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1698)

***

### tailMargin

> **tailMargin**: `number`

Marginal space to tail

#### Source

[shapes.ts:2007](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2007)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Line`](/api-core/classes/line/).[`top`](/api-core/classes/line/#top)

#### Source

[shapes.ts:222](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L222)

***

### type

> **type**: `string`

#### Inherited from

[`Line`](/api-core/classes/line/).[`type`](/api-core/classes/line/#type)

#### Source

[core/obj.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L25)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Line`](/api-core/classes/line/).[`visible`](/api-core/classes/line/#visible)

#### Source

[shapes.ts:182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L182)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Line`](/api-core/classes/line/).[`width`](/api-core/classes/line/#width)

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

[`Line`](/api-core/classes/line/).[`assignStyles`](/api-core/classes/line/#assignstyles)

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

[`Line`](/api-core/classes/line/).[`canContain`](/api-core/classes/line/#cancontain)

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

[`Line`](/api-core/classes/line/).[`containsPoint`](/api-core/classes/line/#containspoint)

#### Source

[shapes.ts:1487](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1487)

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

[`Line`](/api-core/classes/line/).[`draw`](/api-core/classes/line/#draw)

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

[`Line`](/api-core/classes/line/).[`drawLink`](/api-core/classes/line/#drawlink)

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

[`Line`](/api-core/classes/line/).[`finalize`](/api-core/classes/line/#finalize)

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

[`Line`](/api-core/classes/line/).[`find`](/api-core/classes/line/#find)

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

[`Line`](/api-core/classes/line/).[`findAllByQuery`](/api-core/classes/line/#findallbyquery)

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

[`Line`](/api-core/classes/line/).[`findByQuery`](/api-core/classes/line/#findbyquery)

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

[`Line`](/api-core/classes/line/).[`findDepthFirst`](/api-core/classes/line/#finddepthfirst)

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

[`Line`](/api-core/classes/line/).[`findParent`](/api-core/classes/line/#findparent)

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

[`Line`](/api-core/classes/line/).[`fromJSON`](/api-core/classes/line/#fromjson)

#### Source

[shapes.ts:2035](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2035)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Overrides

[`Line`](/api-core/classes/line/).[`getBoundingRect`](/api-core/classes/line/#getboundingrect)

#### Source

[shapes.ts:2066](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2066)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Line`](/api-core/classes/line/).[`getCenter`](/api-core/classes/line/#getcenter)

#### Source

[shapes.ts:717](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L717)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Line`](/api-core/classes/line/).[`getChildrenBoundingRect`](/api-core/classes/line/#getchildrenboundingrect)

#### Source

[shapes.ts:750](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L750)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Line`](/api-core/classes/line/).[`getEnclosure`](/api-core/classes/line/#getenclosure)

#### Source

[shapes.ts:784](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L784)

***

### getEndSegment()

> **getEndSegment**(`isHead`): `number`[][]

Return a segment of an end

#### Parameters

• **isHead**: `boolean`

#### Returns

`number`[][]

segment line to end

#### Inherited from

[`Line`](/api-core/classes/line/).[`getEndSegment`](/api-core/classes/line/#getendsegment)

#### Source

[shapes.ts:1478](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1478)

***

### getHeadAnchorPoint()

> **getHeadAnchorPoint**(): `number`[]

Return head anchor point

#### Returns

`number`[]

#### Source

[shapes.ts:2082](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2082)

***

### getHeadOutline()

> **getHeadOutline**(): `null` \| `number`[][]

Return head's outline

#### Returns

`null` \| `number`[][]

#### Source

[shapes.ts:2124](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2124)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Line`](/api-core/classes/line/).[`getOutline`](/api-core/classes/line/#getoutline)

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

[`Line`](/api-core/classes/line/).[`getProperty`](/api-core/classes/line/#getproperty)

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

[`Line`](/api-core/classes/line/).[`getPropertyValue`](/api-core/classes/line/#getpropertyvalue)

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

[`Line`](/api-core/classes/line/).[`getRectInDCS`](/api-core/classes/line/#getrectindcs)

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

[`Line`](/api-core/classes/line/).[`getScript`](/api-core/classes/line/#getscript)

#### Source

[shapes.ts:950](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L950)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Inherited from

[`Line`](/api-core/classes/line/).[`getSeed`](/api-core/classes/line/#getseed)

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

[`Line`](/api-core/classes/line/).[`getShapeAt`](/api-core/classes/line/#getshapeat)

#### Source

[shapes.ts:503](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L503)

***

### getTailAnchorPoint()

> **getTailAnchorPoint**(): `number`[]

Return tail anchor point

#### Returns

`number`[]

#### Source

[shapes.ts:2103](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2103)

***

### getTailOutline()

> **getTailOutline**(): `null` \| `number`[][]

Return head's outline

#### Returns

`null` \| `number`[][]

#### Source

[shapes.ts:2131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2131)

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

[`Line`](/api-core/classes/line/).[`getViewRect`](/api-core/classes/line/#getviewrect)

#### Source

[shapes.ts:1970](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1970)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Line`](/api-core/classes/line/).[`inGroup`](/api-core/classes/line/#ingroup)

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

[`Line`](/api-core/classes/line/).[`initialze`](/api-core/classes/line/#initialze)

#### Source

[shapes.ts:479](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L479)

***

### isClosed()

> **isClosed**(): `boolean`

Return is the path is closed

#### Returns

`boolean`

#### Inherited from

[`Line`](/api-core/classes/line/).[`isClosed`](/api-core/classes/line/#isclosed)

#### Source

[shapes.ts:1469](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1469)

***

### isDescendant()

> **isDescendant**(`obj`): `boolean`

Test whether the given shape is a descendant

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Inherited from

[`Line`](/api-core/classes/line/).[`isDescendant`](/api-core/classes/line/#isdescendant)

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

[`Line`](/api-core/classes/line/).[`localCoordTransform`](/api-core/classes/line/#localcoordtransform)

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

[`Line`](/api-core/classes/line/).[`localCoordTransformRev`](/api-core/classes/line/#localcoordtransformrev)

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

[`Line`](/api-core/classes/line/).[`localTransform`](/api-core/classes/line/#localtransform)

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

[`Line`](/api-core/classes/line/).[`match`](/api-core/classes/line/#match)

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

[`Line`](/api-core/classes/line/).[`overlapRect`](/api-core/classes/line/#overlaprect)

#### Source

[shapes.ts:1510](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1510)

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

[`Line`](/api-core/classes/line/).[`parseQueryString`](/api-core/classes/line/#parsequerystring)

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

[`Line`](/api-core/classes/line/).[`render`](/api-core/classes/line/#render)

#### Source

[shapes.ts:607](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L607)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Draw this shape

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Inherited from

[`Line`](/api-core/classes/line/).[`renderDefault`](/api-core/classes/line/#renderdefault)

#### Source

[shapes.ts:1727](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1727)

***

### renderLineEnd()

> **renderLineEnd**(`canvas`, `edgeEndType`, `isHead`): `number`[]

Draw line end types.
All line-ends are drawn based on the point grid as below:

        0 1 2 3 4 5 6 7 8 9 10
0       • • • • • • • • • • •
1       • • • • • • • • • • •
2       • • • • • • • • • • •
3  HEAD •-•-•-•-•-•-•-•-•-•-•---------- TAIL
4       • • • • • • • • • • •
5       • • • • • • • • • • •
6       • • • • • • • • • • •

#### Parameters

• **canvas**: `MemoizationCanvas`

• **edgeEndType**: `string`

• **isHead**: `boolean`

#### Returns

`number`[]

an end point the path should be drawn to

#### Inherited from

[`Line`](/api-core/classes/line/).[`renderLineEnd`](/api-core/classes/line/#renderlineend)

#### Source

[shapes.ts:1772](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1772)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Inherited from

[`Line`](/api-core/classes/line/).[`renderOutline`](/api-core/classes/line/#renderoutline)

#### Source

[shapes.ts:630](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L630)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Return default outline

#### Returns

`number`[][]

#### Inherited from

[`Line`](/api-core/classes/line/).[`renderOutlineDefault`](/api-core/classes/line/#renderoutlinedefault)

#### Source

[shapes.ts:1954](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1954)

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

#### Overrides

[`Line`](/api-core/classes/line/).[`resolveRefs`](/api-core/classes/line/#resolverefs)

#### Source

[shapes.ts:2045](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2045)

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

[`Line`](/api-core/classes/line/).[`toJSON`](/api-core/classes/line/#tojson)

#### Source

[shapes.ts:2020](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2020)

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

[`Line`](/api-core/classes/line/).[`traverse`](/api-core/classes/line/#traverse)

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

[`Line`](/api-core/classes/line/).[`traverseDepthFirst`](/api-core/classes/line/#traversedepthfirst)

#### Source

[core/obj.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L87)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Line`](/api-core/classes/line/).[`traverseDepthFirstSequence`](/api-core/classes/line/#traversedepthfirstsequence)

#### Source

[core/obj.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L110)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Line`](/api-core/classes/line/).[`traverseSequence`](/api-core/classes/line/#traversesequence)

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

[`Line`](/api-core/classes/line/).[`update`](/api-core/classes/line/#update)

#### Source

[shapes.ts:494](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L494)
