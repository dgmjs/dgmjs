---
title: Shape Properties
description: Shape's basic and advanced properties
---

## Basic properties

Each shape has following basic properties:

- Fill Color ― _Color variables_ or _RGB colors_.
- Fill Pattern ― _Solid_, _Hachure_, or _Cross Hatch_.
- Stroke Color ― _Color variables_ or _RGB colors_.
- Stroke Width ― Width of stroke.
- Stroke Pattern ― A number comma list. (e.g. `0` is solid, `4,4` is dotted, `8, 8` is dashed)
- Roughness ― How rough the stroke is.
- Rotate ― Rotation angle of shape.
- Opacity ― Opacity of the shape.
- Width/Height ― The size of box shape (Rectangle, Ellipse, Text).
- Padding ― Padding spaces for left, top, right and bottom.
- Corner ― Rounded corners for left-top, right-top, right-bottom and left-bottom.
- Font Color ― The color of font.
- Font Family ― _Sans_, _Serif_, _Handwriting_, or _Mono_.
- Font Size ― The size of font.
- Text Alignment ― _Left_, _Center_, _Right_ for horizontal alignment, _Top_, _Middle_, _Bottom_ for vertical alignment.
- Line Height ― Height of a text line.
- Paragraph Spacing ― Spacing between paragraphs.
- Word Wrap ― Word wap text.
- Line Type ― _Straight_ or _Curve_.
- Route Type ― _Oblique_ or _Rectilinear_.
- Line End Type ― See below image:

![Line End Types](https://fs.dgm.sh/i/vPyaftcagEpPNqhQ5pxYZ/lf@2x.png)

## Advanced properties

A shape also could have additionally advanced properties:

- Prototype ― Indicate the shape is prototype or not. Note that to be a component of a library, shape should be a prototype.
- Name ― Name of the shape.
- Description ― Description of the shape.
- Extended Properties ― User can define a set of user-defined properties. Each extended property can be a type of `number`, `boolean`, `string`, `text` or `enum`.
- Constraints ― Shape could have constraints. See [Constaints](/guides/constraints).
- Scripts ― User can redefine the behaviors of shapes by script. See [Scripts](/guides/scripts).
- Tags ― User add user-defined tags to a shape.
- Control ― User can adjust control features.
  - Enable ― Shape can be manipulated by pointing device.
  - Visible ― Show or hide.
  - Connectable ― Connectable by connector shapes.
  - Containable ― Shape can contain other shapes inside.
  - Containable Filter ― Define a filter expression to allow/disallow containable shapes.
  - Rotatable ― Shape can be rotated.
  - Anchored ― Shape is anchored to it's parent shape.
  - Text Editable ― Text editable.
  - Path Editable ― Each points editable.
  - Sizable ― Type of sizable behavior. _NONE_, _HORZ_, _VERT_, _FREE_, _RATIO_.
  - Movable ― Type of moving behavior. _NONE_, _HORZ_, _VERT_, _FREE_, _PARENT_ (move with parent).
