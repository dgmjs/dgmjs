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

[selection-manager.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L15)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[selection-manager.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L11)

***

### onChange

> **onChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Shape`](/api-core/classes/shape/)[]\>

#### Source

[selection-manager.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L13)

***

### shapes

> **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Source

[selection-manager.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L12)

## Methods

### deselect()

> **deselect**(`shapes`): `void`

Deselect the given shapes.

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[selection-manager.ts:119](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L119)

***

### deselectAll()

> **deselectAll**(): `void`

Deselect all shapes.

#### Returns

`void`

#### Source

[selection-manager.ts:131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L131)

***

### getBoundingRect()

> **getBoundingRect**(`canvas`): `number`[][]

Returns bounding rect of selected shapes

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`number`[][]

#### Source

[selection-manager.ts:141](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L141)

***

### getEnclosure()

> **getEnclosure**(`canvas`): `number`[][]

Returns enclosure of selected shapes

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`number`[][]

#### Source

[selection-manager.ts:159](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L159)

***

### getShapes()

> **getShapes**(): [`Shape`](/api-core/classes/shape/)[]

Return selected shapes.

#### Returns

[`Shape`](/api-core/classes/shape/)[]

an array of selected shapes.

#### Source

[selection-manager.ts:45](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L45)

***

### isChanged()

> **isChanged**(`shapes`): `boolean`

isChanged

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`boolean`

#### Source

[selection-manager.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L24)

***

### isSelected()

> **isSelected**(`shape`): `boolean`

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Source

[selection-manager.ts:56](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L56)

***

### select()

> **select**(`shapes`): `void`

Select shapes

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[selection-manager.ts:63](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L63)

***

### selectAdditional()

> **selectAdditional**(`shapes`): `void`

Select additional shapes

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[selection-manager.ts:71](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L71)

***

### selectAll()

> **selectAll**(): `void`

Select all shapes in the current page

#### Returns

`void`

#### Source

[selection-manager.ts:106](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L106)

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

[selection-manager.ts:83](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L83)

***

### size()

> **size**(): `number`

Return the number of selections

#### Returns

`number`

#### Source

[selection-manager.ts:52](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L52)
