---
editUrl: false
next: false
prev: false
title: "KeymapManager"
---

## Constructors

### new KeymapManager()

> **new KeymapManager**(`editor`): [`KeymapManager`](/api-core/classes/keymapmanager/)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

[`KeymapManager`](/api-core/classes/keymapmanager/)

#### Source

[keymap-manager.ts:9](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L9)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[keymap-manager.ts:6](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L6)

***

### keymap

> **keymap**: [`KeyMap`](/api-core/type-aliases/keymap/)

#### Source

[keymap-manager.ts:7](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L7)

## Methods

### add()

> **add**(`keys`): `void`

Add keymaps

#### Parameters

• **keys**: [`KeyMap`](/api-core/type-aliases/keymap/)

#### Returns

`void`

#### Source

[keymap-manager.ts:17](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L17)

***

### bind()

> **bind**(`keymap`): `void`

#### Parameters

• **keymap**: [`KeyMap`](/api-core/type-aliases/keymap/)

#### Returns

`void`

#### Source

[keymap-manager.ts:306](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L306)

***

### buildKeyDescriptor()

> **buildKeyDescriptor**(`hasCmd`, `hasCtrl`, `hasAlt`, `hasShift`, `key`): `string`

#### Parameters

• **hasCmd**: `boolean`

• **hasCtrl**: `boolean`

• **hasAlt**: `boolean`

• **hasShift**: `boolean`

• **key**: `string`

#### Returns

`string`

#### Source

[keymap-manager.ts:158](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L158)

***

### formatKeyDescriptor()

> **formatKeyDescriptor**(`descriptor`): `string`

#### Parameters

• **descriptor**: `string`

#### Returns

`string`

#### Source

[keymap-manager.ts:33](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L33)

***

### getKeymap()

> **getKeymap**(): [`KeyMap`](/api-core/type-aliases/keymap/)

Get current keymap

#### Returns

[`KeyMap`](/api-core/type-aliases/keymap/)

#### Source

[keymap-manager.ts:29](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L29)

***

### handleKey()

> **handleKey**(`key`): `boolean`

#### Parameters

• **key**: `string`

#### Returns

`boolean`

#### Source

[keymap-manager.ts:298](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L298)

***

### inEditMode()

> **inEditMode**(): `boolean`

#### Returns

`boolean`

#### Source

[keymap-manager.ts:277](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L277)

***

### inModalDialog()

> **inModalDialog**(): `boolean`

#### Returns

`boolean`

#### Source

[keymap-manager.ts:273](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L273)

***

### isEditKey()

> **isEditKey**(`event`): `boolean`

#### Parameters

• **event**: `KeyboardEvent`

#### Returns

`boolean`

#### Source

[keymap-manager.ts:286](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L286)

***

### mapKeycodeToKey()

> **mapKeycodeToKey**(`keycodeNumber`, `key`): `string`

#### Parameters

• **keycodeNumber**: `number`

• **key**: `string`

#### Returns

`string`

#### Source

[keymap-manager.ts:192](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L192)

***

### normalizeKeyDescriptor()

> **normalizeKeyDescriptor**(`descriptor`): `string`

#### Parameters

• **descriptor**: `string`

#### Returns

`string`

#### Source

[keymap-manager.ts:118](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L118)

***

### translateKeyboardEvent()

> **translateKeyboardEvent**(`event`): `string`

Translate key event to normalized key descriptor

#### Parameters

• **event**: `KeyboardEvent`

#### Returns

`string`

#### Source

[keymap-manager.ts:251](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L251)
