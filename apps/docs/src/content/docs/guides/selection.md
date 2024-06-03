---
title: Selection
sidebar:
  order: 4
---

You can use the `editor.selection` object to select or change the selection of shapes and handle related events.

## Get selected shapes

In order to get a set of selected shapes in the editor:

```ts
const selected = editor.selection.getShapes();
```

You can also test a shape is selected or not as below:

```ts
const selected = editor.selection.isSelected(shape);
```

## Select shapes

You can use various selection methods to select/deselect shapes or area.

```ts
// select an array of shapes
editor.selection.select(shapes);

// additional select an array of shapes
editor.selection.selectAdditional(shapes);

// select shapes overlap the given area in the current page
editor.selection.selectArea(0, 0, 100, 100);

// select all shapes in the current page
editor.selection.selectAll();
```

## Listen to the changes of selection

You can listen to the changes of selection through the both React component and editor object.

```tsx
<DGMEditor
  onSelectionChange={(shapes) => {
    console.log('selection changed', shapes);
  }}/>
```

```ts
editor.selection.onChange.addListener((shapes) => {
  console.log('selection changed', shapes);
});
```
