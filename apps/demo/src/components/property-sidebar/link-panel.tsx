import React from "react";
import { TextField } from "./fields/text-field";
import { Panel } from "../common/panel";
import { ShapeEditorProps } from "@/types";
import { Doc } from "@dgmjs/core";

export interface LinkPanelProps extends ShapeEditorProps {
  doc: Doc;
}

export const LinkPanel: React.FC<LinkPanelProps> = ({
  doc,
  shapes,
  onChange,
}) => {
  const link = shapes[0].link;

  return (
    <Panel title="Link" borderTop>
      <div className="flex flex-col">
        <TextField
          id="shape-link-field"
          className="h-8"
          placeholder="url"
          value={link}
          onChange={(value) => {
            onChange({ link: value });
          }}
        />
      </div>
    </Panel>
  );
};
