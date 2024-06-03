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

[editor.ts:1882](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1882)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1880](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1880)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1886](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1886)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1887](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1887)
