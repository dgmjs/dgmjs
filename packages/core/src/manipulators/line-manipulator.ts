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
import { BoxSizeController } from "../controllers/box-size";
import { BoxMoveController } from "../controllers/box-move";
import { LineMovePointController } from "../controllers/line-move-point";
import { LineAddPointController } from "../controllers/line-add-point";

/**
 * LineManipulator
 */
class LineManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(new LineMovePointController(this));
    this.controllers.push(new LineAddPointController(this));
    this.controllers.push(new BoxRotateController(this));
    this.controllers.push(new BoxSizeController(this, SizingPosition.TOP));
    this.controllers.push(new BoxSizeController(this, SizingPosition.RIGHT));
    this.controllers.push(new BoxSizeController(this, SizingPosition.BOTTOM));
    this.controllers.push(new BoxSizeController(this, SizingPosition.LEFT));
    this.controllers.push(
      new BoxSizeController(this, SizingPosition.LEFT_TOP, true)
    );
    this.controllers.push(
      new BoxSizeController(this, SizingPosition.RIGHT_TOP, true)
    );
    this.controllers.push(
      new BoxSizeController(this, SizingPosition.RIGHT_BOTTOM, true)
    );
    this.controllers.push(
      new BoxSizeController(this, SizingPosition.LEFT_BOTTOM, true)
    );
    this.controllers.push(new BoxMoveController(this));
  }
}

manipulatorManager.define("Line", new LineManipulator());

export { LineManipulator };
