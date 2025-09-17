---
editUrl: false
next: false
prev: false
title: "Transaction"
---

Transation is an operation consists of a set of mutations

Note:
- all mutations are immediately applied when it created
  (this is because constraints are resolved based on current obj states)
- apply() and unapply() are called when only undo and redo

## Constructors

### new Transaction()

> **new Transaction**(`store`): [`Transaction`](/api-core/classes/transaction/)

#### Parameters

• **store**: [`Store`](/api-core/classes/store/)

#### Returns

[`Transaction`](/api-core/classes/transaction/)

#### Source

[packages/core/src/core/transaction.ts:317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L317)

## Properties

### mutations

> **mutations**: [`Mutation`](/api-core/classes/mutation/)[]

#### Source

[packages/core/src/core/transaction.ts:314](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L314)

***

### recentlyAppendedObj

> **recentlyAppendedObj**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[packages/core/src/core/transaction.ts:315](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L315)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

#### Source

[packages/core/src/core/transaction.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L313)

## Methods

### appendObj()

> **appendObj**(`obj`): `boolean`

Atomic mutation to append an obj and returns true if changed

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[packages/core/src/core/transaction.ts:356](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L356)

***

### apply()

> **apply**(): `void`

Apply transaction

#### Returns

`void`

#### Source

[packages/core/src/core/transaction.ts:334](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L334)

***

### assign()

> **assign**(`obj`, `field`, `value`): `boolean`

Assign a value to shape's field and returns true if changed

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

• **field**: `string`

• **value**: `any`

#### Returns

`boolean`

#### Source

[packages/core/src/core/transaction.ts:383](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L383)

***

### assignRef()

> **assignRef**(`obj`, `field`, `value`): `boolean`

Assign a ref to shape's field and returns true if changed

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

• **field**: `string`

• **value**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[packages/core/src/core/transaction.ts:406](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L406)

***

### deleteObj()

> **deleteObj**(`obj`): `boolean`

Atomic mutation to delete an obj and returns true if changed

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[packages/core/src/core/transaction.ts:370](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L370)

***

### insertChild()

> **insertChild**(`parent`, `obj`, `position`?): `boolean`

Insert a child and returns true if changed

#### Parameters

• **parent**: [`Obj`](/api-core/classes/obj/)

• **obj**: [`Obj`](/api-core/classes/obj/)

• **position?**: `number`

#### Returns

`boolean`

#### Source

[packages/core/src/core/transaction.ts:429](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L429)

***

### push()

> **push**(`mut`): `void`

#### Parameters

• **mut**: [`Mutation`](/api-core/classes/mutation/)

#### Returns

`void`

#### Source

[packages/core/src/core/transaction.ts:323](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L323)

***

### removeChild()

> **removeChild**(`parent`, `obj`): `boolean`

Remove a child and returns true if changed

#### Parameters

• **parent**: [`Obj`](/api-core/classes/obj/)

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[packages/core/src/core/transaction.ts:442](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L442)

***

### reorderChild()

> **reorderChild**(`parent`, `obj`, `position`): `boolean`

Reorder a child and returns true if changed

#### Parameters

• **parent**: [`Obj`](/api-core/classes/obj/)

• **obj**: [`Obj`](/api-core/classes/obj/)

• **position**: `number`

#### Returns

`boolean`

#### Source

[packages/core/src/core/transaction.ts:455](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L455)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Source

[packages/core/src/core/transaction.ts:327](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L327)

***

### unapply()

> **unapply**(): `void`

Unapply transaction

#### Returns

`void`

#### Source

[packages/core/src/core/transaction.ts:345](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L345)
