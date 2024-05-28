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

[editor.ts:198](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L198)

## Properties

### actions

> **actions**: `Actions`

#### Source

[editor.ts:145](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L145)

***

### activeHandler

> **activeHandler**: `null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L185)

***

### activeHandlerId

> **activeHandlerId**: `null` \| `string`

#### Source

[editor.ts:184](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L184)

***

### activeHandlerLock

> **activeHandlerLock**: `boolean`

#### Source

[editor.ts:186](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L186)

***

### autoScroller

> **autoScroller**: `AutoScroller`

#### Source

[editor.ts:147](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L147)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Source

[editor.ts:152](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L152)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

#### Source

[editor.ts:151](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L151)

***

### clipboard

> **clipboard**: `Clipboard`

#### Source

[editor.ts:142](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L142)

***

### currentPage

> **currentPage**: `null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L149)

***

### darkMode

> **darkMode**: `boolean`

The dark mode

#### Source

[editor.ts:162](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L162)

***

### downX

> **downX**: `number`

#### Source

[editor.ts:188](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L188)

***

### downY

> **downY**: `number`

#### Source

[editor.ts:189](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L189)

***

### enabled

> **enabled**: `boolean`

The enabled state

#### Source

[editor.ts:157](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L157)

***

### factory

> **factory**: `ShapeFactory`

#### Source

[editor.ts:144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L144)

***

### gridSize

> **gridSize**: `number`[]

The grid size

#### Source

[editor.ts:167](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L167)

***

### handlers

> **handlers**: `Record`\<`string`, [`Handler`](/api-core/classes/handler/)\>

#### Source

[editor.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L183)

***

### initialDistance

> **initialDistance**: `number`

#### Source

[editor.ts:192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L192)

***

### initialScale

> **initialScale**: `number`

#### Source

[editor.ts:191](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L191)

***

### isPinching

> **isPinching**: `boolean`

#### Source

[editor.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L190)

***

### keymap

> **keymap**: `KeymapManager`

#### Source

[editor.ts:146](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L146)

***

### leftButtonDown

> **leftButtonDown**: `boolean`

#### Source

[editor.ts:187](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L187)

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

[editor.ts:150](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L150)

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

The show grid option

#### Source

[editor.ts:172](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L172)

***

### snapToGrid

> **snapToGrid**: `boolean`

The snap to grid option

#### Source

[editor.ts:177](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L177)

***

### snapToObject

> **snapToObject**: `boolean`

The snap to object option (Not implemented yet)

#### Source

[editor.ts:182](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L182)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

#### Source

[editor.ts:140](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L140)

***

### touchPoint

> **touchPoint**: `number`[]

#### Source

[editor.ts:193](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L193)

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

[editor.ts:917](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L917)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:904](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L904)

***

### activatePlugins()

> **activatePlugins**(): `void`

Activate plugins

#### Returns

`void`

#### Source

[editor.ts:569](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L569)

***

### addHandler()

> **addHandler**(`handler`): `void`

Add a handler

#### Parameters

• **handler**: [`Handler`](/api-core/classes/handler/)

#### Returns

`void`

#### Source

[editor.ts:876](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L876)

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

[editor.ts:864](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L864)

***

### clearBackground()

> **clearBackground**(`canvas`): `void`

Clear canvas background

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[editor.ts:943](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L943)

***

### clearHandlers()

> **clearHandlers**(): `void`

Clear all handlers

#### Returns

`void`

#### Source

[editor.ts:897](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L897)

***

### deactivatePlugins()

> **deactivatePlugins**(): `void`

Deactivate plugins

#### Returns

`void`

#### Source

[editor.ts:578](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L578)

***

### detectPlatform()

> **detectPlatform**(): `string`

#### Returns

`string`

#### Source

[editor.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L293)

***

### drawGrid()

> **drawGrid**(`canvas`): `void`

Draw the grid

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[editor.ts:956](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L956)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[editor.ts:1023](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1023)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:683](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L683)

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

[editor.ts:791](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L791)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:634](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L634)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:936](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L936)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:727](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L727)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:719](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L719)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1068](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1068)

***

### getHandler()

> **getHandler**(`id`): [`Handler`](/api-core/classes/handler/)

Get a handler by id

#### Parameters

• **id**: `string`

#### Returns

[`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:890](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L890)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:712](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L712)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:624](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L624)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:587](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L587)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:774](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L774)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:705](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L705)

***

### initializeCanvas()

> **initializeCanvas**(): `void`

#### Returns

`void`

#### Source

[editor.ts:312](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L312)

***

### initializeKeymap()

> **initializeKeymap**(): `void`

#### Returns

`void`

#### Source

[editor.ts:544](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L544)

***

### initializeState()

> **initializeState**(): `void`

#### Returns

`void`

#### Source

[editor.ts:305](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L305)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1095](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1095)

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

[editor.ts:747](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L747)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1082](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1082)

***

### removeHandler()

> **removeHandler**(`id`): `void`

Remove a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:883](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L883)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:1045](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1045)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1112)

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

[editor.ts:814](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L814)

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

[editor.ts:823](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L823)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:849](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L849)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:926](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L926)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:602](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L602)

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

[editor.ts:1060](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1060)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:641](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L641)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:1075](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1075)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enable or disable

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:594](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L594)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:653](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L653)

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

[editor.ts:735](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L735)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:754](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L754)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:661](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L661)

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

[editor.ts:691](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L691)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:669](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L669)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:676](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L676)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:1032](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1032)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:781](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L781)
