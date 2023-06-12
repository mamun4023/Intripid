import Image from 'next/image'

import Logo from '@/images/Logo.png'
import MobileLogo from '@/images/mobileLogo.png'
import {FaBars} from 'react-icons/fa';


export default function Navbar(){
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
                    <div className='laptop:hidden  p-4'>
                        <FaBars 
                            size={28} 
                            className=''
                        />
                    </div>
                </div>
             </div>
        </div>
    )
}