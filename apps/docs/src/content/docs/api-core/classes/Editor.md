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

[editor.ts:363](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L363)

## Properties

### actions

> **actions**: [`Actions`](/api-core/classes/actions/)

The actions

#### Source

[editor.ts:240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L240)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

The canvas object

#### Source

[editor.ts:265](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L265)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

The canvas element

#### Source

[editor.ts:260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L260)

***

### clipboard

> **clipboard**: `Clipboard`

The clipboard object

#### Source

[editor.ts:225](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L225)

***

### factory

> **factory**: [`ShapeFactory`](/api-core/classes/shapefactory/)

The shape factory

#### Source

[editor.ts:235](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L235)

***

### keymap

> **keymap**: [`KeymapManager`](/api-core/classes/keymapmanager/)

The keymap manager

#### Source

[editor.ts:245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L245)

***

### onActiveHandlerChange

> **onActiveHandlerChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`string`\>

The event emitter for active handler change

#### Source

[editor.ts:140](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L140)

***

### onActiveHandlerLockChange

> **onActiveHandlerLockChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`boolean`\>

The event emitter for active handler lock change

#### Source

[editor.ts:145](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L145)

***

### onCurrentPageChange

> **onCurrentPageChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Page`](/api-core/classes/page/)\>

The event emitter for current page change

#### Source

[editor.ts:135](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L135)

***

### onDblClick

> **onDblClick**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DblClickEvent`](/api-core/interfaces/dblclickevent/)\>

The event emitter for double click

#### Source

[editor.ts:175](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L175)

***

### onDrag

> **onDrag**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag

#### Source

[editor.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L195)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag end

#### Source

[editor.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L200)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag start

#### Source

[editor.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L190)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

The event emitter for file drop

#### Source

[editor.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L205)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key down

#### Source

[editor.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L180)

***

### onKeyUp

> **onKeyUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key up

#### Source

[editor.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L185)

***

### onPointerDown

> **onPointerDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer down

#### Source

[editor.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L160)

***

### onPointerMove

> **onPointerMove**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer move

#### Source

[editor.ts:165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L165)

***

### onPointerUp

> **onPointerUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer up

#### Source

[editor.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L170)

***

### onRepaint

> **onRepaint**: [`TypedEvent`](/api-core/classes/typedevent/)\<`void`\>

The event emitter for repaint

#### Source

[editor.ts:210](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L210)

***

### onScroll

> **onScroll**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`[]\>

The event emitter for scroll

#### Source

[editor.ts:155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L155)

***

### onZoom

> **onZoom**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`\>

The event emitter for zoom

#### Source

[editor.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L150)

***

### options

> **options**: [`EditorOptions`](/api-core/interfaces/editoroptions/)

The editor options

#### Source

[editor.ts:120](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L120)

***

### parent

> **parent**: `HTMLElement`

The parent element

#### Source

[editor.ts:255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L255)

***

### platform

> **platform**: `string`

The platform

#### Source

[editor.ts:130](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L130)

***

### plugins

> **plugins**: `Record`\<`string`, [`Plugin`](/api-core/classes/plugin/)\>

The plugins

#### Source

[editor.ts:125](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L125)

***

### selection

> **selection**: [`SelectionManager`](/api-core/classes/selectionmanager/)

The selection manager

#### Source

[editor.ts:230](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L230)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

The store object

#### Source

[editor.ts:215](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L215)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

The transform object

#### Source

[editor.ts:220](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L220)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[editor.ts:1181](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1181)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:1164](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1164)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[editor.ts:1293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1293)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:977](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L977)

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

[editor.ts:1085](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1085)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:893](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L893)

***

### getActiveHandler()

> **getActiveHandler**(): `null` \| [`Handler`](/api-core/classes/handler/)

Get the active handler

#### Returns

`null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:1157](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1157)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:1200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1200)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:1040](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1040)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:1032](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1032)

***

### getCurrentPage()

> **getCurrentPage**(): `null` \| [`Page`](/api-core/classes/page/)

Get current page

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:854](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L854)

***

### getCursor()

> **getCursor**(): `string`

Get cursor

#### Returns

`string`

#### Source

[editor.ts:1326](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1326)

***

### getDarkMode()

> **getDarkMode**(): `boolean`

Get dark mode

#### Returns

`boolean`

#### Source

[editor.ts:900](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L900)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1341](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1341)

***

### getEnabled()

> **getEnabled**(): `boolean`

Get enabled state

#### Returns

`boolean`

#### Source

[editor.ts:839](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L839)

***

### getGridSize()

> **getGridSize**(): `number`[]

Get grid size

#### Returns

`number`[]

#### Source

[editor.ts:919](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L919)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:985](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L985)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:883](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L883)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:832](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L832)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:1048](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1048)

***

### getShowGrid()

> **getShowGrid**(): `boolean`

Get show grid state

#### Returns

`boolean`

#### Source

[editor.ts:934](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L934)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:1011](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1011)

***

### getSnapToGrid()

> **getSnapToGrid**(): `boolean`

Get snap to grid

#### Returns

`boolean`

#### Source

[editor.ts:949](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L949)

***

### getSnapToObjects()

> **getSnapToObjects**(): `boolean`

Get snap to object

#### Returns

`boolean`

#### Source

[editor.ts:963](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L963)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1369](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1369)

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

[editor.ts:1004](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1004)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1355](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1355)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:1313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1313)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1386](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1386)

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

[editor.ts:1108](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1108)

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

[editor.ts:1117](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1117)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:1143](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1143)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:1190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1190)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:861](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L861)

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

[editor.ts:1333](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1333)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:907](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L907)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:1348](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1348)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enabled state

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:846](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L846)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:926](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L926)

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

[editor.ts:992](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L992)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:1055](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1055)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:941](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L941)

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

[editor.ts:1018](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1018)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:956](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L956)

***

### setSnapToObjects()

> **setSnapToObjects**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:970](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L970)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:1302](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1302)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom scale while keeping the screen center

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:1075](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1075)
