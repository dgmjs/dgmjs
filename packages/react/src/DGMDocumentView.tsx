import { Store } from "@dgmjs/core";
import { Page } from "@dgmjs/core";
import { shapeInstantiator } from "@dgmjs/core";
import { renderOnCanvas } from "@dgmjs/core";
import { forwardRef, useEffect, useRef } from "react";

export interface DGMDocumentViewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  documentJson: any;
  pageIndex: number;
  heightRatio?: number;
  darkMode?: boolean;
  scaleAdjust?: number;
}

export const DGMDocumentView = forwardRef<HTMLDivElement, DGMDocumentViewProps>(
  (
    {
      documentJson = {},
      pageIndex = 0,
      heightRatio = 0.75, // 4:3
      darkMode = false,
      scaleAdjust = 1,
      style,
      children,
      ...others
    },
    ref
  ) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const repaint = (width: number, height: number) => {
      if (documentJson && canvasRef.current) {
        const store = new Store(shapeInstantiator);
        store.fromJSON(documentJson);
        const doc = store.doc!;
        if (
          doc &&
          Array.isArray(doc.children) &&
          pageIndex >= 0 &&
          pageIndex < doc.children.length
        ) {
          const page = doc.children[pageIndex] as Page;
          renderOnCanvas(
            [page],
            canvasRef.current,
            darkMode,
            width,
            height,
            scaleAdjust
          );
        }
      }
    };

    useEffect(() => {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const rect = entry.contentRect;
          const { width } = rect;
          const height = Math.round(width * heightRatio);
          if (wrapperRef.current) {
            wrapperRef.current.style.height = `${height}px`;
          }
          repaint(width, height);
        }
      });
      wrapperRef.current && observer.observe(wrapperRef.current);
    }, [darkMode, documentJson]);

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

DGMDocumentView.displayName = "DGMDocumentView";
