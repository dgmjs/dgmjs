---
editUrl: false
next: false
prev: false
title: "CreateMutation"
---

Create an object

## Extends

- [`Mutation`](/api-core/classes/mutation/)

## Constructors

### new CreateMutation()

> **new CreateMutation**(`obj`): [`CreateMutation`](/api-core/classes/createmutation/)

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

[`CreateMutation`](/api-core/classes/createmutation/)

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`constructor`](/api-core/classes/mutation/#constructors)

#### Source

[packages/core/src/core/transaction.ts:35](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L35)

## Properties

### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

#### Source

[packages/core/src/core/transaction.ts:33](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L33)

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

[packages/core/src/core/transaction.ts:40](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L40)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`toJSON`](/api-core/classes/mutation/#tojson)

#### Source

[packages/core/src/core/transaction.ts:50](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L50)

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

[packages/core/src/core/transaction.ts:45](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transaction.ts#L45)
