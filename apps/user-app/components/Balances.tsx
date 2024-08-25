"use client"

import balanceAtom from '@repo/store/atoms';
import { useRecoilState } from 'recoil';

export const Balances = ()=>{
    const [amt, setAmt] = useRecoilState(balanceAtom)

    
    return <div>
        <button className="bg-green-300 rounded-lg p-2" onClick={()=>setAmt(amt+1)} >increase balance</button>
        <button className="bg-green-300 rounded-lg p-2" onClick={()=>setAmt(amt-1)} >decrease balance</button>
        <div>the balance is: {amt}</div>
    </div>
}