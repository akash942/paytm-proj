"use client";
import { RecoilRoot } from "recoil";

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
