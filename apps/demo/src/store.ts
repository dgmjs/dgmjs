import { Box, Shape } from "@dgmjs/core";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface DemoState {
  scale: number;
  origin: number[];
  theme: "light" | "dark";
  activeHandler: string | null;
  selections: Shape[];
  editingText: Box | null;
  setScale: (scale: number) => void;
  setOrigin: (origin: [number, number]) => void;
  setTheme: (theme: "light" | "dark") => void;
  setActiveHandler: (handlerId: string | null) => void;
  setSelections: (selections: Shape[]) => void;
  setEditingText: (text: Box | null) => void;
}

export const useDemoStore = create<DemoState>()(
  devtools(
    (set) => ({
      scale: 1,
      origin: [0, 0],
      theme: "light",
      activeHandler: "Select",
      selections: [],
      editingText: null,
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
      setSelections: (selections) => set((state) => ({ selections })),
      setEditingText: (text) =>
        set((state) => ({ editingText: text, selections: [] })),
    }),
    { name: "DemoStore" }
  )
);
