"use client"
import {PropsWithRef, useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import Logo from '@/images/Logo.png'
import MobileLogo from '@/images/mobileLogo.png'
import NoteIcon from "@/images/note.png";
import {FaBars, FaUserTie} from 'react-icons/fa';
import {GiReceiveMoney} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import {SlArrowDown} from 'react-icons/sl'
import {LuPalmtree} from 'react-icons/lu'
import {CgAirplane} from 'react-icons/cg'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {motion, AnimatePresence} from 'framer-motion';


export default function Navbar(){
    const [open, setOpen] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(true)
    const ref = useRef<HTMLDivElement>(null);
    const outSideClickHandler  = (e : MouseEvent)=>{
        if(ref.current && !ref.current.contains(e.target as Node)){

        }
    }

    useEffect(()=>{
        document.addEventListener('click', outSideClickHandler, true);
        
        return()=>{
            document.removeEventListener('click', outSideClickHandler, false)
        }
    })


    return(
        <div className="w-full h-[107px] bg-white flex justify-center border shadow-sm">
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
                        <li className="linkTxt">
                            <a > About </a>
                        </li>
                        <li className='linkTxt relative flex items-center' onClick={()=> setShow(prev=>!prev)}>
                            <a className='pr-2'> Travel Solutions </a>
                            <SlArrowDown  size={14}/>
                            {show && <DropDownMenu ref = {ref} setOpen = {setShow} />}
                        </li>
                        <li className='linkTxt'>
                            <a> Our Travelers </a>
                        </li>
                        <li className= "linkTxt">
                            <a> Pricing </a>
                        </li>
                        <li className= "linkTxt">
                            <a > FAQ </a>
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
                            initial={{  x: 1024 }}
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
                                        className='p-4 hover:cursor-pointer'
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
                                        <li className='linkTxt py-2'>
                                            <a> About </a>
                                        </li>
                                        <li className='linkTxt py-2 flex items-center'>
                                            <a className='pr-2'> Travel Solutions </a>
                                            <SlArrowDown size={14} />
                                        </li>
                                        <li className='linkTxt py-2'>
                                            <a> Our Travelers </a>
                                        </li>
                                        <li className='linkTxt py-2'>
                                            <a> Pricing </a>
                                        </li>
                                        <li className='linkTxt py-2'>
                                            <a> FAQ </a>
                                        </li>
                                    </ul>
                                </div>
                        </motion.div>
                    }
                </AnimatePresence>
        </div>
    )
}


const DropDownMenu = ({ref} : any)=>{
   

    return(
        <div ref = {ref} className= "w-[941px] rounded-md bg-secondary h-[359px] shadow-xl absolute top-12 -left-80">
            <div className='flex justify-between w-full '>
                <div  className= "w-[385px] h-full border-primary p-[32px]">
                    <div className='flex justify-between items-center '>
                        <h6 className='font-readex_600 font-[21px] text-primary'>Travel Solutions</h6>
                        <Image 
                            src= {NoteIcon}
                            width={27}
                            height={24}
                            alt="Notes"
                        /> 
                    </div>
                    <div className='mt-6'>
                        <p className='font-sans_400 text-dark text-[16px]'> Our solutions are designed primarily to assist travelers  by providing solutions  that takes the stress and burden of the upfront leisure travel planning.</p>
                    </div>
                </div>
                <div className='p-[32px] w-[556px] text-dark font-sans_500 text-[16px]'>
                    <ul className=' divide-y'>
                        <li className='flex justify-between items-center p-4'> 
                            <p >Personalized Destinations tree-palm </p>
                            <LuPalmtree size={18} className='text-dark' />
                        </li>
                        <li className='flex justify-between items-center p-4'> 
                            <p>Expert Travel Advisors</p>
                            <FaUserTie size={18}  className='text-dark' />
                        </li>
                        <li className='flex justify-between items-center p-4'> 
                            <p>Corporate Travel  Planning </p>
                            <HiOutlineBuildingOffice2 size={18} className='text-dark' />
                        </li>
                        <li className='flex justify-between items-center p-4'> 
                            <p>Travel Sponsorship</p>
                            <GiReceiveMoney size={18} className='text-dark' />
                        </li>
                        <li className='flex justify-between items-center p-4'> 
                            <p>Travel Points & Rewards Integration</p>
                            <CgAirplane size={18} className='text-dark' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}