import React from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { MdPeople } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { AiOutlineLogout } from "react-icons/ai";



const menuItems =[
  {
    title:"Features",
    list: [
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdOutlineSpaceDashboard/>,
      },
      {
        title:"Users",
        path:"/dashboard/users",
        icon:<FaUserTie/>,
      },
      {
        title:"Products",
        path:"/dashboard/products",
        icon:<FaShoppingBag/>,
      },
      {
        title:"Transactions",
        path:"/dashboard/transections",
        icon:<FaMoneyBill/>,
      },
    ],

  },
  {
    title:"Analytics",
    list:[
      {
        title:"Revenue",
        path:"/dashboard/revenue",
        icon:<MdWorkOutline/>,
      },
      {
        title:"Reports",
        path:"/dashboard/reports",
        icon:<TbReportAnalytics />,
      },
      {
        title:"Teams",
        path:"/dashboard/teams",
        icon:<MdPeople/>,
      },
    ],
  },
  {
    title:"User",
    list:[
      {
        title:"Setting",
        path:"/dashboard/setting",
        icon:<IoMdSettings/>,
      },
      {
        title:"Help",
        path:"/dashboard/help",
        icon:<IoIosHelpCircleOutline />,
      },
    ]
  }
]

const SideBar = () => {
  return (
    <div className='text-white p-1 sticky top-7'>
      <div className='flex items-center gap-2 mb-4'>
        <Image className='rounded-2xl object-cover' src="/userimage.jpg" alt='user image' width={40} height={30}/>
        <div className='flex flex-col'>
          <span className='text-sm text-gray-400'>Developer</span>
          <span className='font-bold'>Meemansaa</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className='text-gray-300 font-semibold text-sm mt-3 mb-3'>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title}/>
            ))}
          </li>
          ))}
      </ul>
      <button className='p-3 mt-2 mb-0 flex item-center gap-3 cursor-pointer rounded-xl w-full font-semibold hover:bg-slate-500'>
        <AiOutlineLogout className='text-2xl font-semibold'/>
        Logout
      </button>
    </div>
  )
}

export default SideBar;