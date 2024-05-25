import { Editor } from "@dgmjs/core";
import { DGMEditor } from "@dgmjs/react";
import data from "./data.json";
import { useState } from "react";
import { Toolbar } from "./toolbar";

function App() {
  const [editor, setEditor] = useState<Editor | null>(null);

  const handleMount = async (editor: Editor) => {
    setEditor(editor);
    editor.loadFromJSON(data);
    editor.fitToScreen();
    window.addEventListener("resize", () => {
      editor.fit();
    });
  };

  return (
    <>
      <DGMEditor
        className="absolute inset-0 border rounded-lg"
        onMount={handleMount}
      />
      <Toolbar editor={editor} />
    </>
  );
}

export default App;
