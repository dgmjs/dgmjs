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

[editor.ts:1648](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1648)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1646](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1646)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1652](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1652)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1653](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1653)
