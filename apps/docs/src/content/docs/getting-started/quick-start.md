---
title: Getting Started
description: shapes ...
sidebar:
  order: 1
---

```sh
npm i @dgmjs/core @dgmjs/react
```

```ts
import { Editor } from "@dgmjs/core";
import { DGMEditor } from "@dgmjs/react";
import data from "./data.json";

function App() {
  const handleMount = async (editor: Editor) => {
    editor.loadFromJSON(data);
    editor.fitToScreen();
    window.addEventListener("resize", () => {
      editor.fit();
    });
  };

  return (
    <DGMEditor
      className="absolute inset-0 border rounded-lg"
      onMount={handleMount}
    />
  );
}

export default App;
```