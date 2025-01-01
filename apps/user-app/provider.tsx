"use client";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>
    <RecoilRoot>{children}</RecoilRoot>
  </SessionProvider>
};
