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

[core/store.ts:58](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L58)

## Properties

### history

> **history**: [`Transform`](/api-core/classes/transform/)

History

#### Source

[core/store.ts:43](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L43)

***

### idIndex

> **idIndex**: `Record`\<`string`, [`Obj`](/api-core/classes/obj/)\>

Index for object.id

#### Source

[core/store.ts:48](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L48)

***

### instantiator

> **instantiator**: `Instantiator`

Shape instantiator

#### Source

[core/store.ts:38](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L38)

***

### options

> **options**: `StoreOptions`

Store options

#### Source

[core/store.ts:33](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L33)

***

### root

> **root**: `null` \| [`Obj`](/api-core/classes/obj/)

the root object

#### Source

[core/store.ts:53](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L53)

## Methods

### addToIndex()

> **addToIndex**(`obj`): `void`

Add to index for the object (with all descendants)

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[core/store.ts:77](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L77)

***

### clear()

> **clear**(): `void`

Clear the store

#### Returns

`void`

#### Source

[core/store.ts:69](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L69)

***

### fromJSON()

> **fromJSON**(`json`): `void`

Set the root from JSON

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[core/store.ts:127](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L127)

***

### getById()

> **getById**(`id`): `null` \| [`Obj`](/api-core/classes/obj/)

Get an object by id

#### Parameters

• **id**: `string`

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[core/store.ts:105](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L105)

***

### has()

> **has**(`obj`): `boolean`

Test shape is exists in the store or not

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[core/store.ts:112](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L112)

***

### removeFromIndex()

> **removeFromIndex**(`obj`): `void`

Remove from index for the object (with all descendants)

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[core/store.ts:91](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L91)

***

### setRoot()

> **setRoot**(`doc`): `void`

Set the root object

#### Parameters

• **doc**: [`Obj`](/api-core/classes/obj/)

#### Returns

`void`

#### Source

[core/store.ts:139](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L139)

***

### toJSON()

> **toJSON**(): `any`

Return JSON of the root

#### Returns

`any`

#### Source

[core/store.ts:120](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/store.ts#L120)
