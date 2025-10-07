import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GeneralState {
  isProfileSettingsModalOpen: boolean;
  isLoginModalOpen: boolean;
  isCreateRoomModalOpen: boolean;
  toggleProfileSettingsModal: () => void;
  toggleLoginModal: () => void;
  openLoginModal: () => void;
  toggleCreateRoomModal: () => void;
}

export const useGeneralStore = create<GeneralState>()(
  persist(
    (set) => ({
      isProfileSettingsModalOpen: false,
      isLoginModalOpen: false,
      isCreateRoomModalOpen: false,

      toggleProfileSettingsModal: () =>
        set((state) => ({
          isProfileSettingsModalOpen: !state.isProfileSettingsModalOpen,
        })),
      toggleLoginModal: () => {
        console.log('Toggling login modal');
        set((state) => ({
          isLoginModalOpen: !state.isLoginModalOpen,
        }));
      },
      openLoginModal: () => {
        console.log('Opening login modal');
        set((state) => ({
          isLoginModalOpen: true,
        }));
      },
      toggleCreateRoomModal: () =>
        set((state) => ({
          isCreateRoomModalOpen: !state.isCreateRoomModalOpen,
        })),
    }),
    {
      name: 'general-store',
    },
  ),
);
