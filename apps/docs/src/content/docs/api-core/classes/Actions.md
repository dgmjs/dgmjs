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

[packages/core/src/actions.ts:72](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L72)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[packages/core/src/actions.ts:70](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L70)

## Methods

### addPage()

> **addPage**(`pageProps`?, `position`?): [`Page`](/api-core/classes/page/)

Add a page

#### Parameters

• **pageProps?**: `Partial`\<[`Page`](/api-core/classes/page/)\>

The properties of the page to add

• **position?**: `number`

The position to add the page at. If not provided, the page will be added at the end

#### Returns

[`Page`](/api-core/classes/page/)

The added page

#### Source

[packages/core/src/actions.ts:96](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L96)

***

### alignBottom()

> **alignBottom**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Align selected shapes to bottom

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to align. If not provided, the selected shapes will be aligned

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were aligned

#### Source

[packages/core/src/actions.ts:789](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L789)

***

### alignCenter()

> **alignCenter**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Align selected shapes to horizontally center

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to align. If not provided, the selected shapes will be aligned

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were aligned

#### Source

[packages/core/src/actions.ts:724](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L724)

***

### alignHorizontalSpaceAround()

> **alignHorizontalSpaceAround**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Align selected shapes horizontally with space around

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to align. If not provided, the selected shapes will be aligned

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were aligned

#### Source

[packages/core/src/actions.ts:854](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L854)

***

### alignLeft()

> **alignLeft**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Align selected shapes to left

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to align. If not provided, the selected shapes will be aligned

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were aligned

#### Source

[packages/core/src/actions.ts:664](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L664)

***

### alignMiddle()

> **alignMiddle**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Align selected shapes to vertically middle

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to align. If not provided, the selected shapes will be aligned

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were aligned

#### Source

[packages/core/src/actions.ts:819](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L819)

***

### alignRight()

> **alignRight**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Align selected shapes to right

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to align. If not provided, the selected shapes will be aligned

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were aligned

#### Source

[packages/core/src/actions.ts:694](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L694)

***

### alignTop()

> **alignTop**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Align selected shapes to top

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to align. If not provided, the selected shapes will be aligned

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were aligned

#### Source

[packages/core/src/actions.ts:759](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L759)

***

### alignVerticalSpaceAround()

> **alignVerticalSpaceAround**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Align selected shapes vertically with space around

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to align. If not provided, the selected shapes will be aligned

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were aligned

#### Source

[packages/core/src/actions.ts:897](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L897)

***

### bringForward()

> **bringForward**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Bring selected shapes forward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to bring forward. If not provided, the selected shapes will be brought forward

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were brought forward

#### Source

[packages/core/src/actions.ts:620](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L620)

***

### bringToFront()

> **bringToFront**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Bring selected shapes to front

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to bring to front. If not provided, the selected shapes will be brought to front

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were brought to front

#### Source

[packages/core/src/actions.ts:576](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L576)

***

### copy()

> **copy**(`shapes`?): `Promise`\<[`Shape`](/api-core/classes/shape/)[]\>

Copy selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to copy. If not provided, the selected shapes will be copied

#### Returns

`Promise`\<[`Shape`](/api-core/classes/shape/)[]\>

The copied shapes

#### Source

[packages/core/src/actions.ts:331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L331)

***

### cut()

> **cut**(`shapes`?): `Promise`\<[`Shape`](/api-core/classes/shape/)[]\>

Cut selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to cut. If not provided, the selected shapes will be cut

#### Returns

`Promise`\<[`Shape`](/api-core/classes/shape/)[]\>

#### Source

[packages/core/src/actions.ts:344](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L344)

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

[packages/core/src/actions.ts:440](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L440)

***

### duplicatePage()

> **duplicatePage**(`page`, `pageProps`?, `position`?): [`Page`](/api-core/classes/page/)

Duplicate a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

The page to duplicate

• **pageProps?**: `Partial`\<[`Page`](/api-core/classes/page/)\>

The properties of the duplicated page

• **position?**: `number`

The position to add the duplicated page at. If not provided, the page will be added at the next of the original page

#### Returns

[`Page`](/api-core/classes/page/)

The duplicated page

#### Source

[packages/core/src/actions.ts:154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L154)

***

### group()

> **group**(`shapes`?, `parent`?): `null` \| [`Group`](/api-core/classes/group/)

Group given shapes.

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to group. If not provided, the selected shapes will be grouped

• **parent?**: [`Shape`](/api-core/classes/shape/)

The parent shape to insert the group into. If not provided, the group will be inserted into the current page

#### Returns

`null` \| [`Group`](/api-core/classes/group/)

The created group

#### Source

[packages/core/src/actions.ts:528](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L528)

***

### insert()

> **insert**(`shape`, `parent`?): [`Shape`](/api-core/classes/shape/)

Insert a shape into the current page or another shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

The shape to insert

• **parent?**: [`Shape`](/api-core/classes/shape/)

The parent shape to insert the shape into. If not provided, the shape will be inserted into the current page

#### Returns

[`Shape`](/api-core/classes/shape/)

#### Source

[packages/core/src/actions.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L185)

***

### move()

> **move**(`dx`, `dy`, `shapes`?): [`Shape`](/api-core/classes/shape/)[]

Move selected shapes

#### Parameters

• **dx**: `number`

The horizontal distance to move the shapes

• **dy**: `number`

The vertical distance to move the shapes

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to move. If not provided, the selected shapes will be moved

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The moved shapes

#### Source

[packages/core/src/actions.ts:488](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L488)

***

### paste()

> **paste**(`page`?): `Promise`\<[`Shape`](/api-core/classes/shape/)[]\>

Paste

#### Parameters

• **page?**: [`Page`](/api-core/classes/page/)

The page to paste the shapes into. If not provided, the shapes will be pasted into the current page

#### Returns

`Promise`\<[`Shape`](/api-core/classes/shape/)[]\>

The pasted shapes

#### Source

[packages/core/src/actions.ts:367](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L367)

***

### redo()

> **redo**(): `void`

Redo

#### Returns

`void`

#### Source

[packages/core/src/actions.ts:86](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L86)

***

### remove()

> **remove**(`shapes`?): `void`

Remove selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to remove. If not provided, the selected shapes will be removed

#### Returns

`void`

#### Source

[packages/core/src/actions.ts:312](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L312)

***

### removePage()

> **removePage**(`page`): `void`

Remove a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

The page to remove

#### Returns

`void`

#### Source

[packages/core/src/actions.ts:124](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L124)

***

### reorderPage()

> **reorderPage**(`page`, `position`): [`Page`](/api-core/classes/page/)

Reorder a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

The page to reorder

• **position**: `number`

The new position of the page

#### Returns

[`Page`](/api-core/classes/page/)

The reordered page

#### Source

[packages/core/src/actions.ts:138](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L138)

***

### sendBackward()

> **sendBackward**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Send selected shapes backward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to send backward. If not provided, the selected shapes will be sent backward

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were sent backward

#### Source

[packages/core/src/actions.ts:642](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L642)

***

### sendToBack()

> **sendToBack**(`shapes`?): [`Shape`](/api-core/classes/shape/)[]

Send selected shapes to back

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to send to back. If not provided, the selected shapes will be sent to back

#### Returns

[`Shape`](/api-core/classes/shape/)[]

The shapes that were sent to back

#### Source

[packages/core/src/actions.ts:598](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L598)

***

### undo()

> **undo**(): `void`

Undo

#### Returns

`void`

#### Source

[packages/core/src/actions.ts:79](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L79)

***

### ungroup()

> **ungroup**(`shapes`?): `void`

Ungroup given groups.

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

The shapes to ungroup. If not provided, the selected shapes will be ungrouped

#### Returns

`void`

#### Source

[packages/core/src/actions.ts:552](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L552)

***

### update()

> **update**(`values`, `objs`?): `undefined` \| [`Obj`](/api-core/classes/obj/)[]

Update obj properties

#### Parameters

• **values**: `Partial`\<[`Shape`](/api-core/classes/shape/) & [`Doc`](/api-core/classes/doc/) & [`Page`](/api-core/classes/page/) & [`Box`](/api-core/classes/box/) & [`Path`](/api-core/classes/path/) & [`Line`](/api-core/classes/line/) & [`Rectangle`](/api-core/classes/rectangle/) & [`Ellipse`](/api-core/classes/ellipse/) & [`Text`](/api-core/classes/text/) & [`Image`](/api-core/classes/image/) & [`Icon`](/api-core/classes/icon/) & [`Connector`](/api-core/classes/connector/) & [`Freehand`](/api-core/classes/freehand/) & [`Highlighter`](/api-core/classes/highlighter/) & [`Group`](/api-core/classes/group/) & [`Frame`](/api-core/classes/frame/) & [`Mirror`](/api-core/classes/mirror/) & [`Embed`](/api-core/classes/embed/)\>

The properties to update

• **objs?**: [`Obj`](/api-core/classes/obj/)[]

The shapes to update. If not provided, the selected shapes will be updated

#### Returns

`undefined` \| [`Obj`](/api-core/classes/obj/)[]

The updated shapes

#### Source

[packages/core/src/actions.ts:211](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L211)
