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
import { TextSizeController } from "../controllers/text-size";

/**
 * TextManipulator
 */
class TextManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(new TextSizeController(this, SizingPosition.TOP));
    this.controllers.push(new TextSizeController(this, SizingPosition.RIGHT));
    this.controllers.push(new TextSizeController(this, SizingPosition.BOTTOM));
    this.controllers.push(new TextSizeController(this, SizingPosition.LEFT));
    this.controllers.push(
      new TextSizeController(this, SizingPosition.LEFT_TOP)
    );
    this.controllers.push(
      new TextSizeController(this, SizingPosition.RIGHT_TOP)
    );
    this.controllers.push(
      new TextSizeController(this, SizingPosition.RIGHT_BOTTOM)
    );
    this.controllers.push(
      new TextSizeController(this, SizingPosition.LEFT_BOTTOM)
    );
    this.controllers.push(new BoxRotateController(this));
    this.controllers.push(new BoxMoveAnchoredController(this));
    this.controllers.push(new BoxMoveAnchorPositionController(this));
    this.controllers.push(new BoxMoveController(this));
  }
}
manipulatorManager.define("Text", new TextManipulator());

export { TextManipulator };
