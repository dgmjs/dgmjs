import {
  Editor,
  EditorOptions,
  Shape,
  Transaction,
  basicSetup,
  CanvasPointerEvent,
} from "@dgmjs/core";
import { useEffect, useRef } from "react";

export interface DGMEditorProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onScroll" | "onDragStart" | "onDrag" | "onDragEnd"
  > {
  options?: Partial<EditorOptions>;
  showGrid?: boolean;
  onMount?: (editor: Editor) => void;
  onSelectionChange?: (selections: Shape[]) => void;
  onActiveHandlerChange?: (handlerId: string) => void;
  onShapeCreate?: (shape: Shape) => void;
  onTransaction?: (tx: Transaction) => void;
  onZoom?: (scale: number) => void;
  onScroll?: (origin: number[]) => void;
  onDragStart?: (dragStartPoint: number[]) => void;
  onDrag?: (dragPoint: number[]) => void;
  onDragEnd?: (dragEndPoint: number[]) => void;
  onFileDrop?: (event: CanvasPointerEvent, dataTransfer: DataTransfer) => void;
}

export const DGMEditor: React.FC<DGMEditorProps> = ({
  options,
  showGrid = false,
  onMount,
  onSelectionChange,
  onActiveHandlerChange,
  onShapeCreate,
  onTransaction,
  onZoom,
  onScroll,
  onDragStart,
  onDrag,
  onDragEnd,
  onFileDrop,
  ...others
}) => {
  const editorHolderRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new Editor(
        editorHolderRef.current!,
        basicSetup({ ...options })
      );

      // events forwarding
      editor.selection.on("change", (shapes: Shape[]) => {
        if (onSelectionChange) onSelectionChange(shapes);
      });
      editor.on("activeHandlerChange", (handlerId: string) => {
        if (onActiveHandlerChange) onActiveHandlerChange(handlerId);
      });
      editor.factory.on("create", (shape: Shape) => {
        if (onShapeCreate) onShapeCreate(shape);
      });
      editor.transform.on("transaction", (tx: Transaction) => {
        if (onTransaction) onTransaction(tx);
      });
      editor.on("zoom", (scale: number) => {
        if (onZoom) onZoom(scale);
      });
      editor.on("scroll", (origin: number[]) => {
        if (onScroll) onScroll(origin);
      });
      editor.on("dragStart", (dragStartPoint: number[]) => {
        if (onDragStart) onDragStart(dragStartPoint);
      });
      editor.on("drag", (dragPoint: number[]) => {
        if (onDrag) onDrag(dragPoint);
      });
      editor.on("dragEnd", (dragEndPoint: number[]) => {
        if (onDragEnd) onDragEnd(dragEndPoint);
      });
      editor.on(
        "fileDrop",
        (event: CanvasPointerEvent, dataTransfer: DataTransfer) => {
          if (onFileDrop) onFileDrop(event, dataTransfer);
        }
      );

      // initialize
      editorRef.current = editor;
      editor.fit();
      editor.activateDefaultHandler();
      editor.repaint();
      if (onMount) onMount(editor);
    }

    return () => {
      // TODO: dispose (remove listeners)
    };
  }, []);

  useEffect(() => {
    editorRef.current?.setShowGrid(showGrid);
  }, [showGrid]);

  return <div ref={editorHolderRef} {...others} />;
};
