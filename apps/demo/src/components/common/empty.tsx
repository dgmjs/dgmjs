import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
}

export const Empty: React.FC<EmptyProps> = ({
  className,
  message,
  ...others
}) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        className
      )}
      {...others}
    >
      <Label className="text-muted-foreground font-normal">{message}</Label>
    </div>
  );
};
