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

[editor.ts:1754](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1754)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:1752](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1752)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1758](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1758)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:1759](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1759)
