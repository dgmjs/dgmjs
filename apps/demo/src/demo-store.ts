import { Doc, Page, Shape } from "@dgmjs/core";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface DemoState {
  scale: number;
  origin: number[];
  darkMode: boolean;
  activeHandler: string | null;
  activeHandlerLock: boolean;
  doc: Doc | null;
  currentPage: Page | null;
  selection: Shape[];
  libraries: Doc[];
  setScale: (scale: number) => void;
  setOrigin: (origin: [number, number]) => void;
  setDarkMode: (darkMode: boolean) => void;
  setActiveHandler: (handlerId: string | null) => void;
  setActiveHandlerLock: (lock: boolean) => void;
  setDoc: (doc: Doc | null) => void;
  setCurrentPage: (page: Page | null) => void;
  setSelection: (selections: Shape[]) => void;
}

export const useDemoStore = create<DemoState>()(
  devtools(
    (set) => ({
      scale: 1,
      origin: [0, 0],
      darkMode: false,
      activeHandler: "Select",
      activeHandlerLock: false,
      doc: null,
      currentPage: null,
      selection: [],
      libraries: [],
      setScale: (scale) => set((state) => ({ scale })),
      setOrigin: (origin) => set((state) => ({ origin })),
      setDarkMode: (darkMode) => {
        const root = window.document.documentElement;
        root.classList.remove("dark");
        if (darkMode) root.classList.add("dark");
        set((state) => ({ darkMode }));
      },
      setActiveHandler: (handlerId) =>
        set((state) => ({ activeHandler: handlerId })),
      setActiveHandlerLock: (lock) =>
        set((state) => ({ activeHandlerLock: lock })),
      setDoc: (doc) => set((state) => ({ doc: doc })),
      setCurrentPage: (page) => set((state) => ({ currentPage: page })),
      setSelection: (selections) => set((state) => ({ selection: selections })),
    }),
    { name: "DemoStore" }
  )
);
