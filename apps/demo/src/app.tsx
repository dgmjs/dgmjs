import { useEffect } from "react";
import { Editor, ShapeValues, basicSetup } from "@dgmjs/core";
import { Palette } from "./components/palette";
import { useDemoStore } from "./store";
import { Options } from "./components/options";
import { Menus } from "./components/menus";
import { PropertySidebar } from "./components/property-sidebar/property-sidebar";
import fontJson from "./fonts.json";
import { Font, fetchFonts, insertFontsToDocument } from "./font-manager";

declare global {
  interface Window {
    editor: Editor;
  }
}

function App() {
  const demoStore = useDemoStore();

  const setupEditor = async () => {
    insertFontsToDocument(fontJson as Font[]);
    await fetchFonts(fontJson as Font[]);
    if (!window.editor) {
      const options = basicSetup();
      const editor = new Editor(
        document.querySelector("#editor-holder") as HTMLElement,
        options
      );
      editor.setActiveHandler("Select");
      editor.fit();
      editor.setShowGrid(true);
      editor.state.selections.on("select", (shapes) => {
        demoStore.setSelections([...shapes]);
      });
      editor.on("handlerChange", (handlerId) => {
        demoStore.setActiveHandler(handlerId);
      });
      editor.factory.on("create", (shape) => {
        editor.setActiveHandler("Select");
      });
      editor.repaint();
      window.editor = editor;
    }
  };

  useEffect(() => {
    setupEditor();
  }, []);

  const handleValuesChange = (values: ShapeValues) => {
    const shapes = window.editor.state.selections.getSelections();
    window.editor.actions.update(values);
    demoStore.setSelections([...shapes]);
  };

  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <div className="absolute top-0 inset-x-0 h-10 border-b flex items-center justify-between">
        <Menus />
        <Palette />
        <Options />
      </div>
      <div className="absolute inset-x-0 top-10 bottom-0" id="editor-holder" />
      <PropertySidebar
        shapes={demoStore.selections}
        onChange={handleValuesChange}
      />
    </div>
  );
}

export default App;
