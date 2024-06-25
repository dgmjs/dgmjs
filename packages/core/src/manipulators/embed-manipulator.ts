import { ControllerPosition } from "../graphics/const";
import { Manipulator, manipulatorManager } from "../editor";
import { BoxMoveController } from "../controllers/box-move";
import { BoxSizeController } from "../controllers/box-size";
import { BoxCreateConnectorController } from "../controllers/box-create-connector";

/**
 * TextManipulator
 */
class EmbedManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(
      new BoxSizeController(this, { position: ControllerPosition.TOP })
    );
    this.controllers.push(
      new BoxSizeController(this, { position: ControllerPosition.BOTTOM })
    );
    this.controllers.push(
      new BoxSizeController(this, { position: ControllerPosition.LEFT })
    );
    this.controllers.push(
      new BoxSizeController(this, { position: ControllerPosition.RIGHT })
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
    this.controllers.push(
      new BoxCreateConnectorController(this, {
        position: ControllerPosition.TOP,
      })
    );
    this.controllers.push(
      new BoxCreateConnectorController(this, {
        position: ControllerPosition.BOTTOM,
      })
    );
    this.controllers.push(
      new BoxCreateConnectorController(this, {
        position: ControllerPosition.LEFT,
      })
    );
    this.controllers.push(
      new BoxCreateConnectorController(this, {
        position: ControllerPosition.RIGHT,
      })
    );
  }
}
manipulatorManager.define("Embed", new EmbedManipulator());

export { EmbedManipulator };
