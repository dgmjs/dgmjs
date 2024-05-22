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

[editor.ts:1699](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1699)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1697](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1697)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1703](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1703)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1704](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1704)
