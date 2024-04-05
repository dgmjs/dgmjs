import { Editor } from "@dgmjs/core";
import { useState } from "react";
import { DGMEditor, DGMEditorProps } from "./DGMEditor";
import { DGMRichTextInplaceEditor } from "./DGMRichTextInplaceEditor";
import { DGMShapeToolbarHolder } from "./DGMShapeToolbarHolder";

interface DGMEditorWithInplaceEditorsProps extends DGMEditorProps {
  richTextInplaceEditorToolbar?: React.ReactNode;
  shapeToolbar?: React.ReactNode;
}

export const DGMEditorWithInplaceEditors: React.FC<
  DGMEditorWithInplaceEditorsProps
> = ({ onMount, richTextInplaceEditorToolbar, shapeToolbar, ...props }) => {
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
        <DGMRichTextInplaceEditor
          editor={editor as Editor}
          toolbar={richTextInplaceEditorToolbar}
        />
        <DGMShapeToolbarHolder
          editor={editor as Editor}
          toolbar={shapeToolbar}
        />
      </DGMEditor>
    </>
  );
};
