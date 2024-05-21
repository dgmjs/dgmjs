---
editUrl: false
next: false
prev: false
title: "Action"
---

Action

## Constructors

### new Action()

> **new Action**(`name`): [`Action`](/api-core/classes/action/)

#### Parameters

• **name**: `string`

#### Returns

[`Action`](/api-core/classes/action/)

#### Source

[core/transform.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L17)

## Properties

### name

> **name**: `string`

#### Source

[core/transform.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L14)

***

### transactions

> **transactions**: [`Transaction`](/api-core/classes/transaction/)[]

#### Source

[core/transform.ts:15](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L15)

## Methods

### apply()

> **apply**(`transform`): `void`

#### Parameters

• **transform**: [`Transform`](/api-core/classes/transform/)

#### Returns

`void`

#### Source

[core/transform.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L26)

***

### push()

> **push**(`tx`): `void`

#### Parameters

• **tx**: [`Transaction`](/api-core/classes/transaction/)

#### Returns

`void`

#### Source

[core/transform.ts:22](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L22)

***

### unapply()

> **unapply**(`transform`): `void`

#### Parameters

• **transform**: [`Transform`](/api-core/classes/transform/)

#### Returns

`void`

#### Source

[core/transform.ts:33](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L33)
