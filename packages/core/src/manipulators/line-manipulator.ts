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
import {
  BoxRotateController,
  BoxRotateController2,
} from "../controllers/box-rotate";
import { BoxSizeController, BoxSizeController2 } from "../controllers/box-size";
import { BoxMoveController, BoxMoveController2 } from "../controllers/box-move";
import {
  LineMovePointController,
  LineMovePointController2,
} from "../controllers/line-move-point";
import {
  LineAddPointController,
  LineAddPointController2,
} from "../controllers/line-add-point";

/**
 * LineManipulator
 */
class LineManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(new LineMovePointController2(this));
    this.controllers.push(new LineAddPointController2(this));
    this.controllers.push(new BoxRotateController2(this));
    this.controllers.push(new BoxSizeController2(this, SizingPosition.TOP));
    this.controllers.push(new BoxSizeController2(this, SizingPosition.RIGHT));
    this.controllers.push(new BoxSizeController2(this, SizingPosition.BOTTOM));
    this.controllers.push(new BoxSizeController2(this, SizingPosition.LEFT));
    this.controllers.push(
      new BoxSizeController2(this, SizingPosition.LEFT_TOP)
    );
    this.controllers.push(
      new BoxSizeController2(this, SizingPosition.RIGHT_TOP)
    );
    this.controllers.push(
      new BoxSizeController2(this, SizingPosition.RIGHT_BOTTOM)
    );
    this.controllers.push(
      new BoxSizeController2(this, SizingPosition.LEFT_BOTTOM)
    );
    this.controllers.push(new BoxMoveController2(this));
  }
}

manipulatorManager.define("Line", new LineManipulator());

export { LineManipulator };
