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

[editor.ts:2078](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2078)

## Properties

### id

> **id**: `string`

#### Source

[editor.ts:2076](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2076)

## Methods

### activate()

> `abstract` **activate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:2082](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2082)

***

### deactivate()

> `abstract` **deactivate**(`editor`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Source

[editor.ts:2083](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L2083)
