import React from "react";
import { Shape } from "@dgmjs/core";
import { TreeNode, Tree } from "@/components/common/tree";
import {
  AirplayIcon,
  CircleIcon,
  ComponentIcon,
  FrameIcon,
  GroupIcon,
  HighlighterIcon,
  PencilIcon,
  ScanIcon,
  ShapesIcon,
  SmileIcon,
  SquareIcon,
  StickyNoteIcon,
  TypeIcon,
} from "lucide-react";
import { ConnectorIcon, LineIcon } from "@/components/icons";

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
            {shape.type === "Doc" && <ShapesIcon size={16} />}
            {shape.type === "Page" && <StickyNoteIcon size={16} />}
            {shape.type === "Rectangle" && <SquareIcon size={16} />}
            {shape.type === "Ellipse" && <CircleIcon size={16} />}
            {shape.type === "Text" && <TypeIcon size={16} />}
            {shape.type === "Group" && <GroupIcon size={16} />}
            {shape.type === "Icon" && <SmileIcon size={16} />}
            {shape.type === "Connector" && <ConnectorIcon size={16} />}
            {shape.type === "Line" && <LineIcon size={16} />}
            {shape.type === "Freehand" && <PencilIcon size={16} />}
            {shape.type === "Highlighter" && <HighlighterIcon size={16} />}
            {shape.type === "Embed" && <ScanIcon size={16} />}
            {shape.type === "Frame" && <FrameIcon size={16} />}
            {shape.type === "Mirror" && <AirplayIcon size={16} />}
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
      {shape?.children?.toReversed().map((child: any) => (
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

export const ShapeTree: React.FC<ShapeTreeProps> = ({
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
