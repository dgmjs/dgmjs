---
title: Introduction
sidebar:
  order: 0
---

## Shapes

Basically, In DGM.js, you can create a diagram by combining the primitive shapes. Supported primitive shapes are:

- Rectangle
- Ellipse
- Text
- Image
- Line
- Connector
- Freehand
- Highlighter
- Group

![Primitive shapes](https://fs.dgm.sh/i/odAJcVEPXYrAR6htSAw5n/lwuge9q2@2x.png)

All primitive shapes are [smart shapes](/guides/smart-shapes).

## Editor

The DGM.js editor is composed of the following parts.

- store - manages shape objects for access and persistency.
- handlers - handle the user inputs (mouse, touch, keyboard).
- transform - mutates shape objects in the store.
- factory - creates shape objects.
- selection - manages user selection of shapes.
- actions - are the actions supported by editor.
