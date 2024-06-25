import React from "react";
import { Doc, Page, Shape } from "@dgmjs/core";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers } from "./layers";
import { Pages } from "./pages";

export interface ShapeSidebarProps {
  doc: Doc;
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
