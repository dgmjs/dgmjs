import { Editor as CoreEditor } from "@dgmjs/core";
import { useState } from "react";
import { Editor, EditorProps } from "./Editor";
import { PlainTextInplaceEditor } from "./PlainTextInplaceEditor";
import { RichTextInplaceEditor } from "./RichTextInplaceEditor";

interface EditorWithInplaceEditorsProps extends EditorProps {
  richTextInplaceEditorToolbar?: React.ReactNode;
}

export const EditorWithInplaceEditors: React.FC<
  EditorWithInplaceEditorsProps
> = ({ onMount, richTextInplaceEditorToolbar, ...props }) => {
  const [editor, setEditor] = useState<CoreEditor | null>(null);

  return (
    <>
      <Editor
        onMount={(editor) => {
          setEditor(editor);
          if (onMount) onMount(editor);
        }}
        {...props}
      >
        <PlainTextInplaceEditor editor={editor as CoreEditor} />
        <RichTextInplaceEditor
          editor={editor as CoreEditor}
          toolbar={richTextInplaceEditorToolbar}
        />
      </Editor>
    </>
  );
};
