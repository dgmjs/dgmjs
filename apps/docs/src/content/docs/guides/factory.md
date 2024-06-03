---
title: Factory
sidebar:
  order: 5
---

When you need to create shapes programmatically, you can use the [Factory](/api-core/classes/shapefactory/) object.

```ts
// create a rectangle
const rectangle = editor.factory.createRectangle([[0, 0], [100, 100]]);
rectangle.fillColor = "#ff0000";
rectangle.strokeColor = "#00ff00";
rectangle.strokeWidth = 3;
rectangle.roughness = 2;

// insert into current page
editor.actions.insert(rectangle);
```