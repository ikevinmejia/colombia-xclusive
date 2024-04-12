import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function Home() {
  return (
    <main className=" w-full h-dvh bg-slate-500 gap-4 mx-auto flex flex-col justify-center items-center text-white">
      <h2 className="text-xl">WELCOME TO</h2>
      <h2 className="text-9xl font-bold">COLOMBIA</h2>
      <h1 className="text-xl">ACCESS TO MANSIONS, CARS & SECURITY, EXPERIENCES, & OUR VIP NETWORK</h1>
      <Button as={Link} href="https://wa.me/573009891646" color="primary" target="_blank" >
        BOOK YOUR TRIP
      </Button>
    </main>
  );
}
