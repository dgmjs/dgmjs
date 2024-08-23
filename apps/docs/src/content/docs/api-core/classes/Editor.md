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

[editor.ts:344](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L344)

## Properties

### actions

> **actions**: [`Actions`](/api-core/classes/actions/)

The actions

#### Source

[editor.ts:234](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L234)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

The canvas object

#### Source

[editor.ts:259](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L259)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

The canvas element

#### Source

[editor.ts:254](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L254)

***

### clipboard

> **clipboard**: `Clipboard`

The clipboard object

#### Source

[editor.ts:219](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L219)

***

### factory

> **factory**: [`ShapeFactory`](/api-core/classes/shapefactory/)

The shape factory

#### Source

[editor.ts:229](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L229)

***

### keymap

> **keymap**: [`KeymapManager`](/api-core/classes/keymapmanager/)

The keymap manager

#### Source

[editor.ts:239](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L239)

***

### onActiveHandlerChange

> **onActiveHandlerChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`string`\>

The event emitter for active handler change

#### Source

[editor.ts:139](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L139)

***

### onActiveHandlerLockChange

> **onActiveHandlerLockChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`boolean`\>

The event emitter for active handler lock change

#### Source

[editor.ts:144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L144)

***

### onCurrentPageChange

> **onCurrentPageChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Page`](/api-core/classes/page/)\>

The event emitter for current page change

#### Source

[editor.ts:134](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L134)

***

### onDblClick

> **onDblClick**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DblClickEvent`](/api-core/interfaces/dblclickevent/)\>

The event emitter for double click

#### Source

[editor.ts:174](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L174)

***

### onDrag

> **onDrag**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag

#### Source

[editor.ts:189](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L189)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag end

#### Source

[editor.ts:194](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L194)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag start

#### Source

[editor.ts:184](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L184)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

The event emitter for file drop

#### Source

[editor.ts:199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L199)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key down

#### Source

[editor.ts:179](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L179)

***

### onPointerDown

> **onPointerDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer down

#### Source

[editor.ts:159](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L159)

***

### onPointerMove

> **onPointerMove**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer move

#### Source

[editor.ts:164](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L164)

***

### onPointerUp

> **onPointerUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer up

#### Source

[editor.ts:169](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L169)

***

### onRepaint

> **onRepaint**: [`TypedEvent`](/api-core/classes/typedevent/)\<`void`\>

The event emitter for repaint

#### Source

[editor.ts:204](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L204)

***

### onScroll

> **onScroll**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`[]\>

The event emitter for scroll

#### Source

[editor.ts:154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L154)

***

### onZoom

> **onZoom**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`\>

The event emitter for zoom

#### Source

[editor.ts:149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L149)

***

### options

> **options**: [`EditorOptions`](/api-core/interfaces/editoroptions/)

The editor options

#### Source

[editor.ts:119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L119)

***

### parent

> **parent**: `HTMLElement`

The parent element

#### Source

[editor.ts:249](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L249)

***

### platform

> **platform**: `string`

The platform

#### Source

[editor.ts:129](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L129)

***

### plugins

> **plugins**: `Record`\<`string`, [`Plugin`](/api-core/classes/plugin/)\>

The plugins

#### Source

[editor.ts:124](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L124)

***

### selection

> **selection**: [`SelectionManager`](/api-core/classes/selectionmanager/)

The selection manager

#### Source

[editor.ts:224](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L224)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

The store object

#### Source

[editor.ts:209](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L209)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

The transform object

#### Source

[editor.ts:214](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L214)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[editor.ts:1098](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1098)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:1081](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1081)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[editor.ts:1210](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1210)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:894](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L894)

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

[editor.ts:1002](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1002)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:810](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L810)

***

### getActiveHandler()

> **getActiveHandler**(): `null` \| [`Handler`](/api-core/classes/handler/)

Get the active handler

#### Returns

`null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:1074](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1074)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:1117](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1117)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:957](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L957)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:949](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L949)

***

### getCurrentPage()

> **getCurrentPage**(): `null` \| [`Page`](/api-core/classes/page/)

Get current page

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:771](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L771)

***

### getCursor()

> **getCursor**(): `string`

Get cursor

#### Returns

`string`

#### Source

[editor.ts:1245](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1245)

***

### getDarkMode()

> **getDarkMode**(): `boolean`

Get dark mode

#### Returns

`boolean`

#### Source

[editor.ts:817](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L817)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1260)

***

### getEnabled()

> **getEnabled**(): `boolean`

Get enabled state

#### Returns

`boolean`

#### Source

[editor.ts:756](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L756)

***

### getGridSize()

> **getGridSize**(): `number`[]

Get grid size

#### Returns

`number`[]

#### Source

[editor.ts:836](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L836)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:902](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L902)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:800](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L800)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:749](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L749)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:965](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L965)

***

### getShowGrid()

> **getShowGrid**(): `boolean`

Get show grid state

#### Returns

`boolean`

#### Source

[editor.ts:851](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L851)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:928](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L928)

***

### getSnapToGrid()

> **getSnapToGrid**(): `boolean`

Get snap to grid

#### Returns

`boolean`

#### Source

[editor.ts:866](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L866)

***

### getSnapToObject()

> **getSnapToObject**(): `boolean`

Get snap to object

#### Returns

`boolean`

#### Source

[editor.ts:880](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L880)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1288)

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

[editor.ts:921](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L921)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1274](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1274)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:1230](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1230)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1305](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1305)

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

[editor.ts:1025](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1025)

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

[editor.ts:1034](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1034)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:1060](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1060)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:1107](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1107)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:778](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L778)

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

[editor.ts:1252](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1252)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:824](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L824)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:1267](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1267)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enabled state

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:763](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L763)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:843](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L843)

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

[editor.ts:909](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L909)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:972](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L972)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:858](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L858)

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

[editor.ts:935](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L935)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:873](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L873)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:887](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L887)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:1219](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1219)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom scale while keeping the screen center

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:992](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L992)
