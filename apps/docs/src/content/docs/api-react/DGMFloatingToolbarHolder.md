---
title: DGMFloatingToolbarHolder
slug: api-react/dgm-floating-toolbar-holder
description: The holder component for a floating toolbar.
sidebar:
  order: 3
---

The holder component for a floating toolbar which is shown near selected shapes.

Here is an example how to mount floating toolbar to the editor.

```tsx
import { Editor } from "@dgmjs/core";
import { DGMEditorCore, DGMFloatingToolbarHolder } from "@dgmjs/react";

function MyFloatingToolbar() {
  return <div>my toolbar</div>;
}

function Editor() {
  const [editor, setEditor] = useState<Editor | null>(null);
  return (
    <DGMEditorCore
      onMount={(editor) => setEditor(editor)}
    >
      <DGMFloatingToolbarHolder
        editor={editor as Editor}
        toolbar={<MyFloatingToolbar/>}
      />
    </DGMEditorCore>
  }
}
```

## Properties

| Prop | Type | Default |
| ---- | ---- | ------- |
| `editor` | [`Editor`](/api-core/classes/editor/) | |
| `toolbar` | `React.ReactNode` | |
| `distance` | `number` | |
| `onMove` | (`onBelow`: `boolean`) => `void` | |
