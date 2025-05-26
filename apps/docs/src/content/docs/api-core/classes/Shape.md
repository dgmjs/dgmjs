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

[shapes.ts:370](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L370)

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

[shapes.ts:218](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L218)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Source

[shapes.ts:333](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L333)

***

### containable

> **containable**: `boolean`

Containable flag

#### Source

[shapes.ts:203](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L203)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Source

[shapes.ts:208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L208)

***

### description

> **description**: `string`

Description of the shape

#### Source

[shapes.ts:163](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L163)

***

### enable

> **enable**: `boolean`

Enable flag

#### Source

[shapes.ts:178](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L178)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Source

[shapes.ts:263](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L263)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Source

[shapes.ts:268](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L268)

***

### fontColor

> **fontColor**: `string`

Font color

#### Source

[shapes.ts:273](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L273)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Source

[shapes.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L278)

***

### fontSize

> **fontSize**: `number`

Font size

#### Source

[shapes.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L283)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Source

[shapes.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L288)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Source

[shapes.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L293)

***

### height

> **height**: `number`

Shape's height

#### Source

[shapes.ts:238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L238)

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

[shapes.ts:223](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L223)

***

### link

> **link**: `string`

Link

#### Source

[shapes.ts:323](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L323)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Source

[shapes.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L188)

***

### movableParentFilter

> **movableParentFilter**: `string`

Movable parent filter

#### Source

[shapes.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L213)

***

### name

> **name**: `string`

Name of the shape

#### Source

[shapes.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L158)

***

### opacity

> **opacity**: `number`

Opacity

#### Source

[shapes.ts:298](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L298)

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

[shapes.ts:338](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L338)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Source

[shapes.ts:168](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L168)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Source

[shapes.ts:328](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L328)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Source

[shapes.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L198)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Source

[shapes.ts:243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L243)

***

### roughness

> **roughness**: `number`

Roughness

#### Source

[shapes.ts:303](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L303)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Source

[shapes.ts:343](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L343)

***

### shadow

> **shadow**: `boolean`

Shadow

#### Source

[shapes.ts:308](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L308)

***

### shadowColor

> **shadowColor**: `string`

Shadow color

#### Source

[shapes.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L313)

***

### shadowOffset

> **shadowOffset**: `number`[]

Shadow offset

#### Source

[shapes.ts:318](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L318)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Source

[shapes.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L193)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Source

[shapes.ts:248](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L248)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Source

[shapes.ts:258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L258)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Source

[shapes.ts:253](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L253)

***

### tags

> **tags**: `string`[]

Tags

#### Source

[shapes.ts:173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L173)

***

### top

> **top**: `number`

Shape's top position

#### Source

[shapes.ts:228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L228)

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

[shapes.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L183)

***

### width

> **width**: `number`

Shape's width

#### Source

[shapes.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L233)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:563](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L563)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:559](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L559)

## Methods

### assignStyles()

> **assignStyles**(`canvas`): `void`

Assign styles to memoization canvas.

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:653](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L653)

***

### canContain()

> **canContain**(`shape`): `boolean`

Determine a given shape can be contained in this shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Source

[shapes.ts:1107](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1107)

***

### computeOpacity()

> **computeOpacity**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:643](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L643)

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

[shapes.ts:968](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L968)

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

[shapes.ts:799](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L799)

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

[shapes.ts:813](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L813)

***

### finalize()

> **finalize**(`canvas`): `void`

Finalize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[shapes.ts:583](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L583)

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

[core/obj.ts:147](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L147)

***

### findAllByQuery()

> **findAllByQuery**(`queryString`): [`Shape`](/api-core/classes/shape/)[]

Find all shapes matched with the query string

#### Parameters

• **queryString**: `string`

#### Returns

[`Shape`](/api-core/classes/shape/)[]

#### Source

[shapes.ts:1097](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1097)

***

### findByQuery()

> **findByQuery**(`queryString`): `null` \| [`Shape`](/api-core/classes/shape/)

Find a shape first matched with the query string

#### Parameters

• **queryString**: `any`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[shapes.ts:1084](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1084)

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

[core/obj.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L160)

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

[core/obj.ts:173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L173)

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

[shapes.ts:499](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L499)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Source

[shapes.ts:860](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L860)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Source

[shapes.ts:853](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L853)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Source

[shapes.ts:921](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L921)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Source

[shapes.ts:955](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L955)

***

### getJson()

> **getJson**(`json`, `field`, `defaultValue`): `any`

Get a field from the JSON object, return defaultValue if the field is not defined.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `any`

#### Returns

`any`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`getJson`](/api-core/classes/obj/#getjson)

#### Source

[core/obj.ts:53](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L53)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Source

[shapes.ts:788](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L788)

***

### getPage()

> **getPage**(): `null` \| [`Page`](/api-core/classes/page/)

Return the page that contains this shape

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[shapes.ts:555](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L555)

***

### getProperty()

> **getProperty**(`name`): `any`

Get a property object

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Source

[shapes.ts:1119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1119)

***

### getPropertyValue()

> **getPropertyValue**(`name`): `any`

Get a property value

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Source

[shapes.ts:1129](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1129)

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

[shapes.ts:934](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L934)

***

### getScript()

> **getScript**(`id`): `undefined` \| `string`

Get a property object

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `string`

#### Source

[shapes.ts:1137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1137)

***

### getSeed()

> **getSeed**(): `number`

Return the seed number

#### Returns

`number`

#### Source

[shapes.ts:570](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L570)

***

### getShapeAt()

> **getShapeAt**(`canvas`, `point`, `exceptions`, `allowDisabledAndInvisible`): `null` \| [`Shape`](/api-core/classes/shape/)

Pick a shape at specific position (x, y)

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

• **exceptions**: [`Shape`](/api-core/classes/shape/)[]= `[]`

• **allowDisabledAndInvisible**: `boolean`= `false`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[shapes.ts:603](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L603)

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

[shapes.ts:911](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L911)

***

### initialze()

> **initialze**(`canvas`): `void`

Initialize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[shapes.ts:578](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L578)

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

[core/obj.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L183)

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

[shapes.ts:689](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L689)

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

[shapes.ts:709](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L709)

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

[shapes.ts:673](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L673)

***

### match()

> **match**(`query`): `boolean`

Returns true if query matches this shape

#### Parameters

• **query**: `object`[]

#### Returns

`boolean`

#### Source

[shapes.ts:1060](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1060)

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

[shapes.ts:991](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L991)

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

[shapes.ts:998](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L998)

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

[shapes.ts:1035](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1035)

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

[shapes.ts:732](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L732)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Default render this shape

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:752](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L752)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:757](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L757)

***

### renderOutlineDefault()

> **renderOutlineDefault**(`canvas`): `number`[][]

Render default outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`number`[][]

#### Source

[shapes.ts:776](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L776)

***

### renderShadow()

> **renderShadow**(`canvas`): `void`

Render shadow

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:783](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L783)

***

### renderViewport()

> **renderViewport**(`canvas`): `void`

Return this shape's viewport

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:870](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L870)

***

### renderViewportDefault()

> **renderViewportDefault**(`canvas`): `number`[][]

Render default viewport

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`number`[][]

#### Source

[shapes.ts:889](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L889)

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

[shapes.ts:541](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L541)

***

### setJson()

> **setJson**(`json`, `field`, `value`, `defaultValue`, `enforce`): `void`

Set a field in the JSON object only if the value is defined and not equal to the default value.

#### Parameters

• **json**: `any`

The JSON object to set the field in.

• **field**: `string`

The field name to set.

• **value**: `any`

The value to set.

• **defaultValue**: `any`

The default value to compare against.

• **enforce**: `boolean`= `false`

If true, the field will be set even if it is equal to the default value.

#### Returns

`void`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`setJson`](/api-core/classes/obj/#setjson)

#### Source

[core/obj.ts:31](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L31)

***

### toJSON()

> **toJSON**(`recursive`, `keepRefs`, `enforce`): `any`

Export shape to JSON

#### Parameters

• **recursive**: `boolean`= `false`

• **keepRefs**: `boolean`= `false`

• **enforce**: `boolean`= `false`

#### Returns

`any`

#### Overrides

[`Obj`](/api-core/classes/obj/).[`toJSON`](/api-core/classes/obj/#tojson)

#### Source

[shapes.ts:422](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L422)

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

[core/obj.ts:101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L101)

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

[core/obj.ts:115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L115)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`traverseDepthFirstSequence`](/api-core/classes/obj/#traversedepthfirstsequence)

#### Source

[core/obj.ts:138](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L138)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`traverseSequence`](/api-core/classes/obj/#traversesequence)

#### Source

[core/obj.ts:129](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L129)

***

### update()

> **update**(`canvas`): `void`

Update shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[shapes.ts:593](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L593)

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

[shapes.ts:632](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L632)
