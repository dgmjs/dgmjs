import { Editor } from "@dgmjs/core";
import { useState } from "react";
import { DGMEditor, DGMEditorProps } from "./DGMEditor";
import { DGMPlainTextInplaceEditor } from "./DGMPlainTextInplaceEditor";
import { DGMRichTextInplaceEditor } from "./DGMRichTextInplaceEditor";

export const DGMEditorWithInplaceEditors: React.FC<DGMEditorProps> = ({
  onMount,
  ...props
}) => {
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
        <DGMRichTextInplaceEditor editor={editor as Editor} />
      </DGMEditor>
    </>
  );
};
