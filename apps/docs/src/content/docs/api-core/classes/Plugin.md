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

[editor.ts:1919](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1919)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1917](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1917)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1923](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1923)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1924](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1924)
