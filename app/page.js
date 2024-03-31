"use client"
import Image from "next/image";
import LayoutPage from "./dashboard/layout";
import { BiLeftArrowAlt } from "react-icons/bi";


export default function Home() {
  
  return (
    <div>
      <div className=" absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center p-10">
        <BiLeftArrowAlt className="font-bold text-9xl animate-pulse"/>
        <span className="text-center mb-4">Click the first three options to view the actual project</span>
        <Image src="/GivenImage.jpeg" alt="image" width={500} height={500}/>
      </div>
      <div className="relative">
      <LayoutPage />
      </div>
    </div>
  );
}
