import { Editor } from "@dgmjs/core";
import { useState } from "react";
import { DGMEditor, DGMEditorProps } from "./DGMEditor";
import { DGMPlainTextInplaceEditor } from "./DGMPlainTextInplaceEditor";
import { DGMRichTextInplaceEditor } from "./DGMRichTextInplaceEditor";

interface DGMEditorWithInplaceEditorsProps extends DGMEditorProps {
  richTextInplaceEditorToolbar?: React.ReactNode;
}

export const DGMEditorWithInplaceEditors: React.FC<
  DGMEditorWithInplaceEditorsProps
> = ({ onMount, richTextInplaceEditorToolbar, ...props }) => {
  const [editor, setEditor] = useState<Editor | null>(null);

  return (
    <>
      <DGMEditor
        onMount={(editor) => {
          setEditor(editor);
          if (onMount) onMount(editor);
        }}
        {...props}
      >
        <DGMPlainTextInplaceEditor editor={editor as Editor} />
        <DGMRichTextInplaceEditor
          editor={editor as Editor}
          toolbar={richTextInplaceEditorToolbar}
        />
      </DGMEditor>
    </>
  );
};
