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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuShortcut,
} from "../../../components/ui/dropdown-menu";
import type {
  MenuItem as MenuItemType,
  Menu as MenuType,
} from "@/main-app/store/menu-store";
import { ExternalLinkIcon } from "lucide-react";

interface MenuProps {
  menu: MenuType;
  className?: string;
  iconByCommand?: Record<string, React.ReactNode>;
  children: React.ReactNode;
  align?: "start" | "end";
  sideOffset?: number;
  onSelect?: (id: string, command: string, commandArgs: any[]) => void;
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
      <DropdownMenuSub key={item.id}>
        <DropdownMenuSubTrigger inset={item.inset ?? false}>
          {item.label}
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          {item.submenu.map((subitem, idx) => (
            <MenuItem key={idx} item={subitem} onSelect={onSelect} />
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    );
  } else if (item.type === "separator") {
    return <DropdownMenuSeparator key={`${item.id}-separator-${id}`} />;
  } else if (item.type === "label") {
    return (
      <DropdownMenuLabel
        key={`${item.id}-separator-${id}`}
        inset={item.inset ?? false}
      >
        {item.label}
      </DropdownMenuLabel>
    );
  } else if (item.type === "checkbox") {
    return (
      <DropdownMenuCheckboxItem
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
          <DropdownMenuShortcut>{item.subtext}</DropdownMenuShortcut>
        )}
      </DropdownMenuCheckboxItem>
    );
  } else {
    return (
      <DropdownMenuItem
        inset={item.inset ?? false}
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
          <DropdownMenuShortcut>{item.subtext}</DropdownMenuShortcut>
        )}
        {!item.subtext && item.external && (
          <DropdownMenuShortcut>
            <ExternalLinkIcon size={14} />
          </DropdownMenuShortcut>
        )}
      </DropdownMenuItem>
    );
  }
};

export const Menu: React.FC<MenuProps> = ({
  menu,
  className,
  iconByCommand,
  children,
  align = "start",
  sideOffset = 8,
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
    <DropdownMenu onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        sideOffset={sideOffset}
        className={className}
      >
        {Array.isArray(menu) &&
          menu.map((item, idx) => (
            <MenuItem
              key={idx}
              item={item}
              iconByCommand={iconByCommand}
              onSelect={handleSelect}
            />
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
