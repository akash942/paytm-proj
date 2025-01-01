import { NextResponse } from "next/server";
// import client from "@repo/db/client"   



export const GET = async () => {
    // await client.user.create({
    //     data: {
    //         email: "akkydev@gmail.coms",
    //         name: "akkydev"
    //     }
    // })

    return NextResponse.json({msg: "data successfully added"})
}

