import {create} from "zustand";
import {mountStoreDevtool} from "simple-zustand-devtools";

interface UIStore {
}


const useUIStore = create<UIStore>((_) => ({}));


if (process.env.NODE_ENV === "development")
    mountStoreDevtool('UI Store', useUIStore)


export default useUIStore;
