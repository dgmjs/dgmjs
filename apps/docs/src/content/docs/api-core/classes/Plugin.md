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

[editor.ts:1934](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1934)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1932](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1932)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1938](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1938)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1939](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1939)
