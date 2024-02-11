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

import React from "react";
import { Panel } from "../common/panel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Connector, Line, LineType, RouteType } from "@dgmjs/core";
import {
  LineCurveIcon,
  LineStraightIcon,
  RouteObliqueIcon,
  RouteRectilinearIcon,
} from "@/components/icons";
import { SelectArrowhead } from "./fields/select-arrowhead";
import { ShapeEditorProps } from "@/types";
import { merge } from "@/utils";

export const LinePanel: React.FC<ShapeEditorProps> = ({ shapes, onChange }) => {
  const isConnector = shapes.every((s) => s instanceof Connector);
  const lineType = merge(shapes.map((s) => (s as Line).lineType));
  const routeType = merge(shapes.map((s) => (s as Connector).routeType));
  const headEndType = merge(shapes.map((s) => (s as Line).headEndType));
  const tailEndType = merge(shapes.map((s) => (s as Line).tailEndType));

  return (
    <Panel title="Line" borderTop>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <SelectArrowhead
            id="line-head-end"
            className="rounded-r-none"
            rotate={true}
            value={tailEndType}
            onValueChange={(value) => {
              if (onChange) onChange({ tailEndType: value });
            }}
          />
          <SelectArrowhead
            id="line-tail-end"
            className="rounded-l-none ml-[-1px]"
            value={headEndType}
            onValueChange={(value) => {
              if (onChange) onChange({ headEndType: value });
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <ToggleGroup
            type="single"
            value={lineType}
            onValueChange={(value) => {
              if (onChange && value) onChange({ lineType: value });
            }}
          >
            <ToggleGroupItem size="sm" value={LineType.STRAIGHT}>
              <LineStraightIcon size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem size="sm" value={LineType.CURVE}>
              <LineCurveIcon size={16} />
            </ToggleGroupItem>
          </ToggleGroup>
          {isConnector && (
            <ToggleGroup
              type="single"
              value={routeType}
              onValueChange={(value) => {
                if (onChange && value) onChange({ routeType: value });
              }}
            >
              <ToggleGroupItem size="sm" value={RouteType.OBLIQUE}>
                <RouteObliqueIcon size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem size="sm" value={RouteType.RECTILINEAR}>
                <RouteRectilinearIcon size={16} />
              </ToggleGroupItem>
            </ToggleGroup>
          )}
        </div>
      </div>
    </Panel>
  );
};
