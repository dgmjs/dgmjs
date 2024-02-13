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

import { SizingPosition } from "../graphics/const";
import { Manipulator, manipulatorManager } from "../editor";
import { BoxRotateController } from "../controllers/box-rotate";
import { GroupSizeController } from "../controllers/group-size";
import { BoxMoveController } from "../controllers/box-move";

/**
 * GroupManipulator
 */
class GroupManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(new BoxRotateController(this));
    // this.controllers.push(new GroupSizeController(this, SizingPosition.TOP));
    // this.controllers.push(new GroupSizeController(this, SizingPosition.RIGHT));
    // this.controllers.push(new GroupSizeController(this, SizingPosition.BOTTOM));
    // this.controllers.push(new GroupSizeController(this, SizingPosition.LEFT));
    this.controllers.push(
      new GroupSizeController(this, SizingPosition.LEFT_TOP)
    );
    this.controllers.push(
      new GroupSizeController(this, SizingPosition.RIGHT_TOP)
    );
    this.controllers.push(
      new GroupSizeController(this, SizingPosition.RIGHT_BOTTOM)
    );
    this.controllers.push(
      new GroupSizeController(this, SizingPosition.LEFT_BOTTOM)
    );
    this.controllers.push(new BoxMoveController(this));
  }
}

manipulatorManager.define("Group", new GroupManipulator());

export { GroupManipulator };
