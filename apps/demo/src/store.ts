import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface State {
  activeHandler: string | null;
  setActiveHandler: (handlerId: string | null) => void;
}

export const useStore = create<State>()(
  devtools(
    (set) => ({
      activeHandler: "Select",
      setActiveHandler: (handlerId) =>
        set((state) => ({ activeHandler: handlerId })),
    }),
    { name: "Store" }
  )
);
