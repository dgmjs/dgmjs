---
editUrl: false
next: false
prev: false
title: "DeleteMutation"
---

Delete an object

## Extends

- [`Mutation`](/api-core/classes/mutation/)

## Constructors

### new DeleteMutation()

> **new DeleteMutation**(`obj`): [`DeleteMutation`](/api-core/classes/deletemutation/)

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

[`DeleteMutation`](/api-core/classes/deletemutation/)

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`constructor`](/api-core/classes/mutation/#constructors)

#### Source

[core/transaction.ts:61](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L61)

## Properties

### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:59](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L59)

***

### type

> **type**: `string`

#### Inherited from

[`Mutation`](/api-core/classes/mutation/).[`type`](/api-core/classes/mutation/#type)

#### Source

[core/transaction.ts:18](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L18)

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

[core/transaction.ts:66](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L66)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`toJSON`](/api-core/classes/mutation/#tojson)

#### Source

[core/transaction.ts:76](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L76)

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

[core/transaction.ts:71](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L71)
