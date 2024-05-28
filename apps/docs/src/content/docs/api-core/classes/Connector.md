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

[shapes.ts:2018](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2018)

## Properties

### \_linkDOM

> **\_linkDOM**: `null` \| `HTMLAnchorElement`

Link DOM element

#### Inherited from

[`Line`](/api-core/classes/line/).[`_linkDOM`](/api-core/classes/line/#_linkdom)

#### Source

[shapes.ts:338](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L338)

***

### \_memoCanvas

> **\_memoCanvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

Memoization canvas

#### Inherited from

[`Line`](/api-core/classes/line/).[`_memoCanvas`](/api-core/classes/line/#_memocanvas)

#### Source

[shapes.ts:328](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L328)

***

### \_memoOutline

> **\_memoOutline**: `number`[][]

Memoization outline

#### Inherited from

[`Line`](/api-core/classes/line/).[`_memoOutline`](/api-core/classes/line/#_memooutline)

#### Source

[shapes.ts:333](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L333)

***

### \_memoSeed

> **\_memoSeed**: `null` \| `number`

Memoize seed

#### Inherited from

[`Line`](/api-core/classes/line/).[`_memoSeed`](/api-core/classes/line/#_memoseed)

#### Source

[shapes.ts:323](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L323)

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

[shapes.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L213)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Line`](/api-core/classes/line/).[`constraints`](/api-core/classes/line/#constraints)

#### Source

[shapes.ts:308](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L308)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Line`](/api-core/classes/line/).[`containable`](/api-core/classes/line/#containable)

#### Source

[shapes.ts:203](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L203)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Line`](/api-core/classes/line/).[`containableFilter`](/api-core/classes/line/#containablefilter)

#### Source

[shapes.ts:208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L208)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Line`](/api-core/classes/line/).[`description`](/api-core/classes/line/#description)

#### Source

[shapes.ts:163](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L163)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Line`](/api-core/classes/line/).[`enable`](/api-core/classes/line/#enable)

#### Source

[shapes.ts:178](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L178)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Line`](/api-core/classes/line/).[`fillColor`](/api-core/classes/line/#fillcolor)

#### Source

[shapes.ts:258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L258)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Line`](/api-core/classes/line/).[`fillStyle`](/api-core/classes/line/#fillstyle)

#### Source

[shapes.ts:263](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L263)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Line`](/api-core/classes/line/).[`fontColor`](/api-core/classes/line/#fontcolor)

#### Source

[shapes.ts:268](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L268)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Line`](/api-core/classes/line/).[`fontFamily`](/api-core/classes/line/#fontfamily)

#### Source

[shapes.ts:273](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L273)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Line`](/api-core/classes/line/).[`fontSize`](/api-core/classes/line/#fontsize)

#### Source

[shapes.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L278)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Line`](/api-core/classes/line/).[`fontStyle`](/api-core/classes/line/#fontstyle)

#### Source

[shapes.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L283)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Line`](/api-core/classes/line/).[`fontWeight`](/api-core/classes/line/#fontweight)

#### Source

[shapes.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L288)

***

### head

> **head**: `null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[shapes.ts:1995](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1995)

***

### headAnchor

> **headAnchor**: `number`[]

Head's anchor position

#### Source

[shapes.ts:2001](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2001)

***

### headEndType

> **headEndType**: [`LineEndTypeEnum`](/api-core/type-aliases/lineendtypeenum/)

#### Inherited from

[`Line`](/api-core/classes/line/).[`headEndType`](/api-core/classes/line/#headendtype)

#### Source

[shapes.ts:1707](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1707)

***

### headMargin

> **headMargin**: `number`

Marginal space to head

#### Source

[shapes.ts:2011](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2011)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Line`](/api-core/classes/line/).[`height`](/api-core/classes/line/#height)

#### Source

[shapes.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L233)

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

[shapes.ts:218](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L218)

***

### lineType

> **lineType**: [`LineTypeEnum`](/api-core/type-aliases/linetypeenum/)

#### Inherited from

[`Line`](/api-core/classes/line/).[`lineType`](/api-core/classes/line/#linetype)

#### Source

[shapes.ts:1706](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1706)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Line`](/api-core/classes/line/).[`link`](/api-core/classes/line/#link)

#### Source

[shapes.ts:303](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L303)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Line`](/api-core/classes/line/).[`movable`](/api-core/classes/line/#movable)

#### Source

[shapes.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L188)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Line`](/api-core/classes/line/).[`name`](/api-core/classes/line/#name)

#### Source

[shapes.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L158)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Line`](/api-core/classes/line/).[`opacity`](/api-core/classes/line/#opacity)

#### Source

[shapes.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L293)

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

[shapes.ts:1453](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1453)

***

### pathEditable

> **pathEditable**: `boolean`

#### Inherited from

[`Line`](/api-core/classes/line/).[`pathEditable`](/api-core/classes/line/#patheditable)

#### Source

[shapes.ts:1452](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1452)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Line`](/api-core/classes/line/).[`properties`](/api-core/classes/line/#properties)

#### Source

[shapes.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L313)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Line`](/api-core/classes/line/).[`proto`](/api-core/classes/line/#proto)

#### Source

[shapes.ts:168](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L168)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Line`](/api-core/classes/line/).[`rotatable`](/api-core/classes/line/#rotatable)

#### Source

[shapes.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L198)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Line`](/api-core/classes/line/).[`rotate`](/api-core/classes/line/#rotate)

#### Source

[shapes.ts:238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L238)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Line`](/api-core/classes/line/).[`roughness`](/api-core/classes/line/#roughness)

#### Source

[shapes.ts:298](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L298)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Line`](/api-core/classes/line/).[`scripts`](/api-core/classes/line/#scripts)

#### Source

[shapes.ts:318](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L318)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Line`](/api-core/classes/line/).[`sizable`](/api-core/classes/line/#sizable)

#### Source

[shapes.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L193)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Line`](/api-core/classes/line/).[`strokeColor`](/api-core/classes/line/#strokecolor)

#### Source

[shapes.ts:243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L243)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Line`](/api-core/classes/line/).[`strokePattern`](/api-core/classes/line/#strokepattern)

#### Source

[shapes.ts:253](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L253)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Line`](/api-core/classes/line/).[`strokeWidth`](/api-core/classes/line/#strokewidth)

#### Source

[shapes.ts:248](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L248)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Line`](/api-core/classes/line/).[`tags`](/api-core/classes/line/#tags)

#### Source

[shapes.ts:173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L173)

***

### tail

> **tail**: `null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[shapes.ts:1996](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1996)

***

### tailAnchor

> **tailAnchor**: `number`[]

Tail's anchor position

#### Source

[shapes.ts:2006](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2006)

***

### tailEndType

> **tailEndType**: [`LineEndTypeEnum`](/api-core/type-aliases/lineendtypeenum/)

#### Inherited from

[`Line`](/api-core/classes/line/).[`tailEndType`](/api-core/classes/line/#tailendtype)

#### Source

[shapes.ts:1708](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1708)

***

### tailMargin

> **tailMargin**: `number`

Marginal space to tail

#### Source

[shapes.ts:2016](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2016)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Line`](/api-core/classes/line/).[`top`](/api-core/classes/line/#top)

#### Source

[shapes.ts:223](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L223)

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

[shapes.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L183)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Line`](/api-core/classes/line/).[`width`](/api-core/classes/line/#width)

#### Source

[shapes.ts:228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L228)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:468](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L468)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:464](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L464)

## Methods

### assignStyles()

> **assignStyles**(`canvas`): `void`

Assign styles to memoization canvas.

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Inherited from

[`Line`](/api-core/classes/line/).[`assignStyles`](/api-core/classes/line/#assignstyles)

#### Source

[shapes.ts:529](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L529)

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

[shapes.ts:921](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L921)

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

[shapes.ts:1497](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1497)

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

[shapes.ts:664](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L664)

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

[shapes.ts:678](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L678)

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

[shapes.ts:485](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L485)

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

[shapes.ts:911](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L911)

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

[shapes.ts:898](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L898)

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

[shapes.ts:2044](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2044)

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

[shapes.ts:2075](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2075)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Line`](/api-core/classes/line/).[`getCenter`](/api-core/classes/line/#getcenter)

#### Source

[shapes.ts:718](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L718)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Line`](/api-core/classes/line/).[`getChildrenBoundingRect`](/api-core/classes/line/#getchildrenboundingrect)

#### Source

[shapes.ts:751](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L751)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Line`](/api-core/classes/line/).[`getEnclosure`](/api-core/classes/line/#getenclosure)

#### Source

[shapes.ts:785](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L785)

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

[shapes.ts:1488](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1488)

***

### getHeadAnchorPoint()

> **getHeadAnchorPoint**(): `number`[]

Return head anchor point

#### Returns

`number`[]

#### Source

[shapes.ts:2091](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2091)

***

### getHeadOutline()

> **getHeadOutline**(): `null` \| `number`[][]

Return head's outline

#### Returns

`null` \| `number`[][]

#### Source

[shapes.ts:2133](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2133)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Line`](/api-core/classes/line/).[`getOutline`](/api-core/classes/line/#getoutline)

#### Source

[shapes.ts:653](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L653)

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

[shapes.ts:933](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L933)

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

[shapes.ts:943](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L943)

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

[shapes.ts:764](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L764)

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

[shapes.ts:951](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L951)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Inherited from

[`Line`](/api-core/classes/line/).[`getSeed`](/api-core/classes/line/#getseed)

#### Source

[shapes.ts:472](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L472)

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

[shapes.ts:504](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L504)

***

### getTailAnchorPoint()

> **getTailAnchorPoint**(): `number`[]

Return tail anchor point

#### Returns

`number`[]

#### Source

[shapes.ts:2112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2112)

***

### getTailOutline()

> **getTailOutline**(): `null` \| `number`[][]

Return head's outline

#### Returns

`null` \| `number`[][]

#### Source

[shapes.ts:2140](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2140)

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

[shapes.ts:1979](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1979)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Line`](/api-core/classes/line/).[`inGroup`](/api-core/classes/line/#ingroup)

#### Source

[shapes.ts:522](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L522)

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

[shapes.ts:480](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L480)

***

### isClosed()

> **isClosed**(): `boolean`

Return is the path is closed

#### Returns

`boolean`

#### Inherited from

[`Line`](/api-core/classes/line/).[`isClosed`](/api-core/classes/line/#isclosed)

#### Source

[shapes.ts:1479](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1479)

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

[shapes.ts:565](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L565)

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

[shapes.ts:585](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L585)

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

[shapes.ts:549](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L549)

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

[shapes.ts:873](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L873)

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

[shapes.ts:1520](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1520)

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

[shapes.ts:848](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L848)

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

[`Line`](/api-core/classes/line/).[`render`](/api-core/classes/line/#render)

#### Source

[shapes.ts:608](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L608)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Draw this shape

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Inherited from

[`Line`](/api-core/classes/line/).[`renderDefault`](/api-core/classes/line/#renderdefault)

#### Source

[shapes.ts:1737](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1737)

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

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

• **edgeEndType**: `string`

• **isHead**: `boolean`

#### Returns

`number`[]

an end point the path should be drawn to

#### Inherited from

[`Line`](/api-core/classes/line/).[`renderLineEnd`](/api-core/classes/line/#renderlineend)

#### Source

[shapes.ts:1782](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1782)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Inherited from

[`Line`](/api-core/classes/line/).[`renderOutline`](/api-core/classes/line/#renderoutline)

#### Source

[shapes.ts:631](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L631)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Return default outline

#### Returns

`number`[][]

#### Inherited from

[`Line`](/api-core/classes/line/).[`renderOutlineDefault`](/api-core/classes/line/#renderoutlinedefault)

#### Source

[shapes.ts:1963](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1963)

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

[shapes.ts:2054](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2054)

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

[shapes.ts:2029](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2029)

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

[shapes.ts:495](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L495)
