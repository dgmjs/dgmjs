import React from "react";
import { Document, Page } from "@dgmjs/core";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowDownIcon, ArrowUpIcon, CopyIcon, XIcon } from "lucide-react";

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
        <div
          key={page.id}
          onClick={() => {
            if (onPageSelect) onPageSelect(page as Page);
          }}
          className={cn(
            "text-sm px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-colors",
            currentPage?.id === page.id && "bg-slate-200"
          )}
        >
          <div>
            {idx} - {(page as Page).name || "(Untitled)"}
          </div>
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
                if (idx < doc.children.length - 1)
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
                  if (onPageSelect) onPageSelect(doc.children[idx - 1] as Page);
                }
              }}
            >
              <XIcon size={16} />
            </Button>
          </div>
        </div>
      ))}
    </ScrollArea>
  );
};
