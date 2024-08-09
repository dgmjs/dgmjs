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

[actions.ts:595](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L595)

***

### alignCenter()

> **alignCenter**(`shapes`?): `void`

Align selected shapes to horizontally center

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:534](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L534)

***

### alignLeft()

> **alignLeft**(`shapes`?): `void`

Align selected shapes to left

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:478](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L478)

***

### alignMiddle()

> **alignMiddle**(`shapes`?): `void`

Align selected shapes to vertically middle

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:623](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L623)

***

### alignRight()

> **alignRight**(`shapes`?): `void`

Align selected shapes to right

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:506](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L506)

***

### alignTop()

> **alignTop**(`shapes`?): `void`

Align selected shapes to top

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:567](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L567)

***

### bringForward()

> **bringForward**(`shapes`?): `void`

Bring selected shapes forward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:438](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L438)

***

### bringToFront()

> **bringToFront**(`shapes`?): `void`

Bring selected shapes to front

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:398](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L398)

***

### copy()

> **copy**(`shapes`?): `Promise`\<`void`\>

Copy selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:194](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L194)

***

### cut()

> **cut**(`shapes`?): `Promise`\<`void`\>

Cut selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L205)

***

### duplicate()

> **duplicate**(`shapes`?): `void`

Duplicate shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:291](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L291)

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

[actions.ts:355](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L355)

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

[actions.ts:117](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L117)

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

[actions.ts:318](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L318)

***

### paste()

> **paste**(`page`?): `Promise`\<`void`\>

Paste

#### Parameters

• **page?**: [`Page`](/api-core/classes/page/)

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:226](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L226)

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

[actions.ts:176](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L176)

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

[actions.ts:458](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L458)

***

### sendToBack()

> **sendToBack**(`shapes`?): `void`

Send selected shapes to back

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:418](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L418)

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

[actions.ts:375](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L375)

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

[actions.ts:132](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L132)
