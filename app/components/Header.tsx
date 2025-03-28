import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {GiRobotGolem} from "react-icons/gi"
import { IoCodeDownload } from "react-icons/io5";

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4  '>
        <div className='items-center justify-center flex flex-col gap-2'>
        <Image 
          src={assets.profile_img} 
          alt='photo' 
          className='rounded-4xl w-40 h-45 object-cover' 
          width={200} 
          height={200}
/>
            <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-serif'>I&apos;m Billy Christian Lugito <GiRobotGolem   className='w-6  '/> </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-serif'>
                
                Master Student in RWTH Aachen Germany
            </h1>
            <p className='max-w-2xl mx-auto font-serif'>
              Studying Automation Technology focuses on robotics, control systems, and industrial automation.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                
                <a href="/cv.pdf" download >
                <button 
                  className="flex flex-row justify-center items-center gap-2 px-8 py-0.5 rounded-md border-2 border-black white:border-white font-semibold bg-white text-black transition-all duration-200 text-sm 
                            shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
                            white:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
                            hover:bg-gray-100 
                            active:bg-gray-200 active:translate-y-1 active:shadow-[0px_0px_rgba(0,0,0)] active:white:shadow-[0px_0px_rgba(255,255,255)]">
                            My resume 
                    <IoCodeDownload className='size-6' />
                </button>
                </a> 
                
            </div>
        </div>
    </div>
  )
}

export default Header