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

[editor.ts:174](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L174)

## Properties

### actions

> **actions**: `Actions`

#### Source

[editor.ts:145](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L145)

***

### activeHandler

> **activeHandler**: `null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:161](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L161)

***

### activeHandlerId

> **activeHandlerId**: `null` \| `string`

#### Source

[editor.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L160)

***

### activeHandlerLock

> **activeHandlerLock**: `boolean`

#### Source

[editor.ts:162](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L162)

***

### autoScroller

> **autoScroller**: `AutoScroller`

#### Source

[editor.ts:147](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L147)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Source

[editor.ts:153](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L153)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

#### Source

[editor.ts:152](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L152)

***

### clipboard

> **clipboard**: `Clipboard`

#### Source

[editor.ts:142](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L142)

***

### currentPage

> **currentPage**: `null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L150)

***

### darkMode

> **darkMode**: `boolean`

#### Source

[editor.ts:154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L154)

***

### downX

> **downX**: `number`

#### Source

[editor.ts:164](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L164)

***

### downY

> **downY**: `number`

#### Source

[editor.ts:165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L165)

***

### enabled

> **enabled**: `boolean`

#### Source

[editor.ts:149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L149)

***

### factory

> **factory**: `ShapeFactory`

#### Source

[editor.ts:144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L144)

***

### gridSize

> **gridSize**: `number`[]

#### Source

[editor.ts:155](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L155)

***

### handlers

> **handlers**: `Record`\<`string`, [`Handler`](/api-core/classes/handler/)\>

#### Source

[editor.ts:159](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L159)

***

### initialDistance

> **initialDistance**: `number`

#### Source

[editor.ts:168](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L168)

***

### initialScale

> **initialScale**: `number`

#### Source

[editor.ts:167](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L167)

***

### isPinching

> **isPinching**: `boolean`

#### Source

[editor.ts:166](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L166)

***

### keymap

> **keymap**: `KeymapManager`

#### Source

[editor.ts:146](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L146)

***

### leftButtonDown

> **leftButtonDown**: `boolean`

#### Source

[editor.ts:163](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L163)

***

### onActiveHandlerChange

> **onActiveHandlerChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`string`\>

#### Source

[editor.ts:125](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L125)

***

### onActiveHandlerLockChange

> **onActiveHandlerLockChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`boolean`\>

#### Source

[editor.ts:126](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L126)

***

### onCurrentPageChange

> **onCurrentPageChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Page`](/api-core/classes/page/)\>

#### Source

[editor.ts:124](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L124)

***

### onDblClick

> **onDblClick**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DblClickEvent`](/api-core/interfaces/dblclickevent/)\>

#### Source

[editor.ts:132](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L132)

***

### onDrag

> **onDrag**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

#### Source

[editor.ts:135](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L135)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

#### Source

[editor.ts:136](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L136)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

#### Source

[editor.ts:134](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L134)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

#### Source

[editor.ts:137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L137)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

#### Source

[editor.ts:133](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L133)

***

### onPointerDown

> **onPointerDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

#### Source

[editor.ts:129](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L129)

***

### onPointerMove

> **onPointerMove**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

#### Source

[editor.ts:130](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L130)

***

### onPointerUp

> **onPointerUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

#### Source

[editor.ts:131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L131)

***

### onRepaint

> **onRepaint**: [`TypedEvent`](/api-core/classes/typedevent/)\<`void`\>

#### Source

[editor.ts:138](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L138)

***

### onScroll

> **onScroll**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`[]\>

#### Source

[editor.ts:128](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L128)

***

### onZoom

> **onZoom**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`\>

#### Source

[editor.ts:127](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L127)

***

### options

> **options**: [`EditorOptions`](/api-core/interfaces/editoroptions/)

#### Source

[editor.ts:120](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L120)

***

### parent

> **parent**: `HTMLElement`

#### Source

[editor.ts:151](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L151)

***

### platform

> **platform**: `string`

#### Source

[editor.ts:122](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L122)

***

### plugins

> **plugins**: `Record`\<`string`, [`Plugin`](/api-core/classes/plugin/)\>

#### Source

[editor.ts:121](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L121)

***

### selection

> **selection**: `SelectionManager`

#### Source

[editor.ts:143](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L143)

***

### showGrid

> **showGrid**: `boolean`

#### Source

[editor.ts:156](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L156)

***

### snapToGrid

> **snapToGrid**: `boolean`

#### Source

[editor.ts:157](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L157)

***

### snapToObject

> **snapToObject**: `boolean`

#### Source

[editor.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L158)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

#### Source

[editor.ts:140](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L140)

***

### touchPoint

> **touchPoint**: `number`[]

#### Source

[editor.ts:169](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L169)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

#### Source

[editor.ts:141](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L141)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[editor.ts:893](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L893)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:880](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L880)

***

### activatePlugins()

> **activatePlugins**(): `void`

Activate plugins

#### Returns

`void`

#### Source

[editor.ts:545](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L545)

***

### addHandler()

> **addHandler**(`handler`): `void`

Add a handler

#### Parameters

• **handler**: [`Handler`](/api-core/classes/handler/)

#### Returns

`void`

#### Source

[editor.ts:852](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L852)

***

### addHandlers()

> **addHandlers**(`handlers`): `void`

Add an array of handlers
Note: the first handler is set as default handler

#### Parameters

• **handlers**: [`Handler`](/api-core/classes/handler/)[]

#### Returns

`void`

#### Source

[editor.ts:840](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L840)

***

### clearBackground()

> **clearBackground**(`canvas`): `void`

Clear canvas background

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[editor.ts:919](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L919)

***

### clearHandlers()

> **clearHandlers**(): `void`

Clear all handlers

#### Returns

`void`

#### Source

[editor.ts:873](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L873)

***

### deactivatePlugins()

> **deactivatePlugins**(): `void`

Deactivate plugins

#### Returns

`void`

#### Source

[editor.ts:554](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L554)

***

### detectPlatform()

> **detectPlatform**(): `string`

#### Returns

`string`

#### Source

[editor.ts:269](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L269)

***

### drawGrid()

> **drawGrid**(`canvas`): `void`

Draw the grid

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[editor.ts:932](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L932)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[editor.ts:999](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L999)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:659](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L659)

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

[editor.ts:767](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L767)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:610](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L610)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:912](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L912)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:703](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L703)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:695](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L695)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1044](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1044)

***

### getHandler()

> **getHandler**(`id`): [`Handler`](/api-core/classes/handler/)

Get a handler by id

#### Parameters

• **id**: `string`

#### Returns

[`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:866](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L866)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:688](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L688)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:600](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L600)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:563](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L563)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:750](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L750)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:681](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L681)

***

### initializeCanvas()

> **initializeCanvas**(): `void`

#### Returns

`void`

#### Source

[editor.ts:288](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L288)

***

### initializeKeymap()

> **initializeKeymap**(): `void`

#### Returns

`void`

#### Source

[editor.ts:520](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L520)

***

### initializeState()

> **initializeState**(): `void`

#### Returns

`void`

#### Source

[editor.ts:281](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L281)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1071](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1071)

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

[editor.ts:723](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L723)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1058](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1058)

***

### removeHandler()

> **removeHandler**(`id`): `void`

Remove a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:859](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L859)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:1021](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1021)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1088](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1088)

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

[editor.ts:790](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L790)

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

[editor.ts:799](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L799)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:825](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L825)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:902](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L902)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:578](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L578)

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

[editor.ts:1036](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1036)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:617](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L617)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:1051](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1051)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enable or disable

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:570](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L570)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:629](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L629)

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

[editor.ts:711](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L711)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:730](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L730)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:637](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L637)

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

[editor.ts:667](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L667)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:645](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L645)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:652](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L652)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:1008](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1008)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:757](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L757)
