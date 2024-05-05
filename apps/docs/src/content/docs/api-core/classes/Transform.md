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

[core/transform.ts:87](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L87)

## Properties

### action

> **action**: `null` \| [`Action`](/api-core/classes/action/)

Working action

#### Source

[core/transform.ts:52](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L52)

***

### onAction

> **onAction**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Action`](/api-core/classes/action/)\>

Event for action

#### Source

[core/transform.ts:72](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L72)

***

### onRedo

> **onRedo**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Action`](/api-core/classes/action/)\>

Event for redo

#### Source

[core/transform.ts:82](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L82)

***

### onTransaction

> **onTransaction**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Transaction`](/api-core/classes/transaction/)\>

Event for transaction

#### Source

[core/transform.ts:67](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L67)

***

### onUndo

> **onUndo**: [`TypedEvent`](/api-core/classes/typedevent/)\<[`Action`](/api-core/classes/action/)\>

Event for undo

#### Source

[core/transform.ts:77](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L77)

***

### redoHistory

> **redoHistory**: `Stack`\<[`Action`](/api-core/classes/action/)\>

Redo history.

#### Source

[core/transform.ts:62](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L62)

***

### store

> **store**: [`Store`](/api-core/classes/store/)

Shape store

#### Source

[core/transform.ts:47](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L47)

***

### undoHistory

> **undoHistory**: `Stack`\<[`Action`](/api-core/classes/action/)\>

Undo history.

#### Source

[core/transform.ts:57](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L57)

## Methods

### canRedo()

> **canRedo**(): `boolean`

Whether redo is available

#### Returns

`boolean`

#### Source

[core/transform.ts:159](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L159)

***

### canUndo()

> **canUndo**(): `boolean`

Whether undo is available

#### Returns

`boolean`

#### Source

[core/transform.ts:152](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L152)

***

### cancelAction()

> **cancelAction**(): `void`

Cancel the action

#### Returns

`void`

#### Source

[core/transform.ts:142](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L142)

***

### endAction()

> **endAction**(): `void`

End the action

#### Returns

`void`

#### Source

[core/transform.ts:129](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L129)

***

### redo()

> **redo**(): `void`

Redo

#### Returns

`void`

#### Source

[core/transform.ts:180](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L180)

***

### startAction()

> **startAction**(`name`): `void`

Start an action

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Source

[core/transform.ts:101](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L101)

***

### transact()

> **transact**(`fn`): `void`

Execute function as a transaction

#### Parameters

• **fn**

#### Returns

`void`

#### Source

[core/transform.ts:111](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L111)

***

### undo()

> **undo**(): `void`

Undo

#### Returns

`void`

#### Source

[core/transform.ts:166](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/core/transform.ts#L166)
