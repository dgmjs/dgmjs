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

import { Manipulator, manipulatorManager } from "../editor";
import {
  ConnectorReconnectController,
  ConnectorReconnectController2,
} from "../controllers/connector-reconnect";
import {
  ConnectorMoveSegmentController,
  ConnectorMoveSegmentController2,
} from "../controllers/connector-move-segment";
import {
  ConnectorMoveController,
  ConnectorMoveController2,
} from "../controllers/connector-move";
import {
  LineMovePointController,
  LineMovePointController2,
} from "../controllers/line-move-point";
import {
  LineAddPointController,
  LineAddPointController2,
} from "../controllers/line-add-point";

/**
 * ConnectorManipulator
 */
class ConnectorManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(new ConnectorReconnectController2(this));
    this.controllers.push(new LineMovePointController2(this, true));
    this.controllers.push(new LineAddPointController2(this));
    this.controllers.push(new ConnectorMoveSegmentController2(this));
    this.controllers.push(new ConnectorMoveController2(this));
  }
}

manipulatorManager.define("Connector", new ConnectorManipulator());

export { ConnectorManipulator };
