import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import type { InputProps } from "@/components/ui/input";

export interface TextFieldProps extends Omit<InputProps, "value" | "onChange"> {
  value?: string | undefined;
  onChange?: (value: string) => void;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ value, onChange, className, type, ...props }, ref) => {
    const [state, setState] = useState<string>("");

    useEffect(() => {
      setState(value ?? "");
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && typeof state === "string" && onChange) {
        onChange(state);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (typeof state === "string" && value !== state && onChange) {
        onChange(state);
      }
    };

    return (
      <Input
        type={type}
        value={state}
        className={cn("", className)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        ref={ref}
        {...props}
      />
    );
  }
);
TextField.displayName = "TextField";
