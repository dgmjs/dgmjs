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

[core/transaction.ts:59](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L59)

## Properties

### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:57](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L57)

***

### type

> **type**: `string`

#### Inherited from

[`Mutation`](/api-core/classes/mutation/).[`type`](/api-core/classes/mutation/#type)

#### Source

[core/transaction.ts:18](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L18)

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

[core/transaction.ts:64](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L64)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Overrides

[`Mutation`](/api-core/classes/mutation/).[`toJSON`](/api-core/classes/mutation/#tojson)

#### Source

[core/transaction.ts:72](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L72)

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

[core/transaction.ts:68](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L68)
