---
editUrl: false
next: false
prev: false
title: "Plugin"
---

Plugin

## Constructors

### new Plugin()

> **new Plugin**(`pluginId`): [`Plugin`](/api-core/classes/plugin/)

#### Parameters

• **pluginId**: `string`

#### Returns

[`Plugin`](/api-core/classes/plugin/)

#### Source

[editor.ts:1724](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1724)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1722](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1722)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1728](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1728)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1729](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1729)
