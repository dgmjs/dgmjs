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

import { ControllerPosition } from "../graphics/const";
import { Manipulator, manipulatorManager } from "../editor";
import { BoxRotateController } from "../controllers/box-rotate";
import { BoxMoveController } from "../controllers/box-move";
import { BoxSizeController } from "../controllers/box-size";

/**
 * GroupManipulator
 */
class GroupManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(
      new BoxSizeController(this, ControllerPosition.LEFT_TOP, true, true)
    );
    this.controllers.push(
      new BoxSizeController(this, ControllerPosition.RIGHT_TOP, true, true)
    );
    this.controllers.push(
      new BoxSizeController(this, ControllerPosition.RIGHT_BOTTOM, true, true)
    );
    this.controllers.push(
      new BoxSizeController(this, ControllerPosition.LEFT_BOTTOM, true, true)
    );
    this.controllers.push(new BoxRotateController(this));
    this.controllers.push(new BoxMoveController(this));
  }
}

manipulatorManager.define("Group", new GroupManipulator());

export { GroupManipulator };
