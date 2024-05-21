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

[core/transaction.ts:316](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L316)

## Properties

### mutations

> **mutations**: [`Mutation`](/api-core/classes/mutation/)[]

#### Source

[core/transaction.ts:314](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L314)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

#### Source

[core/transaction.ts:313](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L313)

## Methods

### appendObj()

> **appendObj**(`obj`): `boolean`

Atomic mutation to append an obj and returns true if changed

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[core/transaction.ts:354](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L354)

***

### apply()

> **apply**(): `void`

Apply transaction

#### Returns

`void`

#### Source

[core/transaction.ts:332](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L332)

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

[core/transaction.ts:380](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L380)

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

[core/transaction.ts:403](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L403)

***

### deleteObj()

> **deleteObj**(`obj`): `boolean`

Atomic mutation to delete an obj and returns true if changed

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[core/transaction.ts:367](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L367)

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

[core/transaction.ts:426](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L426)

***

### push()

> **push**(`mut`): `void`

#### Parameters

• **mut**: [`Mutation`](/api-core/classes/mutation/)

#### Returns

`void`

#### Source

[core/transaction.ts:321](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L321)

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

[core/transaction.ts:439](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L439)

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

[core/transaction.ts:452](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L452)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Source

[core/transaction.ts:325](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L325)

***

### unapply()

> **unapply**(): `void`

Unapply transaction

#### Returns

`void`

#### Source

[core/transaction.ts:343](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L343)
