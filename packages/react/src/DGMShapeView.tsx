import { Shape, renderOnCanvas } from "@dgmjs/core";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface DGMShapeViewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  shapes: Shape[];
  heightRatio?: number;
  darkMode?: boolean;
  maxScale?: number;
  scaleAdjust?: number;
}

export interface DGMShapeViewHandle {
  repaint: () => void;
}

export const DGMShapeView = forwardRef<DGMShapeViewHandle, DGMShapeViewProps>(
  (
    {
      shapes = [],
      heightRatio = 0.75, // 4:3
      darkMode = false,
      maxScale = 1,
      scaleAdjust = 1,
      style,
      children,
      ...others
    },
    ref
  ) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [size, setSize] = useState([0, 0]);

    const repaint = (width: number, height: number) => {
      if (canvasRef.current) {
        renderOnCanvas(
          shapes,
          canvasRef.current,
          darkMode,
          null,
          [width, height],
          maxScale,
          scaleAdjust
        );
      }
    };

    useImperativeHandle(ref, () => ({
      repaint: () => repaint(size[0], size[1]),
    }));

    useEffect(() => {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const rect = entry.contentRect;
          const { width } = rect;
          const height = Math.round(width * heightRatio);
          setSize([width, height]);
          if (wrapperRef.current) {
            wrapperRef.current.style.height = `${height}px`;
          }
          repaint(width, height);
        }
      });
      wrapperRef.current && observer.observe(wrapperRef.current);
      return () => observer.disconnect();
    }, [darkMode, shapes]);

    return (
      <div
        ref={wrapperRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...style,
        }}
        {...others}
      >
        <canvas ref={canvasRef} style={{ width: "100%" }} />
        {children}
      </div>
    );
  }
);

DGMShapeView.displayName = "DGMShapeView";
