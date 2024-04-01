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
import { Document, Page, Shape } from "@dgmjs/core";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers } from "./layers";
import { Pages } from "./pages";

export interface ShapeSidebarProps {
  doc: Document;
  currentPage: Page | null;
  onSelect?: (selection: Shape[]) => void;
  onPageSelect?: (page: Page) => void;
}

export const ShapeSidebar: React.FC<ShapeSidebarProps> = ({
  doc,
  currentPage,
  onSelect,
  onPageSelect,
}) => {
  return (
    <div
      id="shape-sidebar"
      className="absolute inset-y-0 left-0 w-56 border-r bg-background p-2"
    >
      <Tabs defaultValue="pages" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="libraries">Libraries</TabsTrigger>
          <TabsTrigger value="layers">Layers</TabsTrigger>
        </TabsList>
        <TabsContent
          value="pages"
          className="absolute bottom-0 left-0 right-0 top-12"
        >
          <Pages
            doc={doc}
            currentPage={currentPage}
            onPageSelect={onPageSelect}
          />
        </TabsContent>
        <TabsContent
          value="libraries"
          className="absolute bottom-0 left-0 right-0 top-12"
        >
          ...
        </TabsContent>
        <TabsContent
          value="layers"
          className="absolute bottom-0 left-0 right-0 top-12"
        >
          <Layers page={currentPage} onSelect={onSelect} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
