---
title: DGMTextInplaceEditor
slug: api-react/dgm-text-inplace-editor
description: The text inplace editor component.
sidebar:
  order: 4
---

The text inplace editor component which allows user to edit text on the canvas. It could have a custom toolbar component to change the color, style, underline, etc., of the selected text. This toolbar appears directly above or below the text when it is in edit mode.

Here is an example how to mount a text inplace editor with a toolbar to the editor.

```tsx
import { Editor, Box } from "@dgmjs/core";
import { DGMEditorCore, DGMTextInplaceEditor, TiptapEditor } from "@dgmjs/react";

interface MyTextToolbarProps {
  tiptapEditor: TiptapEditor;
  shape: Box | null;
}

function MyTextToolbar({tiptapEditor, shape}: MyTextToolbarProps) {
  return <div>my toolbar</div>;
}

function Editor() {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [tiptapEditor, setTiptapEditor] = useState<any>(null);
  const [editingText, setEditingText] = useState<Box | null>(null);

  return (
    <DGMEditorCore
      onMount={(editor) => setEditor(editor)}
    >
      <DGMTextInplaceEditor
        editor={editor as Editor}
        toolbar={
          <MyTextToolbar
            tiptapEditor={tiptapEditor}
            shape={editingText}
          />
        }
        onMount={(tiptapEditor) => setTiptapEditor(tiptapEditor)}
        onOpen={(shape) => setEditingText(shape)}
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
| `onMount` | (`tiptapEditor`: [`TiptapEditor`](https://tiptap.dev/docs/editor/api/editor)) => `void` | |
| `onOpen` | (`shape`: [`Box`](/api-core/classes/box/)) => `void` | |
