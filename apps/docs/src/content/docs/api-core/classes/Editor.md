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

[packages/core/src/editor.ts:363](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L363)

## Properties

### actions

> **actions**: [`Actions`](/api-core/classes/actions/)

The actions

#### Source

[packages/core/src/editor.ts:240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L240)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

The canvas object

#### Source

[packages/core/src/editor.ts:265](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L265)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

The canvas element

#### Source

[packages/core/src/editor.ts:260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L260)

***

### clipboard

> **clipboard**: `Clipboard`

The clipboard object

#### Source

[packages/core/src/editor.ts:225](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L225)

***

### factory

> **factory**: [`ShapeFactory`](/api-core/classes/shapefactory/)

The shape factory

#### Source

[packages/core/src/editor.ts:235](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L235)

***

### keymap

> **keymap**: [`KeymapManager`](/api-core/classes/keymapmanager/)

The keymap manager

#### Source

[packages/core/src/editor.ts:245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L245)

***

### onActiveHandlerChange

> **onActiveHandlerChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`string`\>

The event emitter for active handler change

#### Source

[packages/core/src/editor.ts:140](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L140)

***

### onActiveHandlerLockChange

> **onActiveHandlerLockChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`boolean`\>

The event emitter for active handler lock change

#### Source

[packages/core/src/editor.ts:145](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L145)

***

### onCurrentPageChange

> **onCurrentPageChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Page`](/api-core/classes/page/)\>

The event emitter for current page change

#### Source

[packages/core/src/editor.ts:135](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L135)

***

### onDblClick

> **onDblClick**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DblClickEvent`](/api-core/interfaces/dblclickevent/)\>

The event emitter for double click

#### Source

[packages/core/src/editor.ts:175](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L175)

***

### onDrag

> **onDrag**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag

#### Source

[packages/core/src/editor.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L195)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag end

#### Source

[packages/core/src/editor.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L200)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag start

#### Source

[packages/core/src/editor.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L190)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

The event emitter for file drop

#### Source

[packages/core/src/editor.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L205)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key down

#### Source

[packages/core/src/editor.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L180)

***

### onKeyUp

> **onKeyUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key up

#### Source

[packages/core/src/editor.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L185)

***

### onPointerDown

> **onPointerDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer down

#### Source

[packages/core/src/editor.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L160)

***

### onPointerMove

> **onPointerMove**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer move

#### Source

[packages/core/src/editor.ts:165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L165)

***

### onPointerUp

> **onPointerUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer up

#### Source

[packages/core/src/editor.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L170)

***

### onRepaint

> **onRepaint**: [`TypedEvent`](/api-core/classes/typedevent/)\<`void`\>

The event emitter for repaint

#### Source

[packages/core/src/editor.ts:210](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L210)

***

### onScroll

> **onScroll**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`[]\>

The event emitter for scroll

#### Source

[packages/core/src/editor.ts:155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L155)

***

### onZoom

> **onZoom**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`\>

The event emitter for zoom

#### Source

[packages/core/src/editor.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L150)

***

### options

> **options**: [`EditorOptions`](/api-core/interfaces/editoroptions/)

The editor options

#### Source

[packages/core/src/editor.ts:120](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L120)

***

### parent

> **parent**: `HTMLElement`

The parent element

#### Source

[packages/core/src/editor.ts:255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L255)

***

### platform

> **platform**: `string`

The platform

#### Source

[packages/core/src/editor.ts:130](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L130)

***

### plugins

> **plugins**: `Record`\<`string`, [`Plugin`](/api-core/classes/plugin/)\>

The plugins

#### Source

[packages/core/src/editor.ts:125](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L125)

***

### selection

> **selection**: [`SelectionManager`](/api-core/classes/selectionmanager/)

The selection manager

#### Source

[packages/core/src/editor.ts:230](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L230)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

The store object

#### Source

[packages/core/src/editor.ts:215](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L215)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

The transform object

#### Source

[packages/core/src/editor.ts:220](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L220)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1197](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1197)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1180)

***

### checkCurrentPage()

> **checkCurrentPage**(): `void`

Check if the current page is valid

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:857](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L857)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1309](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1309)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:993](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L993)

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

[packages/core/src/editor.ts:1101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1101)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:909](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L909)

***

### getActiveHandler()

> **getActiveHandler**(): `null` \| [`Handler`](/api-core/classes/handler/)

Get the active handler

#### Returns

`null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[packages/core/src/editor.ts:1173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1173)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:1216](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1216)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[packages/core/src/editor.ts:1056](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1056)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[packages/core/src/editor.ts:1048](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1048)

***

### getCurrentPage()

> **getCurrentPage**(): `null` \| [`Page`](/api-core/classes/page/)

Get current page

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[packages/core/src/editor.ts:870](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L870)

***

### getCursor()

> **getCursor**(): `string`

Get cursor

#### Returns

`string`

#### Source

[packages/core/src/editor.ts:1342](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1342)

***

### getDarkMode()

> **getDarkMode**(): `boolean`

Get dark mode

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:916](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L916)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[packages/core/src/editor.ts:1357](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1357)

***

### getEnabled()

> **getEnabled**(): `boolean`

Get enabled state

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:842](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L842)

***

### getGridSize()

> **getGridSize**(): `number`[]

Get grid size

#### Returns

`number`[]

#### Source

[packages/core/src/editor.ts:935](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L935)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[packages/core/src/editor.ts:1001](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1001)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[packages/core/src/editor.ts:899](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L899)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[packages/core/src/editor.ts:835](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L835)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[packages/core/src/editor.ts:1064](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1064)

***

### getShowGrid()

> **getShowGrid**(): `boolean`

Get show grid state

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:950](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L950)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[packages/core/src/editor.ts:1027](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1027)

***

### getSnapToGrid()

> **getSnapToGrid**(): `boolean`

Get snap to grid

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:965](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L965)

***

### getSnapToObjects()

> **getSnapToObjects**(): `boolean`

Get snap to object

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:979](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L979)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1385](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1385)

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

[packages/core/src/editor.ts:1020](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1020)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[packages/core/src/editor.ts:1371](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1371)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1329](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1329)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[packages/core/src/editor.ts:1402](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1402)

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

[packages/core/src/editor.ts:1124](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1124)

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

[packages/core/src/editor.ts:1133](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1133)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1159](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1159)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1206](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1206)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:877](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L877)

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

[packages/core/src/editor.ts:1349](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1349)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:923](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L923)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1364](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1364)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enabled state

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:849](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L849)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:942](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L942)

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

[packages/core/src/editor.ts:1008](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1008)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1071](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1071)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:957](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L957)

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

[packages/core/src/editor.ts:1034](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1034)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:972](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L972)

***

### setSnapToObjects()

> **setSnapToObjects**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:986](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L986)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1318](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1318)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom scale while keeping the screen center

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1091](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1091)
