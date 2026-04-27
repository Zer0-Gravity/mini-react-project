import { create } from "zustand";

interface PopOverState {
    activePop: string;
    isPop: (itemPop: string) => void;
}

export const usePopOver = create<PopOverState>((set) => ({
    activePop: "",
    isPop: (itemPop) => set({ activePop: itemPop }),
}));
