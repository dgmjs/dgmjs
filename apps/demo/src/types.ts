import { Shape, ShapeProps } from "@dgmjs/core";

export interface ShapeEditorProps {
  shapes: Shape[];
  onChange: (values: ShapeProps) => void;
}
