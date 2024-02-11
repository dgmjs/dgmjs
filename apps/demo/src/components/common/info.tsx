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

interface InfoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Info: React.FC<InfoProps> = ({
  className,
  children,

  ...others
}) => {
  return (
    <div
      className={cn(
        "border px-2 py-1.5 rounded bg-yellow-50 dark:bg-yellow-950 border-yellow-300 dark:border-yellow-800 flex items-center justify-center text-muted-foreground font-normal text-sm",
        className
      )}
      {...others}
    >
      {children}
    </div>
  );
};
