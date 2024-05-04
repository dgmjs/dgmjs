import * as Y from "yjs";
export type YObj = Y.Map<any>;
export type YStore = Y.Map<YObj>;

/**
 * Get the child yObjs with the given parentId
 */
export function yGetChildren(yStore: YStore, parentId: string): YObj[] {
  const yChildren: YObj[] = [];
  yStore.forEach((yObj, key) => {
    if (yObj.get("parent") === parentId) {
      yChildren.push(yObj);
    }
  });
  return yChildren;
}

/**
 * Sort an array of YObj by the parent:order field
 */
export function ySortByOrder(yObjs: YObj[]): YObj[] {
  return yObjs.sort((a, b) => a.get("parent:order") - b.get("parent:order"));
}

/**
 * Compute the order number in the array of yObjs at the given position
 */
export function yGetOrderByPosition(
  ySortedObjs: YObj[],
  position: number
): number {
  const orders = ySortedObjs.map((yObj) => yObj.get("parent:order"));
  if (orders.length === 0) return 0;
  let order = 0;
  if (position === 0) {
    order = orders[0] - 1;
  } else if (position >= orders.length) {
    order = orders[orders.length - 1] + 1;
  } else {
    order = (orders[position - 1] + orders[position]) / 2;
  }
  return order;
}

/**
 * Compute the order number for the obj at the given position
 */
export function yComputeParentOrder(
  yStore: YStore,
  objId: string,
  parentId: string,
  position: number
): number {
  const yChildren = yGetChildren(yStore, parentId).filter(
    (yObj) => yObj.get("id") !== objId
  );
  const ySortedChildren = ySortByOrder(yChildren);
  const order = yGetOrderByPosition(ySortedChildren, position);
  return order;
}
