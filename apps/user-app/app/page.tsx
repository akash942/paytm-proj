"use client"

import { Button } from "@repo/ui/button";
import Balances from '../components/Balances';

export default function Home() {


  return (<><div className="bg-red-300 flex justify-around">
    <div>hello there</div>
    <div>hello there</div>
    <div>hello there</div>
  </div>
  <Button appName="user-app">what</Button>
  <div>
    <Balances/>
  </div>
  </>
  );
}
