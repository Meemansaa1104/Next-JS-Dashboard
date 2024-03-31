"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";


const Navbar = () => {
 
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams); 
    params.set("q",e.target.value);
    replace(`${pathname}?${params}`);
  }

  return (
    <div className='p-3 rounded-xl bg-slate-900 flex items-center justify-between'> 
        <div className='text-white font-bold capitalize'>{pathname.split("/").pop()}</div>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2 bg-slate-600 p-2 rounded-xl'>
               <IoSearch/>
               <input type='text' placeholder='Search for...' onChange={handleSearch} className='bg-slate-600 border-none text-gray-50 outline-none'/>
            </div>
            <div className='flex gap-3'>
                <IoIosChatboxes className='text-2xl'/>
                <IoMdNotifications className='text-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;