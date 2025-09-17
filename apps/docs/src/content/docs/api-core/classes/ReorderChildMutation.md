---
editUrl: false
next: false
prev: false
title: "ReorderChildMutation"
---

Reorder a child

## Extends

- [`Mutation`](/api-core/classes/mutation/)

## Constructors

### new ReorderChildMutation()

> **new ReorderChildMutation**(`parent`, `obj`, `position`): [`ReorderChildMutation`](/api-core/classes/reorderchildmutation/)

#### Parameters

• **parent**: [`Obj`](/api-core/classes/obj/)

• **obj**: [`Obj`](/api-core/classes/obj/)

• **position**: `number`

#### Returns

[`ReorderChildMutation`](/api-core/classes/reorderchildmutation/)

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`constructor`](/api-core/classes/mutation/#constructors)

#### Source

[packages/core/src/core/transaction.ts:261](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L261)

## Properties

### newPosition

> **newPosition**: `number`

#### Source

[packages/core/src/core/transaction.ts:258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L258)

***

### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

#### Source

[packages/core/src/core/transaction.ts:257](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L257)

***

### oldPosition

> **oldPosition**: `number`

#### Source

[packages/core/src/core/transaction.ts:259](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L259)

***

### parent

> **parent**: [`Obj`](/api-core/classes/obj/)

#### Source

[packages/core/src/core/transaction.ts:256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L256)

***

### type

> **type**: `string`

#### Inherited from

[`Mutation`](/api-core/classes/mutation/).[`type`](/api-core/classes/mutation/#type)

#### Source

[packages/core/src/core/transaction.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L18)

## Methods

### apply()

> **apply**(`store`): `void`

#### Parameters

• **store**: [`Store`](/api-core/classes/store/)

#### Returns

`void`

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`apply`](/api-core/classes/mutation/#apply)

#### Source

[packages/core/src/core/transaction.ts:273](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L273)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### newPosition

> **newPosition**: `number`

##### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

##### oldPosition

> **oldPosition**: `number`

##### op

> **op**: `string`

##### parentId

> **parentId**: `string`

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`toJSON`](/api-core/classes/mutation/#tojson)

#### Source

[packages/core/src/core/transaction.ts:293](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L293)

***

### unapply()

> **unapply**(`store`): `void`

#### Parameters

• **store**: [`Store`](/api-core/classes/store/)

#### Returns

`void`

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`unapply`](/api-core/classes/mutation/#unapply)

#### Source

[packages/core/src/core/transaction.ts:283](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L283)
