import { Connector, Editor, Shape, geometry } from "@dgmjs/core";
import { useEffect, useRef, useState } from "react";
import { moveToAboveOrBelow } from "./utils";

interface DGMShapeToolbarHolderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  editor?: Editor;
  toolbar?: React.ReactNode;
  distance?: number;
  onOpen?: (open: boolean, onBelow: boolean) => void;
}

/**
 * Get the bounding rect of the selection considering line's anchor points
 */
function getSelectionBoundingRect(editor: Editor): number[][] {
  const canvas = editor.canvas;
  let rect = editor.selection.getBoundingRect(canvas);
  editor.selection.shapes.forEach((shape) => {
    if (shape instanceof Connector) {
      let hp = shape.getHeadAnchorPoint();
      let tp = shape.getTailAnchorPoint();
      rect = geometry.unionRect(rect, geometry.normalizeRect([tp, hp]));
    }
  });
  return rect;
}

export const DGMShapeToolbarHolder: React.FC<DGMShapeToolbarHolderProps> = ({
  editor,
  toolbar,
  distance = 46,
  onOpen,
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
      const canvas = editor.canvas;
      const canvasWidth = editor.canvasElement?.offsetWidth || 0;
      const canvasHeight = editor.canvasElement?.offsetHeight || 0;
      let visible = selection.length > 0;
      let rect = getSelectionBoundingRect(editor).map((p) => {
        let tp = canvas.globalCoordTransform(p);
        return [tp[0] / canvas.ratio, tp[1] / canvas.ratio];
      });
      if (
        rect[1][0] < 0 ||
        rect[0][0] > canvasWidth ||
        rect[1][1] < 0 ||
        rect[0][1] > canvasHeight
      ) {
        visible = false;
      }
      const currentDisplay = toolbarHolderRef.current.style.display;
      const display = visible ? "flex" : "none";
      const onBelow = moveToAboveOrBelow(
        editor,
        toolbarHolderRef.current,
        rect,
        distance / scale
      );
      if (currentDisplay !== display) {
        toolbarHolderRef.current.style.display = display;
        if (onOpen) onOpen(display === "flex", onBelow);
      }
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
