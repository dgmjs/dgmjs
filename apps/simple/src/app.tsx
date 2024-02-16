import { DGMEditor } from "@dgmjs/react";

function App() {
  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <DGMEditor className="w-full h-full" />
    </div>
  );
}

export default App;
