import { create } from "zustand";

interface ModalType {
    modalType: string | null;
    openModal: (type: string) => void;
    closeModal: () => void;
}

export const useModal = create<ModalType>((set) => ({
    modalType: null,
    openModal: (type) => set({ modalType: type }),
    closeModal: () => set({ modalType: null }),
}));
