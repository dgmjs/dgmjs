import { Shape } from "@dgmjs/core";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface DemoState {
  theme: "light" | "dark";
  activeHandler: string | null;
  selections: Shape[];
  setTheme: (theme: "light" | "dark") => void;
  setActiveHandler: (handlerId: string | null) => void;
  setSelections: (selections: Shape[]) => void;
}

export const useDemoStore = create<DemoState>()(
  devtools(
    (set) => ({
      theme: "light",
      activeHandler: "Select",
      selections: [],
      setTheme: (theme) => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        set((state) => ({ theme }));
      },
      setActiveHandler: (handlerId) =>
        set((state) => ({ activeHandler: handlerId })),
      setSelections: (selections) => set((state) => ({ selections })),
    }),
    { name: "DemoStore" }
  )
);
