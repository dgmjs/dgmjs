import React, { useRef } from "react";
import { Document, Page } from "@dgmjs/core";
import { DGMShapeView, DGMShapeViewHandle } from "@dgmjs/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CopyIcon,
  RefreshCcwIcon,
  XIcon,
} from "lucide-react";

interface PageViewProps extends React.HTMLAttributes<HTMLDivElement> {
  page: Page;
  idx: number;
}

const PageView: React.FC<PageViewProps> = ({
  page,
  idx,
  className,
  ...others
}) => {
  const shapeViewRef = useRef<DGMShapeViewHandle>(null);

  return (
    <div
      key={page.id}
      className={cn(
        "text-sm px-4 py-2 cursor-pointer hover:bg-slate-50 transition-colors",
        className
      )}
      {...others}
    >
      <div>
        <DGMShapeView
          ref={shapeViewRef}
          shapes={[page as Page]}
          scaleAdjust={0.8}
          className="w-full border rounded flex items-center justify-center"
        />
      </div>
      <div className="flex flex-col items-center">
        <div>{(page as Page).name || "(Untitled)"}</div>
        <div>
          <Button
            variant="ghost"
            size="icon"
            className="w-7 h-7"
            onClick={() => {
              window.editor.actions.duplcatePage(page as Page, idx + 1);
            }}
          >
            <CopyIcon size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-7 h-7"
            onClick={() => {
              if (idx > 0)
                window.editor.actions.reorderPage(page as Page, idx - 1);
            }}
          >
            <ArrowUpIcon size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-7 h-7"
            onClick={() => {
              window.editor.actions.reorderPage(page as Page, idx + 1);
            }}
          >
            <ArrowDownIcon size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-7 h-7"
            onClick={() => {
              if (idx > 0) {
                window.editor.actions.removePage(page as Page);
              }
            }}
          >
            <XIcon size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-7 h-7"
            onClick={() => {
              shapeViewRef.current?.repaint();
            }}
          >
            <RefreshCcwIcon size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export interface PagesProps {
  doc: Document;
  currentPage: Page | null;
  onPageSelect?: (page: Page) => void;
}

export const Pages: React.FC<PagesProps> = ({
  doc,
  currentPage,
  onPageSelect,
}) => {
  return (
    <ScrollArea className="h-full w-full">
      {doc?.children.map((page, idx) => (
        <PageView
          key={page.id}
          page={page as Page}
          idx={idx}
          className={cn(page.id === currentPage?.id && "bg-slate-100")}
          onClick={() => {
            if (onPageSelect) onPageSelect(page as Page);
          }}
        />
      ))}
    </ScrollArea>
  );
};
