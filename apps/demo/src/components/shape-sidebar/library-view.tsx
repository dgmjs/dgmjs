/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import { useEffect, useRef } from "react";
import { Shape, Diagram, renderOnCanvas } from "@dgmjs/core";
import { useDemoStore } from "@/store";

export type ShapeClickEvent = (shape: Shape) => void;

export type ShapeEnterEvent = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  shape: Shape
) => void;

export type ShapeLeaveEvent = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  shape: Shape
) => void;

export type ShapeDragDropEvent = (
  event: React.DragEvent<HTMLDivElement>,
  shape: Shape
) => void;

interface PrototypeShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  theme: string;
  shape: Shape;
  width?: number;
  height?: number;
  margin?: number;
  onShapeClick?: ShapeClickEvent;
  onShapeEnter?: ShapeEnterEvent;
  onShapeLeave?: ShapeLeaveEvent;
  onShapeDragStart?: ShapeDragDropEvent;
  onShapeDragEnd?: ShapeDragDropEvent;
}

function PrototypeShape({
  theme,
  shape,
  width = 36,
  height = 36,
  margin = 2,
  onShapeClick,
  onShapeEnter,
  onShapeLeave,
  onShapeDragStart,
  onShapeDragEnd,
  ...others
}: PrototypeShapeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    renderOnCanvas(
      shape,
      theme,
      canvasRef.current as HTMLCanvasElement,
      width,
      height,
      margin
    );
  }, [shape, theme, width, height, margin]);

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (onShapeEnter) onShapeEnter(e, shape);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (onShapeLeave) onShapeLeave(e, shape);
  };

  const handleDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
    if (onShapeDragStart) onShapeDragStart(e, shape);
  };

  const handleDragEnd: React.DragEventHandler<HTMLDivElement> = (e) => {
    if (onShapeDragEnd) onShapeDragEnd(e, shape);
  };

  return (
    <div
      className="rounded-sm bg-background p-1 text-center hover:bg-muted"
      onClick={() => {
        if (onShapeClick) onShapeClick(shape);
      }}
      {...others}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: width + margin * 2,
          height: height + margin * 2,
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

interface LibraryViewProps {
  diagram: Diagram;
  shapeWidth?: number;
  shapeHeight?: number;
  shapeMargin?: number;
  onShapeClick?: (shape: Shape) => void;
  onShapeEnter?: ShapeEnterEvent;
  onShapeLeave?: ShapeLeaveEvent;
  onShapeDragStart?: ShapeDragDropEvent;
  onShapeDragEnd?: ShapeDragDropEvent;
}

export function LibraryView({
  diagram,
  shapeWidth = 36,
  shapeHeight = 36,
  shapeMargin = 2,
  onShapeClick,
  onShapeEnter,
  onShapeLeave,
  onShapeDragStart,
  onShapeDragEnd,
}: LibraryViewProps) {
  const { theme } = useDemoStore();

  return (
    <div className="flex flex-wrap gap-0.5">
      {diagram.children.map(
        (shape) =>
          (shape as Shape).proto && (
            <PrototypeShape
              key={shape.id}
              theme={theme}
              shape={shape as Shape}
              width={shapeWidth}
              height={shapeHeight}
              margin={shapeMargin}
              onShapeClick={onShapeClick}
              onShapeEnter={onShapeEnter}
              onShapeLeave={onShapeLeave}
              onShapeDragStart={onShapeDragStart}
              onShapeDragEnd={onShapeDragEnd}
            />
          )
      )}
    </div>
  );
}
