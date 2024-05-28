---
title: Introduction
sidebar:
  order: 2
---

DGM.js consists of an editor component for editing shapes on the canvas and related utility components. By using DGM.js, you can incorporate an editor into your web application that allows for drawing anything from simple sketches to complex notation diagrams with _smart shapes_.

## Smart shape

What is smart shape? In DGM.js, we call _smart shape_ that can be _scripted_, have _extended properties_, and can have _constraints_.

- **scripts** allows to define how to draw or outline of the shape.
- **constraints** allows to define the behaviors of the shape. (e.g. aligning, sizing, styling, ...)
- **extended properties** allows to define additional metadata of the shapes.

By combining the above three things, you can create complex and special shapes. For example, it is possible to define shape elements for UML Class Diagram, Sequence Diagram, UI Wireframe or whatever.

## Editor

The DGM.js editor component is composed of the following parts.

- handlers
- store
- transform
- selection
- factory
- actions
