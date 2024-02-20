import { Editor } from "@dgmjs/core";
import { DGMEditor, DGMEditorWithInplaceEditors } from "@dgmjs/react";

declare global {
  interface Window {
    editor: Editor;
  }
}

function App() {
  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <DGMEditorWithInplaceEditors
        className="w-full h-full"
        showGrid={true}
        onMount={(editor) => {
          window.editor = editor;
        }}
      />
    </div>
  );
}

export default App;
