---
editUrl: false
next: false
prev: false
title: "SelectionManager"
---

Selection Manager

## Constructors

### new SelectionManager()

> **new SelectionManager**(`editor`): [`SelectionManager`](/api-core/classes/selectionmanager/)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

[`SelectionManager`](/api-core/classes/selectionmanager/)

#### Source

[selection-manager.ts:28](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L28)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[selection-manager.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L24)

***

### onChange

> **onChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Shape`](/api-core/classes/shape/)[]\>

#### Source

[selection-manager.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L26)

***

### shapes

> **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Source

[selection-manager.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L25)

## Methods

### deselect()

> **deselect**(`shapes`): `void`

Deselect the given shapes.

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[selection-manager.ts:132](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L132)

***

### deselectAll()

> **deselectAll**(): `void`

Deselect all shapes.

#### Returns

`void`

#### Source

[selection-manager.ts:144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L144)

***

### getBoundingRect()

> **getBoundingRect**(`canvas`): `number`[][]

Returns bounding rect of selected shapes

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`number`[][]

#### Source

[selection-manager.ts:154](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L154)

***

### getEnclosure()

> **getEnclosure**(`canvas`): `number`[][]

Returns enclosure of selected shapes

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`number`[][]

#### Source

[selection-manager.ts:172](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L172)

***

### getShapes()

> **getShapes**(): [`Shape`](/api-core/classes/shape/)[]

Return selected shapes.

#### Returns

[`Shape`](/api-core/classes/shape/)[]

an array of selected shapes.

#### Source

[selection-manager.ts:58](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L58)

***

### isChanged()

> **isChanged**(`shapes`): `boolean`

isChanged

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`boolean`

#### Source

[selection-manager.ts:37](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L37)

***

### isSelected()

> **isSelected**(`shape`): `boolean`

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Source

[selection-manager.ts:69](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L69)

***

### select()

> **select**(`shapes`): `void`

Select shapes

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[selection-manager.ts:76](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L76)

***

### selectAdditional()

> **selectAdditional**(`shapes`): `void`

Select additional shapes

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[selection-manager.ts:84](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L84)

***

### selectAll()

> **selectAll**(): `void`

Select all shapes in the current page

#### Returns

`void`

#### Source

[selection-manager.ts:119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L119)

***

### selectArea()

> **selectArea**(`x1`, `y1`, `x2`, `y2`): `void`

Select shapes overlap the given area in the current page.

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

#### Returns

`void`

#### Source

[selection-manager.ts:96](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L96)

***

### size()

> **size**(): `number`

Return the number of selections

#### Returns

`number`

#### Source

[selection-manager.ts:65](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L65)
