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

[packages/core/src/selection-manager.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L15)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[packages/core/src/selection-manager.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L11)

***

### onChange

> **onChange**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Shape`](/api-core/classes/shape/)[]\>

#### Source

[packages/core/src/selection-manager.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L13)

***

### shapes

> **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Source

[packages/core/src/selection-manager.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L12)

## Methods

### deselect()

> **deselect**(`shapes`): `void`

Deselect the given shapes.

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[packages/core/src/selection-manager.ts:125](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L125)

***

### deselectAll()

> **deselectAll**(): `void`

Deselect all shapes.

#### Returns

`void`

#### Source

[packages/core/src/selection-manager.ts:137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L137)

***

### getBoundingRect()

> **getBoundingRect**(`canvas`): `number`[][]

Returns bounding rect of selected shapes

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`number`[][]

#### Source

[packages/core/src/selection-manager.ts:147](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L147)

***

### getEnclosure()

> **getEnclosure**(`canvas`): `number`[][]

Returns enclosure of selected shapes

#### Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

#### Returns

`number`[][]

#### Source

[packages/core/src/selection-manager.ts:165](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L165)

***

### getShapes()

> **getShapes**(): [`Shape`](/api-core/classes/shape/)[]

Return selected shapes.

#### Returns

[`Shape`](/api-core/classes/shape/)[]

an array of selected shapes.

#### Source

[packages/core/src/selection-manager.ts:45](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L45)

***

### isChanged()

> **isChanged**(`shapes`): `boolean`

isChanged

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`boolean`

#### Source

[packages/core/src/selection-manager.ts:24](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L24)

***

### isSelected()

> **isSelected**(`shape`): `boolean`

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`boolean`

#### Source

[packages/core/src/selection-manager.ts:56](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L56)

***

### select()

> **select**(`shapes`, `clear`): `void`

Select shapes

#### Parameters

• **shapes**: [`Shape`](/api-core/classes/shape/)[]

an array of shapes to be selected.

• **clear**: `boolean`= `true`

clear the current selection if true.

#### Returns

`void`

#### Source

[packages/core/src/selection-manager.ts:65](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L65)

***

### selectAll()

> **selectAll**(): `void`

Select all shapes in the current page

#### Returns

`void`

#### Source

[packages/core/src/selection-manager.ts:112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L112)

***

### selectArea()

> **selectArea**(`x1`, `y1`, `x2`, `y2`, `clear`): `void`

Select shapes overlap the given area in the current page.

#### Parameters

• **x1**: `number`

x-coordinate of the first corner of the area.

• **y1**: `number`

y-coordinate of the first corner of the area.

• **x2**: `number`

x-coordinate of the second corner of the area.

• **y2**: `number`

y-coordinate of the second corner of the area.

• **clear**: `boolean`= `true`

clear the current selection if true.

#### Returns

`void`

#### Source

[packages/core/src/selection-manager.ts:83](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L83)

***

### size()

> **size**(): `number`

Return the number of selections

#### Returns

`number`

#### Source

[packages/core/src/selection-manager.ts:52](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/selection-manager.ts#L52)
