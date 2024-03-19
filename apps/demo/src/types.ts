import { Shape, ObjProps } from "@dgmjs/core";

export interface ShapeEditorProps {
  shapes: Shape[];
  onChange: (values: ObjProps) => void;
}
