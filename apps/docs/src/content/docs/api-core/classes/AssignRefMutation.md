---
editUrl: false
next: false
prev: false
title: "AssignRefMutation"
---

Assign a ref to an object field

## Extends

- [`Mutation`](/api-core/classes/mutation/)

## Constructors

### new AssignRefMutation()

> **new AssignRefMutation**(`obj`, `field`, `value`): [`AssignRefMutation`](/api-core/classes/assignrefmutation/)

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

• **field**: `string`

• **value**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Returns

[`AssignRefMutation`](/api-core/classes/assignrefmutation/)

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`constructor`](/api-core/classes/mutation/#constructors)

#### Source

[core/transaction.ts:128](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L128)

## Properties

### field

> **field**: `string`

#### Source

[core/transaction.ts:124](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L124)

***

### newValue

> **newValue**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:125](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L125)

***

### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L123)

***

### oldValue

> **oldValue**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:126](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L126)

***

### type

> **type**: `string`

#### Inherited from

[`Mutation`](/api-core/classes/mutation/).[`type`](/api-core/classes/mutation/#type)

#### Source

[core/transaction.ts:18](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L18)

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

[core/transaction.ts:136](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L136)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### field

> **field**: `string`

##### newValue

> **newValue**: `null` \| [`Obj`](/api-core/classes/obj/)

##### objId

> **objId**: `string`

##### oldValue

> **oldValue**: [`Obj`](/api-core/classes/obj/)

##### op

> **op**: `string`

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`toJSON`](/api-core/classes/mutation/#tojson)

#### Source

[core/transaction.ts:146](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L146)

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

[core/transaction.ts:141](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L141)
