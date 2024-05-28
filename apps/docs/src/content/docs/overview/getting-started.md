---
title: Getting started
sidebar:
  order: 1
---

This page explains how to quickly embed the DGM.js editor into the web.

## Create React project

First, create a React with TypeScript project. Here, Vite is used.

```sh
npm create vite@latest my-project -- --template react-ts
cd my-project
```

## Install TailwindCSS

Here, TailwindCSS is used for styling. However, you can use any other styling method you prefer, such as CSS or Styled Components.

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js title="tailwind.config.js"
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css title="src/index.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install packages

To use DGM.js, you need to install two packages as below.

```sh
npm i @dgmjs/core @dgmjs/react
```

## Insert Editor component

Before inserting the actual component, first update the `index.html`. Here, apply simple styles to the area where the editor will be inserted and load the fonts to be used.

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DGM.js example</title>
  </head>
  <body>
    <div class="text-4xl p-2 text-center">
      <a href="https://dgmjs.dev" class="underline" target="_blank">DGM.js</a> example
    </h1>
    <div id="root" class="absolute top-16 left-8 right-8 h-96"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Then, open the `App.tsx` file and insert the `<DGMEditor>` as below.

```tsx title="src/App.tsx"
import { Editor } from "@dgmjs/core";
import { DGMEditor } from "@dgmjs/react";

function App() {
  const handleMount = async (editor: Editor) => {
    editor.newDoc();
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

Now, run the application to check if the editor has been embedded. The editor area should be displayed on the screen, and you should be able to select the area using the mouse.

```sh
npm run dev
```

## Adding toolbar and palette

Let's add a toolbar for adding shapes and a palette for editing styles. You can find simple code for this on StackBlitz below.

[StackBlitz - DGM.js example](https://stackblitz.com/edit/dgmjs-example?file=src%2Fapp.tsx)