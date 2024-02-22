import { Editor } from "@dgmjs/core";
import { EditorWithInplaceEditors } from "@dgmjs/react";

declare global {
  interface Window {
    editor: Editor;
  }
}

function App() {
  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <EditorWithInplaceEditors
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
