import { Manipulator, manipulatorManager } from "../editor";
import { SelectionsMoveController } from "../controllers/selections-move";

/**
 * SelectionsManipulator
 */
class SelectionsManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(new SelectionsMoveController(this));
  }
}

manipulatorManager.define("selections", new SelectionsManipulator());

export { SelectionsManipulator };
