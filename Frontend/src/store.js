import { create } from 'zustand'

export const passHandlerStore = create((set)=>({
    openClose:true,
    change:()=>set((state) => ({ openClose: !state.openClose}))
}))
