import {create} from "zustand";


interface useDeleteLogoutprops {
    isModalOpen : boolean,
    showModal : ()=> void,
    closeModal : ()=> void,
}

export const useDeleteLoginStore = create<useDeleteLogoutprops>((set) => ({
    isModalOpen: false,
    showModal: () => {
        set({ isModalOpen: true });
    },
    closeModal: () => {
        set({ isModalOpen: false });
    },
}));