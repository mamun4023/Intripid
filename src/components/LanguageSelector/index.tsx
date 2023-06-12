'use client';
import {useEffect, useRef, useState} from "react"
import { MdOutlineLanguage } from "react-icons/md";
import {SlArrowDown} from 'react-icons/sl'
MdOutlineLanguage


const Language : string[] = [
    "English",
    "Español",
    "Français",
    "Liechtenstein",
    "Svenska",
    "中文 Chinese",
    "日本語 Nihongo"
]


export default function LanguageSelector(){
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>("English");
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    
    const setValueHandler = (e : string)=>{
        setValue(e)
        setOpen(false)
    }

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };


    const OutsideClick = (e : MouseEvent) : void =>{
        if(ref.current && !ref.current?.contains(e.target as Node)){
            setOpen(false)
        }
    }


    useEffect(()=>{
        document.addEventListener('click', OutsideClick, true);

        return ()=>{
            document.removeEventListener('click', OutsideClick, false)
        }
    },[])

    return(
        <section className="h-[40px] w-full bg-secondary flex justify-end px-5 laptop:px-10">
            <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                onClick={()=>setOpen(prev => !prev)}
                className="flex items-center hover:cursor-pointer group"
            >
                <MdOutlineLanguage color={isHovered || open ? '#925DE8' : '#31374A'} size={16} />
                <p className= {`px-2 text-[14px] text-dark font-sans_500  hover:text-info ${open? "text-infoDark" : null} `}>{value}</p>
                <SlArrowDown color={isHovered || open ? '#925DE8' : '#31374A'} size={14}  />
            </div>
            <div>
                {open && 
                    <div ref = {ref} className=" bg-white absolute right-6 top-11">
                        <ul className="border shadow-md rounded-md w-[240px] divide-y">
                            {Language.map(data =>
                                <li 
                                    key={data}
                                    onClick={()=>setValueHandler(data)} 
                                    className="
                                        labelTx1 
                                        text-[14px] 
                                        w-full 
                                        p-3
                                        px-6
                                        hover:bg-secondary
                                        hover:cursor-pointer
                                    "
                                > {data} 
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        </section>
    )
}


