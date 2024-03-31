"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoSearch } from "react-icons/io5";


const Searchbar = ({placeholder}) => {
  
  const pathname = usePathname();

 
  return (
    <div className='flex items-center gap-4 mt-2'>
        <div className='flex items-center gap-2 bg-slate-600 p-2 rounded-xl '>
               <IoSearch/>
               <input type='text' placeholder={placeholder}  className='bg-slate-600 border-none text-gray-50 outline-none'/>
        </div>
    </div>
  )
}

export default Searchbar;