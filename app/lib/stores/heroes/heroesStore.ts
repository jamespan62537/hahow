import { create } from "zustand";

type HeroesStore = {
    isEdited: boolean;
    setIsEdited: (isEdited: boolean) => void;
}

const useHeroesStore = create<HeroesStore>((set) => ({
    isEdited: false,
    setIsEdited: (isEdited: boolean) => set({ isEdited }),
}));

export default useHeroesStore;
