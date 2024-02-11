/*
 * Copyright (c) 2023 MKLabs. All rights reserved.
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

import { MoonIcon, SunIcon } from "lucide-react";
import { useDemoStore } from "@/store";
import { Button } from "./ui/button";

export function Options() {
  const { theme, setTheme } = useDemoStore();
  return (
    <div className="flex justify-center items-center h-8 px-1">
      <Button
        title="Dark mode"
        variant="ghost"
        className="h-8 w-8 p-0"
        onClick={() => {
          const newTheme = theme === "light" ? "dark" : "light";
          window.editor.setDarkMode(newTheme === "dark");
          setTheme(newTheme);
        }}
      >
        {theme === "dark" ? <MoonIcon size={16} /> : <SunIcon size={16} />}
      </Button>
    </div>
  );
}
