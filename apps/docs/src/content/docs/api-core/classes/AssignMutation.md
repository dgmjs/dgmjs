---
editUrl: false
next: false
prev: false
title: "AssignMutation"
---

Assign a value to an object field

## Extends

- [`Mutation`](/api-core/classes/mutation/)

## Constructors

### new AssignMutation()

> **new AssignMutation**(`obj`, `field`, `value`): [`AssignMutation`](/api-core/classes/assignmutation/)

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

• **field**: `string`

• **value**: `any`

#### Returns

[`AssignMutation`](/api-core/classes/assignmutation/)

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`constructor`](/api-core/classes/mutation/#constructors)

#### Source

[core/transaction.ts:90](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L90)

## Properties

### field

> **field**: `string`

#### Source

[core/transaction.ts:86](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L86)

***

### newValue

> **newValue**: `any`

#### Source

[core/transaction.ts:87](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L87)

***

### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:85](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L85)

***

### oldValue

> **oldValue**: `any`

#### Source

[core/transaction.ts:88](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L88)

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

[core/transaction.ts:98](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L98)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### field

> **field**: `string`

##### newValue

> **newValue**: `any`

##### objId

> **objId**: `string`

##### oldValue

> **oldValue**: `any`

##### op

> **op**: `string`

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`toJSON`](/api-core/classes/mutation/#tojson)

#### Source

[core/transaction.ts:108](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L108)

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

[core/transaction.ts:103](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L103)
