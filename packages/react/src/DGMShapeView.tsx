import { Shape, renderOnCanvas } from "@dgmjs/core";
import { useEffect, useRef, useState } from "react";

export interface DGMShapeViewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  shape: Shape;
  heightRatio?: number;
  darkMode?: boolean;
  scaleAdjust?: number;
}

export const DGMShapeView: React.FC<DGMShapeViewProps> = ({
  shape,
  heightRatio = 0.75, // 4:3
  darkMode = false,
  scaleAdjust = 1,
  ...others
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const rect = entry.contentRect;
        const { width } = rect;
        const height = Math.round(width * heightRatio);
        if (wrapperRef.current) {
          wrapperRef.current.style.height = `${height}px`;
        }
        if (canvasRef.current) {
          renderOnCanvas(
            shape,
            canvasRef.current,
            darkMode,
            width,
            height,
            scaleAdjust
          );
        }
      }
    });
    wrapperRef.current && observer.observe(wrapperRef.current);
  }, [darkMode, shape]);

  return (
    <div ref={wrapperRef} {...others}>
      <canvas ref={canvasRef} style={{ width: "100%" }} />
    </div>
  );
};
