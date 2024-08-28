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

[editor.ts:345](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L345)

## Properties

### actions

> **actions**: [`Actions`](/api-core/classes/actions/)

The actions

#### Source

[editor.ts:235](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L235)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

The canvas object

#### Source

[editor.ts:260](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L260)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

The canvas element

#### Source

[editor.ts:255](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L255)

***

### clipboard

> **clipboard**: `Clipboard`

The clipboard object

#### Source

[editor.ts:220](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L220)

***

### factory

> **factory**: [`ShapeFactory`](/api-core/classes/shapefactory/)

The shape factory

#### Source

[editor.ts:230](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L230)

***

### keymap

> **keymap**: [`KeymapManager`](/api-core/classes/keymapmanager/)

The keymap manager

#### Source

[editor.ts:240](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L240)

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

[editor.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L190)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag end

#### Source

[editor.ts:195](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L195)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

The event emitter for drag start

#### Source

[editor.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L185)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

The event emitter for file drop

#### Source

[editor.ts:200](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L200)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

The event emitter for key down

#### Source

[editor.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L180)

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

[editor.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L205)

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

[editor.ts:250](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L250)

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

[editor.ts:225](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L225)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

The store object

#### Source

[editor.ts:210](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L210)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

The transform object

#### Source

[editor.ts:215](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L215)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[editor.ts:1100](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1100)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:1083](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1083)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[editor.ts:1212](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1212)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:896](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L896)

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

[editor.ts:1004](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1004)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:812](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L812)

***

### getActiveHandler()

> **getActiveHandler**(): `null` \| [`Handler`](/api-core/classes/handler/)

Get the active handler

#### Returns

`null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:1076](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1076)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:1119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1119)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:959](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L959)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:951](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L951)

***

### getCurrentPage()

> **getCurrentPage**(): `null` \| [`Page`](/api-core/classes/page/)

Get current page

#### Returns

`null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:773](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L773)

***

### getCursor()

> **getCursor**(): `string`

Get cursor

#### Returns

`string`

#### Source

[editor.ts:1247](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1247)

***

### getDarkMode()

> **getDarkMode**(): `boolean`

Get dark mode

#### Returns

`boolean`

#### Source

[editor.ts:819](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L819)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1262](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1262)

***

### getEnabled()

> **getEnabled**(): `boolean`

Get enabled state

#### Returns

`boolean`

#### Source

[editor.ts:758](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L758)

***

### getGridSize()

> **getGridSize**(): `number`[]

Get grid size

#### Returns

`number`[]

#### Source

[editor.ts:838](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L838)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:904](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L904)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:802](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L802)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:751](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L751)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:967](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L967)

***

### getShowGrid()

> **getShowGrid**(): `boolean`

Get show grid state

#### Returns

`boolean`

#### Source

[editor.ts:853](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L853)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:930](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L930)

***

### getSnapToGrid()

> **getSnapToGrid**(): `boolean`

Get snap to grid

#### Returns

`boolean`

#### Source

[editor.ts:868](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L868)

***

### getSnapToObject()

> **getSnapToObject**(): `boolean`

Get snap to object

#### Returns

`boolean`

#### Source

[editor.ts:882](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L882)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1290](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1290)

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

[editor.ts:923](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L923)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1276](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1276)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:1232](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1232)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1307](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1307)

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

[editor.ts:1027](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1027)

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

[editor.ts:1036](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1036)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:1062](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1062)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:1109](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1109)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:780](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L780)

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

[editor.ts:1254](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1254)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:826](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L826)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:1269](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1269)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enabled state

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:765](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L765)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:845](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L845)

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

[editor.ts:911](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L911)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:974](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L974)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:860](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L860)

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

[editor.ts:937](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L937)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:875](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L875)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:889](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L889)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:1221](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1221)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom scale while keeping the screen center

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:994](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L994)
