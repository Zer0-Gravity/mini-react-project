import { create } from "zustand";

interface PasswordProp {
    togglePass: boolean;
    setTogglePass: () => void;
}

export const usePassword = create<PasswordProp>((set) => ({
    togglePass: false,
    setTogglePass: () => set((state) => ({ togglePass: !state.togglePass })),
}));
