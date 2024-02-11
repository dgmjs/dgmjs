import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import type { TextareaProps } from "@/components/ui/textarea";

export interface TextareaFieldProps
  extends Omit<TextareaProps, "value" | "onChange"> {
  value?: string | undefined;
  onChange?: (value: string) => void;
}

export const TextareaField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(({ value, onChange, className, ...props }, ref) => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    setState(value ?? "");
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (typeof state === "string" && value !== state && onChange) {
      onChange(state);
    }
  };

  return (
    <Textarea
      value={state}
      className={cn("", className)}
      onChange={handleChange}
      onBlur={handleBlur}
      ref={ref}
      {...props}
    />
  );
});
TextareaField.displayName = "TextareaField";
