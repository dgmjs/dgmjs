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

[packages/core/src/editor.ts:364](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L364)

## Properties

### actions

> **actions**: [`Actions`](/api-core/classes/actions/)

The actions

#### Source

[packages/core/src/editor.ts:241](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L241)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

The canvas object

#### Source

[packages/core/src/editor.ts:266](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L266)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

The canvas element

#### Source

[packages/core/src/editor.ts:261](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L261)

***

### clipboard

> **clipboard**: `Clipboard`

The clipboard object

#### Source

[packages/core/src/editor.ts:226](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L226)

***

### factory

> **factory**: [`ShapeFactory`](/api-core/classes/shapefactory/)

The shape factory

#### Source

[packages/core/src/editor.ts:236](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L236)

***

### keymap

> **keymap**: [`KeymapManager`](/api-core/classes/keymapmanager/)

The keymap manager

#### Source

[packages/core/src/editor.ts:246](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L246)

***

### onActiveHandlerChange

> **onActiveHandlerChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`string`\>

The event emitter for active handler change

#### Source

[packages/core/src/editor.ts:141](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L141)

***

### onActiveHandlerLockChange

> **onActiveHandlerLockChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`boolean`\>

The event emitter for active handler lock change

#### Source

[packages/core/src/editor.ts:146](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L146)

***

### onCurrentPageChange

> **onCurrentPageChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Page`](/api-core/classes/page/)\>

The event emitter for current page change

#### Source

[packages/core/src/editor.ts:136](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L136)

***

### onDblClick

> **onDblClick**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DblClickEvent`](/api-core/interfaces/dblclickevent/)\>

The event emitter for double click

#### Source

[packages/core/src/editor.ts:176](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L176)

***

### onDrag

> **onDrag**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag

#### Source

[packages/core/src/editor.ts:196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L196)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag end

#### Source

[packages/core/src/editor.ts:201](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L201)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag start

#### Source

[packages/core/src/editor.ts:191](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L191)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

The event emitter for file drop

#### Source

[packages/core/src/editor.ts:206](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L206)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key down

#### Source

[packages/core/src/editor.ts:181](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L181)

***

### onKeyUp

> **onKeyUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key up

#### Source

[packages/core/src/editor.ts:186](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L186)

***

### onPointerDown

> **onPointerDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer down

#### Source

[packages/core/src/editor.ts:161](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L161)

***

### onPointerMove

> **onPointerMove**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer move

#### Source

[packages/core/src/editor.ts:166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L166)

***

### onPointerUp

> **onPointerUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

The event emitter for pointer up

#### Source

[packages/core/src/editor.ts:171](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L171)

***

### onRepaint

> **onRepaint**: [`TypedEvent`](/api-core/classes/typedevent/)\<`void`\>

The event emitter for repaint

#### Source

[packages/core/src/editor.ts:211](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L211)

***

### onScroll

> **onScroll**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`[]\>

The event emitter for scroll

#### Source

[packages/core/src/editor.ts:156](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L156)

***

### onZoom

> **onZoom**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`\>

The event emitter for zoom

#### Source

[packages/core/src/editor.ts:151](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L151)

***

### options

> **options**: [`EditorOptions`](/api-core/interfaces/editoroptions/)

The editor options

#### Source

[packages/core/src/editor.ts:121](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L121)

***

### parent

> **parent**: `HTMLElement`

The parent element

#### Source

[packages/core/src/editor.ts:256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L256)

***

### platform

> **platform**: `string`

The platform

#### Source

[packages/core/src/editor.ts:131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L131)

***

### plugins

> **plugins**: `Record`\<`string`, [`Plugin`](/api-core/classes/plugin/)\>

The plugins

#### Source

[packages/core/src/editor.ts:126](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L126)

***

### selection

> **selection**: [`SelectionManager`](/api-core/classes/selectionmanager/)

The selection manager

#### Source

[packages/core/src/editor.ts:231](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L231)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

The store object

#### Source

[packages/core/src/editor.ts:216](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L216)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

The transform object

#### Source

[packages/core/src/editor.ts:221](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L221)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1199](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1199)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1182)

***

### checkCurrentPage()

> **checkCurrentPage**(): `void`

Check if the current page is valid

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:859](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L859)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1324](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1324)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:995](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L995)

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

[packages/core/src/editor.ts:1103](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1103)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:911](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L911)

***

### getActiveHandler()

> **getActiveHandler**(): `null` \| [`Handler`](/api-core/classes/handler/)

Get the active handler

#### Returns

`null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[packages/core/src/editor.ts:1175](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1175)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:1218](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1218)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[packages/core/src/editor.ts:1058](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1058)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[packages/core/src/editor.ts:1050](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1050)

***

### getCurrentPage()

> **getCurrentPage**(): `null` \| [`Page`](/api-core/classes/page/)

Get current page

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[packages/core/src/editor.ts:872](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L872)

***

### getCursor()

> **getCursor**(): `string`

Get cursor

#### Returns

`string`

#### Source

[packages/core/src/editor.ts:1357](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1357)

***

### getDarkMode()

> **getDarkMode**(): `boolean`

Get dark mode

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:918](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L918)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[packages/core/src/editor.ts:1372](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1372)

***

### getEnabled()

> **getEnabled**(): `boolean`

Get enabled state

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:844](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L844)

***

### getGridSize()

> **getGridSize**(): `number`[]

Get grid size

#### Returns

`number`[]

#### Source

[packages/core/src/editor.ts:937](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L937)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[packages/core/src/editor.ts:1003](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1003)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[packages/core/src/editor.ts:901](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L901)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[packages/core/src/editor.ts:837](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L837)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[packages/core/src/editor.ts:1066](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1066)

***

### getShowGrid()

> **getShowGrid**(): `boolean`

Get show grid state

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:952](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L952)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[packages/core/src/editor.ts:1029](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1029)

***

### getSnapToGrid()

> **getSnapToGrid**(): `boolean`

Get snap to grid

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:967](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L967)

***

### getSnapToObjects()

> **getSnapToObjects**(): `boolean`

Get snap to object

#### Returns

`boolean`

#### Source

[packages/core/src/editor.ts:981](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L981)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1400](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1400)

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

[packages/core/src/editor.ts:1022](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1022)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[packages/core/src/editor.ts:1386](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1386)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1344](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1344)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[packages/core/src/editor.ts:1417](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1417)

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

[packages/core/src/editor.ts:1126](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1126)

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

[packages/core/src/editor.ts:1135](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1135)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1161](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1161)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1208](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1208)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:879](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L879)

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

[packages/core/src/editor.ts:1364](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1364)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:925](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L925)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1379](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1379)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enabled state

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:851](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L851)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:944](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L944)

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

[packages/core/src/editor.ts:1010](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1010)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1073](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1073)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:959](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L959)

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

[packages/core/src/editor.ts:1036](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1036)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:974](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L974)

***

### setSnapToObjects()

> **setSnapToObjects**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:988](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L988)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1333](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1333)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom scale while keeping the screen center

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[packages/core/src/editor.ts:1093](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1093)
