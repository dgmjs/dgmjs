---
title: Mutating shapes
sidebar:
  order: 6
---

To mutate an array of shapes, you can simply call `editor.actions.update()` as below:

```ts
const shapes = editor.selection.getShapes();
editor.actions.update({
  strokeColor: "#00ff00",
  strokeWidth: 3,
  roughness: 2
}, shapes);
```

In the most cases, you can mutate shapes just using `editor.actions.update()`. If not, you have to understand [Action](#action) and [Transaction](#transaction).

## Action

[Action](/api-core/classes/action/) is a collection of [transactions](/api-core/classes/transaction/), which can be undone/redone as a whole. All functions in `editor.actions` are actions.

You can create an action with one or more transaction as below:

```ts
const currentPage = this.editor.getCurrentPage();
if (currentPage) {
  const canvas = this.editor.canvas;

  // start action
  editor.transform.startAction("action name");

  // do one or more transactions
  editor.transform.transact((tx) => {
    // ...
  })

  // finish action
  editor.transform.endAction();
}
```

## Transaction

[Transation](/api-core/classes/transaction/) is an operation consists of a set of mutations.
A transaction provides a set of atomic mutations. You need to combine them to make the desired changes on shapes. A transaction is immediately applied and can be visually confirmed in the editor.

```ts
import { macro } from "@dgmjs/core";

editor.transform.transact((tx) => {
  // mutations
  tx.appendObj(...)
  tx.assign(...)
  tx.insertChild(...)

  // resolve all constraints
  macro.resolveAllConstraints(tx, currentPage, canvas);
})
```

If making changes using only atomic mutations is too cumbersome, you can use `macro` functions. These provide utility functions that allow you to easily handle the desired changes with multiple mutations.

:::note
You must call the `resolveAllConstraints()` macro function at the end of the transaction. This resolves all constraints applied to the shapes.
:::
