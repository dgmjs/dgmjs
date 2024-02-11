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

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { colors } from "dgmjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ColorPanel } from "../../common/color-panel";
import { cn } from "@/lib/utils";
import { useDemoStore } from "@/store";

interface ColorFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | undefined;
  onValueChange: (value: string) => void;
}

function evaluateColor(theme: string, color: string): string {
  if (color.startsWith("$")) {
    return theme === "dark"
      ? colors.dark[color.substring(1)]
      : colors.light[color.substring(1)];
  }
  return color;
}

export const ColorField: React.FC<ColorFieldProps> = ({
  className,
  value,
  onValueChange,
  ...others
}) => {
  const { theme } = useDemoStore();
  const [color, setColor] = useState<string | undefined>(undefined);
  const colorValue = evaluateColor(theme, color ?? "$background");

  useEffect(() => {
    setColor(value);
  }, [value]);

  const handlePopoverOpenChange = (open: boolean) => {
    if (!open && color && onValueChange) {
      onValueChange(color);
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)} {...others}>
      <div>
        <Popover onOpenChange={handlePopoverOpenChange}>
          <PopoverTrigger asChild>
            <div
              className="h-8 w-8 rounded border cursor-pointer"
              style={
                color === "$transparent"
                  ? {
                      backgroundImage: `url('data:image/svg+xml;utf8,<svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".25" d="M0 0H3V3H0V0ZM6 3H3V6H0V9H3V12H0V15H3V12H6V15H9V12H12V15H15V12H12V9H15V6H12V3H15V0H12V3H9V0H6V3ZM6 6V3H9V6H6ZM6 9H3V6H6V9ZM9 9V6H12V9H9ZM9 9H6V12H9V9Z" fill="rgb(127,127,127)" fill-rule="evenodd" clip-rule="evenodd"></path></svg>')`,
                      backgroundRepeat: "repeat",
                    }
                  : { backgroundColor: colorValue }
              }
            />
          </PopoverTrigger>
          <PopoverContent
            side="left"
            align="start"
            sideOffset={8}
            className="w-fit text-center"
          >
            <ColorPanel
              value={value ?? evaluateColor(theme, "$background")}
              onChange={(color) => setColor(color)}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-full">
        <Input
          value={color ?? ""}
          className="h-8 text-muted-foreground"
          readOnly
        />
      </div>
    </div>
  );
};
