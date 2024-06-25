import React from "react";
import { cn } from "@/lib/utils";

interface ToolbarProps extends React.HTMLProps<HTMLDivElement> {
  invert?: boolean;
}

export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className, invert, ...props }, ref) => {
    return (
      <div
        className={cn(
          "pointer-events-auto flex items-center rounded-full border drop-shadow-lg p-1 gap-0.5",
          invert
            ? "bg-foreground text-background"
            : "bg-background text-foreground dark:bg-gray-800 dark:border-gray-700",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);
Toolbar.displayName = "Toolbar";
