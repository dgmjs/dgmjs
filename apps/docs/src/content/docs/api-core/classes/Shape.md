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

[shapes.ts:330](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L330)

## Properties

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`children`](/api-core/classes/obj/#children)

#### Source

[core/obj.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L14)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Source

[shapes.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L198)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Source

[shapes.ts:298](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L298)

***

### containable

> **containable**: `boolean`

Containable flag

#### Source

[shapes.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L188)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Source

[shapes.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L193)

***

### description

> **description**: `string`

Description of the shape

#### Source

[shapes.ts:148](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L148)

***

### enable

> **enable**: `boolean`

Enable flag

#### Source

[shapes.ts:163](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L163)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Source

[shapes.ts:243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L243)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Source

[shapes.ts:248](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L248)

***

### fontColor

> **fontColor**: `string`

Font color

#### Source

[shapes.ts:253](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L253)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Source

[shapes.ts:258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L258)

***

### fontSize

> **fontSize**: `number`

Font size

#### Source

[shapes.ts:263](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L263)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Source

[shapes.ts:268](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L268)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Source

[shapes.ts:273](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L273)

***

### height

> **height**: `number`

Shape's height

#### Source

[shapes.ts:218](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L218)

***

### id

> **id**: `string`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`id`](/api-core/classes/obj/#id)

#### Source

[core/obj.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L11)

***

### left

> **left**: `number`

Shape's left position

#### Source

[shapes.ts:203](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L203)

***

### link

> **link**: `string`

Link

#### Source

[shapes.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L288)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Source

[shapes.ts:173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L173)

***

### name

> **name**: `string`

Name of the shape

#### Source

[shapes.ts:143](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L143)

***

### opacity

> **opacity**: `number`

Opacity

#### Source

[shapes.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L278)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`parent`](/api-core/classes/obj/#parent)

#### Source

[core/obj.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L13)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Source

[shapes.ts:303](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L303)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Source

[shapes.ts:153](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L153)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Source

[shapes.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L293)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Source

[shapes.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L183)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Source

[shapes.ts:223](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L223)

***

### roughness

> **roughness**: `number`

Roughness

#### Source

[shapes.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L283)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Source

[shapes.ts:308](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L308)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Source

[shapes.ts:178](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L178)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Source

[shapes.ts:228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L228)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Source

[shapes.ts:238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L238)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Source

[shapes.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L233)

***

### tags

> **tags**: `string`[]

Tags

#### Source

[shapes.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L158)

***

### top

> **top**: `number`

Shape's top position

#### Source

[shapes.ts:208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L208)

***

### type

> **type**: `string`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`type`](/api-core/classes/obj/#type)

#### Source

[core/obj.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L12)

***

### visible

> **visible**: `boolean`

Visible flag

#### Source

[shapes.ts:168](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L168)

***

### width

> **width**: `number`

Shape's width

#### Source

[shapes.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L213)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:472](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L472)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:468](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L468)

## Methods

### assignStyles()

> **assignStyles**(`canvas`): `void`

Assign styles to memoization canvas.

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:550](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L550)

***

### canContain()

> **canContain**(`shape`): `boolean`

Determine a given shape can be contained in this shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Source

[shapes.ts:942](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L942)

***

### computeOpacity()

> **computeOpacity**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:540](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L540)

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

[shapes.ts:819](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L819)

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

[shapes.ts:685](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L685)

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

[shapes.ts:699](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L699)

***

### finalize()

> **finalize**(`canvas`): `void`

Finalize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[shapes.ts:489](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L489)

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

[core/obj.ts:106](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L106)

***

### findAllByQuery()

> **findAllByQuery**(`queryString`): [`Shape`](/api-core/classes/shape/)[]

Find all shapes matched with the query string

#### Parameters

• **queryString**: `string`

#### Returns

[`Shape`](/api-core/classes/shape/)[]

#### Source

[shapes.ts:932](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L932)

***

### findByQuery()

> **findByQuery**(`queryString`): `null` \| [`Shape`](/api-core/classes/shape/)

Find a shape first matched with the query string

#### Parameters

• **queryString**: `any`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[shapes.ts:919](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L919)

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

[`Obj`](/api-core/classes/obj/).[`findParent`](/api-core/classes/obj/#findparent)

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

[`Obj`](/api-core/classes/obj/).[`fromJSON`](/api-core/classes/obj/#fromjson)

#### Source

[shapes.ts:419](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L419)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Source

[shapes.ts:746](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L746)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Source

[shapes.ts:739](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L739)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Source

[shapes.ts:772](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L772)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Source

[shapes.ts:806](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L806)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Source

[shapes.ts:674](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L674)

***

### getProperty()

> **getProperty**(`name`): `any`

Get a property object

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Source

[shapes.ts:954](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L954)

***

### getPropertyValue()

> **getPropertyValue**(`name`): `any`

Get a property value

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Source

[shapes.ts:964](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L964)

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

[shapes.ts:785](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L785)

***

### getScript()

> **getScript**(`id`): `undefined` \| `string`

Get a property object

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `string`

#### Source

[shapes.ts:972](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L972)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:476](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L476)

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

[shapes.ts:509](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L509)

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

[shapes.ts:759](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L759)

***

### initialze()

> **initialze**(`canvas`): `void`

Initialize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[shapes.ts:484](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L484)

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

#### Source

[shapes.ts:586](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L586)

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

[shapes.ts:606](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L606)

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

[shapes.ts:570](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L570)

***

### match()

> **match**(`query`): `boolean`

Returns true if query matches this shape

#### Parameters

• **query**: `object`[]

#### Returns

`boolean`

#### Source

[shapes.ts:894](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L894)

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

[shapes.ts:839](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L839)

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

[shapes.ts:869](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L869)

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

#### Source

[shapes.ts:629](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L629)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Default render this shape

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:647](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L647)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:652](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L652)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Render default outline

#### Returns

`number`[][]

#### Source

[shapes.ts:667](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L667)

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

[`Obj`](/api-core/classes/obj/).[`resolveRefs`](/api-core/classes/obj/#resolverefs)

#### Source

[shapes.ts:457](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L457)

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

[shapes.ts:377](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L377)

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

[`Obj`](/api-core/classes/obj/).[`traverseDepthFirst`](/api-core/classes/obj/#traversedepthfirst)

#### Source

[core/obj.ts:74](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L74)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`traverseDepthFirstSequence`](/api-core/classes/obj/#traversedepthfirstsequence)

#### Source

[core/obj.ts:97](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L97)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`traverseSequence`](/api-core/classes/obj/#traversesequence)

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

#### Source

[shapes.ts:499](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L499)

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

#### Source

[shapes.ts:529](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L529)
