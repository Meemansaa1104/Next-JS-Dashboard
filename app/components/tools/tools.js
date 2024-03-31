import React from 'react';
import { TbBrand4Chan } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";
import { TbArrowsSort } from "react-icons/tb";
import { CiFilter } from "react-icons/ci";
import { SiGotomeeting } from "react-icons/si";
import { MdImportExport } from "react-icons/md";

const Tools  = () => {
  return (
    <div className='flex items-center justify-between pt-3 '> 
            <ul className='flex items-center gap-4 cursor-pointer'>
                <li className='flex items-center gap-1 border border-gray-400 rounded-xl p-1 text-sm'>
                    <TbBrand4Chan className='text-slate-400 ml-1'/>
                    <span className='text-sm font-semibold'>All Brands</span> 
                    <MdArrowDropDown className='text-xl'/>
                </li>
                <li className='flex items-center gap-1 border border-gray-400 rounded-xl p-1 text-sm'>
                    <span className='text-sm font-semibold ml-1'>Desk</span>
                    <MdArrowDropDown/>
                </li>
                <li className='flex items-center gap-1 border border-gray-400 rounded-xl p-1 text-sm'>
                    <span className='text-sm font-semibold ml-1'>Tags</span>
                    <MdArrowDropDown/>
                </li>
                <li className='flex items-center gap-1 border border-gray-400 rounded-xl p-1 text-sm'>
                    <TbArrowsSort className='text-slate-400 ml-1'/>
                    <span className='text-sm font-semibold mr-1'>Sort</span>
                </li>
                <li className='flex items-center gap-1 border border-gray-400 rounded-xl p-1 text-sm'>
                    <CiFilter className='text-slate-400 ml-1'/>
                    <span className='text-sm font-semibold mr-1'>Filter</span>
                </li>
                
            </ul>
            
                <ul className='flex flex-end items-center gap-4 cursor-pointer'>
                <li className='flex items-center gap-1 border border-gray-400 rounded-xl p-1 text-sm'>
                    <SiGotomeeting className='text-slate-400 ml-1'/>
                    <span className='text-sm font-semibold mr-1'>Meeting</span>
                </li>
                <li className='flex items-center gap-1 border border-gray-400 rounded-xl p-1 text-sm'>
                    <MdImportExport className='text-slate-400 ml-1'/>
                    <span className='text-sm font-semibold mr-1'>Import/Export</span>
                </li>
            </ul>  
            
    </div>
  )
}

export default Tools 