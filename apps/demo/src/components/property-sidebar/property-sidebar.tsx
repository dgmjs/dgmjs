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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BoxPanel } from "./box-panel";
import { TextPanel } from "./text-panel";
import { ConstraintPanel } from "./constraint-panel";
import { ExtendedPropertyPanel } from "./extended-property-panel";
import { FillPanel } from "./fill-panel";
import { ControlPanel } from "./control-panel";
import { StrokePanel } from "./stroke-panel";
import { TagPanel } from "./tag-panel";
import { Line, Box } from "@dgmjs/core";
import { LinePanel } from "./line-panel";
import { Empty } from "../common/empty";
import { PrototypePanel } from "./prototype-panel";
import { ScriptPanel } from "./script-panel";
import { AlignmentPanel } from "./alignment-panel";
import { CommonPanel } from "./shape-panel";
import { Info } from "../common/info";
import { ShapeEditorProps } from "@/types";

export const PropertySidebar: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  return (
    <div className="absolute bottom-0 right-0 top-10 w-72 border-l bg-background p-3">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <TabsContent
          value="basic"
          className="absolute bottom-0 left-0 right-0 top-12"
        >
          {shapes.length > 0 ? (
            <ScrollArea className="h-full w-full">
              <FillPanel shapes={shapes} onChange={onChange} />
              <StrokePanel shapes={shapes} onChange={onChange} />
              <CommonPanel shapes={shapes} onChange={onChange} />
              {shapes.some((s) => s instanceof Box) && (
                <>
                  <BoxPanel shapes={shapes} onChange={onChange} />
                  <TextPanel shapes={shapes} onChange={onChange} />
                </>
              )}
              {shapes.some((s) => s instanceof Line) && (
                <LinePanel shapes={shapes} onChange={onChange} />
              )}
              <AlignmentPanel shapes={shapes} onChange={onChange} />
            </ScrollArea>
          ) : (
            <Empty message="No shapes selected" />
          )}
        </TabsContent>
        <TabsContent
          value="advanced"
          className="absolute bottom-0 left-0 right-0 top-12"
        >
          {shapes.length > 0 ? (
            <ScrollArea className="h-full w-full">
              {shapes.length === 1 && (
                <>
                  <PrototypePanel shapes={shapes} onChange={onChange} />
                  <ExtendedPropertyPanel shapes={shapes} onChange={onChange} />
                  <ConstraintPanel shapes={shapes} onChange={onChange} />
                  <ScriptPanel shapes={shapes} onChange={onChange} />
                  <TagPanel shapes={shapes} onChange={onChange} />
                </>
              )}
              <ControlPanel shapes={shapes} onChange={onChange} />
            </ScrollArea>
          ) : (
            <Empty message="No shapes selected" />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
