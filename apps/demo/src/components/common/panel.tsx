/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
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
    <div className={cn("px-4", borderTop ? "border-t" : "", className)}>
      <div className="flex h-10 items-center justify-between">
        <Label>{title}</Label>
        <div className="flex flex-row items-center gap-1">{more}</div>
      </div>
      <div className="flex flex-col gap-2 pb-4">{children}</div>
    </div>
  );
};
