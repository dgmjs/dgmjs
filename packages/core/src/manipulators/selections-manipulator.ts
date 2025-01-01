import { Manipulator, manipulatorManager } from "../editor";
import { SelectionsMoveController } from "../controllers/selections-move";
import { SelectionsSizeController } from "../controllers/selections-size";
import { ControllerPosition } from "../graphics/const";

/**
 * SelectionsManipulator
 */
class SelectionsManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(
      new SelectionsSizeController(this, {
        position: ControllerPosition.LEFT_TOP,
      })
    );
    this.controllers.push(
      new SelectionsSizeController(this, {
        position: ControllerPosition.RIGHT_TOP,
      })
    );
    this.controllers.push(
      new SelectionsSizeController(this, {
        position: ControllerPosition.RIGHT_BOTTOM,
      })
    );
    this.controllers.push(
      new SelectionsSizeController(this, {
        position: ControllerPosition.LEFT_BOTTOM,
      })
    );
    this.controllers.push(new SelectionsMoveController(this));
  }
}

manipulatorManager.define("selections", new SelectionsManipulator());

export { SelectionsManipulator };
