import React from 'react';
import { BiSolidSelectMultiple } from "react-icons/bi";
import { IoArchiveOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="fixed bottom-2 w-full flex justify-center items-center pr-20">
        <div className='item-center border border-gray-800 rounded-2xl mr-14 bg-slate-950'>
        <ul className='flex items-center gap-4 p-4'>
            <li className='flex items-center gap-1 border border-gray-400 rounded-xl p-1 text-sm'>
               <BiSolidSelectMultiple/>
               <span className='text-sm font-semibold'>Selected</span>
            </li>
            <li className='flex items-center gap-1 border border-gray-400 rounded-xl p-1 text-sm'>
               <IoArchiveOutline/>
               <span className='text-sm font-semibold'>Archive</span>
            </li>
            <li className='flex items-center gap-1 border border-red-700 rounded-xl p-1 text-red-600 text-sm'>
               <MdDeleteOutline/>
               <span className='text-sm font-semibold'>Delete</span>
            </li>
            <li className='flex items-center gap-1 border border-gray-400 rounded-xl p-1 text-sm'>
               <span className='text-sm font-semibold ml-1'>More</span>
               <MdArrowDropDown/>
            </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer