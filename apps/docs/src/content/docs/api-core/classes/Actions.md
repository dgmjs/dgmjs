---
editUrl: false
next: false
prev: false
title: "Actions"
---

Editor actions

## Constructors

### new Actions()

> **new Actions**(`editor`): [`Actions`](/api-core/classes/actions/)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

[`Actions`](/api-core/classes/actions/)

#### Source

[actions.ts:47](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L47)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[actions.ts:45](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L45)

## Methods

### addPage()

> **addPage**(`position`?): [`Page`](/api-core/classes/page/)

Add a page

#### Parameters

• **position?**: `number`

#### Returns

[`Page`](/api-core/classes/page/)

#### Source

[actions.ts:68](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L68)

***

### alignBottom()

> **alignBottom**(`shapes`?): `void`

Align selected shapes to bottom

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:624](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L624)

***

### alignCenter()

> **alignCenter**(`shapes`?): `void`

Align selected shapes to horizontally center

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:563](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L563)

***

### alignLeft()

> **alignLeft**(`shapes`?): `void`

Align selected shapes to left

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:507](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L507)

***

### alignMiddle()

> **alignMiddle**(`shapes`?): `void`

Align selected shapes to vertically middle

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:652](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L652)

***

### alignRight()

> **alignRight**(`shapes`?): `void`

Align selected shapes to right

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:535](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L535)

***

### alignTop()

> **alignTop**(`shapes`?): `void`

Align selected shapes to top

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:596](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L596)

***

### bringForward()

> **bringForward**(`shapes`?): `void`

Bring selected shapes forward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:467](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L467)

***

### bringToFront()

> **bringToFront**(`shapes`?): `void`

Bring selected shapes to front

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:427](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L427)

***

### copy()

> **copy**(`shapes`?): `Promise`\<`void`\>

Copy selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:201](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L201)

***

### cut()

> **cut**(`shapes`?): `Promise`\<`void`\>

Cut selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L213)

***

### duplicate()

> **duplicate**(`shapes`?): `void`

Duplicate shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:299](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L299)

***

### duplicatePage()

> **duplicatePage**(`page`, `position`): [`Page`](/api-core/classes/page/)

Duplicate a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

• **position**: `number`

#### Returns

[`Page`](/api-core/classes/page/)

#### Source

[actions.ts:112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L112)

***

### group()

> **group**(`shapes`?): `void`

Group selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:363](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L363)

***

### insert()

> **insert**(`shape`, `parent`?): `void`

Insert a shape into document or another shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

• **parent?**: [`Shape`](/api-core/classes/shape/)

#### Returns

`void`

#### Source

[actions.ts:131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L131)

***

### move()

> **move**(`dx`, `dy`, `shapes`?): `void`

Move selected shapes

#### Parameters

• **dx**: `number`

• **dy**: `number`

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:326](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L326)

***

### paste()

> **paste**(`page`?): `Promise`\<`void`\>

Paste

#### Parameters

• **page?**: [`Page`](/api-core/classes/page/)

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:234](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L234)

***

### redo()

> **redo**(): `void`

Redo

#### Returns

`void`

#### Source

[actions.ts:61](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L61)

***

### remove()

> **remove**(`shapes`?): `void`

Remove selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:184](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L184)

***

### removePage()

> **removePage**(`page`): `void`

Remove a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[actions.ts:90](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L90)

***

### reorderPage()

> **reorderPage**(`page`, `position`): `void`

Reorder a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

• **position**: `number`

#### Returns

`void`

#### Source

[actions.ts:101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L101)

***

### sendBackward()

> **sendBackward**(`shapes`?): `void`

Send selected shapes backward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:487](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L487)

***

### sendToBack()

> **sendToBack**(`shapes`?): `void`

Send selected shapes to back

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:447](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L447)

***

### undo()

> **undo**(): `void`

Undo

#### Returns

`void`

#### Source

[actions.ts:54](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L54)

***

### ungroup()

> **ungroup**(`shapes`?): `void`

Ungroup selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:398](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L398)

***

### update()

> **update**(`values`, `objs`?): `void`

Update obj properties

#### Parameters

• **values**: `Partial`\<[`Shape`](/api-core/classes/shape/) & [`Doc`](/api-core/classes/doc/) & [`Page`](/api-core/classes/page/) & [`Box`](/api-core/classes/box/) & [`Path`](/api-core/classes/path/) & [`Line`](/api-core/classes/line/) & [`Rectangle`](/api-core/classes/rectangle/) & [`Ellipse`](/api-core/classes/ellipse/) & [`Text`](/api-core/classes/text/) & [`Image`](/api-core/classes/image/) & [`Connector`](/api-core/classes/connector/) & [`Freehand`](/api-core/classes/freehand/) & [`Highlighter`](/api-core/classes/highlighter/) & [`Group`](/api-core/classes/group/) & [`Frame`](/api-core/classes/frame/) & [`Embed`](/api-core/classes/embed/)\>

• **objs?**: [`Obj`](/api-core/classes/obj/)[]

#### Returns

`void`

#### Source

[actions.ts:146](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L146)
