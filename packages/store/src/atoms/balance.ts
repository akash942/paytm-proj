import { atom } from "recoil"

const balanceAtom = atom<number>({
    key: "balance",
    default: 5
})

export default balanceAtom
