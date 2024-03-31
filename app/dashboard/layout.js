import React from 'react';
import Navbar from '../components/navbar';
import SideBar from '../components/sidebar/sidebar';

const LayoutPage = ({ children }) => {
  return (
    <div className='flex' >
        <div className='text-white flex-initial w-64 bg-slate-900 p-4 pb-36 mt-2 rounded-xl'>
            <SideBar/>
        </div>
        <div className='flex-1 p-4'>
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default LayoutPage;