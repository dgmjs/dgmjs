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

[editor.ts:1932](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1932)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1930](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1930)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1936](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1936)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1937](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1937)
