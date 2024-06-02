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

[editor.ts:362](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L362)

## Properties

### actions

> **actions**: [`Actions`](/api-core/classes/actions/)

The actions

#### Source

[editor.ts:239](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L239)

***

### activeHandler

> **activeHandler**: `null` \| [`Handler`](/api-core/classes/handler/)

The active handler

#### Source

[editor.ts:317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L317)

***

### activeHandlerLock

> **activeHandlerLock**: `boolean`

The active handler lock

#### Source

[editor.ts:322](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L322)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

The canvas object

#### Source

[editor.ts:270](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L270)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

The canvas element

#### Source

[editor.ts:265](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L265)

***

### clipboard

> **clipboard**: `Clipboard`

The clipboard object

#### Source

[editor.ts:224](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L224)

***

### currentPage

> **currentPage**: `null` \| [`Page`](/api-core/classes/page/)

The current page

#### Source

[editor.ts:255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L255)

***

### factory

> **factory**: `ShapeFactory`

The shape factory

#### Source

[editor.ts:234](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L234)

***

### keymap

> **keymap**: [`KeymapManager`](/api-core/classes/keymapmanager/)

The keymap manager

#### Source

[editor.ts:244](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L244)

***

### onActiveHandlerChange

> **onActiveHandlerChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`string`\>

The event emitter for active handler change

#### Source

[editor.ts:144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L144)

***

### onActiveHandlerLockChange

> **onActiveHandlerLockChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`boolean`\>

The event emitter for active handler lock change

#### Source

[editor.ts:149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L149)

***

### onCurrentPageChange

> **onCurrentPageChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Page`](/api-core/classes/page/)\>

The event emitter for current page change

#### Source

[editor.ts:139](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L139)

***

### onDblClick

> **onDblClick**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DblClickEvent`](/api-core/interfaces/dblclickevent/)\>

The event emitter for double click

#### Source

[editor.ts:179](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L179)

***

### onDrag

> **onDrag**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag

#### Source

[editor.ts:194](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L194)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag end

#### Source

[editor.ts:199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L199)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag start

#### Source

[editor.ts:189](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L189)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

The event emitter for file drop

#### Source

[editor.ts:204](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L204)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key down

#### Source

[editor.ts:184](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L184)

***

### onPointerDown

> **onPointerDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer down

#### Source

[editor.ts:164](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L164)

***

### onPointerMove

> **onPointerMove**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer move

#### Source

[editor.ts:169](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L169)

***

### onPointerUp

> **onPointerUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer up

#### Source

[editor.ts:174](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L174)

***

### onRepaint

> **onRepaint**: [`TypedEvent`](/api-core/classes/typedevent/)\<`void`\>

The event emitter for repaint

#### Source

[editor.ts:209](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L209)

***

### onScroll

> **onScroll**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`[]\>

The event emitter for scroll

#### Source

[editor.ts:159](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L159)

***

### onZoom

> **onZoom**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`\>

The event emitter for zoom

#### Source

[editor.ts:154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L154)

***

### parent

> **parent**: `HTMLElement`

The parent element

#### Source

[editor.ts:260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L260)

***

### platform

> **platform**: `string`

The platform

#### Source

[editor.ts:134](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L134)

***

### plugins

> **plugins**: `Record`\<`string`, [`Plugin`](/api-core/classes/plugin/)\>

The plugins

#### Source

[editor.ts:129](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L129)

***

### selection

> **selection**: [`SelectionManager`](/api-core/classes/selectionmanager/)

The selection manager

#### Source

[editor.ts:229](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L229)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

The store object

#### Source

[editor.ts:214](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L214)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

The transform object

#### Source

[editor.ts:219](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L219)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[editor.ts:1125](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1125)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:1108](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1108)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:921](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L921)

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

[editor.ts:1029](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1029)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:837](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L837)

***

### getActiveHandler()

> **getActiveHandler**(): `null` \| [`Handler`](/api-core/classes/handler/)

Get the active handler

#### Returns

`null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:1101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1101)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:1144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1144)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:984](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L984)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:976](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L976)

***

### getCurrentPage()

> **getCurrentPage**(): `null` \| [`Page`](/api-core/classes/page/)

Get current page

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:798](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L798)

***

### getDarkMode()

> **getDarkMode**(): `boolean`

Get dark mode

#### Returns

`boolean`

#### Source

[editor.ts:844](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L844)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1279](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1279)

***

### getEnabled()

> **getEnabled**(): `boolean`

Get enabled state

#### Returns

`boolean`

#### Source

[editor.ts:783](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L783)

***

### getGridSize()

> **getGridSize**(): `number`[]

Get grid size

#### Returns

`number`[]

#### Source

[editor.ts:863](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L863)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:929](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L929)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:827](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L827)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:776](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L776)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:992](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L992)

***

### getShowGrid()

> **getShowGrid**(): `boolean`

Get show grid state

#### Returns

`boolean`

#### Source

[editor.ts:878](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L878)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:955](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L955)

***

### getSnapToGrid()

> **getSnapToGrid**(): `boolean`

Get snap to grid

#### Returns

`boolean`

#### Source

[editor.ts:893](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L893)

***

### getSnapToObject()

> **getSnapToObject**(): `boolean`

Get snap to object

#### Returns

`boolean`

#### Source

[editor.ts:907](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L907)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1306](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1306)

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

[editor.ts:948](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L948)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1293)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:1256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1256)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1323](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1323)

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

[editor.ts:1052](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1052)

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

[editor.ts:1061](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1061)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:1087](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1087)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:1134](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1134)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:805](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L805)

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

[editor.ts:1271](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1271)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:851](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L851)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:1286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1286)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enabled state

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:790](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L790)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:870](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L870)

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

[editor.ts:936](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L936)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:999](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L999)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:885](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L885)

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

[editor.ts:962](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L962)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:900](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L900)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:914](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L914)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:1243](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1243)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom scale while keeping the screen center

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:1019](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1019)
