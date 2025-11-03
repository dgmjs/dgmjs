---
title: DGMEditor
slug: api-react/dgm-editor
description: The editor component with text inplace editor and floating toolbar holder.
sidebar:
  order: 1
---

The editor component with [`DGMTextInplaceEditor`](/api-react/dgm-text-inplace-editor) and [`DGMFloatingToolbarHolder`](/api-react/dgm-floating-toolbar-holder).

## Properties

Provides all properties of `DGMEditorCore` with following additional properties:

| Prop                           | Type                                                                                    | Default |
| ------------------------------ | --------------------------------------------------------------------------------------- | ------- |
| `textInplaceEditorToolbar`     | `React.ReactNode`                                                                       |         |
| `floatingToolbar`              | `React.ReactNode`                                                                       |         |
| `floatingToolbarDistance`      | `number`                                                                                |         |
| `onTextInplaceEditorMount`     | (`tiptapEditor`: [`TiptapEditor`](https://tiptap.dev/docs/editor/api/editor)) => `void` |         |
| `onTextInplaceEditorOpen`      | (`shape`: `Box`) => `void`                                                              |         |
| `onFloatingToolbarMove`        | (`onBelow`: `boolean`) => `void`                                                        |         |
| `onFrameNameInplaceEditorOpen` | (`shape`: `Frame`) => `void`                                                            |         |
