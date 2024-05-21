---
editUrl: false
next: false
prev: false
title: "InsertChildMutation"
---

Insert a child

## Extends

- [`Mutation`](/api-core/classes/mutation/)

## Constructors

### new InsertChildMutation()

> **new InsertChildMutation**(`parent`, `obj`, `position`?): [`InsertChildMutation`](/api-core/classes/insertchildmutation/)

#### Parameters

• **parent**: [`Obj`](/api-core/classes/obj/)

• **obj**: [`Obj`](/api-core/classes/obj/)

• **position?**: `number`

#### Returns

[`InsertChildMutation`](/api-core/classes/insertchildmutation/)

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`constructor`](/api-core/classes/mutation/#constructors)

#### Source

[core/transaction.ts:165](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L165)

## Properties

### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:162](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L162)

***

### parent

> **parent**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:161](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L161)

***

### position

> **position**: `number`

#### Source

[core/transaction.ts:163](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L163)

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

[core/transaction.ts:176](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L176)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

##### op

> **op**: `string`

##### parentId

> **parentId**: `string`

##### position

> **position**: `number`

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`toJSON`](/api-core/classes/mutation/#tojson)

#### Source

[core/transaction.ts:194](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L194)

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

[core/transaction.ts:185](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transaction.ts#L185)
