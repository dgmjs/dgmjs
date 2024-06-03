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
| `options` | `Partial`<[`EditorOptions`](/api-core/interfaces/editoroptions/)> |  |
| `plugins` |  [`Plugin`](/api-core/classes/plugin/)[] | |
| `enabled` | `boolean` | `true` |
| `darkMode` |  `boolean` | `false` |
| `showGrid` |  `boolean` | `false` |
| `snapToGrid` |  `boolean` | `false` |
| `onMount` | (`editor`: [`Editor`](/api-core/classes/editor/)) => `void` | |
| `onSelectionChange` | (`selections`: [`Shape`](/api-core/classes/shape/)[]) => `void` | |
| `onCurrentPageChange` | (`page`: [`Page`](/api-core/classes/page/)) => `void` | |
| `onActiveHandlerChange` | (`handlerId`: `string`) => `void` | |
| `onActiveHandlerLockChange` | (`lock`: `boolean`) => `void` | |
| `onShapeCreate` | (`shape`: [`Shape`](/api-core/classes/shape/)) => `void` | |
| `onShapeInitialize` | (`shape`: [`Shape`](/api-core/classes/shape/)) => `void` | |
| `onTransaction` | (`tx`: [`Transaction`](/api-core/classes/transaction/)) => `void` | |
| `onAction` | (`action`: [`Action`](/api-core/classes/action/)) => `void` | |
| `onUndo` | (`action`: [`Action`](/api-core/classes/action/)) => `void` | |
| `onRedo` | (`action`: [`Action`](/api-core/classes/action/)) => `void` | |
| `onDblClick` | (`event`: [`DblClickEvent`](/api-core/interfaces/dblclickevent/)) => `void` | |
| `onZoom` | (`scale`: `number`) => `void` | |
| `onScroll` | (`origin`: `number`[]) => `void` | |
| `onDragStart` | (`dragEvent`: [`DragEvent`](/api-core/interfaces/dragevent/)) => `void` | |
| `onDrag` | (`dragEvent`: [`DragEvent`](/api-core/interfaces/dragevent/)) => `void` | |
| `onDragEnd` | (`dragEvent`: [`DragEvent`](/api-core/interfaces/dragevent/)) => `void` | |
| `onFileDrop` | (`fileDropEvent`: [`FileDropEvent`](/api-core/interfaces/filedropevent/)) => `void` | |
