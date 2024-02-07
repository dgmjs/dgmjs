import { useEffect } from "react";
import { Editor, basicSetup } from "dgmjs";

declare global {
  interface Window {
    editor: Editor;
  }
}

function App() {
  useEffect(() => {
    if (!window.editor) {
      const options = basicSetup();
      const editor = new Editor(
        document.querySelector("#editor-holder") as HTMLElement,
        options
      );
      editor.setActiveHandler("Select");
      editor.fit();
      editor.repaint();
      window.editor = editor;
    }
  }, []);

  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <div className="absolute inset-0" id="editor-holder" />
      <div className=" absolute left-2 top-2 h-12">test...</div>
    </div>
  );
}

export default App;
