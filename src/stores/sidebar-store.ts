import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SidebarState = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

export const useSidebarStore = create<SidebarState>()(
  persist(
    set => ({
      isOpen: true,
      toggleIsOpen: () => set(state => ({ isOpen: !state.isOpen }))
    }),
    {
      name: 'sidebar-store'
    }
  )
);
