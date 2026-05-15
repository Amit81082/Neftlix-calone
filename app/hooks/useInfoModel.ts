import {create} from "zustand";

export interface ModalStoreInterface {
 movieId?: string
 isOpen: boolean
 onOpen: (movieId?: string) => void
 onClose: () => void
}

const useInfoModel = create<ModalStoreInterface>((set) => ({
  isOpen: false,
  movieId: undefined,
  onOpen: (movieId?: string) => set({ isOpen: true, movieId }),
  onClose: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModel
