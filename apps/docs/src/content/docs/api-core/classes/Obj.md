---
editUrl: false
next: false
prev: false
title: "Obj"
---

Base object.
1. have unique id
2. have parent and children
3. can be serialized (store and copy-paste)
4. can be traversed

## Extended by

- [`Shape`](/api-core/classes/shape/)
- [`Doc`](/api-core/classes/doc/)

## Constructors

### new Obj()

> **new Obj**(): [`Obj`](/api-core/classes/obj/)

#### Returns

[`Obj`](/api-core/classes/obj/)

#### Source

[core/obj.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L16)

## Properties

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Source

[core/obj.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L14)

***

### id

> **id**: `string`

#### Source

[core/obj.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L11)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[core/obj.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L13)

***

### type

> **type**: `string`

#### Source

[core/obj.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L12)

## Methods

### find()

> **find**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find an shape in breath-first order

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[core/obj.ts:147](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L147)

***

### findDepthFirst()

> **findDepthFirst**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find an shape in depth-first order

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[core/obj.ts:160](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L160)

***

### findParent()

> **findParent**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find a shape along with the parent-chain

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[core/obj.ts:173](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L173)

***

### fromJSON()

> **fromJSON**(`json`): `void`

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[core/obj.ts:78](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L78)

***

### getJson()

> **getJson**(`json`, `field`, `defaultValue`): `any`

Get a field from the JSON object, return defaultValue if the field is not defined.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `any`

#### Returns

`any`

#### Source

[core/obj.ts:53](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L53)

***

### isDescendant()

> **isDescendant**(`obj`): `boolean`

Test whether the given shape is a descendant

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[core/obj.ts:183](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L183)

***

### resolveRefs()

> **resolveRefs**(`idMap`, `nullIfNotFound`): `void`

Resolve references

#### Parameters

• **idMap**: `Record`\<`string`, [`Obj`](/api-core/classes/obj/)\>

id to object map

• **nullIfNotFound**: `boolean`= `false`

assign null if not found

#### Returns

`void`

#### Source

[core/obj.ts:88](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L88)

***

### setJson()

> **setJson**(`json`, `field`, `value`, `defaultValue`, `enforce`): `void`

Set a field in the JSON object only if the value is defined and not equal to the default value.

#### Parameters

• **json**: `any`

The JSON object to set the field in.

• **field**: `string`

The field name to set.

• **value**: `any`

The value to set.

• **defaultValue**: `any`

The default value to compare against.

• **enforce**: `boolean`= `false`

If true, the field will be set even if it is equal to the default value.

#### Returns

`void`

#### Source

[core/obj.ts:31](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L31)

***

### toJSON()

> **toJSON**(`recursive`, `keepRefs`, `enforce`): `any`

#### Parameters

• **recursive**: `boolean`= `false`

• **keepRefs**: `boolean`= `false`

• **enforce**: `boolean`= `false`

#### Returns

`any`

#### Source

[core/obj.ts:60](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L60)

***

### traverse()

> **traverse**(`fun`, `parent`): `void`

Traverse all objects in breath-first order

#### Parameters

• **fun**

• **parent**: `null` \| [`Obj`](/api-core/classes/obj/)= `null`

#### Returns

`void`

#### Source

[core/obj.ts:101](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L101)

***

### traverseDepthFirst()

> **traverseDepthFirst**(`fun`, `parent`): `void`

Traverse all shapes in depth-first order

#### Parameters

• **fun**

• **parent**: `null` \| [`Obj`](/api-core/classes/obj/)= `null`

#### Returns

`void`

#### Source

[core/obj.ts:115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L115)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Source

[core/obj.ts:138](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L138)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Source

[core/obj.ts:129](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L129)
