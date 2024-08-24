import { NextResponse } from "next/server";
import {PrismaClient} from "@repo/db/client"
// import {prisma} from "@repo/db/client"
// import client from "@repo/db/client"


const client = new PrismaClient()

export const GET = async () => {
    await client.user.create({
        data: {
            email: "check@gmail.coms",
            name: "checks"
        }
    })

    return NextResponse.json({msg: "data successfully added"})
}

