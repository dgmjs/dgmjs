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

[core/transaction.ts:245](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L245)

## Properties

### newPosition

> **newPosition**: `number`

#### Source

[core/transaction.ts:242](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L242)

***

### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:241](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L241)

***

### oldPosition

> **oldPosition**: `number`

#### Source

[core/transaction.ts:243](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L243)

***

### parent

> **parent**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:240](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L240)

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

[core/transaction.ts:257](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L257)

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

[core/transaction.ts:273](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L273)

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

[core/transaction.ts:265](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L265)
