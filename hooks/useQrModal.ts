import { create } from 'zustand';

interface QrModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useQrModal = create<QrModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useQrModal;