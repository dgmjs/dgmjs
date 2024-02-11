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

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

export interface ToolButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  invert?: boolean;
}

export const ToolButton = React.forwardRef<HTMLButtonElement, ToolButtonProps>(
  ({ className, invert = false, ...props }, ref) => {
    return (
      <Button
        variant="ghost"
        size="icon"
        ref={ref}
        className={cn(
          "rounded-full h-8 w-8 focus:outline-none hover:text-muted-foreground dark:hover:bg-slate-700",
          invert &&
            "hover:bg-slate-700 hover:text-background dark:hover:bg-slate-200",
          className
        )}
        {...props}
      />
    );
  }
);
ToolButton.displayName = "ToolButton";
