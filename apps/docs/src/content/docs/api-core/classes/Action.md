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

[core/transform.ts:16](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L16)

## Properties

### name

> **name**: `string`

#### Source

[core/transform.ts:13](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L13)

***

### transactions

> **transactions**: [`Transaction`](/api-core/classes/transaction/)[]

#### Source

[core/transform.ts:14](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L14)

## Methods

### apply()

> **apply**(`transform`): `void`

#### Parameters

• **transform**: [`Transform`](/api-core/classes/transform/)

#### Returns

`void`

#### Source

[core/transform.ts:25](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L25)

***

### push()

> **push**(`tx`): `void`

#### Parameters

• **tx**: [`Transaction`](/api-core/classes/transaction/)

#### Returns

`void`

#### Source

[core/transform.ts:21](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L21)

***

### unapply()

> **unapply**(`transform`): `void`

#### Parameters

• **transform**: [`Transform`](/api-core/classes/transform/)

#### Returns

`void`

#### Source

[core/transform.ts:32](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L32)
