import { useEffect } from "react";
import {
  Box,
  Connector,
  Editor,
  ShapeValues,
  basicSetup,
  constants,
  convertDocToText,
  geometry,
} from "@dgmjs/core";
import { Palette } from "./components/palette";
import { useDemoStore } from "./store";
import { Options } from "./components/options";
import { Menus } from "./components/menus";
import { PropertySidebar } from "./components/property-sidebar/property-sidebar";
import fontJson from "./fonts.json";
import { Font, fetchFonts, insertFontsToDocument } from "./font-manager";
import { TextEditor } from "./components/text-editor/text-editor";

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
      editor.on("dblClick", (shape, x, y) => {
        editor.state.selections.deselectAll();
        demoStore.setSelections([]);
        if (!shape) {
          const textShape = editor.factory.createText([
            [x, y],
            [x, y],
          ]);
          setTimeout(() => {
            demoStore.setEditingText(textShape);
          }, 0);
        } else if (shape instanceof Image) {
          // nothing to do
        } else if (shape instanceof Box) {
          if (shape.textEditable) {
            demoStore.setEditingText(shape);
          }
        } else if (shape instanceof Connector) {
          const outline = shape.getOutline();
          const nearest = geometry.findNearestOnPath(
            [x, y],
            outline,
            constants.CONNECTION_POINT_APOTHEM * 2
          );
          const position = geometry.getPositionOnPath(outline, nearest);
          const textShape = editor.factory.createTextOnConnector(
            shape,
            position
          );
          setTimeout(() => {
            demoStore.setEditingText(textShape);
          }, 0);
        }
      });
      editor.repaint();
      window.editor = editor;
    }
  };

  useEffect(() => {
    setupEditor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleValuesChange = (values: ShapeValues) => {
    const shapes = window.editor.state.selections.getSelections();
    window.editor.actions.update(values);
    demoStore.setSelections([...shapes]);
  };

  const handleEditingTextChange = (values: ShapeValues) => {
    if (demoStore.editingText) {
      const textValue = convertDocToText(values.text).trim();
      const textShape = demoStore.editingText;
      // if text is empty, delete text
      if (
        textShape instanceof Text &&
        textShape.enable &&
        textValue.length === 0
      ) {
        window.editor.actions.delete_([textShape]);
      } else {
        window.editor.actions.update(values, [textShape]);
      }
    }
  };

  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <div className="absolute inset-0" id="editor-holder" />
      <div className="absolute top-0 inset-x-0 h-10 border-b flex items-center justify-between bg-background">
        <Menus />
        <Palette />
        <Options />
      </div>
      <PropertySidebar
        shapes={demoStore.selections}
        onChange={handleValuesChange}
      />
      {demoStore.editingText instanceof Box && (
        <TextEditor
          text={demoStore.editingText}
          onChange={handleEditingTextChange}
        />
      )}
    </div>
  );
}

export default App;
