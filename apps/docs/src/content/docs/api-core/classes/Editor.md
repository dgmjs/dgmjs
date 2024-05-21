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

[editor.ts:117](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L117)

## Properties

### actions

> **actions**: `Actions`

#### Source

[editor.ts:88](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L88)

***

### activeHandler

> **activeHandler**: `null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:104](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L104)

***

### activeHandlerId

> **activeHandlerId**: `null` \| `string`

#### Source

[editor.ts:103](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L103)

***

### activeHandlerLock

> **activeHandlerLock**: `boolean`

#### Source

[editor.ts:105](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L105)

***

### autoScroller

> **autoScroller**: `AutoScroller`

#### Source

[editor.ts:90](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L90)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Source

[editor.ts:96](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L96)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

#### Source

[editor.ts:95](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L95)

***

### clipboard

> **clipboard**: `Clipboard`

#### Source

[editor.ts:85](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L85)

***

### currentPage

> **currentPage**: `null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:93](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L93)

***

### darkMode

> **darkMode**: `boolean`

#### Source

[editor.ts:97](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L97)

***

### downX

> **downX**: `number`

#### Source

[editor.ts:107](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L107)

***

### downY

> **downY**: `number`

#### Source

[editor.ts:108](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L108)

***

### enabled

> **enabled**: `boolean`

#### Source

[editor.ts:92](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L92)

***

### factory

> **factory**: `ShapeFactory`

#### Source

[editor.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L87)

***

### gridSize

> **gridSize**: `number`[]

#### Source

[editor.ts:98](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L98)

***

### handlers

> **handlers**: `Record`\<`string`, [`Handler`](/api-core/classes/handler/)\>

#### Source

[editor.ts:102](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L102)

***

### initialDistance

> **initialDistance**: `number`

#### Source

[editor.ts:111](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L111)

***

### initialScale

> **initialScale**: `number`

#### Source

[editor.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L110)

***

### isPinching

> **isPinching**: `boolean`

#### Source

[editor.ts:109](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L109)

***

### keymap

> **keymap**: `KeymapManager`

#### Source

[editor.ts:89](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L89)

***

### leftButtonDown

> **leftButtonDown**: `boolean`

#### Source

[editor.ts:106](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L106)

***

### onActiveHandlerChange

> **onActiveHandlerChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`string`\>

#### Source

[editor.ts:68](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L68)

***

### onActiveHandlerLockChange

> **onActiveHandlerLockChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`boolean`\>

#### Source

[editor.ts:69](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L69)

***

### onCurrentPageChange

> **onCurrentPageChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Page`](/api-core/classes/page/)\>

#### Source

[editor.ts:67](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L67)

***

### onDblClick

> **onDblClick**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DblClickEvent`](/api-core/interfaces/dblclickevent/)\>

#### Source

[editor.ts:75](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L75)

***

### onDrag

> **onDrag**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

#### Source

[editor.ts:78](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L78)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

#### Source

[editor.ts:79](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L79)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

#### Source

[editor.ts:77](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L77)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

#### Source

[editor.ts:80](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L80)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

#### Source

[editor.ts:76](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L76)

***

### onPointerDown

> **onPointerDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

#### Source

[editor.ts:72](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L72)

***

### onPointerMove

> **onPointerMove**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

#### Source

[editor.ts:73](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L73)

***

### onPointerUp

> **onPointerUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

#### Source

[editor.ts:74](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L74)

***

### onRepaint

> **onRepaint**: [`TypedEvent`](/api-core/classes/typedevent/)\<`void`\>

#### Source

[editor.ts:81](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L81)

***

### onScroll

> **onScroll**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`[]\>

#### Source

[editor.ts:71](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L71)

***

### onZoom

> **onZoom**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`\>

#### Source

[editor.ts:70](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L70)

***

### options

> **options**: [`EditorOptions`](/api-core/interfaces/editoroptions/)

#### Source

[editor.ts:63](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L63)

***

### parent

> **parent**: `HTMLElement`

#### Source

[editor.ts:94](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L94)

***

### platform

> **platform**: `string`

#### Source

[editor.ts:65](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L65)

***

### plugins

> **plugins**: `Record`\<`string`, [`Plugin`](/api-core/classes/plugin/)\>

#### Source

[editor.ts:64](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L64)

***

### selection

> **selection**: `SelectionManager`

#### Source

[editor.ts:86](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L86)

***

### showGrid

> **showGrid**: `boolean`

#### Source

[editor.ts:99](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L99)

***

### snapToGrid

> **snapToGrid**: `boolean`

#### Source

[editor.ts:100](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L100)

***

### snapToObject

> **snapToObject**: `boolean`

#### Source

[editor.ts:101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L101)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

#### Source

[editor.ts:83](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L83)

***

### touchPoint

> **touchPoint**: `number`[]

#### Source

[editor.ts:112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L112)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

#### Source

[editor.ts:84](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L84)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[editor.ts:835](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L835)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:822](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L822)

***

### activatePlugins()

> **activatePlugins**(): `void`

Activate plugins

#### Returns

`void`

#### Source

[editor.ts:487](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L487)

***

### addHandler()

> **addHandler**(`handler`): `void`

Add a handler

#### Parameters

• **handler**: [`Handler`](/api-core/classes/handler/)

#### Returns

`void`

#### Source

[editor.ts:794](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L794)

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

[editor.ts:782](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L782)

***

### clearBackground()

> **clearBackground**(`canvas`): `void`

Clear canvas background

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[editor.ts:861](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L861)

***

### clearHandlers()

> **clearHandlers**(): `void`

Clear all handlers

#### Returns

`void`

#### Source

[editor.ts:815](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L815)

***

### deactivatePlugins()

> **deactivatePlugins**(): `void`

Deactivate plugins

#### Returns

`void`

#### Source

[editor.ts:496](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L496)

***

### detectPlatform()

> **detectPlatform**(): `string`

#### Returns

`string`

#### Source

[editor.ts:212](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L212)

***

### drawGrid()

> **drawGrid**(`canvas`): `void`

Draw the grid

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[editor.ts:874](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L874)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[editor.ts:941](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L941)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:601](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L601)

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

[editor.ts:709](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L709)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:552](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L552)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:854](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L854)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:645](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L645)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:637](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L637)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:986](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L986)

***

### getHandler()

> **getHandler**(`id`): [`Handler`](/api-core/classes/handler/)

Get a handler by id

#### Parameters

• **id**: `string`

#### Returns

[`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:808](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L808)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:630](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L630)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:542](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L542)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:505](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L505)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:692](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L692)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:623](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L623)

***

### initializeCanvas()

> **initializeCanvas**(): `void`

#### Returns

`void`

#### Source

[editor.ts:231](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L231)

***

### initializeKeymap()

> **initializeKeymap**(): `void`

#### Returns

`void`

#### Source

[editor.ts:462](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L462)

***

### initializeState()

> **initializeState**(): `void`

#### Returns

`void`

#### Source

[editor.ts:224](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L224)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1013](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1013)

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

[editor.ts:665](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L665)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1000](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1000)

***

### removeHandler()

> **removeHandler**(`id`): `void`

Remove a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:801](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L801)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:963](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L963)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1030](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1030)

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

[editor.ts:732](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L732)

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

[editor.ts:741](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L741)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:767](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L767)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:844](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L844)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:520](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L520)

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

[editor.ts:978](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L978)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:559](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L559)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:993](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L993)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enable or disable

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:512](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L512)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:571](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L571)

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

[editor.ts:653](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L653)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:672](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L672)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:579](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L579)

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

[editor.ts:609](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L609)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:587](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L587)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:594](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L594)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:950](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L950)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:699](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L699)
