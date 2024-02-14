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
import { BoxMoveController } from "../controllers/box-move";
import { BoxMoveAnchoredController } from "../controllers/box-move-anchored";
import { BoxMoveAnchorPositionController } from "../controllers/box-move-anchor-position";
import { BoxSizeController } from "../controllers/box-size";

/**
 * TextManipulator
 */
class TextManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(
      new BoxSizeController(this, SizingPosition.TOP, true)
    );
    this.controllers.push(
      new BoxSizeController(this, SizingPosition.RIGHT, true)
    );
    this.controllers.push(
      new BoxSizeController(this, SizingPosition.BOTTOM, true)
    );
    this.controllers.push(
      new BoxSizeController(this, SizingPosition.LEFT, true)
    );
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
    this.controllers.push(new BoxRotateController(this));
    this.controllers.push(new BoxMoveAnchoredController(this));
    this.controllers.push(new BoxMoveAnchorPositionController(this));
    this.controllers.push(new BoxMoveController(this));
  }
}
manipulatorManager.define("Text", new TextManipulator());

export { TextManipulator };
