import { cn } from "@/lib/utils";
import React from "react";
import { Label } from "@/components/ui/label";

export interface PanelProps {
  title: React.ReactNode;
  more?: React.ReactNode;
  borderTop?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  title,
  more,
  borderTop = false,
  open = true,
  onOpenChange,
  className,
  children,
}) => {
  return (
    <div className={cn("px-3", borderTop ? "border-t" : "", className)}>
      <div className="flex h-9 items-center justify-between">
        <Label>{title}</Label>
        <div className="flex flex-row items-center gap-1">{more}</div>
      </div>
      <div className="flex flex-col gap-2 pb-3">{children}</div>
    </div>
  );
};
