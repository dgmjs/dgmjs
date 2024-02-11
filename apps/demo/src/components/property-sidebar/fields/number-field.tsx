import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import type { InputProps } from "@/components/ui/input";

export interface NumberFieldProps
  extends Omit<InputProps, "value" | "onChange"> {
  value?: number | undefined;
  onChange?: (value: number) => void;
}

export const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
  ({ value, onChange, className, ...props }, ref) => {
    const [state, setState] = useState<string>("");

    useEffect(() => {
      setState(value?.toString() ?? "");
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onChange) {
        const parsed = parseFloat(state);
        if (!Number.isNaN(parsed) && parsed !== value) {
          onChange(parsed);
        } else {
          setState(value?.toString() ?? "");
        }
      } else if (e.key === "ArrowUp") {
        const parsed = parseFloat(state);
        if (!Number.isNaN(parsed)) {
          setState((parsed + 1).toString());
        }
      } else if (e.key === "ArrowDown") {
        const parsed = parseFloat(state);
        if (!Number.isNaN(parsed)) {
          setState((parsed - 1).toString());
        }
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onChange) {
        const parsed = parseFloat(state);
        if (!Number.isNaN(parsed) && parsed !== value) {
          onChange(parsed);
        }
      }
    };

    return (
      <Input
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
NumberField.displayName = "NumberField";
