import { Manipulator, manipulatorManager } from "../editor";
import { ConnectorReconnectController } from "../controllers/connector-reconnect";
import { ConnectorMoveController } from "../controllers/connector-move";
import { PathMovePointController } from "../controllers/path-move-point";
import { PathAddPointController } from "../controllers/path-add-point";

/**
 * ConnectorManipulator
 */
class ConnectorManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(new ConnectorReconnectController(this));
    this.controllers.push(
      new PathMovePointController(this, { exceptEndPoints: true })
    );
    this.controllers.push(new PathAddPointController(this));
    this.controllers.push(new ConnectorMoveController(this));
  }
}

manipulatorManager.define("Connector", new ConnectorManipulator());

export { ConnectorManipulator };
