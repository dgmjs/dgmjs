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
import { MoreHorizontalIcon, PlusIcon, Settings2Icon } from "lucide-react";
import { Panel } from "../common/panel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Empty } from "../common/empty";
import { ScriptType } from "dgmjs";
//import { useScriptEditorDialog } from "../dialogs/script-editor-dialog";
import { Button } from "@/components/ui/button";
import { ShapeEditorProps } from "@/types";

const defaultDrawScript = `(do
  (call shape :draw canvas))`;

export const ScriptPanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  // const scriptEditorDialog = useScriptEditorDialog();

  const scripts = shapes[0].scripts;

  const addScript = (id: string) => {
    if (onChange && !scripts.some((s) => s.id === id)) {
      let defaultScript = "";
      if (id === "draw") defaultScript = defaultDrawScript;
      const s = { id, script: defaultScript };
      if (onChange) onChange({ scripts: [...scripts, s] });
    }
  };

  return (
    <Panel
      title="Scripts"
      more={
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <Button
                variant="ghost"
                className="h-6 w-6 px-0 text-muted-foreground"
              >
                <PlusIcon size={16} />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.values(ScriptType).map((id) => (
              <DropdownMenuItem key={id} onSelect={() => addScript(id)}>
                {id}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      }
      borderTop
    >
      {scripts.map((script, i) => (
        <div key={i} className="flex h-8 items-center justify-between">
          <div className="flex items-center h-full w-full text-sm pl-2 truncate border border-r-0 rounded-l">
            {script.id}
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 border rounded-none"
              onClick={async () => {
                // await scriptEditorDialog.show({
                //   id: script.id,
                //   script: script.script,
                //   onConfirm: async (value: any) => {
                //     if (onChange) {
                //       const updated = scripts.map((s, si) =>
                //         s.id === script.id ? { ...script, script: value } : s
                //       );
                //       onChange({ scripts: updated });
                //     }
                //   },
                // });
              }}
            >
              <Settings2Icon size={16} />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 border border-l-0 rounded-l-none"
                  >
                    <MoreHorizontalIcon size={16} />
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onSelect={() => {
                    const updated = scripts.filter((s, si) => si !== i);
                    if (onChange) onChange({ scripts: updated });
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
      {scripts.length === 0 && <Empty className="h-8" message="No scripts" />}
    </Panel>
  );
};
