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

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HexAlphaColorPicker } from "react-colorful";
import "./react-colorful.css";
import { ColorPalette, fullPalette, simplePalette } from "./color-palette";
import { useDemoStore } from "@/store";

interface ColorPanelProps {
  value: string;
  onChange: (color: string) => void;
}

export const ColorPanel: React.FC<ColorPanelProps> = ({ value, onChange }) => {
  const { theme } = useDemoStore();

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
            theme={theme}
            palette={simplePalette}
            onClick={handleColorChange}
          />
        </div>
      </TabsContent>
      <TabsContent value="all">
        <div className="flex items-center justify-center py-2">
          <ColorPalette
            theme={theme}
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
