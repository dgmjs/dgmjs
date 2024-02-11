import { Shape, ShapeValues } from "@dgmjs/core";

export interface ShapeEditorProps {
  shapes: Shape[];
  onChange: (values: ShapeValues) => void;
}
