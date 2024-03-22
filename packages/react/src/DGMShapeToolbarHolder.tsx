import { Editor, Shape, geometry } from "@dgmjs/core";
import { useEffect, useRef, useState } from "react";
import { moveToAboveOrBelow } from "./utils";

interface DGMShapeToolbarHolderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  editor?: Editor;
  toolbar?: React.ReactNode;
  distance?: number;
  onMove?: (onBelow: boolean) => void;
}

/**
 * Get the bounding rect of the selection considering line's anchor points
 */
function getSelectionRectInDOM(editor: Editor): number[][] {
  if (editor.selection.shapes.length > 0) {
    const rects = editor.selection.shapes.map((s) =>
      s.getRectInDOM(editor.canvas, true)
    );
    return rects.reduce((acc, r) => geometry.unionRect(acc, r), rects[0]);
  }
  return [
    [0, 0],
    [0, 0],
  ];
}

export const DGMShapeToolbarHolder: React.FC<DGMShapeToolbarHolderProps> = ({
  editor,
  toolbar,
  distance = 46,
  onMove,
  ...others
}) => {
  const toolbarHolderRef = useRef<HTMLDivElement>(null);

  const [origin, setOrigin] = useState<number[]>([0, 0]);
  const [scale, setScale] = useState<number>(1);
  const [dragging, setDragging] = useState<boolean>(false);
  const [selection, setSelection] = useState<Shape[]>([]);

  useEffect(() => {
    if (editor) {
      editor.onScroll.on(handleScroll);
      editor.onZoom.on(handleZoom);
      editor.onDragStart.on(handleDragStart);
      editor.onDragEnd.on(handleDragEnd);
      editor.selection.onChange.on(handleSelectionChange);
    }
    return function cleanup() {
      if (editor) {
        editor.onScroll.off(handleScroll);
        editor.onZoom.off(handleZoom);
        editor.onDragStart.off(handleDragStart);
        editor.onDragEnd.off(handleDragEnd);
        editor.selection.onChange.off(handleSelectionChange);
      }
    };
  }, [editor]);

  useEffect(() => {
    if (editor && editor.currentPage && toolbarHolderRef.current) {
      const canvasWidth = editor.canvasElement?.offsetWidth || 0;
      const canvasHeight = editor.canvasElement?.offsetHeight || 0;
      let visible = selection.length > 0;
      let rect = getSelectionRectInDOM(editor);
      if (
        rect[1][0] < 0 ||
        rect[0][0] > canvasWidth ||
        rect[1][1] < 0 ||
        rect[0][1] > canvasHeight
      ) {
        visible = false;
      }
      if (dragging) visible = false;
      toolbarHolderRef.current.style.display = visible ? "flex" : "none";
      const onBelow = moveToAboveOrBelow(
        editor,
        toolbarHolderRef.current,
        rect,
        distance
      );
      if (onMove) onMove(onBelow);
    }
  }, [editor, origin, scale, dragging, selection]);

  const handleScroll = (origin: number[]) => setOrigin([...origin]);
  const handleZoom = (scale: number) => setScale(scale);
  const handleDragStart = () => setDragging(true);
  const handleDragEnd = () => setDragging(false);
  const handleSelectionChange = (selection: Shape[]) => setSelection(selection);

  return (
    <div
      ref={toolbarHolderRef}
      style={{
        position: "absolute",
        background: "transparent",
        zIndex: 10,
        outline: "none",
      }}
    >
      {toolbar}
    </div>
  );
};
