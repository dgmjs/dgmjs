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

[editor.ts:2094](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2094)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:2092](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2092)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:2098](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2098)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:2099](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2099)
