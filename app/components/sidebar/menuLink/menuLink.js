"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const MenuLink = ({item}) => {

  const pathname = usePathname()
  
  return (
    <Link href={item.path} className={`p-4 flex items-center gap-4 m-1 rounded-xl hover:bg-slate-600 ${pathname === item.path ? 'active:bg-slate-600' : ''}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink