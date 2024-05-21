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

[editor.ts:1642](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1642)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1640](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1640)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1646](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1646)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1647](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1647)
