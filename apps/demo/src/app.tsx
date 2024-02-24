import { Diagram, Editor, Shape, ShapeValues, Transaction } from "@dgmjs/core";
import { Palette } from "./components/palette";
import { useDemoStore } from "./demo-store";
import { Options } from "./components/options";
import { Menus } from "./components/menus";
import { PropertySidebar } from "./components/property-sidebar/property-sidebar";
import fontJson from "./fonts.json";
import { Font, fetchFonts, insertFontsToDocument } from "./font-manager";
import { ShapeSidebar } from "./components/shape-sidebar/shape-sidebar";
import { customSetup } from "./custom-setup";
import { EditorWrapper } from "./editor";

declare global {
  interface Window {
    editor: Editor;
  }
}

function App() {
  const demoStore = useDemoStore();

  const handleMount = async (editor: Editor) => {
    window.editor = editor;
    insertFontsToDocument(fontJson as Font[]);
    await fetchFonts(fontJson as Font[]);

    // load from local storage
    const localData = localStorage.getItem("local-data");
    if (localData) {
      window.editor.store.fromJSON(JSON.parse(localData));
      window.editor.setDiagram(window.editor.store.root as Diagram);
    }
    demoStore.setDiagram(window.editor.store.root as Diagram);

    window.addEventListener("resize", () => {
      window.editor.fit();
    });
  };

  const handleSelectionChange = (selection: Shape[]) => {
    demoStore.setSelection([...selection]);
  };

  const handleActiveHandlerChange = (handlerId: string) => {
    demoStore.setActiveHandler(handlerId);
  };

  const handleShapeCreate = (shape: Shape) => {
    window.editor.setActiveHandler("Select");
  };

  const handleTransaction = (tx: Transaction) => {
    const data = window.editor.store.toJSON();
    localStorage.setItem("local-data", JSON.stringify(data));
  };

  const handleSidebarSelect = (selection: Shape[]) => {
    window.editor.selection.select(selection);
  };

  const handleValuesChange = (values: ShapeValues) => {
    const shapes = window.editor.selection.getShapes();
    window.editor.actions.update(values);
    demoStore.setSelection([...shapes]);
  };

  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <EditorWrapper
        className="absolute top-10 bottom-0 left-64 right-64"
        theme={demoStore.theme}
        options={customSetup()}
        showGrid={true}
        onMount={handleMount}
        onSelectionChange={handleSelectionChange}
        onActiveHandlerChange={handleActiveHandlerChange}
        onShapeCreate={handleShapeCreate}
        onTransaction={handleTransaction}
      />
      <div className="absolute top-0 inset-x-0 h-10 border-b flex items-center justify-between bg-background">
        <Menus />
        <Palette />
        <Options />
      </div>
      <ShapeSidebar
        diagram={demoStore.diagram}
        onSelect={handleSidebarSelect}
      />
      <PropertySidebar
        shapes={demoStore.selection}
        onChange={handleValuesChange}
      />
    </div>
  );
}

export default App;
