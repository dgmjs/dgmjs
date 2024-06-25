import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HexAlphaColorPicker } from "react-colorful";
import "./react-colorful.css";
import { ColorPalette, fullPalette, simplePalette } from "./color-palette";
import { useDemoStore } from "@/demo-store";

interface ColorPanelProps {
  value: string;
  onChange: (color: string) => void;
}

export const ColorPanel: React.FC<ColorPanelProps> = ({ value, onChange }) => {
  const { darkMode } = useDemoStore();

  const handleColorChange = (color: string) => {
    if (onChange) onChange(color);
  };

  return (
    <Tabs defaultValue="basic">
      <TabsList>
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="rgb">RGB</TabsTrigger>
      </TabsList>
      <TabsContent value="basic">
        <div className="flex items-center justify-center py-2">
          <ColorPalette
            theme={darkMode ? "dark" : "light"}
            palette={simplePalette}
            onClick={handleColorChange}
          />
        </div>
      </TabsContent>
      <TabsContent value="all">
        <div className="flex items-center justify-center py-2">
          <ColorPalette
            theme={darkMode ? "dark" : "light"}
            palette={fullPalette}
            className="gap-0"
            itemClassName="h-4 w-4 rounded-none hover:border"
            onClick={handleColorChange}
          />
        </div>
      </TabsContent>
      <TabsContent value="rgb">
        <div className="flex items-center justify-center py-2">
          <HexAlphaColorPicker color={value} onChange={handleColorChange} />
        </div>
      </TabsContent>
    </Tabs>
  );
};
