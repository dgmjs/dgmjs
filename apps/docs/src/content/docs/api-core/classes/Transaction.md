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

[core/transaction.ts:296](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L296)

## Properties

### mutations

> **mutations**: [`Mutation`](/api-core/classes/mutation/)[]

#### Source

[core/transaction.ts:294](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L294)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

#### Source

[core/transaction.ts:293](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L293)

## Methods

### appendObj()

> **appendObj**(`obj`): `boolean`

Atomic mutation to append an obj and returns true if changed

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[core/transaction.ts:334](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L334)

***

### apply()

> **apply**(): `void`

Apply transaction

#### Returns

`void`

#### Source

[core/transaction.ts:312](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L312)

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

[core/transaction.ts:360](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L360)

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

[core/transaction.ts:383](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L383)

***

### deleteObj()

> **deleteObj**(`obj`): `boolean`

Atomic mutation to delete an obj and returns true if changed

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[core/transaction.ts:347](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L347)

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

[core/transaction.ts:406](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L406)

***

### push()

> **push**(`mut`): `void`

#### Parameters

• **mut**: [`Mutation`](/api-core/classes/mutation/)

#### Returns

`void`

#### Source

[core/transaction.ts:301](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L301)

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

[core/transaction.ts:419](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L419)

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

[core/transaction.ts:432](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L432)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Source

[core/transaction.ts:305](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L305)

***

### unapply()

> **unapply**(): `void`

Unapply transaction

#### Returns

`void`

#### Source

[core/transaction.ts:323](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L323)
