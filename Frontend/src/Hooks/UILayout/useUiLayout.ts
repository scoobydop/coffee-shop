import {create} from "zustand";

interface useUILayoutProps{
    title:string
    addPageTitle: (pageTitle:string)=>void
}

export const useUILayoutStore = create<useUILayoutProps>((set)=>({
    title:"",
    addPageTitle:(pageTitle:string)=>{
        set({title:pageTitle})
    }
}))

