import { Editor, Shape, basicSetup } from "@dgmjs/core";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

interface DGMEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  showGrid?: boolean;
  onSelectionChange?: (selections: Shape[]) => void;
}

export interface DGMEditorHandle {
  fromJSON: (json: any) => void;
  toJSON: () => any;
  focus: () => void;
  repaint: () => void;
}

export const DGMEditor = forwardRef(
  ({ showGrid = false, onSelectionChange, ...others }: DGMEditorProps, ref) => {
    const editorHolderRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<Editor | null>(null);

    useImperativeHandle(ref, () => ({
      fromJSON: (json: any) => {},
      toJSON: () => {},
      focus: () => {
        editorRef.current?.focus();
      },
      repaint: () => {
        editorRef.current?.repaint();
      },
    }));

    useEffect(() => {
      const editor = new Editor(editorHolderRef.current!, basicSetup());

      // events forwarding
      editor.state.selections.on("select", (shapes) => {
        if (onSelectionChange) onSelectionChange(shapes);
      });

      // initialize
      editorRef.current = editor;
      editor.fit();
      editor.setActiveHandler("Rectangle");
    }, []);

    useEffect(() => {
      editorRef.current?.setShowGrid(showGrid);
    }, [showGrid]);

    return <div ref={editorHolderRef} {...others} />;
  }
);
