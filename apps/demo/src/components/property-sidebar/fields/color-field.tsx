import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { themeColors } from "@dgmjs/core";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ColorPanel } from "../../common/color-panel";
import { cn } from "@/lib/utils";
import { useDemoStore } from "@/demo-store";

interface ColorFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | undefined;
  onValueChange: (value: string) => void;
}

function evaluateColor(theme: string, color: string): string {
  if (color.startsWith("$")) {
    return theme === "dark"
      ? themeColors.dark[color.substring(1)]
      : themeColors.light[color.substring(1)];
  }
  return color;
}

export const ColorField: React.FC<ColorFieldProps> = ({
  className,
  value,
  onValueChange,
  ...others
}) => {
  const { darkMode } = useDemoStore();
  const [color, setColor] = useState<string | undefined>(undefined);
  const colorValue = evaluateColor(
    darkMode ? "dark" : "light",
    color ?? "$background"
  );

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
        <Popover onOpenChange={handlePopoverOpenChange} modal={true}>
          <PopoverTrigger asChild>
            <div
              className="h-7 w-7 rounded border cursor-pointer"
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
              value={
                value ??
                evaluateColor(darkMode ? "dark" : "light", "$background")
              }
              onChange={(color) => setColor(color)}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-full">
        <Input
          value={color ?? ""}
          className="h-7 text-xs text-muted-foreground"
          readOnly
        />
      </div>
    </div>
  );
};
