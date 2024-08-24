import {create} from "zustand"

type balanceStore = {
  balance: number
  increaseBalance: () => void
}

export const useBalanceStore = create<balanceStore>((set) => ({
  balance: 0,
  increaseBalance: () => set((state)=>({balance: state.balance + 1}))
})
)