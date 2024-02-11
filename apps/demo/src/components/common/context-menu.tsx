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

import React, { useId } from "react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../../../components/ui/context-menu";

import {
  type MenuItem as MenuItemType,
  type Menu as MenuType,
} from "@/main-app/store/menu-store";

interface MenuProps {
  menu: MenuType;
  className?: string;
  iconByCommand?: Record<string, React.ReactNode>;
  children: React.ReactNode;
  onSelect?: (id: string, command: string, commandArgs: string) => void;
  onOpenChange?: (open: boolean) => void;
}

interface MenuItemProp {
  item: MenuItemType;
  iconByCommand?: Record<string, React.ReactNode>;
  onSelect?: (event: Event) => void;
}

export const MenuItem: React.FC<MenuItemProp> = ({
  item,
  iconByCommand,
  onSelect,
}) => {
  const id = useId();
  if (Array.isArray(item.submenu)) {
    return (
      <ContextMenuSub key={item.id}>
        <ContextMenuSubTrigger>{item.label}</ContextMenuSubTrigger>
        <ContextMenuSubContent>
          {item.submenu.map((subitem, idx) => (
            <MenuItem key={idx} item={subitem} onSelect={onSelect} />
          ))}
        </ContextMenuSubContent>
      </ContextMenuSub>
    );
  } else if (item.type === "separator") {
    return <ContextMenuSeparator key={`${item.id}-separator-${id}`} />;
  } else if (item.type === "label") {
    return (
      <ContextMenuLabel key={`${item.id}-separator-${id}`}>
        {item.label}
      </ContextMenuLabel>
    );
  } else if (item.type === "checkbox") {
    return (
      <ContextMenuCheckboxItem
        key={item.id}
        data-id={item.id}
        data-command={item.command}
        data-command-args={JSON.stringify(item["command-args"])}
        onSelect={onSelect}
        disabled={!item.enabled}
        checked={item.checked}
      >
        {item.label}
        {item.subtext && (
          <ContextMenuShortcut>{item.subtext}</ContextMenuShortcut>
        )}
      </ContextMenuCheckboxItem>
    );
  } else {
    return (
      <ContextMenuItem
        key={item.id}
        data-id={item.id}
        data-command={item.command}
        data-command-args={JSON.stringify(item["command-args"])}
        onSelect={onSelect}
        disabled={!item.enabled}
      >
        <span className="pr-6 flex items-center">
          {item.icon && (
            <span className="mr-2">
              {iconByCommand && item.command && iconByCommand[item.command]}
            </span>
          )}
          {item.label}
        </span>
        {item.subtext && (
          <ContextMenuShortcut>{item.subtext}</ContextMenuShortcut>
        )}
      </ContextMenuItem>
    );
  }
};

export const ApplicationContextMenu: React.FC<MenuProps> = ({
  menu,
  className,
  iconByCommand,
  children,
  onSelect,
  onOpenChange,
}) => {
  const handleSelect = (event: any) => {
    const id = event.target?.dataset.id;
    const command = event.target?.dataset.command;
    const commandArgs = event.target.dataset.commandArgs
      ? JSON.parse(event.target.dataset.commandArgs)
      : [];
    if (onSelect) {
      onSelect(id, command, commandArgs);
    } else {
      if (command) {
        // Use setTimeout to avoid react-remove-scroll-bar error
        setTimeout(
          async () =>
            await window.app.commands.execute(command, ...commandArgs),
          0
        );
      }
    }
  };

  return (
    <ContextMenu onOpenChange={onOpenChange}>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className={className}>
        {Array.isArray(menu) &&
          menu.map((item, idx) => (
            <MenuItem
              key={idx}
              item={item}
              onSelect={handleSelect}
              iconByCommand={iconByCommand}
            />
          ))}
      </ContextMenuContent>
    </ContextMenu>
  );
};
