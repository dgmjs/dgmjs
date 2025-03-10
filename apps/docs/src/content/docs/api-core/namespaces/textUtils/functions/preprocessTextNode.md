---
editUrl: false
next: false
prev: false
title: "preprocessTextNode"
---

> **preprocessTextNode**(`canvas`, `node`, `shape`, `wordWrap`, `width`, `listIndent`): `any`

Preprocess text nodes. It mainly handles wordWrap and hardBreak by
adding "line" type nodes with additional size info.

options:
  wordWrap: boolean
  width: number
  listIndent: number

Original document node structure:
  doc = block+
  block = paragraph | bulletList | orderedList
  paragraph = inline+
  bulletList = listItem*
  orderedList = listItem*
  listItem = block+
  inline = text | hardBreak
  text = <TERMINAL>
  hardBreak = <TERMINAL>

Preprocessed document node structure:
  doc = block+
  block = paragraph | bulletList | orderedList
  paragraph = line*
  orderedList = listItem*
  bulletList = listItem*
  listItem = block+
  line = inline+
  inline = text
  text = <TERMINAL>

## Parameters

• **canvas**: [`Canvas`](/api-core/classes/canvas/)

• **node**: `any`

• **shape**: [`Box`](/api-core/classes/box/)

• **wordWrap**: `boolean`

• **width**: `number`

• **listIndent**: `number`

## Returns

`any`

preprocessed text node

## Source

[utils/text-utils.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/utils/text-utils.ts#L190)
