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

import { Manipulator, manipulatorManager } from "../editor";
import {
  SelectionsMoveController,
  SelectionsMoveController2,
} from "../controllers/selections-move";

/**
 * SelectionsManipulator
 */
class SelectionsManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(new SelectionsMoveController2(this));
  }
}

manipulatorManager.define("selections", new SelectionsManipulator());

export { SelectionsManipulator };
