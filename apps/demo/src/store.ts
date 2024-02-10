import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface DemoState {
  theme: "light" | "dark";
  activeHandler: string | null;
  setActiveHandler: (handlerId: string | null) => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useDemoStore = create<DemoState>()(
  devtools(
    (set) => ({
      theme: "light",
      activeHandler: "Select",
      setTheme: (theme) => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        set((state) => ({ theme }));
      },
      setActiveHandler: (handlerId) =>
        set((state) => ({ activeHandler: handlerId })),
    }),
    { name: "DemoStore" }
  )
);
