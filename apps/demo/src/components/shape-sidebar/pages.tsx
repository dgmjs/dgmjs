import React, { useRef } from "react";
import { Document, Page } from "@dgmjs/core";
import { DGMPageView, DGMShapeViewHandle } from "@dgmjs/react";
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
import { useDemoStore } from "@/demo-store";

interface PageViewProps extends React.HTMLAttributes<HTMLDivElement> {
  doc: Document;
  page: Page;
  idx: number;
}

const PageView: React.FC<PageViewProps> = ({
  doc,
  page,
  idx,
  className,
  ...others
}) => {
  const { theme } = useDemoStore();
  const shapeViewRef = useRef<DGMShapeViewHandle>(null);

  return (
    <div
      key={page.id}
      className={cn(
        "text-sm px-4 py-2 cursor-pointer hover:bg-muted transition-colors",
        className
      )}
      {...others}
    >
      <div>
        <DGMPageView
          ref={shapeViewRef}
          className="w-full border rounded"
          pageSize={doc.pageSize}
          page={page}
          maxScale={1}
          scaleAdjust={doc.pageSize ? 1 : 0.8}
          darkMode={theme === "dark"}
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
              window.editor.actions.duplicatePage(page as Page, idx + 1);
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
          doc={doc}
          key={page.id}
          page={page as Page}
          idx={idx}
          className={cn(page.id === currentPage?.id && "bg-muted")}
          onClick={() => {
            if (onPageSelect) onPageSelect(page as Page);
          }}
        />
      ))}
    </ScrollArea>
  );
};
