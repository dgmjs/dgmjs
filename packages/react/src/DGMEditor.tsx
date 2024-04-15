import { Box, Editor } from "@dgmjs/core";
import { useState } from "react";
import { DGMEditorCore, DGMEditorCoreProps } from "./DGMEditorCore";
import { DGMTextInplaceEditor } from "./DGMTextInplaceEditor";
import { DGMShapeToolbarHolder } from "./DGMShapeToolbarHolder";
import { Editor as TiptapEditor } from "@tiptap/react";

export interface DGMEditorProps extends DGMEditorCoreProps {
  textInplaceEditorToolbar?: React.ReactNode;
  shapeToolbar?: React.ReactNode;
  shapeToolbarDistance?: number;
  onTextInplaceEditorMount?: (tiptapEditor: TiptapEditor) => void;
  onTextInplaceEditorOpen?: (shape: Box) => void;
  onShapeToolbarMove?: (onBelow: boolean) => void;
}

export const DGMEditor: React.FC<DGMEditorProps> = ({
  onMount,
  textInplaceEditorToolbar,
  shapeToolbar,
  shapeToolbarDistance,
  onTextInplaceEditorMount,
  onTextInplaceEditorOpen,
  onShapeToolbarMove,
  ...props
}) => {
  const [editor, setEditor] = useState<Editor | null>(null);

  return (
    <>
      <DGMEditorCore
        onMount={(editor) => {
          setEditor(editor);
          if (onMount) onMount(editor);
        }}
        {...props}
      >
        <DGMTextInplaceEditor
          editor={editor as Editor}
          toolbar={textInplaceEditorToolbar}
          onMount={onTextInplaceEditorMount}
          onOpen={onTextInplaceEditorOpen}
        />
        <DGMShapeToolbarHolder
          editor={editor as Editor}
          toolbar={shapeToolbar}
          distance={shapeToolbarDistance}
          onMove={onShapeToolbarMove}
        />
      </DGMEditorCore>
    </>
  );
};
