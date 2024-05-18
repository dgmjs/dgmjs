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
import { BoxSizeController } from "../controllers/box-size";
import { BoxMoveController } from "../controllers/box-move";
import { PathMovePointController } from "../controllers/path-move-point";
import { PathAddPointController } from "../controllers/path-add-point";

/**
 * PathManipulator
 */
class PathManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(new PathMovePointController(this));
    this.controllers.push(new PathAddPointController(this));
    this.controllers.push(new BoxRotateController(this));
    this.controllers.push(
      new BoxSizeController(this, { position: ControllerPosition.TOP })
    );
    this.controllers.push(
      new BoxSizeController(this, { position: ControllerPosition.RIGHT })
    );
    this.controllers.push(
      new BoxSizeController(this, { position: ControllerPosition.BOTTOM })
    );
    this.controllers.push(
      new BoxSizeController(this, { position: ControllerPosition.LEFT })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.LEFT_TOP,
        doScale: true,
      })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.RIGHT_TOP,
        doScale: true,
      })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.RIGHT_BOTTOM,
        doScale: true,
      })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.LEFT_BOTTOM,
        doScale: true,
      })
    );
    this.controllers.push(new BoxMoveController(this));
  }
}

manipulatorManager.define("Line", new PathManipulator());
manipulatorManager.define("Freehand", new PathManipulator());
manipulatorManager.define("Highlighter", new PathManipulator());

export { PathManipulator };
