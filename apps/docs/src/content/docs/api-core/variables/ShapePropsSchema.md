---
editUrl: false
next: false
prev: false
title: "ShapePropsSchema"
---

> `const` **ShapePropsSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### anchorAngle

> **anchorAngle**: `ZodOptional`\<`ZodNumber`\>

### anchorLength

> **anchorLength**: `ZodOptional`\<`ZodNumber`\>

### anchorPosition

> **anchorPosition**: `ZodOptional`\<`ZodNumber`\>

### anchored

> **anchored**: `ZodOptional`\<`ZodBoolean`\>

### borderPosition

> **borderPosition**: `ZodOptional`\<`ZodNativeEnum`\<`object`\>\>

### borders

> **borders**: `ZodOptional`\<`ZodArray`\<`ZodBoolean`, `"many"`\>\>

### connectable

> **connectable**: `ZodOptional`\<`ZodBoolean`\>

### constraints

> **constraints**: `ZodOptional`\<`ZodArray`\<`ZodAny`, `"many"`\>\>

### containable

> **containable**: `ZodOptional`\<`ZodBoolean`\>

### containableFilter

> **containableFilter**: `ZodOptional`\<`ZodString`\>

### corners

> **corners**: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>

### data

> **data**: `ZodOptional`\<`ZodArray`\<`ZodAny`, `"many"`\>\>

### description

> **description**: `ZodOptional`\<`ZodString`\>

### enable

> **enable**: `ZodOptional`\<`ZodBoolean`\>

### fillColor

> **fillColor**: `ZodOptional`\<`ZodString`\>

### fillStyle

> **fillStyle**: `ZodOptional`\<`ZodNativeEnum`\<`object`\>\>

### fontColor

> **fontColor**: `ZodOptional`\<`ZodString`\>

### fontFamily

> **fontFamily**: `ZodOptional`\<`ZodString`\>

### fontSize

> **fontSize**: `ZodOptional`\<`ZodNumber`\>

### fontStyle

> **fontStyle**: `ZodOptional`\<`ZodString`\>

### fontWeight

> **fontWeight**: `ZodOptional`\<`ZodNumber`\>

### head

> **head**: `ZodOptional`\<`ZodAny`\>

### headAnchor

> **headAnchor**: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>

### headEndType

> **headEndType**: `ZodOptional`\<`ZodNativeEnum`\<`object`\>\>

### headMargin

> **headMargin**: `ZodOptional`\<`ZodNumber`\>

### headTaper

> **headTaper**: `ZodOptional`\<`ZodNumber`\>

### height

> **height**: `ZodOptional`\<`ZodNumber`\>

### horzAlign

> **horzAlign**: `ZodOptional`\<`ZodNativeEnum`\<`object`\>\>

### id

> **id**: `ZodOptional`\<`ZodString`\>

### imageData

> **imageData**: `ZodOptional`\<`ZodString`\>

### imageHeight

> **imageHeight**: `ZodOptional`\<`ZodNumber`\>

### imageWidth

> **imageWidth**: `ZodOptional`\<`ZodNumber`\>

### left

> **left**: `ZodOptional`\<`ZodNumber`\>

### lineHeight

> **lineHeight**: `ZodOptional`\<`ZodNumber`\>

### lineType

> **lineType**: `ZodOptional`\<`ZodNativeEnum`\<`object`\>\>

### link

> **link**: `ZodOptional`\<`ZodAny`\>

### movable

> **movable**: `ZodOptional`\<`ZodNativeEnum`\<`object`\>\>

### movableParentFilter

> **movableParentFilter**: `ZodOptional`\<`ZodString`\>

### name

> **name**: `ZodOptional`\<`ZodString`\>

### opacity

> **opacity**: `ZodOptional`\<`ZodNumber`\>

### padding

> **padding**: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>

### pageOrigin

> **pageOrigin**: `ZodOptional`\<`ZodNullable`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>\>

### pageScale

> **pageScale**: `ZodOptional`\<`ZodNumber`\>

### paragraphSpacing

> **paragraphSpacing**: `ZodOptional`\<`ZodNumber`\>

### path

> **path**: `ZodOptional`\<`ZodArray`\<`ZodArray`\<`ZodNumber`, `"many"`\>, `"many"`\>\>

### pathEditable

> **pathEditable**: `ZodOptional`\<`ZodBoolean`\>

### properties

> **properties**: `ZodOptional`\<`ZodArray`\<`ZodAny`, `"many"`\>\>

### proto

> **proto**: `ZodOptional`\<`ZodBoolean`\>

### reference

> **reference**: `ZodOptional`\<`ZodAny`\>

### rotatable

> **rotatable**: `ZodOptional`\<`ZodBoolean`\>

### rotate

> **rotate**: `ZodOptional`\<`ZodNumber`\>

### roughness

> **roughness**: `ZodOptional`\<`ZodNumber`\>

### scripts

> **scripts**: `ZodOptional`\<`ZodArray`\<`ZodAny`, `"many"`\>\>

### shadow

> **shadow**: `ZodOptional`\<`ZodBoolean`\>

### shadowColor

> **shadowColor**: `ZodOptional`\<`ZodString`\>

### shadowOffset

> **shadowOffset**: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>

### sizable

> **sizable**: `ZodOptional`\<`ZodNativeEnum`\<`object`\>\>

### size

> **size**: `ZodOptional`\<`ZodNullable`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>\>

### src

> **src**: `ZodOptional`\<`ZodString`\>

### strokeColor

> **strokeColor**: `ZodOptional`\<`ZodString`\>

### strokePattern

> **strokePattern**: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>

### strokeWidth

> **strokeWidth**: `ZodOptional`\<`ZodNumber`\>

### subject

> **subject**: `ZodOptional`\<`ZodAny`\>

### tags

> **tags**: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>

### tail

> **tail**: `ZodOptional`\<`ZodAny`\>

### tailAnchor

> **tailAnchor**: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>

### tailEndType

> **tailEndType**: `ZodOptional`\<`ZodNativeEnum`\<`object`\>\>

### tailMargin

> **tailMargin**: `ZodOptional`\<`ZodNumber`\>

### tailTaper

> **tailTaper**: `ZodOptional`\<`ZodNumber`\>

### text

> **text**: `ZodOptional`\<`ZodAny`\>

### textEditable

> **textEditable**: `ZodOptional`\<`ZodBoolean`\>

### thinning

> **thinning**: `ZodOptional`\<`ZodNumber`\>

### top

> **top**: `ZodOptional`\<`ZodNumber`\>

### type

> **type**: `ZodOptional`\<`ZodString`\>

### version

> **version**: `ZodOptional`\<`ZodNumber`\>

### vertAlign

> **vertAlign**: `ZodOptional`\<`ZodNativeEnum`\<`object`\>\>

### viewHeight

> **viewHeight**: `ZodOptional`\<`ZodNumber`\>

### viewWidth

> **viewWidth**: `ZodOptional`\<`ZodNumber`\>

### visible

> **visible**: `ZodOptional`\<`ZodBoolean`\>

### width

> **width**: `ZodOptional`\<`ZodNumber`\>

### wordWrap

> **wordWrap**: `ZodOptional`\<`ZodBoolean`\>

## Source

[packages/core/src/shapes.ts:3713](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/shapes.ts#L3713)
