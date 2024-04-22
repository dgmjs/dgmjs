# yjs sync plugin

```ts
function App() {
  return (<DGMEditor plugins=[new YjsSyncPlugin()]>)
}
```


```ts
class YjsSyncPlugin {
  constructor () {
    super('@dgmjs/yjs-sync')
  }

  /** start live syn */
  start(yDoc, yProvider) {}

  /** stop live sync */
  stop() {}

  /* flush objs to yDoc */
  flush() {}
}
```
