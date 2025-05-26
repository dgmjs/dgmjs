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

[actions.ts:70](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L70)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[actions.ts:68](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L68)

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

[actions.ts:94](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L94)

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

[actions.ts:770](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L770)

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

[actions.ts:705](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L705)

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

[actions.ts:835](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L835)

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

[actions.ts:645](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L645)

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

[actions.ts:800](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L800)

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

[actions.ts:675](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L675)

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

[actions.ts:740](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L740)

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

[actions.ts:878](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L878)

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

[actions.ts:601](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L601)

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

[actions.ts:557](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L557)

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

[actions.ts:317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L317)

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

[actions.ts:330](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L330)

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

[actions.ts:421](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L421)

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

[actions.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L150)

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

[actions.ts:509](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L509)

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

[actions.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L180)

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

[actions.ts:469](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L469)

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

[actions.ts:353](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L353)

***

### redo()

> **redo**(): `void`

Redo

#### Returns

`void`

#### Source

[actions.ts:84](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L84)

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

[actions.ts:298](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L298)

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

[actions.ts:120](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L120)

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

[actions.ts:134](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L134)

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

[actions.ts:623](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L623)

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

[actions.ts:579](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L579)

***

### undo()

> **undo**(): `void`

Undo

#### Returns

`void`

#### Source

[actions.ts:77](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L77)

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

[actions.ts:533](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L533)

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

[actions.ts:206](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L206)
