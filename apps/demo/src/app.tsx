import {
  Document,
  Editor,
  FillStyle,
  Page,
  Shape,
  ShapeValues,
  Transaction,
  basicSetup,
} from "@dgmjs/core";
import { PaletteToolbar } from "./components/palette-toolbar";
import { useDemoStore } from "./demo-store";
import { Options } from "./components/options";
import { Menus } from "./components/menus";
import { PropertySidebar } from "./components/property-sidebar";
import fontJson from "./fonts.json";
import { Font, fetchFonts, insertFontsToDocument } from "./font-manager";
import { ShapeSidebar } from "./components/shape-sidebar";
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

    window.editor.factory.on("shapeInitialize", (shape: Shape) => {
      shape.strokeWidth = 2;
      shape.roughness = 1;
      shape.fillColor = "$lime9";
      shape.fillStyle = FillStyle.HACHURE;
    });

    // load from local storage
    const localData = localStorage.getItem("local-data");
    if (localData) {
      window.editor.actions.loadFromJSON(JSON.parse(localData));
    }
    console.log("doc", window.editor.store.doc);
    demoStore.setDoc(window.editor.store.doc as Document);
    demoStore.setCurrentPage(window.editor.currentPage);
    window.editor.fitToScreen();

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

  const handlePageSelect = (page: Page) => {
    window.editor.setCurrentPage(page);
    demoStore.setCurrentPage(page);
  };

  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <EditorWrapper
        className="absolute inset-0"
        theme={demoStore.theme}
        options={basicSetup()}
        showGrid={true}
        onMount={handleMount}
        onSelectionChange={handleSelectionChange}
        onActiveHandlerChange={handleActiveHandlerChange}
        onTransaction={handleTransaction}
      />
      <div className="absolute top-0 inset-x-0 h-10 border-b flex items-center justify-between bg-background">
        <Menus />

        <Options />
      </div>
      <PaletteToolbar />
      <ShapeSidebar
        doc={demoStore.doc!}
        currentPage={demoStore.currentPage}
        onSelect={handleSidebarSelect}
        onPageSelect={handlePageSelect}
      />
      <PropertySidebar
        shapes={demoStore.selection}
        onChange={handleValuesChange}
      />
    </div>
  );
}

export default App;
