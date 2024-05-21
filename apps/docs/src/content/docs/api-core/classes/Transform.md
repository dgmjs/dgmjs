---
editUrl: false
next: false
prev: false
title: "Transform"
---

Transform

## Constructors

### new Transform()

> **new Transform**(`store`): [`Transform`](/api-core/classes/transform/)

constructor

#### Parameters

• **store**: [`Store`](/api-core/classes/store/)

#### Returns

[`Transform`](/api-core/classes/transform/)

#### Source

[core/transform.ts:88](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L88)

## Properties

### action

> **action**: `null` \| [`Action`](/api-core/classes/action/)

Working action

#### Source

[core/transform.ts:53](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L53)

***

### onAction

> **onAction**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Action`](/api-core/classes/action/)\>

Event for action

#### Source

[core/transform.ts:73](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L73)

***

### onRedo

> **onRedo**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Action`](/api-core/classes/action/)\>

Event for redo

#### Source

[core/transform.ts:83](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L83)

***

### onTransaction

> **onTransaction**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Transaction`](/api-core/classes/transaction/)\>

Event for transaction

#### Source

[core/transform.ts:68](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L68)

***

### onUndo

> **onUndo**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Action`](/api-core/classes/action/)\>

Event for undo

#### Source

[core/transform.ts:78](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L78)

***

### redoHistory

> **redoHistory**: `Stack`\<[`Action`](/api-core/classes/action/)\>

Redo history.

#### Source

[core/transform.ts:63](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L63)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

Shape store

#### Source

[core/transform.ts:48](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L48)

***

### undoHistory

> **undoHistory**: `Stack`\<[`Action`](/api-core/classes/action/)\>

Undo history.

#### Source

[core/transform.ts:58](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L58)

## Methods

### canRedo()

> **canRedo**(): `boolean`

Whether redo is available

#### Returns

`boolean`

#### Source

[core/transform.ts:160](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L160)

***

### canUndo()

> **canUndo**(): `boolean`

Whether undo is available

#### Returns

`boolean`

#### Source

[core/transform.ts:153](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L153)

***

### cancelAction()

> **cancelAction**(): `void`

Cancel the action

#### Returns

`void`

#### Source

[core/transform.ts:143](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L143)

***

### endAction()

> **endAction**(): `void`

End the action

#### Returns

`void`

#### Source

[core/transform.ts:130](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L130)

***

### redo()

> **redo**(): `void`

Redo

#### Returns

`void`

#### Source

[core/transform.ts:181](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L181)

***

### startAction()

> **startAction**(`name`): `void`

Start an action

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Source

[core/transform.ts:102](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L102)

***

### transact()

> **transact**(`fn`): `void`

Execute function as a transaction

#### Parameters

• **fn**

#### Returns

`void`

#### Source

[core/transform.ts:112](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L112)

***

### undo()

> **undo**(): `void`

Undo

#### Returns

`void`

#### Source

[core/transform.ts:167](https://github.com/dgmjs/dgmjs/blob/6298c851d69b83f472385d1ebb3c937ddb56985d/packages/core/src/core/transform.ts#L167)
