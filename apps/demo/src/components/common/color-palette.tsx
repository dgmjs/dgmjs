import React from "react";
import { themeColors } from "@dgmjs/core";
import { cn } from "@/lib/utils";

export const simplePalette: string[][] = [
  [
    "$red5",
    "$orange5",
    "$purple5",
    "$blue5",
    "$cyan5",
    "$green5",
    "$brown5",
    "$yellow5",
    "$lime5",
    "$mint5",
    "$gray4",
    "$background",
  ],
  [
    "$red9",
    "$orange9",
    "$purple9",
    "$blue9",
    "$cyan9",
    "$green9",
    "$brown9",
    "$yellow9",
    "$lime9",
    "$mint9",
    "$gray8",
    "$transparent",
  ],
  [
    "$red11",
    "$orange11",
    "$purple11",
    "$blue11",
    "$cyan11",
    "$green11",
    "$brown11",
    "$yellow11",
    "$lime11",
    "$mint11",
    "$gray10",
    "$foreground",
  ],
];

const colors_ = [
  "slate",
  "gray",
  "red",
  "pink",
  "purple",
  "blue",
  "cyan",
  "green",
  "brown",
  "orange",
  "yellow",
  "lime",
  "mint",
];
const scales = Array.from(Array(12).keys()).map((i) => i + 1);
export const fullPalette: string[][] = colors_.map((c) =>
  scales.map((s) => `$${c}${s}`)
);

interface ColorItemProps {
  theme: string;
  value: string;
  className?: string;
  onClick?: (value: string) => void;
}

const ColorItem: React.FC<ColorItemProps> = ({
  theme,
  value,
  className,
  onClick,
}) => {
  const c = value.startsWith("$")
    ? theme === "dark"
      ? themeColors.dark[value.substring(1)]
      : themeColors.light[value.substring(1)]
    : value;

  return (
    <div
      className={cn(
        "h-[18px] w-[18px] cursor-pointer rounded-full",
        className,
        value === "$background" || value === "$transparent" ? "border" : ""
      )}
      style={
        value === "$transparent"
          ? {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".25" d="M0 0H3V3H0V0ZM6 3H3V6H0V9H3V12H0V15H3V12H6V15H9V12H12V15H15V12H12V9H15V6H12V3H15V0H12V3H9V0H6V3ZM6 6V3H9V6H6ZM6 9H3V6H6V9ZM9 9V6H12V9H9ZM9 9H6V12H9V9Z" fill="rgb(127,127,127)" fill-rule="evenodd" clip-rule="evenodd"></path></svg>')`,
              backgroundRepeat: "repeat",
            }
          : { backgroundColor: c }
      }
      onClick={() => {
        if (onClick) onClick(value);
      }}
    />
  );
};

interface ColorPaletteProps {
  theme: string;
  palette: string[][];
  itemClassName?: string;
  className?: string;
  onClick?: (value: string) => void;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  theme,
  palette,
  itemClassName,
  className,
  onClick,
}) => {
  return (
    <div>
      <div className={cn("flex flex-col gap-1", className)}>
        {palette.map((row, j) => (
          <div key={j} className={cn("flex flex-row gap-1", className)}>
            {row.map((c, i) => (
              <ColorItem
                key={i}
                className={itemClassName}
                theme={theme}
                value={c}
                onClick={(value) => {
                  if (onClick) onClick(value);
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
