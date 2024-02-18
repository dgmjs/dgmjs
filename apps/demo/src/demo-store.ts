import { Diagram, Shape } from "@dgmjs/core";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface DemoState {
  scale: number;
  origin: number[];
  theme: "light" | "dark";
  activeHandler: string | null;
  diagram: Diagram | null;
  selections: Shape[];
  libraries: Diagram[];
  setScale: (scale: number) => void;
  setOrigin: (origin: [number, number]) => void;
  setTheme: (theme: "light" | "dark") => void;
  setActiveHandler: (handlerId: string | null) => void;
  setDiagram: (diagram: Diagram | null) => void;
  setSelections: (selections: Shape[]) => void;
}

export const useDemoStore = create<DemoState>()(
  devtools(
    (set) => ({
      scale: 1,
      origin: [0, 0],
      theme: "light",
      activeHandler: "Select",
      diagram: null,
      selections: [],
      libraries: [],
      setScale: (scale) => set((state) => ({ scale })),
      setOrigin: (origin) => set((state) => ({ origin })),
      setTheme: (theme) => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        set((state) => ({ theme }));
      },
      setActiveHandler: (handlerId) =>
        set((state) => ({ activeHandler: handlerId })),
      setDiagram: (diagram) => set((state) => ({ diagram })),
      setSelections: (selections) => set((state) => ({ selections })),
    }),
    { name: "DemoStore" }
  )
);
