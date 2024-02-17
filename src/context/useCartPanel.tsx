import { create } from 'zustand'

export interface CartStateOverlay {
    open: boolean,
    togglePanel: () => void,
    openPanel: () => void,
    closePanel: () => void
}

export const useCartPanel = create<CartStateOverlay>((set, get) => ({
    open: false,
    togglePanel: () => set({ open: !get().open }),
    openPanel: () => set({ open: true }),
    closePanel: () => set({ open: false }),
  }))