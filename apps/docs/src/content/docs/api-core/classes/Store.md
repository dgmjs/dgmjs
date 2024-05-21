---
editUrl: false
next: false
prev: false
title: "Store"
---

Object store
- access to all objects
- manage index for objects

## Constructors

### new Store()

> **new Store**(`instantiator`, `options`?): [`Store`](/api-core/classes/store/)

Constructor

#### Parameters

• **instantiator**: `Instantiator`

• **options?**: `StoreOptions`

#### Returns

[`Store`](/api-core/classes/store/)

#### Source

[core/store.ts:59](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L59)

## Properties

### history

> **history**: [`Transform`](/api-core/classes/transform/)

History

#### Source

[core/store.ts:44](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L44)

***

### idIndex

> **idIndex**: `Record`\<`string`, [`Obj`](/api-core/classes/obj/)\>

Index for object.id

#### Source

[core/store.ts:49](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L49)

***

### instantiator

> **instantiator**: `Instantiator`

Shape instantiator

#### Source

[core/store.ts:39](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L39)

***

### options

> **options**: `StoreOptions`

Store options

#### Source

[core/store.ts:34](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L34)

***

### root

> **root**: `null` \| [`Obj`](/api-core/classes/obj/)

the root object

#### Source

[core/store.ts:54](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L54)

## Methods

### addToIndex()

> **addToIndex**(`obj`): `void`

Add to index for the object (with all descendants)

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[core/store.ts:78](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L78)

***

### clear()

> **clear**(): `void`

Clear the store

#### Returns

`void`

#### Source

[core/store.ts:70](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L70)

***

### fromJSON()

> **fromJSON**(`json`): `void`

Set the root from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[core/store.ts:137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L137)

***

### getById()

> **getById**(`id`): `null` \| [`Obj`](/api-core/classes/obj/)

Get an object by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[core/store.ts:115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L115)

***

### has()

> **has**(`obj`): `boolean`

Test shape is exists in the store or not

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[core/store.ts:122](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L122)

***

### removeFromIndex()

> **removeFromIndex**(`obj`): `void`

Remove from index for the object (with all descendants)

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[core/store.ts:92](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L92)

***

### setRoot()

> **setRoot**(`doc`): `void`

Set the root object

#### Parameters

• **doc**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[core/store.ts:149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L149)

***

### toJSON()

> **toJSON**(): `any`

Return JSON of the root

#### Returns

`any`

#### Source

[core/store.ts:130](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L130)

***

### update()

> **update**(`obj`): `void`

Update obj

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[core/store.ts:106](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L106)
