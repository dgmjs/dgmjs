import { Box, Editor } from "@dgmjs/core";
import { useState } from "react";
import { DGMEditorCore, DGMEditorCoreProps } from "./DGMEditorCore";
import { DGMTextInplaceEditor } from "./DGMTextInplaceEditor";
import { DGMFloatingToolbarHolder } from "./DGMFloatingToolbarHolder";
import { Editor as TiptapEditor } from "@tiptap/react";
import { DGMFrameNameEditor } from "./DGMFrameNameEditor";

export interface DGMEditorProps extends DGMEditorCoreProps {
  textInplaceEditorToolbar?: React.ReactNode;
  floatingToolbar?: React.ReactNode;
  floatingToolbarDistance?: number;
  onTextInplaceEditorMount?: (tiptapEditor: TiptapEditor) => void;
  onTextInplaceEditorOpen?: (shape: Box) => void;
  onFloatingToolbarMove?: (onBelow: boolean) => void;
  onFrameNameEditorMount?: (input: any) => void;
  onFrameNameEditorOpen?: (shape: Box) => void;
}

export const DGMEditor: React.FC<DGMEditorProps> = ({
  onMount,
  textInplaceEditorToolbar,
  floatingToolbar,
  floatingToolbarDistance,
  onTextInplaceEditorMount,
  onTextInplaceEditorOpen,
  onFloatingToolbarMove,
  onFrameNameEditorMount,
  onFrameNameEditorOpen,
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
        <DGMFloatingToolbarHolder
          editor={editor as Editor}
          toolbar={floatingToolbar}
          distance={floatingToolbarDistance}
          onMove={onFloatingToolbarMove}
        />
        <DGMFrameNameEditor
          editor={editor as Editor}
          onMount={onFrameNameEditorMount}
          onOpen={onFrameNameEditorOpen}
        />
      </DGMEditorCore>
    </>
  );
};
