# yjs sync plugin

```
         user1                                 user2
+---------------------+              +---------------------+

+-------+      +------+              +------+      +-------+
| Store | ---> | yDoc | <--(sync)--> | yDoc | ---> | Store |
+-------+      +------+              +------+      +-------+
```

## plugin setup

```ts
function App() {
  return (<DGMEditor plugins=[new YjsDocSyncPlugin()]>)
}
```

```ts
class YjsDocSyncPlugin {
  constructor () {
    super('@dgmjs/yjs-doc-sync')
  }

  /** start live syn */
  start(yDoc, yProvider) {}

  /** stop live sync */
  stop() {}

  /* flush objs to yDoc */
  flush() {}
}
```

## sync

- sync to ydoc
- sync to store

### Sync to yDoc

Apply `Transaction` to `Y.Map`

- `create` mutation
  - convert `obj` to `yObj`
  - set [`obj.id`, `yObj`] in `yObjMap`
- `delete` mutation
  - delete `obj.id` from `yObjMap`
- `assign` mutation
  - get `yObj` by `obj.id` from `yObjMap`
  - set [`field`, `value`] in `yObj`
- `assign-ref` mutation
  - get `yObj` by `obj.id` from `yObjMap`
  - set [`field`, `value.id`] in `yObj`
- `insert-child` mutation
  - get `yObj` by `parent.id` from `yObjMap`
  - let po = compute `parent:order` of `yObj` based on `position`
  - set [`parent`, `parent.id`] in `yObj`
  - set [`parent:order`, po] in `yObj`
- `remove-child` mutation
  - get `yObj` by `parent.id` from `yObjMap`
  - delete `parent` from `yObj`
  - delete `parent:order` from `yObj`
- `reorder-child` mutation
  - get `yObj` by `parent.id` from `yObjMap`
  - let po = compute `parent:order` of `yObj`  based on `position`
  - set [`parent:order`, po] in `yObj`

Convert `obj` to `yObj`

### Sync to Store

- yObjMap `add` change
- yObjMap `delete` change
- yObj `add` change
- yObj `delete` change
- yObj `update` change

### parent:order

1. Setting `parent:order`
   - in `flush()`
   - applying/unapplying `InsertChild` mutation
   - applying/unapplying `RemoveChild` mutation
   - applying/unapplying `ReorderChild` mutation

2. Reading `parent:order`
   - `YObj` created
   - `parent` changed
