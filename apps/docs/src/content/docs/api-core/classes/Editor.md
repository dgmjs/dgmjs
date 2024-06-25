---
editUrl: false
next: false
prev: false
title: "Editor"
---

The editor

## Constructors

### new Editor()

> **new Editor**(`editorHolder`, `options`, `plugins`): [`Editor`](/api-core/classes/editor/)

constructor

#### Parameters

• **editorHolder**: `HTMLElement`

• **options**: `Partial`\<[`EditorOptions`](/api-core/interfaces/editoroptions/)\>

• **plugins**: [`Plugin`](/api-core/classes/plugin/)[]= `[]`

#### Returns

[`Editor`](/api-core/classes/editor/)

#### Source

[editor.ts:322](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L322)

## Properties

### actions

> **actions**: [`Actions`](/api-core/classes/actions/)

The actions

#### Source

[editor.ts:225](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L225)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

The canvas object

#### Source

[editor.ts:250](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L250)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

The canvas element

#### Source

[editor.ts:245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L245)

***

### clipboard

> **clipboard**: `Clipboard`

The clipboard object

#### Source

[editor.ts:210](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L210)

***

### factory

> **factory**: [`ShapeFactory`](/api-core/classes/shapefactory/)

The shape factory

#### Source

[editor.ts:220](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L220)

***

### keymap

> **keymap**: [`KeymapManager`](/api-core/classes/keymapmanager/)

The keymap manager

#### Source

[editor.ts:230](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L230)

***

### onActiveHandlerChange

> **onActiveHandlerChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`string`\>

The event emitter for active handler change

#### Source

[editor.ts:130](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L130)

***

### onActiveHandlerLockChange

> **onActiveHandlerLockChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`boolean`\>

The event emitter for active handler lock change

#### Source

[editor.ts:135](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L135)

***

### onCurrentPageChange

> **onCurrentPageChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Page`](/api-core/classes/page/)\>

The event emitter for current page change

#### Source

[editor.ts:125](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L125)

***

### onDblClick

> **onDblClick**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DblClickEvent`](/api-core/interfaces/dblclickevent/)\>

The event emitter for double click

#### Source

[editor.ts:165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L165)

***

### onDrag

> **onDrag**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag

#### Source

[editor.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L180)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag end

#### Source

[editor.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L185)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag start

#### Source

[editor.ts:175](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L175)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

The event emitter for file drop

#### Source

[editor.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L190)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key down

#### Source

[editor.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L170)

***

### onPointerDown

> **onPointerDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer down

#### Source

[editor.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L150)

***

### onPointerMove

> **onPointerMove**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer move

#### Source

[editor.ts:155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L155)

***

### onPointerUp

> **onPointerUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer up

#### Source

[editor.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L160)

***

### onRepaint

> **onRepaint**: [`TypedEvent`](/api-core/classes/typedevent/)\<`void`\>

The event emitter for repaint

#### Source

[editor.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L195)

***

### onScroll

> **onScroll**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`[]\>

The event emitter for scroll

#### Source

[editor.ts:145](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L145)

***

### onZoom

> **onZoom**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`\>

The event emitter for zoom

#### Source

[editor.ts:140](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L140)

***

### options

> **options**: [`EditorOptions`](/api-core/interfaces/editoroptions/)

The editor options

#### Source

[editor.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L110)

***

### parent

> **parent**: `HTMLElement`

The parent element

#### Source

[editor.ts:240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L240)

***

### platform

> **platform**: `string`

The platform

#### Source

[editor.ts:120](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L120)

***

### plugins

> **plugins**: `Record`\<`string`, [`Plugin`](/api-core/classes/plugin/)\>

The plugins

#### Source

[editor.ts:115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L115)

***

### selection

> **selection**: [`SelectionManager`](/api-core/classes/selectionmanager/)

The selection manager

#### Source

[editor.ts:215](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L215)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

The store object

#### Source

[editor.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L200)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

The transform object

#### Source

[editor.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L205)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[editor.ts:1066](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1066)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:1049](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1049)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[editor.ts:1172](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1172)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:862](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L862)

***

### fitToScreen()

> **fitToScreen**(`scaleAdjust`, `maxScale`): `void`

Fit doc to screen and move to center

#### Parameters

• **scaleAdjust**: `number`= `1`

• **maxScale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:970](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L970)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:778](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L778)

***

### getActiveHandler()

> **getActiveHandler**(): `null` \| [`Handler`](/api-core/classes/handler/)

Get the active handler

#### Returns

`null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:1042](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1042)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:1085](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1085)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:925](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L925)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:917](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L917)

***

### getCurrentPage()

> **getCurrentPage**(): `null` \| [`Page`](/api-core/classes/page/)

Get current page

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:739](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L739)

***

### getDarkMode()

> **getDarkMode**(): `boolean`

Get dark mode

#### Returns

`boolean`

#### Source

[editor.ts:785](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L785)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1217](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1217)

***

### getEnabled()

> **getEnabled**(): `boolean`

Get enabled state

#### Returns

`boolean`

#### Source

[editor.ts:724](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L724)

***

### getGridSize()

> **getGridSize**(): `number`[]

Get grid size

#### Returns

`number`[]

#### Source

[editor.ts:804](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L804)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:870](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L870)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:768](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L768)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:717](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L717)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:933](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L933)

***

### getShowGrid()

> **getShowGrid**(): `boolean`

Get show grid state

#### Returns

`boolean`

#### Source

[editor.ts:819](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L819)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:896](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L896)

***

### getSnapToGrid()

> **getSnapToGrid**(): `boolean`

Get snap to grid

#### Returns

`boolean`

#### Source

[editor.ts:834](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L834)

***

### getSnapToObject()

> **getSnapToObject**(): `boolean`

Get snap to object

#### Returns

`boolean`

#### Source

[editor.ts:848](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L848)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1244](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1244)

***

### moveOrigin()

> **moveOrigin**(`dx`, `dy`): `void`

Move origin point

#### Parameters

• **dx**: `number`

• **dy**: `number`

#### Returns

`void`

#### Source

[editor.ts:889](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L889)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1231](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1231)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:1194](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1194)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1261](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1261)

***

### scroll()

> **scroll**(`dx`, `dy`): `void`

Scroll screen

#### Parameters

• **dx**: `number`

• **dy**: `number`

#### Returns

`void`

#### Source

[editor.ts:993](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L993)

***

### scrollCenterTo()

> **scrollCenterTo**(`center`?): `void`

Scroll screen center to a point in GCS

#### Parameters

• **center?**: `number`[]

center point in GCS. If not provided, scroll to the center
  of the page size or the center of the shapes

#### Returns

`void`

#### Source

[editor.ts:1002](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1002)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:1028](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1028)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:1075](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1075)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:746](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L746)

***

### setCursor()

> **setCursor**(`cursor`, `angle`): `void`

Set cursor

#### Parameters

• **cursor**: `string`

• **angle**: `number`= `0`

#### Returns

`void`

#### Source

[editor.ts:1209](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1209)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:792](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L792)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:1224](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1224)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enabled state

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:731](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L731)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:811](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L811)

***

### setOrigin()

> **setOrigin**(`x`, `y`): `void`

Set origin point

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Source

[editor.ts:877](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L877)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:940](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L940)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:826](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L826)

***

### setSize()

> **setSize**(`width`, `height`): `void`

Set canvas element size

#### Parameters

• **width**: `number`

• **height**: `number`

#### Returns

`void`

#### Source

[editor.ts:903](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L903)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:841](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L841)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:855](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L855)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:1181](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1181)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom scale while keeping the screen center

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:960](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L960)
