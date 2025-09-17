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

[packages/core/src/core/obj.ts:16](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L16)

## Properties

### children

> **children**: [`Obj`](/api-core/classes/obj/)[]

#### Source

[packages/core/src/core/obj.ts:14](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L14)

***

### id

> **id**: `string`

#### Source

[packages/core/src/core/obj.ts:11](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L11)

***

### parent

> **parent**: `null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[packages/core/src/core/obj.ts:13](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L13)

***

### type

> **type**: `string`

#### Source

[packages/core/src/core/obj.ts:12](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L12)

## Methods

### find()

> **find**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find an shape in breath-first order

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[packages/core/src/core/obj.ts:363](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L363)

***

### findDepthFirst()

> **findDepthFirst**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find an shape in depth-first order

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[packages/core/src/core/obj.ts:376](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L376)

***

### findParent()

> **findParent**(`pred`): `null` \| [`Obj`](/api-core/classes/obj/)

Find a shape along with the parent-chain

#### Parameters

• **pred**

#### Returns

`null` \| [`Obj`](/api-core/classes/obj/)

#### Source

[packages/core/src/core/obj.ts:389](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L389)

***

### fromJSON()

> **fromJSON**(`json`): `void`

#### Parameters

• **json**: `any`

#### Returns

`void`

#### Source

[packages/core/src/core/obj.ts:294](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L294)

***

### isDescendant()

> **isDescendant**(`obj`): `boolean`

Test whether the given shape is a descendant

#### Parameters

• **obj**: [`Obj`](/api-core/classes/obj/)

#### Returns

`boolean`

#### Source

[packages/core/src/core/obj.ts:399](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L399)

***

### readAny()

> **readAny**(`json`, `field`, `defaultValue`): `any`

Read an any value from the JSON object,
return defaultValue if the field is undefined.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `any`

#### Returns

`any`

#### Source

[packages/core/src/core/obj.ts:54](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L54)

***

### readArrayAny()

> **readArrayAny**(`json`, `field`, `defaultValue`): `any`[]

Read an array of any value from the JSON object,
return defaultValue if the field is not an array.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `any`[]

#### Returns

`any`[]

#### Source

[packages/core/src/core/obj.ts:65](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L65)

***

### readArrayBoolean()

> **readArrayBoolean**(`json`, `field`, `defaultValue`, `length`?): `boolean`[]

Read an array of boolean from the JSON object,
return defaultValue if the field is not an array of boolean.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `boolean`[]

• **length?**: `number`

#### Returns

`boolean`[]

#### Source

[packages/core/src/core/obj.ts:148](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L148)

***

### readArrayNumber()

> **readArrayNumber**(`json`, `field`, `defaultValue`, `length`?): `number`[]

Read a number field from the JSON object,
return defaultValue if the field is not a number.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `number`[]

• **length?**: `number`

#### Returns

`number`[]

#### Source

[packages/core/src/core/obj.ts:87](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L87)

***

### readArrayPoint()

> **readArrayPoint**(`json`, `field`, `defaultValue`): [`number`, `number`][]

Read a, array of point value from the JSON object,
return defaultValue if the field is not an array of point.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: [`number`, `number`][]

#### Returns

[`number`, `number`][]

#### Source

[packages/core/src/core/obj.ts:256](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L256)

***

### readArrayString()

> **readArrayString**(`json`, `field`, `defaultValue`): `string`[]

Read an array of string from the JSON object,
return defaultValue if the field is not an array of string.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `string`[]

#### Returns

`string`[]

#### Source

[packages/core/src/core/obj.ts:123](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L123)

***

### readBoolean()

> **readBoolean**(`json`, `field`, `defaultValue`): `boolean`

Read a boolean field from the JSON object,
return defaultValue if the field is not a boolean.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `boolean`

#### Returns

`boolean`

#### Source

[packages/core/src/core/obj.ts:137](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L137)

***

### readColor()

> **readColor**(`json`, `field`, `defaultValue`): `string`

Read a color field from the JSON object,
return defaultValue if the field is not a string or not a valid color.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `string`

#### Returns

`string`

#### Source

[packages/core/src/core/obj.ts:170](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L170)

***

### readEnum()

> **readEnum**(`json`, `field`, `enumType`, `defaultValue`): `string`

Read an enum value from the JSON object,
return defaultValue if the field is not a valid enum value.

#### Parameters

• **json**: `any`

• **field**: `string`

• **enumType**: `any`

• **defaultValue**: `string`

#### Returns

`string`

#### Source

[packages/core/src/core/obj.ts:185](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L185)

***

### readNumber()

> **readNumber**(`json`, `field`, `defaultValue`): `number`

Read a number field from the JSON object,
return defaultValue if the field is not a number.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `number`

#### Returns

`number`

#### Source

[packages/core/src/core/obj.ts:76](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L76)

***

### readPoint()

> **readPoint**(`json`, `field`, `defaultValue`): [`number`, `number`]

Read a point value from the JSON object,
return defaultValue if the field is not a point.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: [`number`, `number`]

#### Returns

[`number`, `number`]

#### Source

[packages/core/src/core/obj.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L213)

***

### readPointOrNull()

> **readPointOrNull**(`json`, `field`, `defaultValue`): `null` \| [`number`, `number`]

Read a point or null value from the JSON object,
return defaultValue if the field is not a point or null.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `null` \| [`number`, `number`]

#### Returns

`null` \| [`number`, `number`]

#### Source

[packages/core/src/core/obj.ts:233](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L233)

***

### readRef()

> **readRef**(`json`, `field`): `null` \| `string`

Read a reference to object from the JSON object,
return defaultValue if the field is not string (obj's id) or null.

#### Parameters

• **json**: `any`

• **field**: `string`

#### Returns

`null` \| `string`

#### Source

[packages/core/src/core/obj.ts:202](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L202)

***

### readString()

> **readString**(`json`, `field`, `defaultValue`): `string`

Read a string field from the JSON object,
return defaultValue if the field is not a string.

#### Parameters

• **json**: `any`

• **field**: `string`

• **defaultValue**: `string`

#### Returns

`string`

#### Source

[packages/core/src/core/obj.ts:112](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L112)

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

[packages/core/src/core/obj.ts:304](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L304)

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

[packages/core/src/core/obj.ts:31](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L31)

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

[packages/core/src/core/obj.ts:276](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L276)

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

[packages/core/src/core/obj.ts:317](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L317)

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

[packages/core/src/core/obj.ts:331](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L331)

***

### traverseDepthFirstSequence()

> **traverseDepthFirstSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Source

[packages/core/src/core/obj.ts:354](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L354)

***

### traverseSequence()

> **traverseSequence**(): [`Obj`](/api-core/classes/obj/)[]

Returns an array of shapes in order of traverse sequence.

#### Returns

[`Obj`](/api-core/classes/obj/)[]

#### Source

[packages/core/src/core/obj.ts:345](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/obj.ts#L345)
