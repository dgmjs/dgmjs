/*
 * Copyright (c) 2023 MKLabs. All rights reserved.
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
