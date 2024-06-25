import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

interface TreeProps extends React.HTMLProps<HTMLUListElement> {}

interface TreeNodeProps extends React.HTMLProps<HTMLLIElement> {
  item: React.ReactNode;
  id: string;
  level: number;
  levelIndent?: number;
  defaultIndent?: number;
  selections: string[];
}

export const TreeNode: React.FC<TreeNodeProps> = ({
  item,
  id,
  level = 0,
  levelIndent = 24,
  defaultIndent = 14,
  selections = [],
  onClick,
  className,
  children,
  ...others
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setCollapsed(!collapsed);
    e.stopPropagation();
  };
  const selected = selections.includes(id);

  return (
    <li
      data-id={id}
      data-state={collapsed}
      data-level={level}
      data-selected={selected ? "on" : "off"}
      className={cn("text-sm", selected && "bg-accent", className)}
      {...others}
    >
      <div
        className={cn(
          "flex flex-row items-center bg-background hover:bg-muted",
          selected && "bg-muted"
        )}
        style={{ paddingLeft: defaultIndent + level * levelIndent }}
        onClick={onClick as React.MouseEventHandler<HTMLDivElement> | undefined}
      >
        <div
          className="h-4 w-4 mr-2 cursor-pointer flex justify-center items-center"
          onClick={handleClick}
        >
          {Array.isArray(children) &&
            children.length > 0 &&
            (collapsed ? (
              <ChevronRightIcon className="text-muted-foreground" size={16} />
            ) : (
              <ChevronDownIcon className="text-muted-foreground" size={16} />
            ))}
        </div>
        <div className="cursor-default select-none" onDoubleClick={handleClick}>
          {item}
        </div>
      </div>
      <ul className={cn("m-0 list-none p-0", collapsed && "hidden")}>
        {children}
      </ul>
    </li>
  );
};

export const Tree: React.FC<TreeProps> = ({ className, children }) => {
  return (
    <ul className={cn("m-0 list-none p-0 text-sm", className)}>{children}</ul>
  );
};
