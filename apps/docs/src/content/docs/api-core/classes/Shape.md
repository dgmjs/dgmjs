---
editUrl: false
next: false
prev: false
title: "Shape"
---

Shape object.
A shape object has following features:
1. can be serialized (store and copy-paste)
2. can have many children shapes
3. can have multple scripts
4. can have multiple constraints
5. can have a manipulator
6. has it's own coordinate system (rotate)

## Extends

- [`Obj`](/api-core/classes/obj/)

## Constructors

### new Shape()

> **new Shape**(): [`Shape`](/api-core/classes/shape/)

#### Returns

[`Shape`](/api-core/classes/shape/)

#### Overrides

[`Obj`](/api-core/classes/obj/).[`constructor`](/api-core/classes/obj/#constructors)

#### Source

[shapes.ts:339](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L339)

## Properties

### \_linkDOM

> **\_linkDOM**: `null` \| `HTMLAnchorElement`

Link DOM element

#### Source

[shapes.ts:337](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L337)

***

### \_memoCanvas

> **\_memoCanvas**: `MemoizationCanvas`

Memoization canvas

#### Source

[shapes.ts:327](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L327)

***

### \_memoOutline

> **\_memoOutline**: `number`[][]

Memoization outline

#### Source

[shapes.ts:332](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L332)

***

### \_memoSeed

> **\_memoSeed**: `null` \| `number`

Memoize seed

#### Source

[shapes.ts:322](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L322)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`children`](/api-core/classes/obj/#children)

#### Source

[core/obj.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L27)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Source

[shapes.ts:212](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L212)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Source

[shapes.ts:307](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L307)

***

### containable

> **containable**: `boolean`

Containable flag

#### Source

[shapes.ts:202](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L202)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Source

[shapes.ts:207](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L207)

***

### description

> **description**: `string`

Description of the shape

#### Source

[shapes.ts:162](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L162)

***

### enable

> **enable**: `boolean`

Enable flag

#### Source

[shapes.ts:177](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L177)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Source

[shapes.ts:257](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L257)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Source

[shapes.ts:262](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L262)

***

### fontColor

> **fontColor**: `string`

Font color

#### Source

[shapes.ts:267](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L267)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Source

[shapes.ts:272](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L272)

***

### fontSize

> **fontSize**: `number`

Font size

#### Source

[shapes.ts:277](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L277)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Source

[shapes.ts:282](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L282)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Source

[shapes.ts:287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L287)

***

### height

> **height**: `number`

Shape's height

#### Source

[shapes.ts:232](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L232)

***

### id

> **id**: `string`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`id`](/api-core/classes/obj/#id)

#### Source

[core/obj.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L24)

***

### left

> **left**: `number`

Shape's left position

#### Source

[shapes.ts:217](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L217)

***

### link

> **link**: `string`

Link

#### Source

[shapes.ts:302](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L302)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Source

[shapes.ts:187](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L187)

***

### name

> **name**: `string`

Name of the shape

#### Source

[shapes.ts:157](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L157)

***

### opacity

> **opacity**: `number`

Opacity

#### Source

[shapes.ts:292](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L292)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`parent`](/api-core/classes/obj/#parent)

#### Source

[core/obj.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L26)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Source

[shapes.ts:312](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L312)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Source

[shapes.ts:167](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L167)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Source

[shapes.ts:197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L197)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Source

[shapes.ts:237](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L237)

***

### roughness

> **roughness**: `number`

Roughness

#### Source

[shapes.ts:297](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L297)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Source

[shapes.ts:317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L317)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Source

[shapes.ts:192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L192)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Source

[shapes.ts:242](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L242)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Source

[shapes.ts:252](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L252)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Source

[shapes.ts:247](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L247)

***

### tags

> **tags**: `string`[]

Tags

#### Source

[shapes.ts:172](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L172)

***

### top

> **top**: `number`

Shape's top position

#### Source

[shapes.ts:222](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L222)

***

### type

> **type**: `string`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`type`](/api-core/classes/obj/#type)

#### Source

[core/obj.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L25)

***

### visible

> **visible**: `boolean`

Visible flag

#### Source

[shapes.ts:182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L182)

***

### width

> **width**: `number`

Shape's width

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

[`Obj`](/api-core/classes/obj/).[`find`](/api-core/classes/obj/#find)

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

[`Obj`](/api-core/classes/obj/).[`findDepthFirst`](/api-core/classes/obj/#finddepthfirst)

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

[`Obj`](/api-core/classes/obj/).[`findParent`](/api-core/classes/obj/#findparent)

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

[`Obj`](/api-core/classes/obj/).[`fromJSON`](/api-core/classes/obj/#fromjson)

#### Source

[shapes.ts:426](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L426)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Source

[shapes.ts:724](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L724)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Source

[shapes.ts:717](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L717)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Source

[shapes.ts:750](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L750)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Source

[shapes.ts:784](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L784)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

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

#### Source

[shapes.ts:950](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L950)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

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

#### Source

[shapes.ts:737](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L737)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

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

[`Obj`](/api-core/classes/obj/).[`isDescendant`](/api-core/classes/obj/#isdescendant)

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

#### Source

[shapes.ts:630](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L630)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Render default outline

#### Returns

`number`[][]

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

[`Obj`](/api-core/classes/obj/).[`resolveRefs`](/api-core/classes/obj/#resolverefs)

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

[`Obj`](/api-core/classes/obj/).[`toJSON`](/api-core/classes/obj/#tojson)

#### Source

[shapes.ts:385](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L385)

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

[`Obj`](/api-core/classes/obj/).[`traverse`](/api-core/classes/obj/#traverse)

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

[`Obj`](/api-core/classes/obj/).[`traverseDepthFirst`](/api-core/classes/obj/#traversedepthfirst)

#### Source

[core/obj.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L87)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`traverseDepthFirstSequence`](/api-core/classes/obj/#traversedepthfirstsequence)

#### Source

[core/obj.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L110)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`traverseSequence`](/api-core/classes/obj/#traversesequence)

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

#### Source

[shapes.ts:494](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L494)
