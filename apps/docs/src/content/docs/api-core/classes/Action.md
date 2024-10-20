---
editUrl: false
next: false
prev: false
title: "Action"
---

Action is a collection of transactions, which can be undone/redone as a whole.

## Constructors

### new Action()

> **new Action**(`name`): [`Action`](/api-core/classes/action/)

#### Parameters

• **name**: `string`

#### Returns

[`Action`](/api-core/classes/action/)

#### Source

[core/transform.ts:54](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L54)

## Properties

### name

> **name**: `string`

#### Source

[core/transform.ts:51](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L51)

***

### transactions

> **transactions**: [`Transaction`](/api-core/classes/transaction/)[]

#### Source

[core/transform.ts:52](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L52)

## Methods

### apply()

> **apply**(`transform`): `void`

#### Parameters

• **transform**: [`Transform`](/api-core/classes/transform/)

#### Returns

`void`

#### Source

[core/transform.ts:63](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L63)

***

### push()

> **push**(`tx`): `void`

#### Parameters

• **tx**: [`Transaction`](/api-core/classes/transaction/)

#### Returns

`void`

#### Source

[core/transform.ts:59](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L59)

***

### unapply()

> **unapply**(`transform`): `void`

#### Parameters

• **transform**: [`Transform`](/api-core/classes/transform/)

#### Returns

`void`

#### Source

[core/transform.ts:70](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L70)
