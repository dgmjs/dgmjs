---
editUrl: false
next: false
prev: false
title: "TypedEvent"
---

passes through events as they happen. You will not get events from before you start listening

## Type parameters

• **T**

## Constructors

### new TypedEvent()

> **new TypedEvent**\<`T`\>(): [`TypedEvent`](/api-core/classes/typedevent/)\<`T`\>

#### Returns

[`TypedEvent`](/api-core/classes/typedevent/)\<`T`\>

## Methods

### addListener()

> **addListener**(`listener`): [`Disposable`](/api-core/interfaces/disposable/)

#### Parameters

• **listener**: [`Listener`](/api-core/interfaces/listener/)\<`T`\>

#### Returns

[`Disposable`](/api-core/interfaces/disposable/)

#### Source

[std/typed-event.ts:19](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/std/typed-event.ts#L19)

***

### addOnceListener()

> **addOnceListener**(`listener`): `void`

#### Parameters

• **listener**: [`Listener`](/api-core/interfaces/listener/)\<`T`\>

#### Returns

`void`

#### Source

[std/typed-event.ts:26](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/std/typed-event.ts#L26)

***

### emit()

> **emit**(`event`): `void`

#### Parameters

• **event**: `T`

#### Returns

`void`

#### Source

[std/typed-event.ts:35](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/std/typed-event.ts#L35)

***

### pipe()

> **pipe**(`te`): [`Disposable`](/api-core/interfaces/disposable/)

#### Parameters

• **te**: [`TypedEvent`](/api-core/classes/typedevent/)\<`T`\>

#### Returns

[`Disposable`](/api-core/interfaces/disposable/)

#### Source

[std/typed-event.ts:47](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/std/typed-event.ts#L47)

***

### removeListener()

> **removeListener**(`listener`): `void`

#### Parameters

• **listener**: [`Listener`](/api-core/interfaces/listener/)\<`T`\>

#### Returns

`void`

#### Source

[std/typed-event.ts:30](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/std/typed-event.ts#L30)
