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

[packages/core/src/shapes.ts:370](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L370)

## Properties

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`children`](/api-core/classes/obj/#children)

#### Source

[packages/core/src/core/obj.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L14)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Source

[packages/core/src/shapes.ts:218](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L218)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Source

[packages/core/src/shapes.ts:333](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L333)

***

### containable

> **containable**: `boolean`

Containable flag

#### Source

[packages/core/src/shapes.ts:203](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L203)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Source

[packages/core/src/shapes.ts:208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L208)

***

### description

> **description**: `string`

Description of the shape

#### Source

[packages/core/src/shapes.ts:163](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L163)

***

### enable

> **enable**: `boolean`

Enable flag

#### Source

[packages/core/src/shapes.ts:178](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L178)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Source

[packages/core/src/shapes.ts:263](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L263)

***

### fillStyle

> **fillStyle**: [`FillStyleEnum`](/api-core/type-aliases/fillstyleenum/)

Fill style

#### Source

[packages/core/src/shapes.ts:268](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L268)

***

### fontColor

> **fontColor**: `string`

Font color

#### Source

[packages/core/src/shapes.ts:273](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L273)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Source

[packages/core/src/shapes.ts:278](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L278)

***

### fontSize

> **fontSize**: `number`

Font size

#### Source

[packages/core/src/shapes.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L283)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Source

[packages/core/src/shapes.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L288)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Source

[packages/core/src/shapes.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L293)

***

### height

> **height**: `number`

Shape's height

#### Source

[packages/core/src/shapes.ts:238](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L238)

***

### id

> **id**: `string`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`id`](/api-core/classes/obj/#id)

#### Source

[packages/core/src/core/obj.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L11)

***

### left

> **left**: `number`

Shape's left position

#### Source

[packages/core/src/shapes.ts:223](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L223)

***

### link

> **link**: `string`

Link

#### Source

[packages/core/src/shapes.ts:323](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L323)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Source

[packages/core/src/shapes.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L188)

***

### movableParentFilter

> **movableParentFilter**: `string`

Movable parent filter

#### Source

[packages/core/src/shapes.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L213)

***

### name

> **name**: `string`

Name of the shape

#### Source

[packages/core/src/shapes.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L158)

***

### opacity

> **opacity**: `number`

Opacity

#### Source

[packages/core/src/shapes.ts:298](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L298)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`parent`](/api-core/classes/obj/#parent)

#### Source

[packages/core/src/core/obj.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L13)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Source

[packages/core/src/shapes.ts:338](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L338)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Source

[packages/core/src/shapes.ts:168](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L168)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Source

[packages/core/src/shapes.ts:328](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L328)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Source

[packages/core/src/shapes.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L198)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Source

[packages/core/src/shapes.ts:243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L243)

***

### roughness

> **roughness**: `number`

Roughness

#### Source

[packages/core/src/shapes.ts:303](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L303)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Source

[packages/core/src/shapes.ts:343](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L343)

***

### shadow

> **shadow**: `boolean`

Shadow

#### Source

[packages/core/src/shapes.ts:308](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L308)

***

### shadowColor

> **shadowColor**: `string`

Shadow color

#### Source

[packages/core/src/shapes.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L313)

***

### shadowOffset

> **shadowOffset**: `number`[]

Shadow offset

#### Source

[packages/core/src/shapes.ts:318](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L318)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Source

[packages/core/src/shapes.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L193)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Source

[packages/core/src/shapes.ts:248](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L248)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Source

[packages/core/src/shapes.ts:258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L258)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Source

[packages/core/src/shapes.ts:253](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L253)

***

### tags

> **tags**: `string`[]

Tags

#### Source

[packages/core/src/shapes.ts:173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L173)

***

### top

> **top**: `number`

Shape's top position

#### Source

[packages/core/src/shapes.ts:228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L228)

***

### type

> **type**: `string`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`type`](/api-core/classes/obj/#type)

#### Source

[packages/core/src/core/obj.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L12)

***

### visible

> **visible**: `boolean`

Visible flag

#### Source

[packages/core/src/shapes.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L183)

***

### width

> **width**: `number`

Shape's width

#### Source

[packages/core/src/shapes.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L233)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:576](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L576)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:572](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L572)

## Methods

### assignStyles()

> **assignStyles**(`canvas`): `void`

Assign styles to memoization canvas.

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[packages/core/src/shapes.ts:686](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L686)

***

### canContain()

> **canContain**(`shape`): `boolean`

Determine a given shape can be contained in this shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Source

[packages/core/src/shapes.ts:1144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1144)

***

### computeOpacity()

> **computeOpacity**(): `number`

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:676](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L676)

***

### containsPoint()

> **containsPoint**(`canvas`, `point`, `regardFillStyle`): `boolean`

Determines whether this shape contains a point in GCS

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

• **regardFillStyle**: `boolean`= `true`

#### Returns

`boolean`

#### Source

[packages/core/src/shapes.ts:1001](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1001)

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

[packages/core/src/shapes.ts:832](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L832)

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

[packages/core/src/shapes.ts:846](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L846)

***

### finalize()

> **finalize**(`canvas`): `void`

Finalize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[packages/core/src/shapes.ts:596](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L596)

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

[packages/core/src/core/obj.ts:363](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L363)

***

### findAllByQuery()

> **findAllByQuery**(`queryString`): [`Shape`](/api-core/classes/shape/)[]

Find all shapes matched with the query string

#### Parameters

• **queryString**: `string`

#### Returns

[`Shape`](/api-core/classes/shape/)[]

#### Source

[packages/core/src/shapes.ts:1134](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1134)

***

### findByQuery()

> **findByQuery**(`queryString`): `null` \| [`Shape`](/api-core/classes/shape/)

Find a shape first matched with the query string

#### Parameters

• **queryString**: `any`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[packages/core/src/shapes.ts:1121](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1121)

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

[packages/core/src/core/obj.ts:376](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L376)

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

[packages/core/src/core/obj.ts:389](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L389)

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

[packages/core/src/shapes.ts:499](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L499)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Source

[packages/core/src/shapes.ts:893](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L893)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Source

[packages/core/src/shapes.ts:886](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L886)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Source

[packages/core/src/shapes.ts:954](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L954)

***

### getContainerAt()

> **getContainerAt**(`canvas`, `point`, `exceptions`): `null` \| [`Shape`](/api-core/classes/shape/)

Pick a container shape at specific position (x, y)

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **point**: `number`[]

• **exceptions**: [`Shape`](/api-core/classes/shape/)[]= `[]`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[packages/core/src/shapes.ts:643](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L643)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Source

[packages/core/src/shapes.ts:988](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L988)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Source

[packages/core/src/shapes.ts:821](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L821)

***

### getPage()

> **getPage**(): `null` \| [`Page`](/api-core/classes/page/)

Return the page that contains this shape

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[packages/core/src/shapes.ts:568](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L568)

***

### getProperty()

> **getProperty**(`name`): `any`

Get a property object

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Source

[packages/core/src/shapes.ts:1156](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1156)

***

### getPropertyValue()

> **getPropertyValue**(`name`): `any`

Get a property value

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Source

[packages/core/src/shapes.ts:1166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1166)

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

[packages/core/src/shapes.ts:967](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L967)

***

### getScript()

> **getScript**(`id`): `undefined` \| `string`

Get a property object

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `string`

#### Source

[packages/core/src/shapes.ts:1174](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1174)

***

### getSeed()

> **getSeed**(): `number`

Return the seed number

#### Returns

`number`

#### Source

[packages/core/src/shapes.ts:583](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L583)

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

[packages/core/src/shapes.ts:616](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L616)

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

[packages/core/src/shapes.ts:944](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L944)

***

### initialze()

> **initialze**(`canvas`): `void`

Initialize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[packages/core/src/shapes.ts:591](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L591)

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

[packages/core/src/core/obj.ts:399](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L399)

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

[packages/core/src/shapes.ts:722](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L722)

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

[packages/core/src/shapes.ts:742](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L742)

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

[packages/core/src/shapes.ts:706](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L706)

***

### match()

> **match**(`query`): `boolean`

Returns true if query matches this shape

#### Parameters

• **query**: `object`[]

#### Returns

`boolean`

#### Source

[packages/core/src/shapes.ts:1097](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1097)

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

[packages/core/src/shapes.ts:1028](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1028)

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

[packages/core/src/shapes.ts:1035](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1035)

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

[packages/core/src/shapes.ts:1072](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1072)

***

### readAny()

> **readAny**(`json`, `field`, `defaultValue`): `any`

Read an any value from the JSON object,
return defaultValue if the field is undefined.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `any`

#### Returns

`any`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readAny`](/api-core/classes/obj/#readany)

#### Source

[packages/core/src/core/obj.ts:54](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L54)

***

### readArrayAny()

> **readArrayAny**(`json`, `field`, `defaultValue`): `any`[]

Read an array of any value from the JSON object,
return defaultValue if the field is not an array.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `any`[]

#### Returns

`any`[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readArrayAny`](/api-core/classes/obj/#readarrayany)

#### Source

[packages/core/src/core/obj.ts:65](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L65)

***

### readArrayBoolean()

> **readArrayBoolean**(`json`, `field`, `defaultValue`, `length`?): `boolean`[]

Read an array of boolean from the JSON object,
return defaultValue if the field is not an array of boolean.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `boolean`[]

• **length?**: `number`

#### Returns

`boolean`[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readArrayBoolean`](/api-core/classes/obj/#readarrayboolean)

#### Source

[packages/core/src/core/obj.ts:148](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L148)

***

### readArrayNumber()

> **readArrayNumber**(`json`, `field`, `defaultValue`, `length`?): `number`[]

Read a number field from the JSON object,
return defaultValue if the field is not a number.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `number`[]

• **length?**: `number`

#### Returns

`number`[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readArrayNumber`](/api-core/classes/obj/#readarraynumber)

#### Source

[packages/core/src/core/obj.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L87)

***

### readArrayPoint()

> **readArrayPoint**(`json`, `field`, `defaultValue`): [`number`, `number`][]

Read a, array of point value from the JSON object,
return defaultValue if the field is not an array of point.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: [`number`, `number`][]

#### Returns

[`number`, `number`][]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readArrayPoint`](/api-core/classes/obj/#readarraypoint)

#### Source

[packages/core/src/core/obj.ts:256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L256)

***

### readArrayString()

> **readArrayString**(`json`, `field`, `defaultValue`): `string`[]

Read an array of string from the JSON object,
return defaultValue if the field is not an array of string.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `string`[]

#### Returns

`string`[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readArrayString`](/api-core/classes/obj/#readarraystring)

#### Source

[packages/core/src/core/obj.ts:123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L123)

***

### readBoolean()

> **readBoolean**(`json`, `field`, `defaultValue`): `boolean`

Read a boolean field from the JSON object,
return defaultValue if the field is not a boolean.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `boolean`

#### Returns

`boolean`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readBoolean`](/api-core/classes/obj/#readboolean)

#### Source

[packages/core/src/core/obj.ts:137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L137)

***

### readColor()

> **readColor**(`json`, `field`, `defaultValue`): `string`

Read a color field from the JSON object,
return defaultValue if the field is not a string or not a valid color.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `string`

#### Returns

`string`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readColor`](/api-core/classes/obj/#readcolor)

#### Source

[packages/core/src/core/obj.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L170)

***

### readEnum()

> **readEnum**(`json`, `field`, `enumType`, `defaultValue`): `string`

Read an enum value from the JSON object,
return defaultValue if the field is not a valid enum value.

#### Parameters

• **json**: `any`

• **field**: `string`

• **enumType**: `any`

• **defaultValue**: `string`

#### Returns

`string`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readEnum`](/api-core/classes/obj/#readenum)

#### Source

[packages/core/src/core/obj.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L185)

***

### readNumber()

> **readNumber**(`json`, `field`, `defaultValue`): `number`

Read a number field from the JSON object,
return defaultValue if the field is not a number.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `number`

#### Returns

`number`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readNumber`](/api-core/classes/obj/#readnumber)

#### Source

[packages/core/src/core/obj.ts:76](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L76)

***

### readPoint()

> **readPoint**(`json`, `field`, `defaultValue`): [`number`, `number`]

Read a point value from the JSON object,
return defaultValue if the field is not a point.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: [`number`, `number`]

#### Returns

[`number`, `number`]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readPoint`](/api-core/classes/obj/#readpoint)

#### Source

[packages/core/src/core/obj.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L213)

***

### readPointOrNull()

> **readPointOrNull**(`json`, `field`, `defaultValue`): `null` \| [`number`, `number`]

Read a point or null value from the JSON object,
return defaultValue if the field is not a point or null.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `null` \| [`number`, `number`]

#### Returns

`null` \| [`number`, `number`]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readPointOrNull`](/api-core/classes/obj/#readpointornull)

#### Source

[packages/core/src/core/obj.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L233)

***

### readRef()

> **readRef**(`json`, `field`): `null` \| `string`

Read a reference to object from the JSON object,
return defaultValue if the field is not string (obj's id) or null.

#### Parameters

• **json**: `any`

• **field**: `string`

#### Returns

`null` \| `string`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readRef`](/api-core/classes/obj/#readref)

#### Source

[packages/core/src/core/obj.ts:202](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L202)

***

### readString()

> **readString**(`json`, `field`, `defaultValue`): `string`

Read a string field from the JSON object,
return defaultValue if the field is not a string.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `string`

#### Returns

`string`

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`readString`](/api-core/classes/obj/#readstring)

#### Source

[packages/core/src/core/obj.ts:112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L112)

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

[packages/core/src/shapes.ts:765](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L765)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Default render this shape

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[packages/core/src/shapes.ts:785](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L785)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[packages/core/src/shapes.ts:790](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L790)

***

### renderOutlineDefault()

> **renderOutlineDefault**(`canvas`): `number`[][]

Render default outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`number`[][]

#### Source

[packages/core/src/shapes.ts:809](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L809)

***

### renderShadow()

> **renderShadow**(`canvas`): `void`

Render shadow

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[packages/core/src/shapes.ts:816](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L816)

***

### renderViewport()

> **renderViewport**(`canvas`): `void`

Return this shape's viewport

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[packages/core/src/shapes.ts:903](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L903)

***

### renderViewportDefault()

> **renderViewportDefault**(`canvas`): `number`[][]

Render default viewport

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`number`[][]

#### Source

[packages/core/src/shapes.ts:922](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L922)

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

[packages/core/src/shapes.ts:554](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L554)

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

[packages/core/src/core/obj.ts:31](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L31)

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

[packages/core/src/shapes.ts:422](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L422)

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

[packages/core/src/core/obj.ts:317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L317)

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

[packages/core/src/core/obj.ts:331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L331)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`traverseDepthFirstSequence`](/api-core/classes/obj/#traversedepthfirstsequence)

#### Source

[packages/core/src/core/obj.ts:354](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L354)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Obj`](/api-core/classes/obj/).[`traverseSequence`](/api-core/classes/obj/#traversesequence)

#### Source

[packages/core/src/core/obj.ts:345](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L345)

***

### update()

> **update**(`canvas`): `void`

Update shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[packages/core/src/shapes.ts:606](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L606)

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

[packages/core/src/shapes.ts:665](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L665)
