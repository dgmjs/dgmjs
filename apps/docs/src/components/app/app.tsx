import { Editor, FillStyle, Shape, Text, type ShapeProps } from "@dgmjs/core";
import { DGMEditor } from "@dgmjs/react";
import data from "./data.json";
import { useState } from "react";
import { Toolbar } from "./toolbar";
import { Palette } from "./palette";

declare global {
  interface Window {
    editor: Editor;
  }
}

function App() {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [activeHandler, setActiveHandler] = useState<string>("Select");

  const handleMount = async (editor: Editor) => {
    window.editor = editor;
    setEditor(editor);
    editor.loadFromJSON(data);
    editor.fitToScreen();
    window.addEventListener("resize", () => {
      editor.fit();
    });
    setTimeout(() => {
      editor.repaint();
    }, 100);
  };

  const handleShapeInitialize = (shape: Shape) => {
    shape.fillStyle =
      shape instanceof Text ? FillStyle.NONE : FillStyle.HACHURE;
    shape.fillColor = "$green6";
    shape.fontFamily = "Gloria Hallelujah";
    shape.fontSize = 20;
    shape.roughness = 1;
  };

  const handlePropsChange = (props: ShapeProps) => {
    window.editor.actions.update(props);
  };

  return (
    <>
      <DGMEditor
        className="absolute inset-0 border rounded-lg"
        onMount={handleMount}
        onShapeInitialize={handleShapeInitialize}
        onActiveHandlerChange={(handler) => setActiveHandler(handler)}
      />
      <Toolbar
        editor={editor}
        activeHandler={activeHandler}
        onActiveHandlerChange={(handler) =>
          window.editor.activateHandler(handler)
        }
      />
      <Palette onPropsChange={handlePropsChange} />
    </>
  );
}

export default App;
