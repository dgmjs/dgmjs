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

[actions.ts:31](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L31)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[actions.ts:29](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L29)

## Methods

### addPage()

> **addPage**(`position`?): [`Page`](/api-core/classes/page/)

Add a page

#### Parameters

• **position?**: `number`

#### Returns

[`Page`](/api-core/classes/page/)

#### Source

[actions.ts:52](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L52)

***

### alignBottom()

> **alignBottom**(`shapes`?): `void`

Align selected shapes to bottom

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:618](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L618)

***

### alignCenter()

> **alignCenter**(`shapes`?): `void`

Align selected shapes to horizontally center

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:557](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L557)

***

### alignLeft()

> **alignLeft**(`shapes`?): `void`

Align selected shapes to left

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:501](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L501)

***

### alignMiddle()

> **alignMiddle**(`shapes`?): `void`

Align selected shapes to vertically middle

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:646](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L646)

***

### alignRight()

> **alignRight**(`shapes`?): `void`

Align selected shapes to right

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:529](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L529)

***

### alignTop()

> **alignTop**(`shapes`?): `void`

Align selected shapes to top

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:590](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L590)

***

### bringForward()

> **bringForward**(`shapes`?): `void`

Bring selected shapes forward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:461](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L461)

***

### bringToFront()

> **bringToFront**(`shapes`?): `void`

Bring selected shapes to front

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:421](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L421)

***

### copy()

> **copy**(`shapes`?): `Promise`\<`void`\>

Copy selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:217](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L217)

***

### cut()

> **cut**(`shapes`?): `Promise`\<`void`\>

Cut selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:228](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L228)

***

### duplicate()

> **duplicate**(`shapes`?): `void`

Duplicate shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:314](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L314)

***

### duplicatePage()

> **duplicatePage**(`page`, `position`, `initializer`?): [`Page`](/api-core/classes/page/)

Duplicate a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

• **position**: `number`

• **initializer?**

#### Returns

[`Page`](/api-core/classes/page/)

#### Source

[actions.ts:96](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L96)

***

### group()

> **group**(`shapes`?): `void`

Group selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:378](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L378)

***

### insert()

> **insert**(`shape`, `parent`?): `void`

Insert a shape into the current page or another shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

The shape to insert

• **parent?**: [`Shape`](/api-core/classes/shape/)

The parent shape to insert the shape into. If not provided, the shape will be inserted into the current page

#### Returns

`void`

#### Source

[actions.ts:122](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L122)

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

[actions.ts:341](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L341)

***

### paste()

> **paste**(`page`?): `Promise`\<`void`\>

Paste

#### Parameters

• **page?**: [`Page`](/api-core/classes/page/)

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:249](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L249)

***

### redo()

> **redo**(): `void`

Redo

#### Returns

`void`

#### Source

[actions.ts:45](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L45)

***

### remove()

> **remove**(`shapes`?): `void`

Remove selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L199)

***

### removePage()

> **removePage**(`page`): `void`

Remove a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[actions.ts:74](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L74)

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

[actions.ts:85](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L85)

***

### sendBackward()

> **sendBackward**(`shapes`?): `void`

Send selected shapes backward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:481](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L481)

***

### sendToBack()

> **sendToBack**(`shapes`?): `void`

Send selected shapes to back

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:441](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L441)

***

### undo()

> **undo**(): `void`

Undo

#### Returns

`void`

#### Source

[actions.ts:38](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L38)

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

• **values**: `Partial`\<[`Shape`](/api-core/classes/shape/) & [`Doc`](/api-core/classes/doc/) & [`Page`](/api-core/classes/page/) & [`Box`](/api-core/classes/box/) & [`Path`](/api-core/classes/path/) & [`Line`](/api-core/classes/line/) & [`Rectangle`](/api-core/classes/rectangle/) & [`Ellipse`](/api-core/classes/ellipse/) & [`Text`](/api-core/classes/text/) & [`Image`](/api-core/classes/image/) & [`Icon`](/api-core/classes/icon/) & [`Connector`](/api-core/classes/connector/) & [`Freehand`](/api-core/classes/freehand/) & [`Highlighter`](/api-core/classes/highlighter/) & [`Group`](/api-core/classes/group/) & [`Frame`](/api-core/classes/frame/) & [`Embed`](/api-core/classes/embed/)\>

• **objs?**: [`Obj`](/api-core/classes/obj/)[]

#### Returns

`void`

#### Source

[actions.ts:137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L137)
