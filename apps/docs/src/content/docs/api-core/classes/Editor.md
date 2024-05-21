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

[editor.ts:123](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L123)

## Properties

### actions

> **actions**: `Actions`

#### Source

[editor.ts:94](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L94)

***

### activeHandler

> **activeHandler**: `null` \| [`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:110](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L110)

***

### activeHandlerId

> **activeHandlerId**: `null` \| `string`

#### Source

[editor.ts:109](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L109)

***

### activeHandlerLock

> **activeHandlerLock**: `boolean`

#### Source

[editor.ts:111](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L111)

***

### autoScroller

> **autoScroller**: `AutoScroller`

#### Source

[editor.ts:96](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L96)

***

### canvas

> **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Source

[editor.ts:102](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L102)

***

### canvasElement

> **canvasElement**: `HTMLCanvasElement`

#### Source

[editor.ts:101](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L101)

***

### clipboard

> **clipboard**: `Clipboard`

#### Source

[editor.ts:91](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L91)

***

### currentPage

> **currentPage**: `null` \| [`Page`](/api-core/classes/page/)

#### Source

[editor.ts:99](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L99)

***

### darkMode

> **darkMode**: `boolean`

#### Source

[editor.ts:103](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L103)

***

### downX

> **downX**: `number`

#### Source

[editor.ts:113](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L113)

***

### downY

> **downY**: `number`

#### Source

[editor.ts:114](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L114)

***

### enabled

> **enabled**: `boolean`

#### Source

[editor.ts:98](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L98)

***

### factory

> **factory**: `ShapeFactory`

#### Source

[editor.ts:93](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L93)

***

### gridSize

> **gridSize**: `number`[]

#### Source

[editor.ts:104](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L104)

***

### handlers

> **handlers**: `Record`\<`string`, [`Handler`](/api-core/classes/handler/)\>

#### Source

[editor.ts:108](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L108)

***

### initialDistance

> **initialDistance**: `number`

#### Source

[editor.ts:117](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L117)

***

### initialScale

> **initialScale**: `number`

#### Source

[editor.ts:116](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L116)

***

### isPinching

> **isPinching**: `boolean`

#### Source

[editor.ts:115](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L115)

***

### keymap

> **keymap**: `KeymapManager`

#### Source

[editor.ts:95](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L95)

***

### leftButtonDown

> **leftButtonDown**: `boolean`

#### Source

[editor.ts:112](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L112)

***

### onActiveHandlerChange

> **onActiveHandlerChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`string`\>

#### Source

[editor.ts:74](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L74)

***

### onActiveHandlerLockChange

> **onActiveHandlerLockChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<`boolean`\>

#### Source

[editor.ts:75](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L75)

***

### onCurrentPageChange

> **onCurrentPageChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Page`](/api-core/classes/page/)\>

#### Source

[editor.ts:73](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L73)

***

### onDblClick

> **onDblClick**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DblClickEvent`](/api-core/interfaces/dblclickevent/)\>

#### Source

[editor.ts:81](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L81)

***

### onDrag

> **onDrag**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

#### Source

[editor.ts:84](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L84)

***

### onDragEnd

> **onDragEnd**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

#### Source

[editor.ts:85](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L85)

***

### onDragStart

> **onDragStart**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`DragEvent`](/api-core/interfaces/dragevent/)\>

#### Source

[editor.ts:83](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L83)

***

### onFileDrop

> **onFileDrop**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`FileDropEvent`](/api-core/interfaces/filedropevent/)\>

#### Source

[editor.ts:86](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L86)

***

### onKeyDown

> **onKeyDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<`KeyboardEvent`\>

#### Source

[editor.ts:82](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L82)

***

### onPointerDown

> **onPointerDown**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

#### Source

[editor.ts:78](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L78)

***

### onPointerMove

> **onPointerMove**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

#### Source

[editor.ts:79](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L79)

***

### onPointerUp

> **onPointerUp**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)\>

#### Source

[editor.ts:80](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L80)

***

### onRepaint

> **onRepaint**: [`TypedEvent`](/api-core/classes/typedevent/)\<`void`\>

#### Source

[editor.ts:87](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L87)

***

### onScroll

> **onScroll**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`[]\>

#### Source

[editor.ts:77](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L77)

***

### onZoom

> **onZoom**: [`TypedEvent`](/api-core/classes/typedevent/)\<`number`\>

#### Source

[editor.ts:76](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L76)

***

### options

> **options**: [`EditorOptions`](/api-core/interfaces/editoroptions/)

#### Source

[editor.ts:69](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L69)

***

### parent

> **parent**: `HTMLElement`

#### Source

[editor.ts:100](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L100)

***

### platform

> **platform**: `string`

#### Source

[editor.ts:71](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L71)

***

### plugins

> **plugins**: `Record`\<`string`, [`Plugin`](/api-core/classes/plugin/)\>

#### Source

[editor.ts:70](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L70)

***

### selection

> **selection**: `SelectionManager`

#### Source

[editor.ts:92](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L92)

***

### showGrid

> **showGrid**: `boolean`

#### Source

[editor.ts:105](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L105)

***

### snapToGrid

> **snapToGrid**: `boolean`

#### Source

[editor.ts:106](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L106)

***

### snapToObject

> **snapToObject**: `boolean`

#### Source

[editor.ts:107](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L107)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

#### Source

[editor.ts:89](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L89)

***

### touchPoint

> **touchPoint**: `number`[]

#### Source

[editor.ts:118](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L118)

***

### transform

> **transform**: [`Transform`](/api-core/classes/transform/)

#### Source

[editor.ts:90](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L90)

## Methods

### activateDefaultHandler()

> **activateDefaultHandler**(): `void`

Activate the default handler

#### Returns

`void`

#### Source

[editor.ts:841](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L841)

***

### activateHandler()

> **activateHandler**(`id`): `void`

Activate a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:828](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L828)

***

### activatePlugins()

> **activatePlugins**(): `void`

Activate plugins

#### Returns

`void`

#### Source

[editor.ts:493](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L493)

***

### addHandler()

> **addHandler**(`handler`): `void`

Add a handler

#### Parameters

• **handler**: [`Handler`](/api-core/classes/handler/)

#### Returns

`void`

#### Source

[editor.ts:800](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L800)

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

[editor.ts:788](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L788)

***

### clearBackground()

> **clearBackground**(`canvas`): `void`

Clear canvas background

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[editor.ts:867](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L867)

***

### clearHandlers()

> **clearHandlers**(): `void`

Clear all handlers

#### Returns

`void`

#### Source

[editor.ts:821](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L821)

***

### deactivatePlugins()

> **deactivatePlugins**(): `void`

Deactivate plugins

#### Returns

`void`

#### Source

[editor.ts:502](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L502)

***

### detectPlatform()

> **detectPlatform**(): `string`

#### Returns

`string`

#### Source

[editor.ts:218](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L218)

***

### drawGrid()

> **drawGrid**(`canvas`): `void`

Draw the grid

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`void`

#### Source

[editor.ts:880](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L880)

***

### drawSelection()

> **drawSelection**(): `void`

Draw selection

#### Returns

`void`

#### Source

[editor.ts:947](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L947)

***

### fit()

> **fit**(): `void`

Fit the editor size to the holder element

#### Returns

`void`

#### Source

[editor.ts:607](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L607)

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

[editor.ts:715](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L715)

***

### focus()

> **focus**(): `void`

Set focus on this editor

#### Returns

`void`

#### Source

[editor.ts:558](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L558)

***

### getActiveHandlerLock()

> **getActiveHandlerLock**(): `boolean`

Get active handler lock

#### Returns

`boolean`

#### Source

[editor.ts:860](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L860)

***

### getBoundingRect()

> **getBoundingRect**(): `number`[][]

Get bounding rect in GCS

#### Returns

`number`[][]

#### Source

[editor.ts:651](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L651)

***

### getCenter()

> **getCenter**(): `number`[]

Get screen center point in GCS

#### Returns

`number`[]

#### Source

[editor.ts:643](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L643)

***

### getDoc()

> **getDoc**(): [`Doc`](/api-core/classes/doc/)

Get the document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:992](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L992)

***

### getHandler()

> **getHandler**(`id`): [`Handler`](/api-core/classes/handler/)

Get a handler by id

#### Parameters

• **id**: `string`

#### Returns

[`Handler`](/api-core/classes/handler/)

#### Source

[editor.ts:814](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L814)

***

### getOrigin()

> **getOrigin**(): `number`[]

Get origin point in CCS

#### Returns

`number`[]

#### Source

[editor.ts:636](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L636)

***

### getPages()

> **getPages**(): [`Page`](/api-core/classes/page/)[]

Get pages

#### Returns

[`Page`](/api-core/classes/page/)[]

#### Source

[editor.ts:548](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L548)

***

### getPlugin()

> **getPlugin**(`id`): `null` \| [`Plugin`](/api-core/classes/plugin/)

Get a plugin by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:511](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L511)

***

### getScale()

> **getScale**(): `number`

Get scale

#### Returns

`number`

#### Source

[editor.ts:698](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L698)

***

### getSize()

> **getSize**(): `number`[]

Return the size of canvas element in CCS

#### Returns

`number`[]

#### Source

[editor.ts:629](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L629)

***

### initializeCanvas()

> **initializeCanvas**(): `void`

#### Returns

`void`

#### Source

[editor.ts:237](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L237)

***

### initializeKeymap()

> **initializeKeymap**(): `void`

#### Returns

`void`

#### Source

[editor.ts:468](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L468)

***

### initializeState()

> **initializeState**(): `void`

#### Returns

`void`

#### Source

[editor.ts:230](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L230)

***

### loadFromJSON()

> **loadFromJSON**(`json`): `void`

Load from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[editor.ts:1019](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1019)

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

[editor.ts:671](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L671)

***

### newDoc()

> **newDoc**(): [`Doc`](/api-core/classes/doc/)

Create a new document

#### Returns

[`Doc`](/api-core/classes/doc/)

#### Source

[editor.ts:1006](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1006)

***

### removeHandler()

> **removeHandler**(`id`): `void`

Remove a handler by id

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[editor.ts:807](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L807)

***

### repaint()

> **repaint**(`drawSelection`): `void`

Repaint diagram

#### Parameters

• **drawSelection**: `boolean`= `true`

#### Returns

`void`

#### Source

[editor.ts:969](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L969)

***

### saveToJSON()

> **saveToJSON**(): `any`

Save to JSON

#### Returns

`any`

#### Source

[editor.ts:1036](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L1036)

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

[editor.ts:738](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L738)

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

[editor.ts:747](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L747)

***

### scrollToCenter()

> **scrollToCenter**(): `void`

Scroll to center of the shapes

#### Returns

`void`

#### Source

[editor.ts:773](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L773)

***

### setActiveHandlerLock()

> **setActiveHandlerLock**(`lock`): `void`

Set active handler lock

#### Parameters

• **lock**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:850](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L850)

***

### setCurrentPage()

> **setCurrentPage**(`page`): `void`

Set current page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[editor.ts:526](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L526)

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

[editor.ts:984](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L984)

***

### setDarkMode()

> **setDarkMode**(`dark`): `void`

Set dark mode

#### Parameters

• **dark**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:565](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L565)

***

### setDoc()

> **setDoc**(`doc`): `void`

Set the document

#### Parameters

• **doc**: [`Doc`](/api-core/classes/doc/)

#### Returns

`void`

#### Source

[editor.ts:999](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L999)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set enable or disable

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:518](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L518)

***

### setGridSize()

> **setGridSize**(`gridSize`): `void`

Set grid size

#### Parameters

• **gridSize**: `number`[]

#### Returns

`void`

#### Source

[editor.ts:577](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L577)

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

[editor.ts:659](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L659)

***

### setScale()

> **setScale**(`scale`): `void`

Set scale

#### Parameters

• **scale**: `number`

#### Returns

`void`

#### Source

[editor.ts:678](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L678)

***

### setShowGrid()

> **setShowGrid**(`show`): `void`

Set show grid or not

#### Parameters

• **show**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:585](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L585)

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

[editor.ts:615](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L615)

***

### setSnapToGrid()

> **setSnapToGrid**(`value`): `void`

Set snap to grid

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:593](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L593)

***

### setSnapToObject()

> **setSnapToObject**(`value`): `void`

Set snap to object

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Source

[editor.ts:600](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L600)

***

### update()

> **update**(): `void`

Update all shapes

#### Returns

`void`

#### Source

[editor.ts:956](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L956)

***

### zoom()

> **zoom**(`scale`): `void`

Set zoom

#### Parameters

• **scale**: `number`= `1`

#### Returns

`void`

#### Source

[editor.ts:705](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/editor.ts#L705)
