"use client"
import {useState} from 'react'
import Image from 'next/image'
import Logo from '@/images/Logo.png'
import MobileLogo from '@/images/mobileLogo.png'
import {FaBars} from 'react-icons/fa';
import {MdClose} from 'react-icons/md'

import {motion, AnimatePresence} from 'framer-motion';


export default function Navbar(){
    const [open, setOpen] = useState<boolean>(false);
    return(
        <div className="w-full h-[107px] bg-white flex justify-center">
            <div className="flex items-center justify-between w-full laptop:w-4/5"> 
                <div>
                    {/* desktop, tablet Logo */}
                    <Image 
                        src= {Logo}
                        width={238}
                        height={56}
                        alt="Logo"
                        className='hidden tab tablet:block  tablet:pl-4'
                    />
                    {/* mobile Logo */}
                    <Image 
                        src= {MobileLogo}
                        width={93}
                        height={56}
                        alt="Logo"
                        className='tablet:hidden pl-4'
                    />
                </div>
                <div className="flex items-center">
                    <ul className='hidden laptop:flex items-center w-full'>
                        <li>
                            <a className="linkTxt"> About </a>
                        </li>
                        <li>
                            <a className= "linkTxt"> Travel Solutions </a>
                        </li>
                        <li>
                            <a className= "linkTxt"> Our Travelers </a>
                        </li>
                        <li>
                            <a className= "linkTxt"> Pricing </a>
                        </li>
                        <li >
                            <a className= "linkTxt"> FAQ </a>
                        </li>
                    </ul>
                    <button className='btn px-4 tablet:px-8  py-4  rounded-full w-[161px] tablet:w-[221px] '>Be a Member </button>
                    <div 
                        className='laptop:hidden p-4 hover:cursor-pointer'
                        onClick={()=>setOpen(prev=>!prev)}
                    >
                        <FaBars 
                            size={28} 
                            className='text-dark'
                        />
                    </div>
                </div>
             </div>

             {/* Side Modal */}
                <AnimatePresence > 
                    {open && 
                        <motion.div
                            initial={{  x: 1000 }}
                            animate={{  x: 0 }}
                            transition={{ duration: 1}}
                            exit = {{ x : 1000}}
                            className='h-screen p-4  w-full top-0 z-50 absolute bg-secondary'
                        >
                                <div className='flex justify-between items-center'>
                                    <Image 
                                        src= {Logo}
                                        width={238}
                                        height={56}
                                        alt="Logo"
                                    /> 
                                    <div 
                                        className='p-4'
                                        onClick={()=>setOpen(false)}
                                    >
                                        <MdClose 
                                            size={28} 
                                            className='text-dark'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <ul className='w-full'>
                                        <li className='py-2'>
                                            <a className="linkTxt px-0 "> About </a>
                                        </li>
                                        <li className='py-2'>
                                            <a className= "linkTxt px-0"> Travel Solutions </a>
                                        </li>
                                        <li className='py-2'>
                                            <a className= "linkTxt px-0"> Our Travelers </a>
                                        </li>
                                        <li className='py-2'>
                                            <a className= "linkTxt px-0"> Pricing </a>
                                        </li>
                                        <li className='py-2'>
                                            <a className= "linkTxt px-0"> FAQ </a>
                                        </li>
                                    </ul>
                                </div>
                        </motion.div>
                    }
                </AnimatePresence>
        </div>
    )
}