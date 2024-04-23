// sync from ydoc to store
//
// onCreateYObj(store, yObj);
//   - create
//   - setParent
//   - setParentOrder
//
// onDeleteYObj(store, yObj);
//   - setParent(null)
//   - delete
//
// onUpdateYObj(store, yObj, field, value);
//   - parent --> setParent
//   - parent:order --> setParentOrder
//   - refs (head or tail) --> setRef
//   - others --> setField
//
//  setParent (parent-children relationship)
//   - remove from previous parent
//   - add to new parent
//
//  setParentOrder (order in children array)
//  setRef
//  setField
