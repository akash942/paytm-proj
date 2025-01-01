"use server"

import prisma from "@repo/db/client"
import { getServerSession } from 'next-auth';
import { authOptions } from "../authConfig";

export async function createOnrampTransaction(provider: string, amount: number ) {
    // Ideally the token should come from the banking provider (hdfc/axis)

    const session = await getServerSession(authOptions)
    //@ts-ignore
    if(!session?.user || !session.user?.id){
        return {message: "Unauthenticated request"}
    }

    const token = (Math.random()*100).toString()
    await prisma.onRampTransaction.create({
        data: {
            provider,
            status: "Processing",
            startTime: new Date(),
            token: token,
            //@ts-ignore
            userId: Number(session?.user?.id),
            amount: amount*100
        }
    })

    return {message: "Done"} 
}