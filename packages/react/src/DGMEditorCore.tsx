import {
  Editor,
  EditorOptions,
  Shape,
  Transaction,
  basicSetup,
  Page,
  DragEvent,
  FileDropEvent,
  DblClickEvent,
  Plugin,
} from "@dgmjs/core";
import { useEffect, useRef } from "react";

export interface DGMEditorCoreProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onScroll" | "onDragStart" | "onDrag" | "onDragEnd"
  > {
  options?: Partial<EditorOptions>;
  plugins?: Plugin[];
  showGrid?: boolean;
  onMount?: (editor: Editor) => void;
  onSelectionChange?: (selections: Shape[]) => void;
  onCurrentPageChange?: (page: Page) => void;
  onActiveHandlerChange?: (handlerId: string) => void;
  onShapeCreate?: (shape: Shape) => void;
  onShapeInitialize?: (shape: Shape) => void;
  onTransactionApply?: (tx: Transaction) => void;
  onTransactionUnapply?: (tx: Transaction) => void;
  onDblClick?: (event: DblClickEvent) => void;
  onZoom?: (scale: number) => void;
  onScroll?: (origin: number[]) => void;
  onDragStart?: (dragEvent: DragEvent) => void;
  onDrag?: (dragEvent: DragEvent) => void;
  onDragEnd?: (dragEvent: DragEvent) => void;
  onFileDrop?: (fileDropEvent: FileDropEvent) => void;
}

export const DGMEditorCore: React.FC<DGMEditorCoreProps> = ({
  options,
  plugins,
  showGrid = false,
  onMount,
  onSelectionChange,
  onCurrentPageChange,
  onActiveHandlerChange,
  onShapeCreate,
  onShapeInitialize,
  onTransactionApply,
  onTransactionUnapply,
  onDblClick,
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
        basicSetup({ ...options }),
        plugins
      );

      // events forwarding
      editor.selection.onChange.addListener((shapes: Shape[]) => {
        if (onSelectionChange) onSelectionChange(shapes);
      });
      editor.onCurrentPageChange.addListener((page) => {
        if (onCurrentPageChange) onCurrentPageChange(page);
      });
      editor.onActiveHandlerChange.addListener((handlerId) => {
        if (onActiveHandlerChange) onActiveHandlerChange(handlerId);
      });
      editor.factory.onCreate.addListener((shape: Shape) => {
        if (onShapeCreate) onShapeCreate(shape);
      });
      editor.factory.onShapeInitialize.addListener((shape: Shape) => {
        if (onShapeInitialize) onShapeInitialize(shape);
      });
      editor.transform.onTransactionApply.addListener((tx: Transaction) => {
        if (onTransactionApply) onTransactionApply(tx);
      });
      editor.transform.onTransactionUnapply.addListener((tx: Transaction) => {
        if (onTransactionUnapply) onTransactionUnapply(tx);
      });
      editor.onDblClick.addListener((event: DblClickEvent) => {
        if (onDblClick) onDblClick(event);
      });
      editor.onZoom.addListener((scale: number) => {
        if (onZoom) onZoom(scale);
      });
      editor.onScroll.addListener((origin: number[]) => {
        if (onScroll) onScroll(origin);
      });
      editor.onDragStart.addListener((dragEvent) => {
        if (onDragStart) onDragStart(dragEvent);
      });
      editor.onDrag.addListener((dragEvent) => {
        if (onDrag) onDrag(dragEvent);
      });
      editor.onDragEnd.addListener((dragEvent) => {
        if (onDragEnd) onDragEnd(dragEvent);
      });
      editor.onFileDrop.addListener((fileDropEvent) => {
        if (onFileDrop) onFileDrop(fileDropEvent);
      });

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
