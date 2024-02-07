/*
 * Copyright (c) 2023 MKLabs. All rights reserved.
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

import { type EditorOptions } from "./editor";
import {
  SelectHandler,
  SelectHandlerConnectorExtraBehavior,
  HandHandler,
  RectangleFactoryHandler,
  EllipseFactoryHandler,
  TextFactoryHandler,
  ConnectorFactoryHandler,
  LineFactoryHandler,
  FreehandFactoryHandler,
  ImageFactoryHandler,
} from "./handlers";

export function basicSetup(options?: EditorOptions): EditorOptions {
  return {
    handlers: [
      new SelectHandler("Select", [new SelectHandlerConnectorExtraBehavior()]),
      new HandHandler("Hand"),
      new RectangleFactoryHandler("Rectangle"),
      new EllipseFactoryHandler("Ellipse"),
      new TextFactoryHandler("Text"),
      new ConnectorFactoryHandler("Connector"),
      new LineFactoryHandler("Line"),
      new FreehandFactoryHandler("Freehand"),
      new ImageFactoryHandler("Image"),
    ],
    ...(options ?? {}),
  };
}
