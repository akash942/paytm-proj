import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
// import { PrismaClient } from "@repo/db/client";
import prisma from "@repo/db/client";

// const db = new PrismaClient()

export const authOptions: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
    Credentials({
      name: 'Credentials',
      credentials: {
        phone: {label: "phone no", type: "text", placeholder: "9999988888"},
        password: {label: "password", type: "password"},
      },

      // TODO: User credentials type from next-aut
      async authorize(credentials: any,req){
        // Do zod validation, OTP validation here

        const hashedPassword = await bcrypt.hash(credentials?.password,10)
        const existingUser = await prisma.user.findFirst({
          where: {number: credentials?.phone}
        })

        if(existingUser){
          const passwordValidation = await bcrypt.compare(credentials?.password,existingUser.password)
          if(passwordValidation){
            return {
              id: existingUser.id.toString(),
              phone: existingUser.number
            }
          }
          return null
        }
        

        try {
          const user = await prisma.user.create({
            data: {
              number: credentials.phone,
              password: hashedPassword,
            }
          })

          return {
            id: user.id.toString(),
            name: user.name,
            phone: user.number
          }
        } catch (e) {
          console.log(e)
        }

        return null
        
      }
    })
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({token,session}: any){
      session.user.id = token.sub

      return session
    },
    // async jwt({token,account,session}: any){
    //   const checkUser = await db.user.findFirst({where: {number: token?.phone}})
    //   // console.log("checkuser: ",checkUser)
    //   if(!checkUser){
    //     console.log("okayyy: ",account?.provider)
    //     await db.user.create({data: {number: token.phone, name: token.name, password: "none",auth_type: (account?.provider.charAt(0).toUpperCase()+account?.provider.slice(1))}})
    //   }
    //     // session.user.provider = account.provider
    //   return token
    // }
  }
};
