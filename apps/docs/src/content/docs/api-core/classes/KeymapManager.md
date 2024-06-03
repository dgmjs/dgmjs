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

[keymap-manager.ts:22](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L22)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[keymap-manager.ts:19](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L19)

***

### keymap

> **keymap**: [`KeyMap`](/api-core/type-aliases/keymap/)

#### Source

[keymap-manager.ts:20](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L20)

## Methods

### add()

> **add**(`keys`): `void`

Add keymaps

#### Parameters

• **keys**: [`KeyMap`](/api-core/type-aliases/keymap/)

#### Returns

`void`

#### Source

[keymap-manager.ts:30](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L30)

***

### bind()

> **bind**(`keymap`): `void`

#### Parameters

• **keymap**: [`KeyMap`](/api-core/type-aliases/keymap/)

#### Returns

`void`

#### Source

[keymap-manager.ts:324](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L324)

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

[keymap-manager.ts:171](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L171)

***

### formatKeyDescriptor()

> **formatKeyDescriptor**(`descriptor`): `string`

#### Parameters

• **descriptor**: `string`

#### Returns

`string`

#### Source

[keymap-manager.ts:46](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L46)

***

### getKeymap()

> **getKeymap**(): [`KeyMap`](/api-core/type-aliases/keymap/)

Get current keymap

#### Returns

[`KeyMap`](/api-core/type-aliases/keymap/)

#### Source

[keymap-manager.ts:42](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L42)

***

### handleKey()

> **handleKey**(`key`): `boolean`

#### Parameters

• **key**: `string`

#### Returns

`boolean`

#### Source

[keymap-manager.ts:316](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L316)

***

### inEditMode()

> **inEditMode**(): `boolean`

#### Returns

`boolean`

#### Source

[keymap-manager.ts:295](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L295)

***

### inModalDialog()

> **inModalDialog**(): `boolean`

#### Returns

`boolean`

#### Source

[keymap-manager.ts:291](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L291)

***

### isEditKey()

> **isEditKey**(`event`): `boolean`

#### Parameters

• **event**: `KeyboardEvent`

#### Returns

`boolean`

#### Source

[keymap-manager.ts:304](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L304)

***

### mapKeycodeToKey()

> **mapKeycodeToKey**(`keycodeNumber`, `key`): `string`

#### Parameters

• **keycodeNumber**: `number`

• **key**: `string`

#### Returns

`string`

#### Source

[keymap-manager.ts:205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L205)

***

### normalizeKeyDescriptor()

> **normalizeKeyDescriptor**(`descriptor`): `string`

#### Parameters

• **descriptor**: `string`

#### Returns

`string`

#### Source

[keymap-manager.ts:131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L131)

***

### translateKeyboardEvent()

> **translateKeyboardEvent**(`event`): `string`

Translate key event to normalized key descriptor

#### Parameters

• **event**: `KeyboardEvent`

#### Returns

`string`

#### Source

[keymap-manager.ts:264](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/keymap-manager.ts#L264)
