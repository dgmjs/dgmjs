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
import { Diagram, Shape } from "@dgmjs/core";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TreeNode, Tree } from "@/components/common/tree";
import {
  CircleIcon,
  ComponentIcon,
  GroupIcon,
  PencilIcon,
  ShapesIcon,
  SquareIcon,
  TypeIcon,
} from "lucide-react";
import { LineIcon } from "@/components/icons";
import { useDemoStore } from "@/store";

interface ShapeTreeNodeProps {
  level: number;
  shape: Shape;
  selections: Shape[];
  onSelect?: (shape: Shape) => void;
}

interface ShapeTreeProps {
  shapes: Shape[];
  selections: Shape[];
  onSelect: (shape: Shape) => void;
}

const ShapeTreeNode: React.FC<ShapeTreeNodeProps> = ({
  level,
  shape,
  selections,
  onSelect,
}) => {
  return (
    <TreeNode
      id={shape.id}
      level={level}
      levelIndent={24}
      defaultIndent={14}
      selections={selections.map((s) => s.id)}
      item={
        <div className="flex flex-row items-center h-8">
          <div className="h-4 w-4 mr-2">
            {shape.type === "Diagram" && <ShapesIcon size={16} />}
            {shape.type === "Rectangle" && <SquareIcon size={16} />}
            {shape.type === "Ellipse" && <CircleIcon size={16} />}
            {shape.type === "Text" && <TypeIcon size={16} />}
            {shape.type === "Group" && <GroupIcon size={16} />}
            {shape.type === "Connector" && <LineIcon size={16} />}
            {shape.type === "Line" && <PencilIcon size={16} />}
          </div>
          {shape.proto && <ComponentIcon size={16} className="mr-2" />}
          <div className="truncate">
            {shape.name || (
              <span className="text-muted-foreground">({shape.type})</span>
            )}
          </div>
        </div>
      }
      onClick={(e) => {
        if (onSelect) onSelect(shape);
      }}
    >
      {shape?.children?.toReversed().map((child) => (
        <ShapeTreeNode
          key={child.id}
          level={level + 1}
          shape={child as Shape}
          selections={selections}
          onSelect={onSelect}
        />
      ))}
    </TreeNode>
  );
};

const ShapeTree: React.FC<ShapeTreeProps> = ({
  shapes,
  selections,
  onSelect,
}) => {
  return (
    <Tree>
      {shapes?.toReversed().map((shape) => (
        <ShapeTreeNode
          key={shape.id}
          level={0}
          shape={shape}
          selections={selections}
          onSelect={onSelect}
        />
      ))}
    </Tree>
  );
};

export interface LayerProps {
  diagram: Diagram | null;
  onSelect?: (selection: Shape[]) => void;
}

export const Layers: React.FC<LayerProps> = ({ diagram, onSelect }) => {
  const selections = useDemoStore((state) => state.selections);

  return (
    <ScrollArea className="h-full w-full">
      <ShapeTree
        shapes={diagram ? [diagram] : []}
        selections={selections}
        onSelect={(shape) => {
          if (onSelect) onSelect([shape]);
        }}
      />
    </ScrollArea>
  );
};
