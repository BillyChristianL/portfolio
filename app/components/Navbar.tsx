import React, { useEffect, useRef, useState } from 'react'

import {links} from "@/assets/assets"
import { FloatingDock } from './ui/floating-dock';

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef  = useRef<HTMLUListElement>(null)
   
    useEffect(()=> {
        window.addEventListener("scroll",()=> {
            if(scrollY>50){
                setIsScroll(true)

            } else {
                setIsScroll(false)
            }
        })
    })
  return (
    <>
      <nav className={`w-full fixed px-10 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 font-serif ${isScroll? "":''}`}>
    
        <div className="flex items-center justify-end w-full">
            <FloatingDock
                mobileClassName="translate-5" 
                items={links}
            />
        </div>
        
     
      </nav>
        
    </>
  )
}

export default Navbar