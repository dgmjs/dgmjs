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
      new BoxSizeController(this, {
        position: ControllerPosition.LEFT_TOP,
        doScale: true,
        doScaleChildren: true,
      })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.RIGHT_TOP,
        doScale: true,
        doScaleChildren: true,
      })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.RIGHT_BOTTOM,
        doScale: true,
        doScaleChildren: true,
      })
    );
    this.controllers.push(
      new BoxSizeController(this, {
        position: ControllerPosition.LEFT_BOTTOM,
        doScale: true,
        doScaleChildren: true,
      })
    );
    this.controllers.push(new BoxRotateController(this));
    this.controllers.push(new BoxMoveController(this));
  }
}

manipulatorManager.define("Group", new GroupManipulator());

export { GroupManipulator };
