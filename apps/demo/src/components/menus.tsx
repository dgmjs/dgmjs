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

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Menus() {
  return (
    <div className="flex justify-center items-center h-8 px-1">
      <Button variant="ghost" className="h-8 w-8 p-0">
        <MenuIcon size={16} />
      </Button>
    </div>
  );
}
