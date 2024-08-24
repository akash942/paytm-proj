"use client"
// import React from "react"
// import {useBalance} from "@repo/store/useBalance"
// import {balanceAtom} from "@repo/store"
import {useBalanceStore} from "@repo/state-store"

// import balanceAtom from '@repo/store/atoms';
// import { useRecoilValue } from 'recoil';

export default function Balances(){
    // const amt = useBalance()
    // console.log(typeof(balanceAtom))
    // const amt = useRecoilValue(balanceAtom)
    const amt = useBalanceStore((state)=>state.balance)
    
    return <div>
        <button className="bg-green-300 rounded-lg p-2" onClick={()=>useBalanceStore((state)=>state.increaseBalance)} >increase balance</button>
        <div>the balance is: {amt}</div>
    </div>
}