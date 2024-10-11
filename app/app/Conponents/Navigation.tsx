import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function NavBar() {
    return (
    
    <div className="bg-gray-800 text-gray-300 flex justify-between"> 

      <div className="">
    <Image src="/Profile.jpeg" alt="Logo"  width={60} height={60} className="rounded-full mx-4 my-2"/>
    </div>

      <div className=" flex justify-end">
        <Link href="/" className="px-2 mx-2 my-6 hover:font-bold" >Home </Link>
        <Link href="/Apply" className="px-2 mx-2 my-6 hover:font-bold">Apply </Link>
        <Link href="/Result"className="px-2 mx-2 my-6 hover:font-bold"> Result</Link>
        <Link href="/About" className="px-2 mr-10 my-6 hover:font-bold">About</Link>
      </div>
      </div>


)}