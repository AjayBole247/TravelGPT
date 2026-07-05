"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import path from 'path'
import Link from 'next/link'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

const menuOptions=[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Pricing',
        path:'/pricing'
    },
    {
        name:'Contact us',
        path:'/contact-us'
    }

]

const Header = () => {
    const {user}=useUser();
    const path=usePathname();

  return (
    <div className='flex justify-between items-center p-5'>
     {/* {Logo} */}
     <div className='flex'>

     <Image src={'/Logo.png'} alt='logo' width={50} height={50} />
     <h2 className='font-bold text-2xl pt-1.5' >Travel <span className='color text-primary'>GPT</span></h2>
     </div>
     {/* {Menu Options} */}
            
        <div className='flex gap-10 items-center '>
            {menuOptions.map((menu,index)=>(
                 <Link key={index} href={menu.path}>

                     <h2 className='font-semibold text-lg hover:text-primary transition-all duration-300'
                     >{menu.name}</h2>
                 </Link>

            ))}
        </div>

     {/* {Get Started Button} */}
     <div className='flex gap-5 items-center'>

     {!user ? <SignInButton mode='modal'>
     <Button>Get Started</Button>

     </SignInButton>:
     path=='/create-new-trip' ?
     <Link href={'/my-trips'}>
     <Button>My Trips</Button>
     </Link>

     :<Link href={'/create-new-trip'}>
     <Button>Create New Trip</Button>
     </Link>
    }
    <UserButton/>
    </div>
    </div>
  )
}

export default Header

