---
title: Constraints
description: Shape's constraints
---

Constraint can be used to impose specific constraints on a shape. Followings are the supported constraint types for a shape:

- [`align-children`](#align-children)
- [`align-to-parent`](#align-to-parent)
- [`anchor-on-parent`](#anchor-on-parent)
- [`inherit-styles`](#inherit-styles)
- [`adjust-route`](#adjust-route)
- [`set-state-from-property`](#set-state-from-property)
- [`set-size`](#size-size)
- [`set-line`](#set-line)

## align-children

This constraint aligns children shapes.

- __orient__ : `top`, `bottom`, `left`, `right`, `center`.
- __align__ : `left`, `left-outside`, `left-border`, `center`, `right`, `right-outside`, `right-border`, `top`, `top-border`, `top-outside`, `middle`, `bottom`, `bottom-border`, `bottom-outside`, `fill`.
- __query__ : Align only the matched children shapes. For example, if the query is `#compartment`, aligns only the children shapes which has `#compartment` tag.
- __fillLast__ : Fill the last child shape.

![align-children](https://fs.dgm.sh/i/_lGjyzTaaz_R7sZ4L1VHe/lt@1x.png)

## align-to-parent

This constraint aligns the shape relative to its parent.

- __horz__ : `none`, `left`, `left-outside`, `left-border`, `right`, `right-outside`, `right-border`, `center`, `border`, `outside`, `fill`.
- __vert__ : `none`, `top`, `top-border`, `top-outside`, `bottom`, `bottom-border`, `bottom-outside`, `middle`, `border`, `outside`, `fill`.
- __horzOffset__ : Horizontal offset.
- __vertOffset__ : Vertical offset.

![align-to-parent](https://fs.dgm.sh/i/Rf8jUx1l3ZTMmOJQmTKZI/lt@1x.png)

## anchor-on-parent

This constraint makes an anchor to the it's parent. When the parent shape moves, the anchored shape also move along. This is used for the text shape which is attached to a connector.

## inherit-styles

This constraint inherits styles automatically from it's parent shape.

- __stroke__ : Inherit stroke styles.
- __fill__ : Inherit fill styles.
- __font__ : Inherit font styles.
- __textAlignment__ :  : Inherit text alignments.

## adjust-route

This constraint automatically adjust route of a connector. This is used for routing a connector.

## set-state-from-property

This constraint automatically changes a state of the shape.

- __query__ : Query to find a shape from children to change state.
- __state__ : State to change: `enable`, `visible`, `connectable`, `containable`, `editable`, `text`.
- __property__ : An extended property to be used as state value.

## size-size

This constraint automatically changes the size of the shape.

- __width__ : `ignore`, `children`, `text`, `text-min`, `parent`, `value`.
- __height__ : `ignore`, `children`, `text`, `text-min`, `parent`, `value`.
- __widthValue__ : The actual value when __width__ is `value`.
- __heightValue__ : The actual value when __height__ is `value`.

## set-line

This constraint automatically changes the form of a line shape.

- __type__ : `free`, `horzontal`, `vertical`.
