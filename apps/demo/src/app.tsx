import { useEffect } from "react";
import { Editor, basicSetup } from "dgmjs";
import { Palette } from "./components/palette";
import { useDemoStore } from "./store";
import { Button } from "./components/ui/button";
import { Options } from "./components/options";
import { Menus } from "./components/menus";

declare global {
  interface Window {
    editor: Editor;
  }
}

function App() {
  const { theme, setActiveHandler } = useDemoStore();

  useEffect(() => {
    if (!window.editor) {
      const options = basicSetup();
      const editor = new Editor(
        document.querySelector("#editor-holder") as HTMLElement,
        options
      );
      editor.setActiveHandler("Select");
      editor.fit();
      editor.setShowGrid(true);
      editor.on("handlerChange", (handlerId) => {
        setActiveHandler(handlerId);
      });
      editor.factory.on("create", (shape) => {
        editor.setActiveHandler("Select");
      });
      editor.repaint();
      window.editor = editor;
    }
  }, []);

  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <div className="absolute top-0 inset-x-0 h-10 border-b flex items-center justify-between">
        <Menus />
        <Palette />
        <Options />
      </div>
      <div className="absolute inset-x-0 top-10 bottom-0" id="editor-holder" />
    </div>
  );
}

export default App;
