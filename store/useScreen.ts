import { create } from 'zustand'

type State = {
    step: "chat" | "states" | "channels" | "community" | "profile";
}

type Action = {
    setStep: (step: State["step"]) => void;
}

// Create your store, which includes both state and (optionally) actions
const useScreenStore = create<State & Action>((set) => ({
    step: "chat",
    setStep: (step) => set({ step }),
}))

export default useScreenStore;




