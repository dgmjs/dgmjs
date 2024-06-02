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

[editor.ts:239](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L239)

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

[editor.ts:224](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L224)

***

### currentPage

> **currentPage**: `null` \| [`Page`](/api-core/classes/page/)

The current page

#### Source

[editor.ts:270](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L270)

***

### factory

> **factory**: [`ShapeFactory`](/api-core/classes/shapefactory/)

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

[editor.ts:255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L255)

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

[editor.ts:1126](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1126)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:1109](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1109)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:922](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L922)

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

[editor.ts:1030](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1030)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:838](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L838)

***

### getActiveHandler()

> **getActiveHandler**(): `null` \| [`Handler`](/api-core/classes/handler/)

Get the active handler

#### Returns

`null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:1102](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1102)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:1145](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1145)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:985](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L985)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:977](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L977)

***

### getCurrentPage()

> **getCurrentPage**(): `null` \| [`Page`](/api-core/classes/page/)

Get current page

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:799](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L799)

***

### getDarkMode()

> **getDarkMode**(): `boolean`

Get dark mode

#### Returns

`boolean`

#### Source

[editor.ts:845](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L845)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1280](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1280)

***

### getEnabled()

> **getEnabled**(): `boolean`

Get enabled state

#### Returns

`boolean`

#### Source

[editor.ts:784](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L784)

***

### getGridSize()

> **getGridSize**(): `number`[]

Get grid size

#### Returns

`number`[]

#### Source

[editor.ts:864](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L864)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:930](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L930)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:828](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L828)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:777](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L777)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:993](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L993)

***

### getShowGrid()

> **getShowGrid**(): `boolean`

Get show grid state

#### Returns

`boolean`

#### Source

[editor.ts:879](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L879)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:956](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L956)

***

### getSnapToGrid()

> **getSnapToGrid**(): `boolean`

Get snap to grid

#### Returns

`boolean`

#### Source

[editor.ts:894](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L894)

***

### getSnapToObject()

> **getSnapToObject**(): `boolean`

Get snap to object

#### Returns

`boolean`

#### Source

[editor.ts:908](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L908)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1307](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1307)

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

[editor.ts:949](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L949)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1294](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1294)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:1257](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1257)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1324](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1324)

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

[editor.ts:1053](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1053)

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

[editor.ts:1062](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1062)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:1088](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1088)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:1135](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1135)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:806](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L806)

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

[editor.ts:1272](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1272)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:852](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L852)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:1287](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1287)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enabled state

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:791](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L791)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:871](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L871)

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

[editor.ts:937](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L937)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:1000](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1000)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:886](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L886)

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

[editor.ts:963](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L963)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:901](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L901)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:915](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L915)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:1244](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1244)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom scale while keeping the screen center

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:1020](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1020)
