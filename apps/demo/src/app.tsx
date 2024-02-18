import { useEffect } from "react";
import { Diagram, Editor, Shape, ShapeValues } from "@dgmjs/core";
import { Palette } from "./components/palette";
import { useDemoStore } from "./demo-store";
import { Options } from "./components/options";
import { Menus } from "./components/menus";
import { PropertySidebar } from "./components/property-sidebar/property-sidebar";
import fontJson from "./fonts.json";
import { Font, fetchFonts, insertFontsToDocument } from "./font-manager";
import { customSetup } from "./custom-setup";
import { ShapeSidebar } from "./components/shape-sidebar/shape-sidebar";

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
      const options = customSetup();
      const editor = new Editor(
        document.querySelector("#editor-holder") as HTMLElement,
        options
      );
      editor.setActiveHandler("Select");
      editor.fit();
      editor.setShowGrid(true);
      editor.selections.on("change", (shapes: any) => {
        demoStore.setSelections([...shapes]);
      });
      editor.on("activeHandlerChange", (handlerId: any) => {
        demoStore.setActiveHandler(handlerId);
      });
      editor.factory.on("create", (shape: Shape) => {
        editor.setActiveHandler("Select");
        // if (shape instanceof Text) editor.openInplaceEditor(shape);
      });
      editor.transform.on("transaction", (tx) => {
        const data = editor.store.toJSON();
        localStorage.setItem("local-data", JSON.stringify(data));
      });

      // load from local storage
      const localData = localStorage.getItem("local-data");
      if (localData) {
        editor.store.fromJSON(JSON.parse(localData));
        editor.setDiagram(editor.store.root as Diagram);
      }

      editor.repaint();
      demoStore.setDiagram(editor.store.root as Diagram);
      window.editor = editor;
      window.addEventListener("resize", () => {
        window.editor.fit();
      });
    }
  };

  useEffect(() => {
    setupEditor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (selection: Shape[]) => {
    window.editor.selections.select(selection);
  };

  const handleValuesChange = (values: ShapeValues) => {
    const shapes = window.editor.selections.getSelections();
    window.editor.actions.update(values);
    demoStore.setSelections([...shapes]);
  };

  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <div
        className="absolute top-10 bottom-0 left-64 right-64"
        id="editor-holder"
      />
      <div className="absolute top-0 inset-x-0 h-10 border-b flex items-center justify-between bg-background">
        <Menus />
        <Palette />
        <Options />
      </div>
      <ShapeSidebar diagram={demoStore.diagram} onSelect={handleSelect} />
      <PropertySidebar
        shapes={demoStore.selections}
        onChange={handleValuesChange}
      />
    </div>
  );
}

export default App;
