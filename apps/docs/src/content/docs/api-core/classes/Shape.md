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

[shapes.ts:356](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L356)

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

[shapes.ts:204](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L204)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Source

[shapes.ts:319](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L319)

***

### containable

> **containable**: `boolean`

Containable flag

#### Source

[shapes.ts:194](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L194)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Source

[shapes.ts:199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L199)

***

### description

> **description**: `string`

Description of the shape

#### Source

[shapes.ts:154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L154)

***

### enable

> **enable**: `boolean`

Enable flag

#### Source

[shapes.ts:169](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L169)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Source

[shapes.ts:249](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L249)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Source

[shapes.ts:254](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L254)

***

### fontColor

> **fontColor**: `string`

Font color

#### Source

[shapes.ts:259](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L259)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Source

[shapes.ts:264](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L264)

***

### fontSize

> **fontSize**: `number`

Font size

#### Source

[shapes.ts:269](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L269)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Source

[shapes.ts:274](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L274)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Source

[shapes.ts:279](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L279)

***

### height

> **height**: `number`

Shape's height

#### Source

[shapes.ts:224](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L224)

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

[shapes.ts:209](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L209)

***

### link

> **link**: `string`

Link

#### Source

[shapes.ts:309](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L309)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Source

[shapes.ts:179](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L179)

***

### name

> **name**: `string`

Name of the shape

#### Source

[shapes.ts:149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L149)

***

### opacity

> **opacity**: `number`

Opacity

#### Source

[shapes.ts:284](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L284)

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

[shapes.ts:324](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L324)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Source

[shapes.ts:159](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L159)

***

### reference

> **reference**: `null` \| [`Shape`](/api-core/classes/shape/)

A reference to shape

#### Source

[shapes.ts:314](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L314)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Source

[shapes.ts:189](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L189)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Source

[shapes.ts:229](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L229)

***

### roughness

> **roughness**: `number`

Roughness

#### Source

[shapes.ts:289](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L289)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Source

[shapes.ts:329](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L329)

***

### shadow

> **shadow**: `boolean`

Shadow

#### Source

[shapes.ts:294](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L294)

***

### shadowColor

> **shadowColor**: `string`

Shadow color

#### Source

[shapes.ts:299](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L299)

***

### shadowOffset

> **shadowOffset**: `number`[]

Shadow offset

#### Source

[shapes.ts:304](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L304)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Source

[shapes.ts:184](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L184)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Source

[shapes.ts:234](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L234)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Source

[shapes.ts:244](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L244)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Source

[shapes.ts:239](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L239)

***

### tags

> **tags**: `string`[]

Tags

#### Source

[shapes.ts:164](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L164)

***

### top

> **top**: `number`

Shape's top position

#### Source

[shapes.ts:214](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L214)

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

[shapes.ts:174](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L174)

***

### width

> **width**: `number`

Shape's width

#### Source

[shapes.ts:219](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L219)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:518](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L518)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:514](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L514)

## Methods

### assignStyles()

> **assignStyles**(`canvas`): `void`

Assign styles to memoization canvas.

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:608](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L608)

***

### canContain()

> **canContain**(`shape`): `boolean`

Determine a given shape can be contained in this shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Source

[shapes.ts:1057](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1057)

***

### computeOpacity()

> **computeOpacity**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:598](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L598)

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

[shapes.ts:917](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L917)

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

[shapes.ts:751](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L751)

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

[shapes.ts:765](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L765)

***

### finalize()

> **finalize**(`canvas`): `void`

Finalize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[shapes.ts:538](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L538)

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

[shapes.ts:1047](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1047)

***

### findByQuery()

> **findByQuery**(`queryString`): `null` \| [`Shape`](/api-core/classes/shape/)

Find a shape first matched with the query string

#### Parameters

• **queryString**: `any`

#### Returns

`null` \| [`Shape`](/api-core/classes/shape/)

#### Source

[shapes.ts:1034](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1034)

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

[shapes.ts:455](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L455)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Source

[shapes.ts:812](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L812)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Source

[shapes.ts:805](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L805)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Source

[shapes.ts:870](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L870)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Source

[shapes.ts:904](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L904)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Source

[shapes.ts:740](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L740)

***

### getPage()

> **getPage**(): `null` \| [`Page`](/api-core/classes/page/)

Return the page that contains this shape

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[shapes.ts:510](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L510)

***

### getProperty()

> **getProperty**(`name`): `any`

Get a property object

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Source

[shapes.ts:1069](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1069)

***

### getPropertyValue()

> **getPropertyValue**(`name`): `any`

Get a property value

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Source

[shapes.ts:1079](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1079)

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

[shapes.ts:883](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L883)

***

### getScript()

> **getScript**(`id`): `undefined` \| `string`

Get a property object

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `string`

#### Source

[shapes.ts:1087](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1087)

***

### getSeed()

> **getSeed**(): `number`

Return the seed number

#### Returns

`number`

#### Source

[shapes.ts:525](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L525)

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

[shapes.ts:558](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L558)

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

[shapes.ts:860](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L860)

***

### initialze()

> **initialze**(`canvas`): `void`

Initialize shape

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[shapes.ts:533](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L533)

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

[shapes.ts:644](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L644)

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

[shapes.ts:664](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L664)

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

[shapes.ts:628](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L628)

***

### match()

> **match**(`query`): `boolean`

Returns true if query matches this shape

#### Parameters

• **query**: `object`[]

#### Returns

`boolean`

#### Source

[shapes.ts:1009](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1009)

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

[shapes.ts:940](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L940)

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

[shapes.ts:947](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L947)

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

[shapes.ts:984](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L984)

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

[shapes.ts:687](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L687)

***

### renderDefault()

> **renderDefault**(`canvas`): `void`

Default render this shape

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:707](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L707)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:712](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L712)

***

### renderOutlineDefault()

> **renderOutlineDefault**(`canvas`): `number`[][]

Render default outline

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`number`[][]

#### Source

[shapes.ts:728](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L728)

***

### renderShadow()

> **renderShadow**(`canvas`): `void`

Render shadow

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:735](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L735)

***

### renderViewport()

> **renderViewport**(`canvas`): `void`

Return this shape's viewport

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`void`

#### Source

[shapes.ts:822](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L822)

***

### renderViewportDefault()

> **renderViewportDefault**(`canvas`): `number`[][]

Render default viewport

#### Parameters

• **canvas**: [`MemoizationCanvas`](/api-core/classes/memoizationcanvas/)

#### Returns

`number`[][]

#### Source

[shapes.ts:838](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L838)

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

[shapes.ts:496](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L496)

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

[shapes.ts:407](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L407)

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

[shapes.ts:548](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L548)

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

[shapes.ts:587](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L587)
