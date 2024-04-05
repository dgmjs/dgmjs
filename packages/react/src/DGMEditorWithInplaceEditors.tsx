import { Editor } from "@dgmjs/core";
import { useState } from "react";
import { DGMEditor, DGMEditorProps } from "./DGMEditor";
import { DGMTextInplaceEditor } from "./DGMTextInplaceEditor";
import { DGMShapeToolbarHolder } from "./DGMShapeToolbarHolder";

interface DGMEditorWithAllProps extends DGMEditorProps {
  textInplaceEditorToolbar?: React.ReactNode;
  shapeToolbar?: React.ReactNode;
}

export const DGMEditorWithAll: React.FC<DGMEditorWithAllProps> = ({
  onMount,
  textInplaceEditorToolbar,
  shapeToolbar,
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
        <DGMTextInplaceEditor
          editor={editor as Editor}
          toolbar={textInplaceEditorToolbar}
        />
        <DGMShapeToolbarHolder
          editor={editor as Editor}
          toolbar={shapeToolbar}
        />
      </DGMEditor>
    </>
  );
};
