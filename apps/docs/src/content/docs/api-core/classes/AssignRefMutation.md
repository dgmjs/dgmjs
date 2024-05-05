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

[core/transaction.ts:122](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L122)

## Properties

### field

> **field**: `string`

#### Source

[core/transaction.ts:118](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L118)

***

### newValue

> **newValue**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:119](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L119)

***

### obj

> **obj**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:117](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L117)

***

### oldValue

> **oldValue**: [`Obj`](/api-core/classes/obj/)

#### Source

[core/transaction.ts:120](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L120)

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

[core/transaction.ts:130](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L130)

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

[core/transaction.ts:138](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L138)

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

[core/transaction.ts:134](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transaction.ts#L134)
