import { atom } from "recoil"

const balanceAtom = atom<number>({
    key: "balance",
    default: 23
})

export default balanceAtom
