---
editUrl: false
next: false
prev: false
title: "Highlighter"
---

Highlighter

## Extends

- [`Path`](/api-core/classes/path/)

## Constructors

### new Highlighter()

> **new Highlighter**(): [`Highlighter`](/api-core/classes/highlighter/)

#### Returns

[`Highlighter`](/api-core/classes/highlighter/)

#### Overrides

[`Path`](/api-core/classes/path/).[`constructor`](/api-core/classes/path/#constructors)

#### Source

[shapes.ts:2195](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L2195)

## Properties

### \_linkDOM

> **\_linkDOM**: `null` \| `HTMLAnchorElement`

Link DOM element

#### Inherited from

[`Path`](/api-core/classes/path/).[`_linkDOM`](/api-core/classes/path/#_linkdom)

#### Source

[shapes.ts:337](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L337)

***

### \_memoCanvas

> **\_memoCanvas**: `MemoizationCanvas`

Memoization canvas

#### Inherited from

[`Path`](/api-core/classes/path/).[`_memoCanvas`](/api-core/classes/path/#_memocanvas)

#### Source

[shapes.ts:327](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L327)

***

### \_memoOutline

> **\_memoOutline**: `number`[][]

Memoization outline

#### Inherited from

[`Path`](/api-core/classes/path/).[`_memoOutline`](/api-core/classes/path/#_memooutline)

#### Source

[shapes.ts:332](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L332)

***

### \_memoSeed

> **\_memoSeed**: `null` \| `number`

Memoize seed

#### Inherited from

[`Path`](/api-core/classes/path/).[`_memoSeed`](/api-core/classes/path/#_memoseed)

#### Source

[shapes.ts:322](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L322)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Path`](/api-core/classes/path/).[`children`](/api-core/classes/path/#children)

#### Source

[core/obj.ts:27](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L27)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Inherited from

[`Path`](/api-core/classes/path/).[`connectable`](/api-core/classes/path/#connectable)

#### Source

[shapes.ts:212](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L212)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Path`](/api-core/classes/path/).[`constraints`](/api-core/classes/path/#constraints)

#### Source

[shapes.ts:307](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L307)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Path`](/api-core/classes/path/).[`containable`](/api-core/classes/path/#containable)

#### Source

[shapes.ts:202](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L202)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Path`](/api-core/classes/path/).[`containableFilter`](/api-core/classes/path/#containablefilter)

#### Source

[shapes.ts:207](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L207)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Path`](/api-core/classes/path/).[`description`](/api-core/classes/path/#description)

#### Source

[shapes.ts:162](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L162)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Path`](/api-core/classes/path/).[`enable`](/api-core/classes/path/#enable)

#### Source

[shapes.ts:177](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L177)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Path`](/api-core/classes/path/).[`fillColor`](/api-core/classes/path/#fillcolor)

#### Source

[shapes.ts:257](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L257)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Path`](/api-core/classes/path/).[`fillStyle`](/api-core/classes/path/#fillstyle)

#### Source

[shapes.ts:262](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L262)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Path`](/api-core/classes/path/).[`fontColor`](/api-core/classes/path/#fontcolor)

#### Source

[shapes.ts:267](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L267)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Path`](/api-core/classes/path/).[`fontFamily`](/api-core/classes/path/#fontfamily)

#### Source

[shapes.ts:272](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L272)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Path`](/api-core/classes/path/).[`fontSize`](/api-core/classes/path/#fontsize)

#### Source

[shapes.ts:277](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L277)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Path`](/api-core/classes/path/).[`fontStyle`](/api-core/classes/path/#fontstyle)

#### Source

[shapes.ts:282](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L282)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Path`](/api-core/classes/path/).[`fontWeight`](/api-core/classes/path/#fontweight)

#### Source

[shapes.ts:287](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L287)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Path`](/api-core/classes/path/).[`height`](/api-core/classes/path/#height)

#### Source

[shapes.ts:232](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L232)

***

### id

> **id**: `string`

#### Inherited from

[`Path`](/api-core/classes/path/).[`id`](/api-core/classes/path/#id)

#### Source

[core/obj.ts:24](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L24)

***

### left

> **left**: `number`

Shape's left position

#### Inherited from

[`Path`](/api-core/classes/path/).[`left`](/api-core/classes/path/#left)

#### Source

[shapes.ts:217](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L217)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Path`](/api-core/classes/path/).[`link`](/api-core/classes/path/#link)

#### Source

[shapes.ts:302](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L302)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Path`](/api-core/classes/path/).[`movable`](/api-core/classes/path/#movable)

#### Source

[shapes.ts:187](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L187)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Path`](/api-core/classes/path/).[`name`](/api-core/classes/path/#name)

#### Source

[shapes.ts:157](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L157)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Path`](/api-core/classes/path/).[`opacity`](/api-core/classes/path/#opacity)

#### Source

[shapes.ts:292](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L292)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Path`](/api-core/classes/path/).[`parent`](/api-core/classes/path/#parent)

#### Source

[core/obj.ts:26](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L26)

***

### path

> **path**: `number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`path`](/api-core/classes/path/#path)

#### Source

[shapes.ts:1443](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L1443)

***

### pathEditable

> **pathEditable**: `boolean`

#### Inherited from

[`Path`](/api-core/classes/path/).[`pathEditable`](/api-core/classes/path/#patheditable)

#### Source

[shapes.ts:1442](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L1442)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Path`](/api-core/classes/path/).[`properties`](/api-core/classes/path/#properties)

#### Source

[shapes.ts:312](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L312)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Path`](/api-core/classes/path/).[`proto`](/api-core/classes/path/#proto)

#### Source

[shapes.ts:167](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L167)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Path`](/api-core/classes/path/).[`rotatable`](/api-core/classes/path/#rotatable)

#### Source

[shapes.ts:197](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L197)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Path`](/api-core/classes/path/).[`rotate`](/api-core/classes/path/#rotate)

#### Source

[shapes.ts:237](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L237)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Path`](/api-core/classes/path/).[`roughness`](/api-core/classes/path/#roughness)

#### Source

[shapes.ts:297](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L297)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Path`](/api-core/classes/path/).[`scripts`](/api-core/classes/path/#scripts)

#### Source

[shapes.ts:317](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L317)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Path`](/api-core/classes/path/).[`sizable`](/api-core/classes/path/#sizable)

#### Source

[shapes.ts:192](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L192)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Path`](/api-core/classes/path/).[`strokeColor`](/api-core/classes/path/#strokecolor)

#### Source

[shapes.ts:242](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L242)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Path`](/api-core/classes/path/).[`strokePattern`](/api-core/classes/path/#strokepattern)

#### Source

[shapes.ts:252](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L252)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Path`](/api-core/classes/path/).[`strokeWidth`](/api-core/classes/path/#strokewidth)

#### Source

[shapes.ts:247](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L247)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Path`](/api-core/classes/path/).[`tags`](/api-core/classes/path/#tags)

#### Source

[shapes.ts:172](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L172)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Path`](/api-core/classes/path/).[`top`](/api-core/classes/path/#top)

#### Source

[shapes.ts:222](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L222)

***

### type

> **type**: `string`

#### Inherited from

[`Path`](/api-core/classes/path/).[`type`](/api-core/classes/path/#type)

#### Source

[core/obj.ts:25](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L25)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Path`](/api-core/classes/path/).[`visible`](/api-core/classes/path/#visible)

#### Source

[shapes.ts:182](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L182)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Path`](/api-core/classes/path/).[`width`](/api-core/classes/path/#width)

#### Source

[shapes.ts:227](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L227)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:467](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L467)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:463](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L463)

## Methods

### assignStyles()

> **assignStyles**(`canvas`): `void`

Assign styles to memoization canvas.

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Inherited from

[`Path`](/api-core/classes/path/).[`assignStyles`](/api-core/classes/path/#assignstyles)

#### Source

[shapes.ts:528](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L528)

***

### canContain()

> **canContain**(`shape`): `boolean`

Determine a given shape can be contained in this shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Inherited from

[`Path`](/api-core/classes/path/).[`canContain`](/api-core/classes/path/#cancontain)

#### Source

[shapes.ts:920](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L920)

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

[`Path`](/api-core/classes/path/).[`containsPoint`](/api-core/classes/path/#containspoint)

#### Source

[shapes.ts:1487](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L1487)

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

[`Path`](/api-core/classes/path/).[`draw`](/api-core/classes/path/#draw)

#### Source

[shapes.ts:663](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L663)

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

[`Path`](/api-core/classes/path/).[`drawLink`](/api-core/classes/path/#drawlink)

#### Source

[shapes.ts:677](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L677)

***

### finalize()

> **finalize**(`canvas`): `void`

Finalize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Inherited from

[`Path`](/api-core/classes/path/).[`finalize`](/api-core/classes/path/#finalize)

#### Source

[shapes.ts:484](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L484)

***

### find()

> **find**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find an shape in breath-first order

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Path`](/api-core/classes/path/).[`find`](/api-core/classes/path/#find)

#### Source

[core/obj.ts:119](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L119)

***

### findAllByQuery()

> **findAllByQuery**(`queryString`): [`Shape`](/api-core/classes/shape/)[]

Find all shapes matched with the query string

#### Parameters

• **queryString**: `string`

#### Returns

[`Shape`](/api-core/classes/shape/)[]

#### Inherited from

[`Path`](/api-core/classes/path/).[`findAllByQuery`](/api-core/classes/path/#findallbyquery)

#### Source

[shapes.ts:910](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L910)

***

### findByQuery()

> **findByQuery**(`queryString`): `null` \| [`Shape`](/api-core/classes/shape/)

Find a shape first matched with the query string

#### Parameters

• **queryString**: `any`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Inherited from

[`Path`](/api-core/classes/path/).[`findByQuery`](/api-core/classes/path/#findbyquery)

#### Source

[shapes.ts:897](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L897)

***

### findDepthFirst()

> **findDepthFirst**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find an shape in depth-first order

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Path`](/api-core/classes/path/).[`findDepthFirst`](/api-core/classes/path/#finddepthfirst)

#### Source

[core/obj.ts:132](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L132)

***

### findParent()

> **findParent**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find a shape along with the parent-chain

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Path`](/api-core/classes/path/).[`findParent`](/api-core/classes/path/#findparent)

#### Source

[core/obj.ts:145](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L145)

***

### fromJSON()

> **fromJSON**(`json`): `void`

Import shape from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Inherited from

[`Path`](/api-core/classes/path/).[`fromJSON`](/api-core/classes/path/#fromjson)

#### Source

[shapes.ts:1460](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L1460)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`getBoundingRect`](/api-core/classes/path/#getboundingrect)

#### Source

[shapes.ts:724](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L724)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Path`](/api-core/classes/path/).[`getCenter`](/api-core/classes/path/#getcenter)

#### Source

[shapes.ts:717](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L717)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`getChildrenBoundingRect`](/api-core/classes/path/#getchildrenboundingrect)

#### Source

[shapes.ts:750](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L750)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`getEnclosure`](/api-core/classes/path/#getenclosure)

#### Source

[shapes.ts:784](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L784)

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

[`Path`](/api-core/classes/path/).[`getEndSegment`](/api-core/classes/path/#getendsegment)

#### Source

[shapes.ts:1478](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L1478)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`getOutline`](/api-core/classes/path/#getoutline)

#### Source

[shapes.ts:652](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L652)

***

### getProperty()

> **getProperty**(`name`): `any`

Get a property object

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

[`Path`](/api-core/classes/path/).[`getProperty`](/api-core/classes/path/#getproperty)

#### Source

[shapes.ts:932](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L932)

***

### getPropertyValue()

> **getPropertyValue**(`name`): `any`

Get a property value

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

[`Path`](/api-core/classes/path/).[`getPropertyValue`](/api-core/classes/path/#getpropertyvalue)

#### Source

[shapes.ts:942](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L942)

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

[`Path`](/api-core/classes/path/).[`getRectInDCS`](/api-core/classes/path/#getrectindcs)

#### Source

[shapes.ts:763](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L763)

***

### getScript()

> **getScript**(`id`): `undefined` \| `string`

Get a property object

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[`Path`](/api-core/classes/path/).[`getScript`](/api-core/classes/path/#getscript)

#### Source

[shapes.ts:950](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L950)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Inherited from

[`Path`](/api-core/classes/path/).[`getSeed`](/api-core/classes/path/#getseed)

#### Source

[shapes.ts:471](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L471)

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

[`Path`](/api-core/classes/path/).[`getShapeAt`](/api-core/classes/path/#getshapeat)

#### Source

[shapes.ts:503](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L503)

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

[`Path`](/api-core/classes/path/).[`getViewRect`](/api-core/classes/path/#getviewrect)

#### Source

[shapes.ts:737](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L737)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Path`](/api-core/classes/path/).[`inGroup`](/api-core/classes/path/#ingroup)

#### Source

[shapes.ts:521](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L521)

***

### initialze()

> **initialze**(`canvas`): `void`

Initialize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Inherited from

[`Path`](/api-core/classes/path/).[`initialze`](/api-core/classes/path/#initialze)

#### Source

[shapes.ts:479](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L479)

***

### isClosed()

> **isClosed**(): `boolean`

Return is the path is closed

#### Returns

`boolean`

#### Inherited from

[`Path`](/api-core/classes/path/).[`isClosed`](/api-core/classes/path/#isclosed)

#### Source

[shapes.ts:1469](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L1469)

***

### isDescendant()

> **isDescendant**(`obj`): `boolean`

Test whether the given shape is a descendant

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Inherited from

[`Path`](/api-core/classes/path/).[`isDescendant`](/api-core/classes/path/#isdescendant)

#### Source

[core/obj.ts:155](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L155)

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

[`Path`](/api-core/classes/path/).[`localCoordTransform`](/api-core/classes/path/#localcoordtransform)

#### Source

[shapes.ts:564](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L564)

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

[`Path`](/api-core/classes/path/).[`localCoordTransformRev`](/api-core/classes/path/#localcoordtransformrev)

#### Source

[shapes.ts:584](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L584)

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

[`Path`](/api-core/classes/path/).[`localTransform`](/api-core/classes/path/#localtransform)

#### Source

[shapes.ts:548](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L548)

***

### match()

> **match**(`query`): `boolean`

Returns true if query matches this shape

#### Parameters

• **query**: `object`[]

#### Returns

`boolean`

#### Inherited from

[`Path`](/api-core/classes/path/).[`match`](/api-core/classes/path/#match)

#### Source

[shapes.ts:872](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L872)

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

[`Path`](/api-core/classes/path/).[`overlapRect`](/api-core/classes/path/#overlaprect)

#### Source

[shapes.ts:1510](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L1510)

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

[`Path`](/api-core/classes/path/).[`parseQueryString`](/api-core/classes/path/#parsequerystring)

#### Source

[shapes.ts:847](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L847)

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

[`Path`](/api-core/classes/path/).[`render`](/api-core/classes/path/#render)

#### Source

[shapes.ts:607](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L607)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Default render this shape

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Overrides

[`Path`](/api-core/classes/path/).[`renderDefault`](/api-core/classes/path/#renderdefault)

#### Source

[shapes.ts:2200](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L2200)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Inherited from

[`Path`](/api-core/classes/path/).[`renderOutline`](/api-core/classes/path/#renderoutline)

#### Source

[shapes.ts:630](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L630)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Return default outline

#### Returns

`number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`renderOutlineDefault`](/api-core/classes/path/#renderoutlinedefault)

#### Source

[shapes.ts:1521](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L1521)

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

[`Path`](/api-core/classes/path/).[`resolveRefs`](/api-core/classes/path/#resolverefs)

#### Source

[core/obj.ts:60](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L60)

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

[`Path`](/api-core/classes/path/).[`toJSON`](/api-core/classes/path/#tojson)

#### Source

[shapes.ts:1453](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L1453)

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

[`Path`](/api-core/classes/path/).[`traverse`](/api-core/classes/path/#traverse)

#### Source

[core/obj.ts:73](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L73)

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

[`Path`](/api-core/classes/path/).[`traverseDepthFirst`](/api-core/classes/path/#traversedepthfirst)

#### Source

[core/obj.ts:87](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L87)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Path`](/api-core/classes/path/).[`traverseDepthFirstSequence`](/api-core/classes/path/#traversedepthfirstsequence)

#### Source

[core/obj.ts:110](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L110)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Path`](/api-core/classes/path/).[`traverseSequence`](/api-core/classes/path/#traversesequence)

#### Source

[core/obj.ts:101](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/obj.ts#L101)

***

### update()

> **update**(`canvas`): `void`

Update shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Inherited from

[`Path`](/api-core/classes/path/).[`update`](/api-core/classes/path/#update)

#### Source

[shapes.ts:494](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/shapes.ts#L494)
