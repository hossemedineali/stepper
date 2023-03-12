import { create } from 'zustand'

interface BearState {
  step: number
  setStep: (x: number) => void
}

export const useStepper = create<BearState>()((set) => ({
  step: 1,
  setStep: (x) => set((state) => ({ step: x })),
}))