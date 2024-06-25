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
