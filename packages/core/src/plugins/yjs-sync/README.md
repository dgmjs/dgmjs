# yjs sync plugin

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

### Doc to yDoc

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

### yDoc to Doc

- yObjMap `add` change
- yObjMap `delete` change
- yObj `add` change
- yObj `delete` change
- yObj `update` change
