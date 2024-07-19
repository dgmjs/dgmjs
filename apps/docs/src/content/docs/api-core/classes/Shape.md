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

[shapes.ts:332](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L332)

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

[shapes.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L200)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Source

[shapes.ts:300](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L300)

***

### containable

> **containable**: `boolean`

Containable flag

#### Source

[shapes.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L190)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Source

[shapes.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L195)

***

### description

> **description**: `string`

Description of the shape

#### Source

[shapes.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L150)

***

### enable

> **enable**: `boolean`

Enable flag

#### Source

[shapes.ts:165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L165)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Source

[shapes.ts:245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L245)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Source

[shapes.ts:250](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L250)

***

### fontColor

> **fontColor**: `string`

Font color

#### Source

[shapes.ts:255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L255)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Source

[shapes.ts:260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L260)

***

### fontSize

> **fontSize**: `number`

Font size

#### Source

[shapes.ts:265](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L265)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Source

[shapes.ts:270](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L270)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Source

[shapes.ts:275](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L275)

***

### height

> **height**: `number`

Shape's height

#### Source

[shapes.ts:220](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L220)

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

[shapes.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L205)

***

### link

> **link**: `string`

Link

#### Source

[shapes.ts:290](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L290)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Source

[shapes.ts:175](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L175)

***

### name

> **name**: `string`

Name of the shape

#### Source

[shapes.ts:145](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L145)

***

### opacity

> **opacity**: `number`

Opacity

#### Source

[shapes.ts:280](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L280)

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

[shapes.ts:305](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L305)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Source

[shapes.ts:155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L155)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Source

[shapes.ts:295](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L295)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Source

[shapes.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L185)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Source

[shapes.ts:225](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L225)

***

### roughness

> **roughness**: `number`

Roughness

#### Source

[shapes.ts:285](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L285)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Source

[shapes.ts:310](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L310)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Source

[shapes.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L180)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Source

[shapes.ts:230](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L230)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Source

[shapes.ts:240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L240)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Source

[shapes.ts:235](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L235)

***

### tags

> **tags**: `string`[]

Tags

#### Source

[shapes.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L160)

***

### top

> **top**: `number`

Shape's top position

#### Source

[shapes.ts:210](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L210)

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

[shapes.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L170)

***

### width

> **width**: `number`

Shape's width

#### Source

[shapes.ts:215](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L215)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:474](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L474)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:470](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L470)

## Methods

### assignStyles()

> **assignStyles**(`canvas`): `void`

Assign styles to memoization canvas.

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:535](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L535)

***

### canContain()

> **canContain**(`shape`): `boolean`

Determine a given shape can be contained in this shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Source

[shapes.ts:927](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L927)

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

[shapes.ts:804](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L804)

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

[shapes.ts:670](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L670)

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

[shapes.ts:684](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L684)

***

### finalize()

> **finalize**(`canvas`): `void`

Finalize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[shapes.ts:491](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L491)

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

[shapes.ts:917](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L917)

***

### findByQuery()

> **findByQuery**(`queryString`): `null` \| [`Shape`](/api-core/classes/shape/)

Find a shape first matched with the query string

#### Parameters

• **queryString**: `any`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[shapes.ts:904](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L904)

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

[shapes.ts:421](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L421)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Source

[shapes.ts:731](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L731)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Source

[shapes.ts:724](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L724)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Source

[shapes.ts:757](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L757)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Source

[shapes.ts:791](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L791)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Source

[shapes.ts:659](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L659)

***

### getProperty()

> **getProperty**(`name`): `any`

Get a property object

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Source

[shapes.ts:939](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L939)

***

### getPropertyValue()

> **getPropertyValue**(`name`): `any`

Get a property value

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Source

[shapes.ts:949](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L949)

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

[shapes.ts:770](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L770)

***

### getScript()

> **getScript**(`id`): `undefined` \| `string`

Get a property object

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `string`

#### Source

[shapes.ts:957](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L957)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:478](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L478)

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

[shapes.ts:510](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L510)

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

[shapes.ts:744](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L744)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[shapes.ts:528](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L528)

***

### initialze()

> **initialze**(`canvas`): `void`

Initialize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[shapes.ts:486](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L486)

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

[shapes.ts:571](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L571)

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

[shapes.ts:591](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L591)

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

[shapes.ts:555](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L555)

***

### match()

> **match**(`query`): `boolean`

Returns true if query matches this shape

#### Parameters

• **query**: `object`[]

#### Returns

`boolean`

#### Source

[shapes.ts:879](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L879)

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

[shapes.ts:824](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L824)

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

[shapes.ts:854](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L854)

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

[shapes.ts:614](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L614)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Default render this shape

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:632](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L632)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:637](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L637)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Render default outline

#### Returns

`number`[][]

#### Source

[shapes.ts:652](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L652)

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

[shapes.ts:459](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L459)

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

[shapes.ts:379](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L379)

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

[shapes.ts:501](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L501)
