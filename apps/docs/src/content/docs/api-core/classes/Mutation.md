---
editUrl: false
next: false
prev: false
title: "Mutation"
---

Mutation is an atomic modification on an object in store

## Extended by

- [`CreateMutation`](/api-core/classes/createmutation/)
- [`DeleteMutation`](/api-core/classes/deletemutation/)
- [`AssignMutation`](/api-core/classes/assignmutation/)
- [`AssignRefMutation`](/api-core/classes/assignrefmutation/)
- [`InsertChildMutation`](/api-core/classes/insertchildmutation/)
- [`RemoveChildMutation`](/api-core/classes/removechildmutation/)
- [`ReorderChildMutation`](/api-core/classes/reorderchildmutation/)

## Constructors

### new Mutation()

> **new Mutation**(`type`): [`Mutation`](/api-core/classes/mutation/)

#### Parameters

• **type**: `string`

#### Returns

[`Mutation`](/api-core/classes/mutation/)

#### Source

[core/transaction.ts:19](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L19)

## Properties

### type

> **type**: `string`

#### Source

[core/transaction.ts:18](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L18)

## Methods

### apply()

> **apply**(`store`): `void`

#### Parameters

• **store**: [`Store`](/api-core/classes/store/)

#### Returns

`void`

#### Source

[core/transaction.ts:22](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L22)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Source

[core/transaction.ts:24](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L24)

***

### unapply()

> **unapply**(`store`): `void`

#### Parameters

• **store**: [`Store`](/api-core/classes/store/)

#### Returns

`void`

#### Source

[core/transaction.ts:23](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L23)
