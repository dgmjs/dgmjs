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
import { Document, Shape } from "@dgmjs/core";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers } from "./layers";
import { Libraries } from "./libraries";

export interface ShapeSidebarProps {
  doc: Document | null;
  onSelect?: (selection: Shape[]) => void;
}

export const ShapeSidebar: React.FC<ShapeSidebarProps> = ({
  doc,
  onSelect,
}) => {
  return (
    <div
      id="shape-sidebar"
      className="absolute bottom-4 left-4 top-12 w-64 border bg-background p-3 rounded"
    >
      <Tabs defaultValue="libraries" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="libraries">Libraries</TabsTrigger>
          <TabsTrigger value="layers">Layers</TabsTrigger>
        </TabsList>
        <TabsContent
          value="libraries"
          className="absolute bottom-0 left-0 right-0 top-12"
        >
          <Libraries />
        </TabsContent>
        <TabsContent
          value="layers"
          className="absolute bottom-0 left-0 right-0 top-12"
        >
          <Layers doc={doc} onSelect={onSelect} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
