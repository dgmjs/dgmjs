import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { add } from "dgmjs";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(add(1, 2));
