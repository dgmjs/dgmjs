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

[editor.ts:2101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2101)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:2099](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2099)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:2105](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2105)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:2106](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2106)
