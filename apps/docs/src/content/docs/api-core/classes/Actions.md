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

[actions.ts:69](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L69)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[actions.ts:67](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L67)

## Methods

### addPage()

> **addPage**(`position`?): [`Page`](/api-core/classes/page/)

Add a page

#### Parameters

• **position?**: `number`

#### Returns

[`Page`](/api-core/classes/page/)

#### Source

[actions.ts:90](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L90)

***

### alignBottom()

> **alignBottom**(`shapes`?): `void`

Align selected shapes to bottom

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:683](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L683)

***

### alignCenter()

> **alignCenter**(`shapes`?): `void`

Align selected shapes to horizontally center

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:622](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L622)

***

### alignHorizontalSpaceAround()

> **alignHorizontalSpaceAround**(`shapes`?): `void`

Align selected shapes horizontally with space around

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:744](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L744)

***

### alignLeft()

> **alignLeft**(`shapes`?): `void`

Align selected shapes to left

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:566](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L566)

***

### alignMiddle()

> **alignMiddle**(`shapes`?): `void`

Align selected shapes to vertically middle

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:711](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L711)

***

### alignRight()

> **alignRight**(`shapes`?): `void`

Align selected shapes to right

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:594](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L594)

***

### alignTop()

> **alignTop**(`shapes`?): `void`

Align selected shapes to top

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:655](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L655)

***

### alignVerticalSpaceAround()

> **alignVerticalSpaceAround**(`shapes`?): `void`

Align selected shapes vertically with space around

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:787](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L787)

***

### bringForward()

> **bringForward**(`shapes`?): `void`

Bring selected shapes forward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:526](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L526)

***

### bringToFront()

> **bringToFront**(`shapes`?): `void`

Bring selected shapes to front

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:486](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L486)

***

### copy()

> **copy**(`shapes`?): `Promise`\<`void`\>

Copy selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:268](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L268)

***

### cut()

> **cut**(`shapes`?): `Promise`\<`void`\>

Cut selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:279](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L279)

***

### duplicate()

> **duplicate**(`shapes`?, `dx`?, `dy`?, `parent`?): [`Shape`](/api-core/classes/shape/)[]

Duplicate shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to duplicate. If not provided, the selected shapes will be duplicated

• **dx?**: `number`= `30`

The horizontal distance to move the duplicated shapes

• **dy?**: `number`= `30`

The vertical distance to move the duplicated shapes

• **parent?**: [`Shape`](/api-core/classes/shape/)

The parent shape to insert the duplicated shapes into. If not provided, the duplicated shapes will be inserted into the current page

#### Returns

[`Shape`](/api-core/classes/shape/)[]

#### Source

[actions.ts:369](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L369)

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

[actions.ts:134](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L134)

***

### group()

> **group**(`shapes`?): `void`

Group selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:443](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L443)

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

[actions.ts:161](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L161)

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

[actions.ts:406](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L406)

***

### paste()

> **paste**(`page`?): `Promise`\<`void`\>

Paste

#### Parameters

• **page?**: [`Page`](/api-core/classes/page/)

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:300](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L300)

***

### redo()

> **redo**(): `void`

Redo

#### Returns

`void`

#### Source

[actions.ts:83](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L83)

***

### remove()

> **remove**(`shapes`?): `void`

Remove selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:250](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L250)

***

### removePage()

> **removePage**(`page`): `void`

Remove a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[actions.ts:112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L112)

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

[actions.ts:123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L123)

***

### sendBackward()

> **sendBackward**(`shapes`?): `void`

Send selected shapes backward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:546](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L546)

***

### sendToBack()

> **sendToBack**(`shapes`?): `void`

Send selected shapes to back

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:506](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L506)

***

### undo()

> **undo**(): `void`

Undo

#### Returns

`void`

#### Source

[actions.ts:76](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L76)

***

### ungroup()

> **ungroup**(`shapes`?): `void`

Ungroup selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:463](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L463)

***

### update()

> **update**(`values`, `objs`?): `void`

Update obj properties

#### Parameters

• **values**: `Partial`\<[`Shape`](/api-core/classes/shape/) & [`Doc`](/api-core/classes/doc/) & [`Page`](/api-core/classes/page/) & [`Box`](/api-core/classes/box/) & [`Path`](/api-core/classes/path/) & [`Line`](/api-core/classes/line/) & [`Rectangle`](/api-core/classes/rectangle/) & [`Ellipse`](/api-core/classes/ellipse/) & [`Text`](/api-core/classes/text/) & [`Image`](/api-core/classes/image/) & [`Icon`](/api-core/classes/icon/) & [`Connector`](/api-core/classes/connector/) & [`Freehand`](/api-core/classes/freehand/) & [`Highlighter`](/api-core/classes/highlighter/) & [`Group`](/api-core/classes/group/) & [`Frame`](/api-core/classes/frame/) & [`Mirror`](/api-core/classes/mirror/) & [`Embed`](/api-core/classes/embed/)\>

• **objs?**: [`Obj`](/api-core/classes/obj/)[]

#### Returns

`void`

#### Source

[actions.ts:176](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L176)
