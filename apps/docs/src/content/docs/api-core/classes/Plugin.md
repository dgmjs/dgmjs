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

[editor.ts:1700](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1700)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1698](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1698)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1704](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1704)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1705](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1705)
