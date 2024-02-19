import { Editor, EditorOptions, Shape, basicSetup } from "@dgmjs/core";
import { useEffect, useRef } from "react";

interface DGMEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: EditorOptions;
  showGrid?: boolean;
  onMount?: (editor: Editor) => void;
  onSelectionChange?: (selections: Shape[]) => void;
}

export const DGMEditor: React.FC<DGMEditorProps> = ({
  options,
  showGrid = false,
  onMount,
  onSelectionChange,
  ...others
}) => {
  const editorHolderRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    const editor = new Editor(
      editorHolderRef.current!,
      basicSetup({ ...options })
    );

    // events forwarding
    editor.selections.on("select", (shapes) => {
      if (onSelectionChange) onSelectionChange(shapes);
    });

    // initialize
    editorRef.current = editor;
    editor.fit();
    editor.setActiveHandler("Select");
    editor.repaint();
    if (onMount) onMount(editor);
  }, []);

  useEffect(() => {
    editorRef.current?.setShowGrid(showGrid);
  }, [showGrid]);

  return <div ref={editorHolderRef} {...others} />;
};
