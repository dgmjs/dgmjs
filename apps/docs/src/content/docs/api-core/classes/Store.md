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

[packages/core/src/core/store.ts:46](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L46)

## Properties

### history

> **history**: [`Transform`](/api-core/classes/transform/)

History

#### Source

[packages/core/src/core/store.ts:31](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L31)

***

### idIndex

> **idIndex**: `Record`\<`string`, [`Obj`](/api-core/classes/obj/)\>

Index for object.id

#### Source

[packages/core/src/core/store.ts:36](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L36)

***

### instantiator

> **instantiator**: `Instantiator`

Shape instantiator

#### Source

[packages/core/src/core/store.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L26)

***

### options

> **options**: `StoreOptions`

Store options

#### Source

[packages/core/src/core/store.ts:21](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L21)

***

### root

> **root**: `null` \| [`Obj`](/api-core/classes/obj/)

the root object

#### Source

[packages/core/src/core/store.ts:41](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L41)

## Methods

### addToIndex()

> **addToIndex**(`obj`): `void`

Add to index for the object (with all descendants)

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[packages/core/src/core/store.ts:65](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L65)

***

### clear()

> **clear**(): `void`

Clear the store

#### Returns

`void`

#### Source

[packages/core/src/core/store.ts:57](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L57)

***

### fromJSON()

> **fromJSON**(`json`): `void`

Set the root from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[packages/core/src/core/store.ts:124](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L124)

***

### getById()

> **getById**(`id`): `null` \| [`Obj`](/api-core/classes/obj/)

Get an object by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[packages/core/src/core/store.ts:102](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L102)

***

### has()

> **has**(`obj`): `boolean`

Test shape is exists in the store or not

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[packages/core/src/core/store.ts:109](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L109)

***

### removeFromIndex()

> **removeFromIndex**(`obj`): `void`

Remove from index for the object (with all descendants)

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[packages/core/src/core/store.ts:79](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L79)

***

### setRoot()

> **setRoot**(`doc`): `void`

Set the root object

#### Parameters

• **doc**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[packages/core/src/core/store.ts:137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L137)

***

### toJSON()

> **toJSON**(): `any`

Return JSON of the root

#### Returns

`any`

#### Source

[packages/core/src/core/store.ts:117](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L117)

***

### update()

> **update**(`obj`): `void`

Update obj

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[packages/core/src/core/store.ts:93](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/store.ts#L93)
