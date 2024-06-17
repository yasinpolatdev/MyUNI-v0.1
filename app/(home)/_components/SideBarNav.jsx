"use client"
import { Layout, Mail, Search, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function SideBarNav({toggleSideBar}) {
    const pathName=usePathname();
    console.log(pathName)
    const menuList=[
        {
            id:1,
            name:'Browse',
            icon:Search,
            path:'/browse'
        },
        {
            id:2,
            name:'Dashboard',
            icon:Layout,
            path:'/dashboard'
        },

    ]
    const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div className='h-full bg-white border-r 
    flex flex-col overflow-y-auto shadow-md'>
        <div className='p-5 border-b z-50'>
        <a href="/">
            <Image 
            src='/myuni.png'
            alt='logo'
            width={158}
            height={60}
            />
        </a>
        </div>
        <div className='flex flex-col '>
            {menuList.map((item,index)=>(
                <Link href={item.path} key={index} className={`flex gap-2 items-center
                p-4 px-6 text-gray-500
                hover:bg-gray-100 cursor-pointer
                ${pathName==item.path?'bg-purple-50 text-purple-800':null}`}
                onClick={()=>{setActiveIndex(index);toggleSideBar(false)}}>
                    <item.icon/>
                    <h2>{item.name}</h2>
                </Link>
            ))}
        </div>
      
    </div>
  )
}

export default SideBarNav