import { create } from "zustand";

type ModalStore = {
    isOpen: boolean;
    title: string | null;
    description: React.ReactNode | null;
    openModal: ({ title, description }: { title?: string; description: React.ReactNode }) => void;
    closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    title: null,
    description: null,
    openModal: ({ title, description }) => set({ isOpen: true, title, description }),
    closeModal: () => set({ isOpen: false, title: null, description: null }),
}))

export default useModalStore;
