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

[shapes.ts:357](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L357)

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

[shapes.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L205)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Source

[shapes.ts:320](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L320)

***

### containable

> **containable**: `boolean`

Containable flag

#### Source

[shapes.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L195)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Source

[shapes.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L200)

***

### description

> **description**: `string`

Description of the shape

#### Source

[shapes.ts:155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L155)

***

### enable

> **enable**: `boolean`

Enable flag

#### Source

[shapes.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L170)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Source

[shapes.ts:250](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L250)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Source

[shapes.ts:255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L255)

***

### fontColor

> **fontColor**: `string`

Font color

#### Source

[shapes.ts:260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L260)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Source

[shapes.ts:265](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L265)

***

### fontSize

> **fontSize**: `number`

Font size

#### Source

[shapes.ts:270](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L270)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Source

[shapes.ts:275](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L275)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Source

[shapes.ts:280](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L280)

***

### height

> **height**: `number`

Shape's height

#### Source

[shapes.ts:225](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L225)

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

[shapes.ts:210](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L210)

***

### link

> **link**: `string`

Link

#### Source

[shapes.ts:310](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L310)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Source

[shapes.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L180)

***

### name

> **name**: `string`

Name of the shape

#### Source

[shapes.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L150)

***

### opacity

> **opacity**: `number`

Opacity

#### Source

[shapes.ts:285](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L285)

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

[shapes.ts:325](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L325)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Source

[shapes.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L160)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Source

[shapes.ts:315](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L315)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Source

[shapes.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L190)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Source

[shapes.ts:230](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L230)

***

### roughness

> **roughness**: `number`

Roughness

#### Source

[shapes.ts:290](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L290)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Source

[shapes.ts:330](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L330)

***

### shadow

> **shadow**: `boolean`

Shadow

#### Source

[shapes.ts:295](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L295)

***

### shadowColor

> **shadowColor**: `string`

Shadow color

#### Source

[shapes.ts:300](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L300)

***

### shadowOffset

> **shadowOffset**: `number`[]

Shadow offset

#### Source

[shapes.ts:305](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L305)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Source

[shapes.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L185)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Source

[shapes.ts:235](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L235)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Source

[shapes.ts:245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L245)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Source

[shapes.ts:240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L240)

***

### tags

> **tags**: `string`[]

Tags

#### Source

[shapes.ts:165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L165)

***

### top

> **top**: `number`

Shape's top position

#### Source

[shapes.ts:215](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L215)

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

[shapes.ts:175](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L175)

***

### width

> **width**: `number`

Shape's width

#### Source

[shapes.ts:220](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L220)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:512](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L512)

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

#### Source

[shapes.ts:1036](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1036)

***

### computeOpacity()

> **computeOpacity**(): `number`

#### Returns

`number`

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

[shapes.ts:1026](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1026)

***

### findByQuery()

> **findByQuery**(`queryString`): `null` \| [`Shape`](/api-core/classes/shape/)

Find a shape first matched with the query string

#### Parameters

• **queryString**: `any`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

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

[shapes.ts:456](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L456)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Source

[shapes.ts:794](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L794)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Source

[shapes.ts:787](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L787)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Source

[shapes.ts:849](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L849)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Source

[shapes.ts:883](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L883)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

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

#### Source

[shapes.ts:1066](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1066)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

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

#### Source

[shapes.ts:963](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L963)

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

[shapes.ts:669](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L669)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Default render this shape

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:689](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L689)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:694](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L694)

***

### renderOutlineDefault()

> **renderOutlineDefault**(`canvas`): `number`[][]

Render default outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`number`[][]

#### Source

[shapes.ts:710](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L710)

***

### renderShadow()

> **renderShadow**(`canvas`): `void`

Render shadow

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:717](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L717)

***

### renderViewport()

> **renderViewport**(`canvas`): `void`

Return this shape's viewport

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

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

#### Overrides

[`Obj`](/api-core/classes/obj/).[`resolveRefs`](/api-core/classes/obj/#resolverefs)

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

#### Overrides

[`Obj`](/api-core/classes/obj/).[`toJSON`](/api-core/classes/obj/#tojson)

#### Source

[shapes.ts:408](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L408)

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

#### Source

[shapes.ts:569](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L569)
