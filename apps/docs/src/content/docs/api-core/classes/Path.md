---
editUrl: false
next: false
prev: false
title: "Path"
---

Path shape

## Extends

- [`Shape`](/api-core/classes/shape/)

## Constructors

### new Path()

> **new Path**(): [`Path`](/api-core/classes/path/)

#### Returns

[`Path`](/api-core/classes/path/)

#### Overrides

[`Shape`](/api-core/classes/shape/).[`constructor`](/api-core/classes/shape/#constructors)

#### Source

[shapes.ts:1444](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1444)

## Properties

### \_linkDOM

> **\_linkDOM**: `null` \| `HTMLAnchorElement`

Link DOM element

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`_linkDOM`](/api-core/classes/shape/#_linkdom)

#### Source

[shapes.ts:336](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L336)

***

### \_memoCanvas

> **\_memoCanvas**: `MemoizationCanvas`

Memoization canvas

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`_memoCanvas`](/api-core/classes/shape/#_memocanvas)

#### Source

[shapes.ts:326](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L326)

***

### \_memoOutline

> **\_memoOutline**: `number`[][]

Memoization outline

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`_memoOutline`](/api-core/classes/shape/#_memooutline)

#### Source

[shapes.ts:331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L331)

***

### \_memoSeed

> **\_memoSeed**: `null` \| `number`

Memoize seed

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`_memoSeed`](/api-core/classes/shape/#_memoseed)

#### Source

[shapes.ts:321](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L321)

***

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`children`](/api-core/classes/shape/#children)

#### Source

[core/obj.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L27)

***

### connectable

> **connectable**: `boolean`

Connectable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`connectable`](/api-core/classes/shape/#connectable)

#### Source

[shapes.ts:211](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L211)

***

### constraints

> **constraints**: [`Constraint`](/api-core/interfaces/constraint/)[]

Shape's constraints

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`constraints`](/api-core/classes/shape/#constraints)

#### Source

[shapes.ts:306](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L306)

***

### containable

> **containable**: `boolean`

Containable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containable`](/api-core/classes/shape/#containable)

#### Source

[shapes.ts:201](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L201)

***

### containableFilter

> **containableFilter**: `string`

Containable filter

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`containableFilter`](/api-core/classes/shape/#containablefilter)

#### Source

[shapes.ts:206](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L206)

***

### description

> **description**: `string`

Description of the shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`description`](/api-core/classes/shape/#description)

#### Source

[shapes.ts:161](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L161)

***

### enable

> **enable**: `boolean`

Enable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`enable`](/api-core/classes/shape/#enable)

#### Source

[shapes.ts:176](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L176)

***

### fillColor

> **fillColor**: `string`

Fill color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fillColor`](/api-core/classes/shape/#fillcolor)

#### Source

[shapes.ts:256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L256)

***

### fillStyle

> **fillStyle**: `string`

Fill style

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fillStyle`](/api-core/classes/shape/#fillstyle)

#### Source

[shapes.ts:261](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L261)

***

### fontColor

> **fontColor**: `string`

Font color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontColor`](/api-core/classes/shape/#fontcolor)

#### Source

[shapes.ts:266](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L266)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontFamily`](/api-core/classes/shape/#fontfamily)

#### Source

[shapes.ts:271](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L271)

***

### fontSize

> **fontSize**: `number`

Font size

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontSize`](/api-core/classes/shape/#fontsize)

#### Source

[shapes.ts:276](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L276)

***

### fontStyle

> **fontStyle**: `string`

Font style

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontStyle`](/api-core/classes/shape/#fontstyle)

#### Source

[shapes.ts:281](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L281)

***

### fontWeight

> **fontWeight**: `number`

Font weight

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`fontWeight`](/api-core/classes/shape/#fontweight)

#### Source

[shapes.ts:286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L286)

***

### height

> **height**: `number`

Shape's height

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`height`](/api-core/classes/shape/#height)

#### Source

[shapes.ts:231](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L231)

***

### id

> **id**: `string`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`id`](/api-core/classes/shape/#id)

#### Source

[core/obj.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L24)

***

### left

> **left**: `number`

Shape's left position

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`left`](/api-core/classes/shape/#left)

#### Source

[shapes.ts:216](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L216)

***

### link

> **link**: `string`

Link

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`link`](/api-core/classes/shape/#link)

#### Source

[shapes.ts:301](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L301)

***

### movable

> **movable**: [`MovableEnum`](/api-core/type-aliases/movableenum/)

Indicate how this shape can be moved

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`movable`](/api-core/classes/shape/#movable)

#### Source

[shapes.ts:186](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L186)

***

### name

> **name**: `string`

Name of the shape

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`name`](/api-core/classes/shape/#name)

#### Source

[shapes.ts:156](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L156)

***

### opacity

> **opacity**: `number`

Opacity

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`opacity`](/api-core/classes/shape/#opacity)

#### Source

[shapes.ts:291](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L291)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`parent`](/api-core/classes/shape/#parent)

#### Source

[core/obj.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L26)

***

### path

> **path**: `number`[][]

#### Source

[shapes.ts:1442](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1442)

***

### pathEditable

> **pathEditable**: `boolean`

#### Source

[shapes.ts:1441](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1441)

***

### properties

> **properties**: [`Property`](/api-core/interfaces/property/)[]

Shape's properties

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`properties`](/api-core/classes/shape/#properties)

#### Source

[shapes.ts:311](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L311)

***

### proto

> **proto**: `boolean`

The flag to indicate this shape is a prototype or not

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`proto`](/api-core/classes/shape/#proto)

#### Source

[shapes.ts:166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L166)

***

### rotatable

> **rotatable**: `boolean`

Rotatable flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`rotatable`](/api-core/classes/shape/#rotatable)

#### Source

[shapes.ts:196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L196)

***

### rotate

> **rotate**: `number`

Shape's rotation angle (in degree)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`rotate`](/api-core/classes/shape/#rotate)

#### Source

[shapes.ts:236](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L236)

***

### roughness

> **roughness**: `number`

Roughness

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`roughness`](/api-core/classes/shape/#roughness)

#### Source

[shapes.ts:296](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L296)

***

### scripts

> **scripts**: [`Script`](/api-core/interfaces/script/)[]

Shape's scripts

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`scripts`](/api-core/classes/shape/#scripts)

#### Source

[shapes.ts:316](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L316)

***

### sizable

> **sizable**: [`SizableEnum`](/api-core/type-aliases/sizableenum/)

Indicate how this shape can be resized

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`sizable`](/api-core/classes/shape/#sizable)

#### Source

[shapes.ts:191](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L191)

***

### strokeColor

> **strokeColor**: `string`

Stroke color

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokeColor`](/api-core/classes/shape/#strokecolor)

#### Source

[shapes.ts:241](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L241)

***

### strokePattern

> **strokePattern**: `number`[]

Stroke pattern

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokePattern`](/api-core/classes/shape/#strokepattern)

#### Source

[shapes.ts:251](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L251)

***

### strokeWidth

> **strokeWidth**: `number`

Stroke width

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`strokeWidth`](/api-core/classes/shape/#strokewidth)

#### Source

[shapes.ts:246](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L246)

***

### tags

> **tags**: `string`[]

Tags

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`tags`](/api-core/classes/shape/#tags)

#### Source

[shapes.ts:171](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L171)

***

### top

> **top**: `number`

Shape's top position

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`top`](/api-core/classes/shape/#top)

#### Source

[shapes.ts:221](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L221)

***

### type

> **type**: `string`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`type`](/api-core/classes/shape/#type)

#### Source

[core/obj.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L25)

***

### visible

> **visible**: `boolean`

Visible flag

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`visible`](/api-core/classes/shape/#visible)

#### Source

[shapes.ts:181](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L181)

***

### width

> **width**: `number`

Shape's width

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`width`](/api-core/classes/shape/#width)

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

[`Shape`](/api-core/classes/shape/).[`assignStyles`](/api-core/classes/shape/#assignstyles)

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

[`Shape`](/api-core/classes/shape/).[`canContain`](/api-core/classes/shape/#cancontain)

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

#### Overrides

[`Shape`](/api-core/classes/shape/).[`containsPoint`](/api-core/classes/shape/#containspoint)

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

[`Shape`](/api-core/classes/shape/).[`draw`](/api-core/classes/shape/#draw)

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

[`Shape`](/api-core/classes/shape/).[`drawLink`](/api-core/classes/shape/#drawlink)

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

[`Shape`](/api-core/classes/shape/).[`finalize`](/api-core/classes/shape/#finalize)

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

[`Shape`](/api-core/classes/shape/).[`find`](/api-core/classes/shape/#find)

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

[`Shape`](/api-core/classes/shape/).[`findAllByQuery`](/api-core/classes/shape/#findallbyquery)

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

[`Shape`](/api-core/classes/shape/).[`findByQuery`](/api-core/classes/shape/#findbyquery)

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

[`Shape`](/api-core/classes/shape/).[`findDepthFirst`](/api-core/classes/shape/#finddepthfirst)

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

[`Shape`](/api-core/classes/shape/).[`findParent`](/api-core/classes/shape/#findparent)

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

[`Shape`](/api-core/classes/shape/).[`fromJSON`](/api-core/classes/shape/#fromjson)

#### Source

[shapes.ts:1459](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1459)

***

### getBoundingRect()

> **getBoundingRect**(`includeAnchorPoints`): `number`[][]

Return a bounding rect.

#### Parameters

• **includeAnchorPoints**: `boolean`= `false`

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getBoundingRect`](/api-core/classes/shape/#getboundingrect)

#### Source

[shapes.ts:723](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L723)

***

### getCenter()

> **getCenter**(): `number`[]

Returns the center point

#### Returns

`number`[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getCenter`](/api-core/classes/shape/#getcenter)

#### Source

[shapes.ts:716](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L716)

***

### getChildrenBoundingRect()

> **getChildrenBoundingRect**(): `number`[][]

Return a bounding box embracing children shapes

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getChildrenBoundingRect`](/api-core/classes/shape/#getchildrenboundingrect)

#### Source

[shapes.ts:749](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L749)

***

### getEnclosure()

> **getEnclosure**(): `number`[][]

Return a enclosure

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getEnclosure`](/api-core/classes/shape/#getenclosure)

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

#### Source

[shapes.ts:1477](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1477)

***

### getOutline()

> **getOutline**(): `number`[][]

Return outline polygon.

#### Returns

`number`[][]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getOutline`](/api-core/classes/shape/#getoutline)

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

[`Shape`](/api-core/classes/shape/).[`getProperty`](/api-core/classes/shape/#getproperty)

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

[`Shape`](/api-core/classes/shape/).[`getPropertyValue`](/api-core/classes/shape/#getpropertyvalue)

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

[`Shape`](/api-core/classes/shape/).[`getRectInDCS`](/api-core/classes/shape/#getrectindcs)

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

[`Shape`](/api-core/classes/shape/).[`getScript`](/api-core/classes/shape/#getscript)

#### Source

[shapes.ts:949](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L949)

***

### getSeed()

> **getSeed**(): `number`

#### Returns

`number`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`getSeed`](/api-core/classes/shape/#getseed)

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

[`Shape`](/api-core/classes/shape/).[`getShapeAt`](/api-core/classes/shape/#getshapeat)

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

[`Shape`](/api-core/classes/shape/).[`getViewRect`](/api-core/classes/shape/#getviewrect)

#### Source

[shapes.ts:736](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L736)

***

### inGroup()

> **inGroup**(): `null` \| [`Obj`](/api-core/classes/obj/)

Return true if this shape is contained by a group (recursively)

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`inGroup`](/api-core/classes/shape/#ingroup)

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

[`Shape`](/api-core/classes/shape/).[`initialze`](/api-core/classes/shape/#initialze)

#### Source

[shapes.ts:478](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L478)

***

### isClosed()

> **isClosed**(): `boolean`

Return is the path is closed

#### Returns

`boolean`

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

[`Shape`](/api-core/classes/shape/).[`isDescendant`](/api-core/classes/shape/#isdescendant)

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

[`Shape`](/api-core/classes/shape/).[`localCoordTransform`](/api-core/classes/shape/#localcoordtransform)

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

[`Shape`](/api-core/classes/shape/).[`localCoordTransformRev`](/api-core/classes/shape/#localcoordtransformrev)

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

[`Shape`](/api-core/classes/shape/).[`localTransform`](/api-core/classes/shape/#localtransform)

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

[`Shape`](/api-core/classes/shape/).[`match`](/api-core/classes/shape/#match)

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

#### Overrides

[`Shape`](/api-core/classes/shape/).[`overlapRect`](/api-core/classes/shape/#overlaprect)

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

[`Shape`](/api-core/classes/shape/).[`parseQueryString`](/api-core/classes/shape/#parsequerystring)

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

[`Shape`](/api-core/classes/shape/).[`render`](/api-core/classes/shape/#render)

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

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`renderDefault`](/api-core/classes/shape/#renderdefault)

#### Source

[shapes.ts:624](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L624)

***

### renderOutline()

> **renderOutline**(`canvas`): `void`

Render this shape's outline

#### Parameters

• **canvas**: `MemoizationCanvas`

#### Returns

`void`

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`renderOutline`](/api-core/classes/shape/#renderoutline)

#### Source

[shapes.ts:629](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L629)

***

### renderOutlineDefault()

> **renderOutlineDefault**(): `number`[][]

Return default outline

#### Returns

`number`[][]

#### Overrides

[`Shape`](/api-core/classes/shape/).[`renderOutlineDefault`](/api-core/classes/shape/#renderoutlinedefault)

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

[`Shape`](/api-core/classes/shape/).[`resolveRefs`](/api-core/classes/shape/#resolverefs)

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

[`Shape`](/api-core/classes/shape/).[`toJSON`](/api-core/classes/shape/#tojson)

#### Source

[shapes.ts:1452](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L1452)

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

[`Shape`](/api-core/classes/shape/).[`traverse`](/api-core/classes/shape/#traverse)

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

[`Shape`](/api-core/classes/shape/).[`traverseDepthFirst`](/api-core/classes/shape/#traversedepthfirst)

#### Source

[core/obj.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L87)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`traverseDepthFirstSequence`](/api-core/classes/shape/#traversedepthfirstsequence)

#### Source

[core/obj.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L110)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Inherited from

[`Shape`](/api-core/classes/shape/).[`traverseSequence`](/api-core/classes/shape/#traversesequence)

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

[`Shape`](/api-core/classes/shape/).[`update`](/api-core/classes/shape/#update)

#### Source

[shapes.ts:493](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L493)
