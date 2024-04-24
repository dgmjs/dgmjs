import * as Y from "yjs";
export type YObj = Y.Map<any>;
export type YStore = Y.Map<YObj>;

/**
 * Get the child yObjs with the given parentId
 */
export function getYChildren(yStore: YStore, parentId: string) {
  const children: YObj[] = [];
  yStore.forEach((yObj, key) => {
    if (yObj.get("parent") === parentId) {
      children.push(yObj);
    }
  });
  return children;
}
