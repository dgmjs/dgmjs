---
title: Smart shape
sidebar:
  order: 1
---

What is smart shape? In DGM.js, we call _smart shape_ that can be _scripted_, have _extended properties_, and can have _constraints_. All primitive shapes are smart shapes.

- [**extended properties**](#extended-properties) allows to define additional metadata of the shapes.
- [**constraints**](#constraints) allows to define the behaviors of the shape. (e.g. aligning, sizing, styling, ...)
- [**scripts**](#scripts) allows to define how to draw or outline of the shape.

By combining the above three things, you can create complex and special shapes. For example, it is possible to define shape elements for UML Class Diagram, Sequence Diagram, UI Wireframe or whatever.

## Extended Properties

You can define additional metadata of the shapes by creating extended properties. Each extended property should have it's _name_ and _type_. Here are the types of extended properties you can create:

- string
- number
- boolean
- enum
- text (multi-lines)

The extended properties can be used in constraints and scripts.

## Constraints

Constraint can be used to impose specific constraints on a shape. Followings are the supported constraint types for a shape:

- [align-children](#align-children)
- [align-to-parent](#align-to-parent)
- [anchor-on-parent](#anchor-on-parent)
- [inherit-styles](#inherit-styles)
- [adjust-route](#adjust-route)
- [set-state-from-property](#set-state-from-property)
- [set-size](#size-size)
- [set-line](#set-line)

### align-children

This constraint aligns children shapes.

- **orient** : `top`, `bottom`, `left`, `right`, `center`.
- **align** : `left`, `left-outside`, `left-border`, `center`, `right`, `right-outside`, `right-border`, `top`, `top-border`, `top-outside`, `middle`, `bottom`, `bottom-border`, `bottom-outside`, `fill`.
- **query** : Align only the matched children shapes. For example, if the query is `#compartment`, aligns only the children shapes which has `#compartment` tag.
- **fillLast** : Fill the last child shape.

![align-children](https://fs.dgm.sh/i/_lGjyzTaaz_R7sZ4L1VHe/lt@1x.png)

### align-to-parent

This constraint aligns the shape relative to its parent.

- **horz** : `none`, `left`, `left-outside`, `left-border`, `right`, `right-outside`, `right-border`, `center`, `border`, `outside`, `fill`.
- **vert** : `none`, `top`, `top-border`, `top-outside`, `bottom`, `bottom-border`, `bottom-outside`, `middle`, `border`, `outside`, `fill`.
- **horzOffset** : Horizontal offset.
- **vertOffset** : Vertical offset.

![align-to-parent](https://fs.dgm.sh/i/Rf8jUx1l3ZTMmOJQmTKZI/lt@1x.png)

### anchor-on-parent

This constraint makes an anchor to the it's parent. When the parent shape moves, the anchored shape also move along. This is used for the text shape which is attached to a connector.

:::note
The anchored shape's `anchored` property should be `true`.
:::

### inherit-styles

This constraint inherits styles automatically from it's parent shape.

- **stroke** : Inherit stroke styles.
- **fill** : Inherit fill styles.
- **font** : Inherit font styles.
- **textAlignment** :  : Inherit text alignments.

### adjust-route

This constraint automatically adjust route of a connector. This is used for routing a connector.

### set-state-from-property

This constraint automatically changes a state of the shape.

- **query** : Query to find a shape from children to change state.
- **state** : State to change: `enable`, `visible`, `connectable`, `containable`, `editable`, `text`.
- **property** : An extended property to be used as state value.

### size-size

This constraint automatically changes the size of the shape.

- **width** : `ignore`, `children`, `text`, `text-min`, `parent`, `value`.
- **height** : `ignore`, `children`, `text`, `text-min`, `parent`, `value`.
- **widthValue** : The actual value when **width** is `value`.
- **heightValue** : The actual value when **height** is `value`.

### set-line

This constraint automatically changes the form of a line shape.

- **type** : `free`, `horzontal`, `vertical`.

## Scripts

User can redefine of shape's default behaviors how to rendering and outlining. The followings are supported script types of a shape:

- render
- outline

For detailed information about the script language, please refer to [Script Language](/guides/script-language/).

### render

The script bound to `render` should code how to draw the shape. The below code is to draw a triagle inside a box.

```clojure title="render (triangle)"
(do
  (def! l (. shape :left))
  (def! r (. shape :right))
  (def! t (. shape :top))
  (def! b (. shape :bottom))
  (def! xc (/ (+ l r) 2))
  (def! seed (. shape :getSeed))
  (. canvas :polygon [[xc t] [r b] [l b]] seed)
  (. shape :renderText canvas))
```

You can use the shape's default rendering behavor. The below code is draw the cross mark over the rectangle's default rendering.

```clojure title="render (cross box)"
(do
  (def! l (. shape :left))
  (def! r (. shape :right))
  (def! t (. shape :top))
  (def! b (. shape :bottom))
  (def! seed (. shape :getSeed))
  (. shape :renderDefault canvas)
  (. canvas :line l t r b seed)
  (. canvas :line r t l b seed))
```

### outline

The script bound to `outline` should express a vector of points that constitutes the outline of the shape. The below is to define the outline of a triangle.

```clojure title="outline (triangle)"
(do
  (def! l (. shape :left))
  (def! r (. shape :right))
  (def! t (. shape :top))
  (def! b (. shape :bottom))
  (def! xc (/ (+ l r) 2))
  [[xc t] [r b] [l b] [xc t]])
```

### viewport

The script bound to `outline` should express the area of the shape's viewport. The viewport of shape is the area where the shape is rendered. Shapes are sometimes drawn beyond the bounding box, and the viewport must contain all of this area. Otherwise, any area beyond the viewport will be cropped when the image is exported.

```clojure title="viewport (expanded as 10)"
(do
  (def! l (. shape :left))
  (def! r (. shape :right))
  (def! t (. shape :top))
  (def! b (. shape :bottom))
  (def! g 10)
  [[(- l g) (- t g)] [(+ r g) (+ b g)]])
```
