import { create } from 'zustand';

interface PaymentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const editQrModal = create<PaymentModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default editQrModal;