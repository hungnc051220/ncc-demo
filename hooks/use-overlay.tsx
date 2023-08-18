import { create } from "zustand";

interface useOverlayStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useOverlay = create<useOverlayStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
