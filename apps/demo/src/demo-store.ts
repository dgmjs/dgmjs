import { Document, Page, Shape } from "@dgmjs/core";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface DemoState {
  timestamp: number;
  scale: number;
  origin: number[];
  theme: "light" | "dark";
  activeHandler: string | null;
  doc: Document | null;
  currentPage: Page | null;
  selection: Shape[];
  libraries: Document[];
  setTimestamp: (timestamp: number) => void;
  setScale: (scale: number) => void;
  setOrigin: (origin: [number, number]) => void;
  setTheme: (theme: "light" | "dark") => void;
  setActiveHandler: (handlerId: string | null) => void;
  setDoc: (doc: Document | null) => void;
  setCurrentPage: (page: Page | null) => void;
  setSelection: (selections: Shape[]) => void;
}

export const useDemoStore = create<DemoState>()(
  devtools(
    (set) => ({
      timestamp: Date.now(),
      scale: 1,
      origin: [0, 0],
      theme: "light",
      activeHandler: "Select",
      doc: null,
      currentPage: null,
      selection: [],
      libraries: [],
      setTimestamp: (timestamp) => set((state) => ({ timestamp })),
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
      setDoc: (doc) => set((state) => ({ doc: doc })),
      setCurrentPage: (page) => set((state) => ({ currentPage: page })),
      setSelection: (selections) => set((state) => ({ selection: selections })),
    }),
    { name: "DemoStore" }
  )
);
