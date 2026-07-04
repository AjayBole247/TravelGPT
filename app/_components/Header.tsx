"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import path from 'path'
import Link from 'next/link'
import { SignInButton, useUser } from '@clerk/nextjs'

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
     {!user ? <SignInButton mode='modal'>
     <Button>Get Started</Button>

     </SignInButton>:
     <Link href={'/create-new-trip'}>
     <Button>Create New Trip</Button>
     </Link>
    }
    </div>
  )
}

export default Header

