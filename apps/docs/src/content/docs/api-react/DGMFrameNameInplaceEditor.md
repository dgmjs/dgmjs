---
title: DGMFrameNameInplaceEditor
slug: api-react/dgm-frame-name-inplace-editor
description: The text inplace editor component.
sidebar:
  order: 4
---

The frame name inplace editor component which allows user to edit the frame name on the canvas.

Here is an example how to mount a frame name inplace editor to the editor.

```tsx
import { Editor, Frame } from "@dgmjs/core";
import { DGMEditorCore, DGMFrameNameInplaceEditor } from "@dgmjs/react";

function Editor() {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [editingFrame, setEditingFrame] = useState<Frame | null>(null);

  return (
    <DGMEditorCore
      onMount={(editor) => setEditor(editor)}
    >
      <DGMFrameNameInplaceEditor
        editor={editor as Editor}
        onOpen={(shape) => setEditingFrame(shape)}
      />
    </DGMEditorCore>
  }
}
```

## Properties

| Prop     | Type                                                     | Default |
| -------- | -------------------------------------------------------- | ------- |
| `editor` | [`Editor`](/api-core/classes/editor/)                    |         |
| `onOpen` | (`shape`: [`Frame`](/api-core/classes/frame/)) => `void` |         |
