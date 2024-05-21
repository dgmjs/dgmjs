---
editUrl: false
next: false
prev: false
title: "Freehand"
---

Freehand

## Extends

- [`Path`](/api-core/classes/path/)

## Constructors

### new Freehand()

> **new Freehand**(): [`Freehand`](/api-core/classes/freehand/)

#### Returns

[`Freehand`](/api-core/classes/freehand/)

#### Overrides

[`Path`](/api-core/classes/path/).[`constructor`](/api-core/classes/path/#constructors)

#### Source

[shapes.ts:2154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2154)

## Properties

### \_linkDOM

> **\_linkDOM**: `null` \| `HTMLAnchorElement`

Link DOM element

#### Inherited from

[`Path`](/api-core/classes/path/).[`_linkDOM`](/api-core/classes/path/#_linkdom)

#### Source

[shapes.ts:336](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L336)

***

### \_memoCanvas

> **\_memoCanvas**: `MemoizationCanvas`

Memoization canvas

#### Inherited from

[`Path`](/api-core/classes/path/).[`_memoCanvas`](/api-core/classes/path/#_memocanvas)

#### Source

[shapes.ts:326](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L326)

***

### \_memoOutline

> **\_memoOutline**: `number`[][]

Memoization outline

#### Inherited from

[`Path`](/api-core/classes/path/).[`_memoOutline`](/api-core/classes/path/#_memooutline)

#### Source

[shapes.ts:331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L331)

***

### \_memoSeed

> **\_memoSeed**: `null` \| `number`

Memoize seed

#### Inherited from

[`Path`](/api-core/classes/path/).[`_memoSeed`](/api-core/classes/path/#_memoseed)

#### Source

[shapes.ts:321](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L321)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Path`](/api-core/classes/path/).[`children`](/api-core/classes/path/#children)

#### Source

[core/obj.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L27)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Inherited from

[`Path`](/api-core/classes/path/).[`connectable`](/api-core/classes/path/#connectable)

#### Source

[shapes.ts:211](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L211)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Path`](/api-core/classes/path/).[`constraints`](/api-core/classes/path/#constraints)

#### Source

[shapes.ts:306](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L306)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Path`](/api-core/classes/path/).[`containable`](/api-core/classes/path/#containable)

#### Source

[shapes.ts:201](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L201)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Path`](/api-core/classes/path/).[`containableFilter`](/api-core/classes/path/#containablefilter)

#### Source

[shapes.ts:206](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L206)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Path`](/api-core/classes/path/).[`description`](/api-core/classes/path/#description)

#### Source

[shapes.ts:161](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L161)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Path`](/api-core/classes/path/).[`enable`](/api-core/classes/path/#enable)

#### Source

[shapes.ts:176](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L176)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Path`](/api-core/classes/path/).[`fillColor`](/api-core/classes/path/#fillcolor)

#### Source

[shapes.ts:256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L256)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Path`](/api-core/classes/path/).[`fillStyle`](/api-core/classes/path/#fillstyle)

#### Source

[shapes.ts:261](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L261)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Path`](/api-core/classes/path/).[`fontColor`](/api-core/classes/path/#fontcolor)

#### Source

[shapes.ts:266](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L266)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Path`](/api-core/classes/path/).[`fontFamily`](/api-core/classes/path/#fontfamily)

#### Source

[shapes.ts:271](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L271)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Path`](/api-core/classes/path/).[`fontSize`](/api-core/classes/path/#fontsize)

#### Source

[shapes.ts:276](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L276)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Path`](/api-core/classes/path/).[`fontStyle`](/api-core/classes/path/#fontstyle)

#### Source

[shapes.ts:281](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L281)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Path`](/api-core/classes/path/).[`fontWeight`](/api-core/classes/path/#fontweight)

#### Source

[shapes.ts:286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L286)

***

### headTaper

> **headTaper**: `number`

Taper at the end of the path. The value must be between 0 and 1.

#### Source

[shapes.ts:2152](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2152)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Path`](/api-core/classes/path/).[`height`](/api-core/classes/path/#height)

#### Source

[shapes.ts:231](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L231)

***

### id

> **id**: `string`

#### Inherited from

[`Path`](/api-core/classes/path/).[`id`](/api-core/classes/path/#id)

#### Source

[core/obj.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L24)

***

### left

> **left**: `number`

Shape's left position

#### Inherited from

[`Path`](/api-core/classes/path/).[`left`](/api-core/classes/path/#left)

#### Source

[shapes.ts:216](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L216)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Path`](/api-core/classes/path/).[`link`](/api-core/classes/path/#link)

#### Source

[shapes.ts:301](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L301)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Path`](/api-core/classes/path/).[`movable`](/api-core/classes/path/#movable)

#### Source

[shapes.ts:186](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L186)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Path`](/api-core/classes/path/).[`name`](/api-core/classes/path/#name)

#### Source

[shapes.ts:156](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L156)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Path`](/api-core/classes/path/).[`opacity`](/api-core/classes/path/#opacity)

#### Source

[shapes.ts:291](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L291)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Path`](/api-core/classes/path/).[`parent`](/api-core/classes/path/#parent)

#### Source

[core/obj.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L26)

***

### path

> **path**: `number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`path`](/api-core/classes/path/#path)

#### Source

[shapes.ts:1442](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1442)

***

### pathEditable

> **pathEditable**: `boolean`

#### Inherited from

[`Path`](/api-core/classes/path/).[`pathEditable`](/api-core/classes/path/#patheditable)

#### Source

[shapes.ts:1441](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1441)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Path`](/api-core/classes/path/).[`properties`](/api-core/classes/path/#properties)

#### Source

[shapes.ts:311](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L311)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Path`](/api-core/classes/path/).[`proto`](/api-core/classes/path/#proto)

#### Source

[shapes.ts:166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L166)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Path`](/api-core/classes/path/).[`rotatable`](/api-core/classes/path/#rotatable)

#### Source

[shapes.ts:196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L196)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Path`](/api-core/classes/path/).[`rotate`](/api-core/classes/path/#rotate)

#### Source

[shapes.ts:236](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L236)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Path`](/api-core/classes/path/).[`roughness`](/api-core/classes/path/#roughness)

#### Source

[shapes.ts:296](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L296)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Path`](/api-core/classes/path/).[`scripts`](/api-core/classes/path/#scripts)

#### Source

[shapes.ts:316](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L316)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Path`](/api-core/classes/path/).[`sizable`](/api-core/classes/path/#sizable)

#### Source

[shapes.ts:191](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L191)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Path`](/api-core/classes/path/).[`strokeColor`](/api-core/classes/path/#strokecolor)

#### Source

[shapes.ts:241](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L241)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Path`](/api-core/classes/path/).[`strokePattern`](/api-core/classes/path/#strokepattern)

#### Source

[shapes.ts:251](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L251)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Path`](/api-core/classes/path/).[`strokeWidth`](/api-core/classes/path/#strokewidth)

#### Source

[shapes.ts:246](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L246)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Path`](/api-core/classes/path/).[`tags`](/api-core/classes/path/#tags)

#### Source

[shapes.ts:171](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L171)

***

### tailTaper

> **tailTaper**: `number`

Taper at the start of the path. The value must be between 0 and 1.

#### Source

[shapes.ts:2147](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2147)

***

### thinning

> **thinning**: `number`

Thinning

#### Source

[shapes.ts:2142](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2142)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Path`](/api-core/classes/path/).[`top`](/api-core/classes/path/#top)

#### Source

[shapes.ts:221](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L221)

***

### type

> **type**: `string`

#### Inherited from

[`Path`](/api-core/classes/path/).[`type`](/api-core/classes/path/#type)

#### Source

[core/obj.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L25)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Path`](/api-core/classes/path/).[`visible`](/api-core/classes/path/#visible)

#### Source

[shapes.ts:181](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L181)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Path`](/api-core/classes/path/).[`width`](/api-core/classes/path/#width)

#### Source

[shapes.ts:226](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L226)

## Accessors

### bottom

> `get` **bottom**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:466](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L466)

***

### right

> `get` **right**(): `number`

#### Returns

`number`

#### Source

[shapes.ts:462](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L462)

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

[shapes.ts:527](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L527)

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

[shapes.ts:919](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L919)

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

[shapes.ts:1486](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1486)

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

[shapes.ts:662](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L662)

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

[shapes.ts:676](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L676)

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

[shapes.ts:483](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L483)

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

[`Path`](/api-core/classes/path/).[`findAllByQuery`](/api-core/classes/path/#findallbyquery)

#### Source

[shapes.ts:909](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L909)

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

[shapes.ts:896](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L896)

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

[`Path`](/api-core/classes/path/).[`findParent`](/api-core/classes/path/#findparent)

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

[`Path`](/api-core/classes/path/).[`fromJSON`](/api-core/classes/path/#fromjson)

#### Source

[shapes.ts:2170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2170)

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

[shapes.ts:723](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L723)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Path`](/api-core/classes/path/).[`getCenter`](/api-core/classes/path/#getcenter)

#### Source

[shapes.ts:716](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L716)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`getChildrenBoundingRect`](/api-core/classes/path/#getchildrenboundingrect)

#### Source

[shapes.ts:749](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L749)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`getEnclosure`](/api-core/classes/path/#getenclosure)

#### Source

[shapes.ts:783](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L783)

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

[shapes.ts:1477](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1477)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`getOutline`](/api-core/classes/path/#getoutline)

#### Source

[shapes.ts:651](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L651)

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

[shapes.ts:931](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L931)

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

[shapes.ts:941](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L941)

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

[shapes.ts:762](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L762)

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

[shapes.ts:949](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L949)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Inherited from

[`Path`](/api-core/classes/path/).[`getSeed`](/api-core/classes/path/#getseed)

#### Source

[shapes.ts:470](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L470)

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

[shapes.ts:502](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L502)

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

[shapes.ts:736](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L736)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Path`](/api-core/classes/path/).[`inGroup`](/api-core/classes/path/#ingroup)

#### Source

[shapes.ts:520](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L520)

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

[shapes.ts:478](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L478)

***

### isClosed()

> **isClosed**(): `boolean`

Return is the path is closed

#### Returns

`boolean`

#### Inherited from

[`Path`](/api-core/classes/path/).[`isClosed`](/api-core/classes/path/#isclosed)

#### Source

[shapes.ts:1468](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1468)

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

[`Path`](/api-core/classes/path/).[`localCoordTransform`](/api-core/classes/path/#localcoordtransform)

#### Source

[shapes.ts:563](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L563)

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

[shapes.ts:583](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L583)

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

[shapes.ts:547](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L547)

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

[shapes.ts:871](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L871)

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

[shapes.ts:1509](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1509)

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

[shapes.ts:846](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L846)

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

[shapes.ts:606](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L606)

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

[shapes.ts:2177](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2177)

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

[shapes.ts:629](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L629)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Return default outline

#### Returns

`number`[][]

#### Inherited from

[`Path`](/api-core/classes/path/).[`renderOutlineDefault`](/api-core/classes/path/#renderoutlinedefault)

#### Source

[shapes.ts:1520](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1520)

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

[`Path`](/api-core/classes/path/).[`toJSON`](/api-core/classes/path/#tojson)

#### Source

[shapes.ts:2162](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L2162)

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

[`Path`](/api-core/classes/path/).[`traverseDepthFirst`](/api-core/classes/path/#traversedepthfirst)

#### Source

[core/obj.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L87)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Path`](/api-core/classes/path/).[`traverseDepthFirstSequence`](/api-core/classes/path/#traversedepthfirstsequence)

#### Source

[core/obj.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L110)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Path`](/api-core/classes/path/).[`traverseSequence`](/api-core/classes/path/#traversesequence)

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

[`Path`](/api-core/classes/path/).[`update`](/api-core/classes/path/#update)

#### Source

[shapes.ts:493](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L493)
