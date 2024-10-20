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

[core/transform.ts:125](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L125)

## Properties

### action

> **action**: `null` \| [`Action`](/api-core/classes/action/)

Working action

#### Source

[core/transform.ts:90](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L90)

***

### onAction

> **onAction**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Action`](/api-core/classes/action/)\>

Event for action

#### Source

[core/transform.ts:110](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L110)

***

### onRedo

> **onRedo**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Action`](/api-core/classes/action/)\>

Event for redo

#### Source

[core/transform.ts:120](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L120)

***

### onTransaction

> **onTransaction**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Transaction`](/api-core/classes/transaction/)\>

Event for transaction

#### Source

[core/transform.ts:105](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L105)

***

### onUndo

> **onUndo**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Action`](/api-core/classes/action/)\>

Event for undo

#### Source

[core/transform.ts:115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L115)

***

### redoHistory

> **redoHistory**: `Stack`\<[`Action`](/api-core/classes/action/)\>

Redo history.

#### Source

[core/transform.ts:100](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L100)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

Shape store

#### Source

[core/transform.ts:85](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L85)

***

### undoHistory

> **undoHistory**: `Stack`\<[`Action`](/api-core/classes/action/)\>

Undo history.

#### Source

[core/transform.ts:95](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L95)

## Methods

### canRedo()

> **canRedo**(): `boolean`

Whether redo is available

#### Returns

`boolean`

#### Source

[core/transform.ts:213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L213)

***

### canUndo()

> **canUndo**(): `boolean`

Whether undo is available

#### Returns

`boolean`

#### Source

[core/transform.ts:206](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L206)

***

### cancelAction()

> **cancelAction**(): `void`

Cancel the action

#### Returns

`void`

#### Source

[core/transform.ts:180](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L180)

***

### endAction()

> **endAction**(): `void`

End the action

#### Returns

`void`

#### Source

[core/transform.ts:167](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L167)

***

### mergeAction()

> **mergeAction**(): `void`

Merge lastest two actions into a single action

#### Returns

`void`

#### Source

[core/transform.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L190)

***

### redo()

> **redo**(): `void`

Redo

#### Returns

`void`

#### Source

[core/transform.ts:234](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L234)

***

### startAction()

> **startAction**(`name`): `void`

Start an action

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Source

[core/transform.ts:139](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L139)

***

### transact()

> **transact**(`fn`): `void`

Execute function as a transaction

#### Parameters

• **fn**

#### Returns

`void`

#### Source

[core/transform.ts:149](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L149)

***

### undo()

> **undo**(): `void`

Undo

#### Returns

`void`

#### Source

[core/transform.ts:220](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/core/transform.ts#L220)
