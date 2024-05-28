---
title: DGMEditorCore
slug: api-react/dgm-editor-core
description: The core editor component.
sidebar:
  order: 2
---

The core editor component that is a wrapper component for [Editor](/api-core/classes/editor/).

## Properties

| Prop | Type | Default |
| ---- | ---- | ------- |
| `options` | `Partial<EditorOptions>` |  |
| `plugins` |  `Plugin[]` | |
| `enabled` | `boolean` | `true` |
| `darkMode` |  `boolean` | `false` |
| `showGrid` |  `boolean` | `false` |
| `snapToGrid` |  `boolean` | `false` |
| `onMount` | `(editor: Editor) => void` | |
| `onSelectionChange` | `(selections: Shape[]) => void` | |
| `onCurrentPageChange` | `(page: Page) => void` | |
| `onActiveHandlerChange` | `(handlerId: string) => void` | |
| `onActiveHandlerLockChange` | `(lock: boolean) => void` | |
| `onShapeCreate` | `(shape: Shape) => void` | |
| `onShapeInitialize` | `(shape: Shape) => void` | |
| `onTransaction` | `(tx: Transaction) => void` | |
| `onAction` | `(action: Action) => void` | |
| `onUndo` | `(action: Action) => void` | |
| `onRedo` | `(action: Action) => void` | |
| `onDblClick` | `(event: DblClickEvent) => void` | |
| `onZoom` | `(scale: number) => void` | |
| `onScroll` | `(origin: number[]) => void` | |
| `onDragStart` | `(dragEvent: DragEvent) => void` | |
| `onDrag` | `(dragEvent: DragEvent) => void` | |
| `onDragEnd` | `(dragEvent: DragEvent) => void` | |
| `onFileDrop` | `(fileDropEvent: FileDropEvent) => void` | |
